---
author: AI Makers Club
pubDatetime: 2026-03-14T08:18:20.768Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "기존에는 API 개발 과정이 복잡하고 여러 도구를 동시에 사용해야 해 불편함이 많았음 특히 AI 에이전트 개발 시에도 다양한 API 엔드포인트 관리가 필수적이었으나, 워크플로우 분"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git 기반으로 진화하며 API 빌드를 혁신적으로 변화시킴* 핵심 요약

- 기존에는 API 개발 과정이 복잡하고 여러 도구를 동시에 사용해야 해 불편함이 많았음
- 특히 AI 에이전트 개발 시에도 다양한 API 엔드포인트 관리가 필수적이었으나, 워크플로우 분산으로 생산성 저하
- API 엔드포인트 코드는 IDE나 에디터에서 직접 작성하고, 테스트와 컬렉션은 Postman 등 별도 도구에서 관리해야 했음
- 스펙, 코드, 컬렉션, 테스트 등 주요 자원이 각각 다른 위치에 존재해 버전 관리와 동기화에 어려움이 있음
- Postman이 최근 대규모 업데이트를 통해 코드베이스 내에서 모든 API 리소스를 YAML 파일로 통합·관리할 수 있도록 개선됨
- 해당 업데이트로 Postman은 완전한 'Git 기반(API native)' 플랫폼이 되어, 로컬 및 클라우드 양방향 동기화가 가능해짐
- 사용자는 변경사항을 Git diff로 트래킹하고, 버전 관리를 통해 스펙과 테스트를 코드와 동일하게 관리할 수 있게 됨
- Postman 에이전트 모드를 활용하면 자연어로 요구 사항을 입력해 자동으로 컬렉션, 스펙, 테스트, 목 등을 생성 및 동기화 가능
- Postman은 claude, GPT 등 다양한 AI 모델, MCP 서버, GitHub, Sentry, Linear 등 다양한 툴 연동도 지원
- 동일한 컬렉션 및 테스트를 로컬 환경과 CI 파이프라인 모두에서 일관성 있게 실행 가능하여, 워크플로우가 크게 단순화됨

---

## 세부 요약 - 주제별 정리

### Postman 이전의 API 개발 환경은 워크플로우가 복잡하고 통합 관리가 어려웠음

- API 개발 시 엔드포인트 생성은 IDE(코드 에디터)나 AI 코딩 에이전트 등에서 별도로 진행해야 했음
- 그 외 테스트와 컬렉션은 Postman 등 별도의 도구에서 별도로 생성 및 관리
- API 명세(specs), 컬렉션, 코드가 각기 다른 위치에 존재해 서로 연결되어 있지 않고, 통합 버전 관리가 어려웠음
- 이로 인해 API 개발 과정에서 반복 작업, 동기화 누락, 생산성 저하 등 다양한 문제 발생
- 특히 AI 에이전트 등 여러 API 엔드포인트를 다루는 프로젝트에서 이러한 비효율이 심각하게 체감됨

### Postman의 대규모 업데이트로 AI 네이티브 API 플랫폼이 되고 전격적으로 Git Native화가 이루어짐

- 발표자는 약 10년간 Postman을 사용해 왔으며, 이번 업데이트를 "massive update"라고 강조함
- Postman이 이제 'AI native API platform'으로 진화했다고 설명
- 업데이트의 핵심은 모든 Postman 리소스(컬렉션, 명세, 목(mock), 테스트 등)를 실제 코드베이스 내, 로컬 파일 시스템(YAML 형식)에서 직접 관리 가능해진 점임
- YAML 구조로 작성된 Postman 리소스 파일들은 유지·편집이 쉽고, 코드와 동일하게 관리 가능해짐

### Postman 리소스의 로컬 및 클라우드 양방향 동기화가 지원됨

- Postman 데스크톱 앱을 통해 로컬에 Postman 컬렉션, 엔드포인트 등 모든 리소스를 관리 가능
- 필요 시 Postman 클라우드로 전환해 리소스를 동기화할 수 있음
- 양방향(two-way) 동기화가 지원되어, 로컬 환경에서 수정한 내용이 클라우드에도 반영되고, 반대의 경우도 마찬가지

### Git 통합으로 스펙, 테스트 등의 변경사항을 체계적으로 추적 및 버전 관리 가능

- 리소스가 파일로 저장되기 때문에 Git diff 명령어로 모든 변경사항을 명확히 비교·추적 가능
- 예를 들어, 특정 엔드포인트 테스트 수정을 한 뒤 에디터에서 git diff를 실행하면, 변경 내역을 바로 확인할 수 있음
- API 명세와 테스트, 컬렉션 등이 코드와 똑같이 버전관리되므로 배포와 협업, 변경 이력 관리가 쉬워짐

### 파일 기반 전면 통합으로 Postman의 에이전트 모드가 API 라이프사이클 전반을 자동화함

- "Everything is just files on disk"로 요약되듯, 모든 것이 파일로 통합 관리됨
- Postman의 에이전트 모드는 전체 API 라이프사이클을 자동 조율할 수 있음
- 사용자는 자연어로 요구사항을 설명(예: "이 Flask 앱에 대해 컬렉션 생성")하면
- Postman이 코드베이스를 스캔해 자동으로 라우트 발견, API 명세 생성, 테스트 작성, 목(mock) 설정 등 통합 자동화
- 생성된 모든 변경사항이 reviewable한 git 커밋으로 기록됨

### 다양한 AI 모델, 서버 및 기존 툴들과의 연계 지원이 확대됨

- Postman은 Claude, GPT, 셀프호스팅 AI 등 다양한 AI 모델을 선택해 활용 가능
- MCP 서버, GitHub, Sentry, Linear 등 주요 개발/배포 도구와의 연동 기능 지원
- GitHub·Sentry·Linear 등에서 맥락(context) 정보를 받아 API 테스트 및 모니터링에 직접적으로 활용 가능

### 개발 환경과 배포(CI) 파이프라인을 완벽하게 동일하게 유지 가능

- 로컬 머신에서 구성한 컬렉션, 테스트 등 모든 리소스가 CI 파이프라인(예: GitHub Actions, pre-commit hook 등)에서도 동일하게 작동
- 환경 별로 테스트 구성을 별도로 유지·재작성할 필요가 없음
- 테스트와 컬렉션의 일관성 확보로, QA 및 배포 자동화가 한층 간편해짐

### 사용자 경험과 생산성이 큰 폭으로 향상되었음을 시연을 통해 강조함

- 발표자는 실제 예시로 Flask 앱을 대상으로 자연어 명령을 통해 컬렉션 생성 및 동기화를 시연
- 코드 변경 시 Git diff로 즉각적인 변경 추적이 가능함을 보여줌
- 자동 생성된 테스트, 스펙, 목(mock) 등이 모두 Git 커밋으로 남아 리뷰 및 협업이 용이함

### Postman의 새로운 API 워크플로우는 API 개발의 복잡성을 대폭 줄였다고 평가함

- 종합적으로 Postman의 Git-Native 업데이트와 AI 연동, 파일 기반 리소스 관리 방식이 API 워크플로우를 대폭 간소화함
- 관리 효율성, 변경 추적, 일관성 모두 향상되어 API 빌드와 테스트, 배포까지의 과정이 혁신적으로 개선됨
- 발표자는 해당 업데이트를 강력 추천하며, 실제 예시 및 Postman, GitHub 레포지토리 링크를 영상 설명란에 제공한다고 언급
