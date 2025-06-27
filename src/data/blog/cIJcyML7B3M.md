---
author: AI Makers Club
pubDatetime: 2025-06-27T23:45:20.528Z
title: "Building Agents at Cloud Scale - Antje Barth, AWS"
slug: cIJcyML7B3M
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Antje Barth(AWS)가 클라우드 환경에서 대규모 AI 에이전트(Agent)를 구축하는 방법과 실제 적용 사례를 소개 전 세계에 6억 대가 넘는 Alexa 기기가"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/cIJcyML7B3M/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building Agents at Cloud Scale — Antje Barth, AWS](https://www.youtube.com/watch?v=cIJcyML7B3M)  
**채널명:** AI Engineer

## *클라우드 규모의 에이전트 구축 — Antje Barth, AWS* 핵심 요약

- 본 영상은 Antje Barth(AWS)가 클라우드 환경에서 대규모 AI 에이전트(Agent)를 구축하는 방법과 실제 적용 사례를 소개
- 전 세계에 6억 대가 넘는 Alexa 기기가 보급되어 있으며, AI 발전에 힘입어 Alexa 등 에이전트 서비스가 수천·수만 개 전문가 시스템 및 파트너 서비스와 연동
- AWS가 3주 만에 개발·출시한 코드 개발 지원 에이전트 ‘Amazon Q Developer Agent’의 빠른 개발 사례 공유
- 에이전트 개발 방식을 기존의 세부적 코딩 지시에서, 대규모 언어모델(LLM)의 추론·계획·실행 능력을 활용한 ‘모델 주도형’ 접근법으로 전환
- 누구나 쉽게 사용할 수 있도록 오픈소스 파이썬 SDK인 ‘Strands Agents’ 출시: 수십 줄 코드로 에이전트 구축 가능, Amazon Bedrock 등 다양한 모델/플랫폼 지원
- Strands Agents에 20개 이상의 사전 구축 도구 내장, Knowledge Base 검색, 파일 조작, API 호출 등 다수 기능 제공
- 6,000개 이상의 도구를 관리하는 AWS 내부 에이전트 사례와 Knowledge Base+Retrieve Tool 활용법 설명
- MCP(Machine Control Protocol)를 통해 AWS Lambda 기반 MCP 서버 및 원격 에이전트 도구 통합, 세션 관리·보안 연동까지 실습 데모 시연
- MCP 오픈 프로토콜 발전 참여와 에이전트 상호 연결, 향후 에이전트 스토어 및 범용 AI 환경 전망 제시
- 영상 마지막에 추가 세션·블로그 및 데모 안내 제공

---

## 세부 요약 - 주제별 정리

### Alexa와 같은 대규모 에이전트 서비스는 수천만 디바이스와 전문가 시스템을 연동함

- Alexa 기기는 약 6억 대 이상이 전 세계에 보급되어 있음
- Alexa Plus는 수백 개의 전문가 시스템(Expert Systems)으로 구성됨
    - 각각의 시스템은 특정 작업을 수행하는 그룹화된 기능, API, 명령어로 이루어짐
- 수만 개의 파트너 서비스와 디바이스까지 오케스트레이션하여 다양한 사용자 요청을 처리
- 이러한 대규모 연동·협력은 향후 모든 에이전트 기반 서비스에서 주요 패러다임이 될 것
- 미래에는 각각 고유한 능력을 가진 특화형 에이전트들이 유기적으로 협력하는 환경이 주류를 이룰 전망

### AWS의 코드 지원 에이전트 ‘Amazon Q Developer Agent’는 단 3주 만에 출시됨

- Amazon Q Developer는 소프트웨어 개발 라이프사이클 전반을 지원하는 코드 보조 에이전트
- 몇 달 전에는 CLI 터미널 기반 Q Developer Agent도 공개되어, 개발자가 자연어로 터미널 작업 가능
- 파일 읽기·쓰기, 이슈 디버깅, 자연어 질문 지원 등으로 터미널 생산성 향상
- 실제 AWS 내부 개발팀이 이 서비스를 개발하고 상용 배포까지 3주밖에 걸리지 않았음을 청중 투표와 함께 강조
- 빠른 개발 속도는 AI가 가져온 실행력(Execution Power) 덕분임을 실질 사례로 증명

### 모델 주도형(LLM 기반) 에이전트 개발 방식으로 생산성과 유연성이 극대화됨

- 전통적 방식은 세세한 명령과 논리를 코드로 지정해야 했음
- AWS는 ‘모델 주도형(Model-driven Approach)’ 개발 패러다임을 적용
    - 최신 LLM이 추론(Reasoning), 계획(Planning), 실행(Action-taking) 능력을 맡아 처리
    - 개발자는 ‘에이전트의 목표(What)’만 설정하고, ‘실행 방법(How)’은 모델에 위임
- 이 패러다임을 AWS 내부뿐 아니라, 전 세계 개발자에게 공개해 활용하도록 함

### 누구나 쉽게 에이전트 구현이 가능한 오픈소스 ‘Strands Agents’ SDK를 출시함

