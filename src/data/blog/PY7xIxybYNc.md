---
author: AI Makers Club
pubDatetime: 2026-07-11T23:45:59.892Z
title: "Pydantic AI 2.0: The New Best Way to Build AI Agents is Composing Capabilities"
slug: PY7xIxybYNc
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 AI 에이전트 프레임워크인 Pydantic AI 2.0의 특징과 진보된 설계 철학(‘능력’ 중심 컴포저블 구조)을 중점적으로 소개함 기존 LangChain, Crew AI "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/PY7xIxybYNc/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Pydantic AI 2.0: The New Best Way to Build AI Agents is Composing Capabilities](https://www.youtube.com/watch?v=PY7xIxybYNc)  
**채널명:** Cole Medin

## *Pydantic AI 2.0: 컴포저블 능력(capability) 중심의 최신 에이전트 개발 패러다임* 핵심 요약

- 영상은 AI 에이전트 프레임워크인 Pydantic AI 2.0의 특징과 진보된 설계 철학(‘능력’ 중심 컴포저블 구조)을 중점적으로 소개함
- 기존 LangChain, Crew AI 등과 달리 Pydantic AI는 사용성과 커스터마이징, 프로덕션급 관리 기능을 동시에 제공해 산업 선도적이라는 평가를 받음
- 2.0 버전은 ‘capability(능력)’라는 단일 프리미티브 중심으로 에이전트의 구성요소(지시문, 도구, 라이프사이클 hook, 모델 설정 등)를 패키징함
- ‘capability’를 레고 블록처럼 조립하여 에이전트 간 쉽게 재사용 및 확장이 가능해졌으며, MCP 서버 및 기존 hook, guardrail, skill 등과도 통합 지원
- 새로운 구조하에서 개발자는 에이전트를 별도의 코드 작성 없이 기능 문서만 첨부해 자동으로 구축할 수 있을 정도로 자동화가 강화됨
- 1.0 구조와 비교해 2.0은 재사용성, 모듈화, 협업성 측면에서 압도적 성능 개선을 보여줌
- Progressive Disclosure 등 LLM 최적화 설계를 통해 수십~수백개의 capability를 채택해도 토큰 소모 최소화 및 필요 시 동적 로딩이 가능함
- Lean core(핵심 기본 기능)와 harness(확장 영역) 이중 구조 채택으로, 필수·선택 기능 간 경량화와 확장성을 동시에 달성함
- Nimble List와 같은 관련 오픈소스 도구 예시를 통해 실전 활용 방안과 개발 효율성까지 제시함
- 실제 코드 및 CLI 데모 예시를 통한 구체적 비교 및 활용 방안, 기초 설계 원칙, 공식 문서 활용법 등 실무적 가이드도 포함됨

---

## 세부 요약 - 주제별 정리

### Pydantic AI가 LangChain·Crew AI와 차별화되는 분야별 장점이 다시금 부각됨

- Pydantic AI는 출시 초반부터 에이전트 개발의 편의성과 커스터마이징 능력을 동시에 제공하며 업계 리더 자리를 유지함
- LangChain, Crew AI 등과 비교할 때 프로덕션을 목표로 한 복잡한 업무에 안정적 기반을 제공한다는 평가를 받음
- 업그레이드된 2.0이 다시 한번 시장 혁신을 주도하고, 타 경쟁 프레임워크와의 격차를 넓힘

### 2.0 “capability” 도입으로 에이전트 구조가 모듈화되고, 재사용성과 확장성이 획기적으로 개선됨

- 개선된 2.0 프레임워크의 중심은 capability(능력)라는 단일 기반 단위임
- capability는 에이전트가 수행할 지시문, 외부 도구, hook, guardrail, 모델 세팅 등 거의 모든 구성요소를 하나로 묶어줌
- 각 capability는 마치 레고 블록처럼 독립적으로 생성되어 여러 에이전트 간 자유롭게 공유·재사용이 가능함
- 이러한 구조적 단순화는 복잡성을 줄이면서 동시에 모든 커스텀화·확장 요구를 충족함

### 기존 MCP 서버·hook 등 개별 프리미티브와 capability가 통합되어, 설계·연동의 자유도가 극대화됨

- MCP 서버는 도구 집합을 패키징해 에이전트에 집어넣는 구조이나, capability의 일부로 자연스럽게 통합됨
- hook·guardrail·커스텀 skill 등도 capability 내부 요소로서 일관된 패턴 아래 통합 설계 가능
- 단일 capability 안에 여러 도구, 보안·제어 장치, 사용자 상호작용 방식까지 자유롭게 포함 가능

### AI 코딩 에이전트 SDK(예: Claude agent SDK, Codex SDK)의 등장으로 잠시 흔들렸으나, 2.0의 혁신으로 PMF를 재확보함

