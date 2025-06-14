---
author: AI Makers Club
pubDatetime: 2025-06-14T08:23:21.968Z
title: "All the BEST RAG Strategies in ONE MCP for AI Coding Assistants"
slug: BdZ_GOaaz7M
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 AI 코딩 어시스턴트가 프로젝트와 문서 이해에 한계를 갖는 문제, 특히 레퍼런스 오류(“hallucination”)를 해결하기 위해 ‘crawl for AI RAG MCP "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/BdZ_GOaaz7M/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [All the BEST RAG Strategies in ONE MCP for AI Coding Assistants](https://www.youtube.com/watch?v=BdZ_GOaaz7M)  
**채널명:** Cole Medin

## *AI 코딩 어시스턴트를 위한 모든 최고의 RAG 전략, 하나의 MCP 서버에서!* 핵심 요약

- 영상은 AI 코딩 어시스턴트가 프로젝트와 문서 이해에 한계를 갖는 문제, 특히 레퍼런스 오류(“hallucination”)를 해결하기 위해 ‘crawl for AI RAG MCP 서버’를 개발한 과정을 소개함
- 기존 Superbase, MCP, Pantic AI, Boomerang Tasks, Rue Code 등 다양한 툴이 분리되어 있는 환경에서, 이 MCP 서버는 단일 마스터 허브형 솔루션이 되는 것을 지향함
- 서버는 RAG(검색증강생성) 기반 최신 문서 제공, 에이전트 분업, 프로젝트 관리, 작업 플래닝 등 AI 코딩 어시스턴트의 핵심 니즈를 통합적으로 지원함
- 오픈소스·무료로 제공되며, 설치와 설정은 매우 간단하며 다양한 RAG 전략을 자유롭게 on/off 할 수 있음(Readme에서 가이드 제공)
- Superbase와 연동하여 개별 프로젝트별 문서를 크롤링, 프라이빗 지식베이스에 저장하고, Versell AI SDK 공식 문서를 예시로 데모함
- 문서 크롤링 후 자체적으로 쪼개고(chunking), 코드 예제는 별도 벡터 DB에 저장하여 에이전트가 쉽게 참조하도록 하는 agentic rag 아키텍처 적용
- Contextual Embeddings, Hybrid Search, Agentic RAG, Re-ranking 등 최신 RAG 전략이 단계별로 적용되어 정확한 검색과 답변, 코드 예제 활용 등이 강화됨
- 각 전략별로 소스 코드 구현, 예시 쿼리 및 아웃풋 과정 구체적으로 시연함
- 앞으로는 멀티 쿼리 rag, 지식 그래프 기반 rag 등 더 다양한 전략을 통합할 계획임을 밝힘
- 본 MCP 서버와 차세대 Archon 프로젝트를 공개적으로 지속 개발할 계획이며, 커뮤니티의 참여를 독려함

---

## 세부 요약 - 주제별 정리

### AI 코딩 어시스턴트가 프로젝트 이해에 한계가 있다는 문제의식에서 솔루션 개발을 시작함

- 현재 AI 코딩 툴은 프로젝트 문서 및 맥락을 정확히 파악하지 못해 잦은 ‘hallucination’(잘못된 정보 생성)을 보임
- 외부 라이브러리(예: Superbase, MCP, Pantic AI 등) 활용 시 프로젝트 구조 및 문서 오해로 자주 문제 발생
- 이러한 한계를 해결하기 위해 ‘crawl for AI rag MCP 서버’를 직접 개발, 일부 구현 과정을 기존 채널에서 공유한 바 있음
- 기존 보유 툴(예: Boomerang Tasks, Rue Code, Context 7, Cloud Task Manager 등)이 각자 역할을 하지만, 통합성이 부족함을 인식
- 궁극적으로 “Archon”의 차세대 진화로 이 서버를 성장시키는 것이 목표임을 밝힘

### 모든 AI 코딩 보조 도구를 하나로 통합하는 마스터 MCP 서버의 비전 제시

- 분리된 여러 AI 코딩 지원 툴(문서 제공, 태스크 관리, 프로젝트 관리 등)을 하나의 MCP 서버에서 중앙 통제
- RAG 기반 강력한 지식 기반, 역할별 분리된 에이전트 관리, 프로젝트 태스크 플래닝 및 동시 지원 목표
- MCP 서버를 오픈소스로 공개하고, 손쉬운 설치 및 관리 방법(Readme 제공) 설명, 추가 RAG 전략 활성화도 선택적
- AI 코딩 어시스턴트, 기타 AI 에이전트와 연동해 활용 가능(N8N, Windsurf 등 지원)
- 개별 프로젝트별, 라이브러리별 최신 문서 자동 수집·관리로 일관된 레퍼런스 제공

### 프라이빗 지식 베이스 구축을 위한 문서 크롤링 및 Superbase 연동 예시 시연

- Versell AI SDK 공식 문서를 예시로 LLM 전용 Markdown 페이지에서 문서 전체 크롤링
- MCP 서버가 단일 페이지/사이트맵 등 다양한 구조의 웹 문서 크롤링 지원(네비게이션 재귀적 탐색 가능)
- Superbase와 연동되어, 크롤링한 문서가 자동으로 knowledge base(DB)에 저장됨
- 문서가 크고 방대한 경우 자동 쪼개기(chunking) 전략을 통해 검색 용이성 및 LLM 입력 효율화
- 코드 예제는 별도 vector DB(“코드 예제 테이블”)로 분리 저장하여, 문서와 예제를 별도로 빠르게 참조 가능

