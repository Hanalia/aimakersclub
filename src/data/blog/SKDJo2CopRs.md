---
author: AI Makers Club
pubDatetime: 2026-06-13T23:45:03.613Z
title: "Why Eval++ Is the Next Great Compute Primitive - Sunil Pai & Matt Carey, Cloudflare"
slug: SKDJo2CopRs
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Cloudflare의 에이전트 팀(매트 캐리와 수닐 파이)이 자사의 AI 에이전트 인프라, Durable Objects, Dynamic Workers(=Eval++ 개념"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/SKDJo2CopRs/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Why Eval++ Is the Next Great Compute Primitive — Sunil Pai & Matt Carey, Cloudflare](https://www.youtube.com/watch?v=SKDJo2CopRs)  
**채널명:** AI Engineer

## *Eval++가 차세대 컴퓨팅 프리미티브인 이유 — Sunil Pai & Matt Carey, Cloudflare* 핵심 요약

- 본 영상은 Cloudflare의 에이전트 팀(매트 캐리와 수닐 파이)이 자사의 AI 에이전트 인프라, Durable Objects, Dynamic Workers(=Eval++ 개념), 최신 데이터 저장 및 샌드박스 기술 등을 상세히 소개한다.
- Cloudflare는 서버리스이면서도 상태(stateful)를 유지하는 Durable Objects를 통해, 실시간 협업·동기화 및 장시간 동작이 필요한 AI 에이전트 구현을 가능하게 만들었다.
- Durable Objects는 기존 FaaS(함수형 서버리스)와 달리 각 객체별로 영속 상태를 가지며, 글로벌 네트워크 덕분에 ex) 런던에서 15ms 등 매우 짧은 레이턴시를 실현한다.
- Dynamic Workers(=Eval++)는 사용자가 코드를 동적으로 작성·실행(심지어 LLM이 코드 생성)하여 고립된 환경에서 안전하게 실행하는 "진화한 eval" 프리미티브로 평가받는다.
- 안전한 코드 실행을 위해 자바스크립트만 실행, 외부 API 접근 권한 제한, 환경 변수 미공개, 샌드박스 내 API 화이트리스트 등 강력한 보안 정책을 적용하였다.
- AI SDK, LangChain, Vercel AI SDK 등 다양한 라이브러리를 Cloudflare 에이전트와 연결해, 동기화·재개(resumability) 등 상위 기능을 쉽게 제공한다.
- Cloudflare Durable Objects는 MCP 서버 및 실시간 협업, 다중 브라우저/탭 동시 스트리밍 등 복잡한 분산 시스템 기능을 단순하게 구현한다.
- 코드 모드(Code Mode)를 활용하면 클라우드 내에서 자동화 및 확장 기능을 안전하게 추가할 수 있고, 아예 사용자 정의 코드를 실행하여 2600개 API 엔드포인트 제어도 가능하다.
- 스토리지로는 Durable Object 내장 SQLite, 대용량 저장 R2, 가상 파일시스템 등이 통합 제공되며, dynamic worker 기반 플러그인/확장 구조도 지원한다.
- 플러그인 샌드박스화, M- CMS, Next.js 지원, Python/Eval++/WASM/Zig 등 언어 확장 등 Cloudflare 에이전트 생태계의 발전 방향도 함께 공유한다.

---

## 세부 요약 - 주제별 정리

### Cloudflare는 Durable Objects로 서버리스이면서 영속 상태를 가진 컴퓨팅을 구현함

- Durable Objects는 ID 기반으로 객체를 생성하여, 모든 후속 요청이나 연결(WebSocket 등)이 동일한 객체로 라우팅됨
- 전통적 FaaS(function as a service)는 상태를 저장하지 못해 데이터베이스 연동 등 복잡성이 높아짐
- Durable Objects를 활용하면 실시간 협업 서비스(예: TLDraw, 여러 기기 동기화)가 초저지연(런던 기준 15ms)으로 동작함
- "stateful serverless"라는 다소 혼란스러운 개념을 실현하며, 배경 실행·장시간 프로세스 유지·초대규모 확장·글로벌 동기화까지 지원
- Durable Objects 기반 에이전트는 장시간 미접속 상황에서도 하이버네이트/재시작·데이터 영속성을 제공함

### AI 에이전트 인프라는 Vercel AI SDK 등과 고도화된 통합이 가능함

