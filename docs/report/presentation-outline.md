# 발표자료 구성

발표영상은 20-25분을 목표로 합니다.

## 1. 주제 소개

- 국민대 소프트웨어융합대학 개인화 AI 내비게이터
- 학년별 학업/진로/프로젝트/일정 고민
- 왜 도메인 특화 RAG와 개인화 메모리가 필요한가

## 2. 시스템 구조

- React UI
- FastAPI Python backend
- Supabase Auth/Postgres/pgvector
- Gemini API
- Mini LLM Wiki와 RAG 흐름
- 사용자 프로필/메모리와 memory events
- Google Search grounding과 Google Calendar API

## 3. 기능 데모

1. 온보딩과 필수 프로필 설정
2. 대화형 선택지로 관심/고민 메모리 저장
3. 개인화 RAG 상담 질문
4. 개인화 근거, 내부 자료, 최신 웹 근거 확인
5. 프로젝트/진로 추천
6. 자연어 일정 등록
7. D-day와 Google Calendar 내보내기
8. 메모리와 LLM 활용 기록 확인

## 4. 코드 설명

- FastAPI route 구조
- 메모리 저장 정책과 민감도 판단
- 추천 규칙 딕셔너리
- 조건문 분기
- chunk 반복 처리
- D-day 계산 함수
- Calendar 내보내기 중복 방지
- LLM usage log 저장

## 5. LLM 활용과 협업 방식

- Codex로 PRD 분석, spec 작성, plan 작성, 문서 구조 설계
- Gemini API로 앱 기능 구현
- Google grounding으로 최신 정보 보강
- 팀원이 직접 검토하고 설명 가능한 코드로 수정

## 6. 한계와 개선 방향

- 자료 최신화
- 더 많은 학과 확장
- Google Calendar 양방향 동기화
- eCampus 직접 연동
- RAG 평가 자동화
