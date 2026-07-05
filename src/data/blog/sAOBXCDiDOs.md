---
author: AI Makers Club
pubDatetime: 2026-07-05T08:19:18.779Z
title: "MCP Apps: Primitives, discovery, and the Future of Software - Pietro Zullo, Manufact, Inc"
slug: sAOBXCDiDOs
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Manufact의 공동창업자 Pietro Zullo가 MCP(Model Context Protocol) 앱의 구조, 작동 방식, 배포 및 발견(디스커버리) 메커니즘, 그"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/sAOBXCDiDOs/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [MCP Apps: Primitives, discovery, and the Future of Software - Pietro Zullo, Manufact, Inc](https://www.youtube.com/watch?v=sAOBXCDiDOs)  
**채널명:** AI Engineer

## *MCP 앱: 원리, 발견, 그리고 소프트웨어의 미래* 핵심 요약

- 본 영상은 Manufact의 공동창업자 Pietro Zullo가 MCP(Model Context Protocol) 앱의 구조, 작동 방식, 배포 및 발견(디스커버리) 메커니즘, 그리고 이 프로토콜이 앞으로 모든 소프트웨어 사용 방식에 미칠 영향에 대해 소개함
- MCP 프로토콜은 2024년 출시 후 개발자와 기업 사이에서 빠르게 주목받았으며, 2025년 말부터 MCP 앱과 공식 UI 확장(MCPUI)이 도입되어 대화형 UI를 반환할 수 있게 됨
- MCP 앱은 이제 JSON 데이터만 반환하는 것이 아니라, 샌드박스된 iframe을 통해 대화창에 직접 UI를 표시하고, UI와 호스트 앱 간 양방향 통신 지원
- Manufact는 MCP 개발을 쉽게 해주는 오픈소스 SDK(MCPUs), Inspector, Manifold Cloud 등을 제공하며, GitHub 10K 스타, SDK 800만 다운로드의 실적을 보유함
- 주요 MCP 앱 사용자 대상 클라이언트(플랫폼)는 ChatGPT, Claude, Cursor 등이며, 최근 이들 플랫폼의 앱스토어가 일반 배포자에게도 점진적으로 개방됨
- MCP 앱은 툴 호출 시 텍스트 외에 UI 위젯(예: 카드, 버튼, SVG 등)을 반환, 실시간 스트리밍 정보, UI 상태 동기화(setState), 메시지 주고받기, 툴 재호출 등 다양한 프리미티브 제공
- 이용자 UI에 표시되는 민감정보와 LLM(모델)에게 전달되는 데이터 구분이 가능해 프라이버시가 요구되는 환경에도 적합
- 제작된 MCP 앱은 각종 앱 스토어를 통해 제출 및 검증받아, 간단한 URL 한 번으로 유저가 직접 설치 및 사용 가능
- 현재 Claude는 사용자의 요청 의도에 따라 스토어의 app을 동적으로 추천해주는 기능도 제공하고, ChatGPT 등도 이 방향으로 확장 예정
- MCP 앱의 폭넓은 지원과 배포 규모는 개발자와 서비스 제공자에게 매우 중요한 새로운 시장 기회를 제공

---

## 세부 요약 - 주제별 정리

### MCP는 텍스트 기반에서 UI까지 지원하며 소프트웨어 경험을 획기적으로 전환시킴

- MCP(Model Context Protocol)는 2024년에 출시돼 개발자 및 기업들의 관심을 빠르게 끌었음
- 초기에는 서버가 JSON 데이터만 반환했으나, 2025년 MCPUI(MCP에서 UI 반환) 도입, ChatGPT 앱 SDK 제공으로 대화형 UI 컴포넌트 연동 가능
- Character AI, Claude 앱스토어도 2025년 말부터 MCP 앱 및 서버 제출을 지원, 사용자는 원클릭 설치 가능해짐
- 2026년 1월, 공식적으로 MCP 앱(이전 MCPUI)이 도입되어 MCP 서버에서 UI 리소스를 반환하는 방식으로 확장
- MCP는 이제 UI를 반환해 사용자와 더 밀접한 인터랙션이 가능하며, 앱 스토어의 개방으로 앱 배포 채널이 확대됨
- LLM 모델 제공업체(예: OpenAI, Perplexity)가 표준 MCP 기반 앱의 신속한 검증, 배포를 장려함

