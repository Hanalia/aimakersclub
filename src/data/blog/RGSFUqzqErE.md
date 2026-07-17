---
author: AI Makers Club
pubDatetime: 2026-07-17T23:46:18.956Z
title: "On AI and Knowledge - Pablo Castro, Distinguished Engineer & CVP for AI Knowledge, Microsoft"
slug: RGSFUqzqErE
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 강연에서는 Microsoft의 Pablo Castro가 AI와 지식의 연결, 그리고 이를 활용한 최신 에이전트 및 검색 시스템의 진화에 대해 심도있게 설명함 지식의 세 가지 카"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/RGSFUqzqErE/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [On AI and Knowledge — Pablo Castro, Distinguished Engineer & CVP for AI Knowledge, Microsoft](https://www.youtube.com/watch?v=RGSFUqzqErE)  
**채널명:** AI Engineer

## *AI와 지식: 마이크로소프트의 AI 지식 전략* 핵심 요약

- 본 강연에서는 Microsoft의 Pablo Castro가 AI와 지식의 연결, 그리고 이를 활용한 최신 에이전트 및 검색 시스템의 진화에 대해 심도있게 설명함
- 지식의 세 가지 카테고리(내재 지식, 외재 지식, 학습 지식)로 구분하여 각 범주별 역할과 실제 시스템에서의 활용 사례 제시
- 내재 지식은 모델 훈련 데이터와 파라메트릭 메모리에 저장된 정보로, 코딩 지원 진화 사례(1996년 IntelliSense, 2019년 GitHub Copilot 등)를 통해 기술혁신의 빠른 진행을 강조함
- Microsoft는 Foundry 플랫폼에서 수천 개의 다양한 AI 모델을 제공하며, Claude 등 최신 AI 모델도 쉽게 통합 가능하다고 발표
- 외재 지식(grounding) 확보를 위해 Microsoft IQ를 개발, 개인화된 에이전트가 조직 내 이메일, 문서, 차트 등 다양한 "주변 데이터"에 접근할 수 있는 단일 진입점 제공
- 검색 시스템은 벡터 데이터베이스 기반 단순 검색으로 시작해, 다양한 검색 기법(벡터+키워드 등) 및 agentic retrieval(반영, 복잡성 처리)로 발전; 실제 고객 시나리오에서 복합방식이 성능 우위를 보임
- Foundry IQ는 단순 사용자를 위한 자동화와 전문가를 위한 세부 제어를 모두 지원하는 계층화 구조로 설계됨
- 에이전트를 위한 효율적 토큰 사용(정보 밀도 높은 출력) 및 다양한 데이터 포맷(비정형, 정형, 웹 등) 지원 방안도 상세히 설명
- 학습 지식은 실제 업무 수행 및 평가 결과를 통해 에이전트가 스스로 최적화, 자동 튜닝 가능한 루프(agent optimizer)가 실제로 구현됨
- 노코드/로우코드 환경에서 지식베이스 구축 및 최적화, 실시간 평가, 손쉬운 배포까지 현실적으로 구현 가능함을 시연함

---

## 세부 요약 - 주제별 정리

### AI는 내재된 지식으로부터 혁신의 급격한 진전을 이뤘으며, 이는 코딩 지원 사례를 통해 뚜렷하게 드러남

- 내재 지식(intrinsic knowledge)은 AI 모델 훈련 데이터에 저장된 정보로, 모델이 처음부터 알고 있는 사실 및 규칙 집합을 의미함
- 캐스트로는 자신의 25년 간 코딩 경험을 예시로, 지식에 기반한 반복적 문제 해결의 본질을 설명
- 1996년 Microsoft IntelliSense 도입 당시, 함수 시그니처를 외우지 않아도 코딩 가능해졌음을 언급
- 2018년경 기계학습 도입으로 IntelliSense의 추천 옵션 랭킹까지 가능해짐(22년의 진화)
- 2021년 GitHub Copilot 출시, 기존 ChatGPT보다 앞서 내재 지식을 활용하여 실제 코딩을 지원한 전환점이 됨
- 이후 Cursor, GitHub Copilot X, Opus 4.5 등 점진적으로 더욱 강력한 코딩 AI 출현
- 최근에는 Open Claw 같은 성공적 소프트웨어도 ‘1줄의 수작업 코드 없이’ 만들어짐
- 이같은 빠른 혁신적 변화(‘기하급수적 발전 곡선’)의 밑바탕에는 모델의 내재 지식과 연산 능력이 있었음

