---
author: AI Makers Club
pubDatetime: 2025-10-04T23:45:41.531Z
title: "Build Your First Voice AI Agent in 20 Minutes with LiveKit (Open Source)"
slug: TXVyxJdlzQs
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**Vapi, Synthflow, Bland.ai와 같은 음성 AI 플랫폼**은 입문자에게는 좋지만, 인프라 직접 제어 불가, 느린 응답, 비싼 과금, 커스터마이즈의 한계 등 여러"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/TXVyxJdlzQs/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Build Your First Voice AI Agent in 20 Minutes with LiveKit (Open Source)](https://www.youtube.com/watch?v=TXVyxJdlzQs)  
**채널명:** Cole Medin

## *LiveKit으로 20분만에 나만의 첫 음성 AI 에이전트 만들기 (오픈소스)* 핵심 요약

- **Vapi, Synthflow, Bland.ai와 같은 음성 AI 플랫폼**은 입문자에게는 좋지만, 인프라 직접 제어 불가, 느린 응답, 비싼 과금, 커스터마이즈의 한계 등 여러 단점이 있음.
- **LiveKit은 오픈소스 Python 프레임워크**로, 코드 기반의 에이전트 구축, 커스텀 대화 로직, 도구 및 MCP 서버와의 직접 통합, 셀프 호스팅 및 클라우드 배포 지원 등 유연성과 확장성이 뛰어남.
- 영상에서는 **LiveKit의 GitHub 예제 저장소**를 바탕으로 가장 기본적인 음성 에이전트 제작 과정을 단계별로 시연.
- **환경 변수 세팅, 에이전트 클래스(assistant) 정의, 음성 파이프라인(speech-to-text, LLM, text-to-speech) 구성**까지 52줄의 간단한 코드만으로 로컬에서 음성 AI 에이전트 구현.
- **에이전트에 도구(tool) 추가**: Python 함수 + @function_tool 데코레이터로 간단히 기능 추가(예: 현재 시간 조회), 도큐먼트 문자열에 인자와 활용법 기재.
- **에어비앤비 모의 데이터와 검색/예약 기능 DEMO**: 대화형으로 도시별 에어비앤비 검색 및 예약, 인자 미확보 시 추가 질의, 실제 대화 예시 포함.
- **실제 Airbnb API 연동**: Docker MCP 게이트웨이, streamable HTTP 프로토콜로 실시간 검색, LiveKit의 MCP 서버 연결 방식 설명.
- **Cloud 배포 과정**: LiveKit Cloud 계정 생성, CLI 설치 및 인증, 환경변수 등록(.env), 에이전트 시작(setup), 배포(agent create)까지 실제 커맨드 라인 예시와 함께 구체적 소개.
- **배포 후 브라우저 Playground에서 즉시 테스트** 가능, 전화번호 부여 등 다양한 활용으로 확장 가능.
- **LiveKit의 확장성·통합성 강조**: 이벤트 기반 대화흐름, 고도화된 툴, 다중 에이전트 워크플로우 등 지향점 안내.

---

## 세부 요약 - 주제별 정리

### 기존 상용 음성 AI 플랫폼들은 속도, 비용, 커스터마이즈 측면에서 한계가 명확함

- Vapi, Synthflow, Bland.ai 등은 음성 AI 입문에 용이하나 실제 비즈니스 활용에 제약이 있음.
- 대표적인 문제점:
  - 사용자가 자체 인프라 운영 불가, 서버는 완전한 '블랙박스'.
  - 도구 호출이 느리고 응답 지연 발생.
  - 분당 과금 모델로 비용이 빠르게 증가(프리미엄 요금).
  - 커스텀 도구 및 로직 추가, 대화 설계에 심각한 한계.
- 실제로 Vapi에서 커스텀 솔루션으로 마이그레이션한 사례들을 언급.

### LiveKit은 오픈소스 기반으로 음성 AI 에이전트 제작에서 완전한 제어와 확장성을 제공함

