---
author: AI Makers Club
pubDatetime: 2026-05-05T23:45:45.640Z
title: "Accelerating AI on Edge - Chintan Parikh and Weiyi Wang, Google DeepMind"
slug: Lm8BLHkxiAo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 발표는 Google DeepMind의 Chintan Parikh가 Google AI Edge 팀의 제품인 Light RT와 Gemma 최신 모델의 엣지(Edge) 디바이스 적용"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Lm8BLHkxiAo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Accelerating AI on Edge — Chintan Parikh and Weiyi Wang, Google DeepMind](https://www.youtube.com/watch?v=Lm8BLHkxiAo)  
**채널명:** AI Engineer

## *엣지에서 AI 가속화 — Google DeepMind의 Chintan Parikh와 Weiyi Wang* 핵심 요약

- 본 발표는 Google DeepMind의 Chintan Parikh가 Google AI Edge 팀의 제품인 Light RT와 Gemma 최신 모델의 엣지(Edge) 디바이스 적용을 중심으로 진행함
- 엣지 AI의 주요 이점으로는 지연시간 감소, 데이터 프라이버시 보장, 오프라인/약한 연결 환경 지원, 클라우드 대비 비용 절감의 장점을 강조함
- 새로운 Gemma 4 모델, 특히 2B/4B가 엣지 기기 탑재에 최적화되어 출시됨(필요 RAM: 2B 1~2GB, 4B 더 고사양)
- Gemma 4 모델은 툴(함수) 호출, 구조적 JSON 출력, 체인 오브 쏘트(chain-of-thought) 추론, 하드웨어 최적화 등 에이전트 활용에 필수적인 다양한 기능 내장
- 데모용 갤러리 앱에서 실시간 요약, 사진 기반 음악 추천, 음성·로컬 데이터 기반 개인화 분석 등 다양한 엣지 기반 AI 기능 시연
- Light RT는 TensorFlow Lite 기반, 여러 프레임워크(PyTorch, JAX 등)에서 모델 포팅 및 최적화 가능한 통합 on-device 프레임워크로, 10만+ 앱과 수십억 단말에 이미 채택 중임
- Light RT 및 Gemma 모델은 Android, iOS, Mac, Linux, Windows, Web, IoT(Raspberry Pi 등) 전반의 크로스 플랫폼 지원이 강점임
- NPU 연산시 3~13배 이상의 가속 성능, 기타 모바일·데스크탑·IoT에서도 경쟁 모델 대비 뛰어난 추론 속도(모바일에서 LLaMA 대비 35배 빠름) 입증
- GitHub/Hugging Face 오픈소스, 샘플코드, CLI 도구 등 다양한 배포/벤치마킹/확장 지원 환경이 마련됨
- 질의응답서 실사용(보안 카메라, 분산 에이전트, 오디오-텍스트 앱) 사례 및 커스텀 오픈모델 적용 범위 논의

---

## 세부 요약 - 주제별 정리

### 발표자는 Light RT와 Gemma Edge 모델을 소개하며 엣지 AI 배포의 전반적인 아젠다를 설명함

- Chintan Parikh(제품 매니저, Google AI Edge, Light RT 담당)가 세션 진행
- 이번 발표는 새롭게 공개된 Gemma 4 Edge 모델(2B/4B), 실제 데모, 기술 스택, 크로스플랫폼 지원에 중점을 둠
- AI Engineer Conference에서 참가자 대상 실시간 피드백 및 현장 Q&A 병행 예정 언급
- 갤러리 앱, 오픈소스, 샘플코드, 다양한 플랫폼 벤치마킹 등 실전 개발자 중심 내용임을 강조

### Gemma 4 Edge 모델은 '온디바이스 지능 및 추론'을 위한 맞춤형 설계임

- Gemma 2B: 1~2GB RAM으로 동작, 소형 엣지 디바이스(스마트폰, IoT) 최적화
- Gemma 4B: 더 높은 리소스 사용, 노트북·대형 엣지 플랫폼 권장
- 모델은 이미 Hugging Face(아파치 2.0 라이선스)에서 다운로드 가능
- 270M 파라미터 등 초소형 모델 필요시도 별도 라인업 제공(튜닝 가능)
- Gemma 4의 진화: 단순 챗봇에서 자율적 에이전트/추론 기반 복합 역할로 확대

### 엣지 배포의 4대 강점: 지연 시간·프라이버시·오프라인·비용에서 두각을 나타냄

- 실시간 카메라 필터, 영상통화 등은 저지연(실시간성)이 핵심 → 온디바이스 추론에 적합
- 개인정보·민감 정보의 앱 내 처리로 데이터 외부 노출 최소화, 하드 보안 보장
- 네트워크가 약하거나 데이터 연결 불량 환경에서도 동작(오프라인 지원)
- 토큰 과금 등 클라우드 비용 부담 없이 하이브리드 또는 로컬 우선 처리 가능
- 실제 여러 AI Engineer 행사 참가자들이 토큰 비용 문제 토로, 온디바이스가 솔루션 될 수 있음을 언급

### Gemma 4 Edge 모델은 함수 호출, 구조 출력, 체인 오브 쏘트 등 고급 AI 기능을 내장함

- 함수(Function) 및 툴(도구) 호출: 로컬 API, 외부 서비스와 직접 상호작용 가능
- 구조적 JSON 출력: 프롬프트 조작 없이도 네이티브로 구조화된 데이터 생성
- 체인 오브 쏘트(chain of thought, THINKING MODE): 모델의 사고 과정 가시화(갤러리 앱에서 확인)
- 하드웨어별 최적화로 여러 플랫폼에 분산/유연 배포 용이
- 실제 코드 예시 및 샘플 앱 지원(Oepn Source, Hugging Face에 코드/모델/튜토리얼 큐알코드 제공)

