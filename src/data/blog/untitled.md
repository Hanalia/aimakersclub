---
author: AI Makers Club
pubDatetime: 2025-07-18T08:20:07.758Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 “RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿)”임 제작자는 최근 다양한 RAG(Retrieval-Augmented Generation) 전략을"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿)* 핵심 요약

- 영상 제목은 “RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합 (무료 템플릿)”임
- 제작자는 최근 다양한 RAG(Retrieval-Augmented Generation) 전략을 연구한 결과, 에이전틱 RAG(Agentic RAG)와 지식 그래프(Knowledge Graphs)가 가장 유용하다고 판단함
- 두 전략을 결합한 강력한 AI 에이전트를 직접 구축했음을 소개함
- 에이전트는 질문의 특성에 따라 벡터 데이터베이스와 지식 그래프 중 어디를 검색할지 스스로 추론하여 가장 적합하게 정보를 탐색함
- 벡터 데이터베이스로는 슈퍼 서버리스 Postgres 플랫폼인 Neon과 PG Vector 확장으로 인덱싱 및 임베딩 처리함
- 저장된 문서는 빅테크 기업과 AI 이니셔티브, 그리고 기업 간 협력 관계 등 풍부한 정보를 포함함
- 같은 문서를 Graffiti 및 Neo4j를 활용하여 지식 그래프 형태로도 저장해 관계형 질의를 가능케 함
- 에이전트는 단일 기업 질문 시 벡터 검색, 관계 질문 시 그래프 질의 등 질문에 따라 자동으로 도구를 선택함
- 사용자가 명시적으로 벡터·그래프 둘 다 사용하라는 지시도 가능하며, 그에 맞춰 두 소스를 동시에 검색함
- 이 AI 에이전트는 누구나 사용할 수 있는 무료 템플릿으로 제공되며, 전체 제작 및 셋업 방법을 자세히 설명하는 전체 영상 링크도 함께 안내함

---

## 세부 요약 - 주제별 정리

### 제작자는 다양한 RAG 전략을 연구한 끝에 에이전틱 RAG와 지식 그래프 접근이 가장 강력하다고 판단함

- 최근 몇 달간 제작자는 RAG(Retrieval-Augmented Generation)의 여러 가지 전략을 광범위하게 실험함
- 수많은 접근 방법을 분석한 후, “Agentic RAG”와 “Knowledge Graphs” 이 두 전략이 가장 재활용도가 높고 유연함을 지속적으로 확인함
- 기존의 RAG는 단순히 정보를 불러오는 방식이었으나, 이 두 방식은 정보 검색 과정에서 더 높은 추론력과 관계 탐색을 제공함

### 에이전트는 질문에 따라 정보를 찾는 방식을 스스로 결정하여 최적의 답을 제공함

- 사용자가 어떤 질문을 입력하면, 에이전트는 질문의 의도를 판별함
- 질문이 특정 주체(예: “Google의 AI 이니셔티브는?”)에 대한 단순 정보 요청이면 벡터 데이터베이스를 검색함
- 반면, 두 개 이상의 주체 간의 관계(예: “Amazon과 Anthropic은 어떻게 협력하는가?”)를 묻는 질문이면 지식 그래프에 질의함
- 이러한 분기 로직은 시스템 프롬프트와 에이전트의 자체 추론 능력에 기반함

### 벡터 데이터베이스는 Postgres와 PG Vector, Neon을 활용하여 구축됨

- 문서는 적절한 크기로 쪼개(Chunking) 벡터 임베딩을 생성함
- 이 임베딩 데이터는 Postgres 데이터베이스에 저장되며, PG Vector 확장을 사용하여 벡터 연산을 지원함
- 서버리스 Postgres 플랫폼인 “Neon”을 통해 손쉽게 인프라를 구축할 수 있음을 강조함
- 예시 문서에는 빅테크 기업들의 AI 이니셔티브 정보, 그리고 이 기업들 간의 파트너십 및 협업 등 복합적인 정보가 포함됨

### 동일한 문서 데이터가 Graffiti와 Neo4j를 통해 관계형 지식 그래프로도 저장됨

- 문서에서 추출한 정보는 관계 중심으로 변환되어 Graffiti와 Neo4j를 통해 그래프 DB에 저장됨
- 예를 들어, “Amazon은 Anthropic의 모델 호스팅 장소”라는 관계 등 복잡한 연결을 표현 가능
- 지식 그래프를 통해 다중 엔티티 간의 연관성, 파트너십, 종속 관계 등 질의가 간편해짐

### 실제 데모 과정에서 질문 유형별로 에이전트가 각기 다른 데이터 소스를 선택해서 검색함

- 단일 기업 정보를 물어보는 경우(예: “Google의 AI 이니셔티브는 무엇인가?”) 벡터 데이터베이스만 사용해 답함
- 답변과 함께 “어떤 도구를 활용했는지” 투명하게 표시해 사용자가 이해하기 쉬움
- 두 기업 이상의 관계를 묻는 경우(예: “Amazon과 Anthropic의 협력 관계는?”) 에이전트가 자동으로 지식 그래프를 사용하여 문제를 해결함
- 도구 사용 내역도 함께 명시함

### 사용자는 프롬프트 변경이나 명시적 지시로 벡터와 그래프 모두를 활용하여 복합 검색이 가능함

- 시스템 프롬프트를 직접 수정하거나, 명령문에 명시적으로 “벡터 DB와 그래프 모두 사용” 등 지시할 수 있음
- 이렇게 하면 에이전트가 벡터 데이터베이스와 지식 그래프를 모두 활용해, 더 풍부하고 정밀한 답변을 반환함
- 다양한 정보 소스를 통합적으로 쓰는 방식을 쉽게 실험 가능함

### 이 에이전트는 무료 템플릿으로 제공되며 누구나 직접 사용 및 배포 가능함

- 이 영상에서 소개한 AI 에이전트는 무료 템플릿 형태로 바로 사용할 수 있음
- 전체 빌드 및 설정 과정을 설명하는 상세 영상(전체 버전) 링크를 함께 제공함
- Cloud Code 등 개발 자동화 도구를 활용하여 쉽게 배포 및 커스터마이즈 가능함
- 관심 있는 사용자는 안내된 링크를 통해 전체 영상 및 템플릿 소스를 참고할 수 있음
