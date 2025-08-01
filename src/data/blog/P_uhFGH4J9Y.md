---
author: AI Makers Club
pubDatetime: 2025-07-05T23:45:13.647Z
title: "New York Times' Connections: A Case Study on NLP in Word Games - Shafik Quoraishee, NYT Games"
slug: P_uhFGH4J9Y
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 강연은 발표자 Shafik Quoraishee가 뉴욕타임스 게임즈팀 소속 게임 개발자로서 진행한 ‘Connections’ 게임에 대한 AI 실험을 다룸 본 연구는 내부 공식 연"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/P_uhFGH4J9Y/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [New York Times' Connections: A Case Study on NLP in Word Games — Shafik Quoraishee, NYT Games](https://www.youtube.com/watch?v=P_uhFGH4J9Y)  
**채널명:** AI Engineer

## *뉴욕타임스 커넥션스: 워드 게임에서의 자연어처리(NLP) 사례 연구* 핵심 요약

- 본 강연은 발표자 Shafik Quoraishee가 뉴욕타임스 게임즈팀 소속 게임 개발자로서 진행한 ‘Connections’ 게임에 대한 AI 실험을 다룸
- 본 연구는 내부 공식 연구가 아니며, 발표자가 직접 독립적으로 수행한 탐구적 실험임을 명확히 밝힘
- Connections 게임은 2023년 6월 베타 출시, 8월 정식 출시되었고, 출시 1년만에 Wordle에 이어 NYT에서 두 번째로 인기 있는 게임이 됨 (수억 회 플레이)
- 16개의 단어를 4개의 관련성 있는 그룹(각 4개 단어)으로 묶는 것이 주요 규칙이며, 각 단어는 하나의 그룹에만 속할 수 있음
- 게임의 난이도는 노란색(가장 쉬움)–초록색–파랑색–보라색(가장 어려움) 네 등급으로 분류되며, 보라색은 의도적으로 미끼(디코이)와 중의성이 강조되어 AI와 인간 모두에게 난관이 됨
- Connections는 AI의 추상적 추론 능력을 효과적으로 시험할 수 있는 ‘벤치마킹 툴’로 활용 가능함; 반복 테스트가 용이함
- 거대언어모델(LLM)들도 100% 문제 해결에는 실패하며, 시중에서 다양한 LLM 기반 벤치마크가 진행되어 왔으나 완벽과는 거리가 있음
- 단순한 ‘의미적 유사도’만으로는 문제 해결이 힘들며, 다차원적 관계 정렬(semantic alignment) 및 다차원 그래프 분석이 중요함을 강조
- 발표자는 그래프 신경망(GNN), 강화학습, 각종 의미론적 네트워크(WordNet, ConceptNet 등)를 활용해 커넥션스 퍼즐 자동 풀이 모델을 개발하고 실험함
- 기존 LLM은 인터넷 솔루션 복사 의혹, 블랙박스적 한계 등이 있으므로 구조적이고 투명한 Explainable AI 방법론이 필요함을 사례 중심으로 논증함

## 세부 요약 – 주제별 정리

### 뉴욕타임스 커넥션스 게임은 인간 제작 퍼즐과 인기 모바일 게임으로 자리잡음

- 커넥션스는 2023년 6월 베타, 8월 정식 출시된 NYT의 워드 퍼즐 게임임
- 담당 에디터 Waloo가 모든 퍼즐을 직접 제작하며, 게임 메커닉·프로그래밍 모두 인간 제작임을 강조
- 출시 1년 만에 Wordle에 이어 두 번째로 많이 플레이된 NYT 게임이 됨 (수억 회 플레이를 기록)
- 매일 새로운 16개 단어 퍼즐이 제공되며, 4개 단어씩 4개 그룹으로 묶어야 클리어 가능
- 각 단어는 오직 한 그룹만 속할 수 있으며, 4회까지 오답 허용
- 모바일 앱으로도 제공되어 손쉽게 접할 수 있음

### 난이도 체계와 의도적 미끼(디코이)는 인간·AI 모두에게 도전 과제를 제시함

- 난이도는 노란색(가장 쉬운 연결), 초록색(직관적이진 않으나 명확), 파랑색(관용구·상식·퀴즈 등 비직관적 주제), 보라색(중의성·미끼 강조) 네 등급
- 보라색 범주가 "퍼펙트 게임"의 최대 장벽이며, 의도된 중의성·디코이(오해 유발 요소)로 신중한 사고를 요구
- 이러한 난이도 구조는 AI의 추상적 분류 능력뿐 아니라 인간의 시스템1(직감)·시스템2(이성적 추론) 사고 모두를 압박

### Connections는 LLM 및 AI 벤치마킹 체계로서 중요한 실험대임을 증명함

- 모든 퍼즐의 입력 및 정답이 고정되어 있어, AI 테스트 반복성과 결과 비교 용이
- 다양한 LLM(챗GPT 모델 등)에서 실험 가능하나, 최신·고성능 모델이더라도 100% 정답률은 달성하지 못함
- 단순 의미 유사도 기반 풀이는 종종 오답을 냄
- LLM 훈련이 인터넷 퍼즐 정답에 노출되어 있을 가능성이 높아, 솔루션 자동화의 순수성/타당성 검증이 필요함

### 인간의 문제해결방식은 시스템1(직관)과 시스템2(이론적 추론)의 결합으로 이루어짐