### 갤러리 앱은 엣지 AI 기능을 실시간으로 개발·실험할 수 있는 플레이그라운드임

- 실기기에서 돌아가는 구글의 공식 데모/테스트 앱
- 제공 기능: 에이전트 스킬(예. 위키피디아 질의 응답), 음성 요약, 이미지 기반 질문, 오디오 생성 등
- 예시1: 위키피디아 질의–AI가 백과사전 지식 응답
- 예시2: 수면일지–사용자 입력 및 지난 7일 무드 트렌드 분석(로컬 데이터 분석 및 시각화)
- 예시3: 아침 식사 사진→유사 분위기의 음악 자동 추천(실시간 이미지·음악 생성)
- 예시4: 지역 동물 소리 분류/생성, 복합 워크플로우 및 하드웨어 가속기 지정(CPU/GPU/NPU)
- 앱 내에서 사용자 맞춤 스킬 개발 문서, 오픈소스 샘플 공개(GitHub 연동)

### 배포 프레임워크 Light RT는 다양한 프레임워크 통합 및 여러 OS에 기본 최적화되어 있음

- TensorFlow Lite 기반, PyTorch/JAX 등 다양한 프레임워크에서 모델 포팅 가능(모델 변환 경로 제공)
- 10만개 이상의 앱에 적용, 수십억 단말·일일 수억 추론(i.e. interpreter invocation) 신뢰성 강조
- TF Lite 포맷 활용: Android/iOS/Mac/Linux/Windows/Web/IoT(Raspberry Pi 등) 전방위 지원
- 아키텍처: bring your own model(모델 직접 변환·적용), quantization 지원, LLM/일반 모델 분기
- Model Explorer, AI Edge Portal 등 벤치마킹·그래프 분석 툴로 최적 합성 경로 제공

### 다양한 하드웨어(모바일/IoT/데스크탑/웹)에 맞춘 성능 튜닝 및 벤치마킹 도구를 제공함

- CPU/GPU 기본 지원, NPU(퀄컴/미디어텍 등)와 연동하여 3~13배 속도향상 실현
- NPU 가속은 ASR, TTS, AR/VR 등 실시간성·에너지 효율성 요구 앱에 '게임 체인저'로 작용 가능
- AI Edge Portal: 다양한 Android 단말 신속 대량 배포 및 안정성 체크 가능(cloud-based benchmarking)
- 모델 변환/튜닝 도구, ahead-of-time/on-device 컴파일 지원, 최상 성능 확보 가이드 존재

### 실제 데모에서는 크로스플랫폼 로봇, 모바일 등 다양한 OTG 활용 사례를 시연함

- Raspberry Pi 기반 소형 로봇에 Gemma Edge 모델을 올려 실시간 명령/액션(안테나 움직임/LED 점등) 시연
- Android, iOS, Linux, 데스크탑 등에서 동일 모델 직접 실행(호환성 검증)
- CLI 도구(Python 바인딩 포함), GitHub 오픈소스 앱 소개

### Gemma Edge, Light RT 환경에서 구체적 성능 수치 및 경쟁력 지표가 명확히 제시됨

- NPU 활용시 최대 13배 성능, iOS 기준 56 tokens/sec 속도 달성
- 모바일에서 llama 대비 최대 35배, IoT에서 3배, 데스크탑에도 동급 이상 성능 입증
- Hugging Face 페이지에 각 플랫폼별 수치, quantization 결과 등 상세 정보 제공
- 직접 모델/앱 다운로드–벤치마크–튜닝 가능(성능 투명성 높음)

### 질의응답에서는 실제 적용, 확장 가능성, 오픈모델 사용성 등이 논의됨

- 사례1: 보안 카메라 얼굴 인식, 자녀 등 특정 인물 귀가 식별–클라우드 대신 로컬에서 비용 절감 및 프라이버시 보장
    - 예: iPhone, Pixel의 face unlock은 이미 on-device에서 구동, 동일 프레임워크 사용
- 사례2: 카메라 연결–몇 초 간격의 얼굴 인식 프레임 분석 및 스마트 메시지 발송 등 가능
- 사례3: Raspberry Pi 기반 카메라, 로컬 분산 처리(클래스파이어/추론/상위 에이전트 조합)
    - 동일 네트워크 상 분산화(복수 노드, event trigger, higher agent 연결 등)
- 사례4: 기존 모바일 앱(API 기반 오디오-텍스트 변환) – Gemma E4 등 오픈 웨이트 모델로 대체 가능 여부 및 변환 경로 안내
- Gemma 이외에도 Hugging Face에서 다양한 open weight 모델 지원, 직접 변환 및 적용 가능

### 결론적으로 Light RT와 Gemma Edge 모델은 엣지 AI 개발과 배포를 위한 개방적이고 고성능 프레임워크임을 재확인함

- 여러 프레임워크/모델의 손쉬운 포팅, 다양한 하드웨어 지원으로 진입 장벽을 낮춤
- 실시간·개인화·사생활 보호 요구의 신속 응답을 엣지 기기에서 완결 가능
- 오픈소스(SDK, 샘플코드, 벤치마크 툴), Hugging Face/GitHub 연동으로 실험–실 서비스로의 확장 경로를 명확히 제시
- 갤러리 앱으로 개발자들이 직접 다양한 AI 기반 경험을 만들어 볼 수 있도록 장려
