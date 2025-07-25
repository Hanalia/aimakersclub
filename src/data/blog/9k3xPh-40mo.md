---
author: AI Makers Club
pubDatetime: 2025-07-25T08:19:23.674Z
title: "Latent Space Paper Club: AIEWF Special Edition (Test of Time, DeepSeek R1/V3) - VIbhu Sapra"
slug: 9k3xPh-40mo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 'Latent Space Paper Club'의 연차 리뷰로 시작하여, 지난 1년 반 동안 매주 진행된 논문 클럽의 성장과 성과를 소개함. 매주 수요일 정오에 약 100"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/9k3xPh-40mo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Latent Space Paper Club: AIEWF Special Edition (Test of Time, DeepSeek R1/V3) — VIbhu Sapra](https://www.youtube.com/watch?v=9k3xPh-40mo)  
**채널명:** AI Engineer

## *Latent Space Paper Club: AI 연구의 흐름과 DeepSeek R1/V3의 발전* 핵심 요약

- 본 영상은 'Latent Space Paper Club'의 연차 리뷰로 시작하여, 지난 1년 반 동안 매주 진행된 논문 클럽의 성장과 성과를 소개함. 매주 수요일 정오에 약 100명이 참석하며, Nvidia, Meta, Amazon 등 주요 기업의 저자들이 참여해 1시간 동안 논문을 직접 발표하고 Q&A를 진행.
- 화제의 논문 발표 세션은 DeepSeek V3(라이브 300명 참석 등) 등으로 큰 반향을 일으키며, 오픈소스 AI 연구 커뮤니티의 교류와 학습의 장을 제공.
- 새로운 ‘Test of Time Paper Club’(V2) 런칭을 알리며, AI 엔지니어가 반드시 알아야 할 핵심 논문과 개념들을 커리큘럼 기반으로 6개월간(7월~12월) 집중적으로 다룰 예정. 매주 2~4개의 논문을 발표, 총 50~100개의 논문 및 토픽 커버 목표.
- 주요 커리큘럼 분야는 딥러닝 기초, LLM의 기반 기술, 프리트레인/포스트트레인/스케일링 법칙/디스틸레이션, 생성형 모델(Clip, Diffusion 등), 파인튜닝, 음성(Speech), 최적화, 평가 트랙 및 실질적 AI Engineer의 역량 강화.
- DeepSeek R1(2024년 5월 28일자 업데이트)은 단순한 소규모 업데이트가 아니라, 추론(Reasoning) 능력 및 코드/수학 문제 해결 성능에서 대폭 향상됨. AIM 2024 벤치마크 점수가 70%에서 87.5%로 약 18% 상승, OpenAI 03 및 Gemini 2.5 수준으로 도달.
- DeepSeek V3 모델은 월등한 RL(강화학습) 기반 포스트트레이닝으로 평균 추론 토큰 수를 기존 12,000에서 25,000으로 2배 가까이 늘림. 이는 모델이 더 길게, 더 깊이 사고할 수 있음을 의미.
- 새로운 디스틸레이션을 통해 DeepSeek에서 Quen 38B를 기반으로 한 8B 파라미터 모델이, 상위 235B ‘thinking’ 모델과 맞먹는 성능에 도달함(논리학습·체인오브쏘트 distillation의 효율성 확인).
- DeepSeek R1/V3의 훈련 방법론(4단계: SFT, RL, 리젝션 샘플링, RL 반복)과, RL이 마치 인간처럼 ‘aha moment(통찰의 순간)’를 만들어낸다는 점이 핵심 결과로 부각.
- DeepSeek 모델은 오픈소스 MIT 라이선스로 공개되어 있으며, distillation 및 RL 기반 추론 강화가 소형 모델에도 효과적임을 실증.
- 영상은 앞으로의 논문클럽 커리큘럼 참여 안내, AI 연구의 오픈 커뮤니티 정신, DeepSeek 진화의 의미와 미래 과제까지 언급하며 마무리됨.

---

## 세부 요약 - 주제별 정리

### 지난 1년 반의 논문클럽이 오픈AI 연구 커뮤니티의 실질적 네트워크로 성장함

- Latent Space 논문클럽은 1년 반 동안 한 번도 거르지 않고 매주 수요일 정오마다 개최됨.
- Nvidia, Meta, Amazon 등 다양한 기관의 저자들이 직접 논문을 발표, Q&A, 토론 세션을 제공.
- 평균 100명, 인기 논문(DeepSeek 등)은 300명 이상이 실시간 참여.
- 모두 자원봉사로 운영, 참가자 및 저자가 자연스럽게 네트워킹하며 성장.
- 발표 후 피드백 세션을 통해 연구자와 실무자 간 인사이트 공유.
- 유튜브에 세션 영상이 업로드되어 누구나 열람 가능.
- AI Engineer 커뮤니티가 논문 학습 및 정보 공유의 중심 허브로 기능하기 시작.

