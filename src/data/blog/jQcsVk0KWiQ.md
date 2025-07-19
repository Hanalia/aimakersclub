---
author: AI Makers Club
pubDatetime: 2025-07-19T23:46:05.538Z
title: "A Taxonomy for Next-gen Reasoning - Nathan Lambert, Allen Institute (AI2) & Interconnects.ai"
slug: jQcsVk0KWiQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 발표는 최근 6개월간의 강화학습(RL)과 검증 가능한 보상(Verifiable Rewards) 기반 추론 모델 연구를 되돌아보고, 차세대 언어모델의 진화 방향과 새로운 분류 체"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/jQcsVk0KWiQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [A Taxonomy for Next-gen Reasoning — Nathan Lambert, Allen Institute (AI2) & Interconnects.ai](https://www.youtube.com/watch?v=jQcsVk0KWiQ)  
**채널명:** AI Engineer

## *차세대 추론 모델 분류 체계: Nathan Lambert(AI2, Interconnects.ai) 발표* 핵심 요약

- 본 발표는 최근 6개월간의 강화학습(RL)과 검증 가능한 보상(Verifiable Rewards) 기반 추론 모델 연구를 되돌아보고, 차세대 언어모델의 진화 방향과 새로운 분류 체계(taxonomy)를 제안함
- AI의 성능 향상은 단순한 벤치마크 점수 상승에서 벗어나 실질적인 언어모델 응용/제품으로 확장되고 있음
- 최근 등장한 OpenAI 03, DeepSeek, Quen 등은 수학·코드 등 고난도 스킬을 넘어, 도구(tool) 활용과 더 정교한 reasoning에서 큰 진전을 이룸
- 발표자는 ‘스킬’, ‘칼리브레이션’, ‘전략’, ‘추상화’의 네 가지 측면에서 추론 및 계획 능력 향상이 필요함을 강조
- RL 및 post-training(사후학습)에서의 투자/계산량 증가가 실제로 성능 개선에 얼마나 중요한지, DeepSeek, OpenAI 등 모델 사례와 수치(예: post-training 비중 증가)로 구체 설명
- ‘계획(Planning)’은 아직 언어모델 내재화가 부족하며, 현장에서는 프롬프트 설계 등 임시방편적 접근이 많음
- 모델의 ‘과도한 추론(overthinking)’ 문제로 인해 불필요한 토큰 소모, 응답 지연, 비용 증가 등의 문제 발생
- 병렬 연산(parallel compute), 도구 활용, 맥락/메모리 관리 등 고차원적 ‘계획’ 능력이 앞으로의 중요 과제로 부상함
- 데이터 수집, 난이도 필터링, 안정적 RL 인프라 등 실제 연구 플랜 세부 단계와 이에 지배적인 데이터·인프라의 중요성 강조
- RL 및 post-training이 ‘사전학습(pre-training)’과 동등할 만큼 중요해졌으며, DeepSeek와 OpenAI 사례를 통해 이를 입증

---

## 세부 요약 - 주제별 정리

### 현재 언어모델 연구의 성숙과 ‘새로운 방향성’ 모색이 중요해짐

- 최근 AI 커뮤니티에서 대부분의 연구자들이 추론(reasong) 모델의 기본 원리와 RL 트레이닝을 숙지한 상황임
- 단순히 학습용 토큰(scale) 증가, 벤치마크 점수 향상 외에 실제 모델이 어디로 나아가야 할지, 앞으로의 큰 방향성(skaing where the puck is going)이 중요 화두로 부상
- OpenAI, DeepSeek 등의 내부 연구 진행상황은 점차 외부에 신호가 덜 노출되고 있음

### 추론 중심 언어모델이 실질 응용 분야를 빠르게 확장하고 있음

- 03(모델명)을 활용해 검색어(coastrunners 등)를 직접 다운로드 링크로 안내받는 등 새로운 ‘추론-강화’ 기반 응용이 출현
- Deep Research 사례: 웹사이트 내 오타 찾기, 특정 콘텐츠 내 제한적 분석 등 창의적 응용 가능
- Cloud Code(클라우드 코드): 개발자가 아닌 사용자도 기업 API 키로 편리하게 장난감처럼 사용할 수 있음
- codecs, 완전 자율에이전트 등 복잡도 높은 응용이 등장 중이나, 아직 일부 인프라(예: GPU, 인터넷 연결 등)는 한계 존재
- 향후 6개월 내, 이러한 추론/도구 응용이 일상적 사용 도구로 자리잡을 것이라고 전망

### 성능 그래프와 벤치마크: 01~03모델류를 통해 ‘추론 방식’이 파급력을 입증함

- GPT-4.0 이후 모델들의 벤치마크 성능이 포화점(saturation) 다다름
- 01/03 등 새로운 세대의 모델(DeepSeek, Quen 등)은 전통적 퍼포먼스 곡선의 한계를 밀어내는 추론 방식을 도입
- y축에 모델별 과업수행 가능 시간(시간축)이 새롭게 논의됨 → 향후 더 빨라지며 새로운 이정표 마련
- AI 발전은 단순 자체적/자연스러운 연장선이 아니며, 연구자들의 계획-훈련 설계 등 '인간적 노력'이 필수임을 강조

### 차세대 추론 모델을 위한 4가지 분류 체계(스킬·캘리브레이션·전략·추상화)가 필요함

