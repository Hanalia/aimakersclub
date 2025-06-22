---
author: AI Makers Club
pubDatetime: 2025-06-22T08:18:37.140Z
title: "Building Agents with Amazon Nova Act and MCP - Du'An Lightfoot, Amazon (Full Workshop)"
slug: wFTVEDYVJT0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**본 영상은 AWS의 Du'An Lightfoot와 Banjo Bami가 Nova Act, MCP(Modern Context Protocol), strands agent 등 Am"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/wFTVEDYVJT0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Building Agents with Amazon Nova Act and MCP - Du'An Lightfoot, Amazon (Full Workshop)](https://www.youtube.com/watch?v=wFTVEDYVJT0)  
**채널명:** AI Engineer

## *Amazon Nova Act와 MCP로 에이전트 구축하기* 핵심 요약

- **본 영상은 AWS의 Du'An Lightfoot와 Banjo Bami가 Nova Act, MCP(Modern Context Protocol), strands agent 등 Amazon 생태계의 최신 에이전트 기술을 활용한 실습 워크숍을 진행하는 내용임**
- **AI 에이전트의 기본 구성 원리를 "계획(Plan)", "행동(Act)", "추론(Reason)"의 삼각 구조로 설명하고, 이를 실현하는 AWS 에이전트 아키텍처의 세부 컴포넌트(LMM, Knowledge Base, Guardrails, Tool 등)를 상세히 해설**
- **에이전트 구축 방식은 Amazon Q(생산성 에이전트, 콘솔/IDE/CLI 등), Amazon Bedrock(완전관리형), strands agent(오픈소스 DIY)의 3가지 관점으로 제시됨**
- **워크샵은 Nova Act 브라우저 오토메이션 모델 활용 → MCP 서버 통합 → strands agent 프레임워크 적용의 3단계로 구성, 각 모듈별 실제 코드와 실습 예제(상품 검색, 병렬 웹 스크래핑 등) 시연**
- **Nova Act 모델은 자연어 프롬프트 기반의 브라우저 자동 조작이 가능하며, 이전 웹 자동화 도구(Selenium 등)와 달리 HTML 태그나 좌표가 아닌 '사용자 수준 맥락'으로 동작하는 것이 강점임**
- **MCP(Modern Context Protocol)를 통해 다양한 클라이언트와 서버(예: Obsidian, 북마크 매니저 등) 간의 에이전트 작업 분산/통합이 가능함을 실제 use-case로 시연**
- **실습 시에는 AWS 계정, Nova Act API Key, VS Code 서버 등이 별도 설치 없이 제공되어, 브라우저에서 즉시 실습할 수 있는 환경 안내**
- **실제 Nova Act 코드를 통해 아마존 상품 검색, 여러 모니터 정보 병렬 수집 등의 자동화 시연, 사용성 및 한계(캡차 차단/인간개입/Human-in-the-loop/인증 등) 상세 논의**
- **strands agent (pip으로 설치 가능한 경량 오픈 소스 프레임워크)는 MCP 서버 연계, 멀티에이전트 워크플로우, 도구 자동 연결 등 최신 AI-에이전트 개발 트렌드를 실제 코드와 함께 보여줌**
- **에이전트의 도구 활용, 난해한 웹사이트 처리, 워크플로우 정의 방법, 멀티에이전트 협업, 최신 LLM의 툴 사용 능력 등 실무적 질문·토론 다수 포함**
- **Amazon Nova Act, MCP, strands agent는 모두 오픈소스/프리뷰로 자유롭게 활용 가능, 공식 깃허브 및 다양한 MCP 서버 레포지토리, AWS 크레딧 제공 설문 등 소개**

---

## 세부 요약 - 주제별 정리

### AWS가 정의하는 에이전트는 '계획-행동-추론'의 셋을 반복적으로 실행함을 강조

- AI 에이전트는 단순 명령 수행이 아니라 "목표에 따라 계획을 수립(Plan), 다양한 도구로 행동을 실행(Act), 수행 결과에 기반해 스스로 계획을 재설정하며 목표 달성을 반복(Reasong)" 하는 것이 본질임
- 실제 에이전트 아키텍처는 사용자 입력 → 에이전틱 시스템 → (필요 시) 인간검증 → 응답 생성 구조
- LLM, Knowledge Base, Guardrails, Memory 등 핵심 컴포넌트 역할을 설명함
    - LLM은 언어 기반 문제해결 담당
    - Knowledge Base로 외부 정보 직접 제공 가능, 오류/할루시네이션도 검증(ground) 가능
    - Guardrails로 모델 행동을 통제(거짓 정보 차단, 원칙 준수 등)
    - 추가 도구/메모리/다른 LLM 호출 등 복잡한 에이전트 흐름 설계 가능
- "Continuous evaluation framework"의 중요성을 강조: LLM/프롬프트의 품질·일관성·최적화, 시스템 점수화/평가/개선 등 반복적 개선 필요

### AI 에이전트가 기존 If-Then-Else 자동화와 달리 복잡한 상황, 도구, 추론이 필수일 때 효율적임을 실제 예로 설명

- 한 단계로 끝나는 간단한 로직(If this then that)은 굳이 에이전트화 필요 없음
- 다양한 도구 활용/복합적인 워크플로우가 필요한 복잡한 업무에 에이전트형 AI의 효용 큼
- 예) 복수 도구간 연동, 스스로 도구 선택, 결과기반 재계획, 다수 파트 실행 등

