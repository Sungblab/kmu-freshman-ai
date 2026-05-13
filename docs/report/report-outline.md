# 보고서 목차

보고서는 6-10페이지 분량을 목표로 합니다.

1. 프로젝트 개요
   - 프로젝트명
   - 개발 배경
   - 대상 사용자
   - 문제 정의
   - 신입생 전용에서 소프트웨어융합대학 전체 학년으로 확장한 이유

2. 개발 목적
   - 신입생 정보 탐색 문제 해결
   - 도메인 특화 RAG 챗봇 구현
   - 개인화 메모리 기반 학업/진로/프로젝트 상담
   - 추천과 일정/Calendar 관리 제공

3. 기술 스택
   - React + Vite + TypeScript
   - FastAPI + Python
   - Supabase Auth/Postgres/pgvector
   - Gemini API
   - Google Search grounding
   - Google Calendar API

4. 주요 기능
   - 개인화 AI 상담
   - 학교/학과 자료 기반 RAG
   - 진로/취업/창업 grounding
   - 트랙/활동/프로젝트 추천
   - 자연어 일정 관리와 Google Calendar 내보내기
   - LLM 활용 기록

5. 시스템 구조
   - 전체 아키텍처
   - API 흐름
   - DB 구조
   - 프로필/메모리/메모리 이벤트 구조
   - 내부 RAG와 Google grounding 라우팅

6. 코드 구조와 주요 코드 설명
   - 사용자 입력 처리
   - 메모리 저장 정책과 민감도 판단
   - 추천 조건문
   - 문서 검색 함수
   - Gemini 호출 함수
   - D-day 계산 함수
   - Calendar 내보내기 중복 방지
   - 로그 저장 함수

7. 실행 결과
   - 온보딩/홈 화면
   - 개인화 챗봇 답변
   - 근거 보기: 개인화 근거, 내부 자료, 최신 웹 근거
   - 추천 결과
   - 일정 등록과 Google Calendar 내보내기
   - LLM 활용 기록 화면

8. LLM 활용 방식
   - Gemini API 사용 위치
   - Codex/Superpowers 개발 보조 방식
   - AGENTS.md 기반 repo 규칙과 문서 읽기 순서
   - Codex 전용 스킬과 개발 현황 추적 스킬
   - spec/plan/verification으로 구성한 LLM 개발 하네스
   - 직접 수정/검증한 내용

9. 한계와 개선 방향
   - 자료 범위 한계
   - 전체 학과 확장
   - Calendar 연동
   - RAG 품질 개선
