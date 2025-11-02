---
author: AI Makers Club
pubDatetime: 2025-11-02T23:46:00.594Z
title: "First LIVE Agent Build - Fullstack RAG Agent for YouTube Content"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 채널 운영자가 자신의 유튜브 콘텐츠 전반에 대해 학습된 풀스택 RAG(Retrieval-Augmented Generation) 에이전트를 실시간으로 개발하는 과정을 다룸"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [First LIVE Agent Build - Fullstack RAG Agent for YouTube Content](https://www.youtube.com/shorts/fIhrCphrfL0)  
**채널명:** Cole Medin

## *유튜브 콘텐츠를 위한 풀스택 RAG 에이전트 라이브 구축* 핵심 요약

- 본 영상은 채널 운영자가 자신의 유튜브 콘텐츠 전반에 대해 학습된 풀스택 RAG(Retrieval-Augmented Generation) 에이전트를 실시간으로 개발하는 과정을 다룸
- 제작자는 오랜 기간 본인 채널을 위한 AI 에이전트(개인 AI 코치)의 개발을 원해왔음을 강조
- AI 에이전트는 질문 답변(chatbot) 형태의 인터페이스를 갖추며, GPT와 유사하지만 백엔드에선 맞춤형 고급 RAG 에이전트가 구동됨
- 사용자의 질문에 대해, 제작자 모든 유튜브 동영상을 학습 데이터로 하여 맞춤형 답변 제공
- RAG 파이프라인 구축 과정에서 *Hybrid Chunking* 전략을 사용, 다양한 방식 시도 중 이는 확실한 효과 및 성능 개선을 보였다고 언급
- 해당 chunking 구현에는 ‘dockling’ 라이브러리가 활용되며, 최근 chunking 전략 중 가장 많은 진전을 가져왔다고 평가
- 데이터 저장 및 인덱싱에는 ‘superbase’ 서비스가 이용됨
- 전체 개발 흐름은 1)유튜브 데이터 파이프라인 구축, 2)superbase에 저장, 3)pideantic AI 기반 에이전트 구축 순
- 이 라이브 스트림의 최종 목표는 실제 작동하는 챗 인터페이스를 완성하고 시연하는 것임
- 영상 내 실시간 코딩, 전략적 선택의 이유, 실사용 예시 등이 포함되어 있음

---

## 세부 요약 - 주제별 정리

### 채널을 위한 개인 AI 코치 에이전트 개발의 필요성을 강조함

- 제작자는 자신의 유튜브 채널 콘텐츠와 역량 확장을 위해, AI 에이전트 개발에 깊은 관심을 보여옴
- 이 에이전트는 ‘AI 코치’의 역할을 하며, AI 에이전트 및 AI 코딩 전반에 걸쳐 사용자 맞춤형 조언을 제공하는 것이 목표임
- 본 라이브 스트림을 통해 실질적으로 그 생성 과정을 실시간으로 공개
- 개인화를 넘어, 채널 내 모든 콘텐츠에 대해 깊이 대응하는 에이전트를 만들고자 하는 의지 표명

### 질문-답변이 가능한 챗 인터페이스 구축이 최종 목표임을 명확히 함

- 사용자는 챗GPT와 유사하게, 입력란에 자연어로 질문할 수 있음
- 챗 인터페이스는 배경에서 고도화된 RAG 에이전트로 구동됨
- 제작자는 이러한 인터페이스로, 이용자가 영상별, 주제별, 개념별 모든 질문에 답을 얻을 수 있음을 시연 목표로 밝힘

### 자신의 유튜브 콘텐츠 전체를 데이터로 활용하는 것이 차별점임을 강조함

- 해당 RAG 에이전트는 제작자의 ‘모든 유튜브 동영상’ 텍스트를 데이터로 삼음
- 따라서 답변의 품질, 맥락성, 맞춤성이 다른 일반 LLM 기반 챗봇과 차별화됨
- 구체적으로, 각 동영상별 자막, 요약, 내용 정리를 모두 파이프라인에 포함
- 영상별 예시 질문 및 답변 시연이 라이브 스트림에서 이루어질 계획임