- 최근 개인 맞춤형 AI 에이전트 개발 트렌드는 단순 코딩 에이전트 SDK(Claude, Codex 등)로 쏠리는 경향이 있었음
- 해당 SDK들은 속도·비용(토큰 소모) 면에서는 Pydantic AI에 비해 다소 불리함
- 2.0 capability 구조 도입으로 신속한 도구·기능 연동, hook 추가 등 사용성이 업계 최고 수준에 도달함

### Nimble List 등 오픈소스 시각화 워크스페이스 도구의 연계로 개발 효율성과 코드 관리성이 증대됨

- Nimble List는 무료 오픈소스 시각화 워크스페이스로, Claude 코드·Codex와 연동됨
- agent가 파일 변경을 실행할 때 빨간색·초록색 diff(차이점) 및 마크다운·다이어그램까지 시각적으로 바로 볼 수 있음
- 변경 내용의 revert, accept, 주석 달기 등도 지원해 전체 코드베이스 관리·피드백이 쉽고 투명하게 이루어짐
- 다중 에이전트 세션, Kanban 보드, 개별 change 분석 등 협업 및 멀티태스킹에 유리한 기능 탑재
- 모든 데이터가 로컬 마크다운으로 저장되고 클라우드 의존성/락인 없이 완전 오프라인으로 동작함

### capability 구조 등장으로 더 이상 직접 프레임워크 코드를 작성할 필요 없이, 문서만으로 맞춤형 에이전트 구축이 가능해짐

- 공식 capability 문서(대단히 방대한 분량)는 사람보다는 코딩 에이전트가 직접 참조해 활용하도록 설계됨
- 설명서만 coding agent에 지정하면, 자동으로 원하는 에이전트 구성이 가능함
- 더 이상 개발자가 직접 프레임워크 코드를 작성할 필요가 없음(실제 제작자도 1년 이상 수동 작성하지 않음)

### 1.0 구조와 2.0 구조 비교: 코드 재사용성, 유지 관리성, 확장성에서 극명한 차이를 보여줌

- 1.0에서는 도구·지시문·모델 설정 등이 뭉뚱그려져 있어 재사용하거나 다른 에이전트에 옮기기가 비효율적
- 2.0에서는 capability별로 독립·모듈화되어, 예를 들어 knowledge base 질의나 사용자 escalation 등의 기능을 다양하게 재조합할 수 있음
- 여러 에이전트(예: FAQ만 응답하는 챗봇, escalation이 필요한 고객지원 챗봇)에서 동일 capability만 추가하면, 기능 개선이 모든 에이전트에 동시 적용됨

### capability 정의 코드 및 실제 CLI 시나리오 예시를 통해 구조적 진보와 효율적 운용 방안을 직접 확인할 수 있음

- capability 코드 예시: 지시문, 도구(예: search knowledge base), 모델 설정, hook 등을 하나의 객체로 패키징
- ‘pre-tool use hook’(도구 실행 전 후킹)등을 통한 보안/제어 강화 가능
- CLI 환경에서 “Orbit를 Slack에 연결할 수 있는가?”라는 질의에 knowledge base capability만 동적으로 로딩되어, 필요없는 escalation capability는 무시됨
- “이중 결제 환불 요청” 등 사용자의 질문 유형에 따라 고객지원/에스컬레이션 capability를 선택적으로 불러오고, 각 작업에 최적화된 응답 생성

### Progressive Disclosure(점진적 공개) 개념 채택으로 수십~수백 capability 동적 제공 시 LLM 성능 저하 없이 스마트 사용 가능

- 각 capability의 짧은 설명을 에이전트에 카탈로그화해 제공, LLM은 사용자의 요청에 맞는 capability만 설명서를 자세히 로딩함
- 이로 인해 불필요한 토큰 소모 없이 수십~수백 개의 capability를 동시에 장착 가능
- 실제 예시에서 knowledge base 조회, escalation 티켓 생성 등 각 역할에 따라 능동적으로 capability를 선택적·효율적으로 활용함

### 필수 기능과 선택적 고급 기능을 분리한 lean core와 harness 이중 구조로 경량성과 확장성을 모두 달성함

- lean core: ‘thinking’, ‘web search’, ‘tool search’ 등 모든 에이전트에 꼭 필요한 최소 기능군
- harness: 핵심에 포함되지 않는 부가/확장 기능(예: 코드 실행, Monty 오픈소스 샌드박스 등)
- 핵심(core)은 경량화되어 빠른 배포·동작 가능, harness는 필요시 확장해서 기능 추가 가능
- Monty(경량 샌드박스), 외부 서드파티 capability 등도 harness로 유연하게 추가 가능

### Pydantic AI 2.0은 복잡성은 줄이면서 강력한 커스터마이징 기능을 유지하는 ‘단순화된 강력함’을 지향함

- capability 도입으로 디벨로퍼의 반복 작업 부담, 코드 중복, 프레임워크 내부 복잡성이 대폭 완화됨
- 동시에 기존의 guardrail, hook, skill, 외부 MCP 등 고급 기능들은 모두 포용
- 코드·도구·사용자 인터랙션·보안·가드레일 등 실무에서 필요한 모든 측면을 일관된 구조로 관리 가능
