---
author: AI Makers Club
pubDatetime: 2026-05-25T08:19:46.125Z
title: "Archon + Jira: Drag a Ticket, Get a Pull Request (Live Build)"
slug: qyB52HIiou8
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 오픈소스 AI 코딩 워크플로 빌더 **Archon**을 Jira에 통합하는 과정을 실시간으로 시연하며, Jira 티켓 코멘트에서 Archon을 직접 호출해 워크플로를 실행하"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/qyB52HIiou8/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Archon + Jira: Drag a Ticket, Get a Pull Request (Live Build)](https://www.youtube.com/watch?v=qyB52HIiou8)  
**채널명:** Cole Medin

## *Archon + Jira: 티켓을 드래그하면 자동으로 PR 생성 (실시간 개발)* 핵심 요약

- 영상은 오픈소스 AI 코딩 워크플로 빌더 **Archon**을 Jira에 통합하는 과정을 실시간으로 시연하며, Jira 티켓 코멘트에서 Archon을 직접 호출해 워크플로를 실행하고 최종적으로 Pull Request(PR) 생성까지 자동화하는 전체 흐름을 다룸
- Jira는 개발 도구 중에서 Stack Overflow 설문 기준 GitHub, Confluence와 더불어 가장 많이 쓰이는 툴이며, 실제 실무에서는 80% 이상의 조직이 Jira를 사용한다고 언급
- Archon은 기존에 Web UI, CLI, Slack, GitHub, Telegram, Discord 등 다양한 플랫폼 어댑터를 지원하고 있으며, Jira는 공식 어댑터가 아닌 "커뮤니티 어댑터" 형태로 추가
- 어댑터 설계 시 "각 Jira 이슈(티켓)가 Archon과의 독립적이고 지속적인 채팅방(스레드)이 되도록" 의도하여, 각 티켓마다 AI 코딩 에이전트와 전용 대화 및 워크플로 실행이 가능해짐
- 어댑터 통합 워크플로는 **PIV System Evolution**이라는 12단계 Archon 워크플로를 활용해, GitHub 이슈를 입력받아 구현/검증/리뷰/시스템 개선 루프를 돌고 마지막에 Pull Request까지 생성
- Jira 어댑터 구현 과정에서 다양한 인증, 환경변수, Webhook, API 커넥션 문제 및 애플리케이션 구조/폴더 분류, mention 감지 방식 등의 디자인 이슈를 실시간으로 문제 해결
- 워크플로 구현 도중 각 단계마다 인간 승인(Human Gate)을 두어 계획, 구현, 수정의 품질을 점검하며, 오타 등 단순 장애도 신속하게 대화 방식으로 교정
- 테스트를 위해 Jira에 10개 이슈 및 Epic을 생성하고, 실제 티켓 코멘트로 "@archon"을 호출하면 Archon이 자동으로 응답·분석, 또는 워크플로를 실행해 PR 생성까지 연결되는 전체 파이프라인을 완성
- 각종 모델(Claude Code Opus, Sonnet, Kimmy, Gemini 3.5 Flash 등)을 혼합 활용해, 비용/속도/성능 최적화를 실험하고 실시간 벤치마킹 결과도 공유
- 쌓인 대화 내역, 장애 상황, 개선점 등은 추후 Archon 시스템 진화(Evolution) 단계에서 다음 루프의 품질 개선에 활용하는 방법까지 실질적으로 보여줌

---

## 세부 요약 - 주제별 정리

### Jira는 대다수가 사용하는 핵심 개발 도구이고 Archon 통합은 생산성 혁신 포인트임

- Jira와 Confluence는 Stack Overflow 설문에서 GitHub 등과 비슷한 수준으로 압도적 점유율
- 최근 엔터프라이즈급 AI 코드 어시스턴트(Claude Code 등) 교육 확대로 Jira 사용량 증가
- 실제 현업의 80% 이상이 Jira를 도입 중으로, AI 워크플로 자동화에 Jira 통합 요구가 높음
- Jira 티켓/보드는 칸반(kanban) 방식으로, 개발 프로세스에서 핵심 관리 창구임
- Archon은 다양한 워크플로 자동화가 가능한 오픈소스 AI 코딩 툴로, 기존에는 Web, CLI, Slack, GitHub 등만 지원
- Jira 통합 목적: 각 이슈(티켓) 단위로 Archon을 통해 AI 대화와 자동화된 워크플로를 바로 실행할 수 있게 구현

