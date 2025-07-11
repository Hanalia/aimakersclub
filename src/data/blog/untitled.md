---
author: AI Makers Club
pubDatetime: 2025-07-11T23:47:39.095Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 최신 RAG(Retrieval-Augmented Generation) 전략들을 탐구한 경험을 바탕으로, 에이전틱 RAG(Agentic RAG)와 지식 그래프(Knowledg"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿)* 핵심 요약

- 영상은 최신 RAG(Retrieval-Augmented Generation) 전략들을 탐구한 경험을 바탕으로, 에이전틱 RAG(Agentic RAG)와 지식 그래프(Knowledge Graph)의 결합이 매우 강력함을 강조함
- 직접 구축한 AI 에이전트가 두 방식을 통합하여, 질문의 유형에 따라 자동으로 정보 소스를 선별해 답을 제시함
- 벡터 데이터베이스(Postgres + PG vector, 네온(Neon) 서버리스 플랫폼 활용)와 지식 그래프(Graffiti, Neo4j 사용) 모두에 동일 문서를 서로 다른 형태로 저장함
- 문서는 빅테크 기업과 AI 이니셔티브, 협력 관계 등 방대한 정보를 포함함
- 에이전트는 단일 기업에 대한 AI 이니셔티브처럼 벡터 기반으로 검색할 질문엔 벡터 DB만 활용
- 기업 간 관계 등 관계성 정보를 묻는 질문에선 지식 그래프만 검색
- 사용자가 원할 경우 벡터 DB와 그래프 DB를 모두 활용하도록 명령할 수도 있음(시스템 프롬프트 혹은 명시적 요청)
- 각 검색 결과는 어느 도구(벡터 검색/그래프 검색)가 사용됐는지 명확히 표시함
- 해당 AI 에이전트의 무료 템플릿 제공 및 상세 구축법은 전체 영상 링크에서 안내
- 개발 과정과 실사용 데모, 클라우드 코드(Cloud Code) 기반 개발 지원 정보도 추가 제공

---

## 세부 요약 - 주제별 정리

### RAG 전략을 오랜 기간 실험한 끝에 에이전틱 RAG와 지식 그래프의 결합이 가장 인상적임이 확인됨

- 몇 달간 거의 모든 RAG 전략과 방식을 깊게 실험함
- 지속적으로 되돌아오는 두 가지 방식이 Agentic Rag와 Knowledge Graphs임을 강조
- 이 두 방식을 결합해 강력한 AI 에이전트를 직접 구축함
- 새롭게 등장한 결합형 RAG(이 영상을 통해 RAG 2.0으로 명명)

### 에이전트는 질문의 특성을 스스로 판단해 가장 적합한 정보원을 선택함

- 에이전트는 “질문에 가장 잘 답할 수 있는 곳이 어디인지” 스스로 판단함
- 질문 유형에 따라, 벡터 데이터베이스 또는 지식 그래프 중 한쪽 또는 양쪽을 선택하여 검색 실행
- 동적 Reasoning 기반으로 정보 탐색 경로를 결정하는 ‘에이전틱’ 접근법을 강조

### 벡터 데이터베이스는 Postgres와 PG vector, 그리고 Neon 서버리스 플랫폼을 조합해 구축됨

- 벡터 DB로 Postgres 사용, 벡터 확장(Plugin)인 PG vector를 적용
- Postgres는 Neon이라는 서버리스 데이터베이스 플랫폼 상에서 운영됨
- 문서는 일정 크기로 청크(Chunk) 단위로 분할되어 저장됨
- 각 청크에는 임베딩(Embedding)이 생성되어 벡터 DB에 저장됨
- 문서 내용은 빅테크 기업의 AI 전략, 이니셔티브, 상호 협력 등

### 동일 문서를 지식 그래프(Graffiti, Neo4j 이용)에 관계형 데이터로 저장하여, 다양한 질의가 가능해짐

- 같은 문서 데이터셋을 Graffiti와 Neo4j를 이용해 Knowledge Graph로 구성
- 지식 그래프는 정보의 구조적/관계적 저장 및 검색에 적합함
- 예시: “Amazon은 어디에서 Anthropic의 모델을 호스팅하나?”와 같이 기업 간 관계 쿼리가 가능함
- 벡터 DB 대비, 복잡한 관계 추론에 최적화된 방식임

### 단일 기업에 관한 질문엔 에이전트가 벡터 데이터베이스만 검색하도록 스스로 판단함

- 예시 질문:“Google의 AI 이니셔티브는 무엇인가?”
- 에이전트는 질문을 분석한 후 벡터 DB로만 이동해 검색 수행
- 검색 결과 반환 시, 사용 도구(벡터 DB) 및 결과를 명확히 표기함

### 기업 관계 등 구조적 정보가 필요한 질문엔 지식 그래프만 활용함

- 예시 질문: “Amazon과 Anthropic의 관계는?”
- 에이전트는 관계 탐색 및 추론이 필요한 질문임을 파악, Knowledge Graph만 활용함
- 해당 시점 검색 결과 역시 어떤 도구(그래프 DB)가 쓰였는지 명확히 안내함

### 사용자는 필요에 따라 두 데이터를 모두 동시에 활용하도록 명령할 수 있음

- 시스템 프롬프트 수정 또는 명시 요청을 통해 벡터/그래프 DB 동시 검색 실행 가능
- “두 소스를 모두 활용해 달라”는 명확한 요구에 따라 에이전트가 양쪽 모두에서 검색
- 더 종합적이고 신뢰할 만한 결과를 얻기 위함

### 실사용 데모를 통해 각각의 활용 상황과 결과 화면을 구체적으로 보여줌

- 각 질의별로 어떤 DB가 검색됐으며, 어떤 결과가 도출됐는지 실제 화면 기술
- 도구 사용 내역 명시(“The tools used” 등 안내)
- 사용자에게 검색 프로세스와 데이터 흐름을 이해시키기 위함

### 구축된 에이전트는 무료 공개 템플릿이며, 전체 빌드 과정 및 설치법 영상을 안내함

- 해당 AI 에이전트 템플릿은 누구나 무료로 사용할 수 있음
- 전체 개발 과정을 설명하는 본 영상 링크(전체 영상)를 별도로 제공
- 전체 영상에서 실제 상세 구현법, 설치 및 활용법, 코딩 관련 설명까지 진행됨

### 개발 과정에는 Cloud Code 등 개발 효율을 높여주는 도구가 활용됨

- 에이전트 구현 및 배포 과정에서 Google Cloud Code 등 클라우드 개발 도구 사용
- Cloud Code 활용이 개발 및 배포 과정을 간편하게 지원함을 언급
- 시청자도 본인을 따라 직접 구현해볼 수 있도록 구체적 안내
