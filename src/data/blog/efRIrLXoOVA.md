---
author: AI Makers Club
pubDatetime: 2026-05-21T08:19:54.185Z
title: "Anthropic Just Dropped a Masterclass on Building Agent Harnesses (for Large Codebases)"
slug: efRIrLXoOVA
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Anthropic가 발표한 블로그 글과 Cole Medin의 실습을 통해, Claude Code를 비롯한 코딩 에이전트가 수만~수백만 라인의 대형/복잡 코드베이스를 효과적으로 탐색"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/efRIrLXoOVA/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Anthropic Just Dropped a Masterclass on Building Agent Harnesses (for Large Codebases)](https://www.youtube.com/watch?v=efRIrLXoOVA)  
**채널명:** Cole Medin

## *Anthropic가 공개한 대형 코드베이스 에이전트 하니스 빌드 마스터클래스* 핵심 요약

- Anthropic가 발표한 블로그 글과 Cole Medin의 실습을 통해, Claude Code를 비롯한 코딩 에이전트가 수만~수백만 라인의 대형/복잡 코드베이스를 효과적으로 탐색·작업할 수 있는 최신 전략과 구조를 체계적으로 소개함
- 코드베이스가 커질수록 일반적인 LLM 에이전트의 탐색·수정 효율이 급격히 저하됨을 지적하며, 이를 극복하기 위해 ‘AI 레이어(하니스)’의 중요성을 강조함
- Claude Code는 전통적 인덱스나 semantic search 방식이 아니라, CLI 기반(grep 등)으로 엔지니어처럼 디렉토리 구조를 탐색하는 방법(agentic search)을 사용함
- 'AI 레이어'란 코드·테스트 외에 새로운 제3의 구성요소로, global rules, skills, hooks, LSP·MCP 서버, sub-agent, 플러그인 등 일곱 가지 확장적 장치로 구성됨
- Global rules(글로벌 규칙)는 핵심 정보를 간결하게(layered & lean) 작성하고, 각 디렉토리별로 claw.md를 분할 관리하여 맥락 과부하를 줄임
- Hooks(시작/종료 훅)을 통해 세션별 자동 컨텍스트 로딩, 규칙 문서 최신화(자동 제안/반영) 및 코드베이스 자기개선 메커니즘을 구현할 수 있음
- Skills(스킬)는 반복 가능하고 분할 적용되는 워크플로우(예: API route 추가)를 관리하며, path parameter를 통해 특정 디렉토리에만 적용되게 할 수 있음
- LSP/MCP 서버(Bespoke code search)는 IDE 수준의 코드 심볼 탐색, 참조 찾기 등 대규모 코드베이스 특화 탐색 성능 향상을 담당함
- Sub-agent는 코드 탐색·분석 등 방대한 컨텍스트가 필요한 작업을 분리 수행 후 요약 결과만 메인 세션에 제공하여, 토큰 및 컨텍스트 효율을 높임
- 데모 플러그인(helpline AI layer 툴킷)을 제공, 위 전략들을 어떤 코드베이스에도 즉시 적용·실험할 수 있도록 함
- 조직적 관점에서는 AI 레이어 설계·관리·도입을 담당하는 전담 팀/담당자가 필요하며, 조직 표준화를 통해 도구 도입 초기 저성과·분절화 문제를 예방하도록 권고함

---

## 세부 요약 - 주제별 정리

### Claude Code는 대형·복잡 코드베이스에서도 효과적으로 적용 가능함을 강조

- Anthropic 블로그는 수백만 라인, 수십 년 된 레거시 시스템, 다중 저장소 분산 아키텍처 등 실제 엔터프라이즈 환경에서 Claude Code가 이미 널리 사용 중임을 사례로 제시함
- "내 코드베이스는 너무 복잡해서 Claude Code가 힘들 것이다"라는 우려는 근거 없음을 분명히 함
- 본 영상의 데모 코드베이스도 수만 라인 단위 대규모 상황을 가정하여, 실제 적용 전략을 구체적으로 시연함

### Claude Code의 탐색 방식은 인덱스 기반이 아닌 CLI 기반 agentic search가 기본임

- Claude Code는 RAG(검색 증강 생성) 또는 semantic search, 정적 인덱싱 없이, CLI에서 엔지니어가 사용하는 grep, 디렉토리 구조 직접 확인 등으로 코드베이스를 탐색함
- 장점: 별도의 인덱스를 유지/동기화할 필요 없음
- 단점: 효과적인 탐색을 위해서는 초기 컨텍스트(시작점)가 충분히 제공되어야 함
- 따라서 어떤 맥락(규칙, 설명, 구조도 등)을 Claude에 제공할지에 대한 준비가 현실적 과제임

### 코드베이스 내 AI 레이어(하니스)가 LLM 모델 자체만큼 중요하게 작동함

