---
author: AI Makers Club
pubDatetime: 2025-08-01T23:45:39.790Z
title: "Agents vs Workflows: Why Not Both? - Sam Bhagwat, Mastra.ai"
slug: 8SUJEqQNClw
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 \"에이전트 vs 워크플로\"라는 AI 개발 커뮤니티 내 논쟁을 중심축으로, 두 방식을 융합하는 실용적 접근의 필요성을 주장함 Anthropic(2023년 12월)과 OpenA"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/8SUJEqQNClw/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Agents vs Workflows: Why Not Both? — Sam Bhagwat, Mastra.ai](https://www.youtube.com/watch?v=8SUJEqQNClw)  
**채널명:** AI Engineer

## *에이전트와 워크플로: 왜 둘 다 사용하지 않는가? — Sam Bhagwat, Mastra.ai* 핵심 요약

- 영상은 "에이전트 vs 워크플로"라는 AI 개발 커뮤니티 내 논쟁을 중심축으로, 두 방식을 융합하는 실용적 접근의 필요성을 주장함
- Anthropic(2023년 12월)과 OpenAI(2024년 4월)의 에이전트 관련 논문·블로그 사례를 소개하며 기술 제공자 논의의 영향력을 지적
- "올바른 방법론"을 주장하는 대형 기업 혹은 인물의 위험성을 과거 웹 개발(React, GraphQL 등) 사례와 연결해 비판적으로 분석함
- 워크플로에 그래프 이론(grahp node & edge terminal API) 적용이 복잡성과 학습 곡선을 높인 경험을 바탕으로, 더욱 직관적이고 읽기 쉬운 워크플로 설계가 중요함을 강조
- 에이전트는 턴 기반 상호작용(예: AI와 인간의 번갈아 가는 대화), 워크플로는 단계적·의존적 처리 흐름(예: Tech tree)으로 구분하여 비유적으로 설명
- AI 엔지니어링에서 워크플로 사용이 증가한 이유로, 비결정성(Non-determinism)에 대처하며, 추적 및 신뢰성 보장이 필수적임을 구체적으로 언급
- 에이전트와 워크플로의 조합(composition) 사례(예: 에이전트가 또 다른 에이전트를 툴로 호출, 워크플로가 에이전트의 단계가 됨 등)와 그 응용 패턴을 예시와 함께 설명
- 실제 프로덕션에서는 단순한 구조보다 복합적 패턴의 결합(에이전트, 워크플로, 툴 등)이 높은 성능과 유연성을 제공함을 강조
- 이론보다 실무(Practice)가 더 빠르게 진화하는 현장 상황을 지적하며, 현실적이고 유연한 시스템 설계의 중요성을 재강조함
- Q&A에서는 구체적 사례, 커뮤니티적 유연성, 저자 정보(트위터 핸들, 저서 등) 안내 등으로 마무리

---

## 세부 요약 - 주제별 정리

### 초기 논쟁: 에이전트 대 워크플로 논의는 AI 개발 방법론을 둘러싼 현장의 큰 관심사임

- 트위터를 중심으로 "에이전트 vs 워크플로" 관련 열띤 논쟁이 벌어졌으며, 이 토론이 본 발표의 동기가 됨
- Anthropic가 2023년 12월에 발표한 "Building Effective Agents" 블로그 포스트에서 에이전트 구조, 다양한 워크플로 예시, 라우팅 및 오케스트레이션 방식 등을 도식화해 설명
- OpenAI가 2024년 4월 논문에서 워크플로에 대해 다소 비판적 태도를 표명, 일부 개발자 커뮤니티에서 반발 및 논란 발생
- SWIX, Latent Space 등 AI 논객들이 긴급 블로그 글로 논쟁에 적극적으로 참여함

### 대형 모델 제공자와 '올바른 방법론' 주도의 위험성에 대한 비판

- "그 사람이 되지 말라(JUST DON'T BE THAT GUY)"라는 밈을 인용, 지나치게 자신만이 "올바른 개발 방식"을 안다고 주장하는 인물의 행태를 비판
- 과거 10년간 웹 개발 현장에서 FANG(FAANG) 등 대형 기업 소속 인플루언서들이 플랫폼 사용법을 일방적으로 강의한 사례를 언급
- Googelers의 안티-React 담론, 어려운 기술 도입 권장 등 실무자에게 불편과 혼란을 준 경험을 구체적으로 소개
- 모델 제공기업(OpenAI 등)이 가진 정보/권위의 영향력이 생태계 논의 질에 영향 줄 수 있음을 우려

### 그래프 이론 기반 워크플로 API 도입의 혼란과 직관적 문법의 필요성

- LangChain 등에서 채택한 node 및 edge(그래프 이론) 터미널 API 기반 워크플로가 너무 복잡하며, 실무자의 이해 및 협업에 장애가 있다고 주장
- 과거 Gatsby(발표자 공동창업)에서 GraphQL 기반 데이터 쿼리 방식이 초기에 신선했으나, 실제로는 많은 사용자가 단순 React 프레임워크를 원했다는 실제 경험 공유
- 워크플로 설계 시 "그래프 이론"을 팀 전체가 학습하지 않아도 되는 읽기 쉬운(Readable) 코드 형태의 문법이 바람직함을 강조
- 직관적으로 제어 흐름을 위에서 아래로 읽을 수 있는 syntax(예시: 마스트라 워크플로의 플루언트 문법 등)가 협업과 확장에 유리함을 구체적 코드 예시로 설명

### 에이전트와 워크플로의 구조적 차이는 직관적인 비유로 쉽게 설명 가능함

- 에이전트: "턴 기반" 상호작용(예: 인간이 한 번 질문→AI가 응답→인간이 재질문, 등 반복), 필요 시 에이전트가 내부적으로 도구(tool) 호출
- 워크플로: 시빌라이제이션 게임의 테크 트리처럼 각 단계별 선행 조건과 의존성을 가진 처리 과정(예: A→B→C→D, 단계마다 전제 필요)
- 각각의 구조에서 발생하는 "스레드", "메모리", 조건/반복/분기/병렬 처리 등 다양한 emergent properties를 명확하게 구분해 설명

### AI 엔지니어링에서 워크플로 활용이 늘어난 근본적 이유는 비결정성을 관리하기 위함임

- "A→B→C" 순차 코드도 가능하지만, AI 시스템 특유의 비결정성(Non-determinism)에 대처하고, 결과의 Trace/Debug(추적)가 10배 중요
- AI 엔지니어링에서 발생하는 예측 불가성은 전통 소프트웨어보다 커서, 구조적 워크플로를 통해 신뢰성과 문제 추적성을 높이는 것이 필수적임
- 예시로, 한 번의 거대한 LLM(언어모델) 호출로 12가지 증상을 분석하는 것보다, 12개의 세부 호출로 나눔으로써 신뢰성을 높이는 전략을 제안

### 적합한 에이전트와 워크플로 구성은 설계상의 Trade-Off를 전제로 해야 함

- 힘(예: LLM의 자유도)과 제어(예: 고정된 단계적 흐름)는 상충 관계에 있음
- 기본은 파워 중심 설계로 시작, 신뢰성 문제가 발생할 때 제어-중심의 구조 보강이 필요
- 실제 프로젝트에서는 유연성과 명확성 간의 균형을 그때그때 설계에서 점검해야 함

### 시스템 설계 과정에서 화이트보드 세션 등 주기적 아키텍처 토의가 높은 효용을 제공함

- 실제 현장에서 동료 혹은 본인에게 아키텍처를 설명할 때, 화이트보드에 구조를 그려보는 연습을 강력히 권장
- 복잡한 에이전트 구조에서 문제(예: 대형 문서에서 원하는 정보를 잘 찾지 못함)가 발생할 때, LLM 호출을 세분화하는 등 구조적 개선점을 스스로 발견 가능
- 피드백 및 시각화 과정에서 보다 창의적이거나 효율적인 구조(예: 프리미티브 간 새로운 조합)를 찾을 수 있음을 경험적으로 설명

### 에이전트와 워크플로는 다양한 방식으로 결합(Composition) 가능하며 그 조합이 실질적 경쟁력을 제공함

- 에이전트가 도구(tool)로 또 다른 에이전트를 호출(예: 슈퍼바이저 모델, 연구 에이전트가 요약 에이전트와 상호작용)
- 워크플로의 단계(step)로 에이전트가 들어오거나, 워크플로 전체를 하나의 툴로 에이전트가 활용 가능
- 동적으로 에이전트가 사용하는 툴 리스트를 상황에 따라 주입(Injection)하는 방식도 있음. 예: 너무 많은 툴이 주어지면 에이전트 성능 저하 가능
- 워크플로 내부에 또 다른 워크플로(중첩 워크플로) 삽입도 가능하며, 이처럼 패턴을 복합적으로 조합할 때 실질적 시스템 완성도가 높아짐

### 현실 업무에서는 이론보다 실무 관행(Practice)이 더 빠르게 진화하고 있으므로 유연성이 핵심임

- 청중의 질의("에이전트에 20개 도구를 제공해도 성능이 좋다면 그게 현실적으로 맞는 사용법 아닌가?")에 대해 "맞다, 현장에서 잘 동작한다면 그것이 정답"이라고 수용적 태도를 보임
- AI 에이전트-워크플로 분야는 '이론'보다 실무 경험이 새로운 기준을 빠르게 만들어가는 중임을 현업 관점에서 강조

### 발표 마무리: 저서, 실무 커뮤니티, 질의응답 안내로 현실적 정보 제공

- 저자가 쓴 "Principles of AI Agents" 책을 현장에서도 배포 중임을 알림
- 트위터 핸들은 "@calcsam"이며, 실무 커뮤니티 활동을 활발히 하고 있음을 밝힘
- 남은 질의응답에서 커뮤니티 내 현장 실무 중심 학습을 권하고 발표를 마침
