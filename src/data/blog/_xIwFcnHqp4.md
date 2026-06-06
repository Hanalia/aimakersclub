---
author: AI Makers Club
pubDatetime: 2026-06-06T23:44:57.703Z
title: "Building Interactive UIs in VS Code with MCP Apps - Marlene Mhangami & Liam Hampton, GitHub"
slug: _xIwFcnHqp4
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Microsoft 및 GitHub의 개발자 옹호자인 Marlene Mhangami와 Liam Hampton이 Visual Studio Code(이하 VS Code) 환경"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/_xIwFcnHqp4/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building Interactive UIs in VS Code with MCP Apps — Marlene Mhangami & Liam Hampton, GitHub](https://www.youtube.com/watch?v=_xIwFcnHqp4)  
**채널명:** AI Engineer

## *VS Code에서 MCP 앱으로 대화형 UI를 구축하는 방법* 핵심 요약

- 본 영상은 Microsoft 및 GitHub의 개발자 옹호자인 Marlene Mhangami와 Liam Hampton이 Visual Studio Code(이하 VS Code) 환경에서 MCP(Model Context Protocol) 앱을 활용해 대화형 UI를 구현하는 법을 시연하는 내용임
- MCP는 Anthropic이 개발한 LLM(대형 언어 모델)에게 컨텍스트(예: 도구, 프롬프트, 리소스 등)를 표준화된 방식으로 제공하는 오픈 프로토콜임
- MCP는 호스트(예: VS Code), 클라이언트(예: GitHub Copilot), 서버(특정 기능을 제공)를 핵심 구조로 하며, 여러 서버를 확장 프로그램 탭에서 쉽게 추가 가능함
- 기존 MCP 활용법은 텍스트 기반 응답만 제공해 시각화나 상호작용에 한계가 있었으나, MCP 앱 도입 후 서버가 리치 UI 컴포넌트를 직접 반환하고 채팅 창에서 바로 상호작용 가능해짐
- Excalidraw, Shopify, Figma와 같은 업체들이 MCP 앱을 통해 실시간 다이어그램 생성, 전자상거래 체크아웃 경험 등 다양한 UI 경험을 제공 중임
- MCP 앱은 서버가 HTML UI를 생성하여 호스트에서 샌드박스된 iframe으로 표시, 사용자가 직접 해당 UI와 상호작용할 수 있도록 설계됨
- VS Code 내에서 MCP 앱 서버를 쉽게 설치 및 관리할 수 있도록 공식 서버 리스트 제공, 보안 위험 때문에 추천 서버 사용 권장
- Liam Hampton은 Go 언어 예제(버블 소트 및 피보나치 시퀀스)를 직접 MCP 앱으로 프로파일링하여 Flame Graph UI로 시각화하는 실습 시연
- MCP 앱은 도구-리소스-호스트 간의 명확한 연결 구조 위에 React, Vue, Svelte 등 다양한 기술로 UI 구현 가능
- iframe 샌드박싱을 통한 보안적 격리, 챗 UI 내 대화형 조작(프로파일링 결과 해석 등)으로 개발자 생산성 및 작업 경험 대폭 개선
- Microsoft Build 등 개발자 컨퍼런스 현장 참여 안내 및 부스 홍보로 마무리

---

## 세부 요약 - 주제별 정리

### MCP는 LLM에게 컨텍스트 제공을 표준화하는 Anthropic의 오픈 프로토콜임을 강조함

- MCP(Model Context Protocol)는 Anthropic이 개발한 오픈 프로토콜임
- 목적은 LLM(대형 언어 모델)에게 도구, 프롬프트, 리소스 등 다양한 컨텍스트 정보를 표준화된 방식으로 제공하는 것임
- 프로토콜이 "오픈"이기 때문에 커뮤니티 누구나 활용 및 확장 가능
- 예를 들어 VS Code와 같은 개발 환경에서 LLM이 애플리케이션 데이터를 활용할 수 있도록 함
- MCP의 3대 필수 구성 요소는 호스트(사용 환경), 클라이언트(연결 관리), 서버(기능과 데이터 제공)로 구조화됨

