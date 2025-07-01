---
author: AI Makers Club
pubDatetime: 2025-07-01T23:46:27.401Z
title: "Agents, Access, and the Future of Machine Identity - Nick Nisi (WorkOS) + Lizzie Siegle (Cloudflare)"
slug: px2e2OOS2Sk
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Cloudflare의 Lizzie Siegle와 WorkOS의 Nick Nisi가 AI 에이전트 및 MCP 서버 구축, 인증·인가 문제, 그리고 실무 적용사례를 중심으로"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/px2e2OOS2Sk/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Agents, Access, and the Future of Machine Identity — Nick Nisi (WorkOS) + Lizzie Siegle (Cloudflare)](https://www.youtube.com/watch?v=px2e2OOS2Sk)  
**채널명:** AI Engineer

## *에이전트, 접근 권한, 그리고 머신 아이덴티티의 미래* 핵심 요약

- 본 영상은 Cloudflare의 Lizzie Siegle와 WorkOS의 Nick Nisi가 AI 에이전트 및 MCP 서버 구축, 인증·인가 문제, 그리고 실무 적용사례를 중심으로 발표한 내용을 담고 있음
- AI 에이전트가 사용자를 대신해 반복적·번거로운 작업(예: NBA 결승 투표, 테니스 코트 예약) 자동화에 실제로 활용되고 있음
- 에이전트가 행동할 수 있는 범위와 권한을 어떻게 안전하게 통제할지(authorization/credentials)가 주요 과제가 되고 있음
- 기존 OAuth 등 인증 체계는 더 이상 “사람”만을 위한 것이 아니며, 에이전트와 서버도 동일하게 신원 및 권한 부여가 필요함을 강조
- Cloudflare가 제공하는 Durable Objects, Vector/SQL DB, 엣지 컴퓨팅, 바인딩 등 인프라가 에이전트 메모리 및 상태 저장에 핵심 역할 수행
- 데모에서는 Cloudflare와 WorkOS 기반으로 간단한 MCP(Machine Control Point) 서버를 구축·배포하고, Claude AI를 통해 티셔츠를 주문하는 실제 과정을 시연
- 주문 내역과 유저 정보(JWT 등)는 Cloudflare의 Key-Value 저장소(Durable Objects)에 안전하게 보관, 개인별 컨텍스트 관리 가능
- 퍼미션(권한)에 따라 도구 실행여부를 다르게 하며 “pretty please”(공손한 요청)처럼 룰 기반 툴을 쉽게 확장 가능함을 보여줌
- 앞으로 MCP 서버 및 에이전트의 권한 통제는 더욱 세분화(줄 단위, 도구 단위 등)되고, 감사(Audit), 사용자 행위 추적이 중요해질 것임
- 실시간 데모 코드와 MCP 서버, 티셔츠 주문 등은 오픈된 GitHub 저장소와 mcp.shop에서 누구나 체험 및 확장 가능

---

## 세부 요약 - 주제별 정리

### AI 에이전트가 반복적·일상 업무를 자동화하며 사용자 경험을 혁신함

- Lizzie Siegle는 Cloudflare에서 AI 데모, AI MCP 서버를 직접 개발·활용하며 실질적 자동화 사례를 소개함
- NBA 결승 투표를 자동화하는 에이전트, 샌프란시스코 테니스 코트 예약 등 반복적이고 번거로운 작업을 에이전트가 처리
- 특히 “나를 대신해서 행동하는” 에이전트가 앞으로 점점 더 확대될 수 있는 구체적 유스케이스 제시

### 에이전트의 권한 부여와 인증 체계가 필수적 과제로 부상함

- “에이전트가 무엇을 할 수 있는지, 어디까지 허용해야 하는지”에 대한 관리가 중요해지고 있다고 설명
- 기존의 GitHub MCP처럼, 개발자라면 JSON 파일 편집·개인 액세스 토큰 등으로 권한을 줄 수 있지만, 비개발자에겐 진입 장벽이 큼
- 따라서 사용자 친화적 방식으로 에이전트에 권한을 부여하고, 안전하게 제한하는 새로운 접근 방식 필요성 강조

### 인증 및 인가(Authorization)는 이제 사람뿐만 아니라 에이전트에게도 요구됨을 지적함

- WorkOS의 닉 니시는 “OAuth는 더 이상 사람(human)을 위한 것이 아니라, 대리행동하는 에이전트를 위해서도 필요하다”고 설명
- 사용자 프로젝트와 동일한 수준의 인증(credentials), 인가 절차를 에이전트, MCP 서버에도 적용해야 함
- 내부적으로 인증을 기반으로 한 다양한 세분화된 정책 적용이 미래의 발전방향임을 시사함

### Cloudflare의 다채로운 인프라(바인딩, Durable Objects 등)가 에이전트 개발의 핵심 토대임을 시연함

