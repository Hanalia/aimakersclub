---
author: AI Makers Club
pubDatetime: 2025-06-27T23:46:25.590Z
title: "Why should anyone care about Evals? - Manu Goyal, Braintrust"
slug: jJ45Yz1lJao
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상의 발표자 마누 고얄(Manu Goyal)은 Braintrust에서 일하며 AI 평가(Evals) 플랫폼 개발을 주도하고 있음 발표는 자신의 어린 시절과 기술에 대한 실망, 그"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/jJ45Yz1lJao/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Why should anyone care about Evals? — Manu Goyal, Braintrust](https://www.youtube.com/watch?v=jJ45Yz1lJao)  
**채널명:** AI Engineer

## *왜 누구나 Evals에 관심을 가져야 하는가?* 핵심 요약

- 영상의 발표자 마누 고얄(Manu Goyal)은 Braintrust에서 일하며 AI 평가(Evals) 플랫폼 개발을 주도하고 있음
- 발표는 자신의 어린 시절과 기술에 대한 실망, 그리고 AI 소프트웨어 엔지니어로서의 동기로 시작함
- 자율주행차 업계에서의 경험을 통해, 단순 모델 성능 지표(예: 98%→99%) 만으로 실제 프로덕션 적용이 불가능함을 강조
- 진정한 실용성을 평가하기 위해서는 "Evals"로 실제 환경과 맥락을 반영한 평가가 반드시 필요함을 설명
- 유닛 테스트에 그치지 않고, 실제 제품 출시에 앞서 90%의 반복 실험을 가능케 하는 것이 Evals의 핵심 역할임
- 오프라인 평가 지표를 온라인 프로덕션 데이터에 적용할 때, 다음 실험에 가장 유용한 실제 데이터를 식별할 수 있음
- Kevin While, Gary Tan, Mike Kger, Greg Brockman 등 업계 유명 인사들도 Evals의 중요성을 강조한 점을 인용
- Braintrust 플랫폼에서는 평가뿐 아니라 프롬프트 실험, 데이터 로깅, 관찰성 강화 등 데이터 플라이휠(Data Flywheel) 구축을 지원함
- 발표를 요약하며, 업계 혁신과 성공의 핵심 열쇠는 "Evals"임을 강조함

## 세부 요약 - 주제별 정리

### 발표자는 어린 시절부터 기술이 성장하고 진화해야 한다고 믿었음을 고백함

- 발표 시작에 어릴 적 닌텐도 64 게임에 열중하던 본인의 사진을 보여줌
- 자세히 보면 아이라는 모습을 넘어, "규칙 기반 시스템의 한계"에 실망한 표정임을 유머러스하게 전함
- 발표자는 '기술은 반복적 시스템에 갇히는 것이 아니라, 진화하고 인간의 사고 파트너가 되어야 한다'고 강조
- 그래서 결국 AI 분야 소프트웨어 엔지니어의 길을 걷기로 결심했다고 밝힘

### 자율주행차 업계 경험을 통해 단순 모델 성능만으로 실제 출시는 불가능함을 학습함

- 자율주행차 개발팀에서 일하며, 하루 종일 모델 튜닝이나 아키텍처 변경, 손실 함수 조정에 매진함
- 하지만 단순히 이미지 분류 정확도가 98%에서 99%로 오른 것만으로 바로 실제 도로에 적용할 수 없다고 강조
- 중요한 것은 '모델이 실제 보행자를 피하는가', '교통상황을 잘 처리하는가', '법규를 지키는가' 등 실전 적합성임
- 이처럼 실제 문제에 제대로 대응하는지 평가하는 것이 반드시 필요함

### Evals는 단순 유닛 테스트가 아니라 실제 문제 해결을 위한 실험실과 같음을 설명함

- Evals(평가)는 단지 회귀(regression)를 찾거나 유닛 테스트만을 위한 도구가 아니라고 정의
- 실질적으로 좋은 평가 도구에 투자하는 것은 실험실(laboratory)를 구축하는 것이나 다름없음을 비유로 설명
- 프로덕션에 투입하기 전에 제품 반복 실험(product iteration)의 90%를 실험실에서 미리 진행할 수 있음
- 이로 인해 제품 출시를 훨씬 빠르고 자신 있게 할 수 있다고 함

### Evals가 실시간 데이터 활용 및 다음 개발 사이클을 촉진함을 강조함

- 오프라인 평가 지표를 온라인(프로덕션) 데이터에도 동일하게 적용하면, 실사용 데이터 중에서 다음 반복에 가장 중요한 예시를 얻을 수 있음
- 이와 같은 데이타 중심 시그널은 AI 개발과 개선에 중요한 역할을 하며, 끊임없는 사이클을 촉진함

### 업계 리더들이 모두 Evals의 중요성을 한목소리로 강조하고 있음을 인용함

- Kevin While, Gary Tan, Mike Kger, Greg Brockman 등 다양한 업계 유명 인사들의 이름을 소개
- 이들이 Evals의 "필수성"과 "가치"를 언급하며, 결코 과대포장된 유행이 아님을 피력
- 저명인사들의 일치된 의견을 통해 신뢰성과 중요성을 강조

### Braintrust는 평가에서 프롬프트 실험, 데이터 관찰 등 전체 AI 개발 사이클을 아우르는 플랫폼임을 설명함

- 발표자가 소속된 Braintrust는 단순 평가 툴이 아니라 전체 AI 개발 파이프라인을 지원하는 플랫폼임을 소개
- 프롬프트 수정, Playground에서의 실험, 데이터 로깅, 시스템 관찰 등 전체 과정을 연결
- 이러한 통합은 "데이터 플라이휠(data flywheel)" 구조로 모든 요소를 순환시키며, AI 개발과 혁신의 선순환 구조를 지향

### 발표자는 발표 내용의 최종 메시지로 Evals가 업계 혁신의 핵심임을 단언함

- "이 발표가 다소 내용이 많고 복잡했지만, 한 가지 메시지는 명확하다"며 마무리
- 업계 변혁과 성공에 있어 "Evals eval"이 열쇠임을 마지막으로 정리함

### 발표 마무리와 청중 초대 메시지로 강의가 끝남

- Braintrust 및 Evals 트랙(골든 게이트 볼룸 B) 참여도 독려
- ‘Woohoo’ 환호와 함께 발표를 마무리하며, 음악과 함께 종료

### 구체적 사례, 데이터, 인용을 통해 논증의 신뢰도를 높임

- 자율주행차 산업에서의 실제 사례를 통해 추상적 논의가 아님을 강조
- 업계 리더 인용, Braintrust의 구체적 기능 설명 등 실질적 신뢰 기반 구축

### 발표 전체가 AI 개발에서 평가 체계(Evals)의 중심적 가치와 적용 방식을 이해시키는데 집중됨

- 기술의 발전 방향성, 실제 적용의 어려움, 평가의 근본적 필요와 접근법 등 주요 논점을 빠짐없이 짚음
- Evals의 올바른 도입과 운영이 AI 산업 성공의 ‘지름길’임을 청중에게 설득력 있게 전달