- Cloudflare는 LangChain, Vercel AI SDK 등과 바로 연동되는 에이전트 백엔드를 제공함
- Vercel AI SDK 백엔드는 Cloudflare가 가장 뛰어난 구현(툴 호출, 동기화, 재개 등)으로 강조
- 에이전트 SDK는 React Hooks 또는 일반 JS 클라이언트도 제공되어, 다양한 프론트엔드와 손쉽게 통합 가능
- 예시: 매주 데이터(깃 기록, 위키, 노션 등) 추출하여 매니저에 자동 보고·스케줄링 기능 등 손쉽게 구현
- 초대규모(백만~조 단위)로 에이전트 인스턴스 자동 확장 가능

### Durable Objects는 MCP 서버, 실시간 협업, 스트리밍 등에 최적화됨

- MCP(멀티 클라이언트 프로토콜) 서버 배포 시, 클라이언트~서버간 상태 연결 필요 → Durable Objects가 이를 자연스럽게 실현
- PayPal, Sentry, Linear, Intercom 등 대형 서비스가 MCP용으로 Durable Objects 채택
- 세션 유지, 동기화, 실시간 콜라보레이션, 스트리밍 등 대부분의 분산/실시간 기능을 복잡한 분산 시스템 지식 없이 구축 가능
- 예제: LLM으로 긴 텍스트 생성 중 새로고침/다중탭 접속 시, 스트림이 자연스럽게 이어지고 동기화됨
- "AI는 멀티플레이어 게임이 되어야 한다"는 비전 하에, 여러 사람이 하나의 에이전트 인터페이스를 동시에 활용하는 협업도 손쉽게 제공됨

### Dynamic Workers(=Eval++)는 동적이고 안전한 코드 실행의 새로운 패러다임을 제시함

- Dynamic Worker(=Eval++): 문자열로 전달된 코드(사용자/LLM 생성)가 자체 샌드박스에서 즉시 실행됨
- 기존 eval 사용 권고금지(보안 위험)와 달리, Cloudflare는 매우 강력한 경계를 둔 sandbox 내에서 빠르고, 저렴하고, 안전하게 코드 평가를 허용함
- 전체적인 컨셉은 “last 30 years eval은 금기였지만, 지금은 eval++로 안전하게 사용한다”는 것
- 써드파티 DSL/JSON으로 동작 정의 → 실제 동적 자바스크립트 코드 직접 생성 및 실행 가능(구현 복잡도↓, 유연성↑)
- 워커 단위 격리, 수십억 인스턴스 초고속 생성, 경량(가상머신/컨테이너보다 가벼움), 자동 권한 제어 등 강조

### 샌드박스형 Dynamic Worker는 강력한 보안 아키텍처로 안전하게 확장됨

- 샌드박스 내에서 실행되는 코드는 자바스크립트로 한정, 외부로의 fetch는 허가된 도메인만(예: github.com/xyz) 허용
- 환경변수 미공개, 외부 API 호출 화이트리스트 지정, 인바운드/아웃바운드 통제 등 최소 권한 원칙 적용
- 플러그인 및 확장 기능은 샌드박스 내에서만 동작, WordPress 플러그인 보안 이슈처럼 서버 전체 위험 없이 안전하게 제공
- 개발자는 너무 느낀 실제 권한만 명시적으로 부여하고, 기본적으론 모든 권한 차단
- 예시: Cloudflare의 새로운 CMS의 플러그인은 Dynamic Worker 기반(보안성 장점↑)

### 코드 모드는 클라우드 환경에서 확장/자동화의 진정한 가능성을 열어줌

- 코드 모드는 에이전트 인프라에 자동화 또는 고유 기능을 "온더플라이"로 추가할 수 있는 핵심 프리미티브
- 곧 열릴 발표에서 2,600여개 Cloudflare API 엔드포인트를 1,000토큰 이내로 동적 코드 실행만으로 개방하는법 시연 예정
- 추상적 DSL/JSON 대신 실제 JS/React/HTML 코드까지 직접 생성 및 실행 → 프론트/백엔드 모두에서 자동화/생성 UI 가능
- SDK에서 다양한 예시(주기 스케줄, 위키 자동 정리, 사용자 맞춤 연동 등) 실시간 구현가능

### 프론트엔드에서의 UI 생성도 JSON 대신 코드 생성으로 진화하고 있음

