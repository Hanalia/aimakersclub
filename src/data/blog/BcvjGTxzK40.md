---
author: AI Makers Club
pubDatetime: 2025-09-18T08:19:04.832Z
title: "The Future of SaaS is Agentic Experiences (Here's How to Build Them)"
slug: BcvjGTxzK40
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상에서는 \"에이전틱 경험(agentic experiences)\"이 기존 앱이나 SaaS 플랫폼에서 분리된 에이전트가 아닌, 애플리케이션에 깊이 통합된 AI 에이전트가 미래 Saa"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/BcvjGTxzK40/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [The Future of SaaS is Agentic Experiences (Here's How to Build Them)](https://www.youtube.com/watch?v=BcvjGTxzK40)  
**채널명:** Cole Medin

## *SaaS의 미래는 에이전틱 경험에 있다 – AGUI로 만드는 차세대 AI SaaS* 핵심 요약

- 영상에서는 "에이전틱 경험(agentic experiences)"이 기존 앱이나 SaaS 플랫폼에서 분리된 에이전트가 아닌, 애플리케이션에 깊이 통합된 AI 에이전트가 미래 SaaS의 핵심이 될 것임을 주장함
- AGUI(Agentic Graphical User Interface)는 Copilot Kit 팀이 개발한 오픈소스 프로토콜로, 프론트엔드 앱과 AI 에이전트의 통신 방식을 표준화하여, 매우 적은 코드만으로 강력한 AI 통합 웹앱 제작을 가능케 함
- AGUI는 모든 주요 AI 에이전트 프레임워크와 호환되고, 프론트엔드와 백엔드 간 양방향 상태 동기화(state sync)와 툴 기반 생성적 UI 지원 등 강점이 있음
- 프론트엔드 라이브러리는 Copilot Kit(React 기반)를, AI 에이전트 프레임워크로는 Padantic AI(최근 AGUI와 공식 연동)가 추천됨
- AGUI와 Copilot Kit, Padantic AI를 활용하면 수천 줄짜리 코드를 작성하지 않아도 수백 줄로 완전한 에이전틱 SaaS 애플리케이션을 손쉽게 구축할 수 있음
- 예시 데모로 레시피 빌더, 속담 생성기, 날씨 카드 등 복합적인 인터랙션이 구현됨. 프론트엔드에서 만든 툴을 에이전트에게 바로 전하고, 프론트와 백엔드 상태가 즉시 동기화됨
- 시작 템플릿, 빠른 초기 셋업(npm 및 Copilot Kit CLI)이 명확히 제공되며, Copilot Kit 팀의 MCP 서버(문서 검색 지원)를 AI 코딩 어시스턴트가 활용하면 개발 난이도가 대폭 하락함
- 기존에 만든 Padantic AI 기반의 RAG(Retrieval-Augmented Generation) 에이전트를 별다른 코드 수정 없이 바로 Copilot Kit 기반 앱으로 통합 가능. UI에서 검색 결과 chunk 및 메타데이터 시각화까지 구현
- 핵심은 프론트-백엔드 상태 동기화, front-end tool injection, 인간-에이전트 협업 등 '에이전틱 경험' 설계에 있으며, AGUI는 이를 누구나 쉽게 만들 수 있도록 표준과 인프라를 제공
- 영상 전반에 걸쳐 구체적 예시와 단계별 구현 방법, 코드 샘플, 도구 선택 및 활용법, 개발자 중심의 실전 팁 등 실무적인 내용이 풍부하게 다뤄짐

---

## 세부 요약 - 주제별 정리

### AI 에이전트는 앱과 분리된 존재가 아니라 제품 경험에 깊이 통합되어야 살아남는다

- 에이전트 기반 SaaS의 미래는 단순히 'AI 챗봇'이나 분리된 에이전트 앱이 아니라, 실제 SaaS 서비스에 AI 에이전트를 심층적으로 내재화하는 것임
- ChatGPT나 Operator 등 범용 AI가 고도화될수록, 단순 '에이전트 서비스'만 하는 SaaS는 도태됨
- 차별화된 고유 경험, 제품 내에서 자연스럽게 AI와 사용자·도구·데이터가 결합되는 '에이전틱 경험'이 중요한 생존 요소로 부상
- 예시: 단순 상담 챗봇이 아니라, 사용자가 작업하는 맥락과 어플리케이션 상태를 능동적으로 인지하고 지원하는 에이전트

### AGUI는 프론트엔드와 AI 에이전트를 쉽고 강력하게 연결해주는 오픈소스 프로토콜이다

- AGUI(Agentic Graphical User Interface)는 Copilot Kit 팀이 개발한 오픈소스 프로토콜로, 프론트엔드 앱과 AI 에이전트간 통신을 표준화함
- GitHub에서 소스와 아키텍처 다이어그램, 풍부한 데모를 제공
- AGUI는 '중간자' 역할을 하며, Front-end 앱과 AI 에이전트가 AGUI를 지원하면 별다른 추가 작업 없이 통신 가능
- AGUI 호환을 습득한 프론트엔드/백엔드 프레임워크 간 교체가 간편(예: Padantic AI에서 Langraph로 변경해도 프론트엔드는 그대로)
- 수천 줄이 아니라 수백 줄의 코드만으로 복잡한 AI 통합 앱 구현 가능

### Copilot Kit과 Padantic AI는 AGUI와 완벽하게 통합된 추천 기술 스택이다

- 프론트엔드는 Copilot Kit(React 라이브러리, AGUI 네이티브 통합) 사용
- AGUI에서 지원하는 주요 AI 에이전트 프레임워크 중 최근 Padantic AI와 1st 파티 공식 연동이 이루어짐(Padantic AI에 AGUI 문서 섹션 포함)
- 간단한 셋업만으로 Padantic AI 에이전트를 Copilot Kit 기반 SaaS에 바로 이식 가능
- 프론트엔드와 백엔드 간 seamless state sync, tool injection, 인터랙티브 UI 구축이 핵심

### AGUI와 Copilot Kit을 활용하면 복잡한 프론트-백엔드 동기화도 손쉽게 구현된다

- 레시피 빌더 데모: 프론트엔드에서 재료(예: 쇠고기 1파운드) 추가 시, "나의 재료는?" 질문에 AI가 즉시 반영
- 반대로 "쇠고기가 많은 레시피 만들어줘" 요청 시, AI가 상태를 인식해 프론트엔드에 레시피와 성분 리스트, 조리법 등 즉시 렌더링
- 상태 양방향 동기화(2-way sync) 및 chat UI와 기타 UI 컴포넌트와의 깊은 통합 가능
- Front-end에서 동적 툴(tool) 제공 → Agent가 바로 활용

### 코드 예제와 AGUI 빠른 시작 설치법, 기본 앱 구조가 상세히 안내된다

- npm만 있으면 Copilot Kit CLI로 손쉽게 신규 프로젝트 생성
- 프론트엔드·백엔드 셋업 단계별로 Readme 및 공식 문서에서 안내
- 개발자 친화적으로 몇 줄의 command, 기본 폴더 구조, 인증 절차, cloud API key 발급 과정 등 스크린샷/코드와 함께 소개
- 새롭게 생성된 프로젝트에서 바로 독립 실행형 local demo 구현 가능

### 초보자를 위한 문자 기반 툴 연동, 사용자 동작 트리거, 카드 컴포넌트 등 다양한 데모가 제공된다

- 상태 테마를 'green'으로 바꾸기: 프론트엔드에서 'change theme' 툴을 만들고 agent에게 전달
- "SQL의 어려움을 주제로 속담 작성" 요청, 생성된 속담 삭제 등 상태 변경이 프론트엔드와 백엔드에 동기화됨
- "Orlando 날씨" 요청 시, 백엔드 Tool로부터 표준화된 data를 받아 React 컴포넌트 카드 형태로 UI에 시각화

### Copilot Kit팀이 제공하는 MCP 서버로 AI 코딩 어시스턴트의 자동 문서 검색과 맥락 엔지니어링이 가능하다

- Vibe Coding MCP 서버: Claude, Cursor, Client, Windsurf 등 다양한 AI 코딩 툴에서 Copilot Kit/AGUI Documentation을 즉시 검색·추천
- 사용자는 MCP 서버 주소를 입력, claude MCP add 및 MCP list 커맨드로 Active 연결 및 문서 검색 기능을 간단히 활성화
- 실제로 코딩 assistant가 구현할 기능의 공식 문서를 찾아 컨텍스트에 포함시켜 보다 정확한 코드 자동 생성 지원

### 프론트엔드 툴 추가, 상태 동기화 기능, 예시 기능(모든 속담 삭제 등) 구현 과정이 큰 틀에서 자세히 소개된다

- 기존에 있던 '테마 변경' tool에 더해 '속담 전체 삭제' 같은 툴을 프론트엔드에 새로 추가하는 예시
- AI 코딩 어시스턴트가 MCP 서버 연동으로부터 필요한 코드를 자동 검색/생성, 단 몇 초 만에 새로운 front-end action 추가
- 버튼 클릭, agent 명령어(텍스트) 모두 동일한 모든 속담 삭제 액션 유발. 삭제 후 확인 질문에도 backend상 상태가 즉시 반영됨
- 이런 구조를 통해 사용자의 입력, 에이전트의 action, 프론트엔드 UI가 완전히 양방향 연결됨

### AGUI 도입으로 프론트-백엔드 통신과 상태 동기화 전체가 비교 불가 수준으로 단순화된다

- 백엔드는 단일 python 파일(agent.py)에 시스템 프롬프트, tool 등록, Padantic AI agent 정의, 마지막에 .to_agui 함수 호출만으로 전체 구현 완료
- AGUI 지원 이전에는 API 엔드포인트, 미들웨어 등 복잡한 인프라 요구됐으나, 이제는 실제로 100줄 남짓의 코드만으로 완성이 가능
- 대화 내역 유지, 상태 동기화, 시스템 프롬프트 동적 조절 등 핵심 기능이 out-of-the-box로 제공됨

### RAG(지식 검색) 기반 에이전트를 쉽게 웹앱화하고, 검색 결과 chunk를 시각적으로 확인할 수 있다

- 기존 Padantic AI로 구현한 RAG 에이전트(지식 기반 답변 생성)를 Copilot Kit·AGUI 조합으로 거의 코드 변경[없이] 웹앱화
- 클라이언트에서 질문(예: OpenAI의 투자 내역) 입력 → 답변 뿐 아니라, RAG 검색된 chunk, 매칭 점수, chunk 내용, 소스 문서 등 프론트엔드 UI에 카드로 시각화
- chunk와 프론트엔드 상태가 AGUI로 실시간 동기화되어, 에이전트가 어떤 정보를 근거로 응답하는지 투명하게 추적 가능
- 복잡한 RAG 조회 및 시각화도 공식 문서를 참고한 코드 리팩토링만으로 신속히 완성

### AGUI와 Copilot Kit, Padantic AI 등 도구는 수단일 뿐이고, 진정한 에이전틱 경험의 본질은 상태 동기화와 인간-에이전트-툴 협업구조 설계에 있다

- AGUI, Padantic AI, Copilot Kit는 작업을 쉽게 해주는 도구이자 표준에 불과
- 진짜 중요한 것은 front-end와 back-end의 상태 동기화, 인간이 끼어들 수 있는(휴먼 인더 루프) 구조, 도구를 에이전트에 전달하는 방법
- 예시들처럼 AGUI 기반 설계는 단 몇십 분 만에 기존 에이전트를 완성도 높은 어플리케이션으로 확장할 수 있게 함
- AI 코딩 어시스턴트와의 결합으로 생산성이 극대화됨
- 향후 더 많은 에이전틱 경험 관련 노하우 제공 예정
