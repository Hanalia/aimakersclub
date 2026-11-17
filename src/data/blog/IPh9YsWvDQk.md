---
author: AI Makers Club
pubDatetime: 2026-11-17T23:45:25.999Z
title: "New Ways of Working with Codex - Dominik Kundel & Charlie Guo, OpenAI"
slug: IPh9YsWvDQk
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "OpenAI 개발자 경험팀의 도미닉 쿤델(Dominik Kundel)과 찰리 궈(Charlie Guo)가 2023년 7~11월 사이 Codex에 추가된 기능과 업무 혁신 사례를 구"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/IPh9YsWvDQk/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [New Ways of Working with Codex — Dominik Kundel & Charlie Guo, OpenAI](https://www.youtube.com/watch?v=IPh9YsWvDQk)  
**채널명:** AI Engineer

## *Codex와 함께하는 새로운 업무 방식* 핵심 요약

- OpenAI 개발자 경험팀의 도미닉 쿤델(Dominik Kundel)과 찰리 궈(Charlie Guo)가 2023년 7~11월 사이 Codex에 추가된 기능과 업무 혁신 사례를 구체적으로 소개함
- Codex는 더 이상 단순한 AI 코딩 에이전트가 아니라, ChatGPT 통합 이후 수천만 명이 장시간 에이전트, 다양한 도구 연계 등으로 폭넓게 활용 중임
- Codex의 맥락(컨텍스트) 인식, vague prompting(불명확 프롬프트) 대응 능력이 크게 진화했으며, 리포지토리·슬랙·구글 드라이브 등 다양한 외부 리소스 통합을 강조
- 플러그인 마켓플레이스, 플러그인 확장 기능 출시로 개발자/기업 맞춤 업무 환경 조성이 용이해지고, Figma 등 외부 툴과 자연스럽게 연동 가능함
- 맥OS의 app shots, computer use, computer history 등 컨텍스트 자동 수집 기능 확대 및 프라이버시 설정 강화로 실제 작업 흐름과 완전히 밀착됨
- 장기 실행(Task)과 클라우드 환경(Codex Cloud V2)에서의 에이전트 운영이 한층 직관적이고, 다중 리포지토리·비공개 네트워크 지원(Tailscale)도 제공
- ChatGPT Sites를 통한 실서비스 구축, 인증(Sign in with ChatGPT), 플러그인 결합, 데이터베이스(D1) 등 풀스택 AI 기반 웹앱 제작이 간편해짐
- Sub-agent, Dots, 음성 모드 등 다양한 ‘위임과 협업’ 기능으로 다중 에이전트 조율 및 멀티스레드 작업이 실전에서 확장
- Ultra Fast 등 작업 속도 최적화, 세밀한 피드백·반복·테스트(Annotations) 기능, CLI 확장, 사용성 팁 등 현업 활용에 적용 가능한 노하우 다수 제시
- 실제 업무·제품 개발 흐름·내부 자동화 등에 적용된 사례와 함께, 주기적 기능/모델 변화에 유연하게 대응할 것을 당부함

---

## 세부 요약 - 주제별 정리

### Codex는 ChatGPT와 통합되어 수천만 명이 다양한 형태로 활용하게 되었음

- 2023년 Codex는 ChatGPT 작업(Work) 기능과 결합되어 이용자가 대폭 증가
- @ChatGPT, Codex CLI, Slack, Dots, Agents API 등 여러 제품·서비스에 Codex가 내장됨
- 예전에는 클라우드 중심 환경이었으나, 최근에는 로컬-클라우드-리모트 환경 모두 지원
- IIE World’s Fair(2023년 7월) 당시부터 2023년 11월까지 수십 가지 주요 기능이 추가됨
- “Codex is not dead”라는 소문에 대한 해명과 함께 지속적 진화·확장 중임을 강조

### Codex의 컨텍스트 인식 능력은 광범위하고 깊이 있게 진화하였음

- 과거 ‘context engineering’으로 다양한 리소스를 조합하던 패러다임에서 ‘vague prompting’(불분명 지시에도 이해)으로 진화
- Codex는 거대 Monorepo(단일 대형 저장소)의 파일, 표준, 구조를 능동적으로 파악/탐색 가능
- 컨텍스트는 코드 저장소뿐 아니라, 회사 표준 문서(md, linters 등), 슬랙·구글드라이브·스프레드시트 등 외부에도 분산
- 거대 리포지토리에서 명확히 ‘바늘 찾듯’ 필요한 정보만 pinpoint하며, 신규 작업자/에이전트도 오류 없이 작업 가능
- 회사 표준이나 규칙은 리포지토리에 넣고, 그 외 컨텍스트는 플러그인 활용 권장

### 플러그인과 확장 기능으로 업무 흐름/컨텍스트 통합이 획기적으로 확대됨

- MCP 서버, ‘Skills’, 외부 리소스를 묶는 플러그인 구조 도입
- 플러그인 마켓플레이스에서 다양한 플러그인을 제공 및 직접 개발/배포 가능
- 한 번 연결만 하면 ChatGPT 웹, Slack, dev box 등 모든 Codex ‘표면’에서 동일 플러그인 컨텍스트 공유
- 내부용 플러그인 구축·사내 공유, 혹은 오픈소스(깃허브) 공개 방식 병행
- 실사례: 슬랙, 구글 드라이브, Figma 등을 연계해, “이 스프레드시트를 참조해서” 식의 불명확 지시도 자연스럽게 처리
- 플러그인 확장(Plugin extensions)으로 ChatGPT 앱·웹/모바일의 사이드바·패널·파일뷰어·컴포저 등 UI 내 자유로운 기능삽입 가능
- 디자인 시스템 브라우저(내장 플러그인) 예시: “디자인 시스템 탐색→작업에 바로 컨텍스트 삽입” 업무 흐름 시연

### 앱샷, 컴퓨터 유즈, 컴퓨터 히스토리 등으로 사용자의 실제 작업문맥을 자동 인식·연동함

- App shots(Mac, Win): 전체 UI 뿐만 아니라 accessibility tree 정보까지 추출, 화면 이외의 숨은 변수·상태 전송 가능(특히 웹, 슬랙 등)
- Computer use(Mac): 앱과 상호작용한 내역을 Codex가 직접 추출/탐색 가능. 테스트 자동화, 정보 수집에 특화
- Chrome extension(Win, Mac, Linux): 브라우저의 특정 탭만 컨텍스트 연결할 수 있어 멀티탭 작업에 적합
- Computer history(Mac): 앱 사용패턴/문서 히스토리 자체를 이벤트 스트림 중심으로 기록, 토큰 절약 및 속도 향상
- 프라이버시 제어 강화: 언제든 기록 일시정지/과거 히스토리 삭제/특정 앱·웹사이트 제외 가능(프라이빗 모드 자동 지원)
- Codex는 이러한 습관·컨텍스트까지 ‘메모리’로 삼아 업무 스타일을 스스로 학습함

### 업무 컨텍스트가 다원적으로 분산되는 환경에서 ‘Codex Space’ 기반 협업 도구로 생산성을 극대화함

- feature 계획/런북 등 문서가 구글Docs, 노션, PRD, GitHub 등 곳곳에 산재하고 반복 이동·복붙하는 번거로움을 지적
- ChatGPT Space: Codex이 직접 페이지를 생성→리치 텍스트 편집, @Tag로 ChatGPT/구성원·Dot을 소환, 실시간 협업
- 페이지 내 시각화(HTML 객체 등)·지식 갱신·문서 자동 업데이트(Agents.md 개념) 적용 가능, 아주 최신 변화도 에이전트가 반영
- 예시: Runbook 업데이트/명령어 변경을 에이전트에 맡기고, 정기적으로 최신화할 수 있도록 ‘어시스턴트 지시문’ 설정

### Ultra Fast 및 애노테이션 기능으로 빠른 반복 작업과 세밀한 피드백 제공이 가능함

- Ultra Fast(2023 DevDay 공개): GPT-6 Soul/Astra 기준, 8배 빠른 속도(비용은 6배), 단 빌드·테스트·컴파일 시간이 길면 체감효과 제한
- 주로 디자인·UI 반복 작업, 소규모 명령 즉시 적용 등 ‘몰입’이 필요한 창작적 반복과정에 효과
- UltraFast 사용 시 Dev server, hot reload 적극 활용 추천. Reasoning(추론) 레벨도 적절히 하향 조정해 반복에 최적화
- Annotations(애노테이션): Codex 내장 브라우저에서 UI 영역에 직접 마킹, 세밀한 피드백 가능(설정 버튼/실시간 조정)
- 예시: LP 페이지에 직접 작은 변경(헤더 삭제, 풀스크린, 백그라운드 애니메이션, 스크래치 가능 LP 등)을 초 단위로 연속 적용
- Annotation API로 커스텀 컴포넌트만 선택/마킹 가능, 디자인 시스템이나 게임 UI 등 복잡 환경에 적합

### Codex Cloud V2와 원격 연결로 장기 실행 작업 및 유연한 환경 선택이 가능함

- 장기 실행 지원이 수시간→수일 단위로 확장, 기존 개인 서버/Mac mini/클라우드 VPS 활용의 불편함 지적
- Codex Cloud는 회사 내 공유 환경, 개인 환경 모두 지원. 여러 git 저장소 병렬 선택 및 환경 셋업 자동화(의존성, API키, dev 서버 명령 등)
- 새롭게 추가된 다중 저장소 선택, OIDC·Tailscale로 비공개 네트워크, 보안 리소스 접근 자동 연동(패블릭 공개 위험 최소)
- Codex Cloud 환경은 스냅샷 및 주기적 업데이트로 활성화·속도 강화, 개인/공용 secret 관리 및 설정 가능
- Codex CLI에서 원격 컨트롤 스타트로 별도 데스크탑 앱 설치 없이 서버 운영·연결 가능

### ChatGPT Sites를 통한 ‘실전용’ 웹서비스 구축·배포·공유가 AI 에이전트에 의해 이루어짐

- ‘사이트’는 정적 컨텐츠 호스팅을 넘어, D1(데이터베이스), R2(파일·오브젝트 저장), Sign in with ChatGPT(인증/회원관리), 플러그인·시크릿까지 제공
- 실사례: Cut Room(내부 비디오 편집 자동화) - 영상 업로드→코덱스 에이전트가 Da Vinci Resolve 등으로 편집, 버전 업로드/리뷰 자동화(GPT-6 Astra가 실제 런칭 영상 편집 참여)
- 인증 기능은 별도 개발 없이 즉시 추가 및 권한경계 세분화 가능. 플러그인 연동(구글 캘린더·Linear 등 실서비스와 결합)
- Remixing: 타인이 자신의 사이트를 복제, 커스텀화 가능
- 다양한 조직별 사례(출시 리캡, 엔지니어링 문서, 소셜 미디어 콘텐츠 대시보드 등) 데모 및 AI 기반 인터랙티브 서비스 실험
- Astra와의 Wikipedia Wiki Racing 등 모델 사용성 실험용 사이트도 쉽고 빠르게 제작

### 코드 리뷰, 협업, 생산성 자동화까지 하나의 흐름으로 구현됨

- 신규 Code Review 탭: GitHub Pull Requests 자동 인식, 내장 뷰어 및 ‘Codex에게 리뷰 요청’ 버튼으로 즉시 리뷰 결과 피드백(thread별 저장/커스텀 프롬프트)
- 제품팀·엔지니어링 팀이 실제로 문서/릴리스 노트/분석 리포트를 Codex Sites 기반 맞춤 뷰로 가공하여 내부·외부 공유
- 평범한 Google Docs, PPT보다 선호도 높은 방식으로 변모

### ‘위임(delegation)’ 개념 확장: Sub-agent, Dots, 음성모드 등 멀티 에이전트 기반 협업을 실전 전개함

- Voice Mode: 단순 텍스트 입력 대체를 넘어, Codex 앱 내 전체 작업/스레드 제어, 컴퓨터 데이터 호출, 새 스레드 생성 등 ‘컨트롤 플레인’ 역할 담당
- 실제 데모: Pull request 리뷰 체크, 슬랙 메시지 확인, 발표자료 디자 인크리틱 요청 등을 음성 대화로 즉시 수행
- Dots: 안정성(Alarm, 이벤트 감지), 위임처(슬랙 메시지→To-do화), ‘어디서나 사용(앱, 슬랙, Teams, 휴대폰 호출/문자 등)’ 등 보조 에이전트로 활용
- Agents API(베타): 자신의 앱에 Codex harness, Dots, 샌드박스, 플러그인 등 주요 기능 임베딩하여 대규모 AI 세션 실시간 생성·운영 가능

### 실전 팁: 모델·추론 강도/속도 조절, 하위 에이전트 병행 활용 및 커스텀 워크플로우를 적극 활용할 것을 권장함

- 초고추론(Highest Reasoning)으로만 돌리지 말고, 새 모델 출시시 ‘High’ 레벨 등 합리적 타협 최적화 가능
- Sol(Medium) 주력 + Astra/Luna(High) Sub agent 조합 등 단계별 모델/에이전트 위임 자동화 가능(스킬로 등록)
- Web/Mobile 앱 동시개발 등에서 Peer Sub agents 띄워 상호 동기화 가능. 커뮤니케이션 플로우를 플로우 차트로 제시
- Codex에서 ‘새로운 챗’ 동시 스핀업(스레드 of 스레드), Dot이 다양한 스레드 생성 가능
- CLI(좌측 화살표)로 에이전트 세션 스위치, CLI용 음성 모드 지원
- 앱 내 모든 액션에 단축키/글로벌 딕테이션/음성 핫키 연결 가능(전환 경로 없이 즉시 제어)
- 사이버 보안용 Daybreak 블루(개인도 지원, YubiKey 필요) 프로그램 안내
- “사용법에 집착 말 것”–새 기능·모델 등장시 습관/플로우 주기적으로 점검, 불필요한 관성은 과감하게 버릴 것
- Codex Micro(특수 키보드) 등 경품 증정 안내와 추가 리소스 공유

---
