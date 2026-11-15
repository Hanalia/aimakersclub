---
author: AI Makers Club
pubDatetime: 2026-11-15T23:45:50.193Z
title: "Stop Shipping LLM Settings That Only Win on Paper - Rohan Pandey & Balaji Varadarajan, DigitalOcean"
slug: cWrYEBlWpcY
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상의 주요 주제는 최적화 에이전트(agent)를 통한 대형 언어 모델(VLM, LLM) 서빙 환경 설정(레시피) 자동 최적화임 주요 목적은 반복적인 수동 실험 없이도 최고의 VL"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/cWrYEBlWpcY/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Stop Shipping LLM Settings That Only Win on Paper - Rohan Pandey & Balaji Varadarajan, DigitalOcean](https://www.youtube.com/watch?v=cWrYEBlWpcY)  
**채널명:** AI Engineer

## *논문 수치만 우위에 있는 LLM 세팅 배포를 멈추자 - DigitalOcean의 자동화 최적화 에이전트 소개* 핵심 요약

- 영상의 주요 주제는 최적화 에이전트(agent)를 통한 대형 언어 모델(VLM, LLM) 서빙 환경 설정(레시피) 자동 최적화임
- 주요 목적은 반복적인 수동 실험 없이도 최고의 VLM 서빙 설정을 단시간 내로 찾는 것
- 에이전트는 베이지안 최적화(Bayesian optimization) 기법을 활용해 탐색 공간을 줄이고, 최적의 파라미터를 효과적으로 탐색
- 최적화 수행 도구로 Optuna를 사용하며, 이 툴이 각 실험을 평가, 개선, 반복함
- 실제 사용 예로 GPT-OSS 120B 모델과 DeepSeek R1 Distill 모델을 각각 대상으로 최적화 과정 시연
- 각각의 서빙 레시피에는 chat short, chat long, rag, batch classify 등 네 가지 실험 환경에 맞춘 파라미터가 존재
- 사용자는 시작 YAML 파일(초기 설정값), 하드웨어 정보, 실험 횟수(trials) 등을 입력해 tuner.py 스크립트로 최적화 수행
- 실험 완료 시 HTML 리포트(결과 시각화) 및 최적화된 새로운 YAML 레시피를 자동 제공
- GPT-OSS 120B 모델 실험에서 토큰 생성량이 최초 세팅 대비 17.5% 증가함
- DeepSeek R1 Distill 모델 실험에서는 토큰 처리량(token throughput)이 2배 증가, ITL 지표는 절반 가까이 감소하는 성과 달성

---

## 세부 요약 - 주제별 정리

### 최적화 에이전트의 목적은 반복적인 수작업의 비효율을 해소하는 데 있음

- 영상의 핵심 목표는 대형 언어 모델(VLM) 서빙 환경(레시피)에서 최적의 파라미터(설정값)를 빠르고 자동으로 찾는 것임
- 기존에는 각종 설정을 사람이 하나하나 실험해야 했고, 이 과정이 매우 시간 소모적이고 번거로움
- 최적화 에이전트를 사용하면, 이러한 과정을 자동화하여 개발자의 시간을 절약할 수 있음
- 에이전트가 백그라운드에서 자체적으로 실험을 반복하며 최적의 레시피에 근접함
- 궁극적으로 LLM/AI 시스템 배포 및 운영 효율성을 높이는 것이 목적

### 베이지안 최적화 기법은 반복적 탐색을 획기적으로 단축시킴

- 에이전트는 "베이지안 최적화(Bayesian Optimization, BO)"라는 수학적 모델 기반 탐색 전략을 활용함
- 베이지안 최적화란, 수많은 후보 중에서 실제로 실험해야 할 영역(탐색 공간)을 빠르게 좁혀 최적의 수치를 찾는 방법임
- 이 기법을 활용하여 실험횟수를 크게 줄이고도 고품질의 최적 레시피에 근접할 수 있음

### Optuna 도구는 탐색→평가→개선의 전체 자동화 파이프라인을 제공함

- 베이지안 최적화를 구현하고 자동화하는 도구로 Optuna를 사용
- Optuna는 각 실험(trial)별로 주어진 설정 레시피(YAML 파일)를 적용, 결과 점수 평가, 새로운 레시피 생성, 반복하는 과정을 자동 수행
- 탐색 전략 개선, 평가, 반복(New Recipe → Trial → Score → Recipe 개선→ 반복) 전체 루프를 관리함