- LiveKit의 주요 특징:
  - Python 오픈소스 프레임워크, 직접 코드 작성 가능.
  - 대화 로직, 워크플로우, 툴/외부 시스템(MCP 등)과의 직접 통합 가능.
  - 셀프 호스팅 및 LiveKit 클라우드 배포 모두 지원.
  - 빠르고 안정적이며, 대규모 확장성 확보.
  - 기존 상용 제품 대비 커스터마이즈 및 통제력, 비용 효율, 개발자 친화성이 강점.
- 첫 사용 시 복잡할 것 같지만, 실제로 매우 간단함을 강조.

### LiveKit 기반 음성 AI 에이전트 개발 환경 및 예제 구조 안내

- 영상에서 활용하는 GitHub 저장소 예시(퀵스타트, 다양한 예제 포함) 소개.
- 대표적인 지원 예시:
  - 배경 오디오 재생,
  - 다이나믹 툴 생성,
  - 아웃바운드 콜러 제작,
  - Twilio 연동,
  - MCP 지원,
  - 비디오 아바타 등.
- 영상에서는 가장 “기본”적인 LiveKit 에이전트 제작부터 단계적으로 발전하는 구조를 안내.

### 52줄의 Python 코드로 음성 에이전트 기본 기능까지 최소한으로 구현 가능함

- LiveKit 에코시스템 내 필수 Python 라이브러리/종속성 import.
- 환경변수(.env) 로딩 및 OpenAI API 키 등 주요 설정 값 불러오기.
- assistant(에이전트) 클래스 정의 – LiveKit의 Agent 베이스 클래스 상속.
- __init__ 함수에서 시스템 프롬프트(기본 환영 멘트 등) 지정.
- entry_point 함수 내 agent session, 파라미터, voice pipeline(음성→텍스트→LLM→텍스트→음성) 정의.
  - 예시: speech-to-text 모델 → LLM → text-to-speech 모델.
  - provider 다양함(Anthropic, Cartesia 등), LiveKit 가이드 문서 참고.
- session 시작과 room(대화 세션) 생성, 대화 히스토리 관리.
- 임의 위치에서 reply를 주입시켜 즉시 환영 메시지 등 생성 가능.
- 전체가 단 52줄의 Python 코드로 완성, 커맨드라인에서 CLI로 바로 실행·테스트.

### 커스텀 도구(tool) 추가가 @function_tool로 손쉽게 가능하며 LLM 프롬프트에 자동 반영됨

- 도구 추가: Python 함수에 @function_tool 데코레이터만 추가하면 LiveKit가 인식.
  - docstring이 어떻게/언제 이 도구를 사용할지 LLM에 안내(Prompt 자동 반영).
  - 예시) 현재 시간 반환 도구 – LLM의 knowledge cutoff로 인한 최신성 한계 보완.
  - 인자 파라미터도 docstring에 명확히 명시, 에이전트가 상황에 맞춰 활용.
- 페덴틱 AI, crew AI 등 기존 에이전트 툴링 방식과 비슷하지만 LiveKit은 음성특화임.
- 실제로 콘솔 실행 후 “현재 시간 알려줘” 등의 명령에 정확히 응답하는 결과 확인.

### 예시 도구: 에어비앤비 검색, 예약 등의 대화형 툴 구현 및 시연

- 모의 데이터(mock data)를 활용해 여러 도시, 숙박 정보 세팅.
- Airbnb 검색 도구:
  - 도시명을 파라미터로 받아, 해당 도시의 숙박 목록을 반환.
  - 인자는 docstring에 명시(프롬프트에 자동 포함됨).
- Airbnb 예약 도구:
  - 숙소명, 이름, 체크인/아웃 날짜 등 모든 인자를 다 받지 못했을 경우, 에이전트가 추가 질의로 보완.