### 새로운 ‘Test of Time Paper Club’은 AI 기반 논문 공부의 커리큘럼 중심 모델로 도입됨

- 기존 논문클럽(V1)은 최신 논문을 주간 단위로 다루지만, 새로운 V2(=Test of Time)는 커리큘럼 중심으로 전환.
- 대상: AI 엔지니어가 반드시 숙지해야 하는 변하지 않는 ‘핵심 논문’과 개념(Attention, Sequential Text Generation, Optimizer, 코드 추론 등).
- 2024년 7월~12월 동안 24주간 총 50~100편 논문 및 개념을 주제별로 체계적 발표 예정.
- 구조: 발표(30분~1시간, 2~4개 논문), 질의응답, 심층 토론 세션.
- 주차별 주제 다양화: Speech(Whisper, STT/TTS), 이미지 생성(CLIP, StableDiffusion 등), 동영상, LLM, RL, 스케일링 법칙, 디스틸레이션, 평가 등.
- 샌프란시스코 오프라인 섹션과 온라인(Zoom) 병행, 누구나 참여 가능(Discord 통해 자원 발표자, 토픽 추천, 질문 제안 접수).
- 기초부터 핵심 차별화 논문까지 AI Engineer의 필수 도구/지식 함양 목표.
- 커리큘럼과 토픽은 참가자와 상시 논의 및 수정 가능(간단한 Google Form 통해 추천).

### DeepSeek R1/V3의 2024년 5월 업데이트는 기존과 차원이 다른 성능 도약을 이룸

- DeepSeek에서 ‘V2’라는 이름 대신 기존 네이밍을 유지했으나, 실제로는 큰 업데이트.
- 포스트트레이닝 강화(RL 세션 등)로 전체 논리능력 및 코딩·수학 문제 풀기 경쟁력이 대폭 상승.
- AIM 2024 점수가 70% → 87.5%로 17.5% 상승(특히 reasoning benchmark).
- OpenAI 03, Gemini 2.5, Claude 3 등 상위 모델과 동등 수준.
- 모델 구분: DeepSeek R1(가장 최근의 reasoning 특화 대형모델), Quen 3 8B(디스틸레이션 소형 모델).
- Simon Willis의 Pelican Bench 등 외부 벤치마크에서도 상위권 기록.

### RL(강화학습) 활용한 추론 파이프라인이 DeepSeek ‘Thinking model’의 키임이 입증됨

- "Test time scaling"이란, 모델이 추론(inference) 단계에서 더 많은 계산 자원(토큰)을 쓰며 깊이 있는 사고를 하게 하는 방식.
- Chinchilla scaling에서 시작, 기존에는 훈련 데이터나 파라미터 수만 늘렸으나 한계 봉착(수십~수백억 달러 투자와 실익 차이).
- DeepSeek은 RL 기반 reasoning에 집중(지도데이터 없는 pure RL, self-evolution).
- 기존 12,000 reasoning token → 25,000 이상으로 ‘reasoning 시간’ 2배 늘림.
- RL 기반 self-evolution 과정에서 chain of thought, reflection(자기 재귀적 사고), spontaneous 'aha moment' 등 고차원 사고 패턴 발현.
- 코드·수학·논리 문제에서 verifiable output을 활용한 RL 보상 구조 적용.

### 4단계(콜드스타트 SFT→RL→리젝션 샘플링→최종 RL)로 DeepSeek R1이 실용적 AI 어시스턴트로 완성됨

- 1단계: SFT(Supervised Fine Tuning)로 초기 대화 능력 및 체인오브쏘트 예시 학습(수천개 휴먼 어노테이션 포함).
- 2단계: RL을 코드, 수학처럼 정답 검증 가능 문제에 적용해 진짜 추론 능력 강화.
- 3단계: 리젝션 샘플링(800K 샘플, 이 중 600K reasoning, 200K general chat)으로 불량 답변 걸러내고 우수답변 강화.
- 4단계: 최종 RLHF로 Helpful/Harmless/Reasoning Chat 모델로 마무리(일반 대화·복잡한 문제 모두 강점).
- 이 과정에서 ‘aha moment(모델이 스스로 문제 풀이 전략을 발견)’가 탄생.

### DeepSeek 디스틸레이션은 소형 언어모델에서도 10배 파라미터 대형모델의 reasoning 성능을 도달케 함

