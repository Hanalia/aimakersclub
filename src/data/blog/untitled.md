---
author: AI Makers Club
pubDatetime: 2025-07-03T08:20:07.245Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 AI 기반 정보 검색 시스템에서 최근 주목받고 있는 'Agentic RAG'와 '지식 그래프' 전략을 실제로 결합한 RAG 2.0 에이전트 개발 과정을 소개함 제작자는 지난"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프 통합(무료 템플릿 공개)* 핵심 요약

- 영상은 AI 기반 정보 검색 시스템에서 최근 주목받고 있는 'Agentic RAG'와 '지식 그래프' 전략을 실제로 결합한 RAG 2.0 에이전트 개발 과정을 소개함
- 제작자는 지난 몇 개월간 다양한 RAG(검색 증강 생성) 전략을 검토해왔으며, 그 중 Agentic RAG와 Knowledge Graphs가 가장 우수했다고 밝힘
- 해당 에이전트는 질문의 유형에 따라, 가장 적합한 데이터베이스(벡터 DB/지식그래프)에서 답변을 찾도록 논리적으로 추론할 수 있음
- 벡터 데이터베이스로는 PostgreSQL의 PG Vector 확장 기능을 네온(Neon)이라는 서버리스 플랫폼과 함께 사용. 문서를 청킹하여 임베딩 데이터를 생성해 저장함
- 문서에는 대표적인 빅테크 기업의 AI 동향, 이들의 협력 관계 등 다차원적 정보가 담겨 있음
- 같은 문서를 Graffiti와 Neoforj를 통해 지식 그래프 형태로도 저장하여, 기업 간 관계 등의 질의에 대응 가능하게 함
- 에이전트는 단순 사실(예: "구글의 AI 혁신 동향")은 벡터 DB를 검색하고, 관계 기반 질문(예: "Amazon과의 협력 관계")에는 지식 그래프를 검색함
- 필요에 따라 시스템 프롬프트를 수정하거나, 명시적으로 둘 다 사용하도록 요구하면 에이전트는 두 소스를 모두 질의해 보다 정확한 답변을 제공함
- 영상 하단에는 Cloud Code를 활용한 구체적인 구축 과정과 무료 템플릿 & 가이드가 담긴 전체 영상 링크가 제공됨

---

## 세부 요약 - 주제별 정리

### 제작자는 다수의 RAG 전략을 분석한 결과 Agentic RAG와 Knowledge Graphs가 가장 뛰어나다고 평가함

- 최근 몇 달간 거의 모든 종류의 RAG(Retrieval-Augmented Generation, 검색 증강 생성) 전략을 깊게 연구함
- 여러 방법을 시도해 본 끝에 ‘Agentic RAG’와 ‘Knowledge Graphs’의 조합이 가장 반복해서 마음에 들었음
- 이 두 방법이 각각 장점이 있으며, 시너지가 크다는 판단 하에 실제로 병합하여 사용함

### 에이전트는 질문의 특성에 따라 논리적으로 정보 탐색 경로를 스스로 결정함

- 사용자가 질문을 입력하면, 에이전트는 어디서(어떤 데이터베이스) 정보를 찾는 것이 가장 좋은 답에 이를지 ‘추론’함
- 예를 들어, 특정 회사의 AI 동향과 같이 단일 대상 정보면 벡터 데이터베이스 쿼리로 충분하다고 판단
- 반면, 회사 간 관계 같은 복잡한 질문에는 지식 그래프 기반 탐색을 선택함

### 벡터 데이터베이스는 PostgreSQL와 PG Vector, 그리고 서버리스 플랫폼 Neon을 활용해 구축됨

- 벡터 데이터베이스로는 PostgreSQL + PG Vector 확장 기능 활용
- 데이터 저장 플랫폼은 Neon이라는 최신 서버리스(Postgres) 서비스를 사용
- 대량의 문서는 ‘청킹(chunking)’ 과정을 거쳐 작은 단위로 분해되어 임베딩(벡터화)됨
- 이렇게 임베딩된 데이터가 벡터 데이터베이스 내에 저장됨

### 저장되는 문서에는 빅테크 기업의 AI 동향과 제휴 관계 등 다양한 정보가 포함됨

- 입력되는 문서에는 많은 양의 정보가 담겨 있음
    - 예) 대형 IT 기업별 AI 이니셔티브, 그들의 상호 파트너십 등
- 다양한 유형의 질문에 대해 정보 출처를 다각화하기 위한 설계임

### 동일한 문서를 Graffiti와 Neoforj를 활용, 지식 그래프 형태로도 구축함

- 같은 데이터 소스를 별도로 지식 그래프 형태로 저장
- Graffiti 플랫폼과 Neoforj(Neo4j로 추정)를 사용하여 관계형 데이터로 전환
- 지식 그래프는 기업 간 관계, 예를 들어 “Amazon은 Anthropic의 AI 모델을 호스팅한다”와 같은 복합 관계 질의에 대응하기 좋음

### 에이전트는 사용 도구와 그 과정을 투명하게 표시함

- 사용자가 질의하면, 에이전트 결과창에서 해당 질의에 사용한 도구(예: ‘vector database’ 또는 ‘graph search’)를 별도 표기함
- 예시1: “구글의 AI 이니셔티브는?” → 벡터 DB만 검색, 이 사실도 화면에 안내
- 예시2: “Amazon과 Anthropic의 관계는?” → 지식 그래프 쿼리를 수행, 해당 도구가 사용됨을 명시

### 필요시 시스템 프롬프트 수정 또는 명시적 요구로 두 데이터 소스 통합 검색도 가능함

- 시스템 프롬프트를 조정하거나, 사용자가 명확하게 “벡터 DB와 그래프를 모두 사용하세요”라고 요구하면 양쪽 소스를 동시 탐색
- 이를 통해 더 포괄적이고 신뢰도 높은 답변 생성 가능

### 에이전트 구축, 운영에 Cloud Code 활용 및 무료 템플릿 제공 정보 안내

- 에이전트 개발 과정에 ‘Cloud Code’ 도구를 적극 활용하여 개발 효율성과 운영 편의성 확보
- 본 영상에는 요약만 담았으며, 실제 구축 방법 및 템플릿, 그리고 상세 튜토리얼 영상은 링크를 확인하도록 유도
- 영상 내 무료 템플릿이 제공되어, 누구나 직접 동일한 방식의 AI 에이전트를 만들고 작동시킬 수 있도록 안내함
