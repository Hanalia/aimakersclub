---
author: AI Makers Club
pubDatetime: 2026-03-24T08:18:43.170Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 기존 API 작업 과정이 복잡하고 비효율적이었다는 문제점에서 출발함 특히 AI 에이전트 등 현대 애플리케이션 개발 시, 여러 도구 사이에서 엔드포인트, 스펙, 테스트 등이 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git 기반으로 진화하며 API 개발 방식에 획기적 변화를 가져옴* 핵심 요약

- 영상은 기존 API 작업 과정이 복잡하고 비효율적이었다는 문제점에서 출발함
- 특히 AI 에이전트 등 현대 애플리케이션 개발 시, 여러 도구 사이에서 엔드포인트, 스펙, 테스트 등이 분산되고 버전 관리가 어렵다는 점을 지적
- Postman이 최근 대규모 업데이트를 진행하며, 이 모든 문제를 일거에 해결하는 ‘AI 네이티브’이자 ‘Git 네이티브’ API 플랫폼으로 전환
- 이제 컬렉션, 스펙, 목, 테스트 등 모든 Postman 리소스를 간단한 YAML 파일로 로컬 코드베이스에 직접 저장 및 관리 가능
- Postman 데스크탑 앱과 클라우드 간 양방향 동기화를 지원, 로컬과 클라우드 환경 모두에서 일관된 작업 환경 제공
- git diff 등 버전 관리 도구와 완벽하게 연동되어 API 스펙, 테스트 변경 이력을 손쉽게 추적 가능
- 모든 리소스가 파일로 관리되면서, Postman의 에이전트 모드에서 ‘자연어 지시(new collection 생성을 위한 plain English 명령)’로 전체 API 라이프사이클 자동화 가능
- AI 모델(claude, GPT, self-hosted 등) 선택 지원 및 GitHub, Sentry, Linear 등 다양한 개발 툴과 연동
- 동일한 Postman 컬렉션이 로컬 및 CI 파이프라인(Pre-commit hook, GitHub actions 등)에서 환경에 상관없이 동일하게 동작
- 영상 제작자는 약 10년간 Postman을 사용해왔으며, 이번 업데이트가 기존 문제를 근본적으로 해결했다고 강조

---

## 세부 요약 - 주제별 정리

### 기존 API 개발 워크플로우는 분산과 복잡성으로 인해 비효율이 컸음

- 기존의 API 엔드포인트 생성은 IDE나 코드 에이전트를 통해 한 곳에서 진행
- 하지만 API 컬렉션, 테스트, 목(Mock) 등은 별도의 도구(Postman 등)에서 따로 작성
- 스펙, 컬렉션, 코드가 서로 분산되어 있어 관리와 버전 컨트롤, 협업이 어려움
- CI(Continuous Integration) 환경에서 테스트 연동 과정이 추가로 번거로움
- 결과적으로 개발자들이 매번 사방에서 자원을 찾고, 여러 환경에 맞춰 수작업으로 동기화해야 하는 문제가 지속

### Postman이 대규모 업데이트를 통해 AI 네이티브, Git 네이티브 플랫폼으로 전환함

- Postman은 최근 근본적인 구조 개선 업데이트를 발표함
- 업데이트를 통해 API 개발 리소스(컬렉션, 스펙, 테스트, 목 등)를 코드와 동일하게 로컬 저장소에서 직접 관리 가능
- 이로 인해 코드와 API 문서, 테스트 사이의 단절이 해소되고, 버전 관리가 자연스러워짐

### Postman 리소스가 간단한 YAML 파일로 로컬 코드베이스에 저장 가능해짐

- YAML 기반의 설정 파일로 Postman 컬렉션, 스펙, 테스트 등을 관리 가능
- 이 파일들은 로컬 리포지토리 내에서 기존 소스코드와 동일한 방식으로 트래킹 및 관리됨
- 개발자는 기존 코드 작성과 유사한 수준의 편리함으로 Postman 리소스를 다룰 수 있음

### Postman 데스크탑 앱과 Postman 클라우드 간 양방향 동기화가 지원됨

- 모든 API 관련 리소스는 데스크탑 앱에서 로컬로 실행, 관리 가능
- 동시에 Postman 클라우드 환경과 실시간, 양방향 동기화가 지원되어, 로컬과 클라우드를 자유롭게 넘나드는 작업 환경 제공
- 특정 엔드포인트 테스트 예제 변경 시, 에디터에서 바로 git diff로 변경내역 확인 가능

### git 연동을 통해 API 리소스의 버전 관리와 변경 추적이 쉬워짐

- 모든 리소스 변경사항은 git diff, commit 등으로 코드와 동일하게 추적·관리 가능
- 팀원 간 변경사항 리뷰, 히스토리 관리가 쉬워졌으며
- API 스펙과 테스트 변경이 코드와 함께 버전화되어 일관성 있는 개발과 협업 환경 제공

### 리소스가 파일로 관리되면서 Postman의 에이전트 모드 자동화가 강력해짐

- 리소스가 디스크 상의 단순 파일 형태가 되면서, Postman의 에이전트 모드에서 전체 워크플로우 자동화 가능
- 예시: 자연어로 “이 Flask 앱에 대한 컬렉션을 생성해줘”와 같이 지시하면, Postman 에이전트가 코드베이스를 스캔
- 자동으로 엔드포인트(route) 탐색, API 스펙 생성, 테스트 작성, 목 구성 등 반복 작업 자동화
- 모든 과정은 git 커밋 단위로 기록, 리뷰 가능

### AI 모델 선택 및 다양한 개발 협업 툴과의 연동성을 강화함

- AI 에이전트를 claude, GPT, 직접 호스팅(self-hosted) 등으로 자유롭게 선택해서 사용할 수 있음
- MCP 서버 지원 등 다양한 인프라 옵션 제공
- GitHub, Sentry, Linear 등 기존에 사용하던 툴들로부터 컨텍스트(맥락) 정보를 받아와 AI 자동화 품질 향상

### 하나의 컬렉션이 로컬, CI 모든 환경(Pre-commit, GitHub Actions 등)에서 동일하게 동작함

- Postman의 동일한 컬렉션 파일이 개발 PC와 CI 파이프라인 모두에서 변환이나 별도 작성 없이 바로 실행 가능
- pre-commit 훅, GitHub Actions 등에서 같은 테스트를 재사용하여 환경별 코드 차이 없이 일관된 검증이 보장됨
- 테스트나 스펙을 환경별로 다시 작성할 필요가 없어 개발 속도 및 품질이 현저히 향상

### 영상 제작자는 10년간 Postman을 사용했고, 이번 업데이트의 혁신성을 직접 경험함

- Cole Medin(영상 제작자)은 Postman을 10년 동안 사용했다고 밝힘
- 이번 git 네이티브, AI 네이티브화로 인해 기존에 겪던 모든 API 개발상의 복잡한 문제가 해소됨을 강하게 강조
- 예시용 깃허브 저장소와 관련 링크를 영상 설명란에 제시
