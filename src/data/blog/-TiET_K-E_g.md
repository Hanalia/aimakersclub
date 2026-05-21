---
author: AI Makers Club
pubDatetime: 2026-05-21T08:19:22.955Z
title: "From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents - Cormac Brick, Google"
slug: -TiET_K-E_g
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**영상 제목:** *46%에서 90%로: 온디바이스 에이전트를 위해 초소형 LLMs 파인튜닝하기 (구글 Cormac Brick 발표)* 구글의 AI Edge 스택 및 초소형 LL"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/-TiET_K-E_g/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents — Cormac Brick, Google](https://www.youtube.com/watch?v=-TiET_K-E_g)  
**채널명:** AI Engineer

## *46%에서 90%로: 초소형 LLMs 온디바이스 에이전트를 위한 파인튜닝 전략* 핵심 요약

- **영상 제목:** *46%에서 90%로: 온디바이스 에이전트를 위해 초소형 LLMs 파인튜닝하기 (구글 Cormac Brick 발표)*
- 구글의 AI Edge 스택 및 초소형 LLM(SLM, TLM)을 활용한 온디바이스 인공지능 에이전트 구현 방식과 최신 사례 소개
- 10억 파라미터 미만의 'Tiny LLM'(TLM)은 앱 내에 직접 내장할 수 있어 커스터마이즈 및 프라이버시, 저지연, 오프라인 지원에 강점
- Gemma 4 기반의 '시스템 레벨 생성AI'와 앱 개발자가 별도로 내장하는 'App GenAI'의 차이와 활용 시나리오 설명
- 구글 AI Edge Gallery 앱을 통해 iOS/Android에서 LLM을 직접 실행하거나 커스텀 스킬(에이전트 기술)을 쉽게 구성 및 배포 가능
- 스킬 프레임워크에서는 프롬프트 및 스킬 디스크립션 기반으로 필요시 스킬 함수만 온디맨드로 불러와 확장성 확보
- 오픈소스 및 커뮤니티 중심 스킬 등록/공유 시스템 구축, 수십여 개 직접 스킬 구현 사례 공유(GitHub 연동)
- Lighter TLM 러ntime 및 export/inference 플로우, Java/Swift/C++ API 등 다양한 플랫폼 지원 및 오픈소스화 진행
- 예시로 Function Gemma(2.7억 파라미터, 구글 딥마인드 협업), Apple FastVLM(5억 파라미터) 등 다수의 초소형 모델 실사례 소개
- Tiny LLM의 파인튜닝을 통한 함수 호출 성공률 향상(46%→90% 이상) 및 실제 앱에 적용된 엔드투엔드 사례 상세 설명
- 개인화된 오프라인 음성 전사 앱(Eloquent) 등 실제 프로덕션 적용 예시와 함께 커스터마이즈된 소형모델 활용의 가능성과 잠재 한계 논의
- 기존 .task 파일과 새로운 Lighter TLM 포맷 비교, 다양한 플랫폼/하드웨어(CPU, GPU, NPU 등) 지원 확장 현황 언급

---

## 세부 요약 - 주제별 정리

### 초소형 LLM은 온디바이스 AI의 프라이버시, 저지연, 오프라인 사용성에서 혁신을 이룸

- 기기 내부에서 AI 연산을 할 경우, 지연시간(Latency) 개선, 개인 정보 보호(Privacy) 강화, 오프라인 사용성(Offline Use), 신뢰성(Reliability), 비용 절감(Savings) 등 여러 이점 존재
- 영상 발표자(Cormac Brick)는 구글의 AI Edge 스택의 테크 리드로, MediaPipe, Lighter TLM(LLM 런타임) 등 온디바이스 구동 자산을 설명
- Lighter T(구 TensorFlow Lite)는 크로스 프레임워크 런타임으로, CPU, GPU, NPU 등 다양한 하드웨어에서 동작 가능
- Lighter T 런타임은 안드로이드 OS에 내장되어 전 세계 27억 대 이상의 기기에서 대규모로 사용 중임
- Android뿐만 아니라 다양한 플랫폼에서 Gemma 등 최신 모델을 온디바이스로 작동시킬 수 있음