- 1) **스킬**: 수학, 코딩 등 기본 지식 문제 풀이능력; inference time scaling 등으로 이미 크게 진전됨
- 2) **칼리브레이션(Calibration)**: 문제 난이도에 따라 합리적 답변 길이(토큰)를 조절하는 센스; 오버싱킹(Overthinking) 방지
- 3) **전략(Strategy)**: 장기적·올바른 실행 경로 설계 능력; 언어모델이 계획 수정, 백트래킹 등 유연하게 수행해야함
- 4) **추상화(Abstraction)**: 문제를 합리적 하위과업(subtask)으로 분해·배분하는 능력; ‘트랙터블’한 계획 구성 필요
- 이 4대 요소들이 종합적으로 모델의 실질적 성장과 더 복잡한 과업 해결력으로 직결됨

### 기존 RL[강화학습] 기반 언어모델의 한계와 multi-turn, 도구 통합의 복잡성 증가

- 기존 RL+검증가능 보상 구조는 단일 턴(single turn) 생성→피드백→가중치 업데이트의 단순한 구조
- 실제 애플리케이션에서 multi-turn(다중 턴) 상호작용과 도구/tool 연동이 요구되어 점점 구조가 복잡해짐
- 여전히 기본 구조는 ‘프롬프트-생성-피드백-업데이트’이나, 다양한 상황에서 추가 설계 필요

### 최신 벤치마크·모델 성능 개선의 핵심 원인이 ‘새 training 유형 도입’에 있음

- 01/03 등 최근 모델들은 reasoning 기반 새로운 훈련(예: 강화학습, reasoning traces 도입)으로 대폭 성능 개선
- Frontier, DeepSeek, Quen 등은 특별히 도구(tool) 활용 능력이 강화됨; 03은 툴+리즌닝 결합 방식이 크게 주목받음
- 저수준 reasoning ‘스킬’ 세트가 지속적으로 확장 중; 추상화/전략/도구사용 등 고차원 스킬의 측정 방법은 아직 논의 단계

### 과도한 ‘추론 노력’(Overthinking) 문제: 토큰 소비와 사용자 경험의 심각한 부담

- 단순 계산 문제(예: 2+3)도 수백~천 개 토큰을 소비하는 사례 빈번
- reasoning 기반 모델은 instruction 모델 대비 10~100배의 토큰 소모가 발생할 수 있음
- 이로 인해 인프라 부하, 응답지연, 비용 급증(수 달러~수분 대기), 사용 이탈 등 실제적 문제 초래
- API, 사용자 인터페이스(예: reasoning-effort selector), 모델 전환 등 임시방편도 늘고 있으나 근본적 해결책 요구됨

### 기획·계획(Planning)능력은 아직 모델 내재화가 부족하여 주로 ‘프롬프트 설계’에 의존하고 있음

- Deep Research, Cloud Code 등에서 프롬프트 기반 ‘계획’ 기능 유도
- 모델 스스로 유의미한 계획을 세우는 능력 부족; 초기 응답에서 즉시 계산·실행에 돌입(예시: 수학문제 시작부터 다항식 전개)
- 장기적 문제·고난도 응용에서 이를 외부(사용자/개발자)가 아니라 모델이 원천적으로 수행하게 만드는 방향이 과제로 부상

### 복잡한 응용에서는 메모리/맥락 관리, 병렬 연산 등 고차원적 계획 수립이 중요하며, ‘병렬 컴퓨트’가 성장동력임

- Deep Research, Codeex 등 구현에서 메모리 압축(Cloud Code), 효율적 맥락사용 등이 실전 과제로 등장
- 사용자들은 여러 세션(예: 10개 클라우드 코드 인스턴스)을 병렬로 띄우나, 모델 자체가 능동적으로 병렬처리 계획 설정할 필요 있음
- 병렬컴퓨트는 RL 강화를 촉진, 더 완성도 있는 답변·탐색 옵션(탐색+활용)을 제공하는데 핵심적 역할 담당

### 새로운 스킬·계획 능력 부여를 위한 데이터, 파이프라인, 검증, 안정 인프라의 실제적 연구단계 정리

- 검증된 다양한 문제(정답 포함) 데이터셋 확보가 1단계; 주로 수학/코드 문제 활용
- 기존 연구들은 베이스모델 난이도에 따라 질문 필터링(매우 쉬운/어려운 문제 제외) 해 잡음과 연산낭비 방지
- 핵심은 안정적 강화학습 러닝·인프라 유지; 데이터 품질과 인프라가 성능 개선 지배
- 추가적인 퍼포먼스 향상을 위해선 overong filtering, clipping, ref 모델 리셋 등 디테일한 논문기법 활용 가능
- 전체 과정에서 post-training이 차지하는 연산(컴퓨팅) 비율의 폭증이 관찰됨

### RL 및 post-training 투자량이 기존 사전학습 못지않게 급증, DeepSeek·OpenAI의 구체적 수치로 증명됨

- OpenAI 01: post-training 비중 1%; OpenAI 03: 10배(10%)로 증가
- DeepSeek V3: post-training이 pre-training 대비 0.18%(V3 기준); R1에서는 10~20% 추정(서버 트윗, GPU 주차 추정치)
- 사후학습 인프라의 효율, RL코드, 학습 방식의 진화가 전체 성능에 매우 큰 영향을 미치며, pre-training과 동등한 중요성 확보

### 향후 전망: RL/계획/추상화/병렬계산 등 ‘진짜’ 모델 개선은 인간식 데이터/알고리즘 개발에 달려 있음

- Frontier Labs 등에서 장기계획 기반 실제 문제 활용도 증가 추세
- 계획(Planning) 능력 강화, 다양한 task decomposition, 메타추론, 병렬연산 등의 도입이 앞으로의 AI 실질 진화의 핵심
- RL, continual learning 등 장기학습 패러다임도 병행 발전하며, post-training 기반 대형모델 개발 트렌드는 계속될 전망