### Amazon Q, Bedrock 에이전트, strands agent의 활용 방식과 각 장단점을 실제 사례로 비교 제시

- Amazon Q : 콘솔/IDE/CLI 등에서 활용 가능한 AI 생산성 도구군, 코딩/문서요약/코드분석/실행 로그 자동화 등 실제 업무 사례 제시
    - Q CLI로 비디오 편집, 코드베이스 분석 등 자동화 실제 사용
- Bedrock Agents : AWS 내에서 완전관리형 에이전트 구축 플랫폼
    - 콘솔 기반 구축, 지식베이스/배드락 모델/가드레일 제공
- strands agent : 오픈소스, 경량, DIY(Do It Yourself) 프레임워크, 다양한 외부 모델 연동, 단 50줄 이내 코드로 멀티에이전트 구축 가능
    - 프롬프트/LLM/도구(툴)의 3 요소 구조, @tool 데코레이터 활용 신규 툴 손쉬운 추가 가능
    - strands 공식 깃허브, 다양한 예시, 코드 일체 공개

### Nova Act는 자연어 명령으로 실제 브라우저 상 작업을 자동화하며, 수작업 자동화 대비 월등히 편리함을 강조

- Nova Act는 아마존이 제공하는 연구용 브라우저 자동화 LLM
    - 자연어로 "아마존에서 커피메이커 검색하고 첫 번째 상품명 반환" 등 지시 가능
    - 기존 Selenium, Playwright 등은 태그나 DOM 직접 조작 필요 → Nova Act는 한 줄 지시만으로 실제 사람처럼 행동
- 실제 실습 코드: Python SDK로 아마존 닷컴 접속 → 커피메이커 검색 → 첫 결과 클릭 및 상품명 추출 실행
- 프레임버퍼(X11)가상화로 리눅스 환경에서도 GUI 브라우저를 자동 조작
- Nova Act의 동작 과정(페이지 이동, 검색, 클릭, 결과 추출 등)을 스크린샷·비디오·로그로 확인 가능

### Nova Act의 웹페이지 해석 능력 및 한계(캡차, 인증, 인간개입 등)와 실제 Q&A 사례 상세 공개

- Nova Act는 웹페이지의 H1, DIV 등 구조가 아닌 "사용자 맥락"으로 레이아웃 및 입력 필드를 식별함
- 픽셀 단위로 이해하기에 광고/다운로드 배너/첫 번째 상품 등 실사용 시 요구사항도 자연스럽게 반영
- 실제 사용자 질문에서 "캡차/인증/2FA/비정상 환경"에 직면시 동작 한계(캡차 통과 불가, 완전 자동 불가 등) 솔직히 공개
- 브라우저 세션 유지, 사람개입(Human-in-the-loop) 구현 가능성 등까지 면밀히 논의
- 다중 작업(예: 모니터 정보 여러개 병렬 수집), 병렬 브라우저 세션 제어 코드 등 실습 예시 제공

### MCP(Modern Context Protocol)를 통한 에이전트-클라이언트 아키텍처 분산 활용법 및 실제 구성 예시 설명

- MCP는 “에이전트 <-> 클라이언트”간 다양한 작업 모듈의 통합/분산/조정 프로토콜
    - 예) 개인 Obsidian 문서 서버, 북마크 매니저, Nova Act MCP 서버 등 다양한 목적별 MCP 서버 구축 및 CLI/IDE 통합
- Nova Act MCP 서버는 '브라우저 오토메이션'을 도구화(세션, 액션, 스크린샷 등), MCP 클라이언트에서 자연어 질의만 하면 자동 코드 생성·실행
- 다양한 클라이언트(Q CLI, Cursor 등)에서 동일 MCP 서버 활용 가능
- 실제 예시: Google 검색 → 좌절(캡차), 아마존 커피메이커 자동검색 성공 등 구체적 실패/성공 사례 공유