- Cloudflare는 전통적 CDN, DDoS 보안, 봇 관리 외에도 클라우드 워커, 엣지에서 코드 실행, AI 모델 호스팅, 벡터 DB, SQL DB, Durable Objects 등 광범위한 기능 제공
- 바인딩을 활용해 웹앱, 에이전트 등이 다양한 Cloudflare 서비스와 손쉽게 통합 가능
- Durable Objects는 메모리, 세션 등 지속적으로 상태를 저장할 수 있게 해주는 핵심 인프라
- 스타트업 등 실제 사용 사례에서는 무료 티어를 활용해 비용 부담 없이 MVP를 구축하는 것도 가능함

### MCP 서버와 WorkOS·Cloudflare API 연동으로 실시간 데모 워크플로우를 완성함

- 발표자는 실제 MCP 서버(Machine Control Point)를 Cloudflare + WorkOS API로 빠르게 구축 및 배포
- npm run deploy 및 wrangler 명령어로 클라우드에 서버를 신속히 배포하는 과정 시연
- Claude AI Client에서 통합(Integration) 버튼을 통해 MCP 서버를 추가, 에이전트가 사용자를 대신해 작동하도록 권한을 부여함

### SaaS 워크플로우를 체험하는 실습형 데모 – 티셔츠 주문 예제의 전 과정 설명

- Claude에 자신(사용자) 정보를 승인한 뒤 “티셔츠 주문” 요청 → 재고 목록 반환, 사이즈/주소 등 입력
- 주문 프로세스 중 “회사명” 조건 누락 등 실시간 에러 핸들링, 주문 확정 후 오더넘버 발급
- 실습 중 “내 주문 상세” 질의 등에 Claude가 사용자 이름, 이메일, 권한(admin role), JWT 정보 등 컨텍스트를 보여줌
- Careless Whisper가 favorite song으로 저장된 등 유저 데이터의 구체적 저장 사례 제시

### Durable Objects를 활용한 개인별 컨텍스트 저장 및 상태 변화 반영

- 모든 주문 정보 및 사용자 데이터는 Key-Value 저장소(KV)인 Durable Objects에 저장
- 사용자가 MCP 서버 내 도구(예: “모드 변경” 툴) 실행 시, 해당 Durable Object 내 컨텍스트를 즉시 변경 가능함
- ‘band’ 모드로 전환하면 추가 주문이 거부되고(“absolutely not”), “pretty please” 등 공손 요청 툴 실행 시 허용되는 등 동적인 룰 시스템 구현

### 누구나 빠르게 MCP 서버 배포 및 커스텀 도구 추가/수정이 가능함을 강조함

- Cloudflare의 “클릭 투 디플로이(click to deploy)” 기능으로 인증 절차가 없는(Offless) 간이 MCP 서버 즉시 생성·배포 가능
- GitHub 연동·복제 후, 원하는 도구만 편집·추가하면 맞춤형 MCP 서버 구축 가능(초기 제공되는 도구 포함)
- 인증 비적용(offless)와 인증 적용(O) 방식 비교, 각 방식의 속도 및 보안 차이 시연

### AI 및 에이전트 행위의 미래: 세분화된 권한, 감시, 추적의 필요성이 더욱 커질 전망임을 역설함

- 인간에게 적용하던 인증·권한 체계를 API, MCP, 에이전트에도 점진적으로 도입·고도화될 것임
- 앞으로는 퍼미션을 줄 단위, 툴 단위, 네트워크 연결 등으로 세분화하여 수천 가지 작업을 안정적으로 위임해야 함
- O(Authorization) 툴을 통해 에이전트의 행동 로그, 의사결정 경로 등 “audit trail” 확보가 필수임을 언급

### 실시간 데모 코드, 오픈 소스 저장소, 체험형 워크플로우까지 모두 공개·확장 가능

- 데모에서 사용된 MCP 서버와 도구(예: 티셔츠 주문, pretty please 툴 등)는 오픈된 GitHub 저장소 및 mcp.shop에서 자유롭게 접속·체험 가능
- 누구든지 QR 코드 및 링크를 통해 MCP 서버 직접 배포, 커스텀 도구 개발 및 통합 워크플로우 확장 가능
- 실제 코드는 markdown 파일 형태로 제공, 워크숍·해커톤 등 실전 적용에 최적화됨

### 사용자(혹은 에이전트)는 더 이상 단순 사용자 아닌 "deputy"로, 도구를 위임·위험성도 함께 관리해야 함

- 인간 사용자는 이제 도구를 위임받아 권한 행사를 하거나, 의도와 다르게 오용(misuse)할 수 있는 deputy(대리인) 개념으로 인식할 필요성
- 실제 라이브 데모에서 예상치 못한 입력, 악의적 행동 등 리스크 사례도 경험
- 결론적으로, “자신만의 도구를 대리인에게 위임하십시오”라는 클로징 멘트와 함께, 누구나 확장 가능한 오픈 워크플로우를 도전해볼 것을 권장함
