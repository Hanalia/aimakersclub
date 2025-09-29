---
author: AI Makers Club
pubDatetime: 2025-09-29T23:45:35.773Z
title: "Claude Sonnet 4.5 - The New Coding King? (Sonnet 4.5 vs. GPT 5 Codex)"
slug: P-0fm8ljl0I
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "엔트로픽(Anthropic)이 출시한 클로드 소넷 4.5(Claude Sonnet 4.5)는 기존 Opus 4.1 및 최근 강세를 보인 OpenAI의 GPT 5 Codex(코덱스)"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/P-0fm8ljl0I/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Claude Sonnet 4.5 - The New Coding King? (Sonnet 4.5 vs. GPT 5 Codex)](https://www.youtube.com/watch?v=P-0fm8ljl0I)  
**채널명:** Cole Medin

## *Claude Sonnet 4.5 - 새로운 코딩 왕? (Sonnet 4.5 vs. GPT 5 Codex)* 핵심 요약

- 엔트로픽(Anthropic)이 출시한 클로드 소넷 4.5(Claude Sonnet 4.5)는 기존 Opus 4.1 및 최근 강세를 보인 OpenAI의 GPT 5 Codex(코덱스)까지 벤치마크에서 압도하며 새로운 코딩 AI의 강자로 부상
- 공식적으로 소넷 4.5는 agentic tool 사용 부문에서 선두, 컴퓨터 활용 능력에서도 Opus 4.1 대비 약 20%의 성능 향상 수치를 기록
- Claude Code v2.0 등장: 기본으로 소넷 4.5 적용, 이전 Opus 4.1로도 전환 가능. 신규 VS Code 확장 프로그램 및 Claude Code(agents) SDK도 도입
- 실제 개발 테스트: 동일한 요구사항(기존 agentic 애플리케이션에 Stripe 결제통합 구현)을 Claude Sonnet 4.5(Cloud Code)와 GPT 5 Codex(Codeex) 환경에서 각각 진행
- Sonnet 4.5는 Stripe 통합 전 과정 15분 만에 구현, 과거 Opus 4.1이 35분 소요된 것 대비 2배 이상 빠른 속도. GPT 5 Codex는 1시간 20분 소요해 Sonnet 4.5 대비 월등히 느림
- 구현 결과 Sonnet 4.5가 소소한 오류(앞단·뒤단 URL 불일치 등)를 보였으나 전체적으로 우수한 품질과 빠른 결과 산출
- GPT 5 Codex는 파일 편집 및 반복적 읽기 등 비효율적 루틴에 많은 시간을 소모했고, UI·거래 이력 등 일부 완성도 아쉬움 남음
- 두 모델 모두 Stripe 결제, 토큰 관리 등 기능은 구현 성공. 그러나 세부 오류 수정 반복 필요
- 결과적으로 현 시점에서 Sonnet 4.5의 속도와 품질이 크게 앞서며, 향후 LLM 개발 경쟁에 중요한 이정표 제시
- Anthropic의 적극적 마케팅 및 코드 도구 생태계 확장을 통한 사용자 경험 혁신도 주목됨

---

## 세부 요약 - 주제별 정리

### 벤치마크와 공식 출시를 통해 Sonnet 4.5가 AI 코딩 왕좌에 등극함을 입증함

- Anthropic이 Claude Sonnet 4.5를 공식 출시, 벤치마크 결과 현존 최고 AI 코딩 모델로 평가
- Opus 4.1을 포함한 기존 Anthropic 모델들을 능가하며, 최근 크게 주목받던 OpenAI GPT 5 Codex를 벤치마크에서 앞섬
- 특히 agentic tool 사용 부문에서 선두 등극, 컴퓨터 활용 능력에서는 직전 Opus 4.1 대비 무려 20% 향상된 성능 데이터 발표
- "벤치마크는 전부를 말해주진 않는다"는 전제하에 실제 사용 경험이 궁금하다는 영상 제작자의 시각 제시

### Claude Code v2.0과 생태계 전반에 걸친 대대적 업그레이드가 진행됨

- Claude Code가 v2.0으로 업데이트, 소넷 4.5가 기본 엔진으로 적용됨 (원할 경우 옛 Opus 4.1로도 전환 가능)
- VS Code(비주얼 스튜디오 코드) 확장 프로그램 추가
- Claude Code SDK도 개편되어 지금은 공식적으로 Claude agents SDK로 명명, 에이전트 기반 경험 구축에 초점
- Anthropic은 이번 출시와 함께 YouTube 채널 등에서 활발한 신제품 홍보와 기술 콘텐츠 발표

### 실제 개발 환경에서 Sonnet 4.5와 GPT 5 Codex의 코딩 성능을 직접 비교함

- 동일한 개발 요구사항: 기존 agentic(에이전트 기반) 애플리케이션에 Stripe 결제 기능 통합
- 테스트 환경: 좌측은 Codeex(GPT 5 Codex 사용), 우측은 Cloud Code(새로운 Sonnet 4.5 사용)
- 실제 복잡한 코드베이스 위에서 기획~구현~테스트 전체 과정을 동일하게 수행
- 이미 Stripe 연동이 완료된 별도의 브랜치 존재, 실제 구현은 이와 독립적으로 새롭게 시작

### PRP를 적용한 AI 코딩 실행 워크플로우를 양 모델에 동일하게 적용함

- 명확히 구조화된 PRP(Procedural Requirement Prompt) 기반 문서를 작성해 두 AI 모델 모두에게 입력
- 명령어 실행 시, 기능 명세서를 읽고, 구현 방안을 고안, 작업을 세분화 후 태스크 단위로 처리
- 각자 독립적인 Git 저장소에서 병렬로 개발이 진행됨

### 중간 진행 상황에서는 Sonnet 4.5의 월등한 속도와 안정성이 확인됨

- 코덱스(Codeex) 측: 데이터베이스 관련 작업 시 여러 커맨드 실행 실패 등으로 상당히 느린 진행 속도
- 파일 읽기 등 기본 작업 자체도 느림
- Sonnet 4.5(Cloud Code): 빠른 속도로 프론트엔드 Stripe 구매 컴포넌트 및 디스플레이 구현까지 순조롭게 처리
- 작업 목록(Task list) 상으로도 Claude Code(소넷 4.5) 쪽이 상당히 앞서 나가는 상황

### Sonnet 4.5는 Stripe 결제통합 전 과정을 15분 만에 끝내면서도 실용적 성공을 거둠

- 15분 만에 Stripe 연동 전체 구현 완료, 과거 동일 작업을 Opus 4.1로 했을 땐 35분 소요됐음 (2.3배 향상)
- 소스 코드 자체 사전 검토 시, 프론트엔드와 백엔드 URL 일부 잘못 연결 등 사소한 버그 존재 → 즉시 수정 가능
- 데모 결과 UI는 양호하며, 토큰 구매 시 Stripe checkout으로 연결되는 등 실제 결제 플로우 정상 작동
- 테스트 환경상 Stripe 샌드박스 계정과 가짜 카드 정보로 결제 수행
- 메시지 전송·토큰 소진 처리 등에서도 정상 동작, 단 토큰 수치 반영은 새로고침이 필요 등 마이너 이슈 반복

### GPT 5 Codex(Codeex)는 속도와 효율성에서 큰 약점을 드러냈으나, 기능 구현 자체는 성공함

- Stripe 결제 기능 완성까지 1시간 20분 소요됨. Sonnet 4.5 대비 월등히 느림
- 파일 수정 후 재독(file re-reading) 등 비효율적 동작이 반복되어 전체 프로세스를 지연시킴 (제작자는 Windows 환경이 원인일 수도 있다는 의견 언급)
- Front-end·거래 이력 등 일부 UI 품질과 상태 관리, 표시 갱신 등에 미세한 불완전성 존재
- 하지만 Stripe 결제, 토큰 지급, 메시지 전송 시 토큰 감산 등 핵심 기능은 동작

### 반복적 수정(iteration)을 통해 두 모델 모두 자잘한 오류와 환경설정 문제를 보임

- Sonnet 4.5: 한두 차례 반복( iteration )으로 URL 불일치 등 소소한 문제 수정 가능
- Codex: 환경세팅, Docker 컨테이너 구동 등에서 반복적 수정 필요
- 그래도 두 모델 모두 일정 수준 이상 결과물을 산출할 수 있음

### UI 구현·사용자 경험 측면에서는 Claude Sonnet 4.5가 우세함을 확인할 수 있었음

- Sonnet 4.5: 깔끔하고 실용적인 UI, 결제 동작 등에서 사용자 편의성 양호
- Stripe checkout 자체로 이동하는 플로우를 취함
- Codex: UI가 다소 덜 세련되고, 거래 이력 등 부가 요소가 있으나 불완전
- 결제프로세스는 인라인 처리, UI상 개량 가능성 높음

### 결론적으로 현 시점에서 Sonnet 4.5가 코딩 AI 분야의 품질·속도 모두에서 뚜렷하게 앞섬

- Sonnet 4.5는 파일 처리 속도, 기능 구현 정확도, 필요한 반복 횟수 모두에서 우위
- Codex 역시 전체적 기능 구현에는 성공해 장기적으로 충분한 성장 가능성 보임
- 하지만 2024년 6월 기준으로 Sonnet 4.5가 LLM 기반 코딩 도구의 새로운 강자임을 확인하는 계기
- "지금 시점에서 Sonnet 4.5가 확실히 승리 중"이라고 결론
- 영상 제작자는 LLM·AI 코딩 기술의 발전 및 에이전트 개발에 대한 지속적 관심을 약속

### Anthropic의 제품 전략 및 사용자 생태계 확장에 대한 언급이 눈에 띔

- Claude Code SDK("Claude agents SDK"로 명칭 변경) 등으로 개발자 대상 툴 강화
- VS Code 등 실무 환경과의 통합도 빠르게 추진
- YouTube 등 미디어 활용한 적극적 신제품 홍보 및 데모 콘텐츠 공개
- 이런 전방위적 확장이 AI 코딩 플랫폼의 표준화를 촉진할 것으로 기대됨
