---
author: AI Makers Club
pubDatetime: 2025-11-27T23:45:33.764Z
title: "From Stateless Nightmares to Durable Agents - Samuel Colvin, Pydantic"
slug: flf_IKnFYnE
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**Samuel Colvin(Pydantic 대표)가 Pydantic AI의 내구성 실행 기능과 Logfire, Evaluator, Gateway 등에 대해 시연 및 설명을 진행함"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/flf_IKnFYnE/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [From Stateless Nightmares to Durable Agents — Samuel Colvin, Pydantic](https://www.youtube.com/watch?v=flf_IKnFYnE)  
**채널명:** AI Engineer

## *무상태 악몽에서 내구성 있는 에이전트로 – Samuel Colvin, Pydantic* 핵심 요약

- **Samuel Colvin(Pydantic 대표)가 Pydantic AI의 내구성 실행 기능과 Logfire, Evaluator, Gateway 등에 대해 시연 및 설명을 진행함**
- **Pydantic AI는 Temporal 및 Devos와 같은 주요 내구성 실행(워크플로 오케스트레이션) 프레임워크와 통합되어 장기 실행 에이전트의 안정적인 동작을 지원함**
- **초기 예제로 두 에이전트가 20개의 질문을 주고받으며 답을 찾는 간단한 대화형 워크플로를 통해 내구성 실행 도입의 필요성을 제시함**
- **Temporal의 워크플로와 액티비티 모델을 설명하며, 비결정적(IO, 랜덤 등) 요소는 액티비티로 분리해 안정적인 스냅샷과 재시작 기능을 달성함**
- **Temporal을 이용해 에이전트가 중간에 실패하거나 시스템이 중단될 경우, 마치 캐시한 것처럼 재시작 지점부터 바로 복원·진행 가능함을 실습을 통해 선보임**
- **Logfire와의 연동을 통해 워크플로 진행 상황, 입력·출력, 실패 및 재실행 이력 등을 실시간 트레이싱할 수 있음을 시각적으로 시연함**
- **Pydantic evals로 다양한 LLM(GPT, Gemini, Claude 등) 모델별 성능과 비용, 질의 성공까지 필요한 단계 수 등을 측정해 비교 분석함**
- **‘Deep Research’ 구조 사례에서 여러 에이전트를 병렬로 실행하고 분석 에이전트를 사용해 데이터를 종합 분석하는 실제 활용 예시를 보여줌**
- **내구성 실행 도입으로 복잡한 워크플로 재시작 시 인프라 코딩 부담 없이 자동으로 이전 상태부터 빠르게 복원·재실행 가능함을 강조함**
- **곧 출시될 Pydantic AI Gateway와 자가 호스팅·관측성(Observability) 등 향후 신규 기능도 간단히 소개하며 마무리함**

---

## 세부 요약 - 주제별 정리

### Pydantic AI는 내구성 워크플로 오케스트레이션(Temporal, Devos 등)과 본질적으로 통합되어 있음

- Pydantic AI는 현재 Temporal, Devos를 듀러블(내구성) 실행 백엔드로 공식 지원하며, 5개의 추가 워크플로 오케스트레이션 시스템이 PR로 추가 중임
- 내구성 에이전트 프레임워크는 장기 실행, 체크포인팅, 신속 재시작 등 대형 서비스에 반드시 필요함
- 예시로 OpenAI와 다른 LLM 기업들이 대규모 연구 과정에 Temporal을 도입하고 있음을 언급

### 간단한 에이전트 예시(20 Questions)로 무상태 방식의 한계를 보여줌

- 두 개의 에이전트(답변자: 하이크 3.5 LLM, 질문자)가 “감자”라는 답을 찾으려고 20가지 질문을 주고받는 예제를 코드로 구현
- 기존 무상태(stateless) 방식에서는 중간에 시스템 장애나 프로세스 중단이 발생하면 처음부터 다시 시작해야 함 → 짧은 워크플로에서는 부담이 적지만, 장기 작업에서는 치명적임
- 에이전트가 같은 질문을 반복하거나, 실수로 완전히 잘못된 경로로 빠지는 등 LLM의 불안정성을 직접 시현

### 내구성 에이전트로의 전환 – Temporal을 활용한 코드 구조의 변화와 주요 원리 설명

- 동일한 20 Questions 예제에서 Answer/Question 에이전트를 TemporalAgent로 래핑
- Temporal 워크플로는 결정적(Deterministic)이어야 하며, 비결정적(IO, 랜덤 등) 작업은 별도의 액티비티로 추출하여 관리
- Temporal의 핵심 원리: 각 액티비티 입·출력을 모두 기록해, 실패하거나 중단된 경우 직전 결과를 그대로 복원해 불필요한 재연산 제거
- 워크플로 정의, Temporal 서버 연결, execute_workflow로 실행 등 주요 코드 프레임워크를 설명