### 호스트, 클라이언트, 서버의 역할과 VS Code 환경 구축 방법을 상세 소개함

- MCP 호스트: VS Code와 같이 서버로부터 데이터를 받아 활용하는 프로그램
- 클라이언트: 경우에 따라 호스트와 동일하거나 별개일 수 있음, 1:1 서버 연결 유지(예: GitHub Copilot)
- 서버: 특정 기능/능력을 외부 MCP 프로토콜로 노출하는 경량 실행 프로그램(사용자 정의/공식서버 모두 사용 가능)
- VS Code에서 확장 프로그램(Extensions) 탭에서 "@MCP" 키워드로 MCP 서버 검색 및 손쉽게 추가 가능
- MCP 서버 리스트 활용으로 보안 문제 예방(임의 인터넷 서버 사용 시 악성코드 위험 존재)
- GitHub Copilot 등 클라이언트와의 연계로 전체 맥락이 통합적으로 동작

### MCP 초창기 제한점(텍스트 응답 한계)과 대화형 UI의 필요성을 사례와 함께 제시함

- 초기 MCP는 텍스트 데이터만 반환 가능하여 시각 자료(다이어그램, 그래프 등) 생성 불가
- Readme 파일들이 ASCII 아트 또는 이모지로 채워지는 문제 발생(한계의 우회적 대응)
- 시각적 표현이나 인터랙티브한 조작이 필요한 상황(예: 다이어그램, 차트 등)에서 실효성이 떨어짐
- 단순 링크 반환 등 불편한 UX를 야기, 사용자의 반복적 입력 피로도 증가
- 기존 LLM 챗봇 사용 경험에 대한 제약과 UI 개선 필요성 강조

### MCP 앱 도입으로 리치 UI 컴포넌트 제공 및 채팅 인터페이스 상호작용이 실현됨

- MCP 앱은 서버에서 리치(풍부한) 인터랙티브 UI 컴포넌트를 직접 생성 및 반환
- 사용자는 VS Code 채팅 창 등에서 해당 UI를 즉시 조작, 확인 가능
- Excalidraw MCP 서버 예시: "MCP가 무엇인지 다이어그램으로 설명해달라" 요청 시 실제 다이어그램을 생성(텍스트가 아닌 시각화)
- 생성된 UI 요소는 사용자가 직접 드래그/텍스트 수정 등 실시간 상호작용 가능
- 동적이고 직관적인 시각화 및 피드백 제공으로 UX 대폭 개선

### MCP 앱의 동작 원리와 HTML 리소스 반환, iframe 샌드박싱 과정을 구체적으로 기술함

- 사용자가 챗에 프롬프트(예: analytics 보여줘) 입력
- LLM 기반 에이전트가 MCP 서버와 연결, 적절한 MCP 도구 호출
- MCP 서버가 도구 결과와 함께 HTML 기준의 UI 리소스 참조를 반환
- 호스트(VS Code)가 서버의 UI 참조로부터 HTML 요소를 받아옴
- UI는 샌드박스된 iframe에 렌더링되어 호스트 환경과 명확히 분리됨
- 앱-서버 간 양방향 콜이 가능해 실시간 데이터 갱신 및 UI 업데이트 실현
- iframe 내에서만 실행시켜 VS Code 설정 및 외부 API와의 불필요한 상호작용 차단(보안성 확보)

### MCP 앱이 실제로 도입된 대표적인 사례들과 그 활용 목적을 구체적으로 소개함

