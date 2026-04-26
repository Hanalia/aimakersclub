---
author: AI Makers Club
pubDatetime: 2026-04-26T08:20:00.190Z
title: "Pushing My Dark Factory Further with Kimi K2.6: A Codebase That Writes Its Own Code, Live"
slug: BGpYeE1dKI8
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 ‘Dark Factory’라는 코드베이스가 인간의 개입 없이 스스로 개발·관리·배포하도록 설계한 실험 프로젝트에서, 기존 모델(Miniax M2.7) 대신 최신 오픈소스"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/BGpYeE1dKI8/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Pushing My Dark Factory Further with Kimi K2.6: A Codebase That Writes Its Own Code, Live](https://www.youtube.com/watch?v=BGpYeE1dKI8)  
**채널명:** Cole Medin

## *Kimi K2.6으로 "코드를 직접 작성하는 코드베이스"를 강화하기* 핵심 요약

- 본 영상은 ‘Dark Factory’라는 코드베이스가 인간의 개입 없이 스스로 개발·관리·배포하도록 설계한 실험 프로젝트에서, 기존 모델(Miniax M2.7) 대신 최신 오픈소스 LLM Kimy K2.6(2024년 4월 출시)을 채택해 성능, 비용, 워크플로우 통합, 실제 운영 등을 전 과정을 시연함
- Kimy K2.6은 오픈소스임에도 Claude Opus 4.6, Gemini 3.1 Pro, GPT-4.5급 성능을 달성하고, 입력 토큰 단가가 Haiku나 기존 상용 모델 대비 훨씬 저렴하여 효율성을 크게 높임
- 운영도구로서 무료 오픈소스 harness builder ‘Archon’(아콘)과 이를 활용한 다양한 워크플로우(YAML 문서 지원, triage, 구현, PR 리뷰, 주기적 리그레션 테스트 등)가 핵심 구조로 작동
- Archon 및 각종 인공지능 harness 도구(클로드 코드 등) 조합으로, 사용자 이슈가 깃허브에 등록되고, 자동화된 triage → 구현 → 검증 → PR 생성 → 리뷰 → 배포 루프를 무인으로 순환시킴
- Kimy K2.6 도입은 단순 API 크레딧 낭비를 줄이고 월 구독 기반 대량 작업(5시간당 2천만 토큰 구간 등)에 최적화되었으며, 스케일링(동시 워크플로우 병렬처리)의 실효성을 함께 검증
- 실시간 실습을 통해 Dark Factory 코드베이스에 실제 이슈 제기(프론트엔드 UI 개선, 과다 출처 인용 문제 등)→ Kimy K2.6에 의한 자동 구현→ PR, 배포 검증까지 전 과정을 시연하고, PR의 코드 품질은 Claude Opus 4.7로 교차 평가(B+ 등급)까지 수행
- Archon의 워크플로우 설계, deterministic과 non-deterministic 작업 노드 혼합 운용, harness 제작에 있어 유연성(완전 맞춤형 명령 및 흐름 설계)을 강조
- 실험 결과 Kimy K2.6의 자율 코딩, 저렴한 구독 요금, Archon 기반 워크플로우의 견고성, Dark Factory와 안정적 통합까지 실제 활용 경험을 풍부히 공유함

---

## 세부 요약 - 주제별 정리

### Kimy K2.6 도입 배경과 타 모델 대비 우수성 실시간 분석

- Kimy K2.6은 출시 2주 이내임에도 주류 모델(Claude Opus 4.6, Gemini 3.1 Pro, GPT-4.5/4.7 등)에 준하는 구문 처리 성능과 코드 생성 능력을 오픈소스 기반에서 보여줌
- 특히 OpenRouter 상에서 입력 토큰 기준 Haiku 대비 더 저렴한 비용, 높은 가격 경쟁력을 보임(예: 월 $40 구독 시 5시간 기준 2천만 토큰, 30 동시 요청)
- 이전에 사용하던 Miniax M2.7은 매우 저렴하나 복잡하거나 장시간 코딩 작업에서 일관성·품질 저하 현상, 추가 개선작업(Opus/Miniax 협업 필요 등) 비용 문제 등 단점을 가짐
- Kimy K2.6 채택 시 벤치마크상 뛰어난 코드 품질, 채용 비용 저감, 자원 제한(토큰·동시성) 유연한 확장이 주요 장점으로 분석됨

### Archon 기반 Dark Factory 자동화 개발 구조의 실제 구현

