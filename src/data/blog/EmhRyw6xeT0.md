---
author: AI Makers Club
pubDatetime: 2026-04-28T23:46:58.833Z
title: "One Login to Rule Them All: Cross-App Access for MCP - Garrett Galow, WorkOS"
slug: EmhRyw6xeT0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상의 주제는 여러 AI 플랫폼(MCP)에서 반복되는 인증 절차 문제와 이를 해결하기 위한 Cross-App Access(XAA, 크로스 앱 접근)의 역할에 대해 다룸 발표자인 G"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/EmhRyw6xeT0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [One Login to Rule Them All: Cross-App Access for MCP — Garrett Galow, WorkOS](https://www.youtube.com/watch?v=EmhRyw6xeT0)  
**채널명:** AI Engineer

## *모든 앱의 로그인을 하나로: MCP의 크로스 앱 접근* 핵심 요약

- 영상의 주제는 여러 AI 플랫폼(MCP)에서 반복되는 인증 절차 문제와 이를 해결하기 위한 Cross-App Access(XAA, 크로스 앱 접근)의 역할에 대해 다룸
- 발표자인 Garrett Galow(WorkOS 제품 책임자)는 15년 경력의 엔터프라이즈 플랫폼 전문가로, WorkOS가 OpenAI, Anthropic, Cursor 등 주요 AI 기업의 인증을 지원하고 있음을 소개
- MCP(Machine Control Plane)를 사용하는 현재 방식에서는 앱마다 각각 인증·동의(Consent) 화면을 여러 번 거쳐야 하며, 이는 사용자와 팀 전체에 큰 비효율을 야기함
- OAuth 기반의 기존 구조는 신뢰를 전제하지 않아 매번 개별 앱과 서비스 간 동의와 인증이 필요하며, SSO(싱글사인온) 체계를 무용지물로 만듦
- IT 부서에는 사용자가 어떤 MCP 서버/AI 에이전트를 사용 중인지, 민감 데이터 접근 권한이 어디까지 관리되는지 파악이 어렵고, 계정 해지 시 남는 액세스 토큰 등 보안상 문제 발생
- 최근 npm Axios 패키지 해킹 사례처럼, 계정 탈취나 악성 접근 발생 시 기존 OAuth 인증 방식으로는 적시에 모든 접근 권한 차단 및 토큰 만료 진행이 불가능함
- 크로스 앱 접근(XAA)은 IDP(Identity Provider, 예: Okta)가 신뢰 장치 역할을 하여, 한번의 IDP 인증으로 여러 앱(Figma, Notion 등)에 자동 접근·연동이 가능케 함
- 데모 시연을 통해 XAA 지원 클라이언트에서는 최초 한 번만 SSO(Okta 등) 로그인 후, 추가 인증이나 동의화면 없이 자동으로 Figma 등 MCP 서버에 연결됨을 확인
- XAA의 구현 원리는 IDP가 ID JAG(Identity JWT Authorization Grant) 토큰을 클라이언트에 발급 → 앱 간 검증을 통해 자동 접속·인증을 완수하며, 단기 액세스 토큰을 써 보안 강화 가능
- IT 관리자 및 개발자 관점에서 XAA 도입 절차, 필수 설정, 업계 지원 현황(Okta, Microsoft Entra 등), 한계점(스코프 제한, 프로토콜 파편화, 최신 표준 적용 난이도 등)까지 논의함

---

## 세부 요약 - 주제별 정리

### 발표자는 엔터프라이즈 인증 플랫폼 구축 전문가로서 WorkOS와 이 기능의 시장 적용 경험을 설명함

- 발표자 Garrett Galow는 Microsoft Azure, Cloudflare, WorkOS 등에서 15년간 엔터프라이즈 개발 플랫폼을 구축해 옴
- 현재 WorkOS에서 제품 책임 담당
- WorkOS는 Anthropic, Cursor, OpenAI 등 주요 AI·MCP 기업들의 인증(SSO, 권한 관리) 인프라를 제공
- 예를 들어, 사용자가 Cursor에 로그인할 때 WorkOS를 거쳐 인증(엔터프라이즈 IDP, 일반 로그인 등)
- WorkOS는 AI 에이전트(Agent)와 앱이 엔터프라이즈 환경에 쉽게 통합될 수 있게 지원

### MCP 환경은 사용자의 반복적인 인증 절차로 인해 심각한 비효율과 불편함을 낳음