- 전체 대화 흐름 예시:
  - “샌프란시스코의 Top 3 에어비앤비는?” → 목록 반환(가격 포함).
  - “첫번째 숙소 예약” → 이름/날짜 요청 → 에이전트가 자연스럽게 대화 지속 → 예약 완료 안내.
- 실제 예약은 아니지만, 실제 API 연결 시 바로 실전 적용 가능.

### 외부 MCP 서버(Docker/HTTP/MCP Gateway) 활용, 실제 Airbnb API 조회까지 확장 가능함을 실연

- 영상에서 Docker MCP Gateway를 로컬로 실행 후, LiveKit에 실제 API 연결 과정을 보여줌.
  - streamable HTTP 프로토콜(포트 8089), 로컬 MCP Gateway URL로 통신.
- MCP 서버 리스트로 쉽게 서버 연결 가능(인증 없는 로컬 환경).
- MCP 연동 스크립트는 기존 basic agent 대비 추가 이벤트 처리(시작/종료시 트리거 등) 가능.
- 실제 Airbnb API 호출 결과 예시:"미니애폴리스 이번주 예약 가능한 top 에어비앤비는?" → 실제 숙소명, 설명, 평점 등 반환.
- Docker MCP 카탈로그 관련 별도 영상 예고.

### LiveKit의 이벤트 기반 대화흐름, 사용자 정의 논리 등 고급 기능으로 차별화가 가능함

- user start/stop speaking 등 이벤트 기반 방식 활용 가능.
- 대화 흐름 곳곳에 커스텀 로직 삽입, LLM plus 도구의 조합 등 통합구조 시연.
- Vapi 등 상용 플랫폼 대비, LiveKit에서 자유로운 독자적 논리 구현, 복잡한 워크플로우 개발 가능.

### LiveKit Cloud 계정 생성부터 CLI 인증, 환경 세팅, 에이전트 배포까지 전체 클라우드 환경 구축과정 상세 소개

- 계정 가입, CLI(윈도우, macOS별) 설치, LK cloud auth로 인증, 환경변수(.env) 등록 방법 구체 제시.
- 속성명, API 키(OPENAI, DEEPGRAM 등), LLM 모델 지정 등 환경변수 구성.
- 환경변수 등록 완료 후, 'lkapp env'로 저장(.env.local → .env로 이름 변경).
- 에이전트 실행/테스트 후 'lk agent create' 명령어로 클라우드 배포, Docs/Dev 환경과 차이점, 무료 티어 활용 안내.
- 배포된 에이전트는 cloud dashboard, playground 등에서 바로 실사용 테스트 가능.

### 브라우저에서 실시간 대화 및 전화연동 등 실제 서비스적 활용 가능성을 시연

- dashboard/playground 내에서 데스크톱 브라우저로 에이전트와 즉석 대화 지원(실시간 음성 인터페이스).
- 전화 연결(integration) 등도 지원 – 별도 영상 제작 의사 언급.
- 로컬/클라우드 순차적 비교(로컬 mock 데이터, 클라우드 mock 도구, 실제 API는 원격 제한).

### LiveKit 커뮤니티의 고도화 예제 및 추가 학습 자료 안내

- Dynamis 커뮤니티에서 RAG+Archon 적용 LiveKit 고급 에이전트 제작 워크숍 예고 및 설명.
- 워크숍 영상 및 다양한 리소스가 dynamis.ai에서 제공됨을 밝힘.
- LiveKit을 통한 multi-agent workflow, 고급 툴 통합 등 추가적으로 다룰 수 있는 주제 예시.

### 오픈소스서 자유로운 커스터마이즈와 다양한 목적·플랫폼에 즉각적인 배포가 가능한 LiveKit의 장점을 분명히 보여줌

- 오픈소스 코드로 완전한 통제와 커스터마이즈 가능.
- 클라우드/온프레미스 자유로운 선택, 비용 효율성, 통합성 강점.
- 예시코드, 실전 테스트, 배포 전과정 시연으로 실질적인 제작 방법 숙지 가능.
