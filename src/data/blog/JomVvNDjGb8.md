---
author: AI Makers Club
pubDatetime: 2026-05-21T23:46:08.599Z
title: "Your Coding Agent Should Do AI System Engineering - Ben Burtenshaw, Hugging Face"
slug: JomVvNDjGb8
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Hugging Face의 Ben Burtenshaw가 \"코딩 에이전트는 AI 시스템 엔지니어링도 해야 한다\"는 주제로 발표한 내용임 코딩 에이전트가 AI의 가장 어려운 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/JomVvNDjGb8/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your Coding Agent Should Do AI System Engineering — Ben Burtenshaw, Hugging Face](https://www.youtube.com/watch?v=JomVvNDjGb8)  
**채널명:** AI Engineer

## *코딩 에이전트는 AI 시스템 엔지니어링까지 수행해야 한다* 핵심 요약

- 이 영상은 Hugging Face의 Ben Burtenshaw가 "코딩 에이전트는 AI 시스템 엔지니어링도 해야 한다"는 주제로 발표한 내용임
- 코딩 에이전트가 AI의 가장 어려운 엔지니어링 과제(시스템 엔지니어링, 머신러닝 엔지니어링)에 도전할 수 있음을 강조함
- 이러한 작업을 위해서는 표준화된 저장소(레포)와 공유 가능한 커널/스킬이 허브(Hugging Face Hub)에 존재해야 한다고 주장
- 세 개의 점진적으로 난이도가 올라가는 예시: ① 커널(특히 CUDA) 작성, ② 에이전트가 LLM 파인튜닝 실습, ③ 멀티 에이전트 기반의 자동 AI 연구 랩 구현
- 커널 최적화 사례에서는 H100 GPU용 Qwen-3 8B 커널 생성 후 94%의 속도 향상을 달성함
- 커널/스킬/모델의 표준적 공유를 위해 Hugging Face의 kernels, upskill 등 라이브러리 및 커뮤니티 중심 구조를 제안
- LLM 파인튜닝은 명령 한 줄로 Hugging Face Hub 내에서 쉽게 GPU를 활용해 진행할 수 있음을 데모
- 멀티 에이전트 AutoLab 예제에서는 논문 검색, 플래너, 워커, 리포터 등 역할 분담을 통해 자동화된 AI 연구 “랩”을 구현함
- 실험 결과 및 작업 현황은 Trackio 오픈소스 대시보드와 parquet 데이터 레이어를 통해 자유롭게 시각화·관리할 수 있음
- 전반적으로 Hugging Face Hub 기반의 오픈 인프라와 툴이 차세대 AI 엔지니어링의 토대를 제공함을 실증적으로 보여줌

---

## 세부 요약 - 주제별 정리

### 코딩 에이전트가 AI 시스템 엔지니어링도 담당하게 된 변화

- Ben Burtenshaw는 코딩 에이전트가 이제는 단순코딩을 넘어 AI의 난해한 시스템 엔지니어링과 ML 엔지니어링까지 담당할 수 있음을 강조함
- 최근 몇 개월 동안 코딩 에이전트의 사용이 마니아 층을 넘어 대중적으로 확대됨
- AI 엔지니어들은 경력과 역량을 확장하기 위해 더 하드웨어에 가까운 영역(커널 등)과 도전적인 과제에 집중해야 함
- 이를 위해서는 표준화된 저장소와 공유 가능한 툴체인이 필수적으로 필요함
- 커뮤니티 중심의 허브와 오픈 에코시스템이 중요함을 언급

### 커스텀 CUDA 커널 작성은 이제 코딩 에이전트로도 실현 가능함

- 과거에는 에이전트가 CUDA 커널 같은 복잡한 작업을 충분히 수행할 수 없다고 여겨졌으나, 최근에는 이것이 가능해졌음
- GPU mode, AMD 해커톤, kernel bench 등에서 최적화된 맞춤형 커널 생성 성공 사례 다수 발견
- 플래시어텐션(flash attention)이 커널 최적화의 대표적 성공 예시로 소개됨
- 커스텀 커널을 통해 하드웨어별 수학 연산 환경을 최대한 활용, AI 모델 추론 속도 크게 향상 가능
- 에이전트가 생성한 커널을 어떻게 배포하고, 기존 엔진에 효과적으로 통합하는지가 중요한 실무 과제임

### 커널 성능 병목은 연산이 아닌 메모리 대역폭에서 주로 발생함

- 대부분은 GPU 연산(Compute)이 병목이라고 생각하지만, 실제로는 메모리(데이터 이동)가 주 원인임
- 예시: H100 GPU는 1페타플롭/초 연산 가능하지만, 메모리 대역폭은 3TB/s에 불과해 대부분 대기 시간에 소비됨
- 커스텀 커널 제작의 핵심 목표는 연산 집약도(arithmetic intensity) 극대화 — 데이터 이동당 가능한 많은 연산 수행
- 'GPU를 따뜻하게 유지한다(keep GPUs warm)'는 것이 엔지니어링 목표임

### Hugging Face kernels 라이브러리로 커널 작성 및 배포, 호환성 관리가 쉬워짐

