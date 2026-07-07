---
author: AI Makers Club
pubDatetime: 2026-07-07T23:46:19.219Z
title: "How we taught agents to use good retrieval - Hanna Lichtenberg, Mixedbread AI"
slug: 1IdzkRVmWAA
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상의 핵심 주제는 대형 언어 모델(LLM)의 추론 능력의 비약적 성장은 매우 빠르게 일어나고 있지만, 실제로 필요한 정보를 검색하는 ‘검색 및 조회(Retrieval)’ 도구"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/1IdzkRVmWAA/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How we taught agents to use good retrieval - Hanna Lichtenberg, Mixedbread AI](https://www.youtube.com/watch?v=1IdzkRVmWAA)  
**채널명:** AI Engineer

## *우리는 어떻게 에이전트에게 좋은 검색을 가르쳤는가* 핵심 요약

- 이 영상의 핵심 주제는 대형 언어 모델(LLM)의 추론 능력의 비약적 성장은 매우 빠르게 일어나고 있지만, 실제로 필요한 정보를 검색하는 ‘검색 및 조회(Retrieval)’ 도구의 발전은 매우 더디다는 점을 밝히며, 이로 인해 ‘오라클(Oracle) 격차’ 혹은 ‘지식 격차’가 발생함을 설명
- 실제 실험 벤치마크(브라우즈콤플러스, 오피스 QA 프로)에서, 질의에 적합한 문서를 정확히 제공할 경우 LLM이 훨씬 높은 성능을 보이지만, 현재의 검색 도구 사용에서는 정답률이 급격히 하락하는 현상이 관찰됨
- 브라우즈콤플러스의 오라클 성능은 93%이지만 Codex(default tool) 기반 LLM은 9%에 그치며, 오피스 QA 프로에서도 64%에서 8%로 추락함
- 이는 모델의 추론 자체가 아니라, ‘정확한 정보에 접근하는 능력’이 큰 병목임을 수치적으로 입증
- Mixbread의 검색 도구를 적용할 경우 브라우즈콤플러스에서는 오라클 대비 3% 격차, 오피스 QA 프로에서는 거의 격차가 사라지는 등, 더 나은 검색 도구 도입만으로 성능 대다수를 회복 가능함을 보여줌
- 기존 에이전트들이 부정확한 쿼리를 생성하거나 키워드 나열식 질의에 머무는 구조적 한계를 분석, 그 원인으로 코딩, 웹 활용, 벤치마크 편향 등 세 가지를 제시
- Mixbread 팀은 ‘정확하며, 빠르고, 비용 효율적인 검색 에이전트’를 목표로, 다양한 검색 도구 조합 및 프레이밍 기법, 검색 전략을 적용한 새로운 에이전트를 자체 구축함
- 학습 과정에서는 대형 LLM을 지도교사로 사용한 Supervised Fine-tuning 및 on-policy RL, 검색/트래젝토리 보상 구조를 도입하여, 도구 선택, 쿼리 품질, 검색 효율성 극대화를 달성
- 새로운 에이전트는 Oblique Congress, Snowflake’s Match QA 등 다양한 벤치마크에서 기존 최고 성능 대비 2배 이상의 NDCG 또는 93.4%의 정확도를 기록함
- 요약하면, LLM 성능 한계의 본질은 추론 자체가 아니라 ‘좋은 검색도구 및 쿼리 사용법에 있다’는 것을 실증적으로 보여주는 사례임

---

## 세부 요약 - 주제별 정리

### LLM의 추론 능력이 비약적으로 발전하고 있지만 검색 도구의 진화는 매우 느리게 진행되고 있음

- GPT-3.5와 GPT-5.5를 비교하면 LLM의 이유(추론) 능력이 급속하게 발전했음을 확인 가능
- 모델의 추론 그래프는 명확한 지수 함수를 그리는 반면, 검색(정보 조회) 시스템은 20여 년간 발전 폭이 미미함
- LLM의 실제 활용(법률, 금융, 일반 지식 응용 등)에서 정보 검색은 필수적이지만, 도구의 성능 격차가 존재

