---
author: AI Makers Club
pubDatetime: 2025-09-23T23:45:50.822Z
title: "Knowledge Graphs in n8n are FINALLY Here!"
slug: NQ3vJ8iZPaQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 N8N RAG(재현 기반 생성, Retrieval Augmented Generation) 템플릿에 지식 그래프 기능이 새롭게 추가된 내용을 소개함 기존 벡터 데이터베이스(P"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/NQ3vJ8iZPaQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Knowledge Graphs in n8n are FINALLY Here!](https://www.youtube.com/watch?v=NQ3vJ8iZPaQ)  
**채널명:** Cole Medin

## *N8N에 지식 그래프(Knowledge Graph)가 드디어 추가됨!* 핵심 요약

- 영상은 N8N RAG(재현 기반 생성, Retrieval Augmented Generation) 템플릿에 지식 그래프 기능이 새롭게 추가된 내용을 소개함
- 기존 벡터 데이터베이스(PostgreSQL, Quadrant, Pinecone 등) 기반 RAG 시스템은 데이터 사이의 '관계' 저장에 한계가 있었음
- 지식 그래프 도입으로 엔티티(예: 사람, 회사, 제품) 간의 복잡한 관계를 저장하고, 에이전트가 이 관계를 탐색할 수 있게 됨
- 영상에서는 'Graffiti MCP 서버'를 사용하여 벡터 데이터베이스 구축과 동시에 지식 그래프를 구축하는 방법을 시연
- Graffiti는 원시 텍스트로부터 엔티티 및 관계를 추출해 Neo4j 데이터베이스에 저장하며, OpenAI LLM을 활용함(다른 LLM도 설정 가능)
- N8N 내에서는 Graffiti MCP 서버와 연동하는 두 개의 노드(삽입, 조회)를 추가하여 동일 데이터로 벡터DB와 지식그래프를 동시에 구축
- 데모 예시를 통해: 벡터DB로 단일 회사 정보 조회, 지식 그래프로 여러 엔티티(Dr. Tanaka와 Dr. Chen) 관계형 질의 처리
- MCP 서버 셋업에는 Digital Ocean 등에서 N8N/Neo4j/Graffiti를 도커 컴포즈로 함께 실행, 포트 및 네트워크 설정, 방화벽 구성 필요
- Graffiti MCP 서버 연결에는 커뮤니티 MCP 노드(n8n-nodes-mc) 설치, 서버센트 이벤트 연결 및 툴 목록/실행 테스트가 필요함
- 지식 그래프는 대규모, 관계 중심 데이터에 강점이 있지만 처리 속도·비용 문제로 일부 경우에는 벡터DB 단독 사용이 더 적합할 수 있음

---

## 세부 요약 - 주제별 정리

### N8N RAG(재현 기반 생성) 템플릿의 구조와 기존 한계가 명확히 드러남

- *RAG(재현 기반 생성)* 템플릿은 Google Drive와 같은 데이터 소스에서 정보를 받아오고, 작은 청크로 쪼개어 벡터 데이터베이스에 저장
- 벡터 데이터베이스로 PG vector(포스트그레스 확장), Quadrant, Pinecone 등 다양한 엔진을 사용할 수 있음
- 에이전트(Agent)는 벡터DB의 청크 데이터를 검색하여 답변을 생성함
- 기존 방식은 “서로 다른 엔티티 간 의미 있는 관계” 저장/탐색이 사실상 불가능
- 예를 들어, 데이터베이스 내 어떤 회사에 대한 정보는 찾을 수 있지만, 그 회사와 타 엔티티(임원, 제품 등)와의 관계를 자연스럽게 연계하기 어려움
- 이로 인해 대규모 데이터셋에서 ‘연관성’ 질의가 필요할 경우, 에이전트가 올바르게 탐색하지 못하고 효율이 감소함

### 지식 그래프 도입을 통해 데이터 관계 탐색 능력이 극적으로 강화됨

- 지식 그래프는 노드(엔티티)와 관계(에지)로 데이터를 연결하는 방식
- 엔티티 사이의 모든 관계(예: 회사→임원, 회사→제품 등)를 명시적으로 저장·탐색할 수 있음
- 동일 데이터셋에 대해, 벡터DB·지식 그래프를 병행 구축해 활용 가능
- 실질적 예시: 한 회사의 임원진을 탐색하거나, 두 인물(Dr. Tanaka와 Dr. Chen) 간의 관계성 질의 등도 쉽게 해결 가능
- “기업의 리더십 팀” 정보 등 관계 중심 질의에서는 지식 그래프가 필수적임

### Graffiti MCP 서버와 Neo4j를 기반으로 RAG 파이프라인에 지식 그래프를 손쉽게 추가할 수 있음

- Graffiti MCP는 지식 그래프 구축 및 질의에 특화된 오픈소스 라이브러리/서버임
- Neo4j는 그래프 구조 저장에 최적화된 데이터베이스이며, Graffiti가 분석한 엔티티·관계를 저장
- Graffiti MCP 서버가 네트워크상에 동작하면서, N8N에서 손쉽게 접근 가능하도록 중계 역할 수행
- 오픈AI LLM이 텍스트로부터 자동으로 엔티티와 관계를 추출
- 커스터마이징을 통해 타 모델(CloudN 등)과 연동도 가능
- 전체적인 파이프라인: 동일 문서 데이터로 벡터DB·지식그래프 모두 실시간 구축

### N8N 셀프호스팅 환경과 Docker Compose로의 설치 과정이 순차적으로 안내됨

- N8N은 자체적으로 호스팅해야 하며(클라우드판 불가), Digital Ocean 등의 VPS에 Docker로 설치 권장
- Graffiti MCP와 Neo4j도 동일 환경(같은 Droplet 등)에 Docker Compose로 추가 기동
- 환경 변수(.env)에 OpenAI API 키 및 Neo4j 비밀번호 등 주요 설정 필요하며, Graffiti가 해당 키를 이용 LLM 연결
- Graffiti 코드 저장소(깃헙) 클론 후, MCP 서버 디렉터리 이동 및 .env 파일 구성
- 컨테이너 내 네트워킹을 위해 DB 접속 주소를 localhost 대신 Neo4j 컨테이너 명(neo4j)으로 수정

### 방화벽 및 네트워크 설정 등 실제 운영환경에서의 기술적 세부사항이 꼼꼼히 제시됨

- 도커 컨테이너 네트워크 내에서 N8N이 Graffiti MCP에 외부에서 연결 가능하도록 extra_hosts 옵션 추가
- host.docker.internal을 활용해 호스트 머신 IP로 접근할 수 있게 구성(도커 네이티브 기능)
- Docker ps, Docker exec 등 명령어로 컨테이너 상태/게이트웨이 IP 파악
- 방화벽(UFW)을 사용, MCP 서버 포트(예: 8000 혹은 8030)에 대해 N8N 컨테이너 IP만 접근 허용
- 공용 포트 전체를 열지 않고 특정 컨테이너만 허용해 보안 유지
- 방화벽 reload 명령으로 보안 설정 적용

### N8N에 맞춤형 커뮤니티 MCP 노드(n8n-nodes-mc) 설치 및 Graffiti MCP 연결법이 단계별 설명됨

- N8N 기본 MCP 연동 기능으로는 Graffiti MCP 서버를 완벽히 지원하지 못함
- 커뮤니티 MCP 노드(n8n-nodes-mc)를 npm에서 설치하여 세부 연결 지원 가능
- N8N 설정 > 커뮤니티 노드 > MCP 노드 검색/설치 후, MCP 클라이언트 노드 추가
- 프로토콜(Server Sent Events), IP(host.docker.internal), 포트(8030 등) 설정으로 연결
- “List available tools” 기능으로 MCP 서버에 정상적으로 연결되었는지 확인(메모리 추가, 노드 탐색 등 지원)
- 사용 가능한 툴 중 add memory(지식그래프에 삽입), search memory nodes(질의) 등 주요 기능 확인

### 벡터DB와 지식 그래프를 동시 활용하는 RAG 파이프라인 구성법이 구체적으로 제시됨

- 기존 RAG 파이프라인에 node 한 개만 추가하여 Graffiti MCP를 통한 지식 그래프 구축 가능
- 파일명(episode_name), 본문(episode_body)을 Graffiti MCP에 넘기면, OpenAI LLM을 이용해 엔티티/관계 추출 자동 실행
- 벡터DB에 동시에 데이터 삽입(병행체계)
- 에이전트는 Query(질의)를 넘기면 search memory nodes 툴을 통해 LLM이 필요한 탐색질의를 스스로 결정함
- 복잡한 질의어를 직접 지정할 필요 없이, 에이전트가 관계형 그래프 탐색을 주체적으로 진행 가능

### 벡터DB와 지식 그래프의 장점·단점 및 적용 시 고려사항이 실제 예시와 함께 제공됨

- 벡터DB는 빠르고, 대량의 독립적인 정보 조회에 적합함(단일 엔티티 검색)
- 지식 그래프는 다수 엔티티 간의 관계/연결 중심 질의에 탁월(복잡 연관 질의)
- LLM을 통한 관계 추출 과정은 속도가 느리고 비용이 더 들 수 있음(특히 대용량 데이터에서)
- 관계 기반 데이터가 적거나 간단한 경우, 지식 그래프 추가는 오히려 시스템을 느리게 만들 수 있음
- 따라서 데이터 특성, 쿼리 성향에 따라 벡터DB 단독, 지식그래프+벡터DB, 지식그래프 단독 중 신중한 선택 필요

### 전체 구축/연동을 실제 데모 및 데이터로 시연하여 실전 적용성을 높임

- Google Drive에서 업데이트한 파일 하나를 테스트 삼아 전체 RAG 파이프라인 실행
- 해당 문서가 벡터DB와 지식 그래프 양쪽 모두에 삽입되며, LLM이 자동으로 엔티티와 관계 추출
- 실시간으로 워크플로우에서 삽입/탐색 결과를 확인 가능
- 관련 로그, MCP 상태 확인 등 실습에 필요한 모든 명령과 설정이 영어 원문 그대로 동봉됨

### 향후 사용자 맞춤형 템플릿 발전 방향 및 확장성에 대한 잠정적 안내가 부가됨

- Graffiti MCP 서버, LLM, N8N 파이프라인 구성은 각자의 데이터와 사용처에 맞게 자유롭게 커스터마이즈 가능
- 예를 들어 OpenAI 이외에 다른 LLM 사용, 검색 논리 세분화 등 다양한 확장 여지 존재
- 향후 벡터DB와 지식 그래프의 조합별 성능 및 사용성을 비교하는 추가 영상 제작 예정  
- 영상 시청자 요청에 따라 맞춤형 발전 방향도 꾸준히 제공할 것임