### 모델 서빙 실험은 대화·RAG·배치 등 다양한 사용 시나리오에 맞게 구성됨

- 실험 환경(서빙 레시피)은 크게 네 가지 시나리오로 구성: chat short, chat long, rag, batch classify
- 각 시나리오별로 처리할 토큰 수 등 설정값이 달라지므로 각각 따로 실험 필요함
- 각 실험은 ISO OSL 토큰 등 특정 입력값으로 진행됨
- 이러한 시나리오 구분은 실제 서비스에서 다양한 요구 상황을 충족시키기 위함

### 사용자는 시작 설정·하드웨어·실험횟수 등만 지정하면 최적화가 자동 수행됨

- 실험 환경에서 사용자는 깃허브 모델 가중치 다운받아 드롭릿(클라우드 인스턴스)에 모델 적재
- 가상환경 활성화 후 tuner.py라는 스크립트 실행
- 필요한 파라미터:
    - study 이름(실험 구분용)
    - 시작 YAML 파일(기존 레시피)
    - 하드웨어 정보(서버 종류/사양)
    - 실험(trial) 횟수(예: 24, 9, 50 등)
- 명령 실행만으로 최적화 과정 전체가 자동으로 진행됨

### 실험 사례 1: GPT-OSS 120B 모델에서 17.5% 토큰 생성량 개선 달성

- GPT-OSS 120B 모델을 대상으로 50번의 trial(실험)을 진행
- HTML 리포트로 각 trial별 결과 확인 가능
- 최종적으로는 최적화된 YAML 레시피와 수치(대표적으로 256 등)를 자동 도출
- 이 최적화로 인한 성능 개선폭은 토큰 생성량 기준 17.5% 향상
- "good put tokens" 기준으로 측정하여 현실적인 모델 처리 효율 상승 확인

### 실험 사례 2: DeepSeek R1 Distill 모델에서 처리량 2배, ITL 절반으로 개선

- DeepSeek R1 Distill 모델에선 9번의 trial을 진행
- 제9회 실험이 최적의 결과인 것으로 판정됨
- 토큰 처리량(token throughput)이 기존보다 정확히 2배로 증가
- ITL(추정됨, Inference Time Latency 등)이 약 50%까지 감소함
- 짧은 시간에 상당한 효율화 달성

### 최적화 종료 후, 사용자는 HTML 리포트와 새로운 최적화 레시피 파일을 제공받음

- 실험 종료 시 자동으로 HTML 시각화 리포트 생성, 실행 단계별 결과를 한눈에 파악 가능
- 최적화된 YAML 파일(서빙 레시피)도 자동 생성되어 운영 시스템에 바로 적용 가능
- 리포트에는 각 시나리오별, trial별 결과(최적화 정도, 파라미터 값 등)가 구체적으로 기록됨

### 테스트는 수 시간 내 완료되며, 반복 실험 시 자동화 효과가 커짐

- 예시로 GPT-OSS 모델의 경우 실험 전체가 4~5시간, DeepSeek 모델은 약 2시간 소요
- 사람이 일일이 조합을 실험하는 것보다 획기적으로 빠르며 반복 실험 시 효율이 극대화
- trial 횟수에 따라 소요 시간과 결과 품질이 달라짐

### 전체 프로세스는 명확하고 재현 가능하며, 실제 프로덕션 환경 적용이 용이함

- 사용법이 간결하여 반복 적용 및 자동화 파이프라인 구축이 쉬움
- 생성된 최적화 레시피 및 리포트는 재사용과 쉽게 공유 가능
- 영상 시연은 실제 DigitalOcean 인프라 내에서 진행되어 실무 적용성 강조

### 결론적으로 본 솔루션은 LLM/AI 서빙 환경에서 진정 효과적인 설정을 빠르고 안정적으로 제시함

- 논문상 또는 이론상으로만 좋은 설정이 아니라, 실제 배포·운영 환경에서 재현 가능한 최적 세팅을 자동으로 탐색해 줌
- 현업 개발자 및 AI 운영 실무자의 비효율을 실질적으로 줄여 주는 혁신적 자동화 실험 도구임