- Shopify: MCP 앱으로 챗 UI 내 실제 상품 검색 및 구매, 전자상거래 체험의 일관성 유지(기존 웹 브랜드 경험과 유사하게)
- Excalidraw: 아키텍처 다이어그램 등 실시간 생성 및 조작 지원(Cloud Code 등에서 통합 사용)
- Figma: 온더플라이 방식의 컴포넌트 생성 등 MCP 앱 기반 시각 디자인 제공
- VS Code 환경만이 아니라, OpenAI 챗, 외부 챗 인터페이스까지 MCP 앱의 확장 가능성 시사

### MCP 앱이 데이터 탐색, e커머스, 인터랙티브 개발 도구 등에 핵심적으로 쓰임을 설명함

- 데이터 탐색: 챗에 입력만으로 데이터셋을 일일이 분석하는 업무의 비효율성 해소(버튼 클릭만으로 상호작용)
- e커머스: MCP 앱 기반으로 챗 안에서 주문-결제 등 전체 프로세스 처리, 사용자의 자연스러운 구매 경험 제공
- 개발 지원: 다양한 MCP 앱(소스코드 프로파일링, 플레임 그래프, 마크다운 뷰어, 컬러 피커 등)으로 개발자 생산성 향상

### MCP 앱 개발 구조와 도구-리소스-호스트의 연관성, 기술스택 선택 폭 등을 구체화함

- MCP 앱의 핵심 3요소: 도구(LLM 도구 자체 + 호스트), 리소스(번들된 HTML UI), 연결(데이터 응답과 UI 바인딩)
- 실질적 UI 구현은 React, Vue, Svelte, 바닐라 JS 등 다양한 프론트엔드 기술 활용 가능
- "Copilot CLI" 등 AI 툴로 손쉽게 프로젝트 시작 및 예제로 마크다운 뷰어, 플라이트 스테이터스, 컬러 피커 등 직관적 예시 제공
- 툴 가시성 설정(모델만, 모델+앱, 앱만 호출 등)로 세밀한 인보크 권한 조정 가능

### Liam의 Go 애플리케이션 실습: 플레임 그래프 프로파일링 MCP 앱 구축 과정을 실시간으로 시연함

- Go 언어의 버블 소트, 피보나치 시퀀스 소스코드를 샘플로 활용
- MCP 서버를 로컬에서 실행, 5초간 애플리케이션 코드 프로파일링 진행(Go pprof 사용)
- 서버가 분석 데이터를 생성하면, 클라이언트가 이를 받아 실제 Flame Graph UI로 시각화함(React 기반)
- 채팅 창 내 iframe에서 플레임 그래프 결과 실시간 확인 및 상호작용 가능
- 기능별 시간 소비 구간, 주요 함수별 집약 정보 등 효율적으로 분석 가능
- 기존에는 텍스트 반환 후 일일이 재질의하거나 해석 요청이 필요했으나, MCP 앱 도입으로 즉석에서 모두 처리

### iframe 샌드박스 방식의 장점(보안적 격리 등)을 환경 및 개발 경험 측면에서 강조함

- iframe은 UI 앱이 VS Code 자체 설정이나 외부 시스템과 불필요하게 상호작용하는 것을 차단
- 비유적으로 "햄스터를 방에 풀어놓지 않고 케이지에 넣어두는 것과 같다"고 설명
- 격리를 통한 보안성 확보와 동시에 사용자 조작성을 극대화 (코드 환경, API 등 외부 자원과 분리)
- iframe 내에서만 앱이 구동되어 안전하고 예측 가능한 경험 제공

### 마무리로 GitHub 부스, Microsoft Build 행사 참여 독려로 발표를 종료함

- GitHub 및 Microsoft는 관련 기술을 선보이고자 여러 컨퍼런스 및 행사에 참가 중
- GitHub 부스(3층, 4층) 및 Microsoft Build(6월 3~6일)에서 MCP, Copilot 등 다양한 개발자 워크샵 진행 예정
- 관심 있는 개발자는 부스나 온라인 Microsoft Build 참여를 권장
- 영상 마무리 및 시청자에 대한 감사 인사로 발표 종료