### 마이크로소프트는 Foundry 플랫폼과 다양한 AI 모델 통합으로 개발자들이 편리하게 실전형 에이전트를 구축하도록 지원함

- Foundry는 GitHub에서 시작되어, 맥락화 시스템 및 에이전트 호스팅, 관찰, 관리까지 일관된 경험을 제공
- Azure의 마이크로소프트 모델 카탈로그에는 천여 개 AI 모델이 등록되어 있으며, Claude 등 최신 대화형 AI도 간편하게 이용 가능
- 사용자는 자신에게 맞는 모델을 선택하여 다양한 태스크에 바로 적용 가능
- 최신 발표: Claude가 Foundry에서 일반적으로 사용 가능해짐(발표 전날 공개)

### 외재 지식은 조직 내 문서·채팅 등 ‘주변 데이터’ 접근성을 위해 Microsoft IQ로 단일화된 진입점을 제공함

- 단일 에이전트가 실제로 업무에 투입되기 위해선, 조직(회사) 내외의 ‘주변 데이터(ambient data)’에 기반해 실시간 grounding 필요
- Microsoft IQ는 이러한 외재 지식 확보를 위한 다기능 진입점임
- Work IQ: 사내 SharePoint 문서, 이메일, 캘린더, 채팅, 구성원 관계 등 업무 데이터 연동 지원
- Fabric IQ: 데이터 웨어하우스, 데이터레이크, Power BI 등 분석 자산 직접 접근 가능
- Foundry IQ: 사용자가 직접 데이터 업로드 및 grounding에 활용 가능
- Web IQ: 퍼블릭 웹 데이터를 통한 grounding도 지원

### 검색(검색 시스템)은 단순 벡터 검색에서 융합적·복합적 retrieval로 빠르게 발전했고, 현실 시나리오에서 상호 결합이 더 우수함이 검증됨

- 초기 retrieval은 벡터 데이터베이스를 활용, 코사인 유사도 기반의 간단한 유사 검색에서 출발
- 단독 기법만으로는 실제 업무 시나리오에서 한계 노출: “정말로 코사인 유사도가 만능일까”라는 문제 제기
- 마이크로소프트 Foundry IQ의 검색 기술 평가 결과, 다양한 검색 방법(벡터, 키워드, 혼합 등)을 결합하면 단독 기법 대비 현격한 성능 향상
- “기법을 얼마나 잘 조합하느냐”가 결과 품질을 좌우
- 실제 고객 현장에서의 평가, 대표적 예시 데이터 등 수치·그래프 제시

### Foundry IQ는 사용자의 전문성 수준에 따라 자동화 또는 세분화 제어가 모두 가능한 계층형 구조로 설계되어 생산성과 전문성을 모두 충족함

- Foundry IQ는 “계층(layered)” 방식으로 설계되어, 단순 사용자는 파일 업로드 등만으로 자동 chunking, 벡터화, 랭킹 등 전 프로세스를 수행 가능
- 전문가/파워유저는 인덱스 구축, 벡터 퀀타이제이션, 검색 알고리즘 등 저수준 세팅도 직접 조정 가능
- 필요에 따라 상단 자동화-하단 수동 세부제어를 오가며 사용 가능
- 단일 지식베이스가 MCP 서버로 동작하여, 코드 작성 없이 바로 연결 가능(노코드/로우코드 통합)
- 크고 작은 데이터(예: PDF, 이미지, parquet 테이블 등) 모두 지원

