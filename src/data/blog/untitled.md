---
author: AI Makers Club
pubDatetime: 2025-07-02T08:18:53.336Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"*RAG 2.0: 에이전틱 RAG와 지식 그래프 결합 소개 (무료 템플릿)*\"임 최근 몇 달간 다양한 RAG(Relevant Answer Generation) 전략을"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프 결합 소개 (무료 템플릿)* 핵심 요약

- 영상 제목은 "*RAG 2.0: 에이전틱 RAG와 지식 그래프 결합 소개 (무료 템플릿)*"임
- 최근 몇 달간 다양한 RAG(Relevant Answer Generation) 전략을 깊이 연구한 결과, 에이전틱 RAG와 지식 그래프(Agentic Rag + Knowledge Graphs)가 가장 효과적임을 발견함
- 강력한 AI 에이전트를 구축하여, 정보 탐색이 필요한 질문마다 적합한 정보원(벡터DB/지식그래프)을 스스로 선택하도록 설계함
- 벡터 데이터베이스는 PostgreSQL과 PG Vector Extension, 그리고 서버리스 플랫폼인 Neon을 활용하여 구현함
- 문서는 여러 청크로 분할되어 임베딩되어 저장되었으며, 내용은 주요 빅테크 기업과 그들의 AI 이니셔티브, 상호 파트너십을 포함함
- 동일 문서를 Graffiti와 Neo4j를 이용한 지식 그래프에도 저장하여 회사간의 관계 쿼리가 가능하도록 만듦
- 사용자가 Google의 AI 이니셔티브처럼 단일 회사 정보를 묻는 질문을 하면 에이전트는 벡터 데이터베이스만 검색함
- Amazon과 Entropic의 관계 등 기업 간 연관을 묻는 질문에는 에이전트가 지식 그래프 쿼리를 사용함
- 필요 시 시스템 프롬프트 조정이나 직접 명시하여 두 소스(벡터 DB, 그래프 DB)를 병행 검색 가능
- 이 AI 에이전트와 템플릿은 무료로 제공되며, Cloud Code를 활용한 구축 및 활용 방법을 추가 영상에서 안내함

---

## 세부 요약 - 주제별 정리

### 에이전틱 RAG와 지식 그래프의 결합이 가장 강력한 RAG 전략임을 실험 통해 확인함

- 창작자는 최근 수개월 동안 수많은 RAG 기술과 전략을 심도 있게 탐구함
- 가장 실용적이고 강력하다고 판단되는 두 가지는 "에이전틱 RAG(Agentic Rag)"과 "지식 그래프(Knowledge Graphs)"임
- 두 접근법의 결합이 AI 에이전트 설계에 최적임을 반복적인 실험에 근거해 강조함

### AI 에이전트가 질문에 따라 정보원 선택 방식을 자체적으로 추론하도록 설계됨

- 에이전트는 사용자의 질문 내용을 스스로 해석해, 벡터 데이터베이스와 지식 그래프 중 어느 곳에 질의할지 결정함
- 정보의 적합성과 질문의 성격(단일 요소/관계 요소)에 따라 검색 방법을 유연하게 선택함
- “Reasoning about where it goes to look for information” 구조로, 다중 정보원이 자동 활용됨

### 벡터 데이터베이스(Neon+PostgreSQL+PG Vector) 기반 구축 과정이 소개됨

- 문서 데이터는 여러 청크로 분리되어 임베딩 생성 하에 벡터 데이터베이스에 저장됨
- PostgreSQL에 PG Vector 확장 모듈을 적용함
- 서버리스 데이터베이스 플랫폼인 Neon 활용해 개발 및 운영 효율성을 높임
- 저장된 문서 예시는 “빅테크 기업들의 AI 이니셔티브, 그리고 이들의 협업 구조”를 다룸

### 동일 문서 데이터를 Graffiti와 Neo4j로 지식 그래프화하여 관계형 쿼리가 가능하게 만듦

- 동일한 문서를 보다 관계형(relational) 데이터로 변환해 저장함
- Graffiti와 Neo4j를 조합하여 지식 그래프 DB 구축
- 예시: “Amazon은 Entropic의 모델이 호스팅되는 곳” 등 기업 간 구체적 관계 탐색이 가능

### 단일 기업 관련 질문엔 벡터DB, 관계성 질문엔 지식 그래프가 자동으로 사용됨

- 간단한 회사 관련 질의(예: “Google의 AI 이니셔티브는?”)는 벡터DB만을 활용해 검색 결과 반환
- 에이전트가 검색 과정 및 사용한 도구(벡터DB)까지 상세하게 설명함
- “Tools used” 등 출력에서 실제 사용 정보원 명시

### 관계 기반(기업 간 연결 등) 질문의 경우 지식 그래프가 자동으로 활용됨

- 두 회사 관계 등 복합적 정보(예: “Amazon과 Entropic의 관계”)가 질문되면 에이전트가 지식 그래프 검색을 우선 사용함
- 시스템 프롬프트에 기반해 필요 소스 자동 선정
- 검색 시 “graph search” 도구 사용 등 자동 전환 및 활용 내역을 보여줌

### 시스템 프롬프트 조정 또는 명시적 명령으로 데이터 소스 사용 범위 제어 가능

- 사용자가 시스템 프롬프트를 조정하여, 특정 정보원(벡터DB, 그래프DB) 검색을 유도할 수 있음
- 또는 질문 내에 “벡터 데이터베이스와 그래프를 모두 사용해라”고 명령할 수 있음
- 에이전트가 두 소스를 병렬로 검색하여 종합적 답변을 제시함

### 에이전트 및 템플릿이 무료로 제공되며, 구축 가이드 영상이 추가 제공됨

- 영상에서 소개한 AI 에이전트 솔루션 및 해당 템플릿은 무료로 제공됨
- 전체 설계와 구현, 그리고 “Cloud Code” 활용법을 포함한 상세 가이드가 별도 영상 링크로 안내됨
- 이 가이드 참고 시 누구나 동일 에이전트 환경 구축이 가능함