### 현재의 정보 검색 도구가 LLM 추론능력 활용의 가장 큰 병목임을 수치적으로 증명함

- 실제 benchmarks(BrowseComp Plus, Office QA Pro) 기반 실험 진행
- BrowseComp Plus(초거대 쿼리, 10만 문서) - OpenAI 제작, Office QA Pro(미국 재무부 100년 기록) - Databricks 제작
- 각 벤치마크별 오라클 성능(맞는 문서를 정확히 넣어줄 경우)이 명확히 구분됨: BrowseComp - 93%, Office QA Pro - 64%
- Codex + 기본 검색 도구 사용 시 성능 급락(BrowseComp: 9%, Office QA Pro: 8%)
- 이는 문서만 잘 찾아주면 모델 추론은 우수하지만, 검색/조회 단계에서 문제가 있음을 의미

### Mixbread 검색 도구 도입 시 성능 격차의 대부분을 해소할 수 있음을 실험적으로 보임

- Mixbread의 latent interaction 기반 검색 도구 적용
- BrowseComp: 오라클과 Mixbread+GPT-5 성능 격차가 단 3%로 감소
- Office QA Pro에서는 실질적으로 격차가 모두 해소됨(거의 동일 성능)
- 즉, 정보 접근성만 높여주어도 LLM의 잠재력 대부분을 활용 가능함 확인

### 기존 에이전트의 질의(query) 생성 방식이 효과적인 검색을 방해하는 주요 원인임

- 실제 벤치마크에서 관찰한 LLM 쿼리 예시: "senator woman questions billionaires not a company then okay thank you staff will check hearing"
    - 의미 없는 키워드의 나열, 해당 도메인과 무관한 토큰들이 뒤섞임
- 이런 ‘키워드 나열식’ 질의가 검색 시스템, 특히 신경망/시맨틱 기반 검색에는 오히려 방해가 됨
- 원인 1: 모델들이 코딩 에이전드 역할(코드 탐색, grep류 키워드 기반 탐색)로 주로 훈련되어 있음
- 원인 2: 웹 활용도 인간 중심 키워드 검색 위주 패턴을 모방
- 원인 3: 현행 벤치마크(BeIR, NanoBeIR 등)의 ‘동굴인’ 스타일 쿼리가 제공되는 구조적 편향(전체적인 엔티티 나열식)

### 키워드 기반 검색 습관이 모델의 시맨틱 검색 도구 사용을 저해함

- 대부분의 쿼리가 키워드 매치율을 최대화하는 형태로 작성됨
- 결과적으로 시맨틱 검색 엔진의 장점을 제대로 활용하지 못하고, BM25 등 키워드 기반 방식에 편향됨
- 도구 사용 방식이 문제점의 본질로 드러남

### Mixbread는 다양한 검색 도구를 결합하고 각 도구의 목적에 맞게 쿼리를 작성하도록 에이전트를 설계함

- “빠르고, 정확하며, 비용 효율적인” 검색 에이전트를 목표로 설계 시작
- 기반이 되는 harness(검색 실행 프레임워크)는 Mixbread 플랫폼 기반이며, 크게 네 가지 검색 도구 사용
    - Overview search: 문서 전체에 폭넓게 시맨틱 검색, 50개 chunk(summary 위주) 반환
    - Main semantic search: 상세 시맨틱 검색, 상위 10개 chunk 전체 내용 반환
    - Filter chunks tool: 메타데이터 기반 필터링/정렬 수행
    - Grep tool: ‘exact keyword match’ 수행
- Agent loop는 최대 4라운드, 각 라운드에서 병렬 질의 가능(속도와 검색 탐색성 모두 확보 목적)

### 검색 에이전트가 효율적으로 다양한 질의와 도구를 활용하도록 프레이밍 전략이 적용됨

