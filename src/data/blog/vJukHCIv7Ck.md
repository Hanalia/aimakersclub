---
author: AI Makers Club
pubDatetime: 2026-07-11T23:45:19.240Z
title: "Stop AI Agent Hallucinations: 5 Techniques + Production Patterns - Elizabeth Fuentes, AWS"
slug: vJukHCIv7Ck
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "AI 에이전트가 환각(hallucination, 즉 근거 없는 허위 답변)을 줄이기 위해 프롬프트가 아닌 **코드 레벨에서 적용할 수 있는 5가지 실질적 기법**을 소개함 모든 기"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/vJukHCIv7Ck/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Stop AI Agent Hallucinations: 5 Techniques + Production Patterns - Elizabeth Fuentes, AWS](https://www.youtube.com/watch?v=vJukHCIv7Ck)  
**채널명:** AI Engineer

## *AI 에이전트 환각(Hallucination) 방지: 5가지 기법 및 프로덕션 적용 패턴* 핵심 요약

- AI 에이전트가 환각(hallucination, 즉 근거 없는 허위 답변)을 줄이기 위해 프롬프트가 아닌 **코드 레벨에서 적용할 수 있는 5가지 실질적 기법**을 소개함
- 모든 기법은 **토큰 낭비 최소화, 정확도 향상, 오류 탐지**를 목표로 하며, Strands 에이전트(Open Source AWS 프레임워크) 및 다양한 예시를 통해 실제 도입 방법을 시연함
- **Semantic Tool Selection(시맨틱 툴 선택):** 쿼리에 맞는 관련 툴만 컨텍스트에 포함해 토큰 사용량을 1,000~3,000개에서 300개 이하로 감소시키고 정확도 상승 확인
- **GraphRAG:** 기존 RAG의 단점을 극복하고 Neo4j 그래프DB와 Cypher 쿼리를 활용해, 개수·평균 등 구조적 쿼리에 대해 LLM의 “추정 답변” 대신 verifiable/computed 결과 제공
- **Multi-Agent Validation:** Swarm 구조로 다중(3) 에이전트가 액션-검증-비판(approval/rejection)을 순차적으로 수행, 실수 및 환각을 사용자에게 노출하지 않고 걸러냄
- **Neuro-symbolic Guardians:** 프롬프트에 써 넣는 정책이 무시되는 한계를 극복하고, 파이썬 후크(hook)로 규칙을 강제 실행시켜 도구 실행 전 논리적 제한을 실질적으로 적용
- **런타임 Guardians(에이전트 스티어링):** 코드 레벨 차단이 아닌 동적 규칙 적용 및 자율 수정(straightening/self-correct)을 가능하게 하여 사용 과제(Task) 완수를 유연하게 함
- 위 5가지 방식 각각에 대한 **코드 예시, 도출 결과, 토큰 사용량‧정확도 변화, 프로덕션 적용 지침** 등을 상세히 제공하며, Amazon Bedrock Agent Core 서비스와의 실전 연동법도 소개
- 각 데모/패턴에 대한 노트북 및 애플리케이션 소스와 AWS 무료 크레딧 활용 방법도 안내하여, 실제 개발자들이 실습·도입할 수 있도록 지원

---

## 세부 요약 - 주제별 정리

### AI 에이전트 환각 문제의 원인과 5가지 코드 기반 해결 전략 소개

- AI 에이전트의 응답 품질은 입력·출력 토큰에 직접 영향을 받으며, 불필요하거나 부정확한 토큰으로 인해 환각 문제가 발생함
- 프롬프트만으로는 근본적 개선이 어렵고, **코드 수준 개입**이 필요하며, 5가지 실전 테크닉을 통해 개선할 수 있음을 강조
- 시연 환경: AWS가 유지·관리하는 오픈소스 프레임워크 Strands Agent 사용 및 실습 데모로 여행 예약(Travel Agent) 에이전트 구축
- 실 데모 전환이 쉬운 QR 코드, 노트북 자료 및 구현 코드를 제공
- 각 기법 적용 전/후의 변화를 구체적으로 비교하여 효과를 직접 확인시킴

---

### 시맨틱 툴 선택(Semantic Tool Selection)으로 토큰 낭비와 선택 오류를 쉽게 줄임

- 예시 에이전트는 29개의 쓸모/설명이 다른 "도구"를 탑재함(비행편, 호텔, 결제, 날씨 등)
- 기존에는 모든 툴의 설명(각 170~200토큰)이 매 쿼리마다 컨텍스트 윈도우에 포함, “툴 설명만” 최대 3,000토큰 소모됨
- 실제로는 특정 쿼리마다 필요한 툴이 3개 이내이므로, 임베딩 기반 벡터DB(예시: Sentence Transformer, local file vectorstore)로 쿼리-툴 시맨틱 매칭
- 실제 적용 시 전체 29개 툴 대신, 현재 쿼리와 유사도가 가장 높은 3개의 툴만 컨텍스트에 넣어 토큰 사용량 극적 감소(3000 → 300 토큰)
- 정확도: 전체 툴 노출보다 필터된 툴 선택시 답변 정확도 상승, 특히 중복/모호 툴명(검색, 확인 등) 혼동도 최소화
- Strands 프레임워크의 도구 관리/스왑 기능으로, 대화 이력에 따라 동적으로 도구 목록을 갱신·관리 가능
- 토큰과 정확도 변화를 각 쿼리별 비교하여 수치 예시로 명확하게 제시

---

### 컨텍스트 데이터와 도구가 많은 에이전트일수록 메모리 설계 및 툴 교체 패턴이 중요함

- 에이전트에 메모리를 주면, 대화 히스토리(컨텍스트) 상에 사용된 모든 툴 정보가 누적되어 토큰 사용량 가파르게 증가
- Strands의 도구 스왑(swap) 패턴을 활용해, 매 대화ラ운드마다 필요한 툴만 컨텍스트에 남기고, 불필요 정보는 지움
- 이러한 설계로 대화형 챗봇/액션형 에이전트에서도 토큰 효율을 유지하며, 툴 선택의 오류까지 줄임
- 툴 DB 구축 시 embedding을 바꿔 로컬 벡터DB 및 Amazon Bedrock 등 인프라에 쉽게 이식 가능

---

### Amazon Bedrock Agent Core를 이용하면 프로덕션 환경에서 자동 툴 인덱스 관리가 간편해짐

- 데모는 노트북 및 로컬 환경 기반이나, AWS의 Agent Core·Agent Core Gateway 서비스로 자동 인덱스 관리 가능
- Agent Core Gateway는 툴 등록만 하면 내부적으로 콘텐츠 인덱싱 및 라우팅 레이어를 관리해줌
- 덕분에 인프라 수동 관리 없이 토큰 최적화, 툴 선택, 벡터 검색 등이 자동화됨

---

### GraphRAG 기법은 구조적 쿼리(집계, 연산, 관계 탐색)에 무결성 있고 정확한 답을 제공함

- 기존 Retrieval Augmented Generation(RAG)은 벡터 검색으로 일부 유사 문서 또는 데이터 청크만 LLM에 전달
- 예: “파리 내 호텔 평균 평점”, “수영장 보유 호텔 개수” 등 집계/관계형 쿼리에는 RAG가 무조건적으로 실제 답이 아닌 일부 샘플 기반 추정값 제공(LLM 추론)
- GraphRAG는 문서를 구조적 지식그래프로 변환하고, LLM이 Cypher(SQL 유사) 쿼리를 직접 생성·실행하여 수치 및 집계 결과를 계산 값으로 반환함
- 데모: Neo4j를 로컬 그래프DB로 사용, LLM이 Cypher로 쿼리해 “실제 존재하는 수치/관계답”만 출력
- 예시: 파리 평균 평점, 호텔 수영장 여부, 최고 평점 호텔의 가격·객실 등, 샘플링 기반 추정이 아닌 LLM 외부 DB 계산 값 직접 활용
- Neo4j 라이브러리(Langchain + LLM)로 텍스트 데이터 자동 그래프화 지원
- GraphRAG 적용 시, 잘못된 샘플/추정 답변 대신 "정확한 데이터, 0개면 0으로" 반환해 환각 최소화]