### strands agent와 MCP 서버 연계로 멀티 에이전트, 복합 자동화, 다양한 도구 연결을 최소 코드로 실현함

- strands는 pip 한 번에 설치, “Model First” 관점의 초경량 API, @tool만 붙이면 기존 Python 함수도 곧바로 툴 등록 가능
- AWS Labs의 공식 MCP 서버 다수(문서검색, 다이어그램, 비용분석 등)을 활용하여, 실제 솔루션 아키텍트 시나리오 “Lambda 문서 검색-아키텍처 다이어그램 생성”을 손쉽게 자동화
- 한 에이전트에 여러 MCP 서버/도구, 프롬프트, 모델(Bedrock, lightllm, oLama 등 자유) 조합 가능
- 프롬프트만으로 “문서 찾아서-다이어그램도 그려줘” 등 복합 요청 자동 해결
- 공식 워크플로우 모드(정해진 순서대로 실행) 및 자유 주행 모드(모델에게 순서 전부 위임) 모두 지원
- 멀티에이전트 협업(오케스트레이터 + 각 파트별 에이전트), 병렬 처리, 다양한 시스템 프롬프트, 워크플로우 커스터마이징이 코드 예제로 제공됨

### 에이전트 도구(툴) 확장 및 최신 LLM 모델이 많은 도구를 스스로 효과적으로 조합해 쓰는 현상 소개

- @tool 데코레이터로 손쉬운 도구 등록 및 Python 함수 직접 활용
- 최신 LLM(예: Claude 3.5~4)은 다수의 도구 입력에도 혼란 적고, 병렬 실행/interleaving, 자가 최적화 등 발전된 사용성 시연
- 워크플로우(정해진 시퀀스), 진단(Reasoning), 멀티툴 파이프라이닝까지 agent framework 없이도 모델 본연의 추론력이 뛰어남

### Nova Act/Browsing 관련 실전 질문(실행 환경, 개인정보, 브라우저 플러그인, 인증 등) 및 보안·윤리 논의

- Nova Act는 기본적으로 클라우드(AWS)에서 브라우저 조작, Python API 연동, API KEY 발급 필요
- 임의의 Custom 브라우저, 프로필, 세션(쿠키 등) 활용 가능. 자체 인증/플러그인(LastPass, Google Authenticator 등) 확장도 가능(직접 구현 필요)
- Nova Act 실행 시 로컬 스크린샷/로그는 사용자 시스템에 저장, 민감정보는 전송하지 않음(공식 답변)
- 웹 데이터 업로드 문제, 보안·프라이버시 민감도, Responsible AI 정책 및 악성 활용방지(캡차 우회 불가/기록 관리 등) 명확히 고지

### Nova Act, MCP, strands agent의 복잡한 실제 워크플로우 실행 예시 및 엔드-투-엔드 시연

- Nova Act: 자연어 한 줄로 브라우저 내 상품 검색, Google Maps 커피숍 찾기, Draw.io 다이어그램 그리기 등의 실전 자동화 시연
- MCP 클라이언트: Q, Cursor, Cloud desktop 등 다양한 도구에서 동일 MCP 서버 활용, 자연어로 복잡한 플로우 자동 기획 및 실행 가능
- Strands: 아키텍트 에이전트, 비용분석, 다이어그램, 프레젠테이션 자동생성 멀티에이전트(에이전트 오케스트레이션), 정말로 "현실 AWS 업무"에 가까운 완전 실전 예제 단계별 실행
- 복합 워크플로우 예시: 업계 마이그레이션 시나리오(온프레미스 → AWS로 이전, 비용 분석, 다이어그램, 임원용 파워포인트 자동 생성) 여러 에이전트 협업/병렬/시퀀셜 실행, 최신 정보 검색까지 자동화

### 오픈소스화, 공식 깃허브/문서/워크샵, AWS 크레딧 제공 설문 등 실질적 실습 리소스 적극 안내

- Nova Act 공식 사이트(nova.amazon.com), strands 공식 문서(strandagents.com), AWS Labs MCP 공식 깃허브 등 소스코드 및 문서 링크 안내
- 워크샵 코드, 실습 자료, 오픈 환경 모두 무료 제공(설치 불필요)
- 설문 참여 시 AWS 크레딧 지급 등 추가 인센티브 안내

---

**(위 구조에 따라, 영상의 주요 주제·씨퀀스·예시·질문·실습·코드 시연 내용을 중복 없이, 충분히 상세·구체적으로 담았습니다.)**
