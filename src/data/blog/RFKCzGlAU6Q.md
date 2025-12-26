---
author: AI Makers Club
pubDatetime: 2025-12-26T23:47:01.925Z
title: "How Claude Code Works - Jared Zoneraich, PromptLayer"
slug: RFKCzGlAU6Q
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Jared Zoneraich(PromptLayer 창업자)가 \"Claude Code\"와 최신 코딩 에이전트의 구조, 철학, 변화, 그리고 실제 개발과 활용 사례에 대해 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/RFKCzGlAU6Q/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How Claude Code Works - Jared Zoneraich, PromptLayer](https://www.youtube.com/watch?v=RFKCzGlAU6Q)  
**채널명:** AI Engineer

## *Claude 코드가 동작하는 원리: Jared Zoneraich, PromptLayer* 핵심 요약

- 이 영상은 Jared Zoneraich(PromptLayer 창업자)가 "Claude Code"와 최신 코딩 에이전트의 구조, 철학, 변화, 그리고 실제 개발과 활용 사례에 대해 심도 있게 설명하는 워크샵이다.
- Claude Code의 혁신적 발전은 복잡성을 줄인 단순한 아키텍처와, 툴 사용 최적화에 강하게 훈련된 강력한 언어 모델 향상에 기인함을 강조한다.
- 에이전트 구조의 핵심은 "도구를 제공하고, 나머지는 모델에 맡긴다"라는 철학으로, 과거의 분기점이 많은 복잡한 워크플로우(DAG, 분류기 등)을 버리고 단순 while loop와 툴 콜 중심의 구조로 진화했다.
- 주요 도구(read, grep/glob, edit(diff 기반), bash, web search/fetch, to-dos, tasks 등)는 모두 사람이 실제 터미널에서 직접 하는 행위를 그대로 반영, 툴 개수를 최소화해 인간적이고 직관적인 조작을 지향한다.
- Bash 커맨드가 코딩 에이전트에서 핵심적 역할을 하며, 엄청난 양의 학습 데이터(쉘 활용 데이터) 덕분에 거의 만능의 어댑터 역할을 수행함을 설명한다.
- To-do 리스트, 컨텍스트 관리, async buffer, sandboxing 등 다양한 세부 메커니즘 적용으로, 모델의 실수 방지, 복원 및 사용자 경험(UX) 개선, 보안까지 폭넓게 고려.
- Claude Code 외에도 Codeium Codeex, AMP(Sourcegraph), Cursor Composer 등 다양한 코딩 에이전트들이 고유한 전략으로 시장에 존재, 각각의 구조와 경쟁 지점도 비교한다.
- 단순화(less scaffolding, more model), 도구의 엄밀한 설계, 테스트 가능성, 그리고 에이전트 다양성의 공존이 앞으로의 발전 방향임을 제시.
- 실제 PromptLayer, 클라우드코드 SDK, 자동화 파이프라인(GitHub Actions 활용 등), 평가/테스트 방법론 등 실제 서비스 구축에도 연결된다.
- 질의응답에서는 DAG(분기 구조)와 루프의 사용 시점, 툴/스킬 적용 문제, 사양 중심 개발(TDD) 등 실전적인 논의도 활발히 다뤄진다.

---

## 세부 요약 - 주제별 정리

### 코딩 에이전트의 진화와 Claude Code의 등장 배경은 단순화와 모델 발전에 있다

- 예전에는 ChatGPT 같은 모델을 통해 코드 복사/붙여넣기 방식이 주였으며, Cursor 및 초창기 커맨드 기반 코딩 도구들이 등장
- 커서(Cusor)도 초기에는 단순 VS Code 포크이자 미흡한 성능이었으나, 단계적으로 Assistant→본격적인 agent 중심으로 발전
- 최근 Claude Code의 등장은 단순한 아키텍처(필요 도구만 제공, 나머지는 모델에 위임)와 더욱 향상된 툴 콜 최적화 언어 모델이 핵심
- 과거에는 모델의 한계(환각, 컨텍스트 문제 등)를 보완하려 복잡한 워크플로우와 별도 컴포넌트(embeddings, rag, 분류기 등)에 의존했으나, 이제는 "더 나은 모델" 자체가 그 필요를 줄임
- 실제 PromptLayer 엔지니어링 조직도 "1시간 이내 Claude Code로 작업 가능하면 바로 실행"하는 규칙으로 단순화에 집중

### Claude Code와 최신 코딩 에이전트의 구조적 핵심은 단순한 while loop와 툴 콜에 있다