- MCP(Machine Control Plane)를 쓰는 환경에서는, 각 앱(예: Cursor, Claude, Figma 등)을 연동할 때마다 동의(Consent) 화면 및 인증 절차를 반복
- 설정 파일에 MCP 서버 추가 후, 접속할 때마다 브라우저 인증 팝업 및 여러 번 인증 클릭 필요
- 동일한 사용자가 여러 MCP 서버(반복적으로 6~12개 이상)를 사용할 수 있음
- 팀 단위로 보면 수십 명 개발자가 인증 화면 클릭에만 상당한 시간 낭비
- 동의·인증 과정은 사용자에게 이유도 불명확하고 경험적으로도 불편
- 인증 ‘재요구’ 현상(이미 동의했는데 다시 요구)도 종종 발생

### 기존 OAuth 기반 인증 구조는 오늘날 기업 환경에서 SSO의 장점을 저해함

- MCP 등에서 쓰는 표준 인증 계층은 OAuth로, 타 시스템을 신뢰하지 않는다는 전제를 가짐
- 예: “Cursor가 내 Figma, Notion 계정에 접근해도 됩니까?”라는 사용자 동의 필요
- 현실적으로 기업 대부분은 이미 SSO(Okta, Microsoft Entra 등)로 신원·접근 제어를 통합 관리 중
- SSO를 일원화해 여러 앱 로그인 효율을 높였는데, MCP 구조가 이 SSO 모델을 깨뜨림
- MCP 구조에서는 각 앱·서비스 간 신원 정보를 공유하지 않고 독립 인증·동의 절차를 반복함

### 반복 인증 문제는 IT팀에 보안 위협 및 시스템 운영 어려움을 일으킴

- IT팀 입장에서는 어느 사용자가 어떤 MCP 서버·AI 에이전트에 접근했는지 가시성의 부재
- 사용자는 자유롭게 다양한 클라이언트(MCP, Cursor, DeepSeek 등)를 써서 민감한 회사 데이터(Figma, Notion 등)에 접근 가능
- 원하지 않는 AI에이전트에 의한 데이터 접근을 통제 불가
- 실질적으로 API키 등 MCP 연결 정보가 기기나 로컬에 남아 있을 수 있음

### 실제 해킹·계정 탈취 사례(npm Axios 패키지)를 통해 Access Token 관리의 한계를 확인함

- 예시: 최근 npm Axios 패키지 해킹 사고에서 발표자도 피해를 경험
- IT팀이 기기 네트워크 차단, Okta 세션 무효화 등 대응했지만, 로컬에 남은 MCP 인증 정보(API키 등)는 별도로 수동 점검·폐기가 필요함
- SSO만 끊을 경우에도 OAuth 기반 MCP 토큰(Access/Refresh Token)은 수일~수주간 유효
- 업계 대다수는 SKIM(자동 토큰 회수·폐기) 같은 고급 조치를 도입하지 않아, 퇴사자·해킹 피해자에게 장기간 접근 권한이 남을 수 있음

### ‘크로스 앱 접근(XAA)’은 IDP 기반 신뢰 연결을 통해 하나의 인증으로 여러 앱을 자동 연동함

- XAA(Cross-App Access)의 기본 목적은 여러 앱(Figma 등)에 IDP 기반 신뢰로 자동 접근을 허용
- 예시 구조: MCP 클라이언트(CLAUDE 등) ↔ IDP(Okta 등) ↔ 리소스(MCP 서버/앱, Figma 등)
- 모든 앱·클라이언트가 동일 IDP에 이미 등록돼 있으므로, 그 신뢰 체계를 활용해 사용자 반복 인증 생략
- 사용자는 IDP(Okta)에 한 번만 로그인하면, 별도의 동의·클릭 없이 연동된 MCP 서버(Figma 등)에 자동 연결

### XAA 데모에서는 IDP(Okta) 한 번 로그인만으로 여러 MCP 서버(Figma 등)에 인증·동의 없이 자동 연결됨을 시연함

- 발표자가 터미널에서 일반 클라우드 코드 vs. XAA 도입된 클라우드 코드를 각각 실행 시연
- 일반 방식: Figma 접속 시 인증·동의 창 발생, 사용자 입력 필요
- XAA 방식: Okta 연동만 한 번 수행하면 Figma 서버가 자동으로 연결됨
- 사용자는 추가 클릭이나 동의 화면을 볼 필요 없이 통합 접속 완료