### Temporal을 이용하면 시스템 장애, 서버 중단에도 작업을 신속히 복구하고 이어서 실행할 수 있음

- 20% 확률로 임의의 실패가 발생하도록 시뮬레이션하여 Temporal의 자동 재시도/복구 능력을 시연
- 프로세스가 실제로 강제 종료되어도(예: 서버 중단, 컨테이너 재시작) 워크플로 ID를 활용해 바로 재진입 및 복원이 가능함
- Logfire 연동으로 각 LLM 호출 시 캐싱된 응답이 즉시 반환되고, IO가 필요한 구간만 실제 재실행되는 과정을 시각적으로 설명
- 재시작 시 이미 완료된 단계를 통과해 곧바로 미실행 지점부터 신속하게 작업이 재개됨

### Logfire를 통한 워크플로 전체 과정 및 에이전트 동작 실시간 관측이 가능함

- Logfire 대시보드에서 워크플로 단위, 각 LLM 호출, 각 단계의 입력/출력 및 오류·예외 내역까지 상세히 관찰 가능
- 분산된 에이전트 구조에서도 개별 step 단위 트레이싱, 캐시 사용 여부, 작업 진행 상태를 실시간으로 모니터링할 수 있음

### 다양한 LLM(GPT 4.1, Gemini, Claude Sonnet 4.5 등)별 성능·비용을 Pydantic evals로 비교 분석함

- Pydantic evals를 이용해 각 모델별로 20 Questions 성공 여부, 평균 소요 step, 비용(예: Gemini의 경우 저비용/고속 등) 항목을 측정
- Gemini가 가장 속도가 빠른 것처럼 보였나 실제로는 무작위 답변을 빠르게 내놓으면서 정답률이 낮았다는 점을 확인
- 모델 성능 비교와 실제 활용도의 차이 등, 모델별 약점을 파악하는 데 evals의 유용성을 조명

### Deep Research 사례에서 내구성 에이전트의 실제 활용 가능성을 구체적으로 입증함

- 사용자의 리서치 요청(예: "런던에서 파이썬을 사용하는 헤지펀드 목록 찾기")을 처리하는 복합적 워크플로 설계·실행
- Plan Agent, Search Agent(병렬 검색), Analysis Agent 등 여러 에이전트 협업 구조로 설계됨
- Plan 단계에서 요약 작성, 최대 5단계 웹검색 실행 및 분석지침 자동 생성
- Search 단계는 Python TaskGroup 등으로 병렬 실행되며, 분석 단계는 Claude Sonnet 4.5와 같은 고성능 LLM을 사용
- Logfire로 각 단계별 소요 시간(예: Plan 9초), 병렬 검색 결과, 비용(예: 8센트), 성공/실패 여부를 추적 가능

### Temporal을 도입하면 인프라 레벨의 코딩 부담 없이 안정적 병렬성·스냅샷·워크플로 재시작이 실현됨

- 각 에이전트별 TemporalAgent 래핑만으로 내구성 구현, Imperative 코드(예: async.io gather, Task Group 등)는 그대로 활용 가능
- Analysis처럼 장기 실행이 예상되는 액티비티는 실행 제한시간(max duration) 명시 등 간단한 설정만으로 실무에 투입
- 워크플로 진행 도중 프로세스가 중단되더라도 실행 상태 자동 저장 후 재시작 시 즉각 복구
- 인공지능형 연구 및 데이터 수집, 분석 자동화 등 복잡·장기 워크플로에서 큰 실무적 이점

### Deep Research 워크플로의 내구성 실행 데모에서 프로세스 중단/재시작이 실제로도 즉시 복원됨을 증명함

- 복수 단계 병렬 검색, 분석 진행 도중 프로세스가 강제 종료되어도, ID 지정만으로 직전 진행 상황부터 빠르게 이어서 실행
- 분석 단계(activity)만 재실행되고 이전 단계(Plan, Search)는 결과 캐시 덕분에 즉시 복원됨
- 완료 후 추천 리포트, 비교 및 요약, 관련 링크 등 자동 출력

### Pydantic AI Gateway 등 신규 서비스와 기업 대상 관측성, 자가호스팅 기능 등의 로드맵이 예고됨

- 곧 공개 예정인 Pydantic AI Gateway에서는 GPT 등 주요 모델 및 오픈소스 엔진에 대한 일원화된 인퍼런스 구매 가능
- 엔터프라이즈용 자가 호스팅, 각종 observability(관측성) 서비스 제공 예정
- QR 코드 및 채널을 통한 얼리엑세스/피드백 요청으로 발표를 마무리

---
