---
author: AI Makers Club
pubDatetime: 2025-11-01T23:46:02.616Z
title: "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"First LIVE Agent Build Fullstack RAG Agent for YouTube Content\"이며, 해당 제목을 한국어로 번역하면 *유튜브 콘텐츠"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content](https://www.youtube.com/shorts/fIhrCphrfL0)  
**채널명:** Cole Medin

## *유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 첫 실시간 구축* 핵심 요약

- 영상 제목은 "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"이며, 해당 제목을 한국어로 번역하면 *유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 첫 실시간 구축*임
- 제작자 Cole Medin은 본인의 유튜브 채널에 최적화된 AI 에이전트를 직접 구현하는 과정을 실시간으로 보여줌
- 목표는 AI 에이전트와 AI 코딩 모두를 지원하는 개인용 AI 코치(Chatbot) 인터페이스 완성임
- 최종적으로, 모든 유튜브 콘텐츠를 학습한 고도화된 RAG(retrieval-augmented generation) 에이전트가 챗GPT 스타일 질문 답변을 할 수 있어야 함
- 데이터 전처리(청킹) 방식으로는 최근 성능을 크게 향상시킨 "하이브리드 청킹(hybrid chunking)"을 사용, 이를 위해 Dockling을 적극 활용함
- 기존의 다양한 커스텀 청킹 방식보다 하이브리드 청킹이 탁월하다는 경험을 공유함 ("상상 이상이다"라고 표현)
- RAG 파이프라인 구축을 스트림 초반부에서 집중적으로 다룸
- 데이터 저장소로는 supabase를 도입하여, Dockling과 연동함
- 실제 에이전트 구현에는 pideantic AI 프레임워크 사용 계획도 언급함
- 전체적으로, 실시간 데모 방식으로 최신 기술들(Dockling, supabase, pideantic AI) 중심의 RAG 기반 유튜브 에이전트 개발 과정을 집중적으로 다룸

---

## 세부 요약 - 주제별 정리

### 제작자는 오랫동안 AI 에이전트 개발을 희망했고 이번에 실현함

- 채널 운영자인 Cole Medin은 개인 및 채널 발전을 위해 AI 에이전트 개발을 오랫동안 원해왔음을 강조
- 본인의 모든 유튜브 콘텐츠를 대상으로 동작하는 에이전트를 구축하겠다는 장기적인 목표를 제시
- 실시간 스트리밍을 통해 처음부터 끝까지 에이전트 개발 과정을 공개하는 방식임

### 이 에이전트는 AI 코치 기능과 AI 코딩 지원을 모두 제공함

- 단순한 Q&A 챗봇이 아니라, AI 에이전트 및 AI 개발 관련 질문에 깊이 답할 수 있는 'AI 코치' 역할의 챗 인터페이스 구현이 목표
- 사용자는 챗GPT처럼 자연스럽게 질문하고, 모든 유튜브 영상의 정보를 기반으로 맞춤형 답변을 받을 수 있음

### 고도화된 RAG 에이전트를 구축하며 유튜브 콘텐츠 전체를 학습함

- 최신 RAG(retrieval-augmented generation) 기술이 전체 파이프라인의 핵심
- 제작자의 유튜브 채널에 올라온 모든 영상 자료가 에이전트의 학습 베이스
- 단순 정보 추출형 에이전트가 아니라, 영상 전체 내용을 활용해 깊이 있고 정확한 답변이 가능한 AI가 목표

### 챗 인터페이스는 챗GPT와 유사하게 설계될 것임

- UI 측면에서 사용자는 챗GPT와 비슷한 방식으로 대화가 가능
- 기술적으로는 챗 화면 뒤에서 RAG 파이프라인이 모든 질의응답을 처리

### 데이터 전처리에는 하이브리드 청킹 방식을 도입함

- 콘텐츠 분할(청킹) 전략으로 하이브리드 청킹(hybrid chunking)을 사용
- 제작자는 기존의 커스텀 청킹 및 여러 분할 방법을 실험했으나, 하이브리드 청킹이 성능 향상을 가장 크게 이끌었음을 밝힘
- 하이브리드 청킹의 도입으로 정밀하고 효과적인 데이터 파싱 및 검색이 가능해졌음을 강조
- 직접적으로 "상상 이상이다(insane)"라고 그 효과를 표현

### Dockling 도구로 하이브리드 청킹을 구현함

- 하이브리드 청킹 전략 적용을 위해 Dockling이라는 도구를 사용
- Dockling 도입이 전체 RAG 파이프라인의 품질을 높인 주요 요인
- 영상 데이터의 효율적 전처리 및 관리에 Dockling의 실제 사용 사례를 소개

### Supabase를 데이터 저장 및 연동에 활용함

- 전처리된 유튜브 영상 데이터는 Supabase에 저장됨
- Supabase는 오픈소스 데이터베이스로, Dockling과 데이터 관리 및 조회 영역에서 긴밀하게 연동됨
- 사용자는 Supabase 기반 데이터베이스에서 정보를 신속하게 검색 및 추출할 수 있음

### pideantic AI로 실제 에이전트 구현이 이루어짐

- 챗 인터페이스의 실제 AI 코어는 pideantic AI를 기반으로 개발 예정
- pideantic AI는 질문 이해 및 맥락 인식에 강점을 가지며 RAG 파이프라인과 결합할 수 있음
- 최종적으로 pideantic AI가 Dockling 및 Supabase 기반 데이터와 상호작용하여, 사용자의 질문에 답하도록 설계

### RAG 파이프라인 구축이 본 실시간 영상의 주요 포커스임

- 실시간 스트리밍 초반부에서는 전체적으로 RAG 파이프라인 구축에 중점
- 데이터 수집(유튜브 영상) → 하이브리드 청킹(Dockling) → 데이터 저장(Supabase) → 답변 인터페이스(pideantic AI)라는, 명확한 단계별 구조로 전개
- 스트리밍 진행에 따라 각 기술의 장점, 구체 활용법, 실질 개발 과정을 차례로 설명

### 다양한 실험 결과 하이브리드 청킹 성능이 업계 최고임을 확인함

- 기존 전략: 자체 커스텀 청킹, 여러 분할 알고리즘 등 다양한 시도 경험함
- 결과적으로 하이브리드 청킹 방식이 기존 방식 대비 정보 추출 정확도와 검색 품질 모두에서 월등히 뛰어났음을 체감
- 이 경험을 바탕으로 본 영상에서 하이브리드 청킹 및 Dockling을 핵심으로 삼아 에이전트를 개발하게 됨
