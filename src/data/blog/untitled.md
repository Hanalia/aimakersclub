---
author: AI Makers Club
pubDatetime: 2025-07-07T23:46:10.503Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿 소개)\"임 크리에이터는 최근 여러 RAG(Retrieval Augmented Generation)"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿 소개)* 핵심 요약

- 영상 제목은 "RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿 소개)"임
- 크리에이터는 최근 여러 RAG(Retrieval Augmented Generation) 전략을 시도하며, 그 중 ‘에이전틱 RAG’와 ‘지식 그래프’ 방식의 조합을 가장 효과적이라 판단함
- 두 기법을 결합한 강력한 AI 에이전트를 직접 구축했다고 설명함
- 해당 에이전트는 질문 성격을 판단해 최적의 정보 소스(벡터 DB 혹은 지식 그래프)를 자율적으로 선택하여 검색 가능함
- 벡터 데이터베이스는 PostgreSQL 기반에 PG Vector 확장, Neon의 서버리스 플랫폼을 사용해 구축
- 문서는 청크(chunk)로 분할 후 임베딩해서 벡터 DB에 저장하며, 빅테크 기업의 AI 이니셔티브, 제휴 정보 등을 담음
- 동일 문서를 Graffiti, Neo4j 기반 지식 그래프에도 저장하여 관계형 질의에 대응함
- 실제 예시로 특정 기업의 AI 이니셔티브 질의 시 벡터 DB만 활용, 기업 간 관계 질의 시 지식 그래프를 활용하는 프로세스를 시연
- 필요에 따라 에이전트가 두 데이터 소스를 모두 활용하도록 직접 요청 가능
- 본 템플릿은 무료이며, 전체 제작 및 배포 과정 영상(Cloud Code 활용 포함) 링크도 안내함

---

## 세부 요약 - 주제별 정리

### 크리에이터는 다양한 RAG 전략을 테스트해 최적 조합을 찾음

- 최근 몇 달간 거의 모든 주요 RAG(Retrieval Augmented Generation) 전략을 심도 깊게 실험함
- 실질적으로 재사용 가치가 가장 높은 두 가지 접근법으로 ‘에이전틱 RAG’와 ‘지식 그래프’ 기반을 지목
- 두 방식을 융합시키는 것이 가장 강력하다는 결론에 도달함

### 에이전틱 RAG와 지식 그래프의 결합으로 강력한 AI 에이전트를 개발함

- 개별 전략만으로도 효과가 있지만, 각각의 한계를 상호보완하며 훨씬 더 유용한 시스템을 설계할 수 있었음
- 단일 시스템 내에서 질문 유형에 따라 최적의 정보 검색 경로를 자율적으로 선정함
- 지능적 판단(Agentic Reasoning)이 가능해져 사용자는 보다 효율적으로 필요한 답변을 얻을 수 있음

### AI 에이전트는 질문 성격에 따라 최적의 정보 소스를 자동으로 선택함

- 사용자가 입력한 질문이 ‘특정 회사의 정보’이면 벡터 DB에서 답을 찾음
- 질문이 ‘두 회사 사이의 관계’와 같이 관계형 질의이면 지식 그래프에서 답을 추론함
- 정보 소스를 활용한 내역(Which tools were used)도 명확히 피드백해줌

### 벡터 데이터베이스는 PostgreSQL, PG Vector, Neon으로 구축됨

- 벡터 DB 엔진으로 PostgreSQL을 선택하고 그 위에 PG Vector 확장 기능을 탑재함
- 인프라는 Neon의 서버리스 Postgres 플랫폼을 활용해 셋업함
- 문서 데이터는 의미 단위로 쪼개(청크)서 임베딩 벡터로 전환 후 DB에 저장함

### 저장된 데이터는 빅테크 기업의 AI 및 협력 정보를 포함함

- 실험에 활용한 문서 내용은 빅테크 기업들의 AI 이니셔티브 및 파트너십 구조 등을 폭넓게 포함
- 예시 데이터로 Amazon, Google, Anthropic 등의 사례가 언급됨

### 동일 데이터는 Graffiti와 Neo4j를 활용한 지식 그래프에도 저장됨

- 기존 벡터 DB와 같은 데이터를 Graffiti, Neo4j 기반의 지식 그래프에 별도 저장
- Graph 데이터는 관계형 탐색이 필요할 때 활용됨
- 예: “Amazon은 Anthropic 모델을 어디에 호스팅하나요?” → 지식 그래프에서 Amazon-Anthropic 관계를 추적

### 질의에 따라 벡터 검색, 그래프 검색, 혹은 둘 다 병행할 수 있도록 설계됨

- 질문이 "Google의 AI 이니셔티브는?"일 경우, 에이전트는 벡터 DB만을 사용해서 검색
- 질문이 "Anthropic과 Amazon의 파트너십 관계는?"일 경우, 에이전트는 지식 그래프에서 관계를 탐색함
- 필요 시 프롬프트(시스템 프롬프트 조정 또는 명시적 지시)를 통해 두 데이터 소스를 동시에 활용하도록 지정할 수 있음

### 실제 작동 시나리오를 시연으로 구체적으로 보여줌

- 데모로, 질문 유형에 따라 내부적으로 벡터 DB와 그래프 DB 중 무엇을 썼는지가 결과와 함께 표기됨
- 에이전트의 선택적 경로 탐색, 두 도구의 장단점을 적절히 활용하는 과정을 실시간으로 보여줌
- 각 예시에서 ‘tools used’라는 기록을 통해 어떤 방법론이 적용됐는지 확인 가능

### 사용자는 프롬프트 조정으로 에이전트의 검색 경로를 제어할 수 있음

- 시스템 프롬프트 내 조건을 조절해 에이전트의 정보 탐색 전략(벡터, 그래프, 둘 다)을 전환 가능
- 또는 사용자가 직접 명령문에 “벡터 DB와 그래프를 모두 사용해 답해달라”라고 지시할 수 있음

### 무료 템플릿으로 배포하며 전체 제작 과정은 별도 영상으로 안내함

- 현 에이전트 구현체는 무료 템플릿으로 배포 중임
- 직접 사용 및 운용법, Cloud Code를 활용한 개발 방법 등은 본문 링크의 전체 영상에서 단계별로 안내됨
- 최종 목표는 누구나 쉽게 해당 Agentic RAG+Knowledge Graph 시스템을 셋업하도록 돕는 것임
