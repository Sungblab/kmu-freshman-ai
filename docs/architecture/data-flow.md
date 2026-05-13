# 데이터 흐름

## 1. RAG 질문 답변 흐름

```txt
사용자 질문
-> React UI
-> FastAPI /api/chat
-> intent classifier
-> 관련 user memory embedding 검색
-> retrieval router
-> 내부 RAG / Google grounding / 일정 parser 선택
-> Gemini 답변 생성
-> chat_logs, llm_usage_logs 저장
-> 답변, 추천 액션, 개인화/내부자료/웹 근거 반환
```

질문이 학교/학과 자료에 관한 것이면 Mini LLM Wiki와 raw chunk를 검색합니다. 질문이 최신 진로/취업/창업 정보에 관한 것이면 Google grounding을 사용합니다. 복합 질문은 사용자 메모리, 내부 RAG, Google grounding을 함께 사용합니다.

## 1.1 개인화 메모리 흐름

```txt
사용자 발화
-> memory extractor
-> 저장 후보 생성
-> 민감도 정책 적용
-> 자동 저장 또는 사용자 확인
-> user_memories 저장
-> embedding 생성
-> memory_events에 생성/확인/거절 기록
```

낮은 민감도 정보는 자동 저장 후 사용자에게 알려줍니다. 취업 불안, 학점 고민처럼 민감할 수 있는 정보는 저장 전 확인합니다.

## 2. 문서 ingest 흐름

```txt
data/raw Markdown 자료
-> 파일별 frontmatter metadata 확인
-> Mini LLM Wiki compiler
-> data/wiki/_index.md와 category별 wiki page 생성
-> raw/wiki markdown heading-aware chunk 분리
-> Gemini embedding 생성, 768차원
-> Supabase raw_documents, wiki_pages, document_chunks 저장
-> 검색 테스트 질문으로 품질 확인
```

Mini LLM Wiki는 원문 자료와 답변 사이의 중간 지식 계층입니다. 질문 답변에서는 `wiki_page` chunk를 우선 검색하고, 충분한 근거가 없을 때 `raw_document` chunk를 함께 사용합니다.

## 3. 추천 흐름

```txt
사용자 관심사 입력
-> FastAPI /api/recommend/*
-> profile과 user memory 조회
-> Python 딕셔너리 규칙과 점수 계산
-> 내부 RAG로 학교 자료 근거 보강
-> 필요 시 Google grounding으로 최신 정보 보강
-> Gemini로 설명 문장 생성
-> 추천 결과와 근거 반환
-> llm_usage_logs 저장
```

## 4. 일정 흐름

```txt
자연어 일정 입력
-> FastAPI /api/assignments/parse
-> Gemini Flash-Lite JSON 추출
-> 사용자 확인
-> FastAPI /api/assignments 저장
-> due_at 기준 D-day 계산
-> 사용자가 원하면 Google Calendar event 생성
-> 일정 목록 반환
```

## 5. LLM 기록 흐름

앱 안에서 Gemini API를 사용한 기록은 DB의 `llm_usage_logs`에 저장합니다. 개발 과정에서 Codex, ChatGPT, Claude, Gemini를 사용한 기록은 `docs/llm/usage-log.md`에 남깁니다.
