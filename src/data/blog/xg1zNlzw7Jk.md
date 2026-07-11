---
author: AI Makers Club
pubDatetime: 2026-07-11T23:44:59.004Z
title: "Claws Out: Securing and Building with OpenClaw - Nick Taylor, Pomerium"
slug: xg1zNlzw7Jk
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Pomerium의 개발 옹호자이자 커뮤니티 빌더인 Nick Taylor가 OpenClaw 프로젝트에 기여한 'trusted proxy 인증 모드' 기능 도입 배경과 구현"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/xg1zNlzw7Jk/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Claws Out: Securing and Building with OpenClaw - Nick Taylor, Pomerium](https://www.youtube.com/watch?v=xg1zNlzw7Jk)  
**채널명:** AI Engineer

## *OpenClaw를 이용한 보안 강화 및 실시간 개발 데모* 핵심 요약

- 본 영상은 Pomerium의 개발 옹호자이자 커뮤니티 빌더인 Nick Taylor가 OpenClaw 프로젝트에 기여한 'trusted proxy 인증 모드' 기능 도입 배경과 구현, 실제 사용 사례를 중심으로 발표함
- OpenClaw의 기존 보안 방식(token 인증 등)은 개발자에게 사용상의 불편(토큰 입력, 디바이스 페어링 등)을 초래했고, 이를 개선하고자 Google의 IAP(Identity-Aware Proxy)와 유사한 프록시 기반 인증 방식을 제안·기여함
- 신규 'trusted proxy 인증 모드'는 프록시(예: Pomerium, Caddy 등)에서 사용자 인증 및 정책 적용 후, OpenClaw 게이트웨이에 신뢰된 프록시 IP·헤더(jot/JWT 등)만 전달하는 구조로 보안성과 사용성을 동시 확보
- 해당 기능 도입 시, 웹소켓 커넥션 시 토큰 입력 불필요 및 디바이스 페어링 과정 생략 가능 → 보안 강화와 UX 개선의 이중 효과
- 구현 과정에서 실제 문제(버그)가 OSS(오픈 소스) 커뮤니티 내 공유 및 패치되었으며, 개발·기여 문화의 장점을 강조
- OpenClaw를 Discord, WhatsApp 등 다양한 채널에서 실제로 활용 중이며, 보안상 텔레그램(암호화 미비)은 사용하지 않음
- 기여 과정에서도 OpenClaw를 완전히 활용하여 PR을 직접 생성·제출, 그 과정에서 GitHub CLI의 실수(전체 권한 등)와 재미있는 경험 공유
- 'ClawSpace' 등 OpenClaw 기반 개인 프로젝트 진행: 별도 SSH 없이 Discord에서 바로 워크스페이스 파일 확인·편집 기능 구현
- 실시간 데모에서는 trusted proxy 모드 하에 공개 MCP 서버 구축 및 ChatGPT와 연동—실제 코드 수정, UI 변경, 기능 추가를 실시간으로 시연
- 마지막으로 OpenClaw에서 보안에 유의해 다양한 개인 또는 커뮤니티 중심 개발을 즐길 것을 권장함

---

## 세부 요약 - 주제별 정리

### Nick Taylor는 Pomerium에서 OpenClaw 프로젝트에 기여하며 보안과 UX 문제를 함께 해결하고자 했음

- 발표자는 Pomerium의 개발 옹호자(Dev Advocate)로, Pomerium의 명칭 발음 오류를 재미있게 언급하며 팀의 마케팅 전략(포메라니안 스티커 제작)도 소개
- 캐나다 몬트리올 출신으로, GitHub Star, Microsoft MVP, AWS 커뮤니티 빌더 등의 다양한 개발자 커뮤니티 활동 이력 공유
- 'Clawzette'란 약간 농담을 곁들인 제목 아래, 2023년 2월 이후 OpenClaw 프로젝트에 신규 보안 방식을 직접 기여했다고 밝힘

### 기존 OpenClaw 보안 방식(token auth 등)은 불편하고, 프록시 기반 방식이 사용자 편의성을 크게 높임

- 이전까지 OpenClaw 사용자는 웹소켓 연결 시마다 인증 토큰을 입력해야 했으며(쿼리스트링에 노출), 매번 디바이스 페어링도 요구됨
- 이는 “로컬 모드에만 적합한 UX”에 불과하고, 실제 개발·운영 환경에서는 불편과 보안상의 문제점이 지속적으로 제기됨
- Nick은 Google Cloud IAP(Identity-Aware Proxy)를 참고, 프록시가 신원·정책·리버스 프록시 3요소를 관리해서 접근 제어하는 구조를 제안

### 'trusted proxy 인증 모드'라는 새로운 인증 방식이 추가되어 토큰·페어링 과정이 생략됨

- 새로운 설정에서는 gateway 섹션에서 토큰이 더 이상 필요치 않으며, 모드 명칭도 'trusted proxy'로 변경됨
- 주요 설정 요소: trusted_proxies(IP 주소 목록), trusted_proxy(user header에는 JWT 할당, 필요시 ‘allowed users’, 기타 헤더 등)
- 정체된 토큰 방식 대신 프록시 레이어에서 실제 신원 인증과 정책 제한을 시행함—이는 UX와 보안을 동시에 강화한다는 평가
- 해당 기능은 onboarding 혹은 TUI(텍스트 인터페이스)로 흐름에 맞게 설정 가능

