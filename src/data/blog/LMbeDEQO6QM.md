---
author: AI Makers Club
pubDatetime: 2026-05-25T08:19:15.368Z
title: "Your Agent Is an Infinite Canvas - RL Nabors, Dressed for Space"
slug: LMbeDEQO6QM
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "\"에이전트는 무한한 캔버스다\"는 AI와 웹 브라우저, 그리고 현대적으로 발전한 MCP (Modular Capabilities Protocol) 툴을 활용해 기존 웹사이트와 에이전트"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/LMbeDEQO6QM/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your Agent Is an Infinite Canvas — RL Nabors, Dressed for Space](https://www.youtube.com/watch?v=LMbeDEQO6QM)  
**채널명:** AI Engineer

## *에이전트는 무한한 캔버스다 — RL 네이버스, 드레스드 포 스페이스* 핵심 요약

- "에이전트는 무한한 캔버스다"는 AI와 웹 브라우저, 그리고 현대적으로 발전한 MCP (Modular Capabilities Protocol) 툴을 활용해 기존 웹사이트와 에이전트 기반 환경을 통합하는 데 중점을 둔 발표임
- 발표자는 Mozilla(파이어폭스 DevTools), W3C(Web Animations API), Microsoft(Edge), React 팀 등에서 경력 쌓은 Rachel Lee Neighbors이며, 최근에는 AI 스타트업 및 주류 브라우저 기업의 컨설턴트, 그리고 aRise의 Principal Developer Experience Engineer로 활동 중임
- 과거 인기 웹코믹 작가로서(최대 40만 주간 독자), 팬 및 새로운 웹 이용자들을 위해 AI 에이전트와 브라우저에 만화 콘텐츠를 동시에 경험할 수 있게 개선 작업을 추진함
- MCP 서버와 다양한 트랜스포트(HTTP, STDIO/Studio 프로토콜)를 소개하며, 어떻게 MCP 툴과 앱이 브라우저와 에이전트에 의해 활용될 수 있는지 실질적 예시와 함께 심층 설명
- 실제 MCP 앱(예: 만화 리더기)을 직접 개발, HTML/CSS/JS 번들 및 JSON 기반 데이터 통신 방식, 외부 리소스 보안 정책(CSP), Iframe 샌드박싱 등 구현시 주의점도 상세 공유
- 에이전트 환경에서 '채팅' 중심 UX의 한계(벽돌 같은 텍스트 기반 UI)의 비효율성을 지적하며, 인터랙티브 MCP 앱으로 사용자 경험을 개선할 수 있음을 강조
- 브라우저 내장 API(Web Speech, Animation, Audio, Canvas, WASM, CSS 등)와 MCP를 결합하여 에이전트와 사용자가 풍부한 상호작용을 구현할 수 있다는 비전을 제시
- Web MCP라는 신규 브라우저 표준의 등장과, MCP 앱/툴의 선언적 및 명령형 인터페이스, 앞으로의 표준화 방향을 설명하며, 데모와 실습 리소스까지 안내함
- 전반적으로, 웹은 죽은 게 아니라 변화하는 중이며, 웹의 “무한 캔버스”로서의 가능성이 AI와 에이전트 시대에도 여전히 살아있음을 강조함

---

## 세부 요약 - 주제별 정리

### 발표자의 웹 및 에이전트 경력과 과거 웹코믹 경험이 통합된 배경

- Rachel Lee Neighbors는 Mozilla(Firefox DevTools), W3C(Web Animations API), Microsoft(Edge), React 팀(react.dev, reactnative.dev)에서 활동한 바 있음
- 최근 3년간 AI 스타트업, 대형 LLM/브라우저 기업들과 고객경험 및 웹, UI 부문 컨설팅 진행
- 현재는 aRise에서 Principal Developer Experience Engineer로(“agentic flow” 문제 해결에 필요한 solution 제공)
- 웹코믹 작가로 2006년부터 40만 주간 독자를 보유했던 경험 언급(플랫폼: iVillage Network)
- 팬의 니즈와 저작권 이슈, 크리에이터로서의 자율성(직접 제작한 아트는 재사용 및 가공 자유로움) 등을 고려한 사례 적용
- 2010년 무렵 만든 코믹 아카이브 사이트의 저장성, 2020년대 에이전트 기반 접근의 필요성 제기(404, broken images, CDN 문제 등)
- 오늘날 에이전트 시대에 맞춰 웹과 에이전트 모두에서 경험할 수 있는 콘텐츠 제공을 추구

### 웹 브라우저를 '무한 캔버스'로 보는 관점과 관련 표준의 발전

- 웹 브라우저는 단순 문서 리더가 아닌 영상, 오디오 등 다양한 종류의 미디어 렌더링이 가능한 무한 캔버스임을 주장
- 브라우저에는 이미 다양하고 강력한 API(Web Animations, Canvas, Web Speech 등)가 탑재되어 있음
- W3C Web Animations API 개발 및 “Interactive Alice in Wonderland” 등 웹의 한계를 넘는 데모 다수 개발 경험
- 이런 무한 캔버스적 가능성이 이제 에이전트 및 AI 시대에도 이어짐을 강조

### MCP 서버와 트랜스포트(Studio, HTTP)의 구조적 차이와 활용법

- MCP(Modular Capabilities Protocol)는 에이전트와 서버의 통신을 담당, 다양한 트랜스포트를 지원
- Studio(=STDIO)는 클라이언트가 로컬 프로세스를 시작해 명령줄 기반 입력/출력으로 지속 통신
    - 복잡한 사용자 설정, 명령어 기반 구조 등 비전문가에겐 진입장벽 존재
- HTTP 트랜스포트는 웹서비스(HTTP 엔드포인트)로 배포, POST 요청을 통해 에이전트 통신, 서버리스(Vercel, Cloudflare 등)와도 연동
    - 사용자는 UI에서 간단히 서버 URL을 등록해 MCP 툴에 접속 가능(Anthropic Claude 예시)
    - 설정이 비교적 직관적, 서버-에이전트 연결 및 툴 권한 관리에 용이
- STDIO와 HTTP 모두 각각 목적과 효율성이 다르며, 프로젝트 상황에 맞게 선택 필요

### 다양한 MCP 툴 및 반환 데이터 구조(특히 만화 관련 기능) 설명

- 예시 MCP 툴: 만화 목록 조회, 스토리라인(이야기 구조) 목록, 캐릭터 목록, 만화 검색, 캐릭터별 만화 검색, 각 회차의 트랜스크립트 반환 등
- 대부분 JSON 구조로 반환, 특정 기능(예: get transcript)은 마크다운(Markdown)으로 텍스트 반환
- 실제 예시로, 특정 스토리라인/페이지 넘버로 만화 특정 페이지 조회, 캐릭터별 에피소드 탐색 등이 가능
- Claude(예시 에이전트)는 MCP 툴 목록을 인식해 자동으로 필요한 액션을 실행

### 에이전트 UX의 한계와 MCP 앱(인터랙티브 UI)로의 전환 필요성

- 채팅 기반 UI는 “최소 공통 분모”의 경험, 명령행(CLI)만큼이나 불편하고 진입장벽 높음
    - 사용자가 시스템 기능을 많이 알아야 하고, 작업 방식이 비효율적임
    - “텍스트 게임”이나 던전 탐색기 수준의 UX, 현대 기기(스마트폰)에는 부적합함
- MCP 앱은 HTML/CSS/JS 기반으로, 에이전트 대화 내에 인라인('app') 형태로 인터랙티브 경험 제공
    - 데모: 만화 리더기(페이지 단위 탐색, 코멘트/코멘터리, 트랜스크립트 바로 보기 등) 구현
    - 기존 웹사이트와 거의 동일한 UI/UX 인터랙션을 Claude 등의 에이전트 안에서도 구현 가능

### MCP 앱의 구현 방식과 보안 정책, 싱글 파일 구조의 특징

- MCP 앱은 싱글 HTML 파일 형태로, 모든 리소스(폰트, 이미지 등)는 자체 포함(base64 등) 필요
    - 외부 리소스 사용 시 강력한 CSP(Content Security Policy) 설정 요구, 기본적으로 차단됨
    - 앱은 Iframe 샌드박스 환경에서 실행, localStorage 지원 안 되며 상태 추적 제한적
    - 네트워크 접근 불가, 서버에 요청 시 반드시 MCP 서버의 callServerTool 기능 이용 필요(“Mother, may I?” 구조)
- 디자인 시스템을 보유하고 있으면, 폰트/CSS 등 MCP 앱에서 재활용 유리
    - V Single File 등 번들링 도구 활용 가능
- 링크(외부 창 열기) 등도 별도 host permisssion 및 appref 사용 필요
- 기존 MCP UI와 달리 MCP 앱은 툴 호출 가능, JSON 반환 툴은 visibility=app 등 설정으로 불필요 액션 방지

### Web MCP의 등장과 MCP와의 관계, 브라우저에 에이전트 툴을 직접 노출하는 구조

- Web MCP는 모든 HTML 페이지를 미니 MCP tools 서버로 변환해, 브라우저 내 에이전트가 JS 함수 등을 직접 호출 가능하게 만듦
- MCP(서버-에이전트 통신 프로토콜)와 Web MCP(브라우저 내 임페러티브/선언적 툴 노출)는 별개의 것이며, 사양이 반드시 일치하지 않을 수 있음(“JavaScript는 Java와 다른 것”에 비유)
- 선언적 방식: 기존 HTML form에 tool name/description 속성만 추가하면 자동으로 에이전트에 툴 노출
    - 예) 검색창 등 폼 많은 사이트에 효율적
