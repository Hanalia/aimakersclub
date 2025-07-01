---
author: AI Makers Club
pubDatetime: 2025-07-01T08:18:57.657Z
title: "Optimizing inference for voice models in production - Philip Kiely, Baseten"
slug: gmTHs5T_YAE
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 *음성 모델의 프로덕션 추론 최적화*임 발표자는 Baseten(베이스텐) 소속 필립 켈리(Philip Kiely)이며, Baseten은 다양한 AI 네이티브 기업을 위"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/gmTHs5T_YAE/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Optimizing inference for voice models in production - Philip Kiely, Baseten](https://www.youtube.com/watch?v=gmTHs5T_YAE)  
**채널명:** AI Engineer

## *음성 모델의 프로덕션 추론 최적화* 핵심 요약

- 영상 제목은 *음성 모델의 프로덕션 추론 최적화*임
- 발표자는 Baseten(베이스텐) 소속 필립 켈리(Philip Kiely)이며, Baseten은 다양한 AI 네이티브 기업을 위한 모델 추론 플랫폼을 제공함
- 본 발표는 주요 음성 모델(특히 Orpheus TTS) 아키텍처 설명, 성능 지표, 최적화 기법, 측정 방법, 인프라/클라이언트 코드 설계까지 전 과정을 다룸
- TTS(Text-to-Speech) 모델은 LLM(대형 언어 모델)과 구조적으로 유사하거나 파생되어, LLM용 최적화 도구(TensorRT-LLM 등)를 적용할 수 있음
- Orpheus TTS는 Llama-3(32억 파라미터) 기반 오픈소스 모델로, 더 큰 음성 토큰 집합 및 연장된 컨텍스트 길이 지원 등 음성 특화 설계가 적용됨
- 성능 지표로는 ‘최초 바이트 시간(time to first byte)’, ‘동시 처리(stream) 수’, ‘토큰 초당 처리량’ 등이 활용되며 음성 모델 특화 관점이 강조됨
- 최적화 기법으로 TensorRT-LLM 활용, FP8 양자화, 오디오 디코더의 Torch Compile 적용, 동적 배치 처리 등 다양한 방법이 실제 코드 예시와 함께 제시됨
- H100 MIG(하프 GPU)를 활용해 24개 동시 스트림 지원, 150ms 이하 최초 바이트 시간 등 높은 효율성을 실현하고 비용도 대폭 절감함
- 클라이언트 코드/인프라 설계가 전체 지연(latency)에 더 큰 영향을 미칠 수 있음; 연결, 세션 관리, 프로토콜 선택 등 세부된 노하우 설명
- 음성 파이프라인에서 '듣기', '생각하기', '말하기'를 연결하는 인프라 구조와 네트워크 지연 최적화가 최종 SLA 달성의 핵심임

---

## 세부 요약 - 주제별 정리

### 발표자는 모델 추론 플랫폼 Baseten의 필립 켈리로, 실전 경험을 바탕으로 최적화 현실을 공유함

- 필립 켈리는 Baseten 소속으로, AI 네이티브 기업 및 스타트업을 위한 모델 추론 플랫폼 운영 경험을 바탕으로 본 주제를 발표
- 샌프란시스코를 거주지로 삼고 있으며, 스포츠팀, 커뮤니티 언급 등 발표 분위기 조성
- 발표자는 Orpheus TTS 모델의 팬임을 밝히고, 이를 주요 사례로 활용
- Canopy Labs(Orpheus TTS 제작), Elias·Amu 팀 등의 기여를 언급하며 오픈소스 생태계에 감사를 표함

### TTS 모델은 LLM 구조와 유사하여 LLM 최적화 기술을 거의 그대로 적용할 수 있음

- TTS(텍스트-음성) 모델 다수는 오토리그레시브 트랜스포머 계열(즉, LLM과 유사 혹은 파생 모델)임
- 예시로 Whisper(음성 인식), embedding 모델, 자체 TTS 등이 인용됨
- 디퓨저(이미지 생성) 계열은 완전히 달라 최적화 방식이 다름
- TTS 모델들이 LLM에서 파생하거나 구조가 유사해서 LLM용 도구/최적화 기술을 활용할 수 있다는 장점 설명
- Hugging Face config 등에서 Llama33B 기반 Orpheus TTS를 구조 예시로 사용
- Llama용 표준 최적화(텐서RT-LLM 등)을 직접 이 모델에 적용 가능

### Orpheus TTS는 Llama-3(3B) 기반 오픈소스 모델로 특화 기능과 확장성을 갖춤

- Orpheus TTS는 Llama 3 기반 32억(3B) 파라미터의 오픈소스 TTS 모델임
- 오픈소스이면서 성능이 뛰어나고 제작팀(캐노피랩스 등)의 기술적 완성도를 높게 평가
- 기존 Llama와 동일한 causal LLM 구조를 그대로 사용
- 특수 토큰(예: 웃음 등 음성 특화 토큰) 확대로 vocab size 확대
- 스루프(Thrope) scaling 위한 컨텍스트 길이 확장 적용
- 이러한 구조적 특징을 파이프라인 전체 최적화에 활용 가능

### 음성 모델 최적화 목표는 진정한 실시간성과 높은 동시 처리를 위한 구조 설계에 있음

- 기존 LLM 최적화에서는 토큰 초당 처리량(TPS) 극대화가 주요 목표이나, 음성 모델에서는 실시간 스트림 구현이 우선
- Orpheus의 경우 실시간 기준 83TPS면 충분(3B 파라미터 모델 기준)
- TPS 극대화보단 ‘최초 바이트 응답 속도(time to first byte)’와 ‘동시 처리(concurrency)’ 수를 우선시함
- 동시 처리 증가는 더 많은 음성 에이전트를 적은 GPU에서 동작시켜 비용을 절감함
- 전체 패러다임은 ‘한 GPU 당 최대 스트림 수’ 극대화를 위한 최적화임