- 대다수 사용자가 LLM(예: Claude, CodeX) 성능 기준에만 주목하지만, 실제 생산성은 ‘모델을 둘러싼 환경(하니스)’에서 기인함을 강조
- AI 레이어란 코드·테스트에 더해, global rules, skills, hooks, LSP/MCP서버, sub-agent 등 Claude Code 동작 맥락을 구성하는 모든 도구와 문서의 총합을 의미
- 이 7가지 AI layer 요소마다 구체적 전략과 역할이 있음(영상·블로그 핵심 구조)

### 글로벌 규칙(Global Rules)은 반드시 간결하게 작성하고, 디렉토리별 레이어링으로 과부하를 방지해야 함

- 글로벌 규칙(claw.md)을 수천 라인 장문으로 작성하면 오히려 Claude 등의 LLM 성능이 급격히 저하됨(과도한 맥락 부여로 인한 현상)
- 효과적 규칙 작성법:
    - ‘코드베이스 설명’, ‘주요 기술스택·아키텍처’, ‘전반 규칙과 관행’, ‘테스트/개발 커맨드’ 정도만 요약해 기입
    - 글로벌 claw.md 외, 각 하위 디렉토리마다 별도의 claw.md 배치(예: API 서비스용 claw.md)
    - Claude 세션 시작 시, 현재 편집 경로 상위 claw.md들을 자동 계층적으로 로드
    - 특정 이슈(GitHub Issue, JIRA Ticket)가 명확하다면, 직접 해당 서브디렉토리에서 Claude Code 세션을 시작하여 범위를 한정 가능
- 거대한 코드베이스에서는 디렉토리별 관행·규칙이 다름을 감안, 과부하 방지+특화 규칙 적용을 모두 달성

### 디렉토리 구조·설명 등 ‘코드베이스 맵’을 명시해 주면 Claude의 탐색·분석 초기 효율이 높아짐

- 글로벌 규칙(claw.md)에 디렉토리 주요 구조, 각 폴더별 간략 설명 등을 표기하면 Claude가 독립적 탐색/분할 작동에 즉시 활용할 수 있음
- 예: API 서비스, Billing 서비스, Frontend 등 각 섹션 간 역할을 요약하여 입력

### Hooks를 활용해 코드베이스 관리와 AI 규칙, 컨텍스트 환경을 자동·지속적으로 개선하게 할 수 있음

- Start Hook: 세션 시작 시, 팀/역할/편집 컨텍스트에 맞게 외부(예: Confluence, git 기록)에서 동적 문서·설정 추가 로딩 가능
    - 예시: settings.json에 start hook 스크립트 등록, 해당 디렉토리 git log·현재 상태를 세션 초기에 Claude에게 전달
- Stop Hook: Claude 세션 종료 시, 이번 활동·수정사항을 분석해 글로벌/서브 claw.md 규칙의 업데이트 제안을 자동 생성
    - 예시: 실제 코드 수정 후 stop hook이 별도 터미널(Headless Claude 세션)에서 변경사항·규칙을 분석, 제안사항 마크다운 리포트 명시
    - 조건: 실제 규칙이 바뀌어야 할 때만 제안 발생(불필요 시 ‘변경 필요 없음’ 메시지)
- 결과적으로 claw.md 등 규칙 문서의 ‘구조적 노화(staleness)’를 예방하고, 팀(혹은 개인)의 코드베이스 관리가 점진적/자기주도적으로 진화할 수 있음

### Skills(스킬)은 워크플로우를 반복적·분할적으로 Claude에 제공, 경량화 및 분산 확장을 지원함

- Skill: 반복 생산/편집되는 작업 흐름(예: API endpoint 추가, 유닛테스트 생성, 로그 처리 등)을 모듈로 만들어 필요시 적용
- Scoping: skill.md의 path 파라미터를 지정하여, 해당 디렉토리/하위에 접근할 때만 skill을 활성화(예: API 디렉토리 내 API route 추가 워크플로우)
- 구분: claw.md(Global Rules)는 ‘규칙/관행’, skill은 ‘프로세스/워크플로우’
- 각 스킬은 이름(name), 설명(description), 사용 대상 경로(path) 등으로 정의 가능
- 필요한 시점/경로에서만 skill을 불러오므로, LLM에 불필요한 맥락 로드 방지 및 효율 최적화

### LSP(언어 서버 프로토콜)·MCP서버 사용으로 코드 탐색·심볼 분석 등 IDE 수준의 탐색능력을 Claude에 부여할 수 있음

- LSP(Language Server Protocol): 전통 IDE(예: VSCode, PyCharm)에서 사용하는 코드 심볼 탐색, jump-to-definition, type-hint 등의 기능을 Claude Code에 연동 가능
    - 예: 커스텀 MCP서버를 설치하여 ‘monthly_total_sense’ 심볼이 어디서 정의되고 참조되는지 코드 전체에서 빠르게 검색
    - 데모: SLMCP 명령어와 MCP서버 도구로 symbol level 탐색 기능을 Claude Code 세션에 추가해, 결과를 JSON 형태로 반환
