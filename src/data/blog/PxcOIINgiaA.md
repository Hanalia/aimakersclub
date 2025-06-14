---
author: AI Makers Club
pubDatetime: 2025-06-14T23:48:31.286Z
title: "Make RAG 100x Better with Real-Time Knowledge Graphs"
slug: PxcOIINgiaA
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**영상은 RAG(Retrieval Augmented Generation)의 한계를 극복하기 위한 실시간 지식 그래프 활용 방안을 집중적으로 설명함** **리트리벌 기반 생성(RA"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/PxcOIINgiaA/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Make RAG 100x Better with Real-Time Knowledge Graphs](https://www.youtube.com/watch?v=PxcOIINgiaA)  
**채널명:** Cole Medin

## *실시간 지식 그래프로 RAG를 100배 더 강력하게 만드는 방법* 핵심 요약

- **영상은 RAG(Retrieval Augmented Generation)의 한계를 극복하기 위한 실시간 지식 그래프 활용 방안을 집중적으로 설명함**
- **리트리벌 기반 생성(RAG)은 문서와 데이터를 AI 에이전트에게 제공하여 지식 기반 역할을 하지만, 기본 RAG는 지식 업데이트·동기화가 수동적이고 정적임**
- **Graffiti라는 오픈 소스 플랫폼을 통해 Temporal Aware Knowledge Graph(시간 정보를 포함한 지식 그래프) 구조를 도입, 지속적으로 변화하는 데이터를 자동으로 반영하고 히스토리까지 관리함**
- **예시로, 사용자의 신발 브랜드 선호도 변화를 단순 삽입·갱신이 아닌, 과거 기록을 함께 보존하는 형태로 시연**
- **Graffiti는 Neo4j 기반의 지식 그래프 엔진을 사용하며, 속도(보통 1초 미만 레이턴시)와 확장성에서 LightRAG·GraphRAG 등 기존 정적 지식 그래프 솔루션보다 우수함**
- **LLM(대형 언어모델)의 관계 추론·삽입 및 다양한 형식(JSON 등)의 Episode(삽입 데이터) 지원이 특징이며, 삽입·검색 모두 직관적인 함수 호출 한 번으로 가능**
- **템플릿 코드와 CLI(명령행 인터페이스) 기반 실습 예제를 통해 Graffiti의 세팅, 사용법, 내부 원리, AI 에이전트와 통합 전 과정을 상세히 시연함**
- **지식 그래프 검색·벡터 DB 검색의 병행 전략(하이브리드 RAG 등)도 소개하며, Graffiti를 활용할 때 이런 조합이 매우 강력하다고 강조함**

---

## 세부 요약 - 주제별 정리

### RAG의 본질적 한계는 정적 데이터 관리와 동기화의 번거로움에서 비롯됨

- 기본 RAG는 AI 에이전트에 문서·데이터를 주입해 지식 기반을 구성하지만, 신규 데이터 발생이나 수정 시마다 수동으로 동기화해줘야 함
- 사용자의 선호 변화, 내부 지표, 실시간 시장 상황 등 계속 변화하는 데이터에는 기존 RAG가 비효율적·신뢰성 부족
- AI 에이전트의 지식이 실제 데이터와 항상 일치하도록 유지하는 자동화 시스템의 필요성 대두

### Graffiti는 시간 정보를 포함한 지식 그래프로 동적 데이터 문제를 혁신적으로 해결함

- Graffiti는 오픈 소스 플랫폼으로, "Temporal Aware Knowledge Graph"라는 시간 축 정보를 함께 저장하는 지식 그래프 구축에 특화됨
- 데이터의 삽입·수정·폐기 이력(히스토리)이 모두 기록되어, 변화 과정까지 AI 에이전트가 이해할 수 있도록 함
- 예시: [케드라가 Adidas를 선호→신발이 망가지자 Puma로 선호 변경] 시, 단순 선호치 갱신이 아닌 선호 변화의 기록을 함께 저장
- 챗봇, 고객 대응, 동적인 비즈니스 시스템 등에서 강점 발휘

### Neo4j 기반의 Graffiti는 관련성·변화 이력·메타데이터 관계 탐색에 강점을 가짐

- Neo4j 엔진을 기반으로 지식 그래프가 생성되며, 각 정보를 노드로 연결
- 노드와 노드 간 관계에 "이전 버전", "최신 선호" 등 메타데이터 및 시간 흐름(when valid/invalid)이 반영됨
- 예: GPT-4와 3.5의 "이전 버전" 관계, 사용자의 선호 변화와 같은 다중 관계 표현 가능
- 지식 그래프 덕분에 관련 정보 탐색, 과거 맥락 추적 및 성능 향상 가능

### Graffiti와 기존 LightRAG/GraphRAG 등의 비교를 통해 서로 다른 장단점이 드러남

- LightRAG, GraphRAG 등은 주로 변화가 적은 문서 요약(정적 문서)에 최적화되어 있음
- Graffiti는 동적으로 변화하는 데이터, 지속적 업데이트 환경에 더 적합
- LightRAG 대비 Graffiti의 장점: 빠른 그래프 구성 및 질의 속도(1초 미만), 확장성, 실서비스 적용 용이성
- 정적/동적 데이터 각각에 맞는 도구 선택이 중요

### Graffiti의 설치, 환경 구성, 다양한 LLM 및 로컬 운영까지 실제 환경에서 Schritt-by-step으로 설명됨

- 필수 사전 조건: Python, Neo4j, OpenAI(또는 Gemini, Anthropic 등 LLM·Embedding 모델)
- Neo4j 설치 방법 2가지 소개: 공식 데스크톱 앱, Docker 기반 통합(Local AI 패키지 활용 등), 중요 환경 변수 지정(URI, ID, PW)
- 모든 예제·템플릿 코드는 AI IDE에서 직접 시연, GitHub 저장소·설치법 자세히 안내

### Graffiti의 Episode(삽입 데이터)는 텍스트, JSON 등 다양한 형태 지원하며 데이터 삽입이 간단함

- Graffiti의 add_episode 함수로 구조적·비구조적 정보를 자유롭게 삽입 가능
- 예) "Claude는 Anthropic의 대표 LLM" (단순 문자열), "GPT: {버전: 4, 이전버전: 3.5}" (JSON 형태)
- 삽입시 삽입 시점, 소스, 유효 시작/종료 및 기타 메타데이터 입력 지원
- 데이터가 갱신되거나 폐기될 때 invalidate 시점도 자동 관리(내부 처리)