- 오늘날 코딩 에이전트의 구조는 "마스터 while loop"와 "tool calls"로 요약 가능
- 과거의 분기 다이어그램(DAG), 복잡한 체계, 다수의 분류기, 수많은 프롬프트가 사라지고 단순히 "도구를 호출→결과를 모델에 전달→다시 도구 호출" 반복
- 내부적으로 N0라고 불리는 루프는 (1) tool call 존재 시 도구 실행, (2) 결과를 모델에 반영해 계속 반복, 없으면 사용자에게 다음 액션 문의로 종결
- 이런 구조의 혁신은 LM(언어 모델)이 오류를 스스로 바로잡고 반복적으로 시도하는 능력이 뛰어나기 때문에 가능함
- 단순화된 구조일수록 모델 성능 진화에 따른 확장성·유지보수성이 대폭 향상

### 모델과 툴의 관계, 그리고 "단순화" 중심 설계가 왜 중요한지 실제 사례로 설명된다

- 툴 콜은 사람이 실제로 터미널에서 수행하는 액션(파일 읽기, grep, 작성, 수정, bash 명령, 웹 검색 등)만을 모방
- 복잡한 벡터DB, RAG, 분기형 워크플로우를 대체하고, 툴 개수와 복잡성을 줄여 추후 모델 발전에 맞춘 확장·유지 관리 용이성 확보
- Python Zen(PEP 20)의 "Simple is better than complex, complex is better than complicated, flat is better than nested" 철학을 모델 설계에도 적용

### 각 툴의 역할과 선택 이유, 그리고 bash 도구의 상당한 중요성

- 주요 툴: read, grep/glob, edit(diff 기반), bash, web search/fetch, to-dos, tasks 등
- "read"는 대용량 파일 처리 시 토큰 제한 고려 필요로 개별 툴로 설계
- "grep/glob"는 RAG나 벡터DB와는 달리, 실제 유저가 사용하는 방식에 착안해 인간식 작업(fliter, 검색 등)에 충실
- "edit"는 파일 전체 재생성이 아닌 diff 기록 위주, 오류 예방·성능 향상·토큰 절약 효과
- "bash"는 거의 모든 작업에 사용 가능, 광범위한 학습 데이터(쉘/유닉스 명령 기반)로 범용성 확보
- 여타 안전 장치(web fetch 시 서브모델, 병렬실행, 경로 에러 방지 등)는 시스템 프롬프트에 조정 항목으로 삽입
- 핵심 결론: "bash 도구 하나로 거의 모든 작업이 가능하며, 단순하면서도 강력"

### To-do 리스트, 컨텍스트 관리, 복원 및 UX 개선 방안 등 에이전트 활용의 실제적 이점

- To-do 리스트는 모델로 하여금 작업 계획 능력 부여, 중단 이후 재개에도 유용(복원 가능성 증대)
- 사용자는 진행상황을 UI·UX로 직관적 파악 가능(단순 종료/포기 실행이 아닌 단계별 체크)
- To-do 리스트 구현은 엄격한 코드적 강제보다는 프롬프트 기반, 최신 모델의 "지시 준수" 능력에 의존
- 작업 ID, 타이틀, 증거 데이터(예: evidence)와 hashscheme 적용 등 구조적 포맷 제공
- UX, steerability(조정 가능성), 복원, 플래닝 능력 등 다방면 강화

### async buffer(H2A), context compressor 등 긴 컨텍스트 관리의 기술적 해결책

- 입출력(IO)와 reasoning decoupling을 위해 async buffer(H2A) 구조 도입
- 모델 컨텍스트가 크면 정확성 저하, 중요 부분(앞/뒤)은 유지하면서 중간 부분 압축·요약해 메모리 관리
- context compressor는 92% 등 한계 초과 시 자동 압축, 장기 저장은 마크다운/외부파일 등 활용 권장
- 이러한 맥락에서 bash sandbox 활용 및 스킬별 파일화 등도 미래 지향적으로 제시

### 복잡한 DAG, 분류기 등 전통적 AI 워크플로우 대신 단순 루프/모델 탐색 중심 구조가 유지보수와 품질 측면에서 유리함을 강조

- 과거에는 각 기능·분기마다 별도 프롬프트/분류기/플로우 구축(DAG 등)했으나, 현재는 모델 신뢰 기반 내부 루프가 더 강력해짐
- 단순 구조는 높은 유지보수성·확장성·실패 복원력을 제공, 휴리스틱 엔지니어링 복잡성 제거
- 필요시 툴 콜만 엄격·구조적으로 설계, 나머지는 모델의 탐색 자동화에 맡기는 식의 유연성 확보

