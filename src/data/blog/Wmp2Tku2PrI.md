---
author: AI Makers Club
pubDatetime: 2026-05-07T23:45:41.008Z
title: "Vibe Engineering Effect Apps - Michael Arnaldi, Effectful"
slug: Wmp2Tku2PrI
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Michael Arnaldi(Effecful)가 주도하는 \"vibe engineering\" 기반의 라이브 코딩 워크숍으로, Effect 프레임워크를 활용한 AI 에이전트"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Wmp2Tku2PrI/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Vibe Engineering Effect Apps — Michael Arnaldi, Effectful](https://www.youtube.com/watch?v=Wmp2Tku2PrI)  
**채널명:** AI Engineer

## *Vibe 엔지니어링: Effect 앱 개발 워크숍* 핵심 요약

- 본 영상은 Michael Arnaldi(Effecful)가 주도하는 "vibe engineering" 기반의 라이브 코딩 워크숍으로, Effect 프레임워크를 활용한 AI 에이전트 친화적 애플리케이션 개발 과정을 실습과 토론 중심으로 진행함
- 사전 준비 없이 완전히 빈 프로젝트로 시작하여, 실제 개발 환경에서 효과적인 개발 패턴과 LLM(대형 언어 모델) 기반 코딩 방법론을 실체적으로 검증하고 탐구함
- LLM은 인간 두뇌와는 달리 지속적인 기억/학습이 불가능하며, 한계가 있는 context window를 효과적으로 활용해 최신 지식 습득이 필요함을 강조함
- 라이브러리 레벨 개발에서도 LLM 코딩 에이전트의 생산성이 크게 향상되었으며, 인간 개발자 대신 코드를 자동 생성하는 실무 사례와 구조적 한계를 심층적으로 검증함
- 모델의 실질적 코드 활용도를 높이기 위해서는, 예를 들어 effect 코드베이스를 직접 프로젝트에 포함(clone)시키고, agent에 patterns 및 best practices를 명시적으로 주입하는 것이 효과적임을 실험적으로 증명함
- 프로젝트 초기 세팅(빌드, 테스트, 타입 체크 등)부터 각종 lint 규칙, pattern 정리, context management, best practice 자동화까지 실질적 AI 코딩 환경 조성 방법론을 단계별로 구현
- 다양한 LLM(GPT 5.4, Opus 4.5 등)과 open weights vs frontier 모델, 엔트로픽/오픈AI의 정책 차이와 실제 세션에서의 장단점을 현장감 있게 비교함
- SQL 및 API 영속성 구현, 테스트 패턴, 실시간 규칙 반영, 코드 리팩토링 등 실제 프로젝트 주요 이슈들을 모두 AI와 상호작용하며 해결하는 과정을 구체적으로 시연함
- Patterns/(테스트/SQL/API 등) 디렉토리 및 agents.mmd 파일을 통해 모델이 실제 문맥(컨텍스트)과 최적의 활용 룰을 이해하도록 패턴화를 강조, slash commands와 skills 등 자동화 방안 논의
- 최종적으로 애플리케이션 안정성을 위해 workflow, clustering, 장기 실행 프로세스 설계의 필요성과 향후 AI 통합 앱에서의 중요성을 설명하며 마무리함

---

## 세부 요약 - 주제별 정리

### 빈 프로젝트에서 시작하여 즉흥적 워크숍으로 효과적인 'vibe engineering'을 실습함

- 강사는 본 워크숍을 최대한 'authentic(진짜)'하게 진행하기 위해 사전 준비를 일절 하지 않고 빈 Effect 프로젝트로 즉흥적으로 시작함
- 참가자들의 effect, AI 툴링 경험 수준을 직접 물으며 세션을 인터랙티브하게 주도함
- effect 프레임워크에 대한 다양한 활용 경험(예: V4 프로덕션 적용, 클론/리포지토리 접근 방식 등)이 공유됨
- 워크숍 목표는 특정 요구 혹은 관습 없이, 참가자와 함께 자연스러운 대화와 실습을 통해 최신 AI 개발 패턴을 탐색하는 것임

### LLM은 한 번 훈련된 이후로 '지속적 학습'이 불가능하다는 한계가 분명함

- LLM은 인터넷 등 방대한 데이터로 '사전 훈련(pre-training)'되고, 이후 특정태스크(코딩 등)에 '파인튜닝(post-training)'되어 사용됨
- 인간은 경험 축적/기억/망각이 가능하지만 LLM은 어떠한 새로운 경험도 축적·학습하지 않으며, 훈련 시점 이후 지식이 업데이트되지 않음
- 세션별 context window(문맥창)는 용량이 제한적이고, 너무 많은 정보를 넣으면 혼란을 일으킴(예: 1M 토큰 context window도 실질적으로 쓸모없음)
- 따라서 AI 개발에서 항상 '오래된 기계'를 다룬다는 전제로, 모델이 최신 정보를 수용하는 아키텍처 설계가 반드시 필요함

### LLM을 활용한 라이브러리/로우레벨 개발도 이미 '손코딩'을 상당부분 대체하는 단계임

- 강사는 최근 6~8개월 동안 직접 손으로 코드를 거의 쓰지 않았고, Typescript/Rust 등 라이브러리 개발조차도 LLM 기반 자동 코딩으로 충분히 대체함
- 전통적으로 자기 코드에 대한 베스트 프랙티스/문서화가 부족한 환경에서도, LLM은 코드 베이스 자체를 직접 탐색해 우수한 패턴을 복제·적용하므로 실질적 업무 효율성이 크게 향상됨
- 단, 모델은 node_modules 등 외부 라이브러리보다는 자신의 프로젝트 디렉터리에 포함된 코드를 훨씬 더 중점적으로 학습·적용하도록 훈련됨
- git ignore된 파일, node_modules 같은 디렉터리에 두는 것은 AI 모델의 활용에 최적화되지 않음

### 코드베이스 패턴 주입을 위해서는 원하는 라이브러리(예: effect) 전체를 직접 프로젝트에 클론하는 것이 가장 현실적임

- LLM은 자신의 프로젝트 코드에 최적화된 방식으로 훈련되어 있으므로, 원하는 best practice와 패턴을 반영하려면 effect 전체 리포지토리를 직접 프로젝트 내에 clone 하는 방식이 가장 효과적임
- agents.mmd, patterns/ 디렉토리 등 별도의 패턴/규칙/명세 파일을 적극적으로 활용해 모델이 실제 프로젝트 컨텍스트에 맞춰 동작하게 함
- 이는 예시 라이브러리의 특정 패턴을 직접적이고 반복적으로 학습해 실질적 코드 퀄리티와 생산성을 극대화하는 방법론임

### 실제 프로젝트 세팅(빌드, 테스트, 타입 체크, lint, format 등)은 AI에게 '절대 오류 허용 불가' 환경으로 강제해야 함

- typescript, bun, vest, effect test 등으로 초기 프로젝트 세팅을 AI와 함께 반복적으로 진행
- TS config 및 vscode 설정, 각종 dev dependencies 설치 등을 명확하게 명세해 LLM이 수정·검증·반복 테스트를 진행하게 함
- 모든 진단(severity)을 'error'로 전환하여, AI가 단 하나의 에러도 허용하지 않도록 강제함
- best practice: 'watch 모드/개발 서버 절대 사용 금지', '모든 패턴은 에러 발생 시 즉시 수정', 오픈 AI 모델(Concise) vs Anthropc 모델(Opus, 장문/플로우 용이) 사용 경험 비교
- 테스트 커버리지, lint 규칙(예: unknown/as/any 금지, schema/validation 필수 적용), 포맷터 자동화 등 세밀하게 AI의 코드 품질을 통제함

### 에이전트 규정 및 베스트 프랙티스(agents.mmd, patterns/) 세분화로 LLM 컨텍스트 관리 최적화

- agents.mmd에 가능한 명령어, context 정보, 리포지토리 접근 경로, 패턴 적용 방법, 금지사항(watch 명령 등)을 명확히 작성하여 AI의 동작 범위를 한정
- patterns 디렉터리(patterns/http_api.md 등)에 Effect 기반 구현의 권장 방식(예: HTTP API 작성, OpenAPI docs 생성, 타입 세이프 클라이언트 관련)을 정리해 AI가 참고하도록 설계
- 목적은 LLM이 최대한 일관성 있고 실질적으로 사용할 수 있는 코드와 문서를 자동으로 생성할 수 있도록 돕는 것임
- plan → spec → 구현, 소규모 태스크 단위로 점진적 컨텍스트 초기화 루프(ral loop) 적용 및 context 오염 방지 전략 도입

### AI 기반 애플리케이션 개발 패턴(스펙 중심, 반복 루프, 최소화된 툴 셋)이 실제로 가장 생산성 높음을 실험적으로 확인

- 복잡한 context management보다는 가장 '단순한 bash 스크립트'로 task-implement-exit 루프를 반복한 것이 실제 성능이 가장 좋았음
- coding agent에 오직 'execute' 툴(아비트러리 TypeScript 코드 실행)만 부여한 실험에서는 context 오염이 줄어들고 결과물이 더 안정적이었음
- 설계 → 구현 → 검증 → 패턴화 → 리팩토링의 반복 과정에서 AI는 주어진 명세 내에서 최고의 생산성을 냄

### Effect 기반 HTTP API 및 SQL 연동, 패턴 연구를 AI와 함께 단계별로 심층 구현

- 패턴(http_api.md) 분석 후, todo CRUD기능을 갖춘 HTTP API 및 OpenAPI 문서, 타입 세이프 클라이언트 동시 구현을 모델에게 명확히 명령함
- 영속성 전략(effect SQL, SQlite store 등)에 대한 패턴도 별도로 정리하여 단계별로 개발 및 리팩토링
- 테스팅 베스트 프랙티스(예: it layer 활용, 커스텀 래퍼/타입캐스팅 금지, 트랜잭션 Rollback 등)도 patterns/testing.md에 충실히 정리하며, 자동화 확장성을 논의함

### 루프 기반 컨텍스트/코드 관리 , skills 와 slash command 등 AI 개발 자동화 툴을 실무 관점에서 활용

- OpenCode, Cursor 등 AI IDE에서 context 관리, slash command(예: /new pattern), skills(컨텍스트 주입 등), lint rule 자동화 등 기능의 실제 활용성 및 조건·장단점 분석
- skills는 Next.js 등 범용성 내용에는 불필요한 context 오염을 유발하지만, 반복되는 패턴화·베이스라인 세팅에는 유용함
- 실제 코드 구조와 테스트 과정에서 나타나는 문제(중복, 불필요한 래핑, 패턴 오용 등)를 발견 즉시 lint rule, 베스트 프랙티스, 패턴화로 환류

### 다양한 LLM(Multiple LLMs) 비교 및 활용 경험을 상세히 공유

- GPT 5.4(OpenAI), Opus 4.5(Anthropic) 등 frontier vs open weights 모델의 실제 사용 경험(속도, 코드 품질, 정책 제한 등) 분석
- OpenAI 모델은 생산성·간결함이 뛰어나지만 때로는 지나치게 반복적인 confirm 요청이 있고, Opus는 직관적 진행에 강점이 있음
- UI 개발 등 특정 태스크에서 모델별 강점이 다름을 실제 사례로 비교

### 프로젝트 과정을 패턴화(patterns/ 결합 agents.mmd), 자동 평가(evals)까지 연결하는 프로세스 제안

- 모든 기능별 패턴을 markdown 파일로 명시적으로 남기고, agents.mmd에서 참조하도록 조직화
- 변경시 semantic code search 및 자동화된 LLinter 플러그인(참조 누락, 규칙 위반 등 CI에서 감지) 적용 가능
- 평가 기준(evals)은 여전히 인간의 주관(out of 100명 80:20)과 스타일(verbosity, 구조적 설계 등)이 크게 반영되며, 추후 reinforcement learning 및 effect-specific fine-tuning의 핵심으로 삼고 있음

### 장기 실행 프로세스(workflow, clustering)의 필요성과 effect 내 통합 모델의 장점을 강조하며 마무리

- 실제 모든 API가 짧은 시간 내 응답한다는 전제는 더이상 성립하지 않으며, LLM과 같은 장기 실행 프로세스는 서버 장애 등 다양한 예외 상황을 유발할 수 있음
- Workflow 및 clustering(예: effect cluster)을 활용해야, 장기/비동기 프로세스(이메일 인증, 장기 태스크 등)에서 신뢰성과 내결함성을 확보 가능함
- effect 클러스터, 슬랙/디스코드 등 AI 통합적·컴포저블한 시스템 설계의 실질적 장점 제시
- 워크숍의 최종 결과: 완전히 빈 프로젝트에서 시작해 AI와 협업해 패턴화, 자동화, 베스트 프랙티스 정립, 실시간 코드/테스트 생성을 성공적으로 시연