- 최신 DeepSeek R1(V3 reasoning)에서 추출한 체인오브쏘트 트레이스(SFT 방식)로 Quen 38B 등 소형 모델 디스틸레이션.
- Quen 3 8B 모델이 상위 235B ‘thinking’ 모델(Quen 3 235B, 20B active thinking)과 맞먹는 성능 기록(예: 수치적 reasoning, 체인오브쏘트).
- 소형 모델에서 순수 RL만 적용하면 성능 저하, 반드시 SFT 콜드스타트 후 distillation 필요.
- Distillation이 RL보다 작은 모델에는 더 효과적임을 수치로 보여줌.

### Chain-of-thought(사고의 흐름) 기반 학습은 모델 내 ‘aha moment(통찰의 순간)’와 추가적 사고 길이를 낳음

- DeepSeek R1은 단계별 추론(think tags 포함)을 이용, 자가 반성(reflection) 및 여러 설계적 대안을 탐색.
- 예시: 복잡한 수학 문제 해결 과정에서 모델이 스스로 중간에 ‘잠깐, 다른 방식이 있다’고 깨닫고 반전 전략 적용(논문 내 실제 예시 제공).
- RL(Reward incentives) 기반으로 사고의 깊이와 창의성이 자연스럽게 도출됨을 실증.

### 오픈소스 공개와 MIT 라이선스는 AI 연구 및 프랙티컬 응용 확산의 촉진제로 작용

- DeepSeek R1 및 디스틸레이션 시리즈는 전부 오픈소스, MIT 라이선스 하에 공개.
- 추론 API(DeepSeek API)는 초기에 빨랐으나, 서비스 신뢰성 문제로 실사용엔 한계 있음.
- 실제 API 시장에서는 OpenRouter 기준 DeepSeek가 약 10% 점유. 호스팅·배포는 적극적.
- HuggingFace에도 구현체 등록, Bespoke Labs 등 다수 커뮤니티 벤치마킹/재현 시도 확인.

### RL 기반 reasoning은 대형 프라이빗 모델과 오픈소스 모델 모두에서 소형화/효율화 움직임을 견인함

- 오픈소스 영역에서도 RL+Distillation 기반 reasoning 모델 양산이 급진전.
- DeepSeek – Quen 시리즈, Microsoft의 54 미니 Reasoning, Llama’s OpenScaling Law, Gemini Thinking 등과 같은 도전적 결과들 다수 등장.
- RL 전용 설계와 chain-of-thought 데이터 활용이 캐주얼 성능 향상에 그치지 않고, 체계적 scaling/소형화까지 이끎.

### 벤치마크와 ‘이름 짓기 문제’, 향후 과제 및 오픈 연구 문화의 중요성이 강조됨

- 업계의 벤치마크 툴(Pelican Bench 등) 및 명칭 혼란(OpenAI 03/04, DeepSeek V3/R1 등)이 논란거리.
- 공개 벤치마크로 인한 모델 성능 ‘고정’의 문제, 과적합 논의도 제기됨(일반 성능은 여전히 우수).
- 각 연구팀, 오픈 커뮤니티(Discord, Google Form, Zoom 등) 중심의 지속적인 토론·피드백 독려.
- DeepSeek 등 RL 기반 reasoning 실험/성능 개방이 전체 오픈AI 연구 실무자의 참여 확대 유도.

### 논문클럽의 새 커리큘럼과 오픈 커뮤니티 참여로 AI 연구 저변을 확장함

- 새로운 논문클럽(Test of Time/2025 Top Papers) 커리큘럼 안내, Discord·Google Form을 통한 자발적 추천/자원발표자 신청 독려.
- 매주 2~4편, 6개월간 주제별 심층 발표·토론 확대.
- 실질적으로 AI 엔지니어가 ‘최신+기초’까지 한꺼번에 섭렵할 수 있는 장으로 방향 전환.
- 각 분야별 논문/저자 초빙 계획, AI 연구의 오픈/실천적 커뮤니티 가치 재강조.

### DeepSeek 모델 사례는 reasoning의 새로운 차원(추론 길이, deep distillation, RL self-evolution) 가능성을 증명함

- 기존 다음 토큰 예측 위주의 scaling 한계를, 추론(access) scaling(RL+체인오브쏘트+리젝션 샘플링)으로 돌파.
- 성능 지표: DeepSeek R1(5월 28일 버전)은 OpenAI 03/Gemini 2.5와 동급, 소형 8B도 235B reasoning과 대등.
- 모델 성능 차트, 실제 예시 데이터, 아키텍처 설계까지 세부적으로 리뷰.
- 최종 결론: RL과 distillation의 결합, 오픈소스 공개, 커뮤니티 기반 논문 연구의 시너지로 AI 추론(Reasoning) 역량이 대도약.
