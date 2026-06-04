---
author: AI Makers Club
pubDatetime: 2026-06-04T23:47:06.890Z
title: "Claude Plans, Gemini Designs: The Workflow to Build BEAUTIFUL Frontends"
slug: iICZTWcryac
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "구글의 Gemini 3.5 Flash는 빠르고 저렴하면서 인간이 수작업한 듯한 뛰어난 프론트엔드 UI를 생성하는 LLM으로 최근 큰 주목을 받음 Anthropic의 Opus 4.8"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/iICZTWcryac/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Claude Plans, Gemini Designs: The Workflow to Build BEAUTIFUL Frontends](https://www.youtube.com/watch?v=iICZTWcryac)  
**채널명:** Cole Medin

## *Claude 플랜, Gemini 디자인: 아름다운 프론트엔드 구축 워크플로우* 핵심 요약

- 구글의 Gemini 3.5 Flash는 빠르고 저렴하면서 인간이 수작업한 듯한 뛰어난 프론트엔드 UI를 생성하는 LLM으로 최근 큰 주목을 받음
- Anthropic의 Opus 4.8은 장기적 추론과 에이전트 엔지니어링에 강점을 가진 LLM으로, 복잡한 기획과 정보 정확성에서 뛰어남
- 영상의 핵심은 Gemini 3.5 Flash와 Opus 4.8 각각의 장점을 혼합해, 아름답고 기능 완성도가 높은 웹앱을 단일 워크플로우로 만드는 방법을 소개하는데 있음
- Gemini는 UI 디자인(프론트엔드)에, Opus는 정보 정확성 및 기획(카피, 통합, 백엔드)에 초점을 맞춰 각 역할 분담
- 비용 효율성 면에서 Gemini 3.5 Flash는 100만 토큰 입력당 $1.50로 매우 저렴, Opus는 비싸나 중요한 계획·검증 단계에만 한정 사용
- 각 스텝은 독립된 코딩 에이전트 세션으로서, 마크다운 기반 핸드오프 문서를 통해 다음 단계로 결과를 전달
- 이 방식은 AI 프로바이더간 맥락 이어받기 불가, 실험적 교체 용이성, 워크플로우 각 단계의 집중 처리, 효율적 협업 등에 최적화됨
- 실제 예시로 "Deep Space Catalog" 웹앱을 시연하며, UI 품질·카피 정확성·백엔드 연동까지 단일 샷으로 자동 생성하는 전체 과정을 설명
- 오픈소스 워크플로우 및 스킬(각 스텝 자동화), 셋업 방법, 베스트 프랙티스, 그리고 SonarQube 기반 코드 검증·보안 체계도 함께 소개
- 전체 과정은 구체적 명세서(spec)에서 출발하여 탐색→계획→디자인→통합→검증→배포→스모크테스트까지 단계별로 진행됨

---

## 세부 요약 - 주제별 정리

### Gemini와 Opus는 각자의 강점을 바탕으로 프론트엔드와 기능 기획 역할을 분담함

- 최근 구글은 Gemini 3.5 Flash라는 저렴하고, 빠르며 인간이 직접 디자인한 듯한 UI를 생성하는 LLM을 공개함
- 반면, Anthropic의 Opus 4.8은 복잡한 추론 및 장기적인 에이전트 엔지니어링 작업에 특화되어 있음
- Gemini는 아름다운 프론트엔드 UI 디자인에, Opus는 정보 정확성과 백엔드 및 카피 작성, 통합관리 등 계획 파트에 특화
- 사용자는 Gemini와 Opus 중 택일이 아니라, 각자의 강점을 살린 조합 워크플로우 사용이 더 효과적임

### Gemini 3.5 Flash는 인간 수준의 UI를 짧은 시간과 적은 비용으로 자동 생성할 수 있음

- 최근 제작자는 antigravity 및 Pi(코딩 에이전트) 환경에서 Gemini 3.5 Flash를 테스트함
- 단 한 번의 프롬프트로 생성된 UI 샘플을 공개, 기존 Claude Code 등 다른 LLM이 만든 프론트엔드 대비 월등한 완성도와 자연스러움을 가짐
- 아직 완벽하진 않으나(LMM 특유의 단조로운 header 예시), 매우 양호한 초석 UI를 빠르게 생성
- 100만 토큰 입력당 $1.50의 비용구조로, 대량 UI 설계에도 경제적 부담이 적음

### Opus 4.8은 복잡한 추론을 기반으로 정확한 정보와 통합 작업을 책임짐

- Gemini로 생성된 UI의 경우, 페이지 카피(설명, 정보 등) 부분은 종종 "hallucination" 발생--즉, 정보의 정확성이 떨어짐
- Opus 4.8은 벤치마크 결과와 실제 경험 모두에서 뛰어난 추론 능력, 정보 정확성, 통합 능력(백엔드, API, 인증 등)에서 앞섬
- Gemini의 UI 설계 후, Opus를 통해 카피 작성·통합을 이어받게 하여 정확한 정보와 신뢰성을 확보

### 비용 효율성을 위해 각 워크플로 단계별로 적합한 LLM을 활용함

- Gemini 3.5 Flash는 입력당 비용이 매우 저렴($1.50/백만 토큰), Opus 4.8은 고가이나 뛰어난 추론력으로 핵심 단계에 중요하게 사용
- 전체 작업을 모두 Opus에 맡기기에는 비용 부담 및 UI 품질 저하 발생
- 각 LLM은 비용 대비 효율, 전문성에 따라 워크플로 각 단계별로 적절하게 배치

### 완성된 워크플로우는 독립된 코딩 에이전트 세션과 명확한 핸드오프로 구성됨

- 각 워크플로우 스텝(탐색, 기획, 설계, 통합 등)은 별도 세션에서, 마크다운 문서(핸드오프)를 결과물로 출력함
- 이 핸드오프 문서는 다음 단계의 입력값으로 자동 전달됨—예시: context.md → plan.md → design.md 등
- AI 프로바이더 교차 사용 시, 현재 기술상 하나의 대화 세션(window)에서 context를 공유할 수 없으므로, 단계 분할과 핸드오프가 핵심

### 각 단계별 AI 세션 분리는 실험성과 품질관리에서도 많은 이점을 제공함

- 각 스텝별로 모델/도구 교체가 자유로움: 예) 탐색 단계 Sonnet, 기획 Opus, 설계 Gemini 등
- 사용자(혹은 운영자)는 원하는 단계에서 개입, 검수, 실험적 교체 가능
- LLM들에게 한 번에 너무 많은 책임을 지우면 쉽게 실패(복잡한 fullstack 앱 불가), 단계별 단일 임무 집중이 결과물 품질 극대화
- 핸드오프 프로세스 내 커뮤니케이션 및 컨텍스트 엔지니어링이 매우 중요, 해당 스킬/프롬프트의 설계 경험도 공유

