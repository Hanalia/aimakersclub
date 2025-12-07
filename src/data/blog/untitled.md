---
author: AI Makers Club
pubDatetime: 2025-12-07T08:18:31.666Z
title: "I Forced Claude to Code for 24 Hours NONSTOP, Here's What Happened"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상에서는 Claude Opus 4.5에게 24시간 동안 코딩을 맡겨, 실제로 완전한 claw.ai 클론을 만드는 과정을 시연함 현재 구현된 기능의 완성도가 매우 높다고 언급하며,"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [I Forced Claude to Code for 24 Hours NONSTOP, Here's What Happened](https://www.youtube.com/shorts/wlvuRZW6sX4)  
**채널명:** Cole Medin

## *Claude에게 24시간 동안 쉬지 않고 코드를 짜도록 시켰더니 생긴 일* 핵심 요약

- 영상에서는 Claude Opus 4.5에게 24시간 동안 코딩을 맡겨, 실제로 완전한 claw.ai 클론을 만드는 과정을 시연함
- 현재 구현된 기능의 완성도가 매우 높다고 언급하며, 테스트의 후반부가 정확히 무엇을 검증하는지 모를 정도로 안정적임
- 생성된 대화 기록을 통해 Claude가 각 반복 단계에서 어떻게 검증(verification) 과정을 거쳤는지 확인 가능
- 마크다운 형식의 결과물 포맷이 뛰어나며, 다양한 HTML 페이지 생성과 코드 작성 및 실행이 가능함
- 테마, 기본 모델, 최대 토큰(max tokens) 슬라이더 등 다양한 사용자 설정(세팅) 옵션을 구현함
- 현 상태에서도 매우 다양한 기능이 포함된(so... featurerich) 어플리케이션을 자동으로 만들 수 있었음
- 앞으로 ‘human in the loop’ 기능(인간 검증 단계) 추가를 고려하고 있지만 현재 성능에도 크게 만족함
- 만약 추가적인 하루를 더 자동화한다면 거의 완벽한 애플리케이션이 될 수 있다고 평가함
- Claude Opus 4.5와 같은 LLM이 강력한 검증(harness 및 validation)과 반복(iteration) 자동화를 통해 상상 이상의 결과물을 만들어냄을 실감하게 함

---

## 세부 요약 - 주제별 정리

### Claude Opus 4.5를 24시간 연속 구동시켜 claw.ai 클론을 완성함을 확인함

- 실험자는 Claude Opus 4.5에게 24시간 동안 멈추지 않고 코드를 짜게 지시함
- Claude가 생성한 코드를 통해 claw.ai의 완전한 클론이 만들어졌다고 평가함
- "이 정도면 완전히 동작하는 클론이 이미 만들어진 것 같다"고 소감을 밝힘
- 테스트의 후반부가 어떤 목적을 갖는지 느껴지지 않을 정도로 구현이 뛰어남
- Claude가 독립적으로 전체 개발 과정을 수행함

### 대화 이력과 검증 루프를 통해 개발 전 과정을 투명하게 추적함

- Claude가 각 루프(반복)단계마다 어떤 내용을 검증했는지 생성된 과거 대화(conversation) 기록을 통해 확인 가능
- 개발 과정은 자동 검증 반복(validation loops)이 체계적으로 진행됨
- 이력 추적이 용이해 디버깅과 기능 검수에도 활용될 수 있음을 실감함

### 마크다운 포맷팅을 비롯한 문서화와 결과물의 품질이 매우 높음

- 결과물의 마크다운(markdown) 형식 처리 능력이 매우 우수하다고 언급
- 깔끔하고 가독성이 높은 결과 문서를 자동 생성함
- 코드, 결과, 설명 등이 잘 구조화되어 출력됨

### HTML 페이지 생성, 코드 실행 등 복잡한 프론트엔드 기능까지 자동 구현함

- 다양한 HTML 페이지를 자동으로 생성할 수 있음
- 코드 작성뿐 아니라 실제 코드 실행(executes code)까지 수행함
- 결과적으로 독립 실행형 어플리케이션의 상태에 도달할 수 있었음

### 사용자 맞춤 설정(세팅) 기능을 고도화하여 실제 배포 가능성을 높임

- 테마(theme) 변경, 기본(default) 모델 선택, 최대 토큰(max tokens) 슬라이더 등 다양한 옵션을 구현함
- UI 상에서 세부 항목의 동적 조절이 가능하도록 처리함
- 적용된 사용자 설정 세팅이 실제로 적용되는 것을 실시간 확인 가능함

### 현재 구현 수준이 매우 다양한 기능(feature-rich)을 이미 포함함

- "이것은 정말 기능이 너무 많다(featurerich)"고 평가
- 유저 인터페이스, 기능 조합, 설정, 자동화 등 여러 층위에서 완성도가 높음
- 실시간 수정과 개발 피드백 루프도 원활하게 구축되어 있음

### 인간 검증 단계(human in the loop) 추가만으로도 상용화 수준에 가까워짐

- 아직 인간 검증 절차(human in the loop)는 미구현이나, 추가 계획을 언급
- 현 상태에서도 의미 있는 수준의 자동화와 완성도를 확보함
- 향후 약간의 인간 개입만 도입해도 상용 가능 수준에 근접할 수 있음을 시사함

### 하루만 더 돌리면 완벽에 가까운 애플리케이션 탄생이 기대됨

- "하루만 더 이 상태로 돌리면 완전히 완벽한 애플리케이션이 될 것 같다"는 평을 남김
- 나머지 모든 기능과 버그 수정까지 Claude가 자체적으로 충족시킬 수 있을 것이라 전망함
- 지속적인 검증 루프와 기능 추가가 자동화되어 높은 확장성을 보임

### Claude Opus 4.5와 같은 LLM의 harness(검증+자동화) 구동이 개발 생산성을 극적으로 높임

- 허니스(harness) 구조로 여러 번의 검증과 반복(Validation & Iteration)이 자유롭게 진행됨
- 기계가 실제 애플리케이션 개발의 상당 부분을 스스로 해결할 수 있게 됨
- 이와 같은 자동화 환경에서 Claude의 역량이 극대화됐음을 강조함

### 인간이 개입하지 않고도 Claude가 다양한 기능을 실제로 구현함을 확인함

- 실험자는 개발 과정에 손을 대지 않고(“손 하나 댄 게 없음”) 주요 기능이 완성된 점에 놀라움을 표함
- 직접적인 코드 개입 없이도 어플리케이션 개발이 가능한 미래를 체감함
- 순수 AI 개발 자동화 실험으로서 상징적 의미가 있음
