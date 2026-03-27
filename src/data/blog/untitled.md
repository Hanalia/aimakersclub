---
author: AI Makers Club
pubDatetime: 2026-03-27T08:18:46.673Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이제까지 API 작업은 복잡하고 불편했으며, 특히 AI 에이전트 개발 시 API 엔드포인트 작업이 필수적이었음 전통적인 워크플로우에서는 엔드포인트 생성, 컬렉션과 테스트 관리, C"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git-네이티브로 진화하며 API 개발 방식을 혁신함* 핵심 요약

- 이제까지 API 작업은 복잡하고 불편했으며, 특히 AI 에이전트 개발 시 API 엔드포인트 작업이 필수적이었음
- 전통적인 워크플로우에서는 엔드포인트 생성, 컬렉션과 테스트 관리, CI 연동 등이 제각기 다른 도구·환경에 분산되어 있었음
- 이로 인해 스펙, 컬렉션, 코드가 한데 통합되지 않고 버전 관리도 통합적으로 이루어지지 않는 문제가 있었음
- Postman이 최신 대규모 업데이트를 통해 “AI 네이티브 API 플랫폼”과 동시에 “Git 네이티브” 플랫폼으로 진화함
- 이제 Postman 리소스(컬렉션, 스펙, 목, 테스트)가 간단한 YAML 파일로 로컬 코드베이스 내에 직접 존재하며, 유지/관리가 쉬움
- Postman 데스크탑 앱에서 로컬 파일을 직접 편집하고, 클라우드와 양방향 동기화가 가능함
- 변경사항은 git diff를 이용해 코드와 동일하게 추적·버전 관리할 수 있음
- 모든 리소스가 파일로 저장되어 Postman의 에이전트 모드가 전 주기적으로 API 라이프사이클을 자동화·동기화함
- 영어 자연어 설명만으로 코드 스캔, 경로(route) 탐지, 스펙·테스트·목 자동생성 및 동기화가 가능함
- AI 모델 선택(Claude, GBT, 자체 호스팅 AI 등) 및 GitHub, Sentry, Linear 등 외부 툴과 연동 지원
- 동일한 테스트 컬렉션을 개발 환경과 CI 파이프라인(예: pre-commit hook, GitHub Actions)에서 별도 수정 없이 실행 가능
- 영상자는 Postman의 최근 기능을 강력히 추천하며, 데모용 깃허브 저장소 링크를 영상 설명에 안내함

---

## 세부 요약 - 주제별 정리

### 기존의 API 개발은 분리된 워크플로우로 인해 복잡성과 효율성 저하가 심각했음을 설명함

- API 엔드포인트 작업은 개발자가 필연적으로 자주 다루는 영역임
- IDE나 코딩 에이전트에서 엔드포인트 코드를 만들고, Postman 등 별도 도구에서 컬렉션·테스트를 관리해야 함
- 테스트 코드를 CI(지속적 통합) 시스템과 연동하는 과정 또한 단절되어 있음
- API 스펙, 컬렉션, 실제 코드가 각기 독립적으로 관리되어 연결성과 버전 관리가 불완전함
- 결과적으로 워크플로우 전반이 산만하고, 변경 이력 추적이나 유지보수가 어렵다는 문제점이 지적됨

### Postman의 최근 업데이트가 모든 리소스를 Git-네이티브 환경으로 통합 관리하게 함

- Postman이 “Git-native”로 진화하면서, 모든 핵심 리소스를 코드베이스 내에 직접 둘 수 있음
- 컬렉션, 스펙, 목(mock), 테스트 등 각종 Postman 리소스가 단순한 YAML 파일로 저장됨
- 이 파일들은 일반 코드와 함께 로컬 프로젝트 디렉토리에서 직접 관리·유지 가능함
- 영상자는 “거의 10년간 Postman을 써왔지만 이번 업데이트가 획기적”이라고 밝힘

### 로컬(Postman 데스크탑 앱)과 클라우드를 양방향으로 실시간 동기화할 수 있음을 시연함

- 컬렉션, 엔드포인트 등 리소스들을 데스크탑 앱상에서 관리할 수 있음
- Postman 클라우드와 로컬 파일 사이에는 “Two-way sync(양방향 동기화)”가 지원됨
- 데스크탑 앱에서 테스트를 변경하면 곧바로 에디터(git 환경)에 반영됨
- git diff 명령어로 변경 이력을 확인, 정확한 변경 사항을 코드 동일하게 추적할 수 있음
- 이로써 스펙·테스트·코드 전체를 통합적으로 버전 관리할 수 있게 됨

### Postman 리소스가 일반 파일로 저장되면서 API 라이프사이클 전체를 하나로 연결할 수 있게 됨

- 파일 체계로 전환됨에 따라 Postman 에이전트 모드가 API 라이프사이클 전체를 조율 가능해짐
- "사실상 디스크 위에 존재하는 단순 파일"만으로 모든 프로세스가 작동함
- 변경점은 Git 커밋으로 리뷰/관리할 수 있음

### 영어 자연어로 API 정의부터 테스트, 목(mock) 생성까지 자동화할 수 있음을 데모로 보여줌

- 사용자는 "플레인 잉글리시(일반 영어 문장)"로 필요한 사항을 서술함
- 예시: Flask 앱을 위한 collection을 생성하기 위해 자연어 명령 입력
- Postman이 코드베이스 전체를 자동으로 스캔해 라우트(route)를 탐지함
- 스펙 생성, 테스트 코드 생성, 목(mock) 구성까지 모두 자동 작성됨
- 모든 변경 사항이 git 커밋처럼 기록되고, 팀원 리뷰가 쉬움

### 사용자는 다양한 AI 모델을 선택해 Postman 자동화에 활용할 수 있음을 안내함

- Claude, GPT(GBT), 자체 호스팅 AI 모델 등 선택 가능
- 회사·팀의 필요와 보안 정책에 따라 AI 엔진을 유연하게 적용 가능함

### Postman은 다양한 개발/운영 툴(GitHub, Sentry, Linear 등)과 직접 연동할 수 있음을 강조함

- GitHub, Sentry(에러/로깅 플랫폼), Linear(프로젝트 관리 도구) 등에서 컨텍스트 정보를 불러올 수 있음
- 개발팀이 기존에 활용하던 툴과의 연동성이 강화됨

### 동일한 컬렉션·테스트를 개발 환경과 CI 파이프라인 어디서든 별도 작업 없이 사용 가능함을 설명함

- 로컬 머신과 CI 파이프라인에서 똑같은 Postman 컬렉션을 실행할 수 있음
- 사전 커밋 훅(pre-commit hook), GitHub Actions, 그외 CI와 완전히 동일한 테스트 환경 보장
- 환경에 따라 테스트 코드를 재작성하거나 별도로 구성할 필요 없음

### Postman의 진화가 API 개발 생산성과 협업성을 혁신적으로 높였음을 결론적으로 강조함

- 최근의 Postman 업데이트는 API 개발 워크플로우 전반을 한 단계 끌어올림
- 영상자는 Postman과 자신의 데모용 Github 저장소를 영상 설명란에 링크로 제공함
- 강력한 추천을 덧붙이며 영상 요약을 마침
