---
author: AI Makers Club
pubDatetime: 2025-06-28T08:20:35.641Z
title: "Serving Voice AI at Scale - Arjun Desai (Cartesia) & Rohit Talluri (AWS)"
slug: knH3fmGAteQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Cartisia의 공동 창업자 Arjun Desai와 AWS의 Rohit Talluri가 엔터프라이즈용 실시간 음성 AI의 구현, 과제, 진화에 대해 심층적으로 논의함 Cartis"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/knH3fmGAteQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Serving Voice AI at Scale — Arjun Desai (Cartesia) & Rohit Talluri (AWS)](https://www.youtube.com/watch?v=knH3fmGAteQ)  
**채널명:** AI Engineer

## *대규모로 음성 AI를 제공하는 방법 — Cartesia의 Arjun Desai와 AWS의 Rohit Talluri* 핵심 요약

- Cartisia의 공동 창업자 Arjun Desai와 AWS의 Rohit Talluri가 엔터프라이즈용 실시간 음성 AI의 구현, 과제, 진화에 대해 심층적으로 논의함
- Cartisia는 클라우드에 국한되지 않고, 모든 기기에 실시간 멀티모달 AI를 탑재할 수 있는 솔루션 구축에 주력함
- 음성 AI는 인터랙티브 모델 특성상 지연 시간(latency)이 극도로 중요하며, 고품질과 커스터마이징 가능성(controllability)이 필수임
- Cartisia는 Transformer 대신 State Space Model(SSM) 아키텍처를 개발하여 지연 시간은 최소화하고, 품질은 향상함 (inference에서 O(1) 시간복잡도 달성)
- 대표 모델 ‘Sonic 2’는 텍스트-음성 변환에서 세계에서 가장 빠른 성능(40ms 미만 latency)을 내며, 실제 현장 요구에 맞는 품질과 제어성을 제공함
- 음성 AI는 헬스케어, 고객지원, 게임(NPC 음성 등) 등 다양한 산업에 빠르게 확장 중임
- Cartisia는 아티스트, 성우와의 협업을 위해 ‘보이스 마켓플레이스’를 운영, 실제 성우의 개성과 목소리를 확장 및 라이선싱하도록 지원함
- 클라우드 중심 환경에서의 지연 문제 및 LM(대형 언어모델) 연동의 어려움을 극복하기 위해 로컬/에지 디바이스 기반 모델도 활발하게 개발 및 배포하고 있음
- AWS는 SageMaker Jumpstart, Amazon Bedrock 등 다양한 모델 가든을 통해 Cartisia와 같은 차세대 파운데이션 모델을 적극적으로 도입할 계획임
- 향후 음성 AI는 산업 전반의 표준 인터페이스로 자리잡을 것으로 전망하며, 실질적인 상호작용과 ‘리얼타임 월드 모델’로 발전할 것으로 예상됨

---

## 세부 요약 - 주제별 정리

### Cartisia는 모든 기기에서 실시간 멀티모달 AI 구현을 추구함

- Arjun Desai는 Cartisia의 핵심 미션이 "클라우드에만 한정되지 않은, 모든 장치에서 실시간 멀티모달 지능"이라고 소개함
- 기존의 대형 파운데이션 모델은 주로 클라우드에서 대기 상태(batch mode)로 동작하나, Cartisia는 실시간(리얼타임)의 필요성을 강조
- 텍스트처럼 입력-출력 지연이 허용되는 작업과 달리, 음성 및 비디오는 즉각적 반응성이 사용 경험의 핵심임
- Cartisia는 "기기, 장소, 환경에 관계없이 동작하는" 실시간 인터랙티브 AI 인프라 구현을 추구

### 음성 AI는 빠른 지연 시간과 높은 품질, 제어성을 모두 요구함

- Cartisia가 중요하게 여기는 3대 핵심 가치: ① 음성 자연스러운 품질(quality) ② 반응 속도(latency) ③ 커스터마이징 및 제어성(controllability)
- 1초의 대기만 있어도 사용자 경험이 크게 훼손됨을 실제 대화 예시로 설명
- 고객 지원 센터 등 음성 에이전트에서는 수 밀리초(ms) 단위 반응이 필수적임
- 다양한 억양(accent), 배경 소음, 중단(interruption) 등 실제 사용환경의 난관도 고려해야 함
- 기업마다 요구하는 화법이나 브랜드 고유 개성을 음성으로 구현하는 제어 가능성이 매우 중요함

### State Space Model(SSM) 아키텍처로 빠른 지연 시간과 고품질을 동시에 달성함

- 기존 Transformer 기반 모델은 입력 길이가 길어질수록 연산량과 메모리 사용량이 제곱으로 증가(Quadratic scaling)하여 실시간 응답에 한계
- Cartisia는 State Space Model 기반 아키텍처를 도입, 추론(inference) 단계에서 O(1) 시간복잡도 및 낮은 메모리 사용 실현
- SSM은 기존에는 반복신경망(RNN)과 유사하게 품질 저하 이슈가 있었으나, Cartisia가 품질 격차도 크게 줄임
- SSM 기반의 Cartisia 모델은 기존 트랜스포머 대비 더 빠르고, 오히려 품질까지 뛰어남을 강조

### 실제 고객들이 요구하는 가장 큰 문제는 latency와 제어성 부족임