- 대형 코드베이스(6자리 라인): grep(원시 검색)은 비효율적이고 토큰 소모가 큼 → 심볼 기반 탐색 필수
- MCP 서버: LSP에 기반한 외부 툴로, 더 고급 검색/분석 기능을 필요에 따라 호출하며 Claude의 탐색 신뢰성과 범위를 확대

### Sub-agent를 활용하면 탐색(분석)과 실제 편집을 분리하여, LLM 컨텍스트/토큰 자원을 효과적으로 사용 가능함

- Sub-agent란: 특정 탐색/조사 작업을 메인 Claude 세션과 분리해 실행 후, 결과 요약만 메인에 전달하는 보조 역할
- 예시:
    - 웹에서 아키텍처 베스트 프랙티스 검색
    - 코드베이스 특정 부분 구조, 영향 분석(수천~수만 토큰 소모 예상)
- 장점:
    - 메인 세션의 컨텍스트(토큰) 축적/과부하 현상 방지
    - 탐색단계와 실제 작업을 명확히 분리하여 작업 효율 및 AI 집중도 향상
- Claude Code, CodeX 등 주요 코딩 에이전트에는 sub-agent 기능이 기본 내장됨

### 데모 플러그인을 통해 위 전략(자기개선, MCP서버, Skill scoping 등)을 실제 코드베이스에 2~3명령만으로 도입 가능함

- 영상 속 예제 플러그인 명: helpline AI layer (tooling 폴더)
- 주요 제공 기능:
    - 자동화 Stop Hook(규칙 업데이트 제안)
    - Explorer Sub-agent(탐색 전용 보조 에이전트)
    - MCP 서버(LSP 활용 코드 심볼 검색)
    - 예시 Skill 파일(path별 적용법 참조)
- 설치법:
    - github 기반 repo 전체 clone
    - cloud code /plugin marketplace add [repo경로]/tooling
    - plug-in install helpline AI layer at helpline tooling
- 본 플러그인을 기존 코드베이스에도 즉시 적용가능, 각 전략 단위별로 실험/확장 가능
- 추가 응용: 플러그인 레포 디렉토리 자체를 Claude Code에 입력(컨텍스트 제공)하여 즉시 분석·적용법 안내받기

### 조직 내 Claude Code 도입 전략은 전담팀(작게는 개인, 크게는 소규모 그룹) 중심의 표준화된 AI 레이어 구축에서 시작해야 함

- Anthropic 권고: 최초 도입 시 개인/소수의 팀이 ‘조용한 투자(quiet investment period)’를 선행, 조직 전체가 함께 쓸 수 있는 기본 AI 레이어/관행/도구 구조를 먼저 구축
- 효과:
    - 실제 소프트웨어 개발 조직에서 표준화된 AI layer 기반 운용 → 초기 실망감 방지, 결과 품질 일관성, 중복 개발 및 분절화 방지
- 각 회사마다 별도 진입장벽 해소 및 사내 트레이닝의 필요성 언급(영상 제작자 별도 컨설팅·교육 제공 사실도 안내됨)
- GPT 계열, Claude Code 등 AI 액티브 코딩 도구의 효율적 도입·확산을 위한 필수 전략임

### (광고) JetBrains Academy 소개: 실무 배포형 AI/LLM 엔지니어링 교육 플랫폼 안내

- 영상 중간, JetBrains Academy Skill Path를 짧게 소개(스폰서)
- 일반 온라인 AI 강의의 한계(이론 위주, 실 프로젝트 경험 부족) 지적
- JetBrains Academy는 IDE에서 실습, LLM/Generative AI 등 과정 수료 시 실 AWS 배포, 프로젝트와 인증서(전 세계 인정)까지 보장함
- 예시: PyCharm IDE 내 ‘Build & Deploy Custom LLM with Python & AWS’ 과정 시연, 실제 실습+AWS 샌드박스 배포 등 실무 연계 강조

### 요약 및 결론: 직접 시도, 규칙 관리 자동화, 조직 표준화의 3중 전략으로 대형 코드베이스 AI 도입을 성공적으로 추진 가능함

- 영상 내내, Anthropic 블로그의 실질적 전략을 직접 구현·데모로 증명
- 코드베이스 크기에 관계없이 Claude Code(또는 유사 에이전트)를 고효율로 활용하려면, AI 레이어 7가지 전략을 유기적으로 배치 필요
- 플러그인/샘플 레포 활용, 조직 전담팀 표준화, 자동화된 규칙 관리 및 컨텍스트 분리/최적화를 병행하면 현실적 생산성 확보 가능함
- 영상 댓글, 블로그, 플러그인 설명서 등 참고를 독려하며 종료
