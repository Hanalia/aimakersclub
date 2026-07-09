---
author: AI Makers Club
pubDatetime: 2026-07-09T23:45:42.057Z
title: "Building an ACP-Compatible Agent Live - Bennet Fenner, Zed"
slug: HsxQICTLF84
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Zed의 베넷 페너가 'ACP(Agent Client Protocol)'라는 새로운 오픈소스 표준을 기반으로 AI 코드 생성 에이전트를 실시간으로 구현하는 과정을 시연함"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/HsxQICTLF84/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building an ACP-Compatible Agent Live — Bennet Fenner, Zed](https://www.youtube.com/watch?v=HsxQICTLF84)  
**채널명:** AI Engineer

## *ACP 호환 에이전트 구축 라이브 — 베넷 페너(Zed)* 핵심 요약

- 이 영상은 Zed의 베넷 페너가 'ACP(Agent Client Protocol)'라는 새로운 오픈소스 표준을 기반으로 AI 코드 생성 에이전트를 실시간으로 구현하는 과정을 시연함
- ACP는 언어 서버 프로토콜(LSP)와 유사한 JSON-RPC 기반 통신규격으로, 다양한 에이전트와 클라이언트가 하나의 통일된 인터페이스로 상호 작용하도록 설계됨
- 현재 OpenCode, Cursor 등 주요 CLI 에이전트와 JetBrains, Obsidian, OpenClaw 등 40여 개 이상의 클라이언트가 ACP를 지원 중임
- Zed 에디터에서 ACP 호환 에이전트를 직접 연결해, 다양한 모델(Codex, Claude, Gemini 등) 기반 코딩 에이전트의 통합 활용이 가능함
- 실습에서는 TypeScript로 최소 기능 코딩 에이전트를 작성하고, ACP와 연결하기 위한 4가지 필수 함수를 구현함(initialize, 인증, 세션, 프롬프트)
- 실제로 ACP의 세션, 툴 호출, 출력 스트리밍, 취소처리 등 필수 통신 과정을 실 코드와 함께 라이브로 설명함
- 에이전트 구현 후 '파일 읽기/수정' 기능과 터미널 실행 기능까지 ACP를 통해 자동화함(실행 예시 제공)
- ACP에서는 스트리밍 출력, 파일시스템 프록시, diff 포맷(변경 이력 전달) 등 다양한 고급 기능도 지원하며, 표준 입출력(standard IO)으로 통신함
- 모든 데모 코드는 오픈소스 저장소로 공개 예정이며, agentclientprotocol.com에서 프로토콜 및 실습 코드를 확인할 수 있음
- 영상 마지막에는 ACP의 세부 컨텐츠 타입(diff 등)과 JetBrains 등 타 에디터에서의 원격연결 준비상황 등 궁금증도 직접 답변함

---

## 세부 요약 - 주제별 정리

### AI 코드 에이전트 생태계의 성장과 통합 인터페이스의 필요성이 강조됨

- 최근 Claude code, Codex, Gemini CLI 등 주요 AI 코드 에이전트 툴이 대거 등장하며 개발자동화 시장이 빠르게 확장됨
- 각 에이전트가 각기 다른 인터페이스와 프로토콜을 사용함에 따라, 하나의 개발 환경 내에서 다양한 에이전트를 원활하게 활용하려는 사용자의 니즈가 증가함
- Zed 팀은 AI 코드 에이전트와 개발 툴(에디터 등) 사이에 통일된 표준 통신 방법이 필요함을 인식함
- 이 문제를 해결하기 위해 LSP(언어 서버 프로토콜)나 MCP와 유사한, 표준화된 JSON-RPC 기반 프로토콜인 ACP(Agent Client Protocol)를 제안함

### ACP(Agent Client Protocol)는 다양한 에이전트와 클라이언트 간 상호운용성을 구현함

- ACP는 오픈소스 프로젝트로, 누구나 자유롭게 기여하고 사용할 수 있음
- 구조적으로 JSON-RPC 2.0 포맷을 사용하며, CLI 에이전트와 데스크톱/웹 클라이언트 간 1:1 통신을 지원
- ACP에 맞춘 어댑터 혹은 자체 모드를 도입해 이미 여러 에이전트(OpenCode, Cursor 등)가 지원 중임
- 클라이언트 측에서는 OpenClaw, JetBrains, Obsidian 등 최대 40개 이상의 툴이 ACP 기반으로 통합되고 있음
- OpenClaw와 같이 에이전트와 클라이언트 역할을 자체적으로 모두 할 수 있는 사례도 존재함

### 데모 프로젝트: 기본 AI 코드 에이전트 구성 및 기능 설명

- 본 실습에서는 TypeScript로 된 단순한 “미니멀 코딩 에이전트” 예제 코드를 사용함(발표자는 주 언어가 Rust임을 밝혀 TypeScript 실수 가능성 언급)
- 에이전트의 기본 기능은 ‘파일 읽기(readFile)’와 ‘기존 파일 수정(editFile)’의 두 가지임
- 구현 방식은 모델 API(Antropic의 Claude 모델 등)로부터 프롬프트와 이전 대화 기록(conversation)을 보내며, 양방향 처리 루프를 사용
- 툴 호출: 모델이 특정 작업(ex. 파일 읽기/쓰기)을 요청하면, 에이전트가 파일시스템에서 동작을 실행하고, 결과를 다시 모델로 전송함