- 시스템1(빠른 직관): 명확한 카테고리나 유사성이 있을 때 빠르게 관계 인지
- 시스템2(느린 심사숙고): 명확하지 않거나 헷갈릴 때 오랜 시간 논리적으로 관계 탐색
- 두 시스템의 결합이 최적의 전략이나, 각각의 한계(지나친 직관=실수, 지나친 추론=과도한 복잡성) 존재
- 인간 플레이어도 쉽게 실수하는 함수(카테고리 중복, 과투사 등)가 존재

### 완전 랜덤 전략의 경우 성공확률이 극히 낮음을 수학적으로 증명함

- 초기보드 상태에서 완전히 무작위로 시도할 때, 승률은 사실상 0%에 근접
- 만약 1개 카테고리(그룹)를 우연히 맞춘 후 남은 3개를 랜덤으로 고른다면 약 1/5,000~1/6,000 확률 존재
- 2개 맞췄을 때 남은 2개 그룹도 랜덤 시 약 1/35 (약 2.8%) 확률임
- 대부분의 유저가 3~4번째 카테고리에서 고전

### Connections 퍼즐은 그래프 컬러링 및 그래프 이론 관점에서 수학적으로 모델링될 수 있음

- 커넥션스 퍼즐의 16개 단어를 그래프의 노드로, 그룹별 연결 강도를 에지 가중치로 나타내는 '확장 그래프 컬러링' 문제로 해석 가능
- 각 그룹(4개 단어)는 같은 색상(카테고리)으로 칠해지는 그래프의 집합
- 에지는 단어쌍 간의 관련성의 강도로 측정
- 이 같은 수학적 모델링은 AI의 탐색 공간을 한정, 무의미한 완전탐색을 지양하고 효율적 전략 구현에 기여

### 단순 의미 유사도는 제한적이며, 다양한 의미·관계 척도의 조합이 필요함

- 의미기반 유사도(semantic similarity)가 높은 단어쌍만 묶는 단일 차원 접근으론 완전한 해결 불가능
- 카테고리는 직관적으로 보이나 실상은 다층적 언어관계(어형/연관/상위어/백과사전적/연상 등)로 이루어짐
- 예시: anagram, orthography(철자 유사), morphology(접미사 등), encyclopedic(같은 범주의 사물, 신문 등), associative(색상 등)
- 다의어, 중의어 등은 AI·인간 모두에게 혼동을 유발
- 단일 척도가 아닌 다양한 의미적 alignment metric(정렬 지표) 조합이 난이도와 풀이난항을 결정

### 관계 정렬(Alignment) 분석을 통해 퍼즐 난이도 및 문제 유형을 계량화 할 수 있음

- 퍼즐마다 그룹별/문제별 relational alignment(관계 정렬 점수) 계산 가능
- 쉬운 퍼즐(예: 70% solve rate)과 어려운 퍼즐(19% solve rate)에서 관계 점수의 명확한 분포 차이 확인
- 시간대별 점수분포를 그래프로 추적해 문제 유형별 경향을 파악 가능
- 단순화된 점수만으론 한계; 다차원적 alignment, 그래프 표현 필요

### 다차원 그래프 분석 및 분포 프레임워크로 퍼즐을 정량 분석함

- 개별 퍼즐, 또는 축적된 퍼즐셋의 정답 패턴을 복수의 의미론적 범주(Hyperonym, Morphology, Orthography 등)로 분류해 분포 추적 가능
- 시계열 상에서 각 범주의 출현 빈도(히스토그램) 및 경향성 분석 가능
- 다차원적 분석을 통해 AI나 인간 모두에게 어떤 유형의 퍼즐이 어떤 시점에 어려운지 파악

### 그래프 신경망(GNN)·강화학습 기반 다차원 네트워크 모델로 퍼즐 풀이 AI를 구현함

- 의미론적 관계망 구축을 위해 WordNet, ConceptNet, 각종 워드 임베딩 활용
- 구축된 의미 그래프에서 그래프 신경망(GNN), 특히 graph convolutional neural network 활용
- GNN에서 후보 서브그래프(부분해)를 산출하고, 각 edge/노드 가중치를 강화학습으로 최적화
- 전체 시스템은 에이전트 기반 아키텍처 + 그래프 기반 시스템으로 작동
- 3차원 및 다차원 하이퍼그래프 상에서 군집(clusters)간·내부 관계(에지 강도) 추적 및 시각화
- 실제 퍼즐(특히 난이도 높은 퍼즐)에서 위 방식을 적용시 별도의 LLM 사용 없이도 풀이는 일부 개선됨

### Explainable AI의 필요성을 강조하며, 기존 LLM 기반 퍼즐 해법의 투명성 문제를 지적함

- LLM 기반 해답은 종종 ‘블랙박스’적이며, 실제로 인터넷에서 정답 카피 가능성이 존재함
- Explainable AI 방식(구조적/단계적/투명한 모델링)만이 AI 실제 능력 평가와 진정한 문제 해결 역량 판별에 기여할 수 있음을 역설
- 발표자는 이러한 방법론을 확장, 향후 ArcGI 등의 외부 벤치마크와 연동 계획
- 향후 과제: 더 많은 퍼즐과 문제 유형에 적용해 실효성·일반화를 지속 실험할 계획
