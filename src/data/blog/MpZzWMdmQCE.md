---
author: AI Makers Club
pubDatetime: 2026-07-10T08:18:51.116Z
title: "Your coding agent doesn't always follow your rules - Talha Sheikh, Checkout.com"
slug: MpZzWMdmQCE
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "연사는 Claude와 같은 LLM 기반 코딩 에이전트에게 작업을 맡길 때, 대부분의 경우 자동 완료 결과에 신뢰를 두기 어렵다는 문제를 제기함 Claude를 통한 작업 수행 과정에"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/MpZzWMdmQCE/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your coding agent doesn't always follow your rules — Talha Sheikh, Checkout.com](https://www.youtube.com/watch?v=MpZzWMdmQCE)  
**채널명:** AI Engineer

## *코딩 에이전트가 항상 지시를 따르지 않는 이유 — Talha Sheikh, Checkout.com* 핵심 요약

- 연사는 Claude와 같은 LLM 기반 코딩 에이전트에게 작업을 맡길 때, 대부분의 경우 자동 완료 결과에 신뢰를 두기 어렵다는 문제를 제기함
- Claude를 통한 작업 수행 과정에서 반복적으로 세부 수정을 요구해야 하며, 사용자는 매번 직접 결과를 검사하고 피드백을 주는 인간 '집행층(enforcement layer)' 역할을 함
- 완전히 자동화된 신뢰성 확보가 필요하다는 니즈에서, 연사는 ‘Vector V1’라는 검증 도구를 개발하여 Claude의 코드를 자동으로 테스트하고, 실패 시 반복적으로 개선하도록 설계함
- 해당 도구는 config 파일과 테스트 케이스 정의를 통해 동작하며, 실패 시 Claude에 계속 피드백을 전달하여 통과시킴
- Anthropic 엔지니어로부터 차세대 LLM이 이 검증 단계 없이도 인간 수준의 신뢰를 달성할 것이라는 피드백을 받았으나, 연사는 실제로 ‘능력(capability)’ 향상과 ‘신뢰성(reliability)’은 별개임을 경험적으로 강조함
- 모델에 아무리 정확한 스펙과 지시사항을 줘도, ‘검증’ 단계 없이는 원하는 결과를 신뢰할 수 없으며, ‘가드레일’을 많이 둘수록 작은 모델로도 원하는 성과를 얻을 수 있음을 시연
- Enforcement/Verification 시스템은 특정 벤더의 독자적 솔루션이 아닌, 언어나 워크플로우에 무관하게 모두가 사용할 수 있는, 일종의 계약(Contract, Harness) 패턴으로 발전해야 함을 주장
- Anthropic, OpenAI(하니스 엔지니어링), Meta, Facebook, WorkOS 등 여러 기업들도 자체 검증/피드백 시스템을 적극 구축 중임을 예시로 소개
- 요약적으로 “코드 생산” 자체보다는 “검증/하니스 구축”이 AI 시대 개발 생산성 및 품질에 가장 중요한 요소가 되었음을 강조함
- Vector Harness는 공개되어 있으며, LinkedIn을 통해 공유 가능함

---

## 세부 요약 - 주제별 정리

### Claude와 같은 코딩 에이전트의 자동화는 반복적인 인간 개입 없이는 신뢰하기 어렵다는 문제점이 드러남

- 연사는 실제로 Claude와 같은 LLM 기반 코딩 에이전트에게 일정 기능 개발을 요청하는 사례에서 발표를 시작함
- 에이전트가 주어진 업무를 여러 하위 작업(subtask)으로 세분화하며 각 하위 에이전트가 동작하는 과정을 실시간으로 보여줌
- 최종적으로 “작업이 완료됨”이란 출력이 나오지만, 실제 실행 시 여러 문제점이 발생함
- 반복적으로 “이 부분을 수정해달라”, “이 부분이 누락되었다”는 추가 지시가 필요하며, 전체적인 업무 완성 여부의 판단은 결국 사용자가 직접 해야 함
- 지시사항이 많아도 적어도, 매번 인간 사용자가 결과를 검사하고 피드백을 주며 책임을 져야 함
- 에이전트가 알아서 완벽한 결과를 줄 것이라 기대하기 어려운 현상의 실전 사례를 언급

### 자동 검증 계층(Enforcement Layer)의 필요성에서 Vector V1 도구를 개발함

- 이상적인 자동화란, 에이전트가 완료됐다고 말할 때 자동으로 “완성”임을 검증할 수 있어야 한다는 니즈가 존재함
- 이를 위해 연사는 Vector V1이라는 제품(Enforcement Layer)을 개발함
- Claude가 작업을 끝내면 Claude Hook을 이용해 자동으로 Vector V1이 호출되어 결과물을 검증
- 검증은 config 파일로 구체적인 테스트 케이스를 정의하고, 실제로 통과 여부를 자동 체크함
- 실패하면 Claude에 내용을 피드백하고, 결과를 패스할 때까지 반복하며 자동화된 “완성” 상태에 근접
- 실제 테스트 출력을 사례로 들어, 부분 실패 및 반복 시도, 최종 성공 과정을 시각적으로 보여줌

### AI 코드 작성의 본질적 문제는 “수행 여부”가 아니라 “신뢰(Trust) 확보”임