### SonarQube Advanced Security를 통한 자동화 코드 보안/검증 중요성을 강조함

- 영상 스폰서이자 추천 도구인 SonarQube Advanced Security는 코드 의존성의 취약점을 실시간으로 탐지 및 차단 가능
- 최근 Axios NPM 패키지 트로이 목마 사건 등 AI 코드 자동생성 시대에는 이런 취약점 검증이 필수
- SonarQube는 SCA, SAST, secrets detection을 통합해 AI·사람 모두가 작성한 코드를 통합적으로 검증
- 기본 SonarQube는 5만 라인 미만의 개인 프로젝트에 무료 제공(추가링크 안내)

### 구체적인 실전 워크플로우 진행 절차와 적용 예시를 자세히 안내함

- 단계적 전체 프로세스: 1) 탐색(Exploration), 2) 플랜(Planning), 3) 디자인(Design), 4) 통합(Integrations), 5) 검증(Validation), 6) 배포(Deployment), 7) 스모크 테스트(Smoke test)
- 시작점은 충분히 구체적인 명세서(spec.md) 작성, 예시로 "Deep Space Catalog" 앱 설계문서 및 아티팩트 제공
- 각 단계별 스킬은 오픈소스 리포(Runbook) 내에 준비되어 있어, Pi나 Claude Code 같은 코딩 에이전트로 손쉽게 호출 가능
- 도구별로 모델 전환(예: /model 명령어), 스킬 실행(예: /frontend mix explore, /frontend mix plan 등) 및 입력 아규먼트 파일 지정

### Planning·Design 스텝에서 LLM간 역할·책임 분리가 성과의 핵심임

- plan.md 단계: Opus가 전체 앱의 컨텐츠·스타일, 백엔드 구조, 배포 기획까지 상세 계획을 작성하나, UI 구조에 대한 모든 정보는 제외
- 이 설계를 Gemini가 이어받아 시각적 UI/UX 설계만 실시(서로의 강점 분리로 최상의 성과 도출)
- 실제로 Opus가 디자인까지 지시할 경우 Gemini의 장점을 못 살림→역할 분리가 필수적임

### 사용자 개입/검증 및 실전 적용 시의 팁·베스트 프랙티스도 상세히 공유함

- 각 노드별(스텝별)로 아티팩트(핸드오프 문서)가 남으므로, 사용자는 원하는 시점마다 중간 산출물 검증·피드백·수정 가능
- 스킬과 명령어는 Pi, Claude Code, Anti-Gravity 등 다양한 에이전트 환경에서 거의 동일하게 호출·사용 가능함
- Github 리포지토리의 readme.md와 예시 spec, artifacts 참조하여 즉시 본인 프로젝트에 적용 가능

### 전체 프로세스의 반복성과 자동화를 통해 다양한 프론트엔드/풀스택 웹앱 MVP 개발을 쉽게 구현함

- 단계별 독립 세션 구조, 핸드오프 기반 연결, 각 LLM/코딩 에이전트의 강점 위주 최적 분배로 단일 샷(one-shot) 웹앱 구축 가능
- 복잡도가 낮지 않은 Proof-of-Concept, MVP 풀스택 앱도 신속히 제작
- 스모크 테스트까지 포함한 E2E 자동화 지원(Agent Browser Skill을 통한 사용자 시나리오 테스팅 포함)
- 예시로, Deep Space Catalog 외에도 다양한 웹앱 테스트를 다수 성공적으로 시연

### 오픈소스 워크플로우, 단계별 스킬, 설정 가이드, 명령어 등이 모두 공개되어 활용성이 높음

- 워크플로우 및 각 스킬들은 Github 오픈소스 리포(설명란 링크)에서 제공
- Pi, Claude Code, Anti-Gravity 등 코드 에이전트 환경에서 동일한 방식으로 실행 가능
- readme.md 및 spec.md 예시, 아티팩트 폴더의 핸드오프 문서까지 모두 실전 활용에 도움
- 영상 내 데모/가이드 문장을 그대로 따라해 즉시 실습 가능, 각 스킬은 프롬프트 또는 파일 경로 지정 방식으로 쉽게 호출됨