### Manufact는 MCP 개발을 위한 핵심 오픈소스 솔루션과 클라우드 배포 환경을 제공함

- Manufact(회사)는 오픈소스 SDK(MCPUs), Inspector, Manifold Cloud를 제작·운영함
- MCPUs: 공식 SDK 상위 추상화를 제공해 서버/클라이언트/에이전트 개발을 쉽게 지원, MCP 스펙 내부 동작을 몰라도 빠른 구축 가능
- SDK 누적 800만+ 다운로드, GitHub 10,000+ 스타 등 활발한 개발자 커뮤니티 구축
- Inspector: MCP 서버 및 앱을 로컬에서 손쉽게 테스트할 수 있는 오픈소스 툴 제공
- Manifold Cloud: MCP 서버를 GitHub에서 받아 빌드, 배포, 팀간 공유, 이메일 전송, 퍼블리싱 체크 등 MCP 특화 기능 제공

### MCP 앱은 샌드박스 iframe 기반 UI와 호스트 앱의 실시간 상호작용을 지원함

- MCP 앱은 서버가 JSON 대신 UI 위젯(React 기반, HTML/CSS)을 반환
- 이 UI는 샌드박스된 iframe 내에 표시돼 외부 간섭 최소화, 개발사가 자유롭게 기능 구현 가능
- 채팅 내에서 모델(LLM)이 툴을 호출하면 UI가 바로 대화창 하단에 렌더링
- MCP 앱의 UI와 호스트 앱 사이에 실시간, 양방향 통신 채널이 존재함
- UI 리소스는 앱 초기화 단계에서 선언되고, 툴 인자값을 채워 UI에 전달되어 보여짐
- 사용자 UI에 표시할 데이터와 LLM에 직접 전달할 데이터, 출력 타입을 구분할 수 있음

### setState, 메시지 전송, 실시간 업데이트 등 다양한 프리미티브로 인터랙션이 강화됨

- UI 컴포넌트는 setState 프리미티브를 이용하여 자신의 상태(예: 선택된 항목 등)를 모델에 동기화 가능
- 예시: 사용자가 UI에서 항목 선택 → setState 호출로 모델에 새 상태 전달 → 이후 대화에서 모델이 해당 상태를 인지하여 반영
- send message primitive: UI 버튼 또는 액션에서 버튼 클릭 시 채팅 메시지 생성 및 전송 가능
- 클라이언트 유형에 따라 메시지 전송 방식 다름(Claude: 임시 입력란에 표시 후 사용자가 직접 전송, ChatGPT: 메시지를 바로 모델에 보내기)
- 모델이 툴 아규먼트를 스트리밍 입력하면, UI에서 이를 실시간으로 반영 가능(예: SVG, Remotion 기반 비디오, 다이어그램 등 점진적 표시)

### MCP 앱 위젯 내에서 추가 툴 호출, 출력 데이터 분리 등 복합 기능 구현이 자유로움

- MCP 위젯(React 컴포넌트)에서 별도의 툴 재호출(예: 추가 데이터 획득이나 새로운 액션 트리거) 가능
- MCP 서버에서 출력 데이터를 UI에 표시할 부분, LLM(모델)로 전달할 부분 별도 분리 출력
- 민감 정보를 UI엔 표시하되 LLM엔 전달하지 않거나, 모델엔 "사용자가 위젯에서 자신의 개인정보를 보고 있음"처럼 요약해 전달 가능
- 이를 통해 프라이버시가 중요한 분야에서도 MCP 앱 활용이 가능함

### 인라인, 전체 화면, Picture-in-Picture 등 다양한 UI 표시 모드를 지원함

- MCP 앱 widget 디스플레이 모드를 툴 호출 결과에 따라 인라인, 전체 화면, 피쳐인피쳐(PiP) 등으로 조정 가능
- 예: 영상, 그래픽 작업에서는 전체 화면 UI 위에 채팅 입력창 오버레이가 유용
- 운영체제(OS) 테마(라이트/다크 등)와 동기화, 외부 링크 오픈 등 기타 다양한 프리미티브 지원

### 다양한 실제 MCP 앱 사례와 MCP 앱 지원 플랫폼이 빠르게 확대되고 있음