### 다양한 코딩 에이전트(Claude Code, Codeex, AMP, Cursor Composer 등) 간 구조 및 전략적 차이 비교

- Claude Code: 유저 친화성, 단순성, 깃 관련 자동화, 강력한 컨텍스트 관리, 정제된 UX로 강점
- Codeex: 오픈소스, Rust 코어, 이벤트 기반, 동시성 처리 강화, 센드박스 구조 다름(Mac OS seatbelt 등)
- AMP(Sourcegraph): 무료 모델, 모델 선택 자유도 없음, 에이전트 친화적 환경 구축(피드백 루프, 자율성 강조), 'handoff'(새 스레드 시작) 통해 컨텍스트 요약 및 전달 전략
- Cursor Composer: UI 집중, 극도의 속도, 데이터 기반 파인튜닝으로 수비성·성능 극대화, 모델 셀렉터 제공(Composer·GPT4/GPT5 등)
- 에이전트별 구조 차이 및 각자의 회사 전략(오픈/폐쇄, 이벤트/스레드, 모델 선택, 도구 설계 등)이 존재하며, 절대적 1위가 아닌 "목적·취향별 다양성" 중시

### 평가(Eval), 테스트, 도구 품질 관리를 통한 신뢰성 확보 방안

- 단순 루프 구조일수록 결과 및 도구 테스트(End-to-end, Point-in-time, Back-test)가 중요해짐
- 에이전트의 "정상성"(agent smell): 툴 콜 횟수, 재시도 횟수, 처리 지연 등 기초 메트릭 파악이 sanity check에 도움
- 도구(툴)는 함수로 보고, 입출력에 대해 별도로 엄격하게 테스트 진행
- PromptLayer 활용 예시: 이메일 생성 등 세부 워크플로우 생성→각 단계별 LLM 평가 및 통과 여부 판단→100% 통과까지 반복 적용

### 실제 서비스 구축 사례 및 PromptLayer, 클라우드코드 SDK, GitHub Actions 활용법

- Headless Claude Code SDK는 파이프라인 자동화에 주로 사용(예: 자동 문서 갱신, repo 확인, PR 생성 등)
- 프론트엔드/백엔드/리서치 등 다양한 목적에 맞게 별도의 스킬(skill) 지정, 각 스킬에 맞는 도구/컨텍스트 삽입 가능
- 실제 기업 내 협업, 로깅, 평가, 관리까지 PromptLayer와 같은 협업∙감사 도구가 생산성·품질에서 중요한 역할 수행

### 단순성, 도구 최소화, 컨텍스트 관리, 에이전트 다양성의 중요성 및 미래 방향

- (1) 모델 신뢰: 가능한 한 모델 자체에 결과를 맡기고, (2) 단순 설계: 복잡성 최소화를 향한 엔지니어링, (3) 도구 최소화와 bash 우선, (4) 컨텍스트 관리의 중요성, (5) 문제에 따라 다양한 에이전트 구조(공존)라는 교훈
- 향후 모든 워크플로우가 단순 agentic endpoint(에이전트 엔드포인트) 호출로 대체될 수 있으나, 컨트롤 필요성에 따라 상황별 선택 여지 존재

### Q&A에서 DAG 폐기와 루프 구조의 경계, 도구/스킬 호출 문제, 사양 주도 개발 등 현실적 고민도 함께 제시됨

- DAG 구조의 순차성 필요성은 반복적이거나 엄격한 출력 요구시(예: 여행 일정 설계)에는 도구로 일부 분리하여 병용 가능
- 실제 Claude Code의 스킬(skill) 호출시 의도대로 작동하지 않는 문제, 시스템 프롬프트와 모델 훈련 부족 이슈가 있음
- 코드 작성시 사양 기반 또는 테스트 드리븐 개발(TDD가) AI코딩 에이전트에도 도움이 되나, 구체 업무 성격에 따라 적합성 다름
- 시스템 프롬프트, 도구, 스킬이 실제로 로컬에서 확인 가능한 경우 및 오픈소스 모델의 프롬프트 체계 확인법도 간단 언급

### PromptLayer 플랫폼 소개 및 AI 솔루션 협업 지원 기능 안내

- PromptLayer는 AI 제품 개발 및 테스트, 프롬프트 관리·로깅·접근성·협업 특화 플랫폼
- 비기술자와 협업, 대규모 팀의 생산성 향상용으로 효과적이며, 엔지니어뿐 아니라 PM 및 도메인 관계자와의 협업을 지원
- 실제 강연 슬라이드 제작·연구에서부터 실제 개발 서비스에 이르기까지 PromptLayer 기반 자동화·협업 예시 소개

---
