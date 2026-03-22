---
author: AI Makers Club
pubDatetime: 2026-03-22T08:18:34.998Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "기존에는 API 작업이 여러 툴과 환경에 분산되어 복잡하고 비효율적이었음 AI 에이전트 등 현대 서비스 개발에선 API 엔드포인트 관리가 필수적이나, 스펙과 테스트, 코드가 각각 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman의 Git 네이티브 전환으로 API 빌드는 완전히 달라짐* 핵심 요약

- 기존에는 API 작업이 여러 툴과 환경에 분산되어 복잡하고 비효율적이었음
- AI 에이전트 등 현대 서비스 개발에선 API 엔드포인트 관리가 필수적이나, 스펙과 테스트, 코드가 각각 분리되어 버전 관리와 동기화에 어려움이 많았음
- Postman이 대규모 업데이트로 코드와 스펙, 테스트, 목(mock) 등을 YAML 파일로 코드베이스 내에서 직접 관리 가능하게 지원함
- 모든 Postman 리소스를 로컬 파일로 쉽게 유지·관리할 수 있어 코드와 동일하게 Git 등으로 엄격한 버전 관리가 가능해짐
- Postman 데스크톱 앱과 클라우드 간 양방향 동기화 기능으로 변경 사항 적용과 추적이 간편해짐
- YAML 파일 기반 파일 시스템으로 Git diff 등 표준 버전 관리 툴과 자연스럽게 통합됨
- Postman의 에이전트 모드로 영어 텍스트 지시만으로 코드베이스 전체의 API 명세 생성·테스트·목 작성 등이 자동화됨
- Claude, GPT, 자체 호스팅 등 다양한 AI 엔진 선택 가능하며, MCP 서버, GitHub, Sentry, Linear와 같은 기존 개발툴과 연동 가능
- 동일한 컬렉션과 테스트가 CI 파이프라인(프리커밋, Github Actions 등)에서도 환경 재설정 없이 실행됨
- Postman의 이번 변화가 API 라이프사이클 전반의 혁신임을 강조하며, 예시 리포지토리 및 Postman 링크 제공

## 세부 요약 - 주제별 정리

### 기존 API 개발 워크플로우는 환경과 도구별 분산으로 인해 불편과 혼란이 반복됨

- API 엔드포인트를 별도의 공간(IDE, 수동 코딩 또는 AI에이전트)에서 작성해야 함
- 컬렉션(요청 묶음), 테스트 등은 Postman과 같은 별도의 도구에서 별도로 관리해야 했음
- 사양(spec), 컬렉션, 테스트, 코드가 각기 다른 장소에 있어 서로 연결되어 있지 않음
- 이로 인해 버전 관리와 과정 동기화가 어렵고 항상 흐름이 뒤죽박죽임
- 특히 AI 에이전트 등 최신 서비스 개발에서는 API 관리의 비중이 매우 큼

### Postman의 git-native 업데이트로 사양, 테스트, 목 등을 한 곳에서 코드처럼 관리 가능해짐

- Postman의 최근 대규모 업데이트 후 모든 주요 리소스를 YAML 파일로 코드베이스(로컬)에 저장 가능
- YAML 파일은 사람이 쉽게 읽고 쓰기 쉬우며 유지보수가 용이함
- Postman 데스크톱 앱에서 이 YAML 파일들을 바로 불러와 관리할 수 있음
- 컬렉션, 엔드포인트, 테스트, 목 등이 하나의 코드베이스 내에 통합되어 있음

### 코드베이스-클라우드 간 양방향(2-way) 동기화로 협업과 변경 추적이 쉬워짐

- 로컬(개발자 PC)에서 작업한 Postman 리소스들은 Postman 클라우드와 완전히 동기화됨
- Postman 앱에서 바로 클라우드 전환 버튼으로 손쉽게 작업 공간을 전환
- 변경사항 발생 시 Git과 동일하게 diff 명령어로 모든 변경점 식별 가능
- YAML 기반이라 소스코드 관리와 똑같이 버전 컨트롤 및 협업 가능

### 파일 시스템 기반 저장 방식으로 표준 개발 툴(Git 등)과 자연스럽게 통합되어 효율성이 극대화됨

- 모든 리소스가 디스크 상의 파일(특히 YAML)로 존재하므로 Git diff 등으로 각 변경 이력을 즉시 추적
- 코드 베이스와 동일한 방식으로 버전 관리, 리뷰, 협업 가능
- (예시) 테스트 일부를 간단히 수정 후 git diff로 차이점 확인하는 장면 제시

### Postman의 에이전트 모드로 사용자는 영어 지시만으로 전체 API 라이프사이클 자동화가 가능해짐

- Postman의 에이전트 모드가 도입됨으로써 코드베이스 전체의 API 관련 처리를 자동화
- 사용자는 "이 Flask 앱용 컬렉션을 생성해줘"처럼 평문 영어로 요청 입력 가능
- Postman이 코드를 스캔해 라우트(route) 및 엔드포인트를 자동 추출
- 명세(spec), 테스트, 목(mock)을 자동으로 생성하여 일관성 확보 및 수동작업 최소화

### 모든 생성 및 변경 이력이 Git 커밋 단위로 리뷰 가능하여 개발 프로세스가 표준화됨

- 자동 생성된 모든 결과물이 Git 커밋으로 남아 팀원 검토와 히스토리 추적이 용이
- AI 기반 자동화 생성이라도 표준 코드리뷰 및 버전관리 워크플로우 유지 가능

### 다양한 AI 및 서버, 개발툴과의 연동성으로 실무 개발환경에 즉시 적용 가능함

- Claude, GPT, 자체 호스팅 방식(AI 모델 호스팅)이 지원됨
- MCP 서버(MultiCloud Platform) 등 기업용 운영환경 대응
- GitHub, Sentry(오류트래킹), Linear(작업관리) 등 실무에서 활용하는 다양한 도구들과 통합 지원

### 동일한 테스트와 컬렉션이 모든 환경(CI/CD, 프리커밋, 로컬 등)에서 재작성 없이 실행됨

- 동일한 파일(YAML) 구조로 로컬, CI 파이프라인, Github Actions 등에 동일하게 적용
- 환경이 다르더라도 추가 스크립트나 코드 수정 없이 일관된 테스트/검증이 가능함
- 개발자는 환경별 번거로운 중복 작성·유지보수에서 해방됨

### Postman의 변화가 API 개발과 관리 전 과정을 혁신하는 결정적 도약임을 시연과 함께 강조함

- 발표자는 10년 넘게 Postman을 사용 중이며, 이번 git-native 기반 업데이트를 극찬하며 “혁명을 불러일으켰다”고 평가
- 실제 Postman과 예시 Github 리포지토리의 링크를 설명란에 제공하니 자세한 예시는 참고 권장
- 본 영상은 변화된 워크플로우의 실제 예시, 코드–클라우드 연동, 커밋-테스트 동작, 에이전트 모드 시연 등으로 구체적인 차별점을 보여줌
