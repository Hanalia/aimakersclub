---
author: AI Makers Club
pubDatetime: 2025-07-25T08:22:52.696Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 “RAG 2.0: 에이전틱 RAG + 지식 그래프 도입(무료 템플릿)”으로, 최신 RAG(검색 증강 생성) 전략의 결합 접근법을 소개함 제작자는 수개월 간 다양한 RA"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프 결합(무료 템플릿 소개)* 핵심 요약

- 영상 제목은 “RAG 2.0: 에이전틱 RAG + 지식 그래프 도입(무료 템플릿)”으로, 최신 RAG(검색 증강 생성) 전략의 결합 접근법을 소개함
- 제작자는 수개월 간 다양한 RAG 전략을 실험한 결과, Agentic RAG 방식과 Knowledge Graph(지식 그래프) 방식을 결합한 새 AI 에이전트를 개발했음을 밝힘
- 이 AI 에이전트는 질문 유형에 따라 정보를 얻는 최적의 경로를 스스로 선택해 탐색함
- 벡터 데이터베이스는 Postgres + PG Vector 확장 기능과, 서버리스 Postgres 플랫폼인 ‘Neon’을 활용해 구축함
- 문서 데이터는 ‘주요 빅테크 기업들의 AI 사업 현황 및 각 기업 간의 파트너십 정보’로 구성되어 있음
- 동일 문서를 Graffiti와 Neoforj로 지식 그래프 방식(관계 중심적 저장)으로도 보관함
- AI 에이전트는 단일 기업 질의(예: “구글의 AI 이니셔티브는?”) 시에는 벡터DB만을, 두 회사 관계 질의(예: “Amazon과 Anthropic의 협력 관계?”) 때는 지식 그래프를 참조함
- 시스템 프롬프트를 통해 어느 데이터베이스 사용할지 에이전트에 직접 지정도 가능하며, 둘 다 병행 검색도 지원
- 질의별로 ‘이용한 도구’(vector searchor graph search 등)를 명시적으로 알려주어 작동 방식을 투명하게 제공함
- 영상 마지막에는 에이전트 개발과정 전체를 다룬 전체 영상을 안내하며, 무료 템플릿 및 Cloud Code 사용법까지 지원한다고 안내함

---

## 세부 요약 - 주제별 정리

### 에이전틱 RAG와 지식 그래프의 장점을 동시에 활용하는 새로운 AI 에이전트를 발표함

- 제작자는 최근 수개월 동안 거의 모든 RAG(검색 증강 생성 전략)를 심층적으로 탐구하였음을 언급
- 실험 결과 특히 인상적이었던 두 가지 방식은 Agentic RAG와 Knowledge Graphs였음
- 이 두 방식을 결합해 ‘매우 강력한’ AI 에이전트를 새로 설계함
- 에이전트는 답변에 가장 효과적인 정보를 찾아내기 위해, 어떤 데이터 소스를 참조할지 논리적으로 추론함
- 영상 내에서는 “This agent will reason about where it goes to look for information”이라고 언급
- 새로운 에이전트는 기존 RAG 전략의 한계를 극복하고 정보 검색 및 활용의 유연성을 극대화함

### Postgres 벡터DB와 Neon 플랫폼으로 고성능 벡터 데이터베이스를 구축함

- 벡터 데이터베이스는 Postgres에 PG vector 확장 기능을 적용하여 사용
- 서버리스 환경에서 최적화된 Postgres 서비스인 Neon 플랫폼으로 구축함을 강조
- 활용 데이터는 대용량의 기술 문서로, 문서를 chunk(조각) 단위로 분할함
- 각 chunk마다 벡터 임베딩을 미리 생성하여 데이터베이스에 저장
- 이 구조는 질의 효율성과 데이터 확장성을 동시에 확보하기 위한 목적임

### 데이터 내용은 빅테크 기업의 AI 전략 및 상호 파트너십 정보로 구성됨

- 사용된 문서의 주요 내용은 글로벌 주요 빅테크 기업들에 대한 심층 정보임
- 구체적으로 각 기업의 AI 이니셔티브(주요 프로젝트/전략)와 기업 간 협력 구조(파트너십)가 담겨 있음
- 예를 들어, Anthropic의 모델은 Amazon 클라우드 인프라에서 호스팅되는 등의 관계 구성이 포함됨

### 같은 정보도 벡터DB와 지식 그래프 두 방식으로 동시에 저장함

- 문서의 동일한 내용을 별도로 Graffiti와 Neoforj를 활용한 지식 그래프에도 저장함
- 벡터DB와 지식 그래프는 서로 다른 질의, 탐색 방식에 효과적임
- “Same information but stored in a very relational way”라는 표현으로, 그래프 DB는 관계성 중심의 질의에 강점을 가짐

### AI 에이전트는 질의의 특성에 따라 최적의 데이터 소스를 스스로 결정함

- 사용자가 특정 기업 한 곳에 대한 질의를 할 경우(예: “구글의 AI 이니셔티브는?”), 에이전트는 벡터 데이터베이스만을 검색함
- 벡터DB 탐색 후, 관련 답변을 반환하고 “vector database만을 사용했다”는 도구 내역을 명시
- 관계적 탐색이 필요한 질의(예: “Amazon과 Anthropic의 관계”)의 경우, 자연스럽게 knowledge graph를 참조함
- 해당 질의 후에는 “graph search를 사용했다”는 도구 사용 정보를 명확히 안내함

### 시스템 프롬프트 설정 및 명령을 통한 세밀한 검색 컨트롤이 가능함

- 시스템 프롬프트(에이전트 내부 규칙)를 통해, 원하는 검색 방식(벡터DB, 그래프 모두)을 직접 지정할 수 있음
- 원하는 경우, 사용자가 “벡터DB와 knowledge graph 둘 다 써라”라고 명령하여 병합 검색 수행 가능
- 실제 영상 시연에서 이와 같은 dual search(이중 검색) 요청 과정을 소개

### 에이전트는 실행 과정과 도구 선택 내역을 투명하게 반환함

- 각 질의에 대해 “어떤 도구를 사용했는지”를 명시적으로 답변에 포함
- 예를 들어, 벡터 검색만 사용했다면 “tools used: vector database”, 그래프 검색 시엔 “graph search”라고 정확히 표기
- 사용자는 응답 내용과 함께 백엔드의 실제 검색 과정을 쉽게 이해할 수 있음

### 그래프 탐색, 벡터 탐색, 병렬 탐색 모두 빠르고 직관적으로 구현함

- 질문 유형과 설정에 따라 벡터DB, 그래프, 둘 다 동시에 탐색 가능함
- 각 방식의 장점(개별 정보 검색, 관계 검색, 종합 정보 분석)을 사용자 요청에 따라 극대화할 수 있음
- 복수의 데이터 소스를 손쉽게 연동하여 복합적이고 강력한 질의 체계를 제공함

### 영상 말미에 무료 에이전트 템플릿 및 상세 개발 영상 제공을 안내함

- 마지막에는 “무료로 사용할 수 있는 템플릿”임을 강조
- 전체 개발 과정, Cloud Code 사용해 구현하는법, 에이전트 상세 동작 원리까지 담은 전체 영상을 별도 링크로 안내함
- 시청자가 직접 동일한 환경을 쉽게 구현할 수 있도록 실질적인 자료 및 가이드를 제공함