- 최근 몇 주 전, ‘Strands Agents’라는 파이썬 기반 오픈소스 SDK를 공식 발표
- 단 몇 줄 코드만으로 에이전트 구축, 로컬 테스트, 클라우드에 배포까지 가능
- 설치 및 이용 방법은 간단: 설치, import, pre-built tool 연결, 질문 또는 복잡한 워크플로우 구현
- 에이전트의 ‘모델’과 ‘도구’를 DNA의 2가닥(스트랜드)에 비유 → 명칭도 AI가 직접 작명함
- Amazon Bedrock, Llama, Anthropic, OpenAI 등 다양한 모델 프로바이더와 연동 지원, 커스텀 프로바이더도 개발 가능

### Strands Agents는 20여 개 내장 도구와 다양한 AI 모델·플랫폼 연동을 기본 제공함

- 내장 도구(Pre-built Tools)는 파일 조작, API 호출, AWS 서비스 연동 등 단순 ~ 복잡 작업 모두 포괄
- 메모리/검색/RAK(Recall-Augmented Knowledge), Multi-agent workflow(그래프 기반, 대규모 Subagent Swarm) 등을 위한 도구 제공
- 주목할 만한 도구: ‘Retrieve Tool’로 Knowledge Base에 시맨틱 검색(예: AWS 내부 6,000개 도구 관리 활용)
    - 모든 도구 정보를 context window에 넣지 않고, Retrieve로 필요한 도구만 선별적으로 모델 컨텍스트에 제공하는 방식
- 이미지, 비디오, 오디오 등 멀티모달 처리 지원
- Agent 간 workflow, Deep reasoning 도구, MCP 연동 등 다양한 확장 지원

### MCP(Machine Control Protocol) 통합으로 수천 개 외부 도구와 원활하게 연결 가능함

- MCP 서버와의 통합은 Strands Agents에서 네이티브로 지원
- AWSLabs의 GitHub 레포(MCP 서버 구현 모음)를 활용해 쉽게 MCP 서버를 구축 및 활용 가능
- MCP 서버는 일반적으로 표준 입출력(Standard IO) 기반 FastMCP, Python SDK 등으로 구현
    - D&D(던전&드래곤)에서 사용하는 20면체 주사위(d20) 굴리기 예시로 MCP 연동 데모 작성
- 수천 개의 외부 MCP 서버에 접속해, 이를 하나의 에이전트 도구로 활용 가능
- 향후 Agent-to-Agent(A2A) 프로토콜 지원도 예정

### AWS Lambda와 결합한 MCP 서버/에이전트 서비스는 클라우드 스케일에 최적화됨

- MCP 서버를 AWS Lambda 위에서 실행하여, API Gateway 등을 통해 원격에서 도구 호출 가능
- 보안·인증(Authorizer, Cognito), 세션 데이터 관리(DynamoDB 테이블 등)도 AWS 인프라와 통합 구현
- 예시: MCP Lambda 핸들러 및 도구 정의 코드, Lambda 배포, Gateway URL 생성→ Strands Agents 클라이언트가 MCP 서버 연결 후 도구 호출 실행 시연
- 이미 보유한 Lambda 기능과 기존 코드 자산 모두 Agent 도구로 쉽게 통합 가능

### Knowledge Base와 Retrieve Tool 활용으로 대규모 도구/서비스를 효율적으로 관리함

- 예시로, AWS 내부에서 6,000여 개 도구의 정보를 Knowledge Base에 저장
- Retrieve Tool을 이용해 LLM이 과제에 가장 적합한 도구만 검색·선별해서 context에 포함
- 이로써 context window에 올릴 수 없는 대규모 도구/정보를 효율적으로 활용 가능

### MCP 및 Agent 오픈 프로토콜 생태계 확장과 공동 발전이 진행 중임

- AWS는 MCP Steering Committee에 공식 합류, 코드 기여와 프로토콜 발전에 적극 참여
- 오픈소스 블로그 시리즈를 통해 관련 기술·활용법 지속 발표
- 다양한 베스트프랙티스, 오픈 프로토콜이 생태계 전반으로 확산 중

### 미래에는 모든 디지털 상호작용의 기본 단위가 ‘에이전트 호출’이 될 전망임

- 동료 Danielle의 발표 인용: “모든 디지털 상호작용의 원자 단위(atom unit)는 에이전트 호출(agent call)이 될 것”
- 앞으로는 각종 ‘에이전트 스토어’에서 개인맞춤 에이전트들이 협력, 복합 작업을 자동 처리하는 환경이 열릴 것
- 현재 이미 많은 개발자들이 이 미래를 함께 구축 중임을 강조

### 영상에는 향후 심화 세션, 데모, 오픈소스 리소스 안내가 포함되어 있음

- Mike 동료는 ‘롤링 다이스’ 데모 및 MCP/Strands 활용 심화 공개 예정
- Suman 동료가 Strands 심층 세션 예고
- 관련 리소스(블로그, QR코드, GitHub 등)와 커뮤니티 이벤트 참가 독려
