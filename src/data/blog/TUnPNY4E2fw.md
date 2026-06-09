---
author: AI Makers Club
pubDatetime: 2026-06-09T08:18:43.265Z
title: "Road to 5 Million Tokens: Breaking Barriers in Long Context Training - Max Ryabinin, Together AI"
slug: TUnPNY4E2fw
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Together AI의 연구 부사장 맥스 리아비닌(Max Ryabinin)이 진행한 \"Road to 5 Million Tokens\" 프로젝트에 대한 발표를 다룸 Toge"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/TUnPNY4E2fw/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max Ryabinin, Together AI](https://www.youtube.com/watch?v=TUnPNY4E2fw)  
**채널명:** AI Engineer

## *5백만 토큰 맥락 학습의 길: 문맥 병렬화로 메모리 한계를 돌파하다* 핵심 요약

- 이 영상은 Together AI의 연구 부사장 맥스 리아비닌(Max Ryabinin)이 진행한 "Road to 5 Million Tokens" 프로젝트에 대한 발표를 다룸
- Together AI는 AI 개발자를 위해 모델 생성, 커스터마이징, 추론까지 지원하는 AI 네이티브 클라우드 플랫폼임
- 최근 AI 커뮤니티에서는 장문맥(long context) 모델 학습에 대한 관심이 급증하고 있음
- 장문맥의 필요성은 에이전트(agents) 애플리케이션과 영상 생성 등 다양한 실제 활용에서 대량의 컨텍스트 유지 요건에 기인함
- Transformer 기반 대형 언어 모델의 문맥 확장은 계산량(쿼드러플, O(n^2))과 메모리(선형, O(n)) 두 가지 병목에 직면함
- 프로젝트 목적은 기존의 최적화 기술들과 자체 개발 기법을 조합해 최대한 긴 컨텍스트(최종 5백만 토큰)까지 트레이닝 메모리 문제를 해결하는 것임
- 세부적으로, 데이터 병렬화, DeepSpeed Ulysses 기반 문맥 병렬화, Activation Checkpointing, CPU 오프로딩, 연산 타일링(Arctic Sequence Length Training), 'Untitled Ulysses' 등 다수의 메모리 최적화 기법을 단계적으로 적용함
- 이 기법들을 조합함으로써 Llama 3B 모델로 5백만 토큰급의 초장문맥 트레이닝이 단일 8xH100 GPU 노드상에서 가능해짐
- 실험 결과 주요 문맥 병렬화 방식별 메모리·속도 성능을 비교했으며, 자체 확장 기법이 가장 진보됨을 보임
- 논문·자료는 공개되어 있으며, 추가적인 기법 설명과 결과들은 논문 및 발표 내에서 확인 가능함

---

## 세부 요약 - 주제별 정리

### Together AI는 AI 개발자 전 주기를 돕는 AI 특화 클라우드 플랫폼을 제공함

- Together AI는 AI 네이티브 클라우드 플랫폼으로, AI 모델 개발·배포·추론에 필요한 인프라 및 서비스를 통합적으로 제공함
- GPU 클러스터 최적화, 신뢰성 높은 시스템, 파인튜닝 및 RL을 통한 모델 맞춤화 등 다양한 기능을 지원함
- 오픈소스 모델 추론 서비스도 제공하며, 200개 이상의 모델·서버리스 또는 전용 인퍼런스 환경, 다양한 고급 최적화 옵션을 보유함
- 본 발표는 Together AI의 이런 기능 중에서도 특히 모델 트레이닝/커스터마이즈/파인튜닝 관련 최신 연구에 초점을 맞춤

### 커뮤니티가 장문맥 모델 학습에 주목하는 배경은 실제 응용 확대에 있다

- 최근 1년간 장문맥(long context) 학습에 대한 연구·시스템적 관심이 폭발적으로 증가함
- 에이전트형 AI 활용이 늘면서, 다양한 토큰(텍스트, 문서 등)을 대규모 맥락으로 입력하고 모델이 이를 효과적으로 활용하는 것이 중요해짐
- 영상 생성(video generation) 등에서는 초당 다수 프레임 정보를 보존(수초~수분 전 정보까지 고려)해야 하므로 장문맥 요구가 강함
- 이러한 어플리케이션 성능 확보를 위해 트레이닝 단계에서부터 모델이 대용량 컨텍스트를 처리하도록 해야 함

### Transformer 언어 모델은 긴 문맥 처리 시 계산량과 메모리 병목에 부딪힌다

- Transformer 기반 모델은 문맥 토큰 수가 늘면 ‘쿼드러플’(O(n^2)) 연산량이 필요한 점이 첫번째 병목임
- 두 번째 문제는 토큰 수가 늘수록 메모리 소모가 선형적으로 증가하는 점임 (실제 학습 시 ‘메모리 한계’에 직면)
- Hugging Face의 관련 블로그 예시에서도 시퀀스 길이 증가가 메모리 한계에 미치는 영향을 시각적으로 설명함

### 기본 데이터 병렬화만으로는 GPU 메모리 한계를 넘을 수 없다

- 예시: Llama 3B 아키텍처를 8xH100 GPU에서 3백만 토큰 시퀀스로 트레이닝 시도
- 초기에는 모델 파라미터만 올려도 GPU 메모리가 이미 모두 사용되어 불가능
- Fully-sharded data parallelism(완전 분산 데이터 병렬화)도 파라미터 분산에는 효과적이나, attention activation의 메모리 사용때문에 여전히 제한적
- 이 기본 방식만으로는 수백만 토큰 단위의 문맥을 다루기 어렵다고 설명함

### DeepSpeed Ulysses 기반 문맥 병렬화로 attention 메모리 문제를 완화할 수 있다

- Microsoft이 처음 발표한 DeepSpeed Ulysses 기법을 활용
- 복수의 attention head별로 시퀀스를 분리, 각 GPU가 특정 head의 전체 시퀀스를 담당하도록 병렬 배치
- 필요한 활성화만 통신·조합하는 방식으로, attention 연산 메모리 사용을 8배까지 줄임(8x GPU 기준)
- Flash Attention 1/2/3/4 등 최신 attention 구현체와 결합해 연산 효율 극대화
- 그러나, 이 방식만으로도 단일 노드에 완전히 적합시키는 데는 아직 한계 존재

### Activation checkpointing과 CPU 오프로딩은 추가적인 메모리 절감을 실현한다

- Activation checkpointing: 역전파(backward pass) 과정에서 필요할 때만 activation을 재계산/저장하여 추가로 8배 메모리 절약
- 오프로딩: 각 transformer 블록의 일부 입력을 GPU 대신 CPU(메인 메모리)에 일시 저장, 필요 시 프리페치(prefetch)로 불러옴
- 성능 저하 없이 컨텍스트 윈도우 확장에 큰 기여 (Unsloth팀이 처음 구현)
- 실제 적용시 37GB 규모 데이터 오프로딩이 가능, 메모리 부담을 효과적으로 경감함

### 연산 타일링(Arctic Sequence Length Training)으로 시퀀스 기반 버퍼 사용량을 더 줄일 수 있다

- 전체 시퀀스를 부분(chunk)으로 나눠 MLP, 손실 계산 등 element-wise 연산을 통째로 버퍼할 필요 없도록 재구성
- 3백만 등 초장문맥에서도 버퍼 크기가 부담스러울 때 연산 타일링으로 이를 해결
- 위 기법들(데이터 병렬화, Ulysses, activation checkpointing, offloading, 타일링)을 연속적으로 적용해야 비로소 3백만 토큰 문맥이 단일 8xH100 노드에서 가능해짐

### 자체적 확장 기법인 'Untitled Ulysses'가 문맥 병렬화 한계를 더욱 밀어붙였다

- 기존 Ulysses는 head별 병렬화로 이미 GPU 연산 동시성 한계까지 도달; 이를 추가로 head 그룹화, iteration별로 분할 연산해 메모리 재활용을 유도
- 각 head 그룹의 attention 연산 후 부분 결과를 저장, 버퍼를 재활용
- 큰 버퍼 대신 작은 버퍼를 반복적으로 재사용(O(작은 크기)), 메모리 점유율을 한층 더 낮춤
- 처리량(througput)에 특별한 영향을 주지 않고, 소규모~대규모 모두 우수한 성능

### 다양한 문맥 병렬화 기법의 실제 성능 비교 결과, 자체 확장 기법이 가장 우수하다

- 8B/32B 모델, 여러 문맥 길이 세팅에서 기존 방식과 새 기법(Untitled Ulysses)의 메모리 및 속도 실험 비교
- 대다수 context length에서 최고 수준의 메모리 효율 및 일부 구간 최대 성능 도달
- head chunk 크기(동시 연산 head 수)가 커질수록 처리 속도는 빨라지지만 메모리 소모는 커짐; 반비례 관계 명확

### 모든 최적화 기법 결합으로 5백만 토큰 장문의 학습이 실현되었고, 여유 메모리로 추가 최적화도 가능하다

- 모든 기법(데이터 병렬·Ulysses·운타이틀드 Ulysses·U-Pipe 등)을 결합, 필요 시 여유 메모리를 스테이지 등 추가 영역에 재할당 가능
- U-Pipe 등 파이프라이닝 방식은 복수 지점(예: 3~5백만 토큰 길이) 분산 학습 시 효율 개선에 핵심적
- 다양한 문맥 길이에서 동일 인프라 조건 하에 실제 학습이 가능함을 실험으로 입증

### 장문맥 트레이닝에선 의외의 병목이 생길 수 있으니 세밀한 프로파일링 도구 활용이 필수적이다

- 병목은 expecting하지 않은 지점에서 나타날 수 있으므로, 파이토치 프로파일러 등 진단/분석 도구 적극 사용 권장
- 발표 논문에서 보다 자세한 기법, 실험 결과 등을 확인할 수 있으며, 모든 결과물은 공개되어 있음

### Transformer 내부 QKV 행렬 계산이 핵심 병목 및 최적화 대상임이 Q&A를 통해 재확인되었다

- Q&A에서 QKV(쿼리-키-밸류) 행렬 연산이 activation 및 메모리 복잡성의 주요 원인임이 강조됨
- 3백만 등 초장문맥일 때, QKV 연산의 pairwise interaction으로 배열 크기 폭증, 메모리 한계 직면
- U-Pipe 및 다양한 메모리 경감 기법이 동원되는 이유가 여기에 있음을 설명함