- Dark Factory란 "어떤 이슈든 깃허브에서 제기되면 완전히 무인으로 코드 작성, 리뷰, 테스트, 배포까지 이어주는 코드베이스" 실험체
- Archon은 오픈소스 harness builder로, 사용자가 직접 YAML로 각종 ‘워크플로우’를 정의해 관리(예: 이슈 triage, 계획, 구현, PR 리뷰, 회귀 테스트 등)
- Archon과 Claude Code 연동을 통해 각 프로세스(이슈 분류, PR 검수, 주기적 대규모 테스트) 단계별로 deterministic/agentic 단계 혼합, 인풋 이슈→최종 배포까지 자율 자동화
- 실시간 시청자와의 Q&A를 통해 Archon, Claude Code, Pi, OpenCode 등 다양한 코딩 에이전트와의 연동 가능성을 검토

### Miniax M2.7 및 로컬/구독형 모델의 실제 한계와 활용 구간

- Miniax M2.7은 월구독 $13로 매우 저렴하지만, 대규모 agentic 작업이나 긴 코드 생성에서 많은 추론 수정, 후처리 필요성 존재
- 적합 활용처: 경량 창작·플래너·일반적 정보 도우미(콘텐츠 요약, 일정 관리 등), 무거운 다이어그램/대규모 발표자료 등에는 비추천
- 비교: 복잡한 코딩 과제에서는 Opus 후기판이 압도적으로 뛰어나고, 병렬 provider 혼합 사용(일반 작업 Miniax, 검증/후처리 Opus 등)도 추천됨
- 로컬 LLM도 꾸준히 발전 중이지만, 현재까지는 대형 클라우드 LLM 대비 품질·속도·최적화 면에서 한계 있음

### AI 워크플로우 통합(Archon, Claude Code 등)의 구조와 유연성

- Archon은 “harness builder”로 본질적으로 사용자가 응용 도메인 맞춤 워크플로우(YAML) 작성하는 구조, 최소한의 토큰 오버헤드(5% 내외)
- 워크플로우마다 명확한 분리(계획/구현/검증/배포/PR 검증/회귀 테스트), 노드 단위로 모델, provider, 실행 단계를 선택(각 단계별 코드 품질·비용·속도 최적화 가능)
- 실습 사례: Archon workflow로 뉴스기사 → AI영상 자동 생성(음성/영상 결합), PR 검증, 릴리즈 태깅 자동화 등도 손쉽게 구현
- 단일 워크플로우에서 haiku/Opus/CodeEx 등 여러 모델 혼합/교대 활용 가능, 실제 프로젝트 운영 코드까지 확장성 확보

### Kimy K2.6 환경 구축 및 구독·API의 실제 과정 설명

- Kimy K2.6은 $40/월 구독으로 비용 대비 대용량 추론 가능(5시간 구간 2천만 토큰/30동시 요청)
- 환경설정: Kimy api키 발급, 클라우드 코드에서 Anthropic 호환 base URL 설정, .env 환경변수와 Archon config 동시 갱신 필요
- 실제 config 우선순위(Archon의 per-codebase 변수가 env보다 우선) 등 복수 계층의 세팅 주의점 시연
- Kimy 대시보드에서 실시간 API 호출, 토큰 사용량 추적(실제 예시: 9회 초기 요청, 작업–> 1% 사용량 등 체감 공유)

### Dark Factory에서 ‘실제 이슈 생성→자동 triage→구현→배포’까지 전체 사이클 실연

- 실습 과정: 프론트엔드 UI 개선, 출처 인용 개수 제한, 동영상 보기 모달 크기 및 정렬이슈, 검색 기능 추가 등 다양한 이슈를 직접 입력
- 각 이슈에 대해 Claude Code가 코드베이스 맥락 조사–> 개별 깃허브 이슈 자동 생성, Archon triage 워크플로우로 우선순위/종류/자동레이블링 등 처리
- 자동화된 PR 및 배포 파이프라인(생성 이슈→PR→자율 코드 검증 및 리뷰→병합–>10분 간격 자동 배포까지) 연동
- Kimy K2.6 환경 전환 이후 실제 이슈에 대한 코딩・배포 및 후속 검증 흐름을 체계적으로 점검

### Kimy K2.6 속도, 비용, 토큰 한계 및 실전 스케일링 경험

