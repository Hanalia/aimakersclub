---
author: AI Makers Club
pubDatetime: 2025-06-30T23:45:32.058Z
title: "Intro to GraphRAG - Zach Blumenfeld"
slug: J-9EbJBxcbg
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 워크숍은 AI 기반 지식 보조(AI knowledge assistant) 구축에 활용되는 그래프 데이터베이스(Graph Database, 대표적으로 Neo4j) 및 GraphR"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/J-9EbJBxcbg/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Intro to GraphRAG — Zach Blumenfeld](https://www.youtube.com/watch?v=J-9EbJBxcbg)  
**채널명:** AI Engineer

## *GraphRAG 소개 — Zach Blumenfeld* 핵심 요약

- 본 워크숍은 AI 기반 지식 보조(AI knowledge assistant) 구축에 활용되는 그래프 데이터베이스(Graph Database, 대표적으로 Neo4j) 및 GraphRAG(지식 그래프 기반 RAG) 아키텍처의 기초를 소개함
- 실습 환경은 사전 세팅된 주피터 서버와 브라우저 기반 Neo4j 프리뷰를 활용하며, 참가자는 제공된 번호로 로그인 및 환경설정 파일(.env) 세팅을 진행함
- 워크숍은 3개 모듈로 구성: (1) 그래프 및 Cypher 쿼리 기초, (2) 비정형 데이터(이력서 등)에서 엔티티 추출·그래프 구축, (3) LangChain 기반 그래프 RAG 에이전트 구현
- Neo4j에서는 데이터 모델링은 ‘노드(명사)’, ‘관계(동사)’, ‘속성(프로퍼티)’ 구조로 진행하며, 관계 예시로 “person KNOWS skill” 사용
- Cypher 쿼리로 각 노드 및 관계 조회, 멀티홉 탐색, 유사 인물 탐색(공유 스킬 카운트), 인기 스킬 도출 등을 실습
- Vector search(임베딩 기반 벡터 유사도 검색) 및 커뮤니티 탐지(Leiden/Louvain 알고리즘)를 통해 인물-스킬 그래프상 의미적/통계적 클러스터링 구현
- 비정형 데이터(이력서)에서 Pydantic/LLM을 통한 사람/스킬 추출 및 그래프 삽입, 그리고 문서 계층 구조도 그래프화 가능함을 소개
- 유사 스킬/유사 인물 탐색에는 semantic similarity(임베딩·코사인 유사도 기반)와 하드매칭(공유스킬 기반 유사도) 모두를 적용하고, 그래프를 통해 가중치 조정 및 다단계 탐색이 가능함
- 최종적으로 LangChain의 LangGraph와 함수형 툴을 활용해, (1) 인물 보유 스킬 조회, (2) 유사 스킬 추천, (3) 유사 인물 탐색, (4) 특정 스킬 보유자 추천 등의 복합적 Agent 구축 과정을 시연함
- 워크숍 자료와 코드(GitHub 제공), 추가적인 고급 그래프 기법·MCP 서버 연동 등은 부스 또는 후속 워크숍에서 안내
 
## 세부 요약 - 주제별 정리

### 참가 환경 및 실습 준비가 철저하게 안내되며 사전 환경 세팅이 핵심임

- 참가자는 사전 배포된 번호(post-it)에 따라 주피터 서버와 브라우저 기반 Neo4j 프리뷰에 접속
- 로그인 정보는 “attendee+번호” 포맷을 사용(예: attendee153/153)
- 환경설정 파일(.env, WS.N) 복사, 깃허브 레포 클론, 경로이동 등 세부적인 실습 절차를 설명
- 워크숍 자료와 링크는 슬랙(Slack) 내 워크숍 채널 및 슬라이드로 공유
- 각 단계별로 환경상 문제나 번호 부여가 원활히 이루어지도록 Q&A가 실시간으로 동반
- 주피터 서버는 세션 종료 후 내려가나, 깃허브 코드로 후속 실습 가능 안내

### 그래프RAG 아키텍처는 에이전트, LLM, UI, 그리고 ‘지식 그래프’가 결합됨을 제시함

