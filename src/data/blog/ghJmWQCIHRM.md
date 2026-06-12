---
author: AI Makers Club
pubDatetime: 2026-06-12T23:45:49.629Z
title: "The agent-ready web: Simplify user actions with WebMCP - Tara Agyemang, Google"
slug: ghJmWQCIHRM
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 발표에서는 Google Chrome팀 개발자 관계 엔지니어 Tara Agyemang이 Web Model Context Protocol(WebMCP)라는 웹 에이전트 지원 표준 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/ghJmWQCIHRM/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang, Google](https://www.youtube.com/watch?v=ghJmWQCIHRM)  
**채널명:** AI Engineer

## *에이전트 준비형 웹: WebMCP로 사용자 행동 간소화하기* 핵심 요약

- 본 발표에서는 Google Chrome팀 개발자 관계 엔지니어 Tara Agyemang이 Web Model Context Protocol(WebMCP)라는 웹 에이전트 지원 표준 초안을 소개함
- 기존 웹은 오직 인간 사용자를 위해 설계되었으나, 최근엔 AI 에이전트가 사용자 대신 사이트를 조작하는 사례가 증가
- 현행 웹에서 AI 에이전트가 HTML 분석, 접근성 트리 파싱, 픽셀 좌표 계산 등 복잡한 과정을 거치지만, 이는 토큰 소비가 많고 신뢰성도 낮음
- 웹 접근성, 시멘틱 HTML, 코어 웹 바이탈 개선 등 기초적 웹 최적화만으로도 에이전트 접근성이 대폭 향상됨
- WebMCP는 에이전트가 사용할 수 있는 사이트 기능을 구조화된 도구(tool)로 직접 정의하여, 사이트가 스스로 에이전트에게 동작 메뉴를 제공하게 함
- 크롬 확장 프로그램 ‘Model Context Tool Inspector’와 직접 데모를 통해 WebMCP 활용 과정을 상세히 시연
- WebMCP는 선언형(Declarative) API와 명령형(Imperative) API 두 가지 방식 지원, 표준 폼은 선언형, 복잡한 멀티스텝 UI엔 명령형 권장
- 실제 콘서트 티켓 예매, 미로 게임 조작 등 예시에 적용; 각 단계가 에이전트 호출-사이트 UI 반영 구조로 동작함을 실시간 보여줌
- MCP와 WebMCP의 차이점은 전자가 서버 사이드, 후자가 브라우저(클라이언트) 환경에 특화되었다는 점
- WebMCP는 현재 Chrome 146+에서 실험적으로 제공 중이며, 피드백 수렴 중임을 안내
- 베타 참여, 문서, GitHub 데모 코드, 툴 정보 등 구체적 이용 방법을 공유하며, 웹사이트의 에이전트 호환성 향상을 촉구함

---

## 세부 요약 - 주제별 정리

### 웹은 더 이상 인간만의 공간이 아니며, AI 에이전트가 웹상 활동을 점점 더 자주 대행함

- 과거 수십 년간 웹은 전적으로 인간 사용자 행동, 시각적 경험을 중심으로 설계되고 최적화됨
- 최근 AI 에이전트(예: Gemini)가 사용자를 대신해 웹사이트 상의 다양한 행동을 자동화하려는 노력 증가
- 이런 변화에 따라 웹사이트가 AI 에이전트의 효과적인 이용을 지원할 필요성이 커졌음

### 기존 웹에서는 AI 에이전트의 간단한 작업 구현이 복잡하고 비효율적으로 이루어짐

- AI 에이전트는 HTML DOM 전체, 접근성 트리, 스크린샷 등 다양한 구조를 파싱하여 사이트 구조를 추론해야 함
- 예시로, 콘서트 티켓 구입 웹사이트에서 "Afro Beats Festival 티켓 2장 구매" 요청 시, 에이전트는 다수의 복잡한 처리 단계를 거침 (DOM 파싱, 엘리먼트 위치 확인, 클릭 조작 등)
- 광고 로딩 등 예상치 못한 동적 UI 변화로 인해 에이전트의 클릭 위치가 어긋나는 등 신뢰도 저하 발생
- 이러한 프로세스는 토큰 소모가 많고 파손(brittle) 가능성이 높음

### 웹의 기초적 접근성·성능 개선만으로도 에이전트 호환성이 크게 높아짐

- 시맨틱 HTML, 견고한 접근성 표준 준수, 빠른 로딩(코어 웹 바이탈), 유저 경험 개선 등에 신경 쓸 시, 에이전트가 사이트를 더 잘 활용할 수 있음
- 이런 기초가 마련된 후에야 비로소 WebMCP와 같은 고급 기능을 도입하는 게 적합함을 강조

### WebMCP는 에이전트에게 구조화된 사이트 기능을 직접 제공하도록 고안됨

- Web Model Context Protocol(WebMCP)은 AI 에이전트가 쓸 수 있는 ‘툴’을 구조적으로 제공하는 웹 표준 제안임
- 웹사이트가 자체 도구 목록과 가능한 액션을 직접 명시함으로써, 에이전트가 사이트 기능을 추론하지 않아도 됨
- "AI 에이전트 인터랙션의 USB-C"라 불릴 정도로, 에이전트가 웹사이트의 도구와 액션을 표준 방식으로 이용할 수 있도록 설계

### Chrome ‘Model Context Tool Inspector’ 확장으로 WebMCP 지원 사이트의 도구 목록을 확인·조작할 수 있음

- Chrome DevRel팀이 만든 WebMCP 도구 인스펙터 확장은, 현재 페이지에서 제공하는 툴 목록과 인자들을 패널에서 즉시 확인 가능
- 일반적 에이전트 프롬프트 기반 조작 혹은 툴 직접 호출 모두 지원
- 실제 데모로 미로 퍼즐 게임을 WebMCP 기반으로 제어: ‘start maze game’, ‘move’, ‘pick up’, ‘use item’ 등 각 상태별 도구가 패널에 자동 갱신

### WebMCP 적용 예시에서 여러 동작이 툴 호출 기반으로 단계별 자동화됨을 시연함

- 미로 게임 예시에서 이동(down, right, up 등), 아이템 사용, 탈출 등 모든 행동이 API에서 도구 호출→결과 수신 패턴으로 연동됨
- 에이전트는 습득 가능한 도구를 확인하고 연속 호출·피드백을 사용해 과업(예: "complete the maze") 자동화 시도
- 사용자의 프롬프트 개선에 따라 에이전트 해결 방식의 효율(미로 최단경로 탐색 등)도 향상

### WebMCP와 MCP는 구현 대상이 달라 보완적으로 활용 가능함

- MCP는 AI 에이전트가 서버 사이드 애플리케이션에 접근하는 일반 프로토콜
- WebMCP는 MCP에서 착안해, 클라이언트(브라우저)에서 제공되는 도구 상호작용에 집중
- Java와 JavaScript처럼 WebMCP는 웹 브라우저의 MCP "도구" 부분만 따옴
- WebMCP는 브라우저 환경에서 동작하며, 모든 툴 정의와 호출이 클라이언트 내에서 실시간 동작

### 복잡한 사용자 워크플로우 자동화 등 WebMCP 활용 예시가 다양하게 제시됨

- 비행기 예약/쇼핑 필터/의료, 금융 양식 입력/숨겨진 페이지 요소 조작 등, 복잡하거나 반복적인 사용자 행동 자동화에 적합
- 예시: ‘블랙 인조가죽 백’과 같은 조건 필터링을 프롬프트 하나만으로 에이전트가 처리하도록 할 수 있음
- 사용자는 폼 작성, 체크박스 클릭 등에 더 이상 수작업 필요 없이, 에이전트에 추상적 목표만 전달하면 됨

### WebMCP는 선언형(Declarative) 및 명령형(Imperative) API로 지원됨

- 선언형 API: 기존 표준 HTML 폼에 속성(tool name, tool description 등)만 추가하면 JSON schema가 자동 생성되어 에이전트가 인자 해석 가능
- 추가 속성(예: agent-invoked boolean)으로 인간·에이전트 입력 구분 가능
- 명령형 API: 복잡한 UI, 멀티스텝 플로우 등에 동작 커스텀 툴을 직접 registerTool 함수로 정의
- 함수형 구현(예: addTodoItem 등)과 직접 schema 생성·피드백 반환 방식
- 보다 복잡한 플로우 대부분에는 명령형(Imperative) 방식 활용이 일반적임

### 실제 콘서트 웹사이트 데모에서 WebMCP API가 단계별 티켓 구매 에이전트 동작으로 연동됨

- 예시: Summer Vibes Festival VIP 티켓 2장 구매 프롬프트 입력 시, AI는 searchConcerts 툴로 이벤트 탐색→openConcertPage 툴로 상세 진입→purchaseTicket 툴로 구매 요청 단계별 실행
- 각 단계별로 사이트 UI가 정보를 동기화·갱신하여 사용자와 에이전트가 모두 진행 상태를 확인 가능
- 마지막 결제 단계는 사용자 확인을 위해 수동 처리 권장

### WebMCP는 현재 실험적 단계이며, 설치, 사용, 피드백 경로가 구체적으로 안내됨

- WebMCP는 현재 Chrome 146 이상 버전(특히 Chrome Canary 권장)에서 실험적 플래그로 활성화 필요
- 실험 플래그(URL 입력), Model Context Tool Inspector 확장 설치 방법 소개
- 공식 블로그(얼리 프리뷰 안내, 문서, 베스트 프랙티스) 및 GitHub(데모 코드, 인스펙터, 평가 CLI 등)에 자료 공개
- 베타 테스터 참여, 버그·불편사항 피드백 요청

### WebMCP는 웹사이트를 에이전트 고성능 API로 전환하고 사용자 경험을 혁신할 가능성이 있음을 강조

- 현행 웹의 화면 스크래핑 기반 에이전트 접근법(비효율·불안정)에 비해, WebMCP는 모든 사이트를 표준화된 API로 전환 가능
- 사용자는 필요 시 에이전트에 조작을 넘기거나 직접 다시 조작 가능, 유연한 Workflow 구현
- 전통적 UI·UX와 에이전트 간소화 경험을 동시에 제공할 수 있는 새로운 웹 활용 패러다임 제시
