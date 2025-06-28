---
author: AI Makers Club
pubDatetime: 2025-06-28T08:21:09.583Z
title: "Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)\"임 제작자는 다양한 RAG(검색 기반 생성) 전략을 연구한 결과, 에이전틱 RAG(Agent"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introducing RAG 2.0: Agentic RAG + Knowledge Graphs (FREE Template)](https://www.youtube.com/shorts/1ajWYL7Nddo)  
**채널명:** Cole Medin

## *RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)* 핵심 요약

- 영상 제목은 "RAG 2.0: 에이전틱 RAG와 지식 그래프의 결합(무료 템플릿 소개)"임
- 제작자는 다양한 RAG(검색 기반 생성) 전략을 연구한 결과, 에이전틱 RAG(Agentic RAG)와 지식 그래프(Knowledge Graphs)에 주목하게 되었음을 언급
- 두 기술을 결합해 정보 탐색 및 추론이 가능한 고도화된 AI 에이전트를 구현하였음
- 벡터 데이터베이스에는 PostgreSQL에 PG Vector 확장 모듈을 적용하고, 서버리스 플랫폼인 Neon을 활용
- 문서를 청크 단위로 나눠 임베딩 생성 후 벡터 데이터베이스에 저장하며, 동일 문서를 지식 그래프에도 관계형으로 저장 (Graffiti, Neo4j 사용)
- 에이전트는 사용자의 질문 유형에 따라 가장 적합한 데이터 소스를 스스로 선택: 단일 개체 질의는 벡터 데이터베이스, 관계 질의는 지식 그래프 활용
- 예시로, “구글의 AI 이니셔티브”와 같은 단일 기업 질문은 벡터 검색을 이용하여 답변함
- “Amazon과 Anthropic의 관계”와 같이 두 회사 간 연결에 대한 질문은 자동으로 지식 그래프 탐색을 활용
- 시스템 프롬프트를 조정하거나 명시적으로 둘을 모두 쓰도록 요청하면, 양쪽 소스 모두를 활용하여 통합적인 답변을 생성함
- 전체 구현 예제는 무료 템플릿으로 제공되며, 상세 구현법과 사용법은 별도 전체 영상에서 다룸
- 개발 과정에서는 Cloud Code를 이용해 에이전트 구축을 지원

---

## 세부 요약 - 주제별 정리

### 제작자가 다양한 RAG 전략을 연구한 끝에 두 가지 기법에 집중하게 됨

- 최근 몇 달간 거의 모든 RAG(검색확장 생성) 전략을 깊게 탐구했다고 언급
- 궁극적으로 에이전틱 RAG(Agentic RAG)와 지식 그래프(Knowledge Graphs)에 반복적으로 돌아오게 됨
- 이 두 접근법이 각기 중요한 장점과 한계를 가진다는 점을 인식
- 강력한 AI 에이전트를 만들기 위해 두 방식을 결합하는 데 초점을 맞춤

### 벡터 데이터베이스 구축에는 PostgreSQL과 Neon 플랫폼을 활용함

- 벡터 데이터베이스로 PostgreSQL과 PG Vector 확장(extension)을 사용
- PostgreSQL은 서버리스 플랫폼인 Neon에서 운영
- 데이터 저장 및 검색 효율성을 고려해 벡터 데이터베이스 환경을 구축
- 예시는 “Super awesome serverless Postgress platform called Neon”으로 소개

### 문서를 청크로 나누고 임베딩을 생성하여 벡터 DB에 저장함

- 보유 문서를 텍스트 청크(chunk) 단위로 세분화
- 각 청크에 대해 임베딩(embedding) 벡터를 만듦
- 임베딩된 데이터는 벡터 데이터베이스에 저장됨
- 문서에는 빅테크 기업들의 AI 이니셔티브, 상호 파트너십 등 다양한 정보가 담김

### 동일 정보를 지식 그래프에 관계형으로 저장하여 활용도를 높임

- 같은 문서를 또 지식 그래프 형태로도 저장
- Graffiti, Neo4j와 같은 도구를 사용(Graffiti는 추상화 도구, Neo4j는 그래프 DBMS)
- 정보를 관계형(Relational) 구조로써 저장함으로써, 연결성·맥락·연관성 질의가 가능해짐
- 예시: “Amazon is where Anthropic hosts their models”처럼 기업 간 관계 쿼리가 가능

### 에이전트는 질문의 목적에 따라 데이터 소스를 유연하게 결정함

- AI 에이전트는 사용자의 질문 종류에 따라 정보 탐색 경로를 스스로 결정
- “어떤 정보가 답변을 가장 잘 도출하는지”에 중앙 초점을 둔 추론 및 경로 선택 수행
- 예를 들어, 단일 회사에 대한 정보라면 벡터 검색, 관계 탐색 질문에는 그래프 검색을 우선시

### 단일 기업 질의시 벡터 DB를, 두 기업 관계 질의시 지식 그래프를 자동 활용함

- “구글의 AI 이니셔티브?” 등 단일 대상을 묻는 질문을 하면 벡터 데이터베이스만 검색
- 답변 생성 후 에이전트는 답변에 사용한 도구(벡터 DB 사용)를 명확히 명시함
- “Amazon과 Anthropic의 관계” 등 관계 중심 질문에 대해선 지식 그래프만 사용
- 에이전트로부터 “그래프 서치가 사용되었다”는 점을 확인 가능함

### 양쪽 데이터 소스를 모두 활용하려면 시스템 프롬프트 커스터마이즈 혹은 명시적 요청이 가능

- 에이전트에 시스템 프롬프트를 수정하여 벡터 데이터베이스 및 그래프 모두 활용하도록 지정 가능
- 또는 사용자가 질문 내에서 명확히 “두 소스 모두 사용” 요청을 전달할 수 있음
- 이때 에이전트는 양쪽을 모두 탐색(hybrid search)하며 답변의 신뢰도를 높임

### 모든 시연은 무료 템플릿을 통해 누구나 직접 체험할 수 있게 제공됨

- 구축된 에이전트의 전체 템플릿이 무료로 제공된다고 직접 언급
- 영상 설명란 또는 안내 링크를 통해 전체 구현 가이드 영상과 템플릿 획득 경로를 안내

### Cloud Code 툴을 이용해 개발 및 실습 편의성을 강조함

- 에이전트 구축과정을 Cloud Code 툴로 지원한다고 밝힘
- Cloud Code 환경 내에서 개발·배포·테스트까지 쉽게 진행할 수 있도록 설명
- Cloud Code와 더불어 직접 에이전트 실행 및 배포 방법도 영상 전체판에서 다룸

### 템플릿과 전체 구현법, 개발 환경 모두 영상 본편에서 상세히 안내함

- 영상 내에서 짧은 데모를 보여주고, “전체 영상에서 상세 구현 방식”을 다룬다고 안내
- 전체 영상에서는 템플릿 사용법, 데이터 세팅, Cloud Code 연동, 벡터/그래프 동시 검색 등을 자세히 다룬다고 언급함
