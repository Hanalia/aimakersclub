---
author: AI Makers Club
pubDatetime: 2025-11-04T08:19:47.382Z
title: "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상의 주제는 크리에이터 자신의 유튜브 채널 전체 영상을 학습한 RAG(재생성 검색) 에이전트를 실시간으로 처음 빌드하는 과정임 목표는 AI 에이전트와 AI 코딩 모두에 대한 개인"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content](https://www.youtube.com/shorts/fIhrCphrfL0)  
**채널명:** Cole Medin

## *유튜브 콘텐츠를 위한 최초의 실시간 전체 스택 RAG 에이전트 빌드* 핵심 요약

- 영상의 주제는 크리에이터 자신의 유튜브 채널 전체 영상을 학습한 RAG(재생성 검색) 에이전트를 실시간으로 처음 빌드하는 과정임
- 목표는 AI 에이전트와 AI 코딩 모두에 대한 개인 맞춤 AI 코치를 만드는 것임
- 완성된 결과물은 사용자가 챗GPT처럼 질문할 수 있는 채팅 인터페이스가 될 예정임
- 백엔드에서는 유튜브 콘텐츠에 최적화된 고급 RAG 에이전트가 작동
- 데이터 전처리를 위해 ‘하이브리드 청킹(Hybrid Chunking)’ 기법을 사용하며, 이 전략이 최근 RAG 품질을 비약적으로 향상시켰다고 강조
- Dockling 툴을 활용하여 하이브리드 청킹을 구현, 이전에 시도했던 다른(커스텀) 청킹 전략보다 훨씬 뛰어나다고 평가
- RAG 파이프라인 구축이 라이브 스트림 초반에 이루어지며, 이 과정에서 데이터는 Superbase에 저장됨
- 에이전트 빌드는 pideantic AI를 사용하여 진행
- 주요 툴: Dockling, Superbase, pideantic AI 등
- 영상은 전체적으로 “우리 유튜브 데이터를 어떻게 RAG 기반 AI에 활용하는지” 처음부터 끝까지 전 과정을 보여주는 구조임

---

## 세부 요약 - 주제별 정리

### 채널 전체 콘텐츠로 RAG 기반 개인 AI 코치를 구축하는 것이 영상의 핵심 목표임

- 영상 제작자인 Cole Medin은 오랫동안 자신의 유튜브 채널을 위한 AI 에이전트 개발을 원했다고 밝힘
- 목표는 AI 에이전트와 AI 코딩 모두에 대해 조언할 수 있는 개인 맞춤 AI 코치를 제작하는 것임
- 이러한 에이전트는 사용자가 질문을 던지면 즉각적으로 답변함 (ex: 챗GPT와 유사한 대화형 UI 예정)

### 최종 산출물은 챗GPT 유사한 인터페이스를 가진, 유튜브 콘텐츠로 학습된 고급 RAG 에이전트임

- 완성된 결과는 챗 인터페이스로 제공되며, 사용자는 자연어로 질의-응답이 가능함
- 인터페이스는 친숙한 챗봇 UI를 지향
- 겉모습은 단순 챗봇이지만, 실제로는 “채널 전체 동영상 데이터”가 내부적으로 학습된 고급 RAG 에이전트가 백엔드에서 답변 생성

### 데이터 전처리를 위해 최근 성능이 가장 뛰어난 ‘하이브리드 청킹’ 기법을 선택함

- RAG 시스템 품질을 좌우하는 핵심이 ‘청킹(chucking, 데이터 분할)’임
- Cole Medin은 여러 종류의 청킹(커스텀 방식까지 포함)을 실험해 왔다고 설명
- 가장 성능이 뛰어난 방법으로 ‘하이브리드 청킹(hybrid chunking)’을 선정
- 하이브리드 청킹 적용 후 RAG 품질이 급격히 향상되었다며 “실제로 미쳤다(insane)”고 강조함
- 청킹 과정은 영상 초반부에 직접 구현해 보임

### Dockling 툴을 활용해 하이브리드 청킹을 실무에 적용함

- 하이브리드 청킹 구현을 위해 ‘Dockling’이라는 오픈소스 툴을 사용
- 기존에 사용하던 다양한(Dockling 이외의) 커스텀 청킹 전략들은 Dockling 기반의 하이브리드 청킹만큼 효과적이지 못했다는 경험 공유
- Dockling이 하이브리드 청킹을 손쉽게 적용해주는 점을 높이 평가함

### 파이프라인 구축 단계에서 데이터는 Superbase에 저장됨

- 전처리한 유튜브 데이터는 Superbase 데이터베이스에 저장
- Superbase는 RAG 파이프라인의 데이터 저장소로 사용됨
- 전체 RAG 데이터 흐름: 유튜브 데이터 → 하이브리드 청킹 → Dockling → Superbase 저장

### RAG 기반 에이전트 빌드에는 pideantic AI가 활용됨

- RAG 파이프라인이 완성된 후 pideantic AI를 통해 실제 에이전트 로직을 구현할 계획이라고 설명
- pideantic AI를 에이전트 구조 내에서 활용하는 방법을 간단히 언급
- 최종적으로 RAG 파이프라인+에이전트 빌드를 모두 연동할 예정임

### 영상의 전체 구조는 ‘유튜브 RAG 파이프라인 구축 → 에이전트 빌드’의 단순하면서도 일관된 흐름임

- 라이브 스트리밍 방식으로 전체 개발 과정을 단계별로 안내하는 형식
- 초반부: 유튜브 데이터 RAG 파이프라인 설계 및 청킹 전처리(하이브리드 청킹/Dockling/Superbase)
- 중반 이후: pideantic AI를 이용한 실제 에이전트 개발 및 챗 인터페이스 구현
- 핵심은 “내 유튜브 콘텐츠로 실질적이고 직관적인 AI 코치를 만든다”는 점임

### 다양한 AI 및 개발 도구(Dockling, Superbase, pideantic AI)를 실전 수준으로 조합하여 활용함

- 각 툴의 목적 및 연결 고리를 명확히 언급
- Dockling: 청킹 자동화 및 고도화
- Superbase: 대용량 유튜브 데이터 저장 및 관리
- pideantic AI: RAG 기반 AI 에이전트의 핵심 엔진

### 이전의 다양한 청킹(데이터 분할) 전략과의 비교를 통해 새로운 방법의 우수성을 직접 경험으로 강조함

- 과거에는 여러 커스텀 청킹 방식을 실험했으나 성능에 한계가 있었음
- 하이브리드 청킹(특히 Dockling 적용 후)은 기존 방법과 비교해 실질적 품질 차이가 크다고 언급
- 최근 실험에서 하이브리드 청킹이 RAG의 정확도와 일관성을 크게 끌어올렸다 설명

### 이 과정 전체는 ‘나만의 유튜브 콘텐츠 기반 AI 코치 만들기’라는 실전 프로젝트로 전개됨

- 영상은 설명 중심이 아니라 실제 라이브 코딩, 직접 구축 과정을 시연하는 방식으로 전개됨
- 영상 내 모든 예시는 실제 개설자의 유튜브 동영상 데이터로 진행됨
- 실전에서 AI/ML 파이프라인을 단계적으로 다루는 점이 특징임
