---
author: AI Makers Club
pubDatetime: 2025-07-13T23:47:55.079Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 “RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)”로, AI 에이전트 구축에 있어 최신 RAG 전략을 소개함 제작자"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)* 핵심 요약

- 영상 제목은 “RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)”로, AI 에이전트 구축에 있어 최신 RAG 전략을 소개함
- 제작자는 수개월 동안 다양한 RAG(검색 증강 생성) 방식을 탐구한 결과, Agentic RAG와 Knowledge Graph가 가장 실효성 있는 두 전략임을 강조함
- 본 영상에서 두 방식을 결합한 강력한 AI 에이전트를 제작해 시연하며, 정보 조회 방식을 상황에 따라 자동으로 선택함을 소개
- 벡터 데이터베이스(Postgres + PGVector, Neon 서버리스 플랫폼)와 지식 그래프(Graffiti 및 Neo4j)를 동시에 활용해 동일 정보를 이중 저장
- 특정 회사만 질의할 경우 에이전트가 벡터 DB에서 답을 추출하며, 예: ‘Google의 AI 이니셔티브는?’ 등 단일 항목 질의
- 두 기업 간 관계성(예: “Amazon이 Anthropic 모델을 호스팅함”)을 묻는 질문엔 지식 그래프 조회 방식을 자동 활용
- 사용자는 시스템 프롬프트를 수정하거나 직접 명령해 두 소스 모두를 동시에 조회하도록 조정 가능함
- 각 질의 결과마다 에이전트는 어떤 도구(벡터 혹은 그래프)를 사용했는지도 명시적으로 설명
- 이 에이전트의 코드를 무료 템플릿으로 제공하며, 전체 제작 과정은 본 영상의 링크를 통해 더 상세히 안내
- Cloud Code 도구를 사용해 개발이 진행되었음을 안내하며, 누구나 직접 이 시스템을 구축할 수 있다고 강조함

---

## 세부 요약 - 주제별 정리

### 여러 RAG 전략 중 Agentic RAG와 Knowledge Graph가 우수함을 반복 확인

- 제작자는 최근 몇 달간 모든 종류의 RAG(Retrieval-Augmented Generation) 전략을 시험해 봄
- 다양한 접근법을 검토한 결과, 실사용에서 반복적으로 뛰어난 결과를 보여준 방식이 Agentic RAG와 Knowledge Graph임
- 각각의 강점과 사용 범위를 인지하고, 이를 결합하여 시너지를 도모할 필요성을 느낌

### 두 접근법을 결합한 AI 에이전트 개발 및 에이전트의 능동적 정보 획득 방식

- 제작자는 Agentic RAG와 Knowledge Graph의 장점을 결합한 특별한 AI 에이전트를 구축함
- 에이전트는 질문의 성격에 따라 어느 소스(Vector DB 또는 Knowledge Graph)가 최적의 답을 줄지 스스로 판단함
- 이런 “에이전틱(agentic)” 성향 덕분에, 사용자가 의도한 질문의 맥락에 따라 자동으로 정보 수집 경로를 변경할 수 있음

### 벡터 데이터베이스 세팅과 PostgreSQL, PGVector, Neon의 사용

- 벡터 데이터베이스로는 PostgreSQL에 PGVector 확장 모듈을 설치하여 활용함
- 인프라 플랫폼은 서버리스(Postgres 기반)인 Neon을 사용, 확장성과 성능의 이점을 언급
- 예시 문서(빅테크 기업들의 AI 이니셔티브 및 각 사의 파트너십 정보)를 작은 청크로 분할해 임베딩 생성 및 저장

### 같은 정보를 지식 그래프에도 이중 저장해 복합 질의 가능하게 함

- 동일 문서 데이터를 Graffiti와 Neo4j를 이용해 지식 그래프 형태로 재구성 및 저장
- 이 방식은 정보의 관계성을 명확히 모델링할 수 있다는 이점이 있음
- “Amazon은 Anthropic의 모델 호스팅 위치”처럼, 기업 간 연결 구조와 같은 복합적 관계 질의가 가능함

### 질문 유형에 따라 에이전트가 자동으로 검색 방식을 선택함

- 에이전트는 사용자의 질의 내용에 따라 어디서 정보를 찾아야 최적답이 나올지 스스로 결정
- 예: “Google의 AI 이니셔티브”처럼 단일 객체에 대한 단순 질의 시엔 벡터 검색만 사용
- 에이전트는 답변 과정에서 벡터 데이터베이스만 활용했음을 사용자가 명확히 인지할 수 있게 안내함

### 기업 간 관계성 혹은 복합 질의 시에는 지식 그래프 검색이 활성화됨

- 질문이 “두 회사 간 관계”와 같이 복합적이고 연결된 정보를 필요로 할 때는 에이전트가 지식 그래프로 전환해 탐색
- 예시로 “Amazon이 Anthropic의 모델을 호스팅하는 위치는?”과 같은 관계성 질의가 해당
- 답변시 “이번엔 그래프(detabase)를 사용함”이라는 결과 메시지로 어떤 툴이 사용되었는지 안내

### 사용자가 시스템 프롬프트 또는 명시적 요구로 두 소스 동시 조회 가능함

- 더 복합적 답변을 원할 경우, 시스템 프롬프트를 수정하거나 명령어에 “벡터 DB와 그래프 모두 사용”이라고 지정 가능
- 에이전트는 지정된 대로 두 소스 모두에서 데이터를 취합해 답변의 정확성과 풍부함을 높임

### 에이전트가 답변마다 사용 툴을 투명하게 알려주는 기능 구현

- 질의 결과에는 항상 “어떤 데이터베이스, 어떤 기술(벡터/그래프)이 사용되었는지”가 표시됨
- 이 정보는 개발자 혹은 사용자에게 에이전트의 의사결정 과정을 이해할 수 있게 해줌

### 무료로 제공되는 템플릿과 전체 구현 과정을 안내하는 확장 영상 존재

- 본 영상에서 소개한 에이전트 템플릿은 누구나 무료로 활용할 수 있게 공개
- 영상 하단의 링크로 접속 시, 전체 개발/설정 과정을 실제 코드와 시연을 통해 자세히 안내
- 관심 있는 사용자는 직접 해당 AI 에이전트를 구축해볼 수 있음

### 클라우드 코드(Cloud Code)를 활용한 손쉬운 에이전트 개발 환경 지원

- 개발 시 Cloud Code를 활용해 코딩과 배포를 한결 쉽게 처리할 수 있음
- 관련 설정 방법 역시 전체 영상 링크에서 구체적으로 안내
- 영상 제작자는 누구나 클라우드에서 즉시 적용 가능하다는 장점을 강조함
