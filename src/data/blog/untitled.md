---
author: AI Makers Club
pubDatetime: 2026-03-14T23:45:34.540Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "최근까지 API 작업은 여러 도구와 분리된 방식으로 진행되어 비효율적이고 복잡했음 API 엔드포인트 작성, 컬렉션 및 테스트 생성, CI 적용 등 각 단계가 다른 플랫폼과 위치에 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git을 네이티브로 통합하여 API 개발 방식에 혁신을 가져옴* 핵심 요약

- 최근까지 API 작업은 여러 도구와 분리된 방식으로 진행되어 비효율적이고 복잡했음
- API 엔드포인트 작성, 컬렉션 및 테스트 생성, CI 적용 등 각 단계가 다른 플랫폼과 위치에 분산되어 관리 어려움 존재
- Postman이 대규모 업데이트를 통해 API 개발을 위한 AI 네이티브 플랫폼이 됨
- 새로운 'Git 네이티브' 기능으로 모든 Postman 리소스를 로컬 코드베이스 내 YAML 파일로 직관적 관리 가능
- Postman 앱에서 로컬 파일을 직접 작업할 수 있고, Postman 클라우드와 양방향 동기화 지원
- 코드, 스펙, 테스트 등 모든 변경사항이 git diff로 추적 가능하며, 버전 관리가 코딩 작업과 동일하게 쉬워짐
- Postman의 새로운 에이전트 모드에서는 요구사항을 영어로 설명하면 AI가 코드를 분석해 컬렉션, 스펙, 테스트, 목(mock)까지 자동 생성 및 동기화
- 생성된 모든 리소스는 리뷰 가능한 git 커밋 형식으로 저장되어 협업 및 코드 리뷰가 편리해짐
- AI 모델 선택(Claude, GPT, 셀프호스팅 등)과 다양한 외부 서비스(MCP 서버, GitHub, Sentry, Linear 등) 연동 지원
- 동일한 컬렉션이 로컬 머신과 CI 파이프라인(프리커밋 훅, GitHub Actions 등)에서 동일하게 실행되어 환경별 중복 작성 불필요
- 서비스 전반에 걸친 혁신으로 API 개발, 테스트, 배포 전 사이클을 일관되고 효율적으로 관리 가능
- Postman과 예시를 담은 GitHub 리포지토리 링크를 영상 설명에 제공함

---

## 세부 요약 - 주제별 정리

### 기존 API 작업 방식은 다양한 툴과 분산된 관리로 인해 복잡함을 초래함

- 기존에는 API 엔드포인트를 IDE 혹은 코딩 에이전트에서 생성해야 했음
- API 컬렉션 및 테스트는 Postman과 같은 별도의 도구에서 별도로 작성, 관리됨
- 개발자는 작성된 테스트를 CI(지속적 통합)와 연동할 때 추가 설정이 필요했음
- 전체 워크플로우는 코드, 스펙, 컬렉션 등이 서로 분리되고, 버전 관리도 분산되어 진행됨
- 결과적으로 개발자들은 스펙, 컬렉션, 테스트, 실제 코드가 단일화되지 않아 동기화 및 협업상 불편과 오류 위험이 존재함

### Postman의 대규모 업데이트로 AI 네이티브 및 Git 네이티브 플랫폼으로 도약함

- Postman은 최근 “매우 큰 업데이트(major update)”를 선보였다고 설명함
- 이 업데이트로 Postman은 AI 네이티브 API 개발 플랫폼이 되었음
- 특히 Postman이 Git 네이티브(Git-native)를 지원함으로써 전체 개발환경의 파워가 크게 향상됨
- 발표자는 본인 경험을 언급하며 거의 10년간 Postman을 사용해왔으나 이번 업데이트가 혁신적이라고 강조함

### Postman 리소스가 로컬 코드베이스의 YAML 파일로 통합 관리될 수 있게 됨

