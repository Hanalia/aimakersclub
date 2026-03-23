---
author: AI Makers Club
pubDatetime: 2026-03-23T23:46:18.745Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 “Postman이 Git-네이티브로 진화하며 API 구축 방식을 완전히 변화시킴”임 API 작업은 기존에 여러 툴과 분산된 환경 때문에 비효율적이고 복잡하게 진행되었음"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git-네이티브로 진화하며 API 구축 방식을 완전히 변화시킴* 핵심 요약

- 영상 제목은 “Postman이 Git-네이티브로 진화하며 API 구축 방식을 완전히 변화시킴”임
- API 작업은 기존에 여러 툴과 분산된 환경 때문에 비효율적이고 복잡하게 진행되었음
- API 엔드포인트, 컬렉션, 테스트, 스펙, 코드가 서로 연동되지 않고 각기 다른 곳에 위치해 관리에 어려움이 있었음
- Postman이 대규모 업데이트를 통해 AI 네이티브 API 플랫폼 및 Git-네이티브 환경을 지원하게 됨
- 모든 Postman 리소스(컬렉션, 스펙, 목, 테스트 등)를 로컬 코드베이스에 YAML 파일로 저장, 관리 가능해짐
- 로컬에서 Postman 데스크톱 앱과 양방향 동기화가 가능하며, 클라우드와도 쉽게 연동되어 편리함 제공
- git diff를 활용해 스펙과 테스트의 변경사항을 코드와 동일하게 버전관리할 수 있음
- Postman의 에이전트 모드를 통해 AI가 API 라이프사이클 전반을 관리: 코드베이스 분석, 자동 테스트/스펙/목 생성 및 동기화
- AI 모델(cCLAUDE, GPT, 자체 호스팅 등) 선택 가능, Github, Sentry, Linear 등 외부 툴과 연동 지원
- 동일한 테스트 컬렉션이 로컬과 CI 환경(Pre-commit Hooks, Github Actions 등) 모두에서 재사용 가능해 중복 작업 방지

---

## 세부 요약 - 주제별 정리

### 기존 API 개발은 코드, 테스트, 스펙, 컬렉션 관리가 분산되어 혼란스러웠음

- 기존 API 작업은 매우 번거롭고 복잡하여 개발 생산성을 저하시켰음
- 엔드포인트는 IDE나 코딩 에이전트 등 한 곳에서 만들어야 했음
- 반면, 컬렉션/테스트는 별도의 툴(Postman 등)에서 관리해야 했음
- CI(지속적 통합)을 구성할 때, 각각의 테스트를 별도로 연동시켜야 해서 추가적인 번거로움이 발생했음
- 결과적으로 스펙, 컬렉션, 테스트, 코드가 통합되지 않고 서로 다른 위치에 존재하여 관리가 비효율적이었음
- 버전 관리는 코드만 Git 등으로 가능하고, 나머지는 별도 관리되어 일관된 변경 기록 관리가 어려웠음

### Postman의 대규모 업데이트로 AI/코드 네이티브 API 플랫폼이 실현됨

- 10년 가까이 Postman을 사용해온 제작자 기준, 최근 Postman이 ‘AI 네이티브 API 플랫폼’으로 업그레이드됨
- 이번 업데이트로 Postman은 ‘Git-네이티브’ 환경을 정식 지원하게 됨
- 이로써 API 생명주기 전체 관리가 한곳에서 수행 가능해짐

### YAML 파일을 통한 모든 Postman 리소스의 코드베이스 직접 관리가 가능해짐

- Postman 컬렉션, 스펙, 목, 테스트 등 모든 리소스를 코드베이스 내 YAML 파일로 관리할 수 있음
- 이 YAML 파일들은 로컬 저장소에 존재하며, 관리 및 유지가 용이해졌음
- Postman 데스크톱 앱에서 로컬 파일과 직접 작업할 수 있어 운영 환경과 개발 환경이 일치함

### Postman 클라우드와의 양방향 동기화로 협업 및 확장성이 향상됨

- 로컬 코드베이스와 Postman 클라우드 간 양방향(sync)이 구현되어 데이터 일관성 유지가 쉬워짐
- 예를 들어, 엔드포인트 테스트를 수정하면 곧바로 클라우드와 동기화되며, git에서 차이점을 바로 확인 가능
- git diff 명령어로 스펙과 테스트 변경사항을 코드 변경과 같이 추적 및 버전관리할 수 있음

### 모든 변경사항은 reviewable git commit으로 기록되어 추적성과 신뢰성 강화됨

- 모든 Postman 리소스가 로컬 파일로 존재하므로, 각기 다른 리소스의 변경사항 역시 git committee로 기록 및 검토가 가능해짐
- 모든 작업 및 이력이 투명하게 문서화되어 개발 프로세스가 보다 체계적으로 변화

### Postman 에이전트 모드를 이용해 AI가 전체 API 라이프사이클 관리를 자동화함

- 에이전트 모드에서는 사용자 요구 사항을 자연어(Plain English)로 설명하면 됨
- 예시: “이 Flask 앱을 위한 컬렉션 생성”이라고 입력하면,
    - Postman은 코드베이스를 스캔해 라우트(엔드포인트)를 자동으로 추출
    - 추출한 정보로부터 스펙/테스트/목까지 자동 생성 및 동기화
    - 모든 결과물이 바로 YAML 파일로 코드베이스에 반영됨

### 여러 AI 모델(Claude, GPT, 자체 호스팅 등)과의 선택적 통합 지원이 가능함

- 사용자는 Claude, GPT, 자체 호스팅 모델 등 원하는 AI 엔진을 자유롭게 선택해 Postman 에이전트에 활용할 수 있음

### Github, Sentry, Linear 등 주요 개발 도구들과 연동으로 실무 효율성이 극대화됨

- Github, Sentry, Linear 등 기존에 사용하던 개발 도구들과의 컨텍스트도 YAML 컬렉션에 쉽게 포함시킬 수 있음
- 실제 업무 환경에서 활용성이 크게 높아짐

### 통합된 테스트 컬렉션은 모든 개발·운영 환경(CI, 로컬 등)에서 반복 사용 가능함

- 동일한 테스트 컬렉션이 로컬과 CI 파이프라인(Pre-commit Hooks, Github Actions 등) 모두에서 동일하게 동작함
- 환경별로 테스트를 별도로 만들 필요 없이, 한 번 생성한 리소스를 다중 환경에서 재사용 지원
- 운영 환경 변경에 따른 테스트 재작성 불필요

### Postman의 변화로 API 개발·테스트 전체 워크플로우가 비약적으로 간소화되고 효율화됨

- Postman이 Git-네이티브, AI-네이티브 API 플랫폼으로 진화하면서 기존 혼란스러운 워크플로우가 혁신적으로 개선됨
- 제작자는 본인의 GitHub 저장소 예시와 함께 Postman 사용을 강력 추천하며, 영상 설명란에 참조링크를 안내함