### ACP 지원을 위한 TypeScript SDK 및 필수 함수 4가지 구현 과정이 제시됨

- ACP 호환을 위해 공식 TypeScript SDK에서 제공하는 ‘Agent’ 인터페이스를 반드시 구현해야 함
- 최소한으로 요구되는 4가지 핸들러/함수:
    - initialize: 지원하는 프로토콜 버전을 클라이언트에 응답
    - session 생성: 새 세션 요청시 랜덤 ID 발급 및 내부 상태 저장
    - prompt 처리: 세션별 프롬프트 요청을 받아 내부 상태 조회, 프롬프트 실행
    - cancel 지원: 요청 취소 기능(API로 직관적으로 연동)
- 이외에도 인증, 에이전트/클라이언트의 지원 기능(capabilities) 등 확장 프로퍼티가 존재하나, 최소 구현에서는 필수 아님

### 에이전트를 Zed 에디터에 ACP 방식으로 직접 접속시키는 절차가 구체적으로 시연됨

- Zed 에디터 내에서 ACP 호환 에이전트 실행을 위해 node [에이전트 파일 경로] 방식으로 쉽게 연동함
- 실제 예시에서 신규 ACP 에이전트를 빌드&런한 뒤, 프롬프트를 보내고 응답이 정상적으로 오가는 과정을 실시간으로 확인
- Zed의 ‘ACP 디버그 뷰’를 통해 세션 생성, 프롬프트, 세션 업데이트 등 전체 통신 흐름을 탐색할 수 있음

### 스트리밍 응답(토큰 단위 출력을 클라이언트에 노출) 구현 방식이 상세히 소개됨

- Claude 등의 모델은 API를 통해 실시간 토큰 단위 데이터를 반환
- ACP에서는 agent_message_chunk 형태로 세션 업데이트 메시지를 정의, 클라이언트에 출력 스트림을 실시간 전달
- Anthropic SDK의 streamOn(text)이벤트에 콜백 등록, 각 청크별로 ACP 세션 업데이트를 발송
- Zed 사용자 화면에서 실시간 토큰 진입 효과를 확인할 수 있음

### 도구 콜(tool call) 흐름 및 파일시스템 프록시 등 추가 고급 기능 구현이 시연됨

- 파일 읽기 요청 등 툴 콜 발생 시, 최초에는 status: "in progress" 상태로 ACP 세션 업데이트를 전송
- 툴 콜 작업 완료 후 status: "done", output 반환 방식을 통해 클라이언트 측에 진행현황 및 결과값 전달
- 실제 파일시스템(fs.readFile)을 사용하는 대신, ACP의 파일시스템 프록시(readTextFile)를 통해, 에디터의 ‘버퍼’ 상태(저장 전 임시 변경도 반영되는 내용)까지 에이전트가 접근 가능하도록 함
- 개발자는 이 과정에서 실제 코드와 함께 ACP 스펙의 활용법을 설명함

### 코드 수정 작업(파일 diff) 및 자동화 절차가 ACP 표준 기능으로 처리됨

- 파일 수정 요청이 들어오면, ACP의 diff 콘텐츠 타입을 이용해 ‘old text’, ‘new text’를 모두 세션 업데이트로 송신
- 클라이언트(Zed 등)가 diff 정보를 실시간 반영해 UI상에서 코드 변경 이력을 시각화
- 이 방식은 에이전트가 코드 텍스트 전체를 직접 변경하지 않고, 기존 및 수정본의 차이만 효과적으로 전송함

### 에이전트 내에 새 터미널 도구(tool) 추가를 AI 코딩 에이전트가 직접 자동화함

- AI 코딩 에이전트에게 ‘스스로 터미널 툴 추가’ 요청 프롬프트를 전송하여, 새로운 도구가 코드에 자동 추가됨
- ACP의 terminal capability를 활용하여, 클라이언트/에이전트가 상호 간 터미널 생성&제어 연동 기능을 사용할 수 있음
- 실습 예로 “sleep 5; ls” 커맨드 실행, 터미널 창에서 출력이 표시됨을 시연함

### ACP는 표준입출력 기반 통신과 다양한 클라이언트 확장용 트랜스포트 준비상황이 공유됨

- 현재 ACP 프로토콜은 기본적으로 표준 입력/출력(standard IO)으로 통신
- JetBrains 등 타 IDE 업체에서는 ‘원격 트랜스포트’ 확장 개발 중(향후 TCP/WebSocket 등 다양한 연결 방식 예정)
- 다양한 환경에서 에이전트와 클라이언트의 상호운용성 및 범용 확장성이 기대됨

### 오픈소스 공개 범위 및 추가 질문 답변으로 세션이 마무리됨

- 실습에 사용된 데모 코드는 곧 오픈소스 저장소(github 등)에 전체 공개 예정 (agentclientprotocol.com에 안내)
- “실제 diff 타입 사용법”, “세션 ID 관리”, “컨텐츠 타입 종류”, “통신 경로와 프로토콜” 등 세부 질문에 현장에서 직접 답변함
- 참가자 누구나 ACP 기반 코드/에이전트 개발 및 적용이 가능함을 강조하며 데모를 마침
