---
author: AI Makers Club
pubDatetime: 2025-10-28T08:18:37.595Z
title: "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 라이브 빌드(First LIVE Agent Build Fullstack RAG Agent for YouTube Conte"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content](https://www.youtube.com/shorts/fIhrCphrfL0)  
**채널명:** Cole Medin

## *유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 라이브 빌드* 핵심 요약

- 영상 제목은 "유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 라이브 빌드(First LIVE Agent Build - Fullstack RAG Agent for YouTube Content)"임
- 진행자는 오랜 기간 자신의 채널을 위한 AI 에이전트 개발을 원했다고 밝힘
- 이번 프로젝트의 목표는 AI 에이전트와 AI 코딩 모두에서 활용 가능한 "개인 AI 코치"를 구축하는 것임
- 완성 시 사용자는 챗GPT처럼 자연어로 질문할 수 있는 챗 인터페이스를 이용 가능함
- 핵심은 진행자의 모든 유튜브 콘텐츠로 학습된 고급 RAG(Retrieval-Augmented Generation) 에이전트 구현임
- 데이터 처리에는 최근 성능 향상이 컸던 "하이브리드 청킹(hybrid chunking)" 전략 적용
- 구체적으로 dockling을 활용해 하이브리드 청킹을 적용할 예정임
- 데이터 저장은 superbase에, RAG 에이전트 구축은 pideantic AI를 사용할 계획임
- 본 라이브 스트림이 우선적으로 구축할 부분은 RAG 파이프라인임
- 다양한 커스텀 청킹 전략 실험 경험 중 하이브리드 청킹이 월등한 효과를 보여 특히 강조됨

---

## 세부 요약 - 주제별 정리

### 진행자는 자신의 유튜브 콘텐츠 전용 AI 에이전트 개발을 오랫동안 희망해 왔음을 밝힘

- 본인은 자신의 유튜브 채널과 연관된 AI 에이전트 제작을 오래 전부터 원해 왔음을 언급
- 이번 영상에서 실현되는 프로젝트에 큰 기대와 설렘을 표함

### 이번 프로젝트의 목표는 AI 코칭 및 코드 지원을 위한 개인 AI 코치를 직접 만드는 것임

- 생성할 AI 에이전트는 '개인 AI 코치' 역할을 수행하도록 설계함
- AI 코치 기능은 AI 에이전트 컨설팅 뿐만 아니라 AI 코딩 지원까지 포괄
- 사용자가 언제든지 궁금한 점을 AI에게 묻고 대화할 수 있는 인터페이스 제공이 목표

### 챗GPT와 유사한 챗 인터페이스 구현이 본 프로젝트의 사용자 경험 핵심임

- 최종 산출물은 챗GPT와 같이 자연어 질의에 응답하는 챗 인터페이스를 제공
- 사용자의 질문에 실시간으로 답변하는 경험을 직관적으로 구현하는 데 중점

### RAG(Retrieval-Augmented Generation) 에이전트는 전체 유튜브 콘텐츠로 학습됨

- 에이전트의 지식 기반은 진행자의 모든 유튜브 영상 데이터임
- 해당 데이터셋을 활용해 RAG 에이전트를 개발, 전문성과 개인화 제공 목표
- '고급 RAG 에이전트'임을 강조함으로써, 단순 정보 제공형 AI와의 차별화 의도

### 데이터 전처리에는 성능이 뛰어난 하이브리드 청킹 전략과 dockling을 결합함

- 하이브리드 청킹(hybrid chunking)이 RAG 성능을 크게 높였다고 언급
- 별도의 커스텀 청킹 방식 등 여타 방법을 다수 실험했으나, 하이브리드 청킹이 월등했다고 설명
- 데이터 청킹 작업에 dockling 도구를 특화해 활용 예정임
- "진짜로 미쳤을 정도로 효과적"이라고 직접 평가할 만큼 성능 차이가 큼

### 프로젝트의 첫 번째 단계로 전체 RAG 파이프라인 구축이 이루어짐

- 라이브 스트림 초반부에서 RAG 파이프라인 구축에 초점을 맞출 것임
- 데이터 전처리, 임베딩, 검색 및 생성 단계까지의 파이프라인을 차례대로 개발할 계획
- 전체 데이터 흐름을 투명하게 시청자에게 보여주는 것이 본 라이브의 구조임

### 기술 스택으로 dockling, superbase, pideantic AI가 순차적으로 활용될 예정임

- dockling은 데이터 청킹, superbase는 임베딩 데이터 저장소 용도로 지정
- 파이프라인 이후, pideantic AI를 이용해 실제 동작하는 에이전트 구현 진행
- 기술적 역량을 높일 수 있는 통합적 풀스택 구조임을 암시

### 다양한 데이터 청킹 방식 실험에서 하이브리드 청킹의 성능이 두드러졌음을 실사용 경험으로 강조함

- 이전까지 커스텀 청킹 등 여러 방법을 직접 테스트했음을 밝힘
- 하이브리드 청킹 적용 후, RAG의 정확도와 활용성이 대폭 향상됨
- 도구 및 전략 선택에 실제 성능 데이터 기반의 판단 강조

### 이번 라이브는 RAG 파이프라인 구축을 시작점으로 전과정을 실시간으로 시연할 계획임

- 스트림이 '단계별 실습' 중심으로 갈 것임을 알림
- 데이터 처리, 임베딩, 저장, 에이전트 구축까지 모든 과정을 소상히 설명할 것임
- 기존에 단편적으로만 다뤄지던 주제를 통합적 시각에서 보여주려 함

### 개인 맞춤형 AI 시대를 위한 실제 구축 사례를 통해 실용적 노하우를 공유하려는 목적이 나타남

- 영상 내내 실제 데이터를 기반으로 문제 해결형 AI 제작 과정을 설명
- 이미 유튜브 영상 제작 경험이 있는 사람들에게도 직접적인 적용 팁을 제공
- 미래에는 개별 데이터를 활용한 맞춤형 AI 구축이 점점 보편화될 것임을 시사함