### 고성능 RAG 구축을 위해 Hybrid Chunking 전략을 적극 도입함

- 제작자는 다양한 chunking 방식(텍스트 블록 나누기)을 시도했다 밝힘
- 가장 효과적이었던 ‘Hybrid Chunking’ 방식을 적극 채택
- Hybrid Chunking 전략의 도입으로 RAG 결과물(검색, 인용 등)이 획기적으로 개선됨
- “실제로 이 전략 사용 후 매우 미쳤을 정도로 성능이 향상됐다”는 제작자 체감 인용 있음

### Dockling과 Superbase를 조합해 데이터 수집 및 저장을 효율적으로 처리함

- chunking 구현에 ‘dockling’ 오픈소스 라이브러리 활용
- dockling 사용 목적은 Hybrid Chunking 전략을 쉽고 안정적으로 적용하기 위함
- chunking한 데이터는 ‘superbase’에 저장하여 관리, 인덱싱 등 추가 작업을 할 수 있게 함
- superbase는 실시간 데이터베이스이자 매우 빠른 검색, 저장, 정합성 제공

### 다양한 chunking 기술 실험 후 최적 전략을 선택한 과정을 설명함

- 이전에는 custom chunking 등 다양한 텍스트 분할 전략을 제작자가 직접 구현, 실험해 옴
- 그 중 Hybrid Chunking이 압도적으로 뛰어난 결과를 보여 선택되었다고 명확히 강조
- 이를 통한 문맥 보존, 유사도 검색의 신뢰성, 검색-생성 성능이 눈에 띄게 상승
- chunking 방식의 중요성을 예시와 함께 반복해서 언급

### 프론트엔드 챗 및 백엔드 RAG 파이프라인을 하나의 개발 흐름으로 단순화하여 설명함

- ‘이 스트림은 매우 간단하게, 내 유튜브 데이터를 위해 RAG 파이프라인을 먼저 만들자’가 핵심 동선
- chunked 데이터는 superbase에 저장, 이후 pideantic AI와 연동
- 가능한 한 실시간에 가깝게 채팅형 테스트를 반복하여 완성도 높인 뒤, 챗 인터페이스 구현 계획
- 각 단계별 의사결정과 실제 코딩이 실시간(라이브)로 나열됨

### 최종 구현 목표가 ‘pideantic AI 활용 맞춤형 AI 에이전트’임을 분명히 밝힘

- 파이프라인 구성 이후, pideantic AI 기반으로 프론트엔드 에이전트 구축
- pideantic AI는 파이썬 기반 최신 오픈소스 인공지능 프레임워크(영상 내 명시)
- 데이터 흐름은 “유튜브→hybrid chunk→dockling→superbase 저장→pideantic AI” 순차적 처리
- 챗 인터페이스에서 실제 질문, 답변 이벤트 예제까지 실습 예정

### 영상은 개발, 검증, 최적화 흐름 전체를 라이브로 시연한다는 점이 특징임

- 예제, 실시간 실패-보정-성공 과정 전부 영상에 포함
- chunking, 인덱싱, search, 에이전트 연결 등 모든 과정이 ‘처음부터 끝까지’ 라이브로 진행
- 코딩 초심자도 따라할 수 있게 각 단계별 배경, 선택이유, 사용하는 라이브러리 등을 설명
- 영상 중간중간 각 함수, 파라미터, 데이터 흐름 해설과 디버깅도 포함함

### RAG/Agent 관련 실사용자들에게 실질적 도움이 되는 개발 팁과 경험이 공유됨

- “진짜로 나의 RAG 관련 역량이 이때 급격히 올라갔다” 등 자신의 체감과 경험 공유
- 다양한 chunking 실패 사례, 다른 라이브러리와의 비교성 분석 등 ‘실전 팁’ 대방출
- 유튜브 콘텐츠형 데이터에 맞는 RAG/에이전트 구축법, 최신 도구 활용법이 자세히 소개됨
