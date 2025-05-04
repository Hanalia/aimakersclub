---
author: AI Makers Club
pubDatetime: 2025-05-04T23:44:56.091Z
title: "Building LinkedIn's GenAI Platform - Xiaofeng Wang"
slug: n9rjuBuShko
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: 링크드인은 2023년부터 GenAI(생성형 AI) 플랫폼 개발을 단계적으로 추진 초기 단순 프롬프트 기반 기사 작성 서비스부터 시작해 사용자 맞춤 Co-pilot, 멀티 에이전트 
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/n9rjuBuShko/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building LinkedIn's GenAI Platform — Xiaofeng Wang](https://www.youtube.com/watch?v=n9rjuBuShko)  
**채널명:** AI Engineer

## *링크드인의 GenAI 플랫폼 구축 과정* 핵심 요약

- 링크드인은 2023년부터 GenAI(생성형 AI) 플랫폼 개발을 단계적으로 추진
- 초기 단순 프롬프트 기반 기사 작성 서비스부터 시작해 사용자 맞춤 Co-pilot, 멀티 에이전트 시스템까지 발전
- Python 기반 SDK와 오케스트레이션, 프롬프트 관리, 대화·경험 메모리 인프라 등 핵심 컴포넌트 구축
- 에이전트 운영에 필요한 Skill Registry(스킬 레지스트리), 다양한 메모리 계층(작업/장기/집단) 체계 도입
- AI/ML, 운영, 책임 있는 AI 등 다양한 연계팀과 통합된 플랫폼 인터페이스 제공
- 자체 플랫폼 구축 필요성 강조: 기존 AI와 달리 GenAI 시스템은 최적화~서빙 경계가 사라지고 복합 시스템 특유의 요구 발생
- 성공적인 플랫폼 인력 구성 및 채용 전략, 기술적 교훈과 확장 방법 등 실질적 조언 공유

---

## 세부 요약 - 주제별 정리

### 링크드인의 GenAI 플랫폼은 단순 프롬프트 활용에서 맞춤형 멀티에이전트 시스템으로 진화함

- 2023년 초 AI 기반 기사 작성(collaborative articles) 서비스로 시범 시작
- ChatGPT(GPT-4) 활용, Java와 Python 이원화된 초기 기술 스택 사용
- 빠르게 한계 인식 후, 사용자 프로필/잡디스크립션 분석 및 맞춤 추천 제공하는 Co-pilot/Coach로 확장
- 최신에는 리크루터 업무 자동화(LinkedIn H assistant) 등을 위한 멀티에이전트 시스템(분산형) 도입

### 플랫폼 핵심은 오케스트레이션, 프롬프트 관리, 메모리, API-스킬화로 정제됨

- Python SDK 위에서 애플리케이션 조립 및 오케스트레이션 기능 제공
- 프롬프트 버전 관리/메타데이터화 등 프롬프트 소스 오브 트루스(system of truth) 구축
- 대화형 메모리 및 대규모 상호작용-이력(working/long-term/collective memory) 저장 확대
- API들의 스킬 레지스트리화로 에이전트가 외부툴과 쉽게 연동 가능

### 에이전트 시스템은 분산 처리, 리트라이, 트래픽 분산 등 복잡한 운영 시나리오를 반영함

- 대규모 분산 오케스트레이션 레이어로 에이전트 실행/조율 지원
- 예측 어려운 에이전트 동작을 위해 오퍼레이션/모니터링과 사후 분석 기능 자체 개발
- Telary 데이터 추적 및 분석 레이어로 에이전트 행동 및 최적화 지원

### 통합 플랫폼은 AI 엔지니어와 프로덕트 엔지니어 간 경계를 허물며 생산성을 높임

- 기존 AI는 모델 최적화와 서비스 운영이 분리지만, GenAI는 두 영역이 경계 없는 복합 시스템
- 개발자는 단일 인터페이스에서 모델, API, 툴, 인프라 통합 접근 가능
- SDK 내 파라미터 한 줄만 변경해도 오픈소스/사내 모델 전환 등 유연하게 인프라 전환

### 자체 플랫폼 개발의 전략적 필요성이, ‘복합 AI 시스템’ 특성과 함께 강조됨

- 시장 내 수많은 GenAI 벤더 솔루션에도 불구 자체 개발 필요성 존재
- 복합(Compound) AI 시스템의 정의: 여러 모델, 외부툴, 리트리버 구성요소가 상호작용하는 시스템으로, BERKELY AI 연구 결과 인용
- 사내 개발 플랫폼은 역할 간 기술 격차 해소·효율성/책임성 강화를 가능하게 함

### 인재 확보는 다양성과 잠재력 중심으로, 소프트웨어 엔지니어 역량을 핵심으로 본다

- 플랫폼 팀 이상적인 인재상: 인프라와 인터페이스 설계, AI/데이터 백그라운드, 신기술 학습 역량 모두 필요하지만 현실적으로 다양성이 더 중요
- 경험이나 학위보다는 성장 가능성, 강한 소프트웨어 개발 역량 우선 채용
- 풀스택, 데이터, AI 엔지니어, 주니어까지 다양한 배경 인재 혼합·협업이 성과로 연결

### 기술적 교훈으로 Python 선택, 단계적 확장, 메모리/프롬프트/스킬 관리의 중요성을 강조함

- 실무에서 Java vs Python 논쟁 끝에 Python으로 통합, 오픈소스·리서치 생태계와의 호환성/확장성에 이점
- 프롬프트(SOP) 버전 관리 체계, 운영 안정성 위한 메모리 설계, 손쉬운 개발자 경험과 API 스킬화 등 주요 컴포넌트 추천
- 초기엔 작은 라이브러리로 시작→인프라·메모리 확장→이미 익숙한 워크플로우에 맞춰 점진적 확산 전략 제안
