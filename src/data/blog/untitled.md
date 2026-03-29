---
author: AI Makers Club
pubDatetime: 2026-03-29T23:45:59.072Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "기존 API 개발은 엔드포인트, 스펙, 테스트, 컬렉션 관리 등 여러 도구에서 분산되어 비효율적이고 복잡했음 특히 AI 에이전트 개발처럼 API 엔드포인트 작업이 잦은 실무에서 워"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman의 Git 네이티브 업데이트로 API 개발 환경이 근본적으로 변화함* 핵심 요약

- 기존 API 개발은 엔드포인트, 스펙, 테스트, 컬렉션 관리 등 여러 도구에서 분산되어 비효율적이고 복잡했음
- 특히 AI 에이전트 개발처럼 API 엔드포인트 작업이 잦은 실무에서 워크플로가 매우 불편했음
- Postman이 최근 대규모 업데이트를 통해 "AI 네이티브 API 플랫폼"으로 진화했고, Git 네이티브 기능까지 추가함
- 이제 Postman의 모든 리소스(컬렉션, 스펙, 모크, 테스트 등)를 코드베이스에서 로컬 YAML 파일로 관리 가능
- Postman 데스크톱 앱과 로컬 파일을 양방향 동기화할 수 있으며 변경사항을 쉽게 Git에서 추적 및 버전 관리 가능
- 파일 기반 관리로 인해 API 스펙, 테스트 등을 코드와 동일하게 Git 커밋으로 리뷰하고 관리할 수 있음
- "에이전트 모드" 기능으로 영어로 필요한 내용을 기술하면, 코드베이스 자동 분석 및 컬렉션/스펙/테스트/모크가 자동으로 생성됨
- 대표적인 예시로 Flask 앱의 라우트 분석, 스펙·테스트·모크 동시 생성을 보여줌
- AI 기반 자동화에서는 ‘claude’, ‘GBT’, 셀프 호스팅 등 다양한 AI 모델과, MCP 서버도 지원함
- GitHub, Sentry, Linear 등 기존 협업 툴들의 컨텍스트와 연동할 수 있음
- 동일한 컬렉션이 개발 환경과 CI 파이프라인(Pre-commit hook, GitHub Actions 등)에서 동일하게 동작, 리라이트 불필요
- 영상 제작자는 자신의 Postman 및 예제 GitHub 레포 링크를 설명란에 제공함

---

## 세부 요약 - 주제별 정리

### 기존 API 개발 과정은 도구 간 분산과 비효율성으로 많은 불편을 초래함

- API 엔드포인트를 만들 때 IDE나 코드 에이전트 등 여러 곳에서 개발해야 했음
- 컬렉션과 테스트는 별도의 툴에서 따로 관리해야 하며, 이 또한 번거로움의 원인이 됨
- CI(지속적 통합) 환경에서 테스트 연동이 복잡함
- 스펙, 컬렉션, 코드 파일이 모두 서로 다른 위치에 존재하며 동기화/버전관리가 어려움

### Postman의 대규모 업데이트로 API 워크플로의 단일화 및 혁신이 이루어짐

- Postman은 최근 "AI 네이티브 API 플랫폼"으로 커다란 변화를 적용했음
- Git 네이티브(Git native) 기능을 공식적으로 도입하여 개발자 환경과의 통합을 강화함
- 영상 제작자는 약 10년간 Postman을 사용해 왔으며, 이번 업데이트를 매우 혁신적으로 평가함

### Postman 리소스가 로컬 코드베이스의 YAML 파일로 통합 관리 가능해짐

- 컬렉션(collections), 사양(specs), 모크(mocks), 테스트(tests) 등 모든 Postman 리소스를 YAML 파일로 관리
- 이 파일들은 로컬 코드베이스 안에 위치하며, 유지보수가 쉽고 가독성이 뛰어남
- Postman 데스크톱 앱에서 직접 이 YAML 파일 데이터를 읽고 쓸 수 있어 개발 및 관리가 쉬워짐
- 모든 리소스를 개발자의 로컬 환경에서 완전히 제어 가능함

### Postman 데스크톱 앱과 클라우드 간 양방향 동기화로 최신 상태 유지가 쉬워짐

- 사용자는 Postman 데스크톱 앱에서 로컬 리소스에 접근 및 수정 가능
- Postman 클라우드와의 2-way sync를 통해 로컬과 클라우드 모두에서 변경·관리가 가능
- 예시로 엔드포인트 중 하나의 테스트를 간단히 수정한 뒤, 에디터에서 ‘git diff’ 명령을 실행해 변화 추적 과정을 시연함

### 모든 API 관련 변경사항을 Git으로 쉽게 추적 및 버전 관리할 수 있음

- Postman 리소스들이 단순한 파일로 관리되어 git diff 등을 활용해 변경 내역 기록 및 추적 가능
- 스펙, 테스트, 컬렉션의 버전 관리가 코드와 같은 방식으로 처리됨
- Git 커밋 단위로 변경 점을 리뷰하고 협업할 수 있어, 엔지니어링 품질과 협업 생산성이 높아짐

### 파일 기반 관리로 API 라이프사이클 전체를 에이전트 모드에서 자동화 가능

- 'Postman Agent Mode'를 통해 API 라이프사이클의 시작부터 끝까지 연동·자동화됨
- 사용자는 평문 영어로 기능을 설명(프롬프트)하는 것만으로 동작 가능(예: "Flask 앱에 컬렉션 생성")
- 에이전트가 코드베이스 전체를 분석함으로써, 라우트 탐색, 스펙 작성, 테스트 생성, 모크 설정 등을 자동화함
- 모든 생성 결과가 Git 커밋으로 수집되어 코드리뷰 가능하도록 동작함

### 다양한 AI 모델 및 외부 서버 지원으로 확장성과 연동성을 확보함

- 컬렉션 생성 등 자동화에 활용할 AI 모델로 Claude, GPT, 셀프호스팅 모델 등 다양한 선택지 지원
- MCP(Machine Control Panel) 서버 지원으로 추가 확장 가능
- 별도 도구 사용 없이 API 라이프사이클 자동화를 AI가 주도할 수 있게 됨

### GitHub, Sentry, Linear 등 기존 협업툴과 맥락 정보 연동이 가능함

- API 관리 및 테스트 맥락을 GitHub, Sentry, Linear과 같은 도구로부터 바로 수집 가능
- 개발자가 이미 사용하는 주요 툴들과의 자연스러운 통합 기반 마련

### 동일 컬렉션이 개발 환경과 CI, 파이프라인 환경에 모두 호환되어 생산성을 크게 향상시킴

- 컬렉션, 테스트 등 관리 파일이 환경마다 별도로 구성될 필요 없음
- 개발 환경에서 만든 동일 리소스를 CI 파이프라인(Pre-commit hooks, GitHub Actions)에서도 재사용 가능
- 환경별로 스크립트나 테스트를 따로 작성하지 않아도 되며, 모든 환경에서 완벽하게 동일하게 작동함

### Postman의 혁신으로 API 개발자 생산성과 자동화 수준이 크게 높아졌음을 강조함

- Postman의 최신 업데이트가 기존 워크플로 문제를 완전히 개선한 것으로 소개
- 영상 마지막에 Postman 공식 웹사이트 및 예시 GitHub 레포지토리 링크를 설명란에서 안내함