### 크롤링된 데이터로 AI 코딩 환경이 즉시 강화되는 실제 적용 예시 제시

- AI IDE에서 “Versell AI SDK 문서를 활용해 OpenAI 모델에서 스트림 텍스트 출력 방법 설명 요청” 예제 실행
- MCP 서버가 문서 + 코드 예제 DB에서 연관 데이터 검색, 적합한 예시/코드 조각 제공
- 결과로 IDE에 실제 사용할 수 있는 코딩 방법(return 방식, 함수 import 등)이 반환됨
- 실제 사이트 프론트엔드 UI를 예제로 개선하여 Cloud4 등 추가 연동에도 쉽게 활용됨을 시연

### 코드 예제를 별도 벡터 DB로 관리하는 agentic rag 아키텍처로 AI 보조가 실질적으로 강화됨

- 문서 전체와 코드 예제를 분리 저장해, AI가 텍스트 위주 문서와 실제 코드 활용 예시를 구분 가능
- agentic rag 방식 도입으로 에이전트가 ‘어떤 정보(문서/코드)’를 검색할지 목적에 따라 스스로 판단
- 코드 예제만을 대상으로 rag 쿼리하도록 설계된 별도 API/함수 제공(예: “코드 예제 쿼리” vs “문서 쿼리”)
- 실제 검색 결과, “OpenAI 스트리밍 출력 예제” 등 구체적 요구에 신속히 부합하는 실제 예제 코드 반환

### Contextual Embeddings로 문서 맥락을 LLM이 더 잘 이해하도록 개선함

- Anthropic 팀의 contextual retrieval 논문 전략 실제 적용(논문 링크 영상 아래 제공)
- 문서를 가공할 때, 각 chunk 앞에 ‘이 조각이 전체 문서 내 어떤 역할/위치인지’ 추가 문맥 프롬프트 결과를 prepend
- OpenAI API로 contextual embedding 생성, 향후 다양한 LLM·임베딩 모델도 지원 예정
- 데이터베이스에 저장된 chunk에는 “~~~” 구분자 기준 앞부분에 이 chunk의 가치를 요약한 문맥 정보가 들어감
- 특히 중간 위치 chunk에서 ‘이전/이후 내용’ 연결성이 보강, 검색 성능 향상에 기여

### 하이브리드(키워드+시맨틱) 검색 방식으로 rag 검색이 실제 질의에 더 매칭되게 함

- RAG는 기본적으로 시맨틱(의미 기반) 검색이며, 키워드 매치는 부족함
- ‘Hyprid Search’ 설정 시, 키워드 기반 검색을 병행하여 실질적으로 필요한 키워드가 포함된 조각을 함께 반환
- Superbase에서 케이스-인센서티브(keyword insensitive) 키워드 쿼리 수행, 예제 테이블/문서 테이블 모두 지원
- N8N 연동 예시로 키워드+시맨틱 검색이 혼합된 결과를 AI 보조가 받아들이는 과정 시연

### Re-ranking 전략으로 LLM 프롬프트 길이 문제를 해결하며 더욱 관련도 높은 결과만 반환

- ‘Re-ranking’은 검색된 다수 chunk(예: 50개)를 cross encoder(예: HuggingFace 모델)로 점수화해 관련 순서대로 정렬
- 로컬에서 cross encoder 모델 동작, 환경 변수로 re-ranking on/off 가능
- rag 쿼리 시 re-rank된 점수로 상위 관련도 n개만 LLM으로 전달 → 프롬프트 부담 감소 및 답변 품질 향상
- 실제 실행 결과, 가장 상위 chunk가 AI가 최종 답변으로 선택한 예제와 일치(상위 3점, 하위 -10.4점 예시)

### 앞으로의 발전 방향으로 멀티 쿼리 및 지식그래프 기반 rag 등 다양한 확장 전략 계획

- multi-query rag, query expansion, knowledge graph(graffiti, light rag 등) 적용 계획
- Archon 프로젝트와 MCP 서버를 완전히 통합, 오토크롤링, UI에서 실시간 관리 등 전면적인 확장 예정
- 목표: 어떤 도메인/목적이든 활용 가능한 범용 rag MCP 서버를 만들어 AI 어시스턴트·에이전트의 지식 백본이 되도록
- Archon을 공개적 오픈 소스 방식으로 커뮤니티와 협업 개발, 실제 프론트엔드 작업도 외부 참여자가 진행 중

### 오픈소스 개발 투명성, 커뮤니티 참여 독려 및 향후 개선 방향 공유

- MCP 서버 및 Archon은 끝까지 무료·오픈소스 개방, 누구든지 PR·이슈 참여 가능
- 영상 설명란·깃허브·댓글 등 모든 채널로 커뮤니티 의견과 직접 참여 적극 수렴
- 지속적으로 영상/워크샵/코스 등으로 전략 세부 내용을 심화 공유할 계획
- DynamiS AI Mastery 커뮤니티 및 온라인 코스에서 상세 도입 튜토리얼·심화 전략까지 지원 예정
- 본 MCP 서버/Archon이 AI 코딩 분야의 핵심 인프라로 진화하는 것을 함께 만들자는 비전 강조