### 시스템 내장형 생성AI와 별도 내장 App GenAI는 개발자 니즈에 맞춰 선택적으로 활용될 수 있음

- 시스템 레벨 생성AI(System-level GenAI)는 Google Gemini Nano(AI Core 내장)처럼, 기기에 미리 최적화·사전 탑재되어 앱 크기 부담 없이 사용 가능
- 예시: Gemma 4 E2B/E4B 모델이 AI Core에 내장, 요약 등 API 형태로 제공
- Apple도 iOS에 자체 Intelligence 기능 도입 중(세부 내용은 비공개)
- 앱 개발자는 내장 시스템 AI 활용 VS 개별 App GenAI 직접 탑재 중 선택 가능
- 일반적인 사용 케이스에선 시스템AI가 효율적이지만, 특화/개별화가 필요한 경우 App GenAI로 커스터마이즈 구현 가능

### Google AI Edge Gallery 앱은 다양한 온디바이스 LLM 활용의 데모 및 오픈소스 학습장 역할을 함

- AI Edge Gallery 앱은 LLM 스킬 실행, AI 챗봇, 이미지 질의, 오디오 전사, 3자 모델(Quan, Phi 등) 로딩 등 다양한 기능 제공
- Gemma 4 출시 후, Android와 iOS 모두 지원하면서 AI Core가 존재할 땐 해당 리소스를 활용함
- 오픈소스(안드로이드 버전 GitHub 공개, Swift/IOS 곧 추가 예정)로, 직접 코드 분석 및 커스터마이즈 가능
- 간단한 코드 또는 프롬프트만으로 AI Skill(에이전트 기능) 구현 및 데모 가능

### 스킬 시스템은 프롬프트와 스킬 설명 결합, 온디맨드 함수 로딩 및 JavaScript UI 통합 등 강력한 확장성을 제공함

- 각 스킬은 시스템 프롬프트에 스킬 설명(Description)이 결합, 실제 함수(코드)는 필요할 때 동적으로 로딩
- 예: "구글 오피스 위치 알려줘" → 지도 스킬 자동 호출 → JS 기반 맵 UI 팝업
- JavaScript 연동으로 UI 상의 다양한 커스텀 결과 표현(예: 식당 룰렛 스킬)
- 앱 내부에서 커스텀 스킬 직접 생성 가능, 상세 가이드는 GitHub에서 제공
- Gemini CLI, Code Coach 등에서 스킬 자동 생성 및 적용 가능(내부 80여 가지 구현, ADB 연동 디버깅 등 포함)
- 커스텀 스킬은 URL을 통해 등록·공유, GitHub discussion을 통한 커뮤니티 공유 및 확산 가능

### 커뮤니티와 내부에서 이미 다양한 스킬 구현·공유가 활발하게 이루어지고 있음

- 최근 일주일 만에 80여개의 커스텀 스킬 구현(팀 내 사례) 및 외부 커뮤니티 참여 유도
- GitHub discussion 활용, 외부 개발자들과 스킬 공유 및 활용 궤도에 진입

### Lighter TLM 런타임 및 모델 export/inference 플로우는 다양한 환경에서 쉽고 빠르게 모델을 구동함

- Lighter TLM은 하나의 파일에 모델 추론에 필요한 모든 정보(토크나이저 등)를 포장, 다양한 플랫폼(C++, Java, Swift/JS soon)에서 빠르게 실행
- .task 기존 포맷보다 더 경량화되고 LLM에 특화, 오픈 개발툴과 궁합이 잘 맞음
- 안드로이드 코드 오픈, iOS 코드 및 Swift API도 곧 오픈 예정
- Gemma 4 등 최신 모델 지원은 물론, 기타 다양한 오픈소스 모델도 구동 가능

### Tiny LLM 배포 및 최적 커스터마이즈 시, 파인튜닝과 사전 정의된 모델 활용 방식이 병행됨