---

### Multi-Agent Validation(다중 에이전트 검증) 구조는 환각성 오류를 사용자에게 노출하지 않음

- 단일 에이전트는 도구 호출/실패시 에러를 감추고, 허위 성공 확인(successful response)을 반환할 수 있음(자신의 행동을 자신이 rationalization함)
- 이를 방지하기 위해 "swarm" 구조(3단계) 적용: Executor(실행), Validator(검증, 온오프), Critic(승인/거절)
- 각 에이전트는 따로 시스템 프롬프트, 도구세트, 역할을 부여하며, Strands가 handoff 자동관리
- 예시: 존재하지 않는 호텔 예약 시, 단일 에이전트는 '예약 성공' 허위 답을 주나, multi-agent 구조에서는 Error → 검증 불가 → 거절 시나리오로 환각 방지 및 사용자에게 명확한 실패 메시지 제공
- Swarm 클래스 및 openai 통합 실습 코드, 결과 비교 제시

---

### Neuro-symbolic Guardians는 프롬프트 기반 규칙의 실질적 한계를 코드 레벨 논리로 극복함

- 프롬프트나 도구 설명에 규칙(예: 최대 10명 예약)을 적어도 모델은 무시하거나 확률적으로 따름
- 파이썬 후크(hook provider/ before_tool_call 이벤트)를 활용, 도구 실행 직전 입력 파라미터 점검 및 규칙 위반 시 트리거/차단
- 규칙 종류 예:
    - 체크인 < 체크아웃 날짜 검증
    - 최대 인원 초과시 차단
    - 결제 확인 전 예약 확정 차단
    - 체크인 48시간 이내 취소 불가 등
