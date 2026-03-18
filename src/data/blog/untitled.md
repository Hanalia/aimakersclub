---
author: AI Makers Club
pubDatetime: 2026-03-18T23:45:43.248Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Postman이 최근 대대적인 업데이트를 통해 Git-네이티브 기능을 도입, API 개발과 관리 방식에 근본적인 변화를 가져옴 이전까지 API 엔드포인트, 스펙, 컬렉션, 테스트가"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git-네이티브로 진화하며 API 빌드 방식을 완전히 혁신함* 핵심 요약

- Postman이 최근 대대적인 업데이트를 통해 Git-네이티브 기능을 도입, API 개발과 관리 방식에 근본적인 변화를 가져옴
- 이전까지 API 엔드포인트, 스펙, 컬렉션, 테스트가 서로 다른 도구와 위치에 분산되고 버전 관리가 어려웠음
- 새로운 Postman에서는 컬렉션, 스펙, 모크, 테스트 등 모든 Postman 리소스가 간단한 YAML 파일로 코드베이스 내에 통합되어 관리 가능
- 데스크탑 앱과 코드베이스가 완벽하게 동기화되고, 로컬 작업과 클라우드 간 이중 동기화(2-way sync)가 지원됨
- Git diff 등 기존 코드 관리 툴을 활용해 API 스펙 및 테스트 변경 사항을 쉽고 투명하게 추적 및 버전 관리 가능
- Postman Agent Mode와 AI 네이티브 기능을 통해 플레인 잉글리시(자연어)로 API 컬렉션 자동 생성 및 설정 가능
- AI가 코드베이스에서 라우트, 스펙, 테스트, 모크 등 모든 관련 요소를 자동 감지·생성하며, 결과물이 Git 커밋으로 남음
- Claude, GPT, 자가 호스팅 모델 등 다양한 AI 모델 선택 및 MCP 서버 지원, GitHub, Sentry, Linear 등 다양한 툴과 연동 가능
- 로컬에서 동작하는 컬렉션이 CI 파이프라인(프리커밋 훅, GitHub Actions 등)에서도 동일하게 실행됨
- 개발자 경험, 협업, 버전 관리, 생산성 등 다양한 측면에서 Postman 사용 경험이 한 단계 진화함을 강조
- 영상 하단에 실사용 예시로 본인의 GitHub 저장소 링크와 Postman 소개 링크가 제공됨

---

## 세부 요약 - 주제별 정리

### API 작업은 지금까지 비효율적이고 혼란스러웠으나 Postman이 이를 완전히 개선함

- 지금까지의 API 개발 환경은 지나치게 번거롭고 비효율적이었음
- 특히 인공지능 에이전트 등 현대적 개발 과정에서 수많은 API 엔드포인트를 계속 다루게 됨
- 엔드포인트 작성은 IDE나 개발자가 직접 처리, 컬렉션 및 테스트 작성을 위한 별도 툴이 필요함
- CI(지속적 통합) 환경에서 테스트 연동 역시 별도의 문제로 존재
- API 스펙, 컬렉션, 코드가 서로 다른 위치에 분산돼 연결성과 버전 통합 관리가 어려웠음

### Postman의 Git-네이티브 업데이트가 버전 관리와 연동성을 획기적으로 향상시킴

- Postman이 최근 진행한 ‘Git-네이티브’ 업데이트로 이런 문제들을 획기적으로 해결
- Postman의 모든 리소스(컬렉션, 스펙, 모크, 테스트 등)가 코드베이스 상의 간단한 YAML 파일로 통합 저장 가능
- 기존에는 각각 따로 관리되던 리소스들이 Git으로 분산 버전 관리가 가능해짐
- Postman 데스크탑 앱에서도 이 파일들과 직접적으로 상호작용 가능

### 로컬 저장소와 Postman 클라우드 간의 손쉬운 양방향 동기화 지원

- 모든 컬렉션과 엔드포인트 및 구성 정보는 개발자의 로컬 환경에서 작동함
- 사용자는 언제든 Postman 클라우드로 전환 가능하며, 로컬과 클라우드 사이에 2-way sync가 적용됨
- API 테스트 등 일부 변경 사항을 저장하면 Git diff 등을 통해 변경 이력 확인 및 추적이 용이함
- 모든 변경사항이 Git 커밋으로 기록, 코드와 API 리소스가 동일하게 버전 컨트롤 됨

### Plain English 명령어로 AI 기반 창작과 전체 API 라이프사이클 자동화가 가능해짐

- Postman Agent Mode가 전체 API 라이프사이클 전반에서 통합적 지원을 제공
- 사용자는 단순히 평문(plain English)로 필요한 작업을 설명하면, 예를 들어 “이 Flask 앱에 맞춰 컬렉션 생성” 명령
- AI가 코드베이스를 스캔하여 라우트(엔드포인트), 스펙, 테스트, 모킹 등을 자동으로 생성
- 모든 결과물(스펙, 테스트, 모크 등)은 Git diff 확인이 가능한 파일 단위로 커밋됨
- 반복적이며 수동으로 하던 설정이 AI를 통해 자동화됨

### Claude, GPT 등 다양한 AI 엔진 및 외부 툴 연동으로 활용성이 극대화됨

- AI 엔진 선택 다양화: Claude, GPT, 자가 호스팅 AI 등 다양한 모델 선택 가능
- MCP(Managed Control Plane) 서버도 공식 지원
- 이미 사용 중인 GitHub, Sentry, Linear 등 외부 디벨롭먼트 툴과도 연동하여 맥락 정보 수집 가능

### 동일한 테스트 환경이 로컬과 CI 파이프라인 모두에서 일관되게 적용됨

- 로컬 머신에서 구동사업 API 컬렉션이 그대로 CI(프리커밋 훅, GitHub Actions 등) 환경에서도 동작
- 환경별로 테스트 코드를 따로 작성하거나 수정할 필요 없음
- 코딩 환경 간 테스트 실행상의 일관성과 재현성이 보장됨

### Postman 사용 경험 개선으로 생산성과 협업 수준이 한 단계 향상됨

- Postman이 AI 네이티브, Git 네이티브 통합 플랫폼 역할을 하게 됨
- 10년 가까이 Postman을 사용한 제작자가 이번 업데이트에 대해 극찬함
- 개발자 경험 및 협업 용이성, 버전 관리 측면에서 비약적인 변화로 평가

### 실사용 예시 GitHub 저장소 및 추가 링크 제공

- 영상 설명란에 Postman 및 실제 사용 예시 GitHub 저장소 링크 제공됨
- 시청자는 직접 업데이트 기능 확인 및 실습 가능