- 모든 컬렉션, 스펙, 목(mock), 테스트 등 Postman 리소스를 “로컬 코드베이스” 내 YAML 파일 형식으로 저장 가능함
- YAML 파일은 구조가 단순하고 관리가 쉬워 유지보수성이 높아짐
- 로컬에서 파일을 직접 작업할 수 있고, Postman 데스크톱 앱에서도 동일하게 접근 및 편집 가능

### Postman 클라우드와 로컬 작업 간 양방향 동기화로 협업성이 강화됨

- 로컬 코드베이스에서 작업한 모든 변경사항은 Postman 클라우드와 “2-way sync(양방향 동기화)” 가능
- 사용자는 로컬에서 수정한 파일을 Postman 서비스와 손쉽게 연동 및 배포할 수 있음
- 로컬에서 테스트 등 일부 수정 후 에디터에서 git diff로 변경 내역을 즉시 확인 가능
- 코드, 스펙, 테스트 변경사항 모두 git 기반의 버전 관리가 용이해져 협업과 변경 추적이 쉬움

### 파일 기반 관리로 API 관련 모든 리소스를 코드와 동일하게 버전 관리할 수 있음

- 모든 리소스가 코드와 동일한 “파일로서” 저장되기 때문에 버전 관리가 일관됨
- git diff, git commit 등 버전 관리 커맨드로 스펙과 테스트 등 변경 이력을 관리
- API 변경에 따른 리소스의 선형 추적, 협업, 롤백 등이 쉬워지고, 코드 리뷰 과정에서도 직관적으로 관리 가능

### Postman 에이전트 모드에서 AI가 자연어 요구사항을 기반으로 API 개발 전반을 자동화함

- Postman의 “에이전트 모드(Agent Mode)”가 새롭게 추가됨
- 사용자가 필요 요구조건을 영어 등 자연어로 기술하면, Postman이 AI 기반으로 작업을 수행
- 예시: Flask 앱이 주어졌을 때, Postman이 코드베이스를 스캔, 라우트(route) 자동 탐지, 스펙 및 테스트 생성, 목 구성 등 일련의 작업을 자동 진행
- 모든 결과물이 파일로 저장되어 git 커밋 내역으로 리뷰 가능함

### AI 모델과 외부 서비스 연동이 유연하게 지원됨

- AI 모델은 Claude, GPT, 셀프호스팅 등 다양한 옵션 중 선택 가능
- MCP(Microsoft Cloud Platform) 서버 연동 지원
- GitHub, Sentry, Linear 등 기존에 사용하는 툴의 컨텍스트를 Postman에 통합 가능, 각종 자동화와 연계 활용이 용이함

### 동일한 API 컬렉션, 테스트가 로컬과 CI 환경 모두에서 완전히 동일하게 동작함

- 로컬 개발 환경에서 작성한 컬렉션과 테스트가 CI 파이프라인(예: pre-commit hook, GitHub Actions 등)에서도 그대로 동작
- 환경마다 테스트 코드를 반복 작성할 필요 없이 전체 워크플로우 일관성 유지
- 복수 환경 간 테스트/운영 일치성을 보장, 품질 관리와 디버깅도 수월해짐

### Postman의 최신 변화로 API 개발 라이프사이클 전반이 비약적으로 간소화·최적화됨

- API의 설계, 개발, 테스트, 배포까지 모든 사이클을 하나의 파일 기반, 하나의 툴 체계에서 종합 관리할 수 있음
- 변경 사항, 코드 리뷰, 테스트 자동화가 git 기반 워크플로우와 완전히 통합됨
- 팀원 간 협업과 오토메이션, 품질 관리가 눈에 띄게 향상됨

### 실제 예시와 참고 링크 제공

- 영상 제작자는 설명에 Postman 공식 링크와 자신의 GitHub 저장소(해당 예시 코드 포함) 링크를 제공했음을 안내
- 직접 실습을 원하는 사용자가 상세 구현을 참고할 수 있도록 구체적 자료를 추가로 제공함