- Cursor, Claude, ChatGPT 등 주요 LLM 플랫폼에서 MCP 앱을 직접 데모
- 예시: Cursor의 분석(analytics) MCP 앱, Claude의 Excalidraw MCP 앱으로 실시간 다이어그램 스트리밍, ChatGPT에서 Manifold MCP 앱 렌더링 등
- 클라이언트별로 지원 수준과 렌더링 품질 다름(예: ChatGPT는 렌더링 품질이 더 우수)
- 지원 플랫폼: Claude Co-work/Code/Desktop, ChatGPT, Codex, Cursor(에이전트+일반 챗), VS Code 등 지속 확산
- MCP 서버 개발 시 클라이언트의 MCP 앱 지원 여부를 메타데이터로 판별, 적절하게 UI 또는 대체 출력 반환 가능

### Manufact SDK로 MCP 서버 및 앱을 쉽고 빠르게 구축 및 배포할 수 있음

- Manufact의 MCPUs SDK는 기존 MCP 서버 생성 방식과 동일하게 툴 정의 후, 위젯 파일을 리소스 폴더에 두면 자동 등록
- 위젯은 React 컴포넌트로 직접 작성, 기존 UI 자산 재활용 가능
- 위젯 파일은 HTML/CSS로 컴파일돼 툴 반환값과 연결되어 전달
- NPX create MCP app 명령으로 표준 템플릿을 생성해 신속한 개발/배포 가능

### MCP 앱 스토어는 셀프서브 형태로 누구나 제출·배포 가능하며, 배포 채널이 혁신적으로 변화함

- ChatGPT, Claude, Cursor 등은 셀프서브 앱 제출을 공식 지원
- 서버 또는 UI를 포함한 MCP 앱 모두 제출 가능(반드시 UI를 반환할 필요 없음)
- 제출 시 도구의 인자, 인증 요구 등 사전 자동/수동 검증 및 일부 수동 테스트(입력 프롬프트, 테스트 시나리오 제공) 진행
- 각 스토어마다 다소 상이한 제출 프로세스와 승인 속도(예: Claude는 기업/팀 계정 중심), ChatGPT는 빠른 수락 경향
- 앱 승인 후 공식 앱 디렉터리에 등재(ip로 chadigpt.com/apps, Claude의 커넥터 디렉터리 등에서 서치·URL 설치)
- 과거 복잡했던 JSON 기반 MCP 서버 설정 전달이 불필요, 간단한 URL 또는 스토어 검색만으로 유통
- Manufact에서는 제출 전 자동 사전점검(스크린샷, 테스트케이스 생성, 인증 체크 등) 지원 플랫폼 운영

### 클라우드는 사용자의 행위 목적에 따라 스토어 앱을 자동 제안하며, 앱의 "발견성"이 대폭 강화됨

- 현재 Claude 플랫폼은 사용자가 명확한 목적을 가진 요청(예: 특정 서비스 이용) 시 MCP 스토어의 적합한 커넥터를 자동 탐색·추천
- ChatGPT도 추후 이 기능을 지원 예고, "고도의 구매/이용 의도"를 지닌 잠재적 유저가 유입될 수 있음
- 실제 사례에서 스토어 입점 후 트래픽, 신규 유저 확보에 큰 효과
- 대규모 사용자 기반(LMM 플랫폼 이용자 10억 명 이상)이 자연스럽게 MCP 앱을 찾아 사용 가능

### MCP 앱과 앱 스토어는 AI 앱=새로운 브라우저, ChatGPT=웹사이트라는 시장 패러다임 변화를 만들고 있음

- 소프트웨어 경험의 중심이 AI 기반 채팅 앱(Claude Co-Work, ChatGPT 등)으로 이동
- 기존 Google 검색 대신 ChatGPT, Claude 내 검색·실행이 점차 대체
- 대시보드나 SaaS 제품의 독립 UI가 아니라, AI 플랫폼 내 통합 UI로 패러다임 전환
- 개인 워크플로우 예시: Granola(미팅노트 관리 MCP), Linear(이슈 관리), Code base, 이메일 등 다양한 MCP 커넥터 조합
- Paul Graham(YC 창시자)이 "AI 앱은 새로운 브라우저"라 언급
- 기업 및 개발자들은 앞으로 MCP 앱 형태로 제품을 빠르게 배포하는 것이 필수 전략임
