---
author: AI Makers Club
pubDatetime: 2025-07-17T23:47:28.819Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)\"임 지난 몇 달간 다양한 RAG(Retrieval-Augmented Generation) 전"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합* 핵심 요약

- 영상 제목은 "RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)"임
- 지난 몇 달간 다양한 RAG(Retrieval-Augmented Generation) 전략을 연구한 결과, '에이전틱 RAG'와 '지식 그래프'의 조합이 가장 유용하다고 강조
- 영상에서는 두 방법론의 장점을 결합한 강력한 AI 에이전트를 직접 구축해 시연함
- 이 에이전트는 질문의 성격에 따라 벡터 데이터베이스 또는 지식 그래프 중 어디서 정보를 검색할지 스스로 판단함
- 벡터 데이터베이스로는 Neon 플랫폼 상의 PostgreSQL 및 PG vector 확장 모듈을 활용함
- 데이터는 IT 대기업들의 AI 이니셔티브 및 파트너십 정보가 담긴 문서를 임베딩 형태로 벡터DB에 저장
- 동일 문서를 Graffiti와 Neo4j를 활용해 관계형 구조로 지식 그래프로도 저장함
- "Google의 AI 이니셔티브는 무엇인가?"와 같은 단일 엔티티 질문에는 벡터DB를, 두 기업 간 관계를 묻는 질문(예: 'Amazon과 Anthropic의 관계')엔 지식 그래프를 참조함
- 에이전트는 답변 후 검색에 사용한 도구(벡터DB/지식 그래프)를 명확히 표시함
- 시스템 프롬프트 조정이나 명시적 요청을 통해 두 소스를 동시에 활용할 수도 있음
- 누구나 무료로 사용할 수 있는 템플릿을 제공하며, 전체 구축 과정과 Cloud Code 활용법은 본 영상 링크에서 확인 가능

---

## 세부 요약 - 주제별 정리

### RAG 전략 중 Agentic RAG와 지식 그래프의 결합이 최상의 조합임을 확인함

- 발표자는 최근 수개월간 다양한 RAG(Retrieval-Augmented Generation) 전략을 심도 깊게 실험함
- 그 중에서도 '에이전틱 RAG'(Agentic RAG)와 '지식 그래프'(Knowledge Graphs)가 지속적으로 뛰어난 성능을 보임
- 영상의 핵심은 두 방법론의 결합을 통한 시너지·구체적 적용 사례임

### 두 방식을 함께 활용하는 AI 에이전트가 스스로 정보 검색 방식을 정함

- 발표자가 구현한 AI 에이전트는 질문의 종류에 따라 최적 정보원을 선택함
- 단일 엔티티에 관한 질문과, 두 엔티티 간의 관계를 묻는 질문을 구분하여 각각 벡터DB 또는 지식 그래프를 활용함
- "에이전트가 어디에서 검색할지 추론한다"고 강조하며, 자율적 탐색 및 추론 능력을 부각

### 벡터 데이터베이스에는 Neon 기반 PostgreSQL+PG vector로 임베딩 데이터를 저장함

- 벡터 데이터베이스는 Postgres와 PG vector 확장판을 이용해 구축
- 서버리스 Postgres 플랫폼인 'Neon'을 활용해 인프라를 구성
- 문서를 chunk 단위로 쪼개어 각 부분에 대한 임베딩을 생성, DB에 저장함
- 사용 데이터는 빅테크 기업들의 AI 프로젝트 및 상호 파트너십에 관한 정보임

### 동일한 데이터를 Graffiti와 Neo4j로 지식 그래프에도 저장함

- 동일 문서 데이터를 관계형 구조로 변환해 지식 그래프화
- 지식 그래프 저장 및 탐색 도구로는 Graffiti, Neo4j 두 가지를 조합해 활용
- 관계형 정보는 기업 간 파트너십 같은 인사이트를 질의-응답에 효과적으로 적용할 수 있음

### 에이전트가 질문의 종류에 따라 참조하는 데이터원(검색 방식)이 달라짐

- 예시1: "Google의 AI 이니셔티브는 무엇인가?"와 같은 단일 회사 질의 → 벡터DB에서 검색
- 시연에서 에이전트는 벡터 데이터베이스만을 검색해 답변, 사용된 도구를 명시적으로 보고
- 예시2: "Amazon이 어디에 Anthropic의 모델을 호스팅하는가?"(두 회사 관계) → 지식 그래프에서 검색
- 시스템 프롬프트에 약속된 조건에 따라, 관계 기반 질문은 자동적으로 관계형 데이터(그래프)를 탐색하도록 설정

### 에이전트는 어떤 데이터 소스를 썼는지 명확하게 리포트함

- 답변과 함께 "Tools used: Vector Search" 또는 "Tools used: Graph Search"처럼 사용 도구를 사용자에게 알려줌
- 이런 구조는 신뢰도 제고와 에이전트의 행동 이해에 도움을 줌

### 시스템 프롬프트나 직접 지시에 따라 복수 정보원을 동시에 활용할 수 있음

- 필요시 시스템 프롬프트를 수정하거나 프롬프트 내에서 명확히 요구할 경우
- 예: "벡터 데이터베이스와 그래프를 모두 사용하라" 명시 시, 에이전트는 두 소스를 동시 참조해 보다 포괄적 답변을 생성
- 사용 예시도 영상에서 직접 시연함

### 제공되는 무료 템플릿 및 사용법 안내

- 영상에서 시연한 에이전트는 누구나 사용할 수 있는 무료 템플릿으로 제공
- 전체 제작 과정과 Cloud Code를 활용한 개발 지원, 템플릿의 실제 적용 방법은 본 영상의 전체 링크를 통해 자세히 안내
- 직접 시연/응용이 가능한 실용적 자료임

### Cloud Code 활용 등 실제 개발 환경 세팅도 함께 안내함

- 템플릿 구현에 Cloud Code를 활용, 쉽게 배포 및 개발 가능케 함
- 사용 방법과 개발 과정은 본 영상의 전체 버전에서 단계별로 설명

### 종합적으로 Agentic RAG와 Knowledge Graph를 결합한 AI 에이전트가 실질적인 정보 검색 최적화를 실현함

- 양방향 정보 접근(임베딩 검색+관계형 그래프 탐색)이 다양한 질의-응답에서 효과적임을 실제로 시연
- 각 기술의 장점을 극대화하고, 필요별·질문성격별로 검색 방법을 유연하게 조합할 수 있음
- 무료 제공 및 구체적 예제로, 실사용을 원하는 이용자에게 높은 실용성을 제공
