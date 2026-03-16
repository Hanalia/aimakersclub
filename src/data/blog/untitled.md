---
author: AI Makers Club
pubDatetime: 2026-03-16T23:45:53.612Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "현재까지 API 작업은 불필요하게 복잡하고 번거로웠으며, 특히 AI 에이전트 개발 시 API 엔드포인트 관리가 큰 어려움이었다고 설명함 기존에는 IDE, Postman, CI 도구"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git-native로 진화하며 API 구축 방식을 완전히 바꾼다* 핵심 요약

- 현재까지 API 작업은 불필요하게 복잡하고 번거로웠으며, 특히 AI 에이전트 개발 시 API 엔드포인트 관리가 큰 어려움이었다고 설명함
- 기존에는 IDE, Postman, CI 도구 등 여러 곳에 API 엔드포인트, 컬렉션, 테스트 등이 분산되어 있어 관리와 버전 컨트롤이 불편했음
- Postman이 대규모 업데이트를 통해 Git-native 및 AI-native 플랫폼으로 진화했다고 강조
- 모든 Postman 리소스(컬렉션, 스펙, 목, 테스트 등)를 단순한 YAML 파일로 코드를 관리하는 로컬 저장소에 함께 보관 가능해짐
- Postman 데스크톱 앱과 클라우드 간 2-way 동기화 제공, 변경 사항 즉시 반영 및 확인 가능
- 변동 사항은 git diff를 통해 코드와 동일하게 추적 및 버전 관리가 가능, 리뷰 가능한 git 커밋으로 반영됨
- AI 에이전트 모드 도입으로 일반 영어명령으로 API 문서화, 테스트 작성, 코드베이스 분석, 스펙 및 목 자동 생성이 가능해짐
- AI 모델(claude, GBT, 자체 호스팅 등) 선택 가능, GitHub, Sentry, Linear 등 외부 툴 연동 지원
- 동일한 컬렉션, 테스트가 로컬 및 CI 파이프라인에서 모두 재사용 가능하며 환경별 재작성 불필요
- 영상 제작자는 Postman의 최신 업데이트가 API 작업 방식을 크게 개선했으니 활용을 추천하며, 예시 깃허브 링크를 설명란에 제공한다고 언급함

---

### Postman은 기존 API 작업의 복잡함을 해소하는 업데이트를 발표함

- API를 구축하고 관리하는 과정은 계속해서 불필요하게 복잡하고 번거로웠던 점을 언급
- 개발자가 특히 AI 에이전트 등 현대 애플리케이션을 만들 때, 복수의 API 엔드포인트와 계속 상호작용한다는 점을 강조
- API 엔드포인트, 컬렉션, 테스트 작성이 IDE와 Postman 등 여러 도구에 분산돼 있어 워크플로우가 일관되고 체계적으로 관리되지 못함
- CI 환경에서 테스트를 재활용하기도 복잡해 컬렉션, 스펙, 코드가 분리되어 버전 컨트롤도 별도로 해야 했음

### Postman의 Git-native 업데이트로 API 관리가 코드와 완전히 통합됨

- Postman 최신 업데이트로, 컬렉션, 스펙, 목, 테스트 등 모든 리소스를 로컬 코드베이스에 YAML 파일로 저장 가능해짐
- YAML 형식은 구조가 단순해 유지보수와 관리를 쉽게 만들어줌
- Postman 데스크톱 앱에서도 이 리소스들을 직접 다룰 수 있어, 로컬 기반 운영이 쉬워짐

### Postman 데스크톱 앱과 클라우드 간 2-way 동기화가 실시간 가능해짐

- 사용자는 로컬 저장소와 Postman 클라우드 간 양방향 동기화가 가능, 어느 쪽에서나 작업해도 변경 사항이 자동 반영됨
- 예로, 엔드포인트의 테스트를 수정한 뒤 에디터에서 git diff 명령어로 변경 내용을 바로 확인 가능
- 스펙, 테스트의 수정 이력을 git 기반 버전 컨트롤로 관리할 수 있음

### 모든 API 리소스가 파일로 남아 명확한 변경 추적과 코드 리뷰가 가능해짐

- 컬렉션, 스펙, 테스트 등 모든 리소스가 파일 형태로 관리되므로 변경 사항이 git 커밋으로 정리됨
- 개발자는 코드와 동일하게 각종 API 리소스의 변경 이력을 추적하며 코드 리뷰 및 이슈 관리를 할 수 있음

### AI 에이전트 모드를 통한 API 작업 자동화 및 자연어 기반 명령 지원

- Postman의 에이전트 모드에서는 사용자가 필요한 작업을 평문(영어)으로 기술하면, AI가 대신 컬렉션 생성, 코드 분석, 스펙 및 테스트 작성, 목 설정 등을 자동 수행
- 예시로 Flask 앱에 대한 컬렉션 생성을 평문 지시만으로 수행함
- 코드베이스를 스캔하여 라우트(엔드포인트)를 발견하고, 문서화와 테스트, 목 등을 자동 설정하여 동기화함

### AI 모델 선택 및 외부 툴 연동 등 유연성과 확장성이 강화됨

- Claude, GBT, 자체 호스팅 등 다양한 AI 모델을 AI 에이전트 모드에서 선택, 활용할 수 있음
- GitHub, Sentry, Linear 등 이미 사용 중인 외부 툴에서 맥락(컨텍스트) 데이터를 가져올 수 있음
- MCP 서버 활용까지 지원함

### 테스트와 컬렉션을 동일하게 로컬 및 CI 환경에서 반복 사용 가능함

- 로컬 머신에서 실행한 컬렉션과 테스트 그대로 CI 파이프라인(예: GitHub Actions, pre-commit hooks)에서 재사용 가능
- 환경이 달라도 테스트와 컬렉션을 일관되게 운용할 수 있어, 별도 재작성이나 환경별 변경 필요가 없음

### 코드 기반 워크플로우 통합으로 API 개발 생산성을 대폭 향상함

- API 라이프사이클의 모든 과정(설계, 테스트, 문서화, 모방, 검증 등)이 코드 워크플로우에 통합됨
- 모든 작업 내역이 git 기반 커밋으로 남아 리뷰 및 협업이 쉽고 명확해짐

### 영상 제작자는 Postman의 개선을 극찬하며, 실 사용자 경험과 예시 저장소를 제공함

- 영상 제작자는 10년째 Postman을 사용해왔으며, 이번 업데이트가 역대급이라고 평가
- 본인의 GitHub 레포지토리와 Postman 공식 링크를 영상 설명란에 공개한다고 안내

### Postman의 최근 변화가 API 플랫폼 생태계에 미치는 영향이 크다고 결론 내림

- Postman의 Git-native, AI-native 전환은 API 개발 워크플로우의 번거로움과 비효율을 획기적으로 개선
- 개발자 누구나 확인과 도입을 강력히 권장한다고 재차 강조함