### TensorRT-LLM 사용, FP8 양자화, Torch Compile 등 다양한 최적화 기술이 음성 모델에도 효과적임

- LLM과 동일하게 TensorRT LLM을 적용하면 대부분 성능이 크게 개선됨(TensorRT LLM의 활용 빈도가 높고, 개발자 경험은 복잡할 수 있으나 속도는 우수함)
- 모델 자체를 양자화(Quantization)하여 용량 및 속도 개선: Hopper 아키텍처에서는 FP8로 안정적인 성능 확보, KV cache까지 FP8 적용에도 성능 저하 없이 작동
- 오디오 디코딩은 LLM에 비해 복잡도가 높아, Torch Compile 및 PyTorch Inference Mode로 GPU상 디코더 실행
- SNACK(Audio Decoder) 사용, Torch Compile 도구를 오디오 디코더에도 적용
- 배치 처리에서 토큰별 연속 배치(continuous batching) 대신 15ms 단위 동적 배치(dynamic batching) 적용
- 배치 크기 조정으로 처리량-지연간 트레이드 오프 가능

### 동시처리(Concurrency) 최대화와 CPU 병목 극복이 전체 성능의 핵심 지점임

- 최적화 후 H100 MIG(하프 H100 GPU) 기준: 가변 트래픽 16 동시 스트림, 고정 트래픽 24 동시 스트림 처리 가능
- H100 MIG는 소형 모델 및 Hopper 아키텍처 성능 최적화를 위해 활용하며, 전체 80GB GPU를 쓰지 않고 경제적 운영이 가능
- 실 서비스점당 시간당 과금도 극소화(수 센트 단위), API per token 모델 대비 대규모 트래픽에 적합
- 토큰 생성과 오디오 코딩은 GPU에서 수행되나, 전체 파이프라인 내 CPU 병목(CPU bound)이 발생할 수 있으며 이는 추가 스케일아웃으로 보완 가능

### 최초 바이트 시간 등 실제 지표(150ms) 달성 과정과 파이프라인 전체 관점의 중요성

- 실환경 기준 time to first byte 150ms 달성(최적화 후)
- 파이프라인 전체의 모든 요소가 빠르진 않으나, 최초 바이트 속도가 체감 속도의 중요 요인
- 최적화 사례 및 간단한 코드 예시(동적 배치, 타임아웃 설정 등)도 구체적으로 제시됨

### 인프라(서버/네트워크)와 클라이언트 코드가 실제 응답 지연에서 차지하는 비중이 매우 큼

- 런타임(모델/엔진) 최적화 후에도, 인프라/클라이언트 코드의 비효율이 전체 지연을 다시 악화시킬 수 있음
- 예: 요청을 실제 지리와 다르게 먼 데이터센터(뉴욕→캘리포니아 등)로 전송, 매 요청마다 세션(커넥션) 재생성, 직렬 처리 등은 수백 ms를 추가로 더함
- Baseten 모델라이브러리의 간이 샘플코드는 보통 `requests`로 직렬 세션 생성/스트림(예: ffmpeg)만 제공하여 비효율
- 실제 운영에서는 멀티프로세스 풀, 세션 공유, 동시성 구조, 전문 스트리밍 프로토콜(websocket, gRPC 등) 설계 필요
- 실벤치마킹용 코드, 세션 공유, 동시 요청 등 Best Practice 를 Baseten GitHub에서 제공

### 음성 파이프라인은 '듣기-생각하기-말하기' 각 단계의 연결과 인프라 구조까지 신경써야 빠른 응답이 실현됨

- 실제 음성 파이프라인은 TTS(말하기) 뿐만 아니라 ‘듣기(음성인식)’, ‘생각하기(대화/이해/로직)’의 3단계로 구성
- 각 단계별 모델이 서로 다른 데이터센터, 다른 네트워크 상에 위치하면, hairpin(불필요한 DNS/네트워크 우회) 등으로 요청마다 10ms 추가 지연 발생 가능
- pipeline 내 여러 단계(음성 인식, chunking, interruption 등)에서 hairpin이 반복되면 누적 40~50ms가 되고, 이는 전체 SLA(서비스 수준 계약)의 10% 이상 차지함
- 파이프라인 구성, 데이터센터 선택, 네트워크 최적화 등이 최종 체감 속도에 주요 영향

### 현재 최적화 기술 외에도 맞춤 목소리, 클리닝, 음성 클로닝 등 추가 연구·실무 과제가 많음을 지적함

- Orpheus TTS 기준, 모델 자체 최적화 외에도 fine-tuning, custom voices, zero-shot voice cloning, 잡음/잡음 제거 등 아직 많은 개선 가능성 존재
- 음성 출력 단계 외에도 전체 음성 에이전트 구현 및 실서비스 적용에는 미해결 과제 다수
- 최적화 논의는 단편일 뿐, 통합 파이프라인의 글로벌 최적화가 반드시 병행되어야 함

### 발표는 추가 심화 이벤트 예고 및 소통 채널 안내로 마무리됨

- 향후 오픈소스 모델 시스템 구축/실전 사례를 다루는 Baseten 주최 Fogo to Chiao 이벤트(스테이크 제공) 소식 안내
- 질문 및 상호소통을 위한 Twitter, LinkedIn 등 개인 및 Baseten 공식 채널 소개
- 영상은 8초 일찍 끝나며, 실용적 정보 공유를 강조하며 발표 종료