- 명령형(임페러티브) 방식: JS에서 navigator.modelContext.registerTools로 기능, 파라미터 등 직접 정의
- 아직 표준화 과정에 있음; MCP B 브라우저 확장(디버깅 도구)으로 현재 사용 가능
- 데모: 페이지 트랜스크립트 읽기, "다음 페이지로 이동" 등 직접 호출 시나리오 시연

### 발전 중인 표준 및 실질적 구현 예시, 실제 동작 방식

- Web MCP는 Amazon에서 인증 문제 우회용으로 시작, 지금은 표준화 논의 중
- MCP B 등 확장과 별도 데모 리소스 제공, 앞으로 Gemini 등 브라우저 내장 에이전트에도 적용될 전망
- 아직 완전 보급 전이나, MCP 툴/앱/웹 페이지가 “공유 자원”으로서 직접 에이전트에 드러났을 때의 가능성 강조

### 웹 코믹 리더기의 실제 동작 및 웹 내장 API 활용 가능성 고찰

- HTML, CSS, JS 기반 단일 파일 앱, MCP 툴-에이전트 통합으로 풍부한 인터랙션 제공
- 웹 Speech API 등 활용해 페이지 내용을 자동 읽어주기 기능 구현(11 Labs 등 외부 제로디펜던시 활용 가능)
- 그 외 Animation, Audio, Canvas, WASM 등도 MCP 앱/에이전트 조합에 활용 가능함을 예시로 설명
- 별도 인퍼런스 필요 없는 범용 텍스트-음성 변환 기능 등 브라우저만으로도 실용적 스마트 앱 개발 가능

### MCP, Web MCP, 브라우저, 에이전트의 미래 “무한 캔버스” 가능성 강조

- 브라우저와 웹은 "죽지 않았다", 단지 시대에 따라 진화할 뿐임을 마지막까지 선언
- CSS, JS는 AI 에이전트 및 인터랙티브 경험까지 확장 가능한 범용 언어로 자리잡음
- 이미 존재하는 다양한 웹 API와 툴을 기반으로, 크리에이터/개발자 누구나 새로운 인터랙티브 에이전트 경험 구축 가능
- 혁신적 사례, 표준화 흐름, 개발자 커뮤니티 참여 등 변화하는 웹의 “무한 캔버스” 비전으로 발표 마무리