- Claude를 지칭하지만, 모든 LLM Agent에도 해당되는 문제임을 언급
- 핵심 쟁점은 “에이전트가 실제로 임무를 완수했는가?”가 아니라, “에이전트의 결과물을 신뢰할 수 있는가?”에 놓여 있음
- 아무리 탁월한 사양(spec), MCP 서버, 하위 에이전트 및 맥락 제공을 하더라도 검증(verification)이 반드시 필요함
- 명확한 지시(instruction)와 검증(verification)은 별개이므로, 자동화의 신뢰성은 오로지 검증 계층에 달림

### 자동화 검증의 효과는 고성능 LLM뿐만 아니라 소형 모델, 오픈소스 모델에도 적용 가능함

- Guardrails(가드레일, 일종의 제약 및 검증 장치)만 잘 설계된다면 Haiku, 오픈소스 모델 등 소형 LLM에서도 신뢰성 높은 결과를 얻을 수 있음
- Frontier Model(Opus 등) 사용시 가장 비싸지만 원샷에 가까운 결과 가능
- Guardrail, Harness에 시간/노력을 투자할수록 비용 및 리스크를 낮출 수 있음
- Harness(검증 계층) 자체를 설계하면 비동기 실행, 분산 환경 등 다양한 형태에 유연하게 적용 가능
- Guardrail 수증가와 Harness 완성도 향상이 전체 AI 개발의 효율 및 신뢰성 좌우

### 실제 대형 AI 기업들도 각기 다른 자동화 검증 시스템을 구축 중임

- Anthropic, Meta, Facebook, Checkout.com 등 다양한 기업이 각각 Enforcement 및 Verification 시스템을 자체 개발
- 각 사례마다 요구되는 검증 기준, 도구, 절차 등이 달라 범용 솔루션이나 공유가 쉽지 않음
- 개별 회사별 맞춤형 시스템 개발이 일반화되어, 특정 솔루션의 범용적 적용에는 한계가 있음
- 이 경험을 통해 개인 솔루션(Enforcement Layer, Harness 등)은 조직별로 상이하다는 교훈 도출

### 언어/플랫폼을 가리지 않는 보편적 패턴, 일종의 계약(Contract)이 필요함을 주장함

- Verification/Enforcement 로직이 언어나 플랫폼에 독립적이어야 전체가 공유 가능함
- 대화(Conversation) 종료 시, 코드 실행 전 Git Pre-commit, 멀티 에이전트 워크플로, 비동기 운영 등 다양한 단계에서 적용 가능해야 함
- LLM적용 여부, 언어, 환경과 상관없이 ‘deterministic’(결정적) 실행 가능한 로직이 필요함
- 검증 기준을 개발자/원하는 스펙대로 자유롭게 정의하고, 그에 맞게 모든 단계에서 자동 실행되는 Harness/Contract 체계를 제안

### 구체적 Harness/Verification 도구 및 패턴 사례(Anthropic, OpenAI, Cudo, WorkOS 등)가 확산되고 있음

- Anthropic의 ‘executed advisor pattern’: 한 에이전트는 코드를 생성, 또다른 에이전트(Advisor)는 피드백을 주는 패턴
- OpenAI의 ‘harness engineering’: 다양한 툴/컨텍스트가 주어진 상태에서 검증/검사 로직이 따로 설계됨
- Cudo 등은 Comprehensive Code Review 시스템을 제공, 코드 PR 리뷰, 문제 발견 및 피드백 루프 강화
- WorkOS의 예시: “Enforce don’t instruct”(지시가 아닌 검사·강제 실행을 강조)라는 방식으로 각 단계별 결정적 체크 실행
- 여러 기업/오픈소스에서 일관되게 등장하는 “피드백-검증-재시도-승인” 루프를 강조

### AI 코딩 개발의 핵심 가치는 “코드 작성”이 아니라 “체계적 검증/하니스 설계”에 있음을 강조함

- “코드를 잘 짜는 것”에서 “검증 시스템을 잘 만드는 것”으로 개발 파라다임이 이동함
- “코드”가 아니라 “신뢰받을 수 있는 검증 층”의 설계가 AI 시대 개발자의 신규 경쟁력임을 촉구
- Harness/검증 계층을 중점적으로 개발해야 비용, 신뢰성, 생산성 모두를 끌어올릴 수 있음
- 실제로 Harness에 충분히 투자하면 작은 모델, 오픈소스 등 비용 효율적 대체재 활용 폭이 넓어짐

### 발표자가 소개한 Vector Harness는 실제로 공개되어 있으며, 연락 시 공유 가능함

- Vector Harness는 LinkedIn을 통해 요청 시 공유 가능
- 청중 질문: 상용화 및 공개 유무 관련 질의 및 LinkedIn 정보 제공
- Harness 구축에는 상당한 Token 소모 필요(‘회사 내 최대 토큰 사용자’ 농담 에피소드 인용)
- 최종적으로 Harness와 검증 계층이 개발의 승패를 좌우함을 다시 한번 강조하며 Q&A 종료

### Harness Layer(검증/집행 계층)의 설계가 AI 개발 효율과 신뢰성의 새로운 본질임을 역설함

- 코드의 가치보다 ‘검증 계층의 디자인’이 더 높은 부가가치를 창출함
- Harness(계약, 검증 레이어)를 최우선으로 설계할 때 전체 워크플로 신뢰성과 속도가 향상됨
- 속도보다 체계적인 “검증 계층 설계”가 전체 AI/코딩 생산성과 안정성의 관건임을 마지막까지 누차 강조함