- 에이전트는 사용자의 입력 쿼리, 시맨틱 검색 결과, 사용 가능한 메타데이터 facet 힌트 등을 입수
- 이를 바탕으로 쿼리를 4가지까지 세분화(각각의 의미나 관점 분할) 하여, 별도 도구에 맞는 질의 생성
- 각 툴에서의 병렬/순차 검색, 결과 deduplication(격자 내 중복 chunk 제거)까지 자동화
- 해답에 충분한 근거가 모이면 plausible ranking으로 문서 조각(chunks) 리스트를 내놓음

### 한 문장 요약식 질의, 도구별 예시 프롬프트 등이 좋은 쿼리 작성을 유도함

- 검색 전에 "어떤 증거가 나는 필요한가?"를 스스로 articulating(정의) 하도록 에이전트를 유도(Goal framing)
- 시맨틱 검색 도구는 여러 관점이 필요할 때만, grep 툴은 키워드 확정 시에만 사용
- “검색 쿼리를 쓰라” 대신 “무엇을 찾고 싶은지 한 문장으로 기술하라”고 프레이밍 --> 키워드 습관 벗어나게 만듦
- 좋은 예시 쿼리와 쿼리 세분화 사례를 프롬프트에 미리 제시
- 오리지널 쿼리 기반 시맨틱 검색 결과를 미리 보여줘, 말뭉치 성격을 미리 파악한 뒤 탐색 목표 수립 가능

### 작고 빠른 모델을 선택하고, 에이전트 검색 전략 효과성을 극대화하는 맞춤형 학습 방식을 적용함

- 소형 LLM(추론 속도와 비용 효율)을 에이전트로 선정
- Supervised Fine-tuning: 대형 LLM(teacher)으로 질의/검색 도구 활용 전략 습득
- On-policy RL: 자체 보상 신호(검색 품질, 전략 효율성)로 추가 보강
- 검색 품질 보상(retrieval reward): NDCG 등 랭킹 메트릭, LLM 기반 재판점수(루브릭 충족 여부) 등 집합
    - 예) 결과가 정말 유의미한가, chunk들끼리 얼마나 일관되게 랭크되었나 등
- 탐색 경로 보상(trajectory reward): 자연스러운 문장 쿼리, 탐색량의 적정성 등 평가

### 실제 agent 트래젝토리와 쿼리 예시를 통해 시맨틱과 키워드 도구가 적정하게 분배·사용되고 있음을 검증함

- 입력 쿼리가 Oblique Congress 벤치마크의 긴 ‘rambling’ 스타일일 때
    - 시맨틱 검색 쿼리 예시: 원하는 내용을 명확한 문장으로 설명
    - grep 도구에서는 여전히 키워드 패턴 사용(목적에 맞음)
- 각 라운드 결과 및, 도구별 검색 전략이 실제로 제대로 적용됐음을 트래젝토리로 확인

### Mixbread의 신규 에이전트가 기존 최고 성능을 압도하는 기록을 벤치마크에서 증명함

- Oblique Congress Bench: NDCG@10 점수 0.40 기록(GPT multi-hop agent 논문 최고 기록인 0.18의 2.2배)
- 실제 배포한 베타 에이전트(mixedbetter genetic search): Snowflake의 Match QA 벤치마크에서 top1(정확도 93.4%) 달성
    - Gemini 3.5 Flash 모델과 결합 시 성능
    - 동급 타 LLM 기반 검색 에이전트 대비 훨씬 적은 리소스 투입으로 최고 성능 확보
    - Match QA leaderboard에서 랭크됨

### 대형 언어모델의 한계는 추론이 아니라 검색 전략과 정보 접근성에 있음을 실험적으로 시사함

- 현존 LLM의 성능을 저해하는 본질적 한계는 모형(추론)이 아니라, 효과적인 검색 도구 사용법 부족에 있음
- 더 좋은 검색 전략과 도구가 도입될 경우, 소형 LLM이어도 대형 LLM 못지 않은 실제적 품질을 달성 가능
- Mixbread팀은 지식 에이전트의 한계 돌파 및 채용을 홍보하며, 향후 발전 방향에 대해 자막 마무리