- Cartisia의 대표 제품 ‘Sonic 2’는 음성 합성(TTS) 분야에서 초저지연(약 40ms latency)의 세계 최고 수준을 달성
- 대형 언어 모델(LM), 음성-텍스트(STT) 등 다양한 컴포넌트와 연결 시 전체 시스템의 지연 시간 대폭 단축이 고객에게 주요 가치로 작용
- ‘믿음직한 자연스러운 품질’ 외에도, 음성 클로닝, 억양 재현, 실제 전화음/잡음 등 현장감 있는 음성 생성의 정밀 제어가 중요한 경쟁력임
- 일부 사용자는 ‘전화 통화 특유의 잡음이나 신호음(“beep boop” 등)을 오히려 더 선호’하는 것으로 나타남

### 헬스케어, 고객센터, 게임(NPC 등) 등 다양한 산업에서 실제로 활용됨

- 음성 AI의 대표적 확산 분야로 헬스케어(예: 환자 상담, 진단), 고객 지원(콜센터 자동화), 실시간 게임 내 NPC 음성 등이 언급됨
- 실시간 반응성과 사용자 맞춤형 음성 에이전트 수요가 빠르게 증가 중임
- 아마존 AWS와 같은 대형 클라우드 사업자와의 파트너십을 통해 다양한 산업 시장 진입 촉진

### Cartisia는 성우의 가치를 보존·확장하는 보이스 마켓플레이스를 운영함

- ‘인간 내레이터/성우’가 사라지는 것이 음성 AI의 목표가 아님을 강조
- Cartisia 플랫폼 내에서 창작자(voice actor)가 자신의 목소리를 데이터로 제공·라이선싱함으로써 실질적으로 개성·지적재산을 확대
- 실제 성우와의 협업 및 참여를 통해 AI가 단순 대체가 아니라, 새로운 부가가치 생태계 형성에 힘씀
- 내레이션 등 다양한 창작/콘텐츠 분야에서도 음성 AI 이용 사례 만들고 있음

### 음성 AI의 데이터는 ‘양’과 ‘질’ 모두 중요하지만, 다양한 사용자 선호가 더 복합적으로 작용함

- 영상 데이터처럼 일부는 ‘풍부한 정보량/밀도(density)’가 더 중요하다고 주장하나, 음성에서는 다양한 preference 데이터(선호/맞춤 데이터)가 더욱 복잡하고 다양함
- 전통적인 거대 규모 사전학습 + 맞춤형 알라인먼트 데이터 미세조정 방식을 음성에도 적용
- 대중적 선호/특화된 사례/품질이 섞여 있어, 단순히 ‘데이터가 많으면 된다’라고 볼 수 없음

### 스피치-투-스피치(speech-to-speech) 모델은 가능성이 크나, 실제 상용화 단계는 아직 미흡함

- 현재 Amazon 등에서 speech-to-speech 모델을 선보였으나, 실제 프로덕션/엔터프라이즈 환경에서 쓸 수 있을 만큼 성숙하지 않다고 평가
- 복잡한 상호작용 제어와 지연시간 관리를 고려하면, orchestrated한 구조(각 모듈별 최적 제어)가 현재는 더 현실적임
- 향후 speech-to-speech가 발전하며, 엔터프라이즈에 적합한 품질과 제어 수준이 보장되어야 진정한 대중화가 가능함

### Cartisia는 클라우드-에지-로컬 등 다양한 환경에서 초저지연을 달성함

- 기존 클라우드 기반 환경에서는 네트워크 왕복 시간으로 인한 지연이 여전함(특히 LM 연동시 latency 문제 두드러짐)
- Cartisia의 SSM 기반 모델은 에지/로컬 환경에서 구동 시 클라우드 대비 5배 빠른 초저지연(5x faster)을 달성
- 대형 모델은 고성능 하드웨어/클라우드에 남기고, 다양한 실제 응답성 요구는 에지 기기에 분산 처리하여 융합적 아키텍처 지향

### AWS는 다양한 파운데이션 모델 선택지를 제공하고, Cartisia 같은 기업을 생태계에 적극 도입 중임

- AWS는 고객이 SageMaker Jumpstart, Amazon Bedrock 등 모델 가든을 통해 다양한 AI 모델을 용도/환경별로 선택하도록 플랫폼화함
- Cartisia와 같은 특화된 차세대 파운데이션 모델 사업자를 적극적으로 발굴하여 기존 모델이 미치지 못한 세부 산업군까지 지원할 계획
- AWS와 Cartisia의 파트너십을 통해 더 많은 실시간 음성 AI 사례가 확장되고 있음

### 미래의 음성 AI는 ‘상식적 표준’이 되고, 실시간 인터랙션과 월드 모델로 진화할 것임

- 2030년 정도에는 헬스케어, 지원, 게임 등 어느 분야에서든 음성 AI가 일상적으로 사용될 것으로 전망
- 음성 AI의 진화는 단순히 음성을 듣는 것에서 그치지 않고, ‘세계와의 상호작용 방식(월드 모델)’까지 확장될 것으로 내다봄
- 사용자와의 실질적 상호작용, 개인화된 지원(co-pilot), 그리고 현실 환경을 이해·보조하는 AI로 진화 예상
