---
author: AI Makers Club
pubDatetime: 2025-06-20T08:19:43.362Z
title: "Building Protected MCP Servers - Den Delimarsky and Julia Kasper, Microsoft DevDiv"
slug: PHBGhUKAM-w
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Microsoft의 Den Delimarsky(제품 엔지니어, MCP 운영위원회 소속)와 Julia Kasper(애저 API 관리팀 소속)가 MCP(Multi-modal"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/PHBGhUKAM-w/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building Protected MCP Servers — Den Delimarsky and Julia Kasper, Microsoft DevDiv](https://www.youtube.com/watch?v=PHBGhUKAM-w)  
**채널명:** AI Engineer

## *보호된 MCP 서버 구축하기 — Microsoft DevDiv의 Den Delimarsky와 Julia Kasper* 핵심 요약

- 이 영상은 Microsoft의 Den Delimarsky(제품 엔지니어, MCP 운영위원회 소속)와 Julia Kasper(애저 API 관리팀 소속)가 MCP(Multi-modal Communication Protocol) 서버를 안전하게 보호하는 최신 방식과 실습 방법을 설명하는 강연임
- MCP 서버에 대한 접근 제어는 외부(원격) 환경에서는 필수적이나, 로컬 환경에서는 서버가 순수 바이너리로 동작해 다양한 인증 방식을 자유롭게 구현할 수 있으므로 그 중요성이 상대적으로 낮음
- 기존 MCP 스펙(2023년 3월 26일 기준)은 MCP 서버 구축자가 직접 토큰 팩토리(Authorization Server)까지 구현해야 해 OAuth 전문가 수준의 보안 지식이 요구됨
- 최신 드래프트 스펙(Anthropic 및 보안 전문가와 공동 개발)은 자원 서버(MCP 서버)와 인증 서버를 명확히 분리해, Okta, Auth0, Microsoft Entra ID 등 기존 인증 서비스와 연동만으로 안전한 서버 운영이 가능해짐
- 새 스펙에서는 서버는 토큰 검증만 책임지고, 토큰 발급이나 관리 등은 외부 인증 서버가 담당하므로 개발자 부담이 획기적으로 줄고 표준 라이브러리 활용이 용이해짐
- 클라이언트(예: VS Code, Cloud Desktop)는 PRM(Protected Resource Metadata) 문서를 통해 인증 방법과 서버 정보를 획득하고, OAuth 절차(즉, ‘토큰 댄스’)를 직접 완수함
- Microsoft 공식 MCP C# SDK에는 엔트라 ID 등 표준 인증 서버와 통합하는 보안 서버 구축 예제가 포함되어 있어, C# 만으로도 빠르고 쉽게 MCP 서버에 보안 레이어 추가 가능
- Azure API Management 활용 시, 게이트웨이를 통해 MCP 서버와 클라이언트 사이 인증 및 권한 관리를 중계할 수 있으며, 최소 5분 만에 배포 가능한 오픈 소스 데모와 REST API → MCP 변환 자동화 기능이 제공됨
- VS Code와 GitHub Copilot Studio에서 MCP 원격 서버와 통합되는 실습 시연을 통해, 인증 절차와 도구 호출 전반을 손쉽게 처리하는 실제 개발 환경 적용법을 확인할 수 있음
- 최종적으로, 권장 스펙 문서, 보안 베스트 프랙티스 문서, 도구, 샘플 코드 링크 등이 제공되며, 새 인증 스펙은 VS Code 인사이더 빌드부터 공식 지원됨

---

## 세부 요약 - 주제별 정리

### MCP 서버 보호는 원격 환경에서 필수지만 로컬 환경에선 상대적으로 필요성이 낮음

- MCP 서버는 다양한 클라이언트(Cloud Desktop, VS Code, Visual Studio 등)와 연결될 수 있음
- 외부에 공개된 원격 MCP 서버는 누구나 쉽게 접근 가능하므로 반드시 인증(Authorization) 장치 필요
- 외부 인증이 적용되지 않으면, 권한 없는 사용자가 민감한 API에 자유롭게 접근할 위험
- 로컬 서버는 해당 머신 바이너리로 동작해 패스키, 시크릿, 인증서 등 다양한 방식 자유롭게 지정 가능
- 특별한 VM, 멀티-유저, 원격데스크톱같은 시나리오가 아니면 로컬 인증 제약 적음
- 인증이 필요한 시나리오는 대부분 네트워크를 통한 원격 접근 환경
- MCP 설계 시, 인증 보안 적용 범위는 원격 서버 중심으로 고려됨

### 다양한 권한(Level)과 사용자 맥락(Context)을 존중하는 보안 레이어 필요성

- 서버가 연결하는 API들은 사용자별로 접근 권한이 서로 다름
- 동일한 API라도 관리자인 경우와 일반 사용자, 컨트리뷰터인 경우 접근/제공되는 도구 및 기능 다름
- API마다 다른 정책 및 권한 해석이 요구됨
- 결국 MCP도 동일하게, API 요청 주체에 대한 맥락 인식과 인증이 필요
- 인증 서버가 이를 담당해, 권한·정책·사용자 결정 구조를 서버와 독립적으로 책임

### 기존 MCP 사양(2023.3.26 기준)은 개발자에게 복잡한 인증 서버 구현 부담을 부여함

- 기존(Stable) MCP 스펙은 MCP 서버 구축 시 자체 인증 서버(Authorization Server) 구축 필요
- 서버 개발자는 토큰 생성, 서명, 만료, 갱신 등 OAuth 전체 플로우를 직접 구현해야 함
- MCP 서버 개발에 OAuth 전반에 대한 전문 보안 지식이 필수
- 실제로 토큰 팩토리 구현, OIDC 프로토콜 완전 이해 등이 요구되어 신규 진입장벽 높음

### 최신 드래프트 스펙은 인증 서버/자원 서버 완전 분리로 개발 부담을 대폭 감소시킴

- 드래프트(공개예정) 스펙은 MCP 서버(자원 서버)와 인증 서버를 완전히 분리(Anthropic 등과 협력)
- MCP 서버는 더 이상 토큰 생성·관리 등 직접 책임 X, 인증 서버 연동만 담당
- Octa, Auth0, Microsoft Entra, Keycloak 등 상용 및 오픈소스 인증 인프라 재활용 가능
- 추가 커스텀 없이 메타데이터만 연동하면 신규 인증 구조 자동 적용
- 표준 OAuth2.0 워크플로우로 유지되어 기존 보안 서비스 생태계와 통합 용이
- 해당 스펙은 곧 MCP의 공식 안정 버전으로 반영될 예정

### 개발자는 인증 서버 구현 없이 메타데이터만 추가하면 보안 MCP 서버를 손쉽게 구축 가능함

- 인증 서버 구현 대신, MCP 서버 내 표준 메타데이터(authorization server endpoint 등) 명시
- PRM(Protected Resource Metadata) 문서가 발급 서버 주소, scope, 인증 방식 등 포함
- 개발자는 기존 OAuth2 표준 라이브러리 연결만으로 인증 절차 수월하게 구성
- 오픈소스 및 상용 인증 인프라와의 플러그인식 연동 지원
- PRM 문서는 MCP 서버가 호스팅하는 JSON으로 제공되며, 인증 방향 및 사용 범위 지정

### 클라이언트가 표준 인증 흐름을 완수하고 서버는 토큰 검증에만 집중함

- MCP 클라이언트(VS Code, Cloud Desktop 등)는 처음 서버 연결 시 HTTP 401(Unauthorized)와 함께 PRM 제공
- PRM 참고 후 적합한 인증 서버/방식 선택 → OAuth "댄스"를 통해 토큰 취득
- 토큰 획득 후, 클라이언트가 서버에 요청 → 서버는 토큰만 검증(유효성, scope 등)
- 실제 토큰 발급, 재발급, 만료 관리는 MCP 서버 외부(인증 서버)가 전담

### C# SDK 예제 기반 MCP 서버/클라이언트 실습: 복잡한 보안 코드 없이 프로덕션 수준 인증 구현 가능

- ASP.NET Core 프로젝트 기준 MCP 서버 구성: 라이브러리만 설치하면 인증 기능 내장
- ‘AddAuthentication’ 등 표준 코드로 O 인증 방식, MCP 인증 스킴, 토큰 검증(예: JWT) 세팅
- PRM 메타데이터에 authorization server, scope, 방식 등 지정: 예에서는 Microsoft Entra ID 사용
- C# 기반 클라이언트도 표준 OAuth 라이브러리로 client_id, scope만 선언 후 바로 연결 가능
- 전체 인증 절차가 라이브러리-메타데이터 조합으로 자동화, 보안 전문성이 없이도 안전한 서버 구축 가능

### Azure API Management 게이트웨이는 MCP 서버의 프로덕션 운용에 특화된 보안·인증 프록시 역할을 담당함

- Azure API Management를 MCP 서버 앞단 ‘게이트웨이’로 배치해 인증 및 트래픽 보호 수행
- GitHub 공개 레포지토리 제공, 단일 ACD 배포 스크립트로 5분 이내 프로덕션 환경 구축 데모 시연
- 게이트웨이가 인증 흐름 중계, Microsoft Entra ID와 연동, 인증 및 동의(Consent) 플로우 처리
- 실시간 로그/모니터링 제공(애저 로그 애널리틱스 연동)
- 게이트웨이 구조를 통해 원격 MCP 서버의 공격 표면 축소 및 보안 다층화 실현

### 실습 예제(클라이언트-서버-게이트웨이 연동)로 실제 인증 및 툴 접근 흐름을 상세히 시연함

- API Management에 원격 MCP 서버와 3가지 도구 API 엔드포인트 통합
- MCP Inspector 툴 등에서 엔드포인트 연결 시 동의 화면 및 인증 플로우 발생 → 권한 획득
- 인증 후 MCP Inspector에서 서버의 툴 목록을 열람·호출 가능
- VS Code 연동에서도 인증 절차(팝업)와 권한 부여 진행
- GitHub Copilot Studio, VS Code에서 인증된 MCP 서버의 툴을 실행하고 결과값 출력까지 실시간 시연

### REST API를 MCP 원격 서버로 손쉽게 변환, 확장할 수 있는 자동화 기능이 추가 제공됨

- Azure API Management에서 기존 REST API 엔드포인트를 MCP 툴로 변환하여 노출하는 기능 발표
- 엔터프라이즈 및 개발자 모두 손쉽게 REST → MCP 서버 기능 확장 가능
- 플랫폼 상에서 인증(Authorization) 연동 및 호스팅 자동화, 문서 기반 설정 지원
- 실제 데모에서 변환된 REST 기반 MCP 서버가 GitHub Copilot, VS Code 등 다양한 환경에서 정상 탐지 및 실행됨

### 최종적으로 공식 문서, 보안 가이드, 최신 MCP 인증 스펙이 공개되며 VS Code도 신 스펙을 지원함

- 공식 스펙 문서들(스펙 설명, 보안 베스트프랙티스, 예제 코드 등) 상세 안내
- 보안 취약점 대응, 모범사례 파트너링(Antropic 등과 공동 작성) 문서 제공
- VS Code 인사이더 버전부터 신 인증 스펙 정식 지원(실험적 배포 및 버그 리포트 창구 안내)
