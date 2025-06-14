---
author: AI Makers Club
pubDatetime: 2025-06-14T08:18:44.034Z
title: "Exposing Agents as MCP servers with mcp-agent: Sarmad Qadri"
slug: uFPAtKIN-FQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "2025년은 에이전트 대중화의 해가 될 것이며, MCP(Model Context Protocol) 도입으로 에이전트 설계가 더욱 간단하고 강력해짐 MCP는 LLM이 도구·데이터·서"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/uFPAtKIN-FQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Exposing Agents as MCP servers with mcp-agent: Sarmad Qadri](https://www.youtube.com/watch?v=uFPAtKIN-FQ)  
**채널명:** AI Engineer

## "*mcp-agent으로 MCP 서버로서 에이전트 노출하기*" 핵심 요약

- 2025년은 에이전트 대중화의 해가 될 것이며, MCP(Model Context Protocol) 도입으로 에이전트 설계가 더욱 간단하고 강력해짐
- MCP는 LLM이 도구·데이터·서비스와 표준화된 방식으로 연결할 수 있도록 해주며, 이미 Google, OpenAI, Microsoft 등 주요 기업이 채택
- 기존에는 MCP 서버가 REST API를 MCP 툴에 단순 매핑하는 수준이었으나, 이제 MCP 서버 자체가 에이전트로 구현될 수 있음
- MCP 기반 에이전트 아키텍처는 전통적 복합 프레임워크 대신, 간단한 패턴과 표준 프로토콜 그리고 우수한 LLM 만으로 가능
- Anthropic가 제안한 “Augmented LLM” 및 다양한 에이전트 패턴(반복 루프, 평가자-생성자, 오케스트레이터 등)이 실제 프로덕션에서 사용됨
- MCP-에이전트(mcp-agent) 라이브러리는 이러한 패턴을 MCP 네이티브 환경에 맞춰 구현하고, 모든 비즈니스 애플리케이션이 MCP와 연동 가능하다고 가정
- 에이전트를 MCP 서버로 노출하면, 클라이언트(MCP compatible)에서 다양한 복합 에이전트 워크플로우 및 다중 에이전트 협업 가능
- 에이전트는 본질적으로 비동기 워크플로우(Temporale, Airflow 등)로 모델링해야 하며, Paused/Resume, Human-In-The-Loop, 실패/재시도를 지원
- MCP 표준 도입으로 “작성 한 번, 어디서나 실행”이 실현되고 복합 시스템, 플랫폼 독립성, 확장성 등 다양한 기술적 이점 확보
- 실제 마크다운 스토리 파일의 평가 자동화 데모를 통해, 에이전트가 파일 I/O, 웹 데이터 접근, 평가, 스타일 체크 등 복잡한 작업을 비동기로 분산 처리함을 확인

---

## 세부 요약 - 주제별 정리

### LSP(언어 서버 프로토콜)와 유사한 통합 표준 프로토콜의 필요성이 AI 에이전트에도 대두됨

- 발표자 Sarmad Qadri는 Microsoft에서 LSP(언어 서버 프로토콜) 개발에 참여 경험이 있음
- LSP는 IDE와 언어 서버 간 일관된 표준 API를 구현, 이전의 파편화됐던 방식(IDE별 별도의 API 필요)을 완전히 변화시킴
- LLM 도구 통합에서도 이전에는 각 플랫폼별 연결이 달랐으나, LSP처럼 표준화된 프로토콜이 필요하다고 오랫동안 고민
- 2023년 Scratchpad 기록에 따르면, ChatGPT 플러그인 시대부터 인증·도구연결·데이터 접근 등 LLM에서의 표준화 필요성이 대두됨
- 최근 Anthropic에서 발표한 Model Context Protocol(MCP)이 LSP와 유사하게 LLM과 외부 도구·데이터를 연결하는 단일 인터페이스 제공

### 2025년 에이전트 기술 스택은 뛰어난 LLM, 표준 MCP, 간단한 아키텍처로 구현됨

- 더 우수해진 LLM(Reasoning Model)이 등장해, 기존 프레임워크 레이어에서 처리하던 복잡성을 추론 레이어로 이동
- 앱 개발자는 모델 API 호출만으로 이전보다 훨씬 다양한 작업을 쉽게 수행 가능
- MCP는 LLM이 도구, 데이터, 리소스, 외부 서비스 등과 통일된 방식으로 연결되게 하며, 과거의 여러 플랫폼 별 연결 필요성을 단일화
- 이미 Google, OpenAI, Microsoft 등 주요 AI 기업과 경쟁자들이 MCP 표준에 합류
- 최신 에이전트 아키텍처는 복잡한 AI 프레임워크 대신, 간단한 오케스트레이터/컨트롤러 구조와 표준 프로토콜·LLM 조합만으로 충분
- 단일화된 에이전트 패턴을 빠르고 신뢰성 있게 구성할 수 있음

### Anthropic의 “효과적인 에이전트 구축” 패턴들이 실제 운영 환경에서 입증됨

- Anthropic는 "Building Effective Agents" 블로그를 통해, 실무적이고 생산환경에서 검증된 일부 에이전트 패턴을 공개
- 가장 기본적 패턴: Augmented LLM(도구·데이터 접근이 가능한 LLM), 입력을 받아 여러 번 툴 호출/데이터 검색 후 결과 반환
- 생성자(Generator) LLM과 평가자(Evaluator) LLM을 반복 연결, 품질 피드백 후 반복 개선 후 결과 산출
- 다수의 서브 에이전트로 작업을 분산(fan-out)하고 결과 집계(fan-in)하는 분산 시스템 패턴
- 오케스트레이터(Orchestrator) LLM이 플랜 생성·서브에이전트에 작업 할당·결과 종합 등 동적 플로우 제어까지 담당하는 패턴

### mcp-agent: MCP 네이티브 기반으로 다양한 에이전트 패턴을 실현하는 오픈소스 라이브러리 개발

- Sarmad Qadri가 개발한 오픈소스 라이브러리 “mcp-agent”는 모든 에이전트 패턴을 MCP 환경에서 작동하게 중점적으로 설계
- MCP가 모든 SaaS/비즈니스 애플리케이션, 예: Notion, Google Docs, Linear, Cursor 등과 곧 연동된다는 가정
- 각 SaaS 제품은 “GitHub MCP 서버”, “Linear MCP 서버” 등 고유의 MCP 서버를 노출하게 되고, MCP 클라이언트는 MCP 서버에 쉽게 연결 가능
- mcp-agent의 큰 특징: 에이전트 자체를 MCP 서버로 노출하여, 다양한 클라이언트가 표준화된 방법으로 에이전트에 접근 가능

### 에이전트를 MCP 서버로 배포할 경우, 다중 에이전트 협업 등 복합 구조가 쉽게 구현됨

- MCP 서버로 노출된 에이전트는 다른 MCP 클라이언트에서 원격 호출이 가능
- MCP 내에서 에이전트가 다른 에이전트(MCP 서버) 호출·조정·협업까지 수행할 수 있음
- 일반적인 구성 예시: MCP 클라이언트 → (여러) MCP 일반 서버(예: GitHub, Linear) + MCP 에이전트 서버 → (재귀적 호출 가능)
- 네트워크상에서 다양한 에이전트가 한 명령으로 활성화되고, 서로 연동/조정/결과 종합까지 자동화
- 이를 통해 복합적인 멀티에이전트 시스템, 컴포저블 구조, 다자간 협업이 자연스럽게 실현

### MCP 표준의 도입으로 플랫폼 독립성과 확장성, 컴포저빌리티가 크게 향상됨

- MCP 표준을 사용하면 에이전트/툴을 “한 번 개발, 어디서든 재사용” 가능, 플랫폼 종속성 제거
- 복잡한 멀티에이전트 시스템도 동일한 프로토콜 내에서 자유롭게 구성 및 재조합 가능
- 에이전트 워크플로우를 별도의 인프라에 분산 배포하여, 컴퓨팅 리소스를 유연하게 확장/관리(Scalability, Durability 개선)
- 클라이언트-에이전트 분리로 다양한 VOC(interaction) 환경 지원 가능

### 에이전트 본질은 비동기 워크플로우이며, 동기/비동기 실행, 인간 참여, 재시도/중단 등 유연성을 갖춰야 함

- 에이전트 실행은 중간에 일시 정지(Pause)/재개(Resume) 가능, 필요시 사람의 피드백(Human-in-the-loop) 대기
- 실패 시 재시도(Failure & Retry), 특정 이벤트(webhook, cronjob 등)에 의해 트리거될 수 있음
- 즉, “채팅 내 동기적 추론” 뿐 아니라, 외부 이벤트/스케줄에도 대응하는 장기 실행 에이전트 구조가 맞음
- Temporal, Airflow 등 분산 비동기(orchestration) 플랫폼 활용해 월등한 신뢰성과 확장성 확보 가능

### 실제 데모: MCP 서버·에이전트 조합으로 마크다운 문서 평가 및 리포트 작성 자동화

- 예시 업무: 학생의 쇼트 스토리(markdown 파일) 로드 → 교정, 사실관계, 스타일(APA 가이드 참고) 채점 → 리포트 파일로 반환
- MCP 서버 예: fetch MCP 서버(웹페이지 등 외부 데이터 취득), 파일시스템 MCP 서버(로컬 파일 입출력)
- 여러 에이전트(finder, writer, proofreader, fact checker, style enforcer, orchestrator)가 역할별로 정의됨
    - Finder: 인터넷/디스크에서 내용 취득
    - Writer: 파일로 쓰기
    - Proofreader/Fact checker/Style enforcer: 각각 교정, 사실 점검, 스타일 체크 처리
    - Orchestrator: 전체 계획·분배·종합 책임
- 약 100줄 코드로 상당히 복잡한 워크플로우를 구성, Temporal 백엔드로 실행함
- 플랜 생성을 시작으로, 디스크에서 스토리 불러오기→분석/평가/채점→결과파일 생성 순차 처리
- 각 단계는 실패/재시도/Human-in-the-loop 등 지원, 전체 워크플로우 진행 상태도 시각적으로 추적 가능
- 처리 결과물(graded report.markdown 파일)은 모든 평가 기준을 자동 반영한 내용으로 생성

### MCP 서버로 에이전트 노출 시, 원격에서 다양한 클라이언트(예: Claude Desktop 등)에서 재사용 가능

- 에이전트를 MCP 서버로 등록하면, 워크플로우 형태로 자신의 기능을 노출
- 다른 MCP 클라이언트에서 같은 형식으로 워크플로우 인풋 전달 및 진행/상태 체크 가능
- 예: Claude Desktop 등에서 파일 전달→에이전트 워크플로우 실행→상태(polling) 모니터링→완료시 결과 수신(오프라인, 비동기 지원)
- 즉, 어디서든, 언제든, 다양한 응용환경에서 동일한 에이전트워크플로우를 반복 실행 가능

### MCP 생태계의 확장과 혁신으로 에이전트의 미래에 무한한 가능성이 열림

- MCP 도입으로 인해, 에이전트/LLM/툴의 융합 및 활용 가능성이 극적으로 넓어짐
- 모든 도구, 데이터, AI 기능이 하나의 네트워크상에서 표준화된 방법으로 상호 운용 가능
- 기존 PoC(Proof of Concept) 단계에 머물던 다양한 에이전트 기반 자동화/정보검색/비정형 데이터 처리 등이 본격적으로 현실화될 전망
