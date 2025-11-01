---
author: AI Makers Club
pubDatetime: 2025-11-01T08:18:54.050Z
title: "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"YouTube 콘텐츠를 위한 최초의 라이브 에이전트 구축 – 풀스택 RAG 에이전트\"임 채널 운영자 Cole Medin이 자신의 YouTube 채널에 특화된 AI 코"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content](https://www.youtube.com/shorts/fIhrCphrfL0)  
**채널명:** Cole Medin

## *YouTube 콘텐츠를 위한 최초 라이브 에이전트 구축 – 풀스택 RAG 에이전트* 핵심 요약

- 영상 제목은 "YouTube 콘텐츠를 위한 최초의 라이브 에이전트 구축 – 풀스택 RAG 에이전트"임
- 채널 운영자 Cole Medin이 자신의 YouTube 채널에 특화된 AI 코치를 만들고자 오랜 기간 원해온 프로젝트임을 설명함
- 이 에이전트는 AI 에이전트 개발과 AI 코딩 모두를 지원하는 개인용 AI 코치 역할을 하도록 설계됨
- 사용자는 챗GPT처럼 질문을 입력하는 채팅 인터페이스를 통해 에이전트와 대화할 수 있음
- 내부적으로는 Cole Medin의 모든 YouTube 콘텐츠를 학습한 고도화된 RAG(Retrieval Augmented Generation) 에이전트로 작동하게 됨
- 데이터 전처리에서 핵심이 되는 것은 "하이브리드 청킹(Hybrid Chunking)" 전략으로, Dockling 라이브러리를 활용하여 효과적 청킹을 구현함
- 크리에이터는 기존의 다양한(커스텀) 청킹 전략을 시도했으나, 하이브리드 청킹이 최근 가장 효과적이었음을 강조함
- RAG 파이프라인을 먼저 구축(YouTube 데이터 → Dockling → Superbase 저장)한 후, pideantic AI로 에이전트를 제작하는 순서를 영상에서 다룸
- 영상에서는 실시간 라이브로 파이프라인 구성 및 에이전트 구축 과정을 시연하며 진행함

## 세부 요약 - 주제별 정리

### Cole Medin이 자신의 채널을 위한 AI 코치를 만들고자 한 배경을 설명함

- Cole Medin은 YouTube 채널에 최적화된, 업로드한 모든 콘텐츠를 이해하고 응답할 수 있는 AI 에이전트 구축을 오랫동안 원해 왔음
- 이 프로젝트의 목적은 AI 에이전트 및 AI 코딩 관련 질문에 개인별 맞춤형 코칭을 제공하는 시스템을 개발하는 것임
- 해당 라이브 영상은 그 첫 시도이자, 실시간으로 함께 개발 과정을 보여주려는 의도가 반영됨

### 최종 결과 목표는 챗GPT와 유사한 챗인터페이스를 만드는 것임

- 친숙한 챗 인터페이스를 통해 사용자는 자연어로 자유롭게 질문을 입력할 수 있음
- 응답은 Cole Medin 본인의 YouTube 영상을 학습한 AI가 생성하므로, YouTube 채널 내 컨텐츠 기반의 맞춤형 답변이 가능함
- 시청자/사용자는 직접 Cole Medin에게 물어보는 것과 흡사한 경험을 할 수 있게 됨

### RAG 파이프라인 구축을 통해 YouTube 데이터를 AI가 활용할 수 있게 함

- 영상 초반부에서 가장 먼저 구축하는 작업은 "RAG(Retrieval Augmented Generation) 파이프라인"임
- 이 파이프라인은 Cole Medin의 YouTube 데이터 전체를 AI가 검색·활용 가능하도록 가공함
- Dockling이라는 도구를 사용해 데이터를 효과적으로 쪼개는 청킹(Chunking) 전략에 중점을 둠
- 최종적으로는 Superbase라는 데이터베이스에 전처리된 정보를 저장하여 활용도를 높임

### 하이브리드 청킹(Hybrid Chunking) 전략을 AI 데이터 처리에 도입함

- 최근 다양한 커스텀 청킹 전략을 테스트했으나, 하이브리드 청킹이 "RAG 게임"의 수준을 크게 올려주었다고 강조함
- 하이브리드 청킹은 여러 청킹 방식(예: 문단 기반, 문장 기반 등)을 결합함으로써 기존보다 정보의 맥락 보존과 검색 효율성이 크게 높아진다는 장점이 있음
- Dockling 라이브러리를 활용해 효과적으로 하이브리드 청킹을 구현함

### Dockling을 통해 유튜브 콘텐츠를 적합하게 전처리함

- Dockling은 텍스트 데이터를 다양한 방식으로 쪼갤 수 있는 오픈소스 라이브러리임
- RAG 파이프라인을 위해 YouTube 자막, 요약, 메타데이터 등 다양한 데이터를 Dockling으로 가공함
- 전처리된 데이터는 Superbase에 저장되어, 나중에 에이전트가 고도화된 검색 및 답변 생성을 할 수 있게 됨

### Superbase를 데이터 저장소로 선택한 이유와 역할을 설명함

- Superbase는 RAG 파이프라인의 결과물(전처리된 청크 데이터)을 저장하는 클라우드 기반 데이터베이스임
- 대용량 YouTube 데이터에 대한 빠른 조회 및 효율적 관리가 가능함
- 향후 에이전트가 실시간으로 데이터에 접근, 사용자가 던지는 질문에 관련 정보를 빠르게 검색·생성할 수 있게 함

### pideantic AI를 활용하여 맞춤형 에이전트 제작에 집중함

- RAG 파이프라인을 완성한 후, pideantic AI 프레임워크를 써서 대화형 에이전트(챗봇)를 제작함
- pideantic AI는 사용자 질문에 대한 문맥 인식, 정보 검색, 자연스러운 답변 생성에 특화된 프레임워크임
- 이를 통해 Cole Medin의 콘텐츠에 최적화된 개인 AI 코치를 실현함

### 실시간 라이브 방식으로 전체 구축 과정을 직접 시연함

- 본 영상은 ‘이론 설명’이 아니라 실제 제품 개발 과정을 실시간으로 보여주는 것이 특징임
- AI 개발 전 과정(데이터 파이프라인, 전처리, 저장, 에이전트 제작)의 핵심 단계별 구현 과정이 공개됨
- 실시간 질문 및 문제 해결 과정을 통해 시청자가 개발 프로세스를 체험할 수 있도록 구성됨
