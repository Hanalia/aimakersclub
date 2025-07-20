---
author: AI Makers Club
pubDatetime: 2025-07-20T08:19:14.249Z
title: "What every AI engineer needs to know about GPUs - Charles Frye, Modal"
slug: y-UGrYbJsJk
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "AI 엔지니어들이 오픈AI, Anthropic, DeepSeek 등의 모델 API를 활용해 앱을 만드는 현재, 앞으로는 GPU에 대한 이해가 필수적임을 강조함 복잡한 시스템 구축에"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/y-UGrYbJsJk/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [What every AI engineer needs to know about GPUs — Charles Frye, Modal](https://www.youtube.com/watch?v=y-UGrYbJsJk)  
**채널명:** AI Engineer

## *AI 엔지니어라면 반드시 알아야 할 GPU의 핵심 원리* 핵심 요약

- AI 엔지니어들이 오픈AI, Anthropic, DeepSeek 등의 모델 API를 활용해 앱을 만드는 현재, 앞으로는 GPU에 대한 이해가 필수적임을 강조함
- 복잡한 시스템 구축에 있어 ‘API 경계’의 중요성을 설명하며, AI 엔지니어가 GPU 하드웨어와 소프트웨어의 필수적 요소를 알아야 함을 역설
- 데이터베이스에 ‘인덱스’를 이해해 효율적으로 쿼리하는 것처럼, AI에서는 ‘텐서 코어’ 활용이 핵심임을 “Use the tensor cores, Luke”라는 문구로 강조
- GPU 특징은 ‘저지연’보다 ‘고대역폭’에 중점을 두며, CPU와 달리 연산 처리 대역폭을 극대화하도록 설계됨
- CPU 대비 GPU는 병렬(16,000+ 스레드, 스레드당 5센트의 에너지 효율) 및 동시처리 능력이 월등하며, H100 GPU 예시로 비교 수치를 제시
- ‘Patterson’s Law’에 따라 현대 컴퓨팅 성능은 ‘대역폭 향상’이 ‘지연시간 감소’보다 훨씬 큰 영향을 미치고 있음을 통계와 함께 설명
- GPU에서 ‘연산 대역폭’(Arithmetic Bandwidth)이 ‘메모리 대역폭’보다 중요한데, 이는 n²번 연산이 n번만 메모리 접근하면 가능함을 의미
- 소형 모델을 1,000회 이상 반복 실행하는 등의 방식으로 하드웨어 효율(한 번 로드 후 다수 샘플 생성)을 극대화할 수 있음을 구체적 실험과 재현 결과로 뒷받침
- 최신 GPU의 ‘텐서 코어(Tensor Core, 저정밀 행렬곱 전용)’는 수천 테라플롭스 연산을 가능하게 하며, 멀티토큰 예측/다중 샘플 추출을 ‘거의 공짜’로 만들어 줌
- Llama, DeepSeek 등 여러 LLM 프레임워크와 병렬 생성 기법에서 이러한 하드웨어 특성을 어떻게 활용하는지 구체적으로 설명
- Modal.com에서 제공하는 GPU 글로서리와 서버리스 Python 환경 등 실무 도구도 직접 안내하며 발표를 마무리함

---

## 세부 요약 - 주제별 정리

### API 경계와 복잡한 AI 시스템에서 GPU 이해의 필요성이 강조됨

- AI 엔지니어들은 대부분 모델 API(OpenAI, Anthropic, DeepSeek 등)에 의존하여 애플리케이션을 제작해 왔음
- 애플리케이션 복잡성이 증가할수록, 모든 사람이 모든 기술의 세부까지 알 수 없으므로 'API 경계'로 복잡성을 분할함
- Swix의 "Rise of the AI Engineer" 다이어그램 및 'API 바운더리' 개념을 참고
- 이제는 더 깊게 하드웨어, 특히 GPU 레벨로까지 이해도를 높여야 할 단계에 진입하고 있다고 주장
- 데이터베이스의 인덱스 구조와 활용법을 알아야 효과적으로 쿼리할 수 있는 것과 동일한 맥락임
- “Use the index, Luke”라는 유명한 데이터베이스 교육 문구를 패러디해 “Use the tensor cores, Luke”라고 언급

### 데이터베이스와 GPU: '사용자'로서 필수 지식을 비교해서 설명함

- 대부분의 개발자는 데이터베이스를 직접 구현하지 않지만, 좋은 쿼리를 작성하려면 인덱스 개념 등 핵심을 알아야 함
- 데이터베이스 인덱스(Primary, Secondary index), B-Tree, Log-structured merge tree 등은 직접 코딩하지 않아도 원리를 알아야 실무에 적용 가능
- AI 엔지니어 역시 GPU의 내부 구조를 모두 개발할 필요는 없으나, 효율적으로 사용할 지식이 필요함
- 요점은 GPU의 핵심 기능(텐서 코어, 저정밀 행렬곱)을 잘 활용해야 한다는 것

### 최근 오픈웨이트 모델 및 실행 소프트웨어 발전이 '셀프 호스팅'을 타당하게 만듦

- 오픈 소스 LLM(예: Llama, DeepSeek 등)과 실행 소프트웨어(Dynamo 등)가 빠르게 발전하고 있음
- 이에 따라 자체적으로 모델을 오는 것이 점차 경제적, 실용적으로 변하고 있음
- Modal 팀의 벤치마크(10~12개 모델, 10~12개 워크로드)로 어떤 방식이 경제적인지 테스트 결과도 예고

### GPU의 가장 큰 특징은 ‘저지연’이 아닌 ‘고대역폭’ 추구에 있음

- 대부분의 기존 하드웨어는 ‘저지연’에 초점을 맞췄으나, GPU(및 TPU)는 반대로 ‘고대역폭’을 최우선으로 설계됨
- 대역폭은 한 번에 많은 데이터를, 연산을 처리하는 능력을 의미하며, AI 응용에 특히 맞는 특성임
- GPU의 구조와 사상적 기반을 컴퓨터 역사(1930년대 Zuse 1 등)와 비교하며 설명
- 컴퓨터 성능 개선의 주된 원인이었던 '클럭 속도 상승(90년대)'이 2000년대 이후 둔화
- 이 변화로 인해 동시성, 병렬 프로그래밍, 멀티프로세싱 등 소프트웨어 패러다임 전환이 이루어짐

### 병렬성(Parallelism)과 동시성(Concurrency) 두 축에서 GPU가 CPU를 월등히 능가함을 수치로 설명

- AMD EPYC CPU(2스레드/코어, 스레드당 1W)와 NVIDIA H100 SXM GPU(16,000+ 스레드, 스레드당 0.05W)로 병렬 처리 능력 비교
- GPU의 병렬성: 16,000여 스레드가 매 클럭사이클 동시 수행
- 동시성: CPU는 이론적으로 무한대 스레드를 지원하나, 전환속도(컨텍스트 스위칭)가 느림(수천 클럭사이클 소요)
- GPU는 하드웨어 수준에서 워프 스케줄러가 매 클럭사이클 컨텍스트 스위칭 지원
- 병렬∙동시 실행의 하드웨어/소프트웨어 차이를 구체적으로 설명

### Patterson’s Law(‘Latency lags bandwidth’)로 대역폭 중심 성능 진화의 본질 설명

- 데이비드 패터슨(리스크 컴퓨터, TPU 개발자)이 정립: '지연 감소'보다 '대역폭 증가'가 훨씬 큰 성과
- 여러 컴퓨터 서브시스템(네트워크, 메모리, 디스크 등)의 성능 추이를 보면, latency 10배 줄이는 동안 bandwidth는 100배 증가함
- 물리학적 한계로 인해 latency 개선은 매우 어렵고, bandwidth 증가는 비교적 수월함(동시처리, 확장성)
- 실제로 네트워크 latency는 빛의 속도(70%)가 한계에 가까워 추가 향상이 어렵다고 언급

### GPU에서 메모리 대역폭보다 연산 대역폭이 훨씬 중요하며, n² 연산이 n번만 메모리 접근하면 최적임

- GPU는 Hynix HBM(High Bandwidth Memory) 등 고대역폭 메모리를 탑재하지만, 진짜 강점은 연산 성능(Arithmetic bandwidth)에 있음
- 메모리 대역폭(GB/s)에 비해 연산 대역폭(TFLOPS)은 수천까지 높아짐; Blackwell 아키텍처 이후 연산:메모리 비율은 더욱 상승
- n²연산/n메모리 구조(=Arithmetic Intensity)가 GPU에서 효율적임을 수치와 실험 예시로 입증
- LLM Inference에서 ‘프롬프트 처리’구간은 대량의 파라미터(예: 8GB)를 한번 로딩해 60억 번 이상의 floating point 연산 수행

### 소형 모델을 반복실행하거나 샘플을 모아 처리하는 방식이 하드웨어에 특화되어 있음을 실험으로 입증

- LLM Inference에서 디코딩 구간은 메모리 접근이 많아 비효율이 발생
- 한 번 모델 가중치를 로딩한 뒤 100~1000번 이상 반복해 여러 샘플을 동시에 생성하면 하드웨어 효율이 극대화됨
- Llama 3 8B 모델을 100번 샘플 추출해 성능을 증폭, 선택기를 두어(예: Python 테스트 통과 여부) GPT-4(0) 모델 품질에 근접 가능함을 재현
- 실제 논문 재현(다른 데이터, 모델로 동일 현상) 및 결과 그래프 제시

### Tensor Core는 저정밀 행렬 곱셈에 특화되어 멀티샘플·멀티토큰 예측 등의 연산을 거의 공짜로 만들어줌

- NVIDIA GPU 등 최신 하드웨어의 최상위 성능은 텐서 코어에서 발현(수천 테라플롭스)
- 텐서 코어가 지원하는 주요 연산은 ‘저정밀(Float16 등) 행렬-행렬 곱셈’임
- 이 연산을 활용하면 멀티샘플 추출, 멀티토큰 예측(DeepSeek, Llama4 등에서 사용) 등의 연산이 매우 효율적
- Thunderkittens(Hazy Research) 등의 마이크로벤치마크에서 ‘행렬 x 벡터’는 성능 저하, 행렬 x 행렬(빈 컬럼 추가)로 성능 극대화
- 병렬화로 인한 성능 증대 효과를 구체적 수치 예시로 설명

### '경량 모델 + 다중 샘플' 전략이 실무에서 쉽고 경제적임을 데이터로 뒷받침

- 작은 LLM을 로컬 GPU(데스크탑 등)에서 실행, 다수 샘플로 품질 극복 가능
- ChatGPT 초기부터 논의된 연구 방법론이 오픈 모델 성능이 좋아진 현재 다시 현실적으로 부상함
- 실제 실험, 메트릭, 품질 비교(수, 통과율 등) 구체적으로 설명

### GPT, DeepSeek, Llama4 등 주요 LLM에서도 멀티토큰/멀티샘플 전략이 채택되고 있음

- 모델 구현과 활용 예시로 DeepSeek의 next-token prediction, Llama4의 멀티샘플 생성 전략 언급
- Tensor Core 특성을 최대한 활용하는 방식임

### 실무자 참고 리소스를 소개하며 발표를 마무리함

- Modal.com/GPU-glossary(‘CUDA 문서 for human beings’)에서 GPU, CUDA, 워프 스케줄러 등 용어와 개념을 쉽게 풀어 설명
- Modal 플랫폼에서 서버리스(무관리) GPU, Python 환경을 활용해 LLM, 데이터 집약적 컴퓨팅을 쉽게 실행할 수 있음을 안내
- 컨테이너 스택을 재구성해 LLM Inference에 최적화된 Modal 실무 환경(서버리스), 엑스포 홀 오프라인 만남 등도 홍보하며 마침