---

### 각 티켓이 독립적인 AI 대화방이 되며 참여형 협업/자동화가 강화됨

- 구현 목적: Jira의 각 티켓이 Slack thread처럼 별도 Archon 코딩 에이전트와 독립 챗룸 역할
- 티켓을 플래닝 및 구현, 검증, PR 생성까지 한 명의 에이전트가 End-to-End로 이어감
- 대화형 워크플로: Jira 코멘트에 "@archon" 멘션 → Archon이 티켓 맥락에 맞게 워크플로 실행 및 대화
- 자동/수동 방식 병행: (1) 댓글 대화 중심 사용, (2) 티켓 생성 감지해 Archon이 자동 처리(후자는 워크플로로도 구축 가능)
- 병렬 대화가 가능하며, 여러 티켓을 동시에 각기 다른 Archon 세션과 연결
- Slack, GitHub 어댑터 등 기존 코드와 구조를 참고해 Jira 어댑터도 모듈화 설계

---

### Archon 플랫폼의 다양한 공식/커뮤니티 어댑터 체계를 설명하고 Jira는 커뮤니티 어댑터로 추가됨

- Archon은 "공식(maintainer)"/ "커뮤니티(community)" 어댑터로 구조 분리
- 공식 어댑터: 개발자/유지 보수 책임을 오피셜로 명시(예: Web, CLI, Slack, GitHub)
- 커뮤니티 어댑터: 외부 기여자(예: gy, gitlab, discord)이 직접 관리 및 확장
- Jira 어댑터도 커뮤니티 어댑터로 추가 설계(지속적 유지보수는 미확정)
- 어댑터 폴더 구조/종류(Category)는 "chat"이 아닌 "task management"로 신규 분류(Asana, Monday.com, Linear 등 향후 추가 대비)
- 기존 소스 구조(커뮤니티/forge/...)와 연계성 확인

---

### 아키텍처 전반과 인증·환경변수·Webhook 등 실 구현 세팅을 상세히 다룸

- 인증: Atlassian(Jira) API 토큰 + 도메일 + 이메일 환경변수가 필요
- 각종 환경변수(.env): jira_domain, jira_email, jira_api_token, jira_webhook_secret, jira_bot_mention 등 지정
- Secret 관리는 process.env/global.arch.env에 통합, 권한설정 및 관련 API 사용 방식 안내
- 인증 토큰은 1년 기한, 생성 및 관리 과정을 실시간 데모
- Webhook 적용을 통한 이슈 코멘트/이벤트 실시간 수신, 터널링(ngrok http 3000 등) 방법 실습
- Webhook URL, Secret 전달과정에서 발생하는 세부 오타 및 내부 API 경로 불일치 등 꼼꼼한 오류 확인 및 수정
- mention 방식: 단순 String(ex: archon)을 트리거로 사용(계정ID 불필요, 케이스 인센시티브)

---

### 실제 Archon 워크플로 빌드는 PIV System Evolution 12단계 구조로 매우 체계적으로 진행됨

- PIV System Evolution 워크플로: context loading → planning → implementation → validation(타입체크, 린팅, 코드리뷰) → system evolution 루프
- 각 단계에 인간 승인(approval gate) 포함: 계획/구현/시스템 개선 직접 검토
- 워크플로는 GitHub 이슈를 입력받아 마지막에 Pull Request(PR) 산출물 생성
- 오류 발생 시 원인(오타, 잘못된 변수, hallucination 등)을 실시간으로 탐지, 그 자리에서 한정된 수리, 재시작도 즉시 처리
- Chat 기반 승인/제어: 명령어 archon approve, archon chat 등, GitHub / CLI 교정까지 임베딩

---

### Jira 티켓/Epic/Fix 요청 생성·연결을 실제로 진행하며, 테스팅 이슈도 흥미롭게 설계됨

- "Dark Factory Experiment"라는 실제 프로젝트 위한 새로운 Jira Space 생성
- epic 1개 + demonstration용 10개 이슈 자동 생성(RAG로 코드베이스 분석 및 버그/신규기능 후보 추출)
- 추가적으로 실제 사용상 문제점(예: 동영상 라이브러리 정렬 기능 부재, 실시간 chunk 피드백 등) 신규 티켓화
- 이슈 생성 후 각 티켓에 "@archon" 멘션 → 실제 동작 테스트로 연동 기능 검증

