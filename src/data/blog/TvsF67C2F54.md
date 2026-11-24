---
author: AI Makers Club
pubDatetime: 2026-11-24T23:44:59.131Z
title: "How to Ship Millions of Lines of Agent-Written Code - Jarred Sumner, Anthropic"
slug: TvsF67C2F54
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상의 주제는 Bun 런타임 및 Anthropic에서 진행된 'ahead-of-time(AOT) 컴파일러' 도입과, 수백만 줄에 달하는 에이전트(모델) 작성 코드의 신뢰할 수 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/TvsF67C2F54/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How to Ship Millions of Lines of Agent-Written Code — Jarred Sumner, Anthropic](https://www.youtube.com/watch?v=TvsF67C2F54)  
**채널명:** AI Engineer

## *수백만 줄의 에이전트가 작성한 코드를 효율적으로 배포하는 방법 — Jarred Sumner, Anthropic* 핵심 요약

- 이 영상의 주제는 Bun 런타임 및 Anthropic에서 진행된 'ahead-of-time(AOT) 컴파일러' 도입과, 수백만 줄에 달하는 에이전트(모델) 작성 코드의 신뢰할 수 있는 배포(Ship)에 관한 실전 경험이다.
- Bun은 JavaScript 런타임으로, 최근 대규모 PR을 통해 기존 JIT(Just-In-Time) 방식에서 AOT(사전 컴파일) 방식으로 전환하는 대형 기능을 도입했다.
- JavaScript 기반 애플리케이션에서 CPU 시간의 절반 정도가 JIT 컴파일에 소모됨을 데이터로 확인, AOT 도입을 통해 메모리 사용량을 약 4배, 시작 속도를 2배 개선함.
- Bun 팀은 이전에 전체 Bun 코드를 Rust로 리라이트한 경험이 있으나, Cloud Code의 경우 테스트 포트의 어려움과 신뢰성 저하 위험 때문에 Rust로의 재작성 대신 JS 성능 개선(AOT 도입)을 택함.
- AOT 컴파일러는 TypeScript 타입을 '신뢰'하기보다 '예측값'으로 활용하고, 이는 LLM 등 모델 기반 코드 생성 환경에서 검증·테스트 체계와 결합하여 효과적으로 기능함을 강조.
- Bun의 AOT 컴파일 활성화 이후 JetStream3 등 주요 벤치마크에서 JS Core JIT, Node.js(V8 JIT) 대비 우수한 성능을 입증함(단, eval/new Function 등 해석기 필요 상황은 예외).
- 모든 변경 사항을 객관적이고 신뢰성 높은 테스트(기존 test suite, WebKit 테스트, Test 262, Cloudflare Code 테스트 등)로 검증해, 모델이 테스트 자체를 오염시키는 상황을 방지.
- 대형 프로젝트 추진 과정에서는 수차례의 리라이트(5회), 다중 에이전트 동시 실행(최대 140개), 지속적 성능 계측과 메트릭 트래킹 및 보안·테스트 체계의 중요성을 반복해서 강조.
- JavaScript의 취약점인 prototype pollution 등 보안을 위해 API 제한 등 현실적 조치 도입; 빌드·테스트 자동화(슬랙 Scorecard 등)를 통해 품질 유지.
- Bun의 최신 기능은 `bun upgrade --canary`를 통해 미리 체험 가능하다고 안내함.

---

## 세부 요약 - 주제별 정리

### JS AOT 컴파일러 도입으로 클라우드 기반 앱의 메모리와 속도를 대폭 개선함

- Bun은 Cloud Code에서 사용되는 JavaScript 런타임으로, 최근 대규모 코드 개선을 진행함.
- 전통적으로 JS 앱 실행 시 CPU 자원의 절반가량이 JIT 컴파일러(JIT: Just-In-Time)에 소모됨.
- Cloud Code는 iOS 앱 등 다중 세션에서 매번 JS 코드를 컴파일해야 해, 속도와 메모리 이슈가 심각하게 대두됨.
- ahead-of-time(AOT) 컴파일러 도입으로 런타임 이전에 코드 전체를 컴파일하여 실행 오버헤드를 크게 낮춤.
- 결과적으로 Cloud Code 시작 속도가 2배 빨라지고, 메모리 사용량이 약 4분의 1 수준으로 줄어듦(4x 메모리 절감).
- 내부 도그푸딩 테스트에서 효과를 확인했으며, 곧 외부에 공개할 예정이라고 언급.

### Bun을 Rust로 리라이트한 성공 경험을 바탕으로도 Cloud Code에는 재작성보다 JS 성능 개선을 선택함

- Bun 자체는 2023년 여름 Rust로 전면 리라이트를 실시한 경험이 있음.
- Rust 리라이트 당시 TypeScript 기반의 테스트 코드가 프로젝트 언어 독립성이 높아 신뢰도 있는 전환이 가능했음.
- 그러나 Cloud Code는 테스트가 TypeScript로만 작성되어 있어, Rust 포팅 시 테스트 자체의 신뢰 확보가 어려움.
- 테스트 신뢰성 저하를 우려해, 새 언어 리라이트(재작성)보다 기존 JS 코드를 더 빠르게 만드는 방향(AOT 채택)으로 선회.

### 에이전트·모델 기반 개발에서 대형 프로젝트 품질 확보의 핵심은 테스트 신뢰와 자동화임

- 프로젝트는 5회 이상의 대대적 리라이트 과정을 거쳐 완성됨.
- 코드 품질 신뢰의 핵심은 '테스트가 얼마나 신뢰할 수 있게 기존 기능을 보장하는가'에 달려 있음.
- Bun에서는 Bun 고유 테스트뿐 아니라 WebKit, Test 262, Cloudflare Code 등 방대한 외부·표준 테스트를 활용함.
- AOT 컴파일러 적용 후 Bun의 자체 테스트 러너를 AOT 모드에서도 동작하게 하여 검증 수단을 강화.
- 테스트 신뢰성 덕분에 모델이 새 코드를 생성할 때 기존 테스트 케이스를 침해하거나 오염시킬 여지가 줄어듦.

### AOT 도입 후 성능 지표에서 수치로 입증되는 성능 향상을 달성함

- JavaScript 엔진 성능 벤치마크인 JetStream 3 기준, Bun(AOT) 런타임이 JS Core JIT, Node.js(V8 JIT)보다 뛰어난 결과 기록(단, 모든 상황은 아님).
- Bun compile을 통한 단일 쓰레드 성능이 TypeScript 7의 Go 수동 리라이트 포트보다 빠르게 동작함.
- 향후 multi-thread 지원도 예정하고 있다고 밝힘.

### 복잡한 컴포넌트 설계·구현에서 타입 신뢰와 패턴 검증을 모델과 자동화 시스템이 결합해서 처리함

- TypeScript 타입을 절대 신뢰하지 않고 '예측' 값으로 processing함. 이는 LLM 코드 생성 특성과도 잘 맞음.
- 에이전트·모델이 compilers 코드를 생성하는 경우, 다양한 테스트 패턴(fuzzing)과 cross-validation을 통해 신뢰성을 높임.
- 예를 들어 Claude(Anthropic LLM)가 코드 제너레이터로 활용되어, 다양한 패턴을 자동 생성·검증함.

### 대형 리팩토링 및 성능 개선 과정에서 반복적인 재설계·리라이트와 병렬 에이전트 활용이 현실적인 솔루션임

- 이 프로젝트는 총 5차례(버전) 내부 리라이트를 반복적으로 실행함.
- 초기 설계(1~2번째): 빌드/런타임 성능이 불만족스럽거나 코드 품질이 떨어져 반복적으로 폐기 및 재작업 실시.
- 3~4번째: 최대 140개 에이전트가 동시에 코드를 작성하여 대량 구현 후 성능·안정성 테스트.
- 5번째 버전에서 최종적으로 빌드 시간이 20초 미만, 코드 품질과 성능 모두 만족해 배포 결정을 내림.
- 대규모 프로젝트에서는 첫 구현 이후 전체 코드를 일괄 빌드, 이후 긴 주기의 에이전트가 구체적으로 수정 및 테스팅 진행이 효과적임.

### 검증 및 성능 측정 메트릭은 자동화 도구와 채널(슬랙 Scorecard 등)로 실시간 트래킹함

- 프로젝트 진행 중 시간 단위로 여러 메트릭(메모리 사용량, 시작 시간, 빌드 결과 등)을 자동 업데이트하여 팀 내 공유.
- 슬랙에 이전 버전과 신규 버전 데이터가 나란히 표시되어, 개선·악화분을 직관적으로 파악함.
- 비교 기본점으로 항상 JIT 결과를 활용하여 신뢰성을 증명.

### Prototype Pollution 등 JS 고유 보안 취약점에 맞는 보안 방안이 컴파일러 설계에 즉시 적용됨

- object.prototype에 프로퍼티를 부여하는 JS의 보안 취약점(prototype pollution) 방지를 위해, Bun AOT 컴파일러는 관련 API를 아예 금지함.
- 이러한 조치로 성능 향상뿐 아니라 보안 수준도 상승.
- 최소 두 건의 breaking change가 발생했으며, 이는 대부분 보안 목적임을 언급.

### 다중 버전 및 다양한 프로젝트 환경에서 동일 코드가 동일하게 동작함을 실험적으로 증명함

- JIT, AOT 컴파일, 타입 미포함 빌드 등 세 가지 방식으로 동일 프로젝트를 실행해 결과 일치 여부를 반복 검증.
- fuzzing(패턴 임의 생성)을 통해 각 방식에서의 bug·오류 탐색.
- Claude 등 대형 언어 모델이 다양한 코드 변형을 빠르게 테스트함.

### 개발 환경에서 모델(Claude)에게 컨티뉴, 속도 개선 등을 반복 지시하며 작업 효율성을 극대화함

- 실제 작업에서는 Claude 등 AI에게 “계속해”, “더 빨리 해볼 수 있나?” 등 리딩 프롬프트를 자주 사용.
- 모델이 자기 한계를 저평가(underestimate)하는 경향이 있어 적극적으로 도전 과제와 최적화 방향을 재촉함.
- 프로젝트 실무에서는 리딩 프롬프트와 인간 엔지니어의 지속적 개입(방향성 제시)이 모델 작업 결과 품질과 범위를 크게 좌우함.

### 최종적으로 Bun 컴파일 기능을 누구나 “bun upgrade --canary” 명령어로 즉시 체험할 수 있도록 오픈함

- 최신 Bun AOT 기능은 이미 공개되었으며, 사용자는 `bun upgrade --canary`로 업그레이드 후 `bun compile` 명령으로 쉽게 활용 가능함.
- 발표 마무리에서 시청자 누구나 발전된 Bun을 직접 써보라고 제안.
