---
author: AI Makers Club
pubDatetime: 2025-08-01T23:47:03.169Z
title: "Why is Everyone Missing This with AI Agents?! (Memory + Tools that Scale)"
slug: F1I9JN0z0w0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "대부분의 AI 에이전트 및 MCP 서버는 단일 사용자(즉, 개발자 본인)를 위해 설계되어 여러 사용자 확장에 취약함을 지적 각 사용자별 맞춤 메모리와 도구 접근이 필수임에도, 기존"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/F1I9JN0z0w0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Why is Everyone Missing This with AI Agents?! (Memory + Tools that Scale)](https://www.youtube.com/watch?v=F1I9JN0z0w0)  
**채널명:** Cole Medin

## *다수가 간과하는 AI 에이전트의 확장 문제: 기억과 도구를 수십만 사용자 규모로 확장하는 방법* 핵심 요약

- 대부분의 AI 에이전트 및 MCP 서버는 단일 사용자(즉, 개발자 본인)를 위해 설계되어 여러 사용자 확장에 취약함을 지적
- 각 사용자별 맞춤 메모리와 도구 접근이 필수임에도, 기존 에이전트는 Gmail, Slack 등 애플리케이션 자격 증명을 코드에 하드코딩하는 구조가 많아 확장성에 한계
- 'Arcade' 플랫폼과 'Langraph' 프레임워크를 조합해, 수만 사용자 단위의 개인화된 에이전트 구축법을 소개
- Arcade는 OAuth 기반 계정 인증 플로우를 지원, 개별 사용자가 처음으로 특정 툴을 쓸 때만 ‘즉석 인증’을 요청함으로써 불필요한 인증 절차 최소화
- Langraph는 각 사용자별 대화 및 장기 메모리(예: Postgres를 통한 사용자별 영구 기억), 도구 실행, 권한 요청 등의 워크플로우를 시각적으로 설계하고 운영 가능
- Streamlit 프론트엔드와 Supabase 유저 인증을 통해, 각 계정별로 Gmail/Asana 등의 개인화된 데이터 접근 및 장기 기억이 완전히 분리됨을 실제 데모로 시연
- Arcade의 API, SDK와 Langraph 통합 덕분에 Gmail, Asana, Slack, Jira 등 다양한 툴을 코드 몇 줄로 연결 가능하며, 자체 툴 등록도 쉬움
- 각 플로우(기본 구현, 인가 연결, 장기 기억 도입)별로 예제 코드와 CLI/웹 인터페이스 데모, GitHub 소스와 문서 자료 안내
- “기억해 줘” 같은 키워드를 통해 각 사용자별 고유 장기 기억을 저장·불러오게 설계, 서로 다른 사용자 계정 로그인 시 완전히 다른 기억과 도구 권한을 보장
- 최종적으로, Arcade와 Langraph 조합이 사용자별 맞춤 AI 에이전트의 확장성과 실용성을 비약적으로 높인다고 강조

---

## 세부 요약 - 주제별 정리

### 대부분 AI 에이전트의 확장성 한계는 사용자별 인증·도구·기억 구조에서 비롯됨

- 기존 AI 에이전트 및 MCP 서버 대부분은 단일 사용자만을 대상으로 설계
- 대표 사례: Gmail, Slack, RAG 지식베이스 등의 자격증명(크레덴셜)을 코드에 직접 입력 또는 하드코딩
- 두 번째 사용자를 추가하려면 크레덴셜을 수정하거나 에이전트를 복제해야 하는 등, 수동 작업 필요
- 여러 사용자를 위한 맞춤형 도구·기억·인증 처리는 근본적으로 다른 설계가 요구됨
- 이메일 비서 같은 단순한 AI도 실제 서비스를 확장하려면 ‘동적 인증’과 ‘개인화된 기억’ 기능 필요

### Arcade 플랫폼은 툴 인증 문제를 ‘즉시 인증’·자동 권한 저장으로 혁신적으로 해결함

- Arcade는 OAuth 인증 플로우를 플랫폼 차원에서 지원
- 예시: 사용자가 Gmail 도구를 처음 쓸 때만 인증 URL 제공, 이후 인증 정보는 캐시되어 재요청 불필요
- 사용 권한(스코프) 지정, 보안, 각 사용자별 세션 관리 등 기능이 내장됨
- Arcade를 통해 자체 도구를 플랫폼에 추가하거나, Slack, Jira, Reddit, Firecrawl 등 다중 SaaS 툴을 간단히 연결 가능
- “Arcade가 MCP(멀티 컨트롤 패널)에서 원했던 바로 그 기능을 제공한다”는 제작자 평가 인용

### Langraph는 각 사용자별 기억·도구 연동을 시각적 워크플로우로 쉽게 설계할 수 있음

- Langraph는 기억, 도구 실행, 권한 인가 등 논리적 단계를 ‘노드’로 설계하는 에이전트 워크플로우 프레임워크
- 사용자별 대화 기록(history), 장기 기억, 도구 호출, 권한 플로우, 에이전트 응답이 모두 워크플로우로 구분
- Langraph Studio 등 시각적 툴 제공, 노드 기반으로 각 플로우를 연결
- Arcade와의 직접 통합지원: ‘OAuth 인증’ 노드와 ‘임의적 중단(interrupt)’, 승인 후 재개(resume) 기능 제공
- 각 툴 노드 호출/인증이 필요한 경우만 인증 노드로 분기하여 확장성 극대화

### 실제 데모에서는 Streamlit 인터페이스와 Supabase 인증을 통한 사용자별 시나리오 전개

- Streamlit 프론트엔드로 간단한 웹 인터페이스 구현
- Supabase를 통한 사용자 계정 등록/로그인(developer@example.com 등), 각 사용자가 별도의 Gmail/Asana 계정 정보 연동
- “받은 편지함의 이메일 중 Cole의 메시지를 알려줘”와 같은 요청 시, Arcade가 인증 필요시점에만 OAuth 플로우 제공(예: 인증 URL 클릭→구글 권한 승인→에이전트가 지정된 Gmail로 동적 접근)
- 프로젝트 관리 예시에서 Asana 인증도 동일 원리로 적용, 프로젝트별 태스크 조회와 추가 기능 시연

### 각 사용자별 장기 메모리는 Postgres와 Langraph 메모리 모듈로 완벽하게 분리·저장 가능

- 장기 기억(long-term memory)은 Langraph 메모리 문서의 ‘store’ 개념 활용
- Postgres DB에 사용자별 네임스페이스(이메일, Supabase user id 등)로 기억 데이터 저장
- “remember” 등 특정 키워드 감지 시, 사용자의 메시지를 장기 기억에 추가(예: “내가 해야 할 일 기억해줘 – 앱 만들기, 빨래하기”)
- 새로운 대화 시작 시 기억된 데이터 불러올 수 있도록 설계(“내가 기억하라고 했던 태스크 뭐야?” 등)
- 계정 전환(로그아웃→다른 이메일로 재로그인)하면, 해당 사용자 맞춤 기억·도구 권한만 노출

### 통합 예시 코드는 단계별로 GitHub 리포지토리에서 제공되어 개발자 재현이 용이함

- 영상 하단 설명에 GitHub 레포(https://github.com/colemedin/langraph-arcade-agent)와 README 파일, 샘플 코드, 단계별 예제 구분되어 있음
- step-by-step: Arcade API 키 설정, 필요한 pip 패키지 설치, 환경변수 설정, 요구 라이브러리(import), 간단한 도구 매니저 생성, Langchain·Langraph 연결, Streamlit 인터페이스 세팅 등 구체적 안내
- 각 단계별로 Python 스크립트(arcade_one_basics.py 등)와 CLI/웹 인터페이스 예제 분리해 제공

### 노드별 플로우(에이전트→인증→도구 실행)의 로직은 Langraph에서 직관적으로 기술됨

- 메세지 히스토리(state) 관리가 최우선, 매 대화 마다 히스토리 누적
- 도구 호출 필요 여부 판단 후, Arcade 매니저에서 해당 도구의 인증 여부를 동적으로 체크
- 인증 불가시 ‘권한 요청(Authorize)’ 노드로 분기, OAuth URL과 함께 사용자 입력 대기(Interrupt)
- 인증 성공 후 ‘도구 실행’ 노드로 이동, 이후 에이전트로 제어 권한 복귀→최종 사용자 응답 또는 추가 도구 호출
- 워크플로우 반복 구조(도구 실행 후 always 에이전트 노드로 돌아옴)

### Arcade와 Langraph의 API·SDK 통합이 생산성과 보안, 사용자 경험을 모두 높여줌

- Arcade API 키는 대시보드에서 쉽게 발급·관리, 무료 티어로 시작 가능
- 사전 구현된 도구 키트(예: Gmail, Asana) import만으로 바로 연동 가능, 자체 개발 도구도 추가 지원
- Langraph 통합 노드 구조가 인증-도구-기억-응답 플로우를 명확히 분리해 개발자 학습 부담 감소
- 인증 요청은 최초 사용 시점에만, 그 이후에는 캐시·자동 인증(“Just-in-time authorization” 원리)

### 각 사용자별 ‘기억’과 ‘도구 권한’이 완전하게 분리되어 대규모 서비스(수천/수만 사용자) 확장에 최적화

- 각 로그인을 다른 이메일로 하면, 기억(예: “빨래하기, 앱 만들기”)과 도구 권한(Gmail, Asana 접근 등)이 절대 공유되지 않음
- 프로덕션 환경에서 수천, 수만 사용자가 동시에 자신만의 기억, 프로젝트, 메일/업무 데이터에 접근 가능
- 시스템 프롬프트를 사용자별로 개인화해, 에이전트가 각 사용자의 특성/지시사항을 기억하고 맞춤 행동 유도

### 장기적으로 Arcade+Langraph 조합으로 생성되는 SaaS·AI 에이전트 유형 무한 확장 가능

- 예시: 자동 이메일 분류, 개인화된 업무 비서, 전자상거래 맞춤 상담, 메모리 기반 카테고리화 등
- 본질적으로 “각 사용자에 맞는 작은 시스템 프롬프트와 도구, 기억, 권한 구조”로 AI SaaS를 빠르게 구축 가능
- Arcade가 인증·권한 관리, Langraph가 워크플로우 및 기억 관리라는 명확한 역할 분담

### Github README, Arcade·Langraph 문서 참고시 다양한 변형 및 확장 사례 구현도 용이함

- Arcade 문서(특히 ‘Langraph와 Arcade 사용법’과 ‘Langchain 연동 예시’)에 각종 환경설정, 예제 코드 안내됨
- supabase, me-zero 등 장기 기억 솔루션과의 연동도 유연하게 가능
- 신규 툴 추가, 복잡한 인증 시나리오, 개별 사용자를 위한 프롬프트 개인화도 확장적으로 구현 가능

### Arcade와 Langraph의 결합은 인증·기억·확장성을 모두 아우르는 맞춤형 AI 에이전트 구축의 현행 최적 해법임

- Arcade가 해결한 인증 확장성, Langraph의 기억 관리 조합으로 대규모 개인화 서비스 실현
- 개발자는 인증/기억/도구 권한 관리의 복잡성을 Arcade·Langraph에 위임, 핵심 비즈니스 로직과 UI 개발에 집중 가능
- 기존 직접 구현 방식의 한계를 극복하고, 사용 경험·보안·유지보수에서도 탁월함을 증명