---

### Claude Code, Sonnet, Kimmy, Gemini 등 AI 모델을 단계별·혼합해 워크플로 품질/비용/속도를 최적화함

- 주로 Planning에는 Opus, Implementation에 Sonnet, Kimmy(K 2.6)을 혼합사용(비용/토큰 효율 최적화와 성능 균형)
- 실시간 벤치마크: 예) opus는 계획 단계만 쓰고, 구현 및 기타는 Sonnet 등 저렴한 모델 활용 시 결과 품질 유지 가능
- PyPI, OpenRouter, Gemini 3.5 Flash, Kimmy, Minimax 등 최신 모델간 호환/교환성 언급
- Anthropic의 Clode Code Agent SDK 정책 변화, 고려사항 등 실시간 언급

---

### 구현/테스트/디버깅 과정에서 발생한 다양한 실질 장애와 버그를 현실적으로 대처함

- Webhook 경로 오타, Secret 파라미터 누락, 환경변수 명칭 혼동(jira_domain vs jira_base_url), payload 필드 포맷 불일치(Jira comment.body의 body 포맷), 인증 실패 등
- Live CLI/VSCode 화면 공유 및 보안(SAFE 수기 연동, 민감노출 차단) 동시 고려
- 채팅 중 발생하는 문자 깨짐, 지연, Cloud Code CLI의 특이한 character bug, UI Lemitation 등 사용상 경험적 문제 구체 제시
- 커뮤니티의 피드백(Q&A)/격려 앱(badclaude, goodclaude 등) 소개, 실제 실무 현장형 토론 반영

---

### 개발/운영적 관점에서 Archon+Jira의 활용 패턴과 시스템 진화 방식이 잘 드러남

- 티켓별 반복 진화 루프: 클라우드 에이전트가 반복적으로 학습/개선하여 모듈품질 및 시스템 전체 신뢰성이 제고됨
- Archon의 모듈적 설계로, 필요 기능만 어댑터 형태로 경량화 사용 가능(별도 플러그인 필요 없음)
- 오픈소스 지향 → 외부 기여자/사용자도 자유롭게 어댑터 추가/유지관리 가능
- (추가) 커뮤니티 어댑터의 관리·유지보수 원칙(책임소재/경량구조)

---

### 실시간 사용자/시청자 질의 및 툴셋·적용 전략까지 넓게 공유

- 코드 작성/테스트 외 실제 RAG 전략, 벡터DB 사용(postgres+pgvector), 프론트엔드 추진방향, 유동적인 비용관리 및 오픈라우터 API 실사용 내역(한달에 $60 이상) 등 투명하게 공개
- 피드백 수렴/특강 세션(아키텍쳐 개선, 회고 필요성 등) 언급, 커뮤니티와 실시간 상호작용
- 관련 소프트웨어(anti-gravity, obsidian, obs 등), 테마/디자인, 악세사리(archon logo 자동추출 등)까지 실제 운영 환경 중심 설명

---

### 실제 코드, 로직, 커뮤니티/GitHub 연계, Jenkins/자동화 관점에서의 확장성도 포괄적으로 안내함

- 커스텀 워크플로/프론트엔드 생성, 코드 구조 설명, 각종 디렉터리관리, 개발자 편집기 연동 등 실제적 적용 사례 중심
- GitHub 연동/CI, 단위테스트, PR오토생성, 정책(보안, 승인, 실시간 통신 등) 유념사항 설명
- "meta Archon skill", system evolution 등 코어 단위를 통한 자기 개선 시스템 철학 언급

---

### 마지막까지 완전하게 라이브로 통합 테스트를 완료, 타이포 및 작은 문제까지 내부 자동수정 루프로 처리함

- Jira 티켓에 "@archon" 멘션 → Archon이 코멘트에 실시간 답변(이슈 분석 & 개선 제안 반환) 성공
- 인증/환경변수/Secret 처리/mention 인식, Webhook 엔드포인트 등의 세부 장애도 즉시 수정
- 효율적인 QnA/비용관리, 문서화, 빠른 플래닝과 리팩터링 지원 및 코드 리뷰 구조까지 완성
- 향후 버전에서 커뮤니티 어댑터로 배포 예정, 적용 예시(다음 릴리즈, 대형 프로젝트 확대 등) 공유