- 기존에는 보안상의 이유로 사용자 입력으로부터 직접 코드를 실행하지 못해, 생성형 UI를 JSON 등으로 한 번 더 래핑
- Cloudflare Dynamic Worker 환경에서는 LLM 등으로 바로 HTML/React 코드를 생성(및 실행/렌더) 가능
- 예시: CloudArtifcats 등은 이미 클라이언트 측에서 HTML 직접 렌더링을 실현
- JSON 기반보다 코드 기반이 훨씬 강력한 확장성, 유연성을 가져옴(FoU: 코드 자체가 UI/기능의 정의가 됨)
- 실제 서비스에서도 리액트 컴포넌트 생성→즉시 실행/UI로 적용 가능

### 에이전트 인프라는 스토리지·확장성·플러그인·서비스 연계 등 범용성을 갖춤

- Durable Object 기반 SQLite(로컬 영구저장), R2(대용량 저장), 가상 파일시스템(@cloudflare/shell) 등 다양한 스토리지 연계
- API가 이미 제공되고 실제 서비스에 사용 중(@cloudflare/shell 제공)
- 동작 확장(코드 실행, 플러그인)은 동적으로 Dynamic Worker에서 처리 → WordPress와 같이 보안 이슈 없이 확장 가능
- Cloudflare Sandbox, Daytona, 브라우저 내 실행 등 다양한 환경과 연계 가능 및 타사 프레임워크 연동(Next.js fully supported on Wheat 등)
- 파이썬, Zig(특히 WASM 번들 용량 최소화), JavaScript 등 다양한 언어 지원 및 WASM 확장

### 실제로 다양한 언어 및 번들·캐싱 기술도 통합 제공됨

- JavaScript, Python(조만간 완전 지원), WASM, Zig 등 실제 다양한 언어 지원
- Zig는 Rust/Go보다 작은 WASM 번들 사이즈로, Cloudflare Workers용 신규 언어로 진입
- Worker Bundler: 워커 내에서 직접 NPM 패키지 내려받아 타입/JSX/TS 자동 변환 후 실행, 클라우드 캐시(NPM 다운타임 영향 최소화) 활용
- LLM 자동코드생성이 범용화됨에 따라 언어 제약도 급격히 의미 줄어듦(실제 코드 자동화 중시)

### Cloudflare의 저비용 구조는 10여년 전 아키텍처 결정에 기반함

- 대규모 데이터센터 대신 ISP 근처의 소형 하드웨어 설치, 레벨0(top-tier) ISP와의 대량 대역폭 구매, 국경간 전송비용 최적화로 저비용 실현
- 무료 계정은 마케팅 비용이 아닌 사업구조의 부산물, $5/월로도 수백만달러 SaaS 운영 가능케 함
- "Friends and Family" 문화(지인 무료 크레딧 등), 내부 커뮤니티/사이트에서 자유로운 크레딧 제공
- 이런 구조가 Cloudflare의 서비스 확장성, 저가격 전략의 핵심임

### 최근 공개 및 예고한 신규 서비스와 에이전트 생태계 로드맵도 공유됨

- 신규 CMS(M-)는 Workers Durable Objects/Dynamic Workers 기반으로 플러그인 샌드박스화 구현
- CMS 자체는 Cloudflare 종속이 아니며, 동적 워커 기술은 타사 플랫폼 지원 확장 예정
- Next.js를 Wheat 인프라 상에서 완전 구동하는 버전도 제공(쉽고 유연한 프론트엔드 통합)
- 에이전트 위크(Agents Week) 등 반기에 한 번씩 대규모 기능 업데이트/발표 예정
- 새로운 기능/도큐먼트: agents.cloudflare.com, developers.cloudflare.com/agents, github.com/cloudflareagents 등에서 확인 가능

### 오픈 클라우드, 확장성, ‘스킬 생성 에이전트’ 등 미래 청사진도 제시함

- 에이전트가 자체적으로 스킬(능력)을 생성, 음성 메시지로 크론 잡 등 자동화 구성 가능
- 클라우드에서 하트비트, 가상 파일시스템, 서비스 통합, 동적 코드 확장 등 미래 인프라 구조의 청사진
- 실제 Pi 코딩 에이전트, 다양한 스킬 자동화 논의 등 외부 프로젝트와도 협업 중임
- 향후 Cloudflare Workers에서 직접 Pi, Python 등 다양한 코드 실행·연동 예고

---