- Kimy K2.6의 토큰 당 처리 속도는 Miniax M2.7, Opus 4.7과 비교해 TPS는 상대적으로 낮으나, 5시간 2천만 토큰 등 사용량이 매우 넉넉, 실제 대량 워크플로우에도 무리 없음
- 실제 작업 예시에서 8개 이슈 동시 혹은 순차 자동 처리, 동시 작업 병렬 스케일링
- 토큰 대비비용 효과, 깃허브 이슈 처리에 드는 누적 비용(변경 전 $155 등 실제 사례)도 상세히 공개

### PR 코드 퀄리티 평가 방식 및 Kimy K2.6 실제 결과

- 자동 생성된 PR(예: 관리자 비디오 라이브러리 검색 기능) 코드는 Opus 4.7가 클로드 코드 상에서 직접 리뷰 및 "B+ 등급", 다수의 세부사항(오스게이트 처리, 라우터 패턴, 스타일 패턴 등) 평가
- 결함: 작은 쿼리 처리, 일부 린트 이슈 등 세부적 문제점도 공정하게 지적(후속 GitHub 이슈로 자동 생성)
- 실제 PR 머지 후 10분 간격 자동 배포된 기능이 프론트엔드에 구현되어, 기능 확인 및 전체 사이클 투명성 확보

### Archon 워크플로우/스킬 설계와 개인별 맞춤 harness 제작 쟁점

- Archon은 BMAD, GSD, GitHub spec kit 같은 ‘고정형 harness’와 다르게, 사용자가 일반 영어 설명으로 직접 체계 설계, 기존 LLM 스킬을 deterministic 워크플로우로 이식 가능
- 예시: 회귀 테스트, PR 리뷰, “Plan→Implement→Validate(=PIV 루프)” 등 대표 워크플로우 기본 제공. 그러나 사용자 맞춤 workflow 설계가 권장 사용 방식
- deterministic(스크립트 기반)/nondeterministic(LLM reasoning 등) 노드 혼합으로, 에이전트가 실수하거나 망각할 수 있는 체크포인트 강제 실행 가능
- 엔지니어링 패러다임: 2023년까지 prompt engineering, 2024년 context engineering에서 harness engineering 단계로의 진화, 업무 프로세스 전체 감싸기 중요성 강조

### Dark Factory에서의 보안/프롬프트 인젝션, TDD, 길어진 기억 관리 등 챌린지

- prompt injection과 같은 보안 위험을 고려, Archon 워크플로우 단계에서 탐지 및 방지 처리도 디자인
- Test Driven Development(TDD) 워크플로우와 프롬프트(코딩 에이전트가 테스트 자체를 임의 수정하지 못하게 제한) 같은 실제 소프트웨어 엔지니어링 원칙 통합의 중요성도 논의
- 김미 K2.6의 일시적 작업 지연이나 일부 hang 현상 등 실전 운영 이슈도 투명하게 공유

### 커뮤니티와 아콘 프로젝트 오픈소스화, 확장 계획·로드맵 공유

- Archon의 약 2만 GitHub 스타, 커뮤니티의 다양한 워크플로우 공유 요청 및 “워크플로우 마켓플레이스” 설계 로드맵(PI 에이전트 확장 등) 소개
- 매주 TDD 워크플로우 추가, 깔끔한 소개서/설치 안내(웹UI, npx 패키지 공개 준비 등)와 아콘 스킬 간소화, 신규 사용자의 onboarding 이슈 적극 대응 의지 표명
- Dynamis 커뮤니티와 YouTube 채널에서 워크숍, 마스터클래스, 실전 사례 지속 확대 계획

### Dark Factory와 Archon의 미래지향적 harness 엔지니어링의 가치 평가

- 코딩 에이전트, AI 워크플로우, harness의 급격한 발전에 맞춰 “사용자 직접 설계형 harness”의 중요성(빠른 도구 진화, 맞춤형 프로세스 유연성, 모델·도구 버전 교체 신속 대응 등)을 강조
- Stripe/Shopify 등 대기업 harness 트렌드(공개 아닌 내부 harness 위주)와 비교해, 오픈소스 Archon이 “하위 툴+에이전트 위를 관장하는 상위 계층”으로 현재 유일무이한 위치임을 설명
- 도구/모델의 변화에도 YAML 워크플로우 abstraction을 통해 보존력 및 반복적 변화 대응력 우수
- 사용자 직접 harness 설계 및 AI 작업 흐름 최적화 능력이 미래 인공지능 활용 핵심 역량임을 시사
