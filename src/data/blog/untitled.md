---
author: AI Makers Club
pubDatetime: 2026-03-15T08:18:40.608Z
title: "Postman Went Git-native and it Changes Everything for Building APIs"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "기존 API 작업은 사양, 테스트, 코드가 서로 분리되어 있어 작업 흐름이 복잡하고 관리가 어려웠음 AI 에이전트 포함 모든 현대 개발에서 API 엔드포인트 관리가 필수적이지만, "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Postman Went Git-native and it Changes Everything for Building APIs](https://www.youtube.com/shorts/LkA6Qbt9LTM)  
**채널명:** Cole Medin

## *Postman이 Git과 완전히 통합되며 API 구축 방식에 혁신을 가져옴* 핵심 요약

- 기존 API 작업은 사양, 테스트, 코드가 서로 분리되어 있어 작업 흐름이 복잡하고 관리가 어려웠음
- AI 에이전트 포함 모든 현대 개발에서 API 엔드포인트 관리가 필수적이지만, 여러 툴과 프로세스가 분산됨
- Postman의 최근 대규모 업데이트로 전체 API 리소스를 코드베이스 내부에서 Git 기반으로 완전히 관리 가능해짐
- 컬렉션, 스펙, 목(Mock), 테스트 등 모든 Postman 리소스가 손쉬운 YAML 파일형태로 코드와 동일 경로 내에 저장‧버전관리 가능
- Postman 데스크톱 앱 및 클라우드 동기화 지원, 양방향 변경 관리와 실시간 동기화 제공
- git diff와 같은 도구를 통해 사양 및 테스트 변경 이력을 코드처럼 추적하고 검토 가능
- 모든 리소스가 실제 파일로 관리되어, Postman 에이전트 모드가 전체 API 라이프사이클을 자동으로 조율함
- 단순한 영어 설명만으로 코드를 분석하여 API 컬렉션 생성, 라우트 감지, 스펙 생성, 테스트 작성, 목 설정 등 자동화 실행
- AI 모델 선택‧적용 가능: Claude, GPT, 셀프호스팅 등 지원, MCP 서버 및 GitHub, Sentry, Linear 등 외부 툴과도 연동
- 동일 컬렉션과 테스트를 개발환경(로컬)과 CI 파이프라인(예: GitHub Actions)에서 재작성 없이 그대로 실행가능, 환경별 일관성 확보
- 사전 커밋 훅, GitHub 액션 등의 DevOps 통합이 자연스러워져 워크플로우가 간소화됨
- 영상 하단 설명에 Postman 링크 및 예시 GitHub 저장소 정보 제공

---

## 세부 요약 - 주제별 정리

### 기존 API 작업 흐름은 복잡하고 API 관리가 번거로웠음

- 기존에는 API 엔드포인트를 코드(IDE 또는 코딩 에이전트)에서 직접 생성해야 했음
- 컬렉션 및 테스트를 별도의 도구(예: Postman)에서 만들어야 하는 이중 작업 발생
- 이 테스트들을 CI(지속적 통합) 환경에서 작동하게 만드는 것도 별도로 해결해야 했음
- API 사양, 컬렉션, 코드 등이 서로 다른 위치에 존재해 버전 관리도 각각 따로 진행해야 했음
- 실제로 많은 개발자들이 사양, 테스트, 코드 파일을 한데 묶지 못해 워크플로우가 복잡해졌음

### Postman 업데이트로 전체 API 리소스를 Git 기반으로 통합 관리 가능해짐

- Postman은 최근 대규모 업데이트를 통해 'Git-native' 플랫폼으로 거듭남
- 이제 컬렉션, 스펙, 목, 테스트 등 모든 리소스를 YAML 파일 형태로 코드베이스 내부에 직접 저장 가능
- YAML 포맷으로 관리되어 유지보수가 매우 쉬움
- 모든 리소스를 Postman 데스크톱 앱에서 직접 수정 및 관리 가능
- 로컬 코드베이스와 동기화되는 Postman 클라우드 기능 지원

### 로컬 및 클라우드 간 양방향 동기화가 쉬워짐

- Postman에서 로컬의 모든 컬렉션과 엔드포인트 데이터를 확인하고 작업 가능
- 언제든지 Postman 클라우드 환경으로 스위치 가능하며, 실시간 양방향 동기화 지원
- 변경사항 발생 시 즉시 클라우드에도 반영, 작업자 간 협업이 원활해짐

### 변경 이력 추적과 검토가 코드처럼 쉬워짐 (git diff 활용 가능)

- 사양(specs)과 테스트 등 변경사항이 모두 코드와 동일하게 Git을 통해 버전 관리
- 실제로 테스트에 간단한 수정을 가하고 나서 에디터에서 git diff를 실행해보면 변경점이 명확히 드러남
- 모든 API 관련 리소스를 코드 변경과 동일하게 추적‧검토‧관리할 수 있음

### 모든 리소스가 파일로 관리되며 Postman 에이전트가 전체 라이프사이클을 자동 조율함

- Postman의 핵심 기능이 모든 리소스를 실제 파일(디스크 상 파일)로 관리하는 것
- Postman '에이전트 모드'가 파일 기반 구조를 바탕으로 전체 API 개발/운영 라이프사이클을 자동화
- 단순히 영어로 필요한 작업을 설명(예: "이 Flask 앱의 컬렉션 생성")하면 Postman이 아래 작업 수행:
  - 코드베이스 스캔, 라우트 자동 감지
  - API 사양(specs) 자동 생성
  - 테스트 코드 작성 및 목(mock) 서버 설정
  - 모든 변경을 동기화하여 관리

### 자동화된 작업 결과가 Git 커밋으로 리뷰 가능하게 표현됨

- 위 자동화 작업 결과가 Git 커밋 단위로 모두 남기 때문에, 코드 리뷰 과정에 자연스럽게 포함시킬 수 있음
- 리뷰 가능한 형태로 역사와 변경 내역이 장기적으로 남음

### 다양한 AI 모델과 외부 툴 연계 지원이 강화됨

- 컬렉션 생성 시 사용할 AI 모델을 Claude, GPT, 셀프호스트 등 중에 선택 가능
- MCP 서버도 공식적으로 지원
- GitHub, Sentry, Linear 등 이미 사용하는 개발 툴에서 직접 컨텍스트(문맥 정보) 끌어와 연동 가능

### 동일한 컬렉션과 테스트가 로컬과 CI 환경에서 완벽하게 일치하여 반복 작업이 사라짐

- 로컬에서 실행하는 컬렉션, 테스트가 CI(예: GitHub Actions) 환경에서도 그대로 재활용됨
- pre-commit hook, GitHub Actions 등 DevOps 파이프라인에 자연스럽게 통합
- 환경별로 테스트, 사양을 재작성하거나 수정할 필요 없다는 점이 강조됨

### Postman이 API 플랫폼으로서 한 차원 더 발전해 적극 추천 대상이 됨

- 전체적으로 Postman이 이번 업데이트로 API 개발환경을 근본적으로 현대화, 자동화하는 계기 마련
- 영상 제작자는 10년 간 Postman을 사용했으며, 이번 변화가 “획기적”이라고 평가함
- 자세한 활용 예시와 참고용 GitHub 레포지토리 링크는 영상 하단 설명란에 제공됨
