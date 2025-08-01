---
author: AI Makers Club
pubDatetime: 2025-07-25T08:20:22.979Z
title: "Human seeded Evals - Samuel Colvin, Pydantic"
slug: o_LRtAomJCs
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 AI Engineer New York에서 열린 Pyon에서 발표된 \"Pyantic 방식의 AI 애플리케이션 구축\" 강연을 다룸 새뮤얼 콜빈은 신속하면서도 안전하게 AI "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/o_LRtAomJCs/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Human seeded Evals — Samuel Colvin, Pydantic](https://www.youtube.com/watch?v=o_LRtAomJCs)  
**채널명:** AI Engineer

## *휴먼 시드 기반 평가 — 새뮤얼 콜빈, Pydantic* 핵심 요약

- 이 영상은 AI Engineer New York에서 열린 Pyon에서 발표된 "Pyantic 방식의 AI 애플리케이션 구축" 강연을 다룸
- 새뮤얼 콜빈은 신속하면서도 안전하게 AI 애플리케이션을 구축하는 데 있어 타입 안정성의 중요성을 강조함
- 생성형 AI(Generative AI) 환경에서 신뢰할 수 있고 확장성 있는 앱을 만드는 것이 더 어려워졌음을 지적함
- 타입 안정성을 통해 코드 리팩토링이 훨씬 수월해지고, 에이전트 기반 구조에서 버그를 조기에 예방할 수 있음을 시연함
- 영상에서는 에이전트(agent)의 표준 구조 및 종료 조건 문제, 그리고 Pydantic AI를 활용한 타입 안전 구조화 데이터 추출 예제를 실제 코드로 시연
- Pydantic AI의 에이전트 루프(agant loop)는 유효성 검사 실패 시 LLM에 오류를 피드백하여 자동으로 다시 시도하게 만듦
- Logfire와 같은 관찰성(observability) 플랫폼을 통해 AI 에이전트 동작을 추적하고 분석할 수 있음을 실제 시연을 통해 설명함
- 타입 안전성은 에이전트가 도구를 활용하면서도 각 데이터의 타입 일관성을 강제할 수 있게 하여, 리팩토링 및 유지보수가 현저히 쉬워짐
- 도구(tool) 활용 예시와 함께 데이터 클래스 기반 의존성(deps) 구조 등을 자세히 설명, 오직 Pydantic AI만큼 타입 안전을 추구하는 에이전트 프레임워크의 사례는 드묾
- 관찰성 도구(Logfire)는 에이전트 내부 과정, 오류, 실행 시간, 비용 등 다양한 정보를 세부적으로 추적할 수 있게 하여 실시간 디버깅과 최적화에 큰 역할을 함

---

## 세부 요약 - 주제별 정리

### 생성형 AI 환경에서 신뢰성 있고 확장 가능한 앱 구축은 더 어려워졌음을 설명함

- AI가 급변하고 있다는 분위기 속에서도, 안정적이고 확장 가능한 애플리케이션을 만드는 것은 여전히 어렵다는 점을 강조
- 생성형 AI(GenAI) 기술을 이용해 애플리케이션을 만들거나, 앱 내에 GenAI를 활용하든 이전보다 오히려 난이도가 높아졌음을 지적
- 신속한 개발과 안전한 개발을 동시에 달성할 수 있는 기법들이 필요함을 언급

### 타입 안전성 확보가 빠른 리팩터링과 안정적인 애플리케이션 개발에 핵심적임을 강조함

- 개발 초기에는 누구도 앱의 최종 형태를 정확히 알지 못하므로, 자주 리팩터링이 발생함
- 코드와 도구에 타입 안정성(Type Safety)이 보장될 때, 리팩터링이 훨씬 쉽고 안정적으로 가능함
- 타입 안정성은 단순히 배포 중 버그 예방 외에도, 개발 및 리팩터링 과정 전반에 걸쳐 생산성을 높임
- 타입 검사를 활용하여 코딩 에이전트(예, Cursor)는 자신의 작업을 검증할 수 있음
- 타입 세이프티가 없는 프레임워크(Langchain, Langraph 등)와 차별점을 둠

### 에이전트의 정의 및 표준 구조와 그 한계를 구체적으로 소개함

- Barry Zang이 AI Engineer New York에서 제시한 에이전트 정의/구조(Anthropic 정의 기반)가 현재 업계 표준임을 설명
- 에이전트는 환경, 도구, 시스템 프롬프트, 반복(while loop) 구조로 이루어짐
- LLM을 호출하고, 도구를 통해 상태를 업데이트한 뒤, 다시 LLM을 호출하는 루프 구조가 일반적임
- 이 구조의 주요 결함: 종료(Exit) 조건이 명확하게 정의되어 있지 않아 루프 탈출 시점이 불분명함
- 종료 조건으로는 LLM이 일반 텍스트를 반환하거나, 특정 "최종 결과 도구"를 호출하는 방식, 또는 구조화된 출력 타입 활용 등이 있음

### Pydantic AI를 활용한 구조화 데이터 추출의 기본 예제를 설명함

- Pydantic 모델(예: Person, 3개 필드)과 pantic AI를 이용해 비정형 문장에서 구조화 데이터를 추출하는 기본 예시를 시연
- 입력 문장은 짧지만, 실제로는 긴 PDF 등 대규모 문서나 복잡한 중첩 스키마도 처리 가능하다는 점을 강조
- 모델이 유효성 검사 후, Pydantic 모델 형태로 결과 데이터를 반환
- 단순 1회 호출(one-shot) 예제에서는 에이전트 루프 필요없이도 가능함을 명시

### 에이전트 루프의 진정한 가치는 유효성 검사 오류 피드백에 있음

- 예제에 필드 유효성 검증(예: 태어난 연도가 1900년 이전이어야 함)을 추가하며 에이전트 루프의 역할을 설명
- 모델이 오류(예: 1987 입력 → 연도 오류)를 반환하면, 에이전트가 해당 오류 정보를 LLM에 피드백하여 다시 시도
- "오류를 수정하고 재시도하십시오" 등 명확한 재요청 프롬프트를 통해 재시도한 결과, 올바른 데이터가 추출됨
- 실제 AI 현업에서는 도큐먼트 문자열에 명확한 기준을 추가해 해결하지만, 자동화된 재도전 방식으로 많은 간단한 오류를 효과적으로 해결 가능함

### 타입 안전성이 에이전트의 출력, 도구 등록, 데이터 접근 전반에 일관성을 보장함을 실증함

- 에이전트가 제네릭 타입(예: Person)에 기반하여 출력 타입을 정적으로 결정하면, 잘못된 필드 접근에 대해 컴파일 타임과 런타임 모두 오류를 잡을 수 있음
- 도구(tool)를 등록할 때에도 각 데이터의 타입(deps type) 일치가 강제됨
- 잘못된 타입(예: int→str로 변경) 사용 시, 즉시 오류가 발생하여 잘못된 데이터 연결을 원천 차단함
- 이러한 타입 안전성은 타 프레임워크에서는 찾아볼 수 없는 Pydantic AI만의 강점임을 강조

### 장기 기억 도구 예시로 도구와 타입 안전성 결합 시 실제 작동 방식을 상세하게 시연함

- 예제로 롱텀 메모리(long-term memory): ‘record memory’, ‘retrieve memory’ 두 가지 도구(tool)를 에이전트에 등록한 구조를 소개
- 각각의 도구는 decorator로 agent에 등록하며, 도구에서 컨텍스트(예: context.deps) 접근 시에도 타입 일관성이 보장됨
- Docker/Postgres 세팅 및 실행 과정 중 발생한 실패(error)도 타임라인, 값 변화 등 세부적으로 추측해 분석함
- 에이전트 실행 중, record memory에서 “Samuel”이라는 이름을 저장 후, retrieve memory 도구 필요 시 저장된 값을 기반으로 응답
- 도구 간 쿼리/응답의 내부 값 동작도 예시를 통해 실제로 추적

### 관찰성 플랫폼(Logfire)을 활용해 에이전트 프로세스와 오류, 시간, 비용을 투명하게 추적할 수 있음을 실증함

- Logfire라는 관찰성(observability) 도구를 코드에 연동하여 에이전트 동작, 내부 호출, 에러 발생 상황을 시각적으로 추적
- 실제 실패 사례를 이용해, 에이전트 각 단계별 수행 결과와 인자(argument) 전달, 쿼리 매칭 실패 원인 등 상세 내역을 Logfire에서 검증함
- Logfire를 통한 트레이싱 정보에는 각 호출의 실행 시간, 전체 트레이스와 개별 스팬별 비용까지 확인 가능
- 실시간 디버깅과 최적화는 물론 대규모 AI 시스템에서 중요한 인사이트 제공

### 타입 안전성과 관찰성 도구가 리팩터링, 디버깅, 유지보수성을 획기적으로 향상시킴

- Pydantic AI의 타입 세이프티는 초기에 약간의 추가 노력이 필요하지만, 코드 리팩터링과 유지보수에서 압도적인 장점을 제공
- Logfire, 타입 타이핑 시스템의 결합으로 AI 에이전트 개발 과정 전반의 투명성, 신뢰성, 문제 추적/해결능력이 크게 증가함
- 도구별, 단계별, 입력 파라미터별 모든 과정을 추적하며, 정확한 타이핑이 구조 전체의 일관성을 보장
- 전체적으로 커뮤니티 및 업계 표준의 한계(탈출 조건 미흡, 타입 일치 미보장 등)를 새로운 패러다임으로 극복 가능함

### Pydantic AI는 에이전트 프레임워크 중 타입 안전성을 가장 철저히 추구함을 다시 한 번 강조하고 마무리함

- Pydantic AI는 현존하는 에이전트 프레임워크 중 타입 안정성에 가장 강하게 집중하는 드문 사례임을 언급
- 사용자가 초기 세팅에서 다소의 노력이 필요하지만, 전체 개발 생애주기에서 압도적인 개선을 약속
- 발표 종료 전 감사 인사와 함께 마무리