- 지식 보조 시스템(knowledge assistant)의 전형 아키텍처 소개: 에이전트, AI 모델(LLM), UI, 중앙 ‘지식 그래프’로 구성됨
- 데이터는 비정형(문서, PDF)·정형(CSV, RDB 등) 모두 그래프에 인제스트
- 지식 그래프의 역할: '질문 유형'에 맞춘 도메인별 논리·검색·추론의 기반 제공, 관계 명시를 통한 검색 논리의 투명성과 제어도 향상
- 단순 벡터 검색(one-shot search)과 달리, 질문 분해·복수 단계 탐색 및 의미적 추론(Agentic, 멀티홉 등)이 용이해짐
- 예시 유즈케이스: 스킬 조직 구조, 인재 탐색, 팀 구성·서브스티튜션 등

### 노드-관계-속성 기반 ‘프로퍼티 그래프’ 구조와 Cypher 쿼리 기초가 실습의 근간임

- Neo4j에서 데이터 모델링: 노드(명사), 관계(동사), 속성(문자·숫자·배열·벡터 등)
- 예시: 사람(person) 노드 <KNOWS> 스킬(skill) 노드(“person KNOWS skill” 구조), 각 노드는 이메일·이름 등 속성 가질 수 있음
- Cypher 쿼리를 통해 패턴 매칭 방식으로 데이터 탐색(예: MATCH (p:Person)-[:KNOWS]->(s:Skill) RETURN p, s)
- 노드 라벨(label), 고유 제약조건(uniqueness constraint) 설정 등 실무적인 쿼리 최적화 기법 안내
- Cypher는 SQL 유사하지만, 노드-관계 패턴 언어로서 직관적이며, 쿼리 결과는 테이블·그래프 모두 가능

### 회원·스킬 데이터를 이용해 그래프 구성부터 노드/관계 생성, 패턴 기반 탐색을 실습

- CSV 예시 데이터(이메일, 이름, 스킬 리스트)로부터 노드·관계 생성 루프(Cypher MERGE, 데이터프레임 활용) 수행
- ‘사람/스킬’ 제약조건 부여(빠른 조회/매칭), 노드/관계 중복 방지
- Cypher 쿼리로 인물-스킬 그래프 탐색(일부는 Chunk 단위), 관계 시각화(Neo4j 브라우저 프리뷰 및 드라이버 활용)
- 인기 스킬 TOP-N, 유사 인물 탐색(같은 스킬 보유자), 멀티홉 쿼리 등 실무 예제 반복적 제시
- distinct 등 Cypher의 중복 제거, 변수 선언, 결과 집계(aggregation) 등 문법적 디테일 반복 해설

### 그래프 기반 인물/스킬 유사도 탐색에 다양한 알고리즘·관계·지표를 병행 사용함

- 특정 인물(예: Lucy)과 유사한 스킬 보유자 다중 탐색(Cypher 멀티홉, 변수 길이 경로)
- 스킬 카운트 집계, 두 인물간 공유 스킬 수 기반 유사도 도출
- 효율적 반복 탐색 위해, “similar skill set” 등 추가 관계를 그래프 내 명시적으로 생성(업데이트 및 재운영 가능성 안내)
- 커스텀 유사도 관계를 통해 검색 최적화 및 의미적 관계 구조화 실습

### 그래프 임베딩(embedding) 및 벡터 검색(Vector Search)로 의미적 유사도 및 클러스터링 강화

- 스킬-설명(Description) 쌍 기준 텍스트 임베딩(Ada, 차원 1536) 적용, skill 노드에 벡터 속성 부여
- 벡터 인덱스 생성(skills_embedding) 및 와이즈 벡터 검색 기반 유사 스킬 추천(예: Python → Ruby, Java, Pandas 등)
- 유사도 스코어에 기반한 “similar semantic” 관계 생성 및 가중치 시각화, 그룹(예: 클라우드 관련, 데이터 분석 관련 기술 등) 자동 형성
- 임베딩의 직관적 시각화 및 커뮤니티별 분석, 커스텀 관계 삽입·제거로 세밀한 통제 및 검색 스코어 조정 가능

