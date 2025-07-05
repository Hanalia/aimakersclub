---
author: AI Makers Club
pubDatetime: 2025-07-05T08:19:13.265Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"*RAG 2.0: 에이전트 기반 RAG와 지식 그래프의 결합(무료 템플릿 소개)*\"으로, 최근 다양한 RAG(Retrieval Augmented Generation)"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전트 기반 RAG와 지식 그래프의 결합(무료 템플릿 소개)* 핵심 요약

- 영상 제목은 "*RAG 2.0: 에이전트 기반 RAG와 지식 그래프의 결합(무료 템플릿 소개)*"으로, 최근 다양한 RAG(Retrieval Augmented Generation) 전략을 심층적으로 탐구한 경험을 바탕으로 한다.
- 제작자는 "Agentic RAG"와 "Knowledge Graph" 두 가지 전략을 가장 강력하다고 평가하고, 이 둘을 결합한 AI 에이전트를 구축했다고 설명함.
- 이 에이전트는 질문의 특성에 따라 가장 적합한 정보원을 스스로 판단해 검색하는 능력(추론 기능)을 갖춤.
- 벡터 데이터베이스에는 PostgreSQL+PG Vector와 Neon(서버리스 PostgreSQL 플랫폼)이 사용되어, 대용량의 문서 정보를 임베딩 형태로 저장하고 검색함.
- 동일 문서 데이터를 관계형으로 구조화하여 지식 그래프(Graffiti와 Neo4j 활용)에 저장, 두 가지 출처를 모두 사용할 수 있게 구성.
- 에이전트는 구글의 AI 이니셔티브 같은 단일 기업 질문엔 벡터DB만 검색, 두 회사 간 파트너십 같이 관계성 질문엔 지식 그래프를 자동 선택하여 활용함.
- 명령 프롬프트(system prompt)를 조정하거나 직접 요청하면 두 데이터 소스 모두에서 정보 검색 및 종합 답변이 가능함.
- 실습 예시와 함께, 영상에서 소개하는 에이전트 템플릿은 무료로 제공되며, 구축 및 실전 활용법에 대한 전체 영상 링크도 안내함.

---

## 세부 요약 - 주제별 정리

### 제작자는 Agentic RAG와 Knowledge Graphs 두 전략의 반복적 실험 끝에 가장 효용이 크다고 평가함

- 지난 몇 달간 다양한 RAG(Retrieval Augmented Generation) 전략을 직접 테스트 및 분석함.
- 그 결과, 'Agentic RAG'(에이전트 추론 기반 RAG)와 'Knowledge Graphs'(지식 그래프 저장 및 질의)이 가장 강력하다고 정리함.
- 이 두 전략을 융합한 새로운 AI 에이전트(Agent)를 직접 개발함을 강조.

### 에이전트는 질문 의도에 따라 정보 소스를 추론하여 선택적으로 탐색할 수 있음

- 개발한 AI 에이전트는 사용자의 질문에 가장 잘 답할 수 있는 정보를 어디서 찾아야 할지를 스스로 판단함.
- 단순 데이터 검색이 아닌, 질문의 특성과 맥락을 파악하여 벡터 데이터베이스 또는 지식 그래프 중 적합한 도구를 선택.
- 예: "구글의 AI 이니셔티브가 무엇인가?"와 같은 질문엔 벡터DB, 회사 간 연관성 질문에는 그래프 탐색을 사용.

### 벡터 데이터베이스에는 PostgreSQL + PG Vector와 서버리스 플랫폼 Neon을 사용함

- 문서 데이터 처리는 PostgreSQL 데이터베이스와 PG Vector(벡터 확장)를 활용하여 임베딩 저장방식으로 구성.
- 서버리스(Postgres 기반) 플랫폼인 Neon's 도입 사례를 소개함.
- 문서를 일정 크기로 청크(chunk) 분할해 각각 임베딩을 생성 후, 벡터DB에 저장.
- 저장된 문서 예시는 빅테크 기업들의 AI 사업과 파트너십 정보 등을 포함.

### 동일한 문서 데이터를 Graffiti와 Neo4j로 구동되는 지식 그래프에도 저장함

- 위와 동일한 데이터를 별도로 관계형 구조로 설계해 Graffiti, Neo4j 기반의 Knowledge Graph에 저장.
- 지식 그래프는 정보간 관계(Relation)를 명확히 구조화하여 저장함으로써, 연관된 엔티티 질의에 강점을 드러냄.
- 예: 'Anthropic은 Amazon에서 모델을 호스팅하고 있다' 등 회사 간 파트너십 및 구조 질의가 가능해짐.

### 에이전트는 질문 유형에 따라 벡터DB, 지식 그래프 중 자동으로 최적의 도구를 활용함

- 사용자 질문의 유형에 따라 에이전트가 필요한 도구를 직접 선택.
- 비연관적 단일 주제(회사 한 곳 관련 질의)에는 벡터DB만 탐색하여 답변.
- 관계성 중심(여러 회사의 상호 연결성 등) 질문엔 지식 그래프 질의 모듈을 동작시킴.
- 에이전트는 질의 결과와 함께, 사용된 도구(예: vector database search, graph search)를 명시적으로 출력함.

### 사용자는 시스템 프롬프트 조정 혹은 명시적 명령으로 두 데이터 소스를 병행 이용 가능

- 프롬프트나 명령을 통해 '두 소스 모두 검색'과 같은 복합 요청이 가능함.
- 예시 실습: '벡터DB와 그래프 모두에서 정보를 검색하라'는 요청 시 에이전트가 두 출처를 모두 활용해 종합적 답변을 생성.
- 시스템 프롬프트(system prompt) 편집을 통한 세밀한 제어도 지원됨.

### 무료로 제공되는 템플릿 및 영상 전체 가이드를 안내함

- 영상에서 소개한 AI 에이전트 구축용 템플릿을 무료로 제공.
- 전체 동영상 링크를 통해, 실제 데모, 코드 구현, Cloud Code 툴을 통한 개발 상세 과정, 실행법 등을 추가 안내.
- Cloud Code 활용법, 실전 구축 및 배포 가이드 등이 포함되어 있음.
