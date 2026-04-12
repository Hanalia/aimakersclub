---
author: AI Makers Club
pubDatetime: 2026-04-12T08:18:39.452Z
title: "Running LLMs locally: Practical LLM Performance on DGX Spark - Mozhgan Kabiri chimeh, NVIDIA"
slug: c5-kx2bwoCk
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "NVIDIA의 개발자 관계 매니저 Mozhgan Kabiri Chimeh가 Jetson Spark 시스템에서 대규모 언어모델(LLM)을 실제로 로컬에서 실행한 성능과 경험을 데이터"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/c5-kx2bwoCk/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Running LLMs locally: Practical LLM Performance on DGX Spark — Mozhgan Kabiri chimeh, NVIDIA](https://www.youtube.com/watch?v=c5-kx2bwoCk)  
**채널명:** AI Engineer

## *DGX Spark에서 LLM을 로컬로 실행하기: Jetson Spark에서의 실질적 LLM 성능* 핵심 요약

- NVIDIA의 개발자 관계 매니저 Mozhgan Kabiri Chimeh가 Jetson Spark 시스템에서 대규모 언어모델(LLM)을 실제로 로컬에서 실행한 성능과 경험을 데이터 기반으로 설명함
- 최신 AI 인프라의 가장 큰 도전 과제는 “메모리 부족”과 “적합한 소프트웨어 스택 접근성 부재”임을 지적
- 생산 환경에서는 비용 예측 가능성, 데이터 거주성, 지연 시간 결정성 및 개발 속도 저하 등 인프라 공유에 따른 문제가 대두됨
- Jetson Spark는 CPU와 GPU가 통합된 GB10 Grace Blackwell 슈퍼칩과 128GB 통합 메모리(NV4 지원)로, 2천억 파라미터급 LLM을 데스크탑 크기에서 로컬로 실행 가능케 함
- 동일한 NVIDIA AI 소프트웨어 스택이 데스크탑·클라우드·데이터센터에서 호환돼, 개발-배포 환경 간 이동이 원활함
- vLLM과 다양한 파라미터·정밀도·양자화 포맷의 모델을, Docker 기반 격리 환경에서 자동화 벤치마킹 시스템으로 테스트함
- 실험 결과: 1.5B instruct 모델은 61.73 tokens/sec, 14B NVFB4 모델은 20.19 tokens/sec, 14B base 모델은 8.40 tokens/sec로 NVFB4 4비트 양자화의 효과가 뚜렷함
- ‘첫 토큰까지 시간’은 사용자 체감 성능에 결정적이며, 14B NVFB4 모델이 14B base 모델 대비 3.4배 빠름
- 128GB 메모리 덕분에 대형 모델 적재 가능하나, 처리량(throughput)은 결국 메모리 대역폭 및 효율적 데이터 이동에 좌우됨
- Jetson Spark는 개인정보 민감/프라이버시 요구, 신속한 프로토타이핑, 일관된 로컬-클라우드 전환 워크플로우에 적합함을 강조

---

## 세부 요약 - 주제별 정리

### AI 모델 실행 환경에서는 메모리 한계와 소프트웨어 접근성 문제가 심각하게 대두됨

- AI 진화로 인해 개발자 PC 자체의 요구 사양이 대폭 상향됨
- 최근 LLM 개발에서는 쉽게 “메모리 부족” 상황에 직면하거나, 원하는 고급 소프트웨어 스택(특히 AI 프레임워크)을 구할 수 없는 문제가 발생
- 결국 많은 개발자들이 모델 실행을 클라우드 혹은 대형 데이터센터로 ‘밀어내기’ 하게 됨
- 이러한 외부 자원 의존은 개발 초기 실험 단계에선 부담과 병목을 초래함

### 생산 환경 진입 시에는 비용, 데이터 거주성, 지연 시간 예측 가능성이 핵심 이슈가 됨

- LLM이 실제 프로덕션에 투입되면, 단순 실행 외에도 ‘예상 가능한 비용 청구’, ‘민감 데이터의 국지적 처리’, ‘정확히 예측 가능한 응답 시간’이 필수 요건이 됨
- 개발 속도 역시 인프라가 공유 자원이거나, 타 워크로드와 경합할 경우 신속성을 잃으며, 이는 전체 AI 파이프라인 효율에 심각한 타격을 줄 수 있음

### Jetson Spark는 로컬 딥러닝 시스템에 특화된 최신 AI 개발 하드웨어임을 강조함

- Jetson Spark는 “AI를 처음부터 끝까지 실험 및 배포할 수 있는 독립형(standalone) 하드웨어”로 설계됨
- GB10 Grace Blackwell 슈퍼칩: CPU와 GPU가 하나의 칩에 통합, 데이터 이동 속도 및 캐시 효율 극대화
- 128GB ‘통합(unified) 메모리’, NV4 지원: 수백억~2천억 파라미터 모델도 메모리 한계 없이 직접 실행 가능
- 크기가 “책상 아래 또는 위에 놓을 수 있을 정도”로 데스크탑화되어 있음
- 실제 배포용 NVIDIA AI 소프트웨어 스택과 동일하게 동작해, 개발과 배포 환경 간 호환성 문제가 없음

### Jetson Spark 도입의 핵심은 ‘클라우드 대체’가 아니라 ‘개발자 옆에 AI를 두는 것’임

- 목표는 클라우드/데이터센터를 완전히 대체하기보다는, 개발자 손이 닿는 물리적 공간에서 빠르고 일관된 개발 워크플로우를 구현하는 것
- 로컬에서 실험하고, 그대로 프로덕션/클라우드로 이식이 가능한 개발경로를 제공함

### 벤치마킹 실험은 자동화·격리 환경에서 데이터 기반으로 엄격하게 수행됨

- 모든 실험은 Docker 컨테이너로 격리하여 환경 일치를 보장함
- vLLM(벤치마킹용 LLM 서버) 기반 다양한 모델, 양자화 및 정밀도의 변이를 동일 조건에서 실행
- 각 모델(1.5B~14B)별 3회 워밍업, GPU 백그라운드 모니터링(1초 단위), 실행마다 고유 디렉터리 생성해 결과 및 메타데이터, benchmark artifacts 모두 기록
- 모든 실험 반복·결과 검증이 가능한 setup을 구축

### 사용자 체감 성능의 핵심 지표인 ‘첫 토큰 생성 시간’에 특화된 측정 방식을 고안함

- 실제 AI 앱에서는 ‘전체 응답 완료 시간’도 중요하지만, 첫 토큰이 언제 나오는지가 사용자 경험에 가장 큰 영향을 줌
- 이를 위해 vLLM의 스트리밍 응답에서 첫 데이터 청크가 생성된 시점을 별도로 타임스탬프로 계측함
- 단순 API 호출이 아닌 stream_once 함수에서 첫 토큰 타임스탬프를 추적하도록 코드 구현 및 실험에 적용함

### 실험 데이터는 모델 크기·정밀도·양자화 포맷에 따라 성능이 극적으로 달라짐을 수치로 보여줌

- 1.5B instruct 모델: completion token/sec 61.73로, 지연이 거의 없음
- 14B NVFB4(4bit) 모델: 20.19 tokens/sec. 파라미터 수 10배 증가에도 Human reading speed(평균 성인 독서속도)보다 빠름
- 14B base(실수 unoptimized) 모델: 8.40 tokens/sec로, 동일 파라미터 내에서도 quantization 포맷에 따라 2.4배 성능 차
- 특히 Blackwell 아키텍처에서 quantization(NVFB4) 유무가 실질 성능을 좌우함

### NVFB4 4비트 양자화 포맷은 대형 모델의 처리량과 응답성을 획기적으로 개선함

- NVFB4 도입시 모델은 고지능(14B 파라미터)을 그대로 유지하면서, 메모리 및 대역폭을 극대화 사용
- 일반 14B 모델보다 ‘첫 토큰 응답시간’이 3.4배 빠름
- ‘메모리 용량’이 곧 실질 성능을 보장하지 않으며, 메모리 대역폭 및 데이터 흐름 효율이 키포인트임을 실험적으로 입증

### Jetson Spark의 장점은 민감 데이터, 빠른 프로토타이핑, 로컬-클라우드 일관 워크플로우 실현임을 강조함

- Steady-state workload(지속적인 상시 작업)와 개인정보/보안이 중요한 사용 사례에 적합
- ‘로컬에서 반복 실험→최종 확정 시 클라우드 확장’이 가능한 구조
- 촬영자가 직접 사용한 세팅, 스크립트, 소프트웨어 스택은 build.nvidia.com/spark 에서 playbooks·자료로 공개함

### Jetson Spark는 대규모 LLM 개발 파이프라인에서 로컬 실험과 클라우드 확장이 유기적으로 이어지는 실용적 솔루션임

- 실제 작업 흐름: 로컬 실행→빠른 반복→성능/개선 확인→필요시 데이터센터/클라우드로 확장
- Jetson Spark가 제공하는 환경 자체가 연구, 프로토타입, 배포에 걸친 자연스러운 브릿지 역할을 함

### 결론적으로, Jetson Spark는 양자화 기술과 통합 아키텍처를 활용해 LLM 로컬 실행의 실질적 한계를 극복함을 실험으로 증명함

- 대형 AI 모델의 ‘데스크탑-급’ 실험·검증이 현실이 되었음을 수치, 실험 기록을 통해 투명하게 제시
- 개발-실험-배포의 전 과정에서 환경/스택의 일관성이 보장되어, 안정적이고 반복성 높은 LLM 개발을 가능하게 함
