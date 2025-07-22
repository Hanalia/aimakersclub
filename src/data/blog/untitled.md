---
author: AI Makers Club
pubDatetime: 2025-07-22T23:46:41.074Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상에서는 최근 몇 달간 다양한 RAG(Retrieval-Augmented Generation) 전략을 연구한 결과, 최종적으로 Agentic RAG과 Knowledge Graph"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: Agentic RAG과 지식 그래프의 결합 무료 템플릿 소개* 핵심 요약

- 영상에서는 최근 몇 달간 다양한 RAG(Retrieval-Augmented Generation) 전략을 연구한 결과, 최종적으로 Agentic RAG과 Knowledge Graph(지식 그래프)가 가장 뛰어나다는 결론에 도달함
- 발표자는 위 두 가지 전략을 결합한 고성능 AI 에이전트를 직접 개발하여 시연함
- 이 에이전트는 질문에 가장 적합한 답을 도출하기 위해 어떤 데이터베이스(벡터 DB, 지식 그래프)에 접근할지 스스로 논리적으로 결정함
- 벡터 데이터베이스는 Postgres의 PG vector 확장 기능과 서버리스 플랫폼인 Neon을 활용해 구축하였음
- 시연 예시에서, 데이터베이스에는 빅테크 기업들의 AI 이니셔티브와 상호 파트너십 정보가 담긴 문서가 임베딩(embedding)된 형태로 저장됨
- 동일한 문서가 Graffiti와 Neoforj를 사용해 관계형 구조의 지식 그래프에도 입력되어 있음
- 단일 기업 관련 질문(예: "구글의 AI 이니셔티브는 무엇인가?")엔 에이전트가 벡터 DB만 검색하고, 기업 간 관계 질문엔 지식 그래프를 선택적으로 활용함
- 시스템 프롬프트 조정 또는 직접 명령어를 통해 두 데이터 소스를 모두 활용하는 것도 가능함
- 에이전트는 질문 유형에 따라 활용 도구(tool)와 결과를 명확히 반환하며, 모든 과정을 투명하게 보여줌
- 영상에선 Cloud Code를 활용한 에이전트 개발 방법 및 템플릿 무료 제공 링크 정보도 안내됨

---

## 세부 요약 - 주제별 정리

### 에이전틱 RAG과 지식 그래프가 다양한 RAG 전략 중 가장 효과적임을 확인함

- 발표자는 지난 몇 달간 거의 모든 RAG 전략을 심도 있게 실험함
- 복수의 방법 중 Agentic RAG(에이전트 기반 RAG)과 Knowledge Graph(지식 그래프)가 반복적으로 가장 유용하다고 평가함
- 기존의 RAG 전략 개별 사용보다, 두 가지를 결합할 때 시너지 효과가 극대화됨을 발견

### 두 전략(Agentic RAG + Knowledge Graph)을 결합한 고성능 AI 에이전트 개발 과정이 소개됨

- 발표자는 두 핵심 전략을 융합한 고도화된 AI 에이전트를 직접 설계 및 구현함
- 이 에이전트는 사용자의 질문을 분석하여, 답변을 찾기에 최적의 데이터 소스를 스스로 선택해 접근함
- 데이터 소스(벡터 DB, 지식 그래프 등)를 효과적으로 분기하여 최신 정보 및 관계형 정보 모두를 효율적으로 획득

### 벡터 데이터베이스는 Postgres, PG vector, Neon을 활용해 구축됨

- AI 에이전트의 벡터 데이터베이스는 Postgres DB에 PG vector 확장 기능을 추가해 운용함
- 데이터베이스의 인프라는 서버리스 방식의 Postgres 플랫폼인 Neon을 활용해 손쉽게 관리함
- 벡터 DB에는 문서 데이터를 청크(chunk) 단위로 쪼개어 임베딩(embeddings) 후 저장
- 임베딩을 통해 유사성 검색이 가능해짐

### 실 데이터로는 빅테크 기업 AI 정보와 파트너십 현황이 활용됨

- 샘플 문서는 빅테크 기업의 AI 이니셔티브, 각사별 전략, 파트너사 간의 협력 관계 등 구체적인 정보로 구성됨
- 예를 들어, 어떤 회사가 어떤 플랫폼 위에서 AI 모델을 운영 중인지 등 실질적 관계 정보도 데이터에 포함됨

### 동일한 문서가 Graffiti와 Neoforj를 통해 지식 그래프로도 저장됨

- 동일 정보를 관계형(리레이셔널) 형태로 저장하기 위해 Knowledge Graph(지식 그래프)도 별도로 구축
- 지식 그래프 구축 도구로 Graffiti와 Neoforj(Neo4j로 추정)를 활용
- 관계형 구조를 통해 ‘어떤 회사가 어디에 AI 모델을 호스팅하는가’와 같은 복잡한 쿼리 수행이 가능

### AI 에이전트가 질문에 따라 벡터 DB와 지식 그래프를 자동 전환하여 검색함

- 에이전트에게 "구글의 AI 이니셔티브는 무엇인가?"처럼 단일 회사 중심 질문을 던지면 벡터 DB만 검색
- 실제 시연에서 에이전트가 벡터 DB를 탐색하고, 관련 도구 사용 내역(tool used)을 명확히 알려줌
- "Amazon은 어디에서 Enthropic 모델을 호스팅하는가?"와 같이 기업 간 관계가 필요한 질문의 경우, 지식 그래프를 자동 선택해 활용

### 시스템 프롬프트 및 명령어 조정으로 데이터 소스 선택을 세부 제어할 수 있음

- 시스템 프롬프트(system prompt)를 수정하거나, 명시적 명령을 통해 두 데이터 소스를 모두 활용할 수 있음
- 시연에서 "벡터 데이터베이스와 지식 그래프 둘 다를 활용해라"라고 요청 시, 에이전트가 두 경로 모두에 접근해 통합된 답을 반환

### 에이전트 동작 결과 및 내부 프로세스가 투명하게 시각화됨

- 에이전트는 각 질문마다 실제로 사용한 도구를 결과와 함께 명확히 공개
- 벡터 검색, 그래프 검색 등 실제 처리 경로(tool usage)를 사용자에게 알림
- 이러한 투명성 덕분에 에이전트의 답출 방식 검증이 용이

### Cloud Code를 활용한 에이전트 개발 방법 및 배포 템플릿 제공이 안내됨

- 발표자는 본 에이전트 개발에 Cloud Code를 활용해 개발을 가속화함을 강조
- 누구나 사용할 수 있도록 본 에이전트의 무료 템플릿 다운로드 링크를 제공
- 전체 구축 방법(개발부터 운용까지)을 풀 영상에서 단계별로 안내한다고 안내함
