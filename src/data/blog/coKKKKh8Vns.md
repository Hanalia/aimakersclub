---
author: AI Makers Club
pubDatetime: 2025-07-23T08:20:47.709Z
title: "How to run Evals at Scale: Thinking beyond Accuracy or Similarity - Muktesh Mishra, Adobe"
slug: coKKKKh8Vns
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 대규모 AI 평가(Eval) 구현 시 \"정확도나 유사성\"에만 집착하지 않고 더 넓은 관점에서 평가 전략을 설계해야 함을 강조함 Adobe의 Applied AI 개발 플랫"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/coKKKKh8Vns/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How to run Evals at Scale: Thinking beyond Accuracy or Similarity — Muktesh Mishra, Adobe](https://www.youtube.com/watch?v=coKKKKh8Vns)  
**채널명:** AI Engineer

## *정확도 또는 유사성을 넘어서 대규모로 평가(Eval)를 운영하는 방법* 핵심 요약

- 이 영상은 대규모 AI 평가(Eval) 구현 시 "정확도나 유사성"에만 집착하지 않고 더 넓은 관점에서 평가 전략을 설계해야 함을 강조함
- Adobe의 Applied AI 개발 플랫폼 리드 엔지니어 Muktesh Mishra가 직접 경험과 사례를 바탕으로 발표함
- LLM(대형 언어 모델) 기반의 AI 애플리케이션에서 출력의 비결정성, 주관적 평가 필요성, 프롬프트/모델 변경 시 품질 테스트 방식 등 실질적 난제를 지적함
- AI 애플리케이션 평가의 근간은 "Evals"로, 이는 테스트 케이스를 통해 각 시스템의 목표 달성도, 신뢰성, 개선 여부 등을 측정함
- 데이터 구성 및 다중 데이터셋 활용, 라벨링, 지속적 데이터셋 정제의 중요성 강조
- 평가 대상과 목표에 따라 테스트 방식(정확도, 유사성, 코드 생성은 기능적 정확성, 에이전트는 경로 평가 등)이 달라져야 함을 예시와 함께 설명
- 단일 데이터셋이나 단일 평가법으론 충분하지 않으며, 다양한 데이터와 경로에 따른 반복적 검증 필요
- 대규모 평가 운영을 위해 캐싱, 병렬 처리, 오케스트레이션, 결과 집계 및 반복 시행(측정-모니터링-분석-반복) 등을 제안
- 자동화와 휴먼 인더 루프(human-in-the-loop) 간의 속도와 정밀도 트레이드오프, 프로세스 중심 설계의 필요성도 논의
- 최근에는 "Eval Development"라는 개념이 대두되고 있으며, 테스트 주도 개발처럼 평가 주도 개발 패러다임이 중요해지고 있음을 시사

---

## 세부 요약 - 주제별 정리

### 발표자는 실제 AI 개발 경험과 다양한 오픈소스 활동을 토대로 대규모 평가(Eval)의 중요성과 배경을 설명함

- 발표자는 Adobe에서 Applied AI 개발 플랫폼 팀의 리드 엔지니어로 활동 중임
- CI/CD 디자인 패턴 책 공동저자이자 커뮤니티 주도 오픈소스 프로젝트 다수 참여
- 최근 AI 컨퍼런스에서 중요 화두인 "Evals"가 등장했음을 언급하며 발표 주제에 연결

### LLM 기반 AI 앱 개발에서 출력의 비결정성 및 주관적 평가 필요성이 실질적 문제임을 짚음

- LLM 기반 애플리케이션은 동일 입력값에도 매번 다른 결과를 보이는 "비결정성(nondeterministic)" 특성을 가짐
- 이러한 특성으로 인해 출력의 테스트, 품질 관리 및 주관적 평가의 어려움이 발생함
- 프롬프트와 모델 변경 시 "어떤 부분이 어떻게 깨질지", 테스트 케이스 운용상의 난점이 있음
- 성능과 정확도 측정을 위한 딱 맞는 툴/메트릭/모델 선정이 점점 더 복잡해지고 있음

### 애플리케이션 품질 및 신뢰성 유지를 위한 "자동화된 평가(Eval)"의 핵심적 역할을 강조함

- 평가(Evals)는 일종의 테스트 케이스로, 시스템 출력의 목표 달성 여부 및 안정성을 측정하는 가장 기본적 방식임
- 측정 없는 개발은 비즈니스에 다양한 부정적 영향을 미칠 수 있음
- 시스템 출력의 신뢰성과 책임성(accountability)을 높이기 위해 지속적인 평가와 개선이 필요함
- 고객 대상 애플리케이션은 특히 신뢰성, 투명성, 개선 주기와 같은 평가 프로세스의 확립이 중요함

### 효과적인 평가를 위해 데이터셋 구성과 지속적 개선이 가장 중요한 기반임이 반복 언급됨

- 평가를 시작하려면 "데이터에서 출발"해야 하며, 이를 위해 두 가지 접근법이 소개됨
    - 하나는 "소규모 시도"로, 신테틱 데이터(합성 데이터)부터 생성하여 점진적으로 검증 시작
    - 또 하나는 반복적 관측과 지속적 데이터셋 정제 과정
- 실환경 데이터 외에도 보조적인 합성 데이터 활용 가능
- 라벨링 기준과 커버리지 설정 등, 데이터셋은 다양한 플로우, 케이스, 사용 시나리오를 반영하도록 구축되어야 함
- "하나의 데이터셋"만으로 충분하지 않으니, 목표 플로우 단위로 별도 데이터셋을 구축하고 활용할 필요가 강조됨

### 평가 목표를 명확히 정의하고, 각 컴포넌트별 모듈화, 데이터 처리 최적화 등의 설계 원칙 제시

- "무엇을 평가할 것인가?"에 대한 질문에는 "모든 것"이 답이며, 그만큼 구체적 목표를 명확히 해야 함
- 목표, 검증 범위, 평가 방식 등을 미리 규정해 각 컴포넌트별로 평가 모듈을 설계해야 함
- 데이터셋은 플로우별로 다르게 준비되며, 애플리케이션 경로/흐름마다 별도 평가가 필요함
- 복수의 플로우 및 복잡한 경로에 대해 일관성 있게 검증하는 구조가 필요함

### 평가는 일관적이지 않으며, 애플리케이션 성격에 따라 맞춤형 평가 방식을 설계해야 함

- "보편적인 평가법은 없다"는 것을 강조하며, 각 애플리케이션 특성에 따라 평가 기준이 달라야 함
- 예시:
    - RAG(검색증강생성) 앱: 정확도, 유사성, 유용성(metric) 중심 평가
    - 코드 생성 모델: 생성된 코드의 기능적 정확성을 실제 코드베이스와 비교
    - Q&A: 정답률, 합리성, 정보 제공 여부 등 맞춤형 평가
    - 에이전트(Agent): 다양한 경로(trajectory)로 목표 도달 가능하므로, "경로 평가"가 주요 포인트
    - 다중 턴 시뮬레이션, 도구 호출(tool calls) 등 복합 행동에 대해선 올바른 경로 및 결과 검증 필요

### 대규모 평가 운영을 위해 병렬 실행, 오케스트레이션, 캐싱 등 인프라 전략이 필수적임을 설명함

- 중간 결과 캐싱과 회귀 테스트(regression), 평가 병렬화(parallelism), 오케스트레이션(Orchestration) 등 운영 효율화가 중요함
- 평가 결과는 집계(aggregation)하여 일괄적으로 검토
- "측정-모니터링-분석-반복" (measure, monitor, analyze, repeat) 주기로 운영하며, 최근 업계 주요 원칙임
- 평가 실행 빈도를 높이고, 그 결과를 지속적으로 개선해나가는 피드백 루프를 강조

### 평가의 측정 대상·목표에 따라 다양한 메트릭스 및 방법론을 적용함이 필요함을 실례로 설명함

- 사례별 맞춤 메트릭 및 평가법을 선택할 필요
- 일반적으로 "적합한 도구(tool)"보다 "올바른 프로세스(process)"를 구축하는 것이 더 중요하다고 주장
- 도구로 모든 케이스를 자동화할 수 없으니, 평가 프로세스 자체의 설계와 관리가 핵심임

### 자동화(evals automation)와 휴먼 인더 루프(human-in-the-loop) 간 트레이드오프를 균형 있게 조정해야 함

- "속도"와 "정확도(정밀도)" 사이의 누가 더 중요한지에 따라 자동화와 인간 개입의 조합을 조율
- 인간이 직접 관여해야 할 영역과, 테스트 자동화를 적용할 케이스의 구분 필요
- 상황과 목적에 맞는 적정 균형점을 설정해야 함

### "평가 주도 개발(Eval Development)" 패러다임의 부상과 실천적 메시지로 마무리함

- 최근 "Eval Development"라는 개념이 소프트웨어의 "테스트 주도 개발(TDD)"과 같은 관점에서 대두됨
- 즉, 평가 기준을 먼저 정의하고, 다양한 유즈케이스(Positive/Negative both)에 대응하는 케이스를 만들고, 이를 반복적으로 개선
- 데이터와 평가 루프의 설계·운용 중요성을 마지막까지 반복 강조

### 발표 마지막에 직접 소통을 위한 안내와 함께 전체 요지 및 실행 포인트를 다시 정리함

- AI 평가(Evals)는 AI 애플리케이션 개발의 가장 근본적이고 중요한 부분임을 거듭 주장
- 올바른 데이터 구축, 반복적 측정·분석·개선 과정 실행, 평가 방법론의 균형적 적용의 중요성 재확인
- 궁금한 사항은 발표자와 연락 가능하다는 안내와 함께 발표를 마침