### 강력하고 직관적인 질의(search) 시스템으로 AI 에이전트가 빠르고 세밀한 응답 제공 가능

- 단일 함수 호출(예: graffiti.search)로 원하는 정보 검색, 반환값에는 노드 ID, 팩트, 삽입·폐기 시점 등 포함
- 중심 노드(center node) 기반 검색 지원 → 특정 정보(예: 특정 LLM) 주변 관련 데이터만 세밀하게 필터링 가능
- 다양한 검색 레시피(search recipes)가 제공되어, 최적화된 질의가 가능함(노드 검색/엣지 중심 검색 구분 등)
- 질의 후 connection close 등 메모리 누수 방지 처리도 예제에 포함

### Graffiti 기반 전체 AI 에이전트 구축 및 지식 진화 실험 실습으로 실효성을 직접 검증

- Pyantic AI(파이썬 에이전트 프레임워크)와 연동, 에이전트가 Graffiti를 도구 삼아 지식 그래프 검색하도록 구현
- 삽입 스크립트(LLM evolution.py)에서 여러 단계(Phase)로 정보를 삽입: 1) GPT4.1, Gemini 2.5 Pro, Claude 3.7 → 2) Claude 4가 출시됨 → 3) Massive Language Model(MLM)이 등장(가상)
- 각 단계 별로 에이전트에게 "최고 LLM은?" 질문 반복, 삽입 데이터 변화에 맞게 에이전트 답변도 자동 진화
    - 1단계: Gemini 2.5 Pro가 최고 LLM
    - 2단계: Claude 4가 신규 최고 LLM, 과거 이력도 함께 언급
    - 3단계: "Claude 4가 최고이나, 이제 LLM은 구식, MLM이 대세"
- Graffiti의 시맨틱·시간적 컨텍스트 덕분에 매우 풍부하고 정확한 응답 생성 확인

### 벡터 DB와의 하이브리드 운용 등 다중 RAG 전략 조합이 이상적인 해결책임을 강조

- Graffiti 지식그래프와 벡터 DB(간단 텍스트 문서, 유사도 검색)의 동시 조합(에이전트에게 두 가지 검색툴 부여)이 가장 강력
- 경우에 따라 한 쪽은 구조적 관계/역사 관리에, 다른 쪽은 빠른 유사도 검색에 더 적합할 수 있음
- 최적 RAG 솔루션: 지식그래프+벡터DB 하이브리드 검색(예시: Agentic RAG 구조)
- Graffiti는 지식관리 축에서 최고의 오픈소스 솔루션 중 하나로 평가

### 실시간 데이터, 진화하는 환경에서 RAG+Graffiti 조합은 AI 에이전트 성능을 극적으로 끌어올림

- 각종 AI 기반 챗봇, 자동화된 고객지원, 동적으로 변화하는 비즈니스 데이터 처리 등에 적합
- 지식의 역사와 변화, 맥락까지 반영하는 답변이 가능해 만족스러운 고도화 경험 제공
- Graffiti 플랫폼의 향후 활용 확대와 추가 영상 예고

---