### XAA 구현의 구조적 원리와 ‘ID JAG’ 토큰의 역할을 설명함

- 전체 구조는 4개 컴포넌트로 구성: MCP 클라이언트(CLAUDE/Cloud Code), IDP(Okta 등), 리소스 권한 서버(Figma Auth), 리소스 서버(Figma API)
- 1단계: 사용자가 IDP(Okta) SSO로 로그인 → ID Token, Refresh Token 취득
- 2단계: 클라이언트가 IDP에 ID JAG(Identity JWT Authorization Grant) 토큰을 요청
  - ID JAG는 IDP 발급, 다양한 서비스 간 활용하는 인증용 JWT 토큰(관련 규격/스펙 존재)
  - IDP는 해당 클라이언트(예: Cursor)가 대상 앱(예: Figma)에도 속해 있는지 정책 검증 후 ID JAG 토큰 발행
- 3단계: 클라이언트는 해당 토큰을 Figma의 권한 서버에 제출, 인증 통과 시, Figma가 MCP 액세스 토큰 발행
- 4단계: 일반적인 MCP 토큰 요청-응답(기존과 동일)으로 서비스 시작, 액세스 토큰은 5분 등 단기 토큰으로 보안 강화
- 2~3단계는 사용자에게 완전히 ‘투명’하게 처리되므로, 사용자는 최초 SSO외에 추가 조작 필요 없음

### 액세스 토큰 만료와 SSO 세션의 연동으로 보안 수준을 높임

- 단기 액세스 토큰(5분, 설정에 따라 변경) 만료 시 자동 재요청 가능
- 사용자의 SSO 세션이 중단되거나 해지되면, 액세스 토큰 갱신 불가
- 이를 통해 이탈/권한 해지 시, 추가 인증 없이 자동으로 접근 차단 실현
- IT/보안팀이 MCP 기반 접근을 일원적으로 통제할 수 있게 됨

### IT 부서 및 개발자 입장에서의 XAA 지원 절차와 기술적 요건, 실제 기업 적용 방안을 제시함

- IT 관리자는 Okta(또는 기타 지원 IDP) 관리 포털에서 각 앱(예: Cursor→Figma) 간 접근 정책만 추가 설정하면 됨
- 클라이언트 쪽(XAA를 지원하는 MCP 클라이언트, 예: Cursor, Claude, 자체 개발):
  - XA 호환 SSO 연결 필요(Okta는 지원, Microsoft Entra 등은 아직 미지원)
  - 클라이언트가 ID JAG 토큰 요청 및 교환 기능 필요
  - 1~3단계 흐름(SSO 연결, ID JAG 토큰 요청, MCP 서버와의 토큰 교환)이 구현되어야 하며, MCP 표준 액세스 토큰 흐름은 기존 방식과 동일
  - WorkOS는 애플리케이션 제작 지원 및 토큰 요청 플로우 표준 구현 지원
- MCP 서버(앱) 쪽:
  - JWT bearer 타입, 즉 ID JAG 플로우 지원 필요
  - MCP 클라이언트가 보내는 토큰을 수락 및 검증(JWT 서명 검증 등)
  - 검증 후 MCP 표준 액세스 토큰 발행(기존과 동일)

### XAA 표준, 프로토콜, 산업 지원 현황과 남은 과제(권한 스코프 등)를 질의응답을 통해 공유함

- Okta는 OIDC(오픈ID 커넥트) 기반 연결에서 XAA 지원, SAML 등은 추후 확대 예정
- MS Entra(이전 Azure Active Directory)는 현재 XAA 미지원, 표준 적용 협력 중
- 기관별/클라이언트별 프로토콜 파편화, 리소스-스코프 동기화(RFC 9728 등) 등으로 호환성 문제 발생 가능
- Dynamic Client Registration(DCR), CIMD(클라이언트 메타데이터 정의)와 같은 최신 표준 도입이 진행 중이나, 업계 전반의 지원률은 아직 낮음
- 현재 XAA 스펙은 인증(authorization)만 지원, 실제 리소스별 세부 권한 스코프·정책 제한 등은 추가적 확장 필요
- MCP 클라이언트→IDP간 대상 앱 매핑은 Audience URL(예: mcp.figma.com 등)을 통해 관리
- 기타 인증·인가 프로토콜 세부 플로우, 최신 명세 등은 WorkOS 블로그 및 공식 문서, Claude AI의 문서 해설 등 참고 안내

---