- 코드 기반 정책은 예외 없이 실행되므로, 프롬프트 기반 정책보다 환각 방지 효과 확실
- 규칙 로직은 함수로 추가·확장 가능하며, Amazon Bedrock의 “Agent Core policies” 기능으로 SaaS 수준에서도 활용 가능

---

### 런타임 Guardians(에이전트 스티어링)는 전체 차단 대신 문제 상황을 동적으로 수정·진행함

- 후크 기반 정책은 무조건 블록/허용이지만, 때로는 “자율 조정(self-correct)”이 필요
- 예시: 룸 최대 4인이지만 6명 예약시 2개 룸 자동 분할 제안, 좌석 부족시 차선 대안 안내 등
- “Agent Control” 오픈소스 라이브러리(로컬 서버 + API 연동) 도입, 규칙 정의 시 코드 변경 없이 REST API로 규칙 등록/실행
- 실제 실습: 50명 예약 요청시, 블록 대신 “2개 룸으로 나눠 예약” 등으로 태스크 완수
- 하드 규칙은 후크, 소프트/대화형 룰은 스티어링 조합으로 유연한 컨트롤 가능

---

### 5가지 로컬 데모 패턴을 프로덕션에 바로 적용할 수 있도록 Amazon Bedrock Agent Core로 아키텍처를 확장함

- 실제 프로덕션 환경에선 Bedrock Agent Core 런타임·게이트웨이·단기/장기메모리·관찰(CloudWatch) 모듈을 사용
- 툴/룰/스티어링은 다이나모DB, 람다, 벡터DB와 연동해 각각 실시간 관리 가능
- 인프라 관리 없이 정책/룰 변경이 즉시 반영, Neo4j Aura free tier, AWS 리소스 크레딧 등 실제 작업환경 지원
- GitHub 레포지터리의 노트북, CDK(Cloud Development Kit) 기반 리소스 배포 템플릿까지 포함 제공

---

### 다섯 가지 전략은 환각 방지에 명확하게 기여하며 실전 환경 도입에 최적임을 요약 정리함

- 토큰 낭비는 시맨틱 툴 선택으로, 표본 추정 답변은 GraphRAG로, 허위 성공응답은 다중 에이전트로, 규칙 무시는 뉴로-심볼릭 가디언으로, 하드/소프트 정책은 런타임 스티어링으로 확실하게 개선
- 각 패턴별 실습 자료, 배포 코드, 실제 환경 전환 안내, AWS 리소스 및 크레딧 실전 활용법까지 포괄적으로 안내하며, 추가 실습 및 참고자료는 영상 내 리소스 링크를 통해 안내

---