- Transformers 패키지에서 Tiny 모델 내보내기(Export)→ Lighter/torch 패키지 변환→ Lighter TLM으로 추론(데스크톱/모바일)
- 소형 모델은 특정 목적(예: VLM, Transcription)에 특화된 Fixed function model 또는 사전 구축된 모델이 자주 활용됨
- 소형 모델 특성상 파라미터 수가 적으면 범용성이 떨어지기 때문에, 좁고 명확한 태스크에 집중/파인튜닝 필요
- 예: 1~2억 파라미터대 Tiny LLM은 내부적으로도 Synthetic(합성) 데이터 생성 후, 태스크별 파인튜닝 과정을 거쳐 안정성 확보

### 다양한 실제 Tiny LLM 활용 사례에서 하드웨어 최적화와 성공적 엔드투엔드 테스트가 이루어짐

- 예시 1: Quant 0.6(from Hugging Face) 모델을 Lighter TLM으로 Export/테스트, GPU 등에서 동작 테스트
- 예시 2: Apple FastVLM(5억 파라미터), Qualcomm NPU(하드웨어 가속)에서 초고속 추론 성공
- 예시 3: Google DeepMind와 협업하여 Gemma 3 기반 2.7억 파라미터 Function Gemma(2023년 말 발표)
    - 용도: 기능 호출(function calling)에 특화, 소형 기기(Pixel 7 등)에서도 2,000 tokens/sec 프리필, 140 tokens/sec 디코드 달성
    - Hugging Face Space에 Function Gemma Fine-Tuning Lab 공개, 데이터 업로드/파인튜닝/실시간 테스트 지원
- 실 예시: 아웃 오브 박스 성능 46%→파인튜닝 후 8개 중 8개 기능이 90%+ 성공률, 일부 기능(2개)는 그보다 낮음

### 소형 모델의 파인튜닝은 합성 데이터와 커스텀 워크플로우를 통해 실제 앱에서 높은 신뢰도를 달성함

- 예: Function Gemma에 app function을 태스크화 하여 합성 데이터셋 제작→파인튜닝→기능 호출 성공률 대폭 향상
- 대규모 모델은 프롬프트 기반으로도 충분하지만, 소형 모델은 Tuning 없이는 한계 존재
- 성공률 상승(46%→90%+)은 실제 앱의 일정 자동 입력 등에서 입증됨
- 실제 사례 및 워크플로우를 상세 설명(데이터셋 생성→Fine-Tuning→서비스 적용)

### 커스터마이즈된 Tiny LLM은 오프라인 음성 전사 등 실제 앱에서 생산성을 크게 높임

- Eloquent 앱(현재 iOS 전용, 곧 확대 예정)은 맞춤형 ASR(음성 인식)과 텍스트 폴리싱 엔진(말버릇 필터 등)에 Tiny LLM을 적용
- Gemma 3 기반 수백만 파라미터로, 개인화 키워드/용어 대응 및 오프라인에서도 높은 품질 실현
- “Proof of life”로, 실제 프로덕션에서 파인튜닝된 Tiny LLM 체인만으로 충분히 강력한 서비스가 가능함을 시연

### 정리 및 미해결 과제: 스킬 연쇄 실행 자동화, 다양한 하드웨어 지원, 개발자 도구 현대화가 남은 과제임

- Gemma 4B 모델 기준 8개 스킬을 하나의 대화 내에서 자유롭게 호출 가능(위키→지도 등 순환 가능), 다만 단일 답변에서 다수 스킬 자동 호출은 아직 한계 존재
- Lighter TLM 포맷은 기존 .task 파일 방식 대체, LLM에 특화
- 하드웨어별(CPU, GPU, NPU) 성능 수치는 점차 공개, ‘Gemma lighter TLM model card’에서 최신 성능 데이터 확인 가능
- 오픈소스 개발자 툴, 스킬 생태계 확대, Fine-Tuning 워크플로우 고도화 등이 향후 도전 과제로 남음