### 신기능 기여 과정에서 커뮤니티 OSS 기여 문화가 중요한 역할을 했음

- 기능 기여 첫 PR 이후 실제 배포 시점에 다른 사용자가 버그(이미 paired된 환경에서는 드러나지 않는 이슈)를 발견
- Anthony가 버그를 보고, Sid가 이를 수정함—Nick 본인은 로컬에서 이미 pair된 상태여서 발견 못 했던 버그
- OSS 커뮤니티 내 협력과 기여 문화(버그 제보, 빠른 수정)가 기능 완성도를 높임
- 기능 관련 이슈가 1560번일 당시, PR 번호가 1700번 대였으나 짧은 휴가 기간(2주) 동안 이슈/PR 수가 1만6000번까지 폭증했고 잦은 리베이스 필요성 등 프로젝트 인기와 변화 속도의 상징적 사례 제시

### OpenClaw는 Discord를 메인 채널로 사용하며, 보안상 Telegram 등은 사용을 지양함

- Nick 본인은 OpenClaw를 Discord에서 사용 중이며, WhatsApp도 일부 사용
- Telegram은 채널 암호화 미비로, 보안회사(근무 중) CEO가 사용하지 말라고 조언함—개인 자료 노출 위험성이 있기 때문임
- OpenClaw를 활용한 실제 현업 사례, 각 채널의 보안 특성을 구체적으로 안내

### OpenClaw 기반 실습·개인 프로젝트를 통해 개발자 친화적 실시간 개발 환경을 구현함

- OpenClaw를 활용한 첫 기여의 경우, GitHub CLI를 이용해 전체 권한을 열어두는 실수가 있었으나, 곧 draft 상태로 전환해 수습
- 이후 'ClawSpace'라는 개인 프로젝트를 시작—별도의 SSH 없이 Discord 내에서 워크스페이스 내 파일을 읽고, 확인·편집할 수 있는 기능 구현
- ‘개인용 소프트웨어 시대’에 맞춰 개발자 스스로가 바로 쓸 수 있는 툴을 직접 만들 수 있다는 점에 흥미를 느낌

### MCP 서버-OpenClaw-ChatGPT 연동 데모로 실시간 개발과 배포 과정을 상세히 시연함

- MCP 서버 및 UI 구성 예시로 AI Engineer 웹사이트의 LMs 영역, MCP 서버 등을 언급하며, 템플릿 활용해 실무 데모 진행
- OAuth 기반 어플리케이션 등록 및 MCP 서버(공개 URL) 구축까지 일련의 과정을 순차적으로 실시간 화면 공유
- ChatGPT 내에서 MCP 앱 등록 후, echo tool 및 search speakers tool 등의 UI/기능 실시간 변화 과정을 구체적으로 보여줌

### trusted proxy 모드와 Pomerium 활용으로 보안·공개 서버 연동 및 실시간 코드/UX 변경이 가능해짐

- 데모에서 Pomerium을 trusted proxy로 사용, MCP 서버에 대한 공개 URL을 안전하게 개방하고, 외부에서 바로 접근 가능하게 만듦
- ChatGPT 내에서 직접 OpenClaw workspace 파일을 수정·명령하여 widget UI, 기능 등을 실시간으로 업데이트
- Vite 및 React(HMR 등) 기반의 웹 기술 하에서, 채팅만으로 개발→즉시 코드에 반영되는 경험을 강조

### search speakers, more 버튼 등 기능 개선 과정이 실시간으로 진행됨

- search speakers 명령으로 AIE 컨퍼런스 참가자 정보( speaker.json 활용) 연동·필터링 UI를 구현
- 추가 기능(‘더보기’ 버튼) 구현 시, MCP 앱 내 send message 함수가 LLM 호출하여 요약 답변 생성
- 모든 과정은 ChatGPT-OpenClaw 상호 연동을 통해 변화가 즉각 UI에 반영됨

### 프록시 기반 공개·보안 개발 방식으로 더 안전하게, 재미있게 개발할 수 있음을 여러 번 강조함

- NGINX(deprecated in K8s ingress) 대신 Pomerium, Caddy(oauth 연동) 등 신규 프록시 활용 방식을 권장
- 로컬 서버도 public하게 '노출하되 안전하게' 구축할 수 있는 현대적인 개발 보안 패러다임을 설명함
- 다양한 개발 툴(Claude, Codex 등)과 병행하여 OpenClaw-프록시 중심 개발 워크플로우 사용 중

### 보안 설정에 각별히 주의하며, 신기능 활용과 함께 개인 맞춤형 툴 제작을 독려함

- 잘못된 공개/보안 설정으로 데이터 유출, 메일 삭제 등 사례가 있으므로 반드시 보안 수준을 점검할 것을 강조
- trusted proxy auth 모드는 최소한 2인 이상의 실사용자가 바로 가치와 쓸모를 인정했음
- 각자가 다양한 개발 실험과 툴 제작을 안전하게 즐길 것을 권장하며 발표를 마침

---
