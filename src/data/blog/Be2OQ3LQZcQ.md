---
author: AI Makers Club
pubDatetime: 2025-12-22T08:18:54.405Z
title: "Build a RAG AI Agent with REAL-TIME Source Validation (CopilotKit + Pydantic AI)"
slug: Be2OQ3LQZcQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "RAG(검색 증강 생성) 시스템의 가장 큰 문제점은 AI 에이전트가 실제로 어떤 소스를 참고했는지 확인할 수 없다는 점임. 단순한 인용(citation)은 충분하지 않고, 실제로 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Be2OQ3LQZcQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Build a RAG AI Agent with REAL-TIME Source Validation (CopilotKit + Pydantic AI)](https://www.youtube.com/watch?v=Be2OQ3LQZcQ)  
**채널명:** Cole Medin

## *실시간 소스 검증이 가능한 RAG AI 에이전트 구축 (CopilotKit + Pydantic AI)* 핵심 요약

- RAG(검색 증강 생성) 시스템의 가장 큰 문제점은 AI 에이전트가 실제로 어떤 소스를 참고했는지 확인할 수 없다는 점임.
- 단순한 인용(citation)은 충분하지 않고, 실제로 반환된 소스 청크(chunk)를 사용자가 직접 승인/거절할 수 있게 만들어 투명성과 제어력을 극대화함.
- CopilotKit(프론트엔드)와 PyDantic AI(백엔드)를 조합, AGUI 프로토콜을 활용하여 실시간 양방향 동기화와 소스 검증이 가능한 RAG 에이전트를 개발.
- 프론트엔드에서 사용자가 승인한 청크만 사용하여 에이전트가 답변을 생성, 만약 정보가 없는 청크만 선택하면 답변에 반영되지 않음.
- 실시간으로 프론트엔드의 변화가 백엔드 에이전트와 동기화, 양방향 상태(state) 관리가 쉬워짐.
- AGUI 프로토콜 덕분에 다양한 에이전트 프레임워크(LangGraph, CrewAI, MRA, AGNO 등)와 손쉽게 통합 가능.
- 핵심 동기화는 CopilotKit의 useAgent hook을 통해 구현, 단 몇 줄 코드로 상태관리, 이벤트 구독, 대화 기록 통합 가능.
- 예제를 통해 Amazon의 Anthropic 8억 달러 투자 등 AI에이전트가 소스 기반 추론을 어떻게 하는지 구체적으로 시연.
- 오픈소스 Github 저장소 제공(대형언어모델 API 비용 제외), 누구나 직접 테스트 가능.
- CopilotKit 1.0과 A2UI(구글 Generative UI Spec) 등 최신 기능도 함께 소개, AI 에이전트가 동적으로 UI를 생성할 수 있는 미래 가능성 언급.

---

## 세부 요약 - 주제별 정리

### 대부분의 RAG 시스템은 실제 소스 검증 기능이 부족하며 인용만으로는 신뢰성 보장을 할 수 없음

- RAG 시스템에서 에이전트가 어느 문서를 기반으로 답변했는지 확인이 어려움.
- 에이전트가 허위 인용(hallucinated citation)이나 부적절한 문서를 참조할 가능성이 높음.
- 단순히 인용문(citation)을 첨부하는 것만으로는 신뢰성을 확보하기에 부족하며, 인용 자체도 조작될 수 있음.
- 인간의 검토를 거치는 "human in the loop" 기반 소스 검증 방식 도입 필요.
- 사용자는 반환된 소스 청크를 직접 확인하고, 필요한 부분만 승인해 답변에 활용하도록 설계됨.

### CopilotKit과 PyDantic AI 조합으로 강력한 소스관리 및 실시간 동기화가 구현됨

- 프론트엔드는 CopilotKit(React 기반), 백엔드는 PyDantic AI를 활용하여 시스템 구성.
- AGUI(Agentic Generative User Interface) 프로토콜을 통해 서로 다른 프레임워크 간 연결 용이.
- 프론트엔드에서 사용자가 청크를 선택할 때마다 그 변동이 실시간으로 에이전트 상태에 반영됨.
- CopilotKit의 useAgent hook 기능을 통해 대화 기록, 상태 동기화, 요청 전송이 일관되게 처리됨.
- 기존 시스템에서는 프론트-백엔드 간 여러 API 호출, 상태 동기화 등이 번거로웠던 반면, 본 구조에선 혁신적으로 단순화됨.

### 실제 데모 시연을 통해 RAG 에이전트의 소스 통제 과정을 명확히 볼 수 있음

- 예시 1: "OpenAI의 최신 펀딩 내역은?" 질문 → 관련 청크 다수 중 일부만 직접 선택해 답변 생성 요청.
- 각 청크는 개별적으로 클릭해 세부 내용을 확인 가능, 불필요한 정보를 제거함으로써 응답 신뢰성 향상.
- 선택된 청크 정보가 백엔드에 즉시 반영되어, 최종 답변 시 승인한 청크들만 분석·요약에 사용됨.
- 실시간 프런트-백엔드 싱크 덕분에 선택 과정과 답변 결과가 즉각적으로 연동됨을 시각적으로 확인 가능.

