---
author: AI Makers Club
pubDatetime: 2025-07-19T23:47:00.966Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상에서는 최근 수개월간 실험해온 다양한 RAG(Retrieval-Augmented Generation) 전략 중, **Agentic RAG**와 **Knowledge Graphs"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프 결합 (무료 템플릿 소개)* 핵심 요약

- 영상에서는 최근 수개월간 실험해온 다양한 RAG(Retrieval-Augmented Generation) 전략 중, **Agentic RAG**와 **Knowledge Graphs**가 가장 효과적임을 강조함
- 발표자는 두 전략을 결합하여 질문에 맞는 정보 소스를 스스로 선택·추론하는 **고성능 AI 에이전트**를 구축함
- 벡터 DB와 관계 DB(지식 그래프) 모두에 같은 문서를 저장하여, 에이전트가 질의 의도에 따라 적절한 방식으로 정보를 검색
- **벡터 데이터베이스**로는 Neon 기반 PostgreSQL+PG Vector 확장을 사용하여, 문서를 쪼개고 임베딩 생성 과정까지 상세 소개
- **지식 그래프**는 Graffiti와 Neo4j 도구를 사용하여, 동일한 정보를 관계 지향적으로 저장함
- 질문 내용이 "특정 기업의 AI 이니셔티브"처럼 단일 정보일 경우 벡터 DB만 활용하고, "두 기업 간 관계"와 같이 복합 질의에는 지식 그래프를 참조
- 시스템 프롬프트 또는 명시적 지정에 따라, 에이전트가 둘 중 하나 혹은 모두를 동시에 활용할 수 있음
- 각 질의별로 실제 어떤 툴(데이터베이스/그래프)이 사용되었는지 결과에 명확히 표기됨
- 해당 에이전트의 전체 빌드 과정과 Cloud Code 활용, 시작 방법은 본 영상의 링크로 무료 공개된 '템플릿'을 통해 제공됨

---

## 세부 요약 - 주제별 정리

### 최근 RAG 전략 분석에서 Agentic RAG와 Knowledge Graphs가 탁월함이 드러남
- 발표자는 최근 몇 달 동안 거의 모든 RAG 활용법을 깊이 연구
- 이 중 **Agentic RAG(에이전틱 RAG)** 전략과 **Knowledge Graphs(지식 그래프)** 전략이 반복적으로 가장 뛰어난 결과를 보였음
- 영상의 목적은 이 두 전략의 장점을 하나로 결합한 강력한 AI 에이전트를 소개하는 것임

### 에이전트는 질문 의도를 해석하고 최적의 정보처리 경로로 스스로 판단
- 해당 에이전트는 사용자의 질문을 해석하여, 어디서 정보를 찾아야 가장 좋은 답을 낼지 **스스로 추론**
- 질의 의도가 벡터 검색이 적합한지, 관계형 데이터가 적합한지 판단하는 역할을 수행

### 벡터 데이터베이스는 PostgreSQL, PG Vector, Neon으로 구성함
- 벡터 데이터베이스는 **PostgreSQL**에 **PG Vector** 확장을 추가해 구현
- Neon이라는 서버리스 Postgres 플랫폼 활용
- 문서를 청크(chunking) 단위로 쪼개어 임베딩을 생성
- 실제 예시 데이터는 빅테크 기업의 AI 전략 및 기업 간 협업관계에 대한 정보로 구성됨

### 동일 문서를 지식 그래프로도 변환하여 관계 중심 탐색이 가능하게 함
- 동일한 문서를 **Graffiti**와 **Neo4j**를 사용해 Knowledge Graph(지식 그래프)로도 저장
- 이 방식 덕분에, AI 에이전트가 두 기업 간 제휴 혹은 협업 관계(예: Amazon이 Anthropics 모델 호스트 역할)에 대해 논리적으로 질의·탐색 가능

### "단일 기업 정보" 질의에는 벡터 데이터베이스만 검색함
- 구글의 AI 이니셔티브처럼 하나의 엔티티에 대한 정보를 물을 때
- 에이전트는 벡터 데이터베이스에서만 검색 실행
- 검색에 사용된 도구(벡터 DB)가 답변과 함께 명확하게 표시됨

### "기업 간 관계" 질의에는 지식 그래프를 자동 선택함
- 두 기업 간 파트너십, 협력관계 등 관계형 정보가 필요할 때
- 시스템 프롬프트 설정에 따라 에이전트는 지식 그래프 탐색으로 전환
- 실제로 툴 사용 현황이 결과에 표시되어 설명이 보다 명료해짐

### 질문에 따라 벡터와 그래프 양쪽 데이터 소스를 동시에 활용할 수 있음
- 시스템 프롬프트를 조정하거나, 사용자 요청에서 명시적으로 지정 가능
- 에이전트는 벡터와 그래프 모두를 조회해, 보다 신뢰도 높은 복합 답변을 제공
- 정보의 디테일과 다양성에서 강점 발휘

### 에이전트는 사용하는 데이터 소스와 툴을 결과에서 투명하게 공개함
- 각 답변별로 어떤 경로로 정보를 찾았는지 명백하게 알 수 있어, 신뢰성과 사용성 강화

### 무료 템플릿 제공 및 구축 방법도 영상 링크에서 자세히 안내됨
- 이 에이전트의 전체 구조와 Cloud Code를 통한 개발 노하우를 별도 영상에서 상세 공개
- 누구나 무료 템플릿 링크를 통해 직접 구축·활용 가능

### 실질적인 예시와 스택 정보까지 투명하게 제시되어 재현이 용이함
- Postgres+PG Vector+Neon, Graffiti+Neo4j 등 구체적인 기술 스택 및 도구명 촘촘히 설명
- 구현 예시와 실제 운영 방식이 모두 공개되어, 재현·응용에 바로 쓸 수 있음
