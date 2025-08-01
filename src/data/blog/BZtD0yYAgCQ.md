---
author: AI Makers Club
pubDatetime: 2025-07-21T23:48:01.877Z
title: "The Bitter Layout or: How I Learned to Love the Model Picker - Maximillian Piras, Yutori"
slug: BZtD0yYAgCQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "AI 기반 앱들이 최근 매우 유사한 레이아웃을 보이고 있으며, 대부분 입력 필드, 턴-바이-턴 UX, 다수의 모델을 선택할 수 있는 드롭다운을 포함 채팅봇 중심의 UX가 논쟁이 많"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/BZtD0yYAgCQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [The Bitter Layout or: How I Learned to Love the Model Picker — Maximillian Piras, Yutori](https://www.youtube.com/watch?v=BZtD0yYAgCQ)  
**채널명:** AI Engineer

## *씁쓸한 레이아웃 혹은: 내가 모델 피커를 사랑하게 된 계기* 핵심 요약

- AI 기반 앱들이 최근 매우 유사한 레이아웃을 보이고 있으며, 대부분 입력 필드, 턴-바이-턴 UX, 다수의 모델을 선택할 수 있는 드롭다운을 포함
- 채팅봇 중심의 UX가 논쟁이 많음에도 불구하고, 실제론 여전히 많은 사용자가 선호해 '슈뢰딩거의 챗(Chat)' 현상이 지속
- 2022년 Lionus Lee가 텍스트 완성형 UI의 한계를 지적했으나, ChatGPT의 성공으로 해당 패러다임이 빠르게 대중화됨
- 이후에도 여러 디자이너들이 "챗이 미래가 아니다"라고 주장했지만, 사용성 및 직관성 측면에서 챗이 여전히 널리 쓰이는 현실이 지속
- '모델 피커'는 사용자가 복잡한 옵션 중 모델을 선택하게 해, 모드(Mode) 선택과 유사한 UI 경험을 부여함
- Larry Tesler의 '모드없는 인터페이스' 철학을 소개하며, 모델 피커 역시 사용자에게는 비직관적이고 비효율적일 수 있음을 설명
- 유연성-사용성 트레이드오프 강조: 사용자의 요구가 명확할수록 최적화된 UX 제공 가능하지만, 유연성이 높아질수록 사용성 저하
- 제품 아키텍처적 관점에서, AI 산업은 통합(Integrated)과 모듈화(Modular) 사이를 오가며, 현재 모델 자체가 완전히 상품화되지 않았음을 지적
- Rich Sutton의 '씁쓸한 교훈'에 따라, 다음 모델이 계속해서 중요해지는 한 UI의 주요 과제는 '새 모델 수용에 적응'하는 것임을 강조
- 미래에는 절차적 사고에서 목표 및 제약 기반(Goal & Constraint) 사고로 전환해야 하며, 디자이너는 프로세스보다는 '번성하는 환경' 설계에 집중해야 함
- 디자인 시스템, 품질 보증, 사용자 스토리 등이 버티컬 레이어에서 AI와의 협업에 어떻게 활용될 수 있을지 제시하며 마무리

---

## 세부 요약 - 주제별 정리

### AI 앱 UX의 유사성이 빠르게 확산되며, 모두 "씁쓸한 레이아웃"을 갖추게 됨

- 최근 자주 사용하는 AI 기반 앱(챗봇, 답변 엔진, 코드 도우미 Vzero, Canva 등)이 모두 입력필드, 턴-바이-턴 UX, 모델 선택 드롭다운이라는 유사한 인터페이스 채택
- 많은 옵션이 담긴 모델 드롭다운 메뉴의 증가 확인
- 이러한 흐름이 챗봇 UX에 기존 기능을 억지로 맞추는(레트로핏) 분위기임을 지적
- 단순히 챗이 미래이냐 아니냐에 관한 논쟁이 아니라, 현상 자체의 맥락을 분석하고자 함

### 챗봇 UI 논쟁은 2022년부터 이어지지만, "슈뢰딩거의 챗"처럼 미래와 현재가 병존

- 챗봇 UI의 한계를 지적한 Lionus Lee의 2022년 5월 포스트로 논쟁이 시작됨 ("텍스트 완성 노출은 올바른 패러다임이 아니다")
- 불과 몇 달 후 ChatGPT(2022년 11월 공개)가 해당 패러다임을 성공적으로 대중화
- 2023년 5월 Amelia Wadenberger, 그 다음 달 Maggie Appleton 등 다른 디자이너들이 "챗은 미래가 아니다"라는 주장 지속
- 반면, 챗이 직관적이라는 반박도 많고, ChatGPT의 대성공 이후 "챗이 왜 성공하는지 차트만 봐라"는 밈까지 생김
- 2024년 3월 Julian Lear 등은 "챗은 속도에서 병목(bottleneck)이다"라는 구체적 근거까지 제시
- 그럼에도 대부분은 여전히 챗을 이용하고 있어, 챗봇의 운명은 "있으면서 없어야 할 것 같은" 슈뢰딩거적 상태

### 모델 피커는 모드 선택과 유사한 새로운 UI 고충을 낳고 있음

- 모델 피커란 수많은 모델 중 하나를 드롭다운으로 선택하는 UI
- Larry Tesler(카피/붙여넣기 창시자)의 '모드는 나쁘다(Modes are evil)' 철학 인용: 모드란 사용자가 평소와 다르게 입력해야 하는 상태, 대표적 예가 caps lock
- 모델 피커도 실질적으로 모드 셀렉터와 유사하게 작동
- 예시로 구 모델에서 모드별로 지원 여부가 달라 원하는 작업을 하려면 메뉴에서 적합한 모델을 일일이 찾는 불편함 보여줌
- 능동적이기보다는 사용자가 '이 모드엔 어떤 모델을 써야 하나'라고 반문하는 상황 발생

### 유연성과 사용성은 상호 트레이드오프 관계이며, 이는 챗 UI 논쟁에서 간과됨

- 디자인 원칙상 유저 니즈를 좁히면 사용성은 극대화, 유연성을 넓히면 사용성 저하(복잡함, 엣지케이스, 요구 증강)
- 많은 챗 UI 논쟁이 이 절충점을 간과하는 '절대 명제'로만 흘러가는 것 비판
- 실무적으론 지금 어떤 트레이드오프를 해야 하며, 인터페이스가 '언제까지 좋은가'의 타임프레임 고민 필요함

### 제품 아키텍처 이론은 UX 설계에 방향성을 제시하며, AI 산업 내 통합과 모듈화는 순환된다

- Clayton Christensen의 '혁신가의 해법(The Innovator’s Solution)' 아키텍처 이론 언급
- 시스템 구성요소의 연계 방식에 따라 통합형(Integrated) <-> 모듈형(Modular) 스펙트럼 구분
- 통합형: 초창기 독점 기술, 깊은 상호의존, 수직 확장에 적합 (예: IBM 메인프레임, 초기 Mac)
- 모듈형: 기술이 상품화되면 상호의존 약화, 수평 확장 / 부품 교체(예: PC산업, IBM의 사업전환)
- 항상 극단 양쪽에 머무는 것은 아니고, 산업별로 부위별 통합/모듈화가 동시다발적으로 진행됨
- 설계자는 어느 지점에서 통합해야 할지/모듈화해야 할지 전략적으로 판단 필요

### AI 모델이 계속해서 혁신될 때, UI의 주된 목적은 '다음 모델 수용'이 된다

- AI 업계에서 현재 가장 중요한 질문은 '모델이 상품화(commoditized)되고 있나?'
- Rich Sutton의 '씁쓸한 교훈(The Bitter Lesson)' 인용: 컴퓨팅 성능(계산량)의 스케일링 법칙이 지속되는 한, 다음 모델의 중요성은 사라지지 않음
- 실제론 새 모델이 나오면 모두가 가장 먼저 테스트하며 열광적으로 수용
- 그러므로 '모델이 상품화되지 않은 한 UI의 본질은 다음 모델/성능에 최적화되는 레이아웃이어야' 하며, 이것이 '씁쓸한 디자인 교훈'
- 즉, 레이아웃의 혁신/아름다움보다 신속한 모델 수용 적응력(ROI)이 더 중시되는 환경

### 모델 수용에 최적화된 "씁쓸한 레이아웃"이 반복되는 이유와 딜레마

- '씁쓸한 레이아웃(Bitter Layout)' 예시: 입력창-드롭다운 모델 피커-결과창 조합, 심미성/사용성 낮으나 확장성은 매우 뛰어남
- 새 모델이 나올 때마다 단 한 줄만 추가하면 앱이 더 똑똑해짐
- 디자인적으로 불만이 있어도, ROI 기준에서는 비난하기 어려움

### 차세대 디자인은 절차 중심에서 목표 및 제약 중심의 사고로 진화할 필요성 제기

- Brett Victor의 'The Future of Programming' 강연을 인용해, 프로그래밍 역시 바이너리-어셈블리-고급언어로 점진적 추상화 겪음
- 초기에는 모든 디테일을 수동 제어해야 했으나, 점차 목표-제약(Goal & Constraint) 지정 방식으로 발전
- 디자이너 역시 매우 세밀하게 흐름과 엣지케이스를 설계해왔으나, AI 앱 특유의 확률/불확실성, 동적 흐름 증가로 인해 더 높은 레이어의 추상화 접근 필요

### 디자인 시스템, 품질 관리, 사용자 스토리 등이 AI 및 생성형 UI와의 협업 방식에 미치는 시사점

- 디자인 시스템: 개발자/디자이너의 행동을 제약 및 가이드하는 역할, 앞으로는 생성형 UI와의 협업 툴로 활용 전망
- 품질 관리(QA): 전통적인 QA 역할이 AI 상대론 강화학습(예: RLHF)처럼 재해석 가능성
- 사용자 스토리: 사용자의 목표/동기를 언어화한 자료로, 프롬프트와 유사하게 시스템 프롬프트로 변환해 모델과 협업 가능
- 이 모든 요소가 인간-모델 협업, 디자인 추상화의 상위 레이어로 작동할 미래를 제시

### UX의 미래는 '구축'에서 '성장'으로, 즉 정원 가꾸기와 같은 관리로 이동해야 함

- Dario Amodei의 "생성형 AI 시스템은 구축(built)된다기보다 성장(grown)한다"는 인용
- 앞으로의 UX/디자인은 전통적 설계-구축적 패러다임보다, 끊임없는 진화/정원 가꾸기식 관리의 마인드셋이 필요함
- 이와 같은 사고 전환을 통해 "씁쓸한 레이아웃"을 넘어서게 될 것임을 시사하며 마무리