### CopilotKit의 useAgent hook 도입으로 실시간 상태관리와 이벤트 반응이 극도로 용이함

- useAgent hook은 프론트엔드에서 에이전트 객체 상태를 직접 읽고, 변경하며, 이벤트 구독 등 모든 관리 담당.
- 에이전트의 작동 여부, 대화 히스토리, 각종 수집된 도구 호출 툴의 상태까지 실시간으로 접근 및 제어 가능.
- 예전 방식대로라면 수백~수천 라인의 API 연동과 복잡한 상태 관리가 필요했으나, useAgent hook으로 몇 줄이면 구현 가능.
- 대규모 코드량 감소와 유지보수성, 확장성까지 극대화됨.

### AGUI 프로토콜은 다양한 에이전트 프레임워크와의 손쉬운 호환성을 보장함

- LangGraph, CrewAI, MRA, AGNO 등 주요 프레임워크가 공식적으로 AGUI와의 연동 가이드를 제공.
- PyDantic AI 또한 간단한 함수 호출만으로 AGUI 호환 API 엔드포인트(예: FastAPI 또는 localhost:8000)로 확장 가능.
- CopilotKit runtime으로 프론트엔드 전체를 감싸고, useAgent hook이 해당 AGUI 엔드포인트에 연결해 양방향 상태 전달을 실현.

### Amazon의 Anthropic 투자 예시로, 소스 기반 응답의 정확성을 실시간 실험함

- 데모 질문: "아마존의 Anthropic 투자에 대해 알려줘"
- 특정 청크(‘Cloud AI Wars’ 문서 1번 청크)만 선택 시, AWS가 Anthropic에 8억 달러 투자했다는 근거 기반 답변을 확인 가능.
- 선택한 청크에 정보가 없으면 에이전트는 그에 맞는 결과(예: 정보 없음)를 바로 반환함.
- 모든 청크의 실제 내용 확인 가능, 신뢰성 및 디버깅/테스트 시 진정한 투명성 제공.

### 전체 시스템의 상태 구조 설계가 프론트-백엔드 간 실시간 계약(Contract) 역할을 함

- 프론트엔드와 백엔드는 동일한 타입/데이터 구조(state 타입)를 바탕으로 실시간 정보를 공유함.
- PyDantic의 dependency injection으로 프론트에서 승인/거절된 청크 상태가 곧바로 에이전트의 의사결정 맥락으로 동작.
- 모든 변경사항은 AGUI 스트림(event)을 통해 곧바로 프론트로 전송, UI가 즉시 새로고침됨.

### PyDantic AI의 워크플로우와 AGUI 통합 방식이 코드 차원에서 상세하게 설명됨

- 백엔드 툴 정의: 첫 툴은 지식베이스(knowledge base) 검색, 두 번째 툴은 승인된 청크 ID만 바탕으로 답변 생성.
- 프론트엔드에서 승인된 청크 ID를 setState로 전달, 해당 상태는 백엔드에서 도구의 의존성 정보로 받아서 처리.
- 코드 예시를 통해 도구 호출 및 AGUI compatibility화 방법까지 구체적으로 공개.

### 프론트엔드와 백엔드 연동 구현은 불필요한 API 호출 최소화로 개발 복잡도를 대폭 줄임

- React 애플리케이션 전체를 CopilotKit runtime으로 감싸고, useAgent만으로 즉시 에이전트 접근 가능.
- 청크 승인, 상태 변경, 대화 히스토리 관리 등 모두 hook 기반으로 처리되므로, 별도의 API 호출이 불필요.
- 유저 인터랙션(체크박스 등)이 곧바로 백엔드 상태로 반영됨.

### 최신 CopilotKit 1.0/1.5 버전과 A2UI 지원으로 에이전트 기반 동적 UI 생성까지 전망 가능

- CopilotKit v1.0의 가장 큰 기능 업데이트는 useAgent hook, 이후 v1.5에서는 A2UI(구글 Generative UI spec) 지원 추가.
- A2UI: LLM 또는 에이전트가 대화 맥락에 따라 동적으로 프론트엔드 UI 컴포넌트 생성 가능.
- CopilotKit/AGUI 구성의 파워와 혁신성, 차세대 에이전트 탄생을 위한 초석임을 언급.

### 오픈소스 제공 및 직접 적용 가능성 강조로 AI 실무자/개발자에게 실용적 지침을 제공함

- 영상에서 사용된 에이전트 전체 코드 및 구현방법이 github에서 무료 제공(단, LLM API 비용은 별도).
- PyDantic과 CopilotKit, AGUI의 통합 구현을 다양한 AI 에이전트 테스트 및 내재화에 사용할 수 있음.
- 실제 현업/사내용 RAG 플랫폼, 오픈소스 하네스(harness) 등 다양한 확장 활용 예시 제시.