- Hugging Face kernels: 커널 작성자들이 각 하드웨어 및 환경별로 최적화된 커널을 TOML 파일로 메타정보와 함께 배포
- kernels는 허브에 모델처럼 표준적인 repo 형태로 등록 가능
- 각 커널이 어떤 하드웨어(예: H100, RTX 3090 등)와 CUDA/라이브러리 버전에 최적화되었는지 명확하게 표기
- 엔지니어 또는 에이전트가 커널 작성자(model publisher)처럼 쉽게 커널을 공유하고 사용할 수 있음
- 커널의 벤치마크 및 예제 스크립트 제공 — Qwen-3 8B H100 최적화 시 94% 속도 향상 수치 제시
- 다양한 환경에서 쉽게 "저가형 하드웨어 최적화" 등 실용적 이득 가능 (클라우드 리소스 비용 절감 등)
- 각 커널별로 호환성 매트릭스(compatibility matrix) 제공되어 활용성을 높임

### Skill 시스템을 통해 에이전트의 전문성과 재현성을 강화함

- skill은 파일 기반 문맥(context)으로, 커널 작성법, 예제, 벤치마킹 코드 등까지 포괄하는 설명/도구 집합
- skill은 버전 관리, 소스 관리가 용이하여 에이전트가 실제 상황에 필요한 skill 파일만 읽고 활용 가능
- 기능적으로 zero-shot에서 few-shot 태스크로 전환하여, 에이전트의 학습 및 적응력 증대
- Hugging Face 프로젝트별 맞춤 skill을 공식적으로 관리, 단순 실험 skill(boilerplate skill)은 별도 repo에 저장
- 벤치마크와 레퍼런스, 예제 등 구체적인 구현 및 적용 사례를 포함함

### upskill 라이브러리로 다양한 모델·스킬 성능을 투명하게 비교·검증 가능함

- upskill: skill별로 다양한 오픈모델(GPT-OSS, Kimmy, Haiku 등)의 성능을 자동 평가·비교하는 오픈소스 도구
- 동일 skill에 대한 각 모델의 정확도, 토큰 사용량 등을 시각화해 의사결정에 활용
- 비용절감, 리소스 효율화 등을 위해 실제 업무에서 upskill로 정기적으로 비교 평가 권장
- 언제든 반복적 평가 및 스킬·모델 최적 조합을 탐색할 수 있도록 설계됨

### LLM 파인튜닝은 이제 한 줄 명령으로 Hugging Face Hub에서 자동화 가능함

- 파인튜닝 예시: “Qwen-3 6B” 모델을 체인오브쏘트(chain of thoughts) 데이터셋으로 파인튜닝
- Claude, Onslaught 등으로도 파인튜닝 가능, 각종 자동화 스킬과 결합하여 GPU/리소스 직접 관리 필요 없음
- Hugging Face Hub에서 CLI 기반/GUI 기반 모두 지원하며, 크레딧 이벤트 등도 자주 제공함
- 파인튜닝 워크플로우는 공식 블로그 및 동료(Merve)의 발표, 실습 레포 등에서 상세 안내됨

### 멀티 에이전트 기반 AutoLab 시스템이 AI 자동 연구 랩을 실현함

- Andrej Karpathy의 Auto Research 프로젝트(2024년 5월경): nanoGPT 및 nanochat 아키텍처 기반, 에이전트가 직접 트레이닝 스크립트 개선을 제안/적용
- Burtenshaw는 이를 확장 적용, 하나의 에이전트가 아닌 멀티 에이전트 체계로 분산 운영
- 멀티 에이전트 역할: ①논문 검색(리서처), ②실험 기획(플래너), ③직접 구현(워커), ④상태 집계 및 대시보드 관리(리포터)
- HF papers, 아카이브 등 논문 데이터 자동 활용 가능
- 각 에이전트는 Git 기반 브랜치 관리, job queue, 하이퍼파라미터 조정 등의 기능 수행

### AutoLab 시스템은 다양한 오픈소스 도구와 결합해 유연하게 운영될 수 있음

- 오픈코드(OpenCode), Codex, Claude, Gastown 등 복수 에이전트 프레임워크와 연동 가능
- 에이전트별 역할(플래너/리뷰어/워커 등) 및 저장소/버킷/프롬프트는 자유롭게 커스텀 설정 가능
- 에이전트간 상태 공유·보고를 위한 템플릿 기반의 데이터 구조 및 표(Table) 생성
- 직관적 대시보드 및 개별 에이전트 일과 표시 기능 등 포함

### 실험/작업의 결과는 Trackio 오픈소스 대시보드 및 데이터 레이어로 자유롭게 시각화·관리함

- 실험 로그, 성능 지표, 경고/이벤트 등은 Trackio의 오픈 데이터(Parquet)로 저장됨
- Trackio를 통해 실시간, 시간축(Gantt chart 등) 기준 시각화 및 경고·알림(이메일) 설정 가능
- 에이전트가 대시보드를 직접 활용하지 않아도 데이터 레이어에 직접 접근해 필요대로 가공 가능
- 작업 현황, 성과, 실패·성공 케이스, 태그 등 다양한 관점에서 탐색 및 분석 용이
- Hugging Face Hub의 각종 실험 및 job 관리와 연동되어 투명한 AI 시스템 구축 가능

### 오픈 인프라와 툴(Trackio, kernels, hub 등)은 차세대 AI 엔지니어링의 핵심 토대를 제공함

- 완전히 오픈된 툴 및 데이터 구조가 에이전트의 효율적 활용과 엔지니어링 혁신의 기반이 됨
- 커뮤니티 중심의 hub(저장소/스킬/커널/실험 등 포함)가 새로운 AI 엔지니어링 워크플로우를 지원
- Hugging Face Hub는 스토리지, 트래킹, 컴퓨트의 토대를 이미 갖추고 있음
- 관련 사례/코드/블로그/레포는 본인이 X(구 트위터), Hugging Face, 공식 블로그 등에서 제공하며, 모두 오픈소스 상태임