### agentic retrieval은 복잡한 정보 요구에 반영 및 자체 평가 기능을 적용, 어려운 문제 상황에서 성능 우위를 보임

- 고급 검색 시나리오(예: 단일 답변이 아닌 복잡한 질의)의 경우, 에이전트가 자체적으로 “정보 필요 조건을 만족했는지” 반영(reflect) 후 답변
- 이 과정을 통해 “에이전틱(agentic)”한 retrieval 패턴이 성립, 단순 검색 방식 대비 데이터 내 다양성·포괄성·회수율 등 전반적 성능지표가 우수함
- 실제 평가에서 answer completeness, evidence recall 등 지표별 현격한 개선 수치 확인

### 지식베이스 구축과 세부 관리, 그리고 배치까지 모든 과정을 실제 인터페이스를 통해 시연하며 실전 적용성을 강조함

- UI 기반으로 지식베이스 생성, 다양한 데이터원(PDF, 정형 데이터, 웹 등) 지정 시연
- 에이전트와 지식베이스 연결 즉시 활용 가능, 별도의 glue code 없이 곧바로 서비스화 가능
- Azure Portal에서 인덱스, 벡터화, chunk 구조 등 내부 세부 동작까지 직접 조회 및 조정
- 초보자는 자동, 전문가 특화 옵션은 고급 설정을 통해 세심히 제어
- 다양한 chunk algorithm, 벡터 인덱싱, lexical control 방식 지원

### 정보 출력을 위한 토큰 효율성도 중시하여, “가장 정보 밀도가 높은 최소 토큰”을 목표로 체계적으로 개발됨

- 토큰 효율성(token efficiency)이 산업 전반에서 큰 이슈이므로, Foundry IQ 시스템 역시 평가단계에서 중요하게 관리
- 가장 적은 토큰에 최대 정보량을 담은 출력 설계를 지향(비용 절감 및 답변 밀도 극대화)
- 내부 벤치마크를 통해 다양한 retrieval task에서 토큰 소비 대비 정보 가치 체크

### 학습 지식(learned knowledge)은 실제 에이전트가 업무를 하며 개선을 반복함으로써 자동적으로 회사 고유의 경쟁력을 내재화함

- 학습 지식은 사람과 에이전트의 공동 작업, 그리고 반복적 실행과 평가에 의해 생성
- Satya Nadella(Microsoft CEO) 역시 “사람과 에이전트가 손잡고 만드는 학습 루프”를 강조
- 각 조직/회사만의 고유한 지식, 업무 방식, 분별 특성이 누적적으로 내부화되어 차별화된 경쟁력으로 발전

### Foundry의 agent optimizer를 통해 학습-평가-최적화-배포의 자동 루프가 실제 구현되며, 로우코드 환경에서 간편 적용 가능함

- Foundry 툴킷(예: VS Code 플러그인)에서 에이전트의 설정(instruction, skill 등)을 외부화, 자동 최적화 가능
- 평가 데이터셋 생성, 후속 후보(agent candidate) 반복 생성 및 성능 평가, best candidate 자동 적용
- hill climbing, J-power 류 자동화 루프로 다수 후보를 비교/적용
- 실제 예시에서는 baseline과 optimize 결과, 새롭게 산출된 에이전트 instruction도 손쉽게 적용 가능
- 사용자는 별도 수작업 없이 ‘최적의 설정’을 자동으로 선택·배포하여 빠르고 효율적인 에이전트 개선 가능

### 발표 마무리에서는 오늘 언급한 모든 지식 관리 및 AI 활용 기능을 ai.azure.com에서 직접 경험할 수 있음을 안내하며 클로징함

- ai.azure.com에서 Foundry, IQ, agent optimizer 등 모든 기능 즉시 사용 가능
- 영상을 마무리하며 “각 조직의 차별화된 지식 및 학습 루프 실현”을 강조
- Microsoft AI 전략의 선진적 실용성을 거듭 부각하며 강연 종료