### 커뮤니티 감지(Leiden/Louvain)·그래프 분석으로 인재/스킬 집단 자동 분류

- Neo4j 데이터 과학(Graph Data Science) 클라이언트 활용, Leiden 알고리즘으로 인물-스킬 네트워크 내 커뮤니티 탐지
- 결과로 community id 속성 할당, 커뮤니티별 스킬 히트맵으로 집단 내 대표 스킬 도출(예: 데이터 엔지니어, 프론트엔드, ML 등 그룹화)
- 커뮤니티 감지는 직원 세분화, 고객 세분화, 추천 시스템 등 다양한 현업 응용 가능성 언급
- 반복 관계 구축(relationship materialization/refresh), 동적 데이터 반영을 위한 쿼리 재실행 패턴 설명

### 비정형 텍스트(이력서 등)에서 엔티티·관계 추출, 그래프 구축 절차가 구체적으로 제시됨

- 샘플 바이오 2개에서 사람/스킬 엔티티 추출 — Pydantic 기반 데이터 모델(person, skills 등)과 LLM(예시: GPT-4) 활용해 JSON 파싱
- 추출된 데이터로 그래프에 노드/관계 삽입(MERGE on email, name/skills setting)
- 프로퍼티·관계 추가, 새로운 인물/스킬 인서트 시 기존 커뮤니티·관계 갱신 필요(예: 유사스킬 관계 재생성 등)
- 복잡한 예시(문서 계층 구조)에서는 문서의 Headings, Sections, Subsections 등도 노드·관계로 표현해 서브그래프 생성, 문서 구조-엔티티 연계 검색 가능

### 스키마 설계 및 에이전트용 데이터모델 베스트프랙티스가 LLM 발전 방향과 엮여 설명됨

- 자연어 친화적 데이터 모델(예: person-KNOWS-skill), 간명한 라벨/속성 구조가 에이전트 쿼리 생성의 효율성 높임을 설명
- 대규모 LLM/Agent의 발전에 따라 데이터모델 복잡도와 동적 쿼리 생성, 프롬프트 설계(스키마 주석, 대표 쿼리 패턴 포함) 등 실무 팁 제공
- 복잡한 쿼리는 전용 Tool(파이썬 함수, MCP 서버 등)와 조합, 동적 쿼리 패턴 제한 등 등의 테크닉 안내

### 의미적 유사도(벡터), 하드 관계, 멀티스텝 검색을 조합해 실무 질의 최적화가 가능함

- semantic similarity(임베딩/코사인유사도 기반)와 skill overlap(공유 스킬 카운트) 방식 유사도 결합 예시
- Cypher에서 변수 길이 경로(0~2 hop) 활용, 복수 경로(UNION) 조합, 그리고 relation 가중치 조절 등 다양한 조합
- 쿼리 복잡도·비용(Neo4j vs. PostgreSQL 등), 데이터 위치(federation 여부), 퍼포먼스·코스팅 고려해, 벡터/그래프/외부DB 혼합 사용도 제안

### LangChain의 LangGraph와 함수별 도구 개발로 복합 그래프 에이전트를 실제로 구현함

- 네 가지 주요 툴(사람 보유 스킬 조회, 유사 스킬 탐색, 유사 인물 탐색, 스킬 기반 인물 추천)로 기능 세분화
- 각각의 툴은 Cypher 쿼리 혹은 벡터 탐색 기반 함수로 구현, LLM에 바인딩
- LangGraph의 create_react_agent 활용, 각 툴을 구성한 Agent 개발 및 대화형 테스트(Chatbot app, streaming 등)
- Agent가 질의 유형에 따라 적합한 툴을 선택, 쿼리-로직 추적 가능
- 스키마 주석(annotation) 및 대표 쿼리 패턴 제공으로 LLM이 동적으로 Cypher 생성, 질의·검색 자동화
- 실습자료, 코드는 GitHub 및 슬랙에서 공유, 추가 고급 세션(커뮤니티 분석 등) 및 부스에서의 생생한 시연 안내
