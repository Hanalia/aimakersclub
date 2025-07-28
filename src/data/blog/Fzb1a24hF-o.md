---
author: AI Makers Club
pubDatetime: 2025-07-28T08:19:15.249Z
title: "Ship Agents that Ship: A Hands-On Workshop - Kyle Penfound, Jeremy Adams, Dagger"
slug: Fzb1a24hF-o
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**본 워크숍에서는 Dagger를 활용하여 실제 배포 가능한 소프트웨어 에이전트(Ship Agent)를 구축하고, 이를 GitHub 및 GitHub Actions 환경에 배포하는 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Fzb1a24hF-o/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Ship Agents that Ship: A Hands-On Workshop - Kyle Penfound, Jeremy Adams, Dagger](https://www.youtube.com/watch?v=Fzb1a24hF-o)  
**채널명:** AI Engineer

## *코드 배포가 가능한 Ship Agent 만들기 핸즈온 워크숍* 핵심 요약

- **본 워크숍에서는 Dagger를 활용하여 실제 배포 가능한 소프트웨어 에이전트(Ship Agent)를 구축하고, 이를 GitHub 및 GitHub Actions 환경에 배포하는 전체 과정을 실습함**
- Dagger는 컨테이너 기반 워크플로 엔진으로, CI/CD 테스트, 개발 작업환경 구성, 에이전트 툴링 제공 등 다양한 소프트웨어 개발 자동화 작업에 사용되며, Docker의 창업진이 만든 프로젝트임
- 단순 컨테이너 실행(Docker)과 달리 Dagger는 "워크플로 전체"를 코드로서 이식성 있게 만들어주며, 모듈 단위 재사용 및 다양한 언어(Python, Go, TypeScript 등)간 크로스 호환을 지원함
- 에이전트에게 주어지는 툴셋(예: 파일 읽기/쓰기, 테스트 실행, 디렉터리 트리 확인 등)은 사용 목적에 맞춰 엄격히 통제할 수 있으며, Dagger 모듈 간 의존성 및 확장 방식은 Daggerverse(모듈 허브)를 통해 관리
- 코드 검증 및 테스트 자동화 기능이 에이전트 내 workflow에 포함돼, 생성형 에이전트가 만든 코드의 품질을 개발자/CI 환경과 동일 조건에서 확인 가능함
- LLM(예: OpenAI, Anthropic, Gemini, Olama 등) 연동 구성을 통해 실제 생성형 에이전트가 환경·툴·프롬프트를 받아 새 기능을 개발, 테스트, 결과물을 코드 디렉터리로 반환하도록 설계
- GitHub Issue 기반 자동 PR 생성, 이슈-에이전트-PR 생성 flow 자동화, GitHub Actions/CICD 연동, 클라우드 시각화(Dagger cloud) 등을 시연
- 에이전트의 코드 생성·검증·테스트 단계는 샌드박스된 컨테이너 환경에서 안전하게 실행되며, 로컬 미반영 상태에서 결과 검토/확인까지 가능
- 다양한 언어·모듈 확장, Reflection/계층형 Agent, 파일시스템 동적 작업, 테스트/PR feedback, MCP(모듈 통신 프로토콜) 연동 등 심화 주제 실전 사례 소개
- 인간 개발·운영 워크플로와 동일한 구조를 에이전트나 플랫폼 엔지니어 모두가 쉽게 재활용할 수 있도록 도구화, guardrail(안전장치) 구현에 초점

---

## 세부 요약 - 주제별 정리

### Dagger의 기본 철학과 에이전트 구축 환경이 기존 컨테이너 및 DevOps와 어떻게 다른지 강조함

- Dagger는 소프트웨어 엔지니어링 워크플로와 개발 환경을 위한 범용 컨테이너-워크플로 엔진임
- Docker(애플리케이션 컨테이너화, 이식성 중점)와 달리, Dagger는 "워크플로의 코드화 및 이식성"을 실현함
- 다양한 언어(Python, TypeScript, Go 등)로 작성된 모듈을 상호 재사용/호환 가능, Daggerverse라는 모듈 공개 생태계 운영
- 단일 API 및 캐시, 컨테이너-디렉터리-파일-LLM 등 코어 컴포넌트 기반으로 워크플로 구축
- 모든 작업은 컨테이너 샌드박스에서 실행되어 환경별 일관성, 격리, 안전성 제공
- 기존의 CI/CD 자동화 경험(빌드, 테스트, 배포 등)을 생성형 에이전트에서도 재활용 가능

### Dagger 설치와 준비, 실습 환경 세팅 과정을 단계별로 안내

- Dagger는 Homebrew, 설치 스크립트, winget 등 다양한 CLI 도구로 설치 가능
- 필수 의존성: 컨테이너 런타임(docker, podman, nerdctl 등)
- 공식 문서(docs.dagger.io)의 설치 및 퀵스타트 안내를 따라 실습이 진행됨
- 인터넷 불안정성 대비해 실습은 로컬 및 GitHub 환경에서 병행 시연
- 실습 도중 슬랙 채널, 클라우드플레어 해크나잇, 참가자 질문 등 안내

### 다양한 언어 기반 Dagger 모듈로 개발 워크플로 기능을 코드로 정의하고 활용하는 방식을 구체적으로 설명

- 예제 프로젝트(Hellow Dagger 템플릿)를 GitHub에서 템플릿으로 복제해 사용
- 프로젝트별로 Python, Go, TypeScript 등 선호 언어로 Dagger 모듈 생성
- dagger init 명령어로 모듈 디렉터리 및 기본 코드 자동 생성
- API/함수 구조는 SDK 표준화, 커맨드라인(dagger functions) 및 코드 내 환경 모두에서 동일하게 사용
- 빌드/테스트/배포 함수는 각 언어별로 동일 워크플로를 수행하도록 일관성 있게 작성
- 함수 시그니처, 주석(docstring) 활용하여 Dagger CLI–API 양쪽에서 도움말/설명 정보 자동 생성

### 소프트웨어 개발 에이전트에게 어떤 툴을 어떻게 제공하며, 툴의 범위·동적 변경·Focus 조정 방법을 심도 있게 논의

- 실제로 역할 수행을 위한 agent용 "playground" 기능(workspace module) 정의
- agent에게는 "필요한 만큼의 툴"만 제공해야 하며, 지나치게 많은/범용 기능 탑재는 혼동·신뢰성 저하로 이어짐
- Dagger workspace module에는 파일 읽기(read_file), 쓰기(write_file), 디렉터리 트리 확인(list_files) 등 기본 편집 기능 구현
- 필요에 따라 고급 기능(특정 라인 읽기, scan, insert 등)도 추가 가능
- 동적 툴/동작 변화는 LLM 내부의 "툴 목록 확인–선택" 단계에서 자동 처리됨
- 기능 추가/수정시 반복적으로 워크스페이스, 툴 목록 조정이 매우 중요

### 프롬프트 설계와 에이전트 후킹, LLM 연동 방식 및 코드 생성 플로우를 구체 코드와 퍼블릭 가이드라인을 통해 시각화

- 핵심 develop 함수는 assignment(할 일), workspace 객체, 프롬프트(mmarkdown) 조합으로 agent 환경 및 작업 흐름 설정
- 프롬프트 기반 토큰 치환(:assignment) 및 추가 지시어(분석-최소 변경-테스트 실행-완료 후 종료 등) 명시
- LLM에게 제공하는 툴, 워크스페이스, 소스코드 등은 모두 Dagger 모듈 함수 타입 및 주석의 자동화된 시그니처·Doc을 통해 게시
- agent는 assignment 텍스트를 받아 작업 분석→툴 목록 탐색→실제 코드 편집→테스트→완료 결과(새 디렉토리) 반환 흐름
- 코드 내 Dagger/LLM 연동: 다양한 LLM API(OpenAI, Anthropic, Gemini, Olama, Bedrock 등) 지원, API 키/비밀정보는 1Password 등 외부 vault 연동 지원

### 컨테이너 내부에서의 에이전트 코드 편집, 테스트, 반복적 결과 검증 및 샌드박스 보장 방식

- agent의 모든 코드 생성 및 편집, file-system 조작, 실행 결과는 컨테이너 내부 임시 파일시스템에만 반영됨
- 여러 agent 동시 실행 시 각 워크스페이스 샌드박스가 충돌 없이 격리 제공
- 빌드/테스트/배포 명령은 일관된 환경에서 재현 가능, 실패시 LM에 “재시도” 요청 등 guardrail 구축 가능
- 실행 결과는 export 명령을 통해서만 최종적으로 로컬 파일시스템에 반영(삼중 테스트 통과 후 적용)

### Dagger Cloud를 통한 에이전트 워크플로 시각화 및 내부 동작 추적 경험 공유

- Cloud 토큰 활용 시 프롬프트, agent의 툴 호출, 파일접근/수정 내역, 함수 시그니처, Trace(트리 구조)는 웹 대시보드에서 실시간 시각화
- agent가 실제로 호출하는 함수, 인자, 처리 결과 등 모두 구체적으로 추적 가능, Debug/Prompt 튜닝에 유용
- 접근 권한/비밀키는 Github Actions 및 Cloud에서 환경변수로 관리됨

### develop 함수를 확장해 실제 GitHub 이슈–PR 오토메이션을 구현, 팀 협업 및 PR 워크플로까지 전체 연결

- 별도 Dagger 모듈(github-issue) 설치를 통해 GitHub API(이슈·PR 생성/코멘트 등) 작업 기능 추가
- develop_issue 함수에서 GitHub issue body 텍스트를 assignment로 사용, issue title·URL 등 메타 정보도 활용, agent 작업 후 Pull Request(자동으로 관련 issue 연결) 생성
- 실습 예시: GitHub Issue에 기능 요청–label(develop) 붙이면 Github Actions에서 workflow 파일 트리거–dagger develop_issue 실행–agent가 코드 생성/수정–PR 자동 작성
- 개발자·기여자는 별도 환경설치 없이 GitHub 웹에서만 요청·결과 확인 가능

### Dagger 모듈 생태계(Daggerverse), 의존성·언어·MCP 통신 등 확장성 구조 및 혼합 활용 사례 소개

- Daggerverse에는 수천 개의 커뮤니티제작 모듈(테스트, AWS 배포, Issue 등)이 등재, install하여 의존성 간편 추가 가능
- 각 모듈은 언어 혼용 가능(Typescript–Python 등), 여러 팀·역할 간 재사용/확장성 극대화
- MCP(모듈 통신 프로토콜) 연동: Dagger 모듈을 MCP 서버로 노출, 외부 MCP 서버와 상호연동, 곧 외부 연결 지원 예정

### 다양한 에이전트 패턴(계층형/반성적/다중-에이전트 조합) 및 특수 작업 사례, 대규모 워크플로 설계 논의

- 다중 agent 계층/서로 feedback, review, reflection을 구축해 한 프로젝트에서 여러 agent 역할 조합 가능
- 실전 demo 예: typescript/golang 등 다중언어 코드 변환 agent, broken test 자동 감지–수정 제안 agent, PR review/피드백 주고받고 수정
- 대규모 작업의 경우 문제를 분해(작은 단위 워크플로로 쪼갬), agent orchestrator로 분배/조건부 반복 실행 가능
- 테스트 디렉토리 포함/수정, 결과 검토, 피드백 주입(재작업 요청), 브라우저 및 VNC 연동 등 복잡한 커스텀 환경 지원
- OpenAI Agents SDK, Pendatic 등 외부 agent framework와 혼합 사용 가능(컨테이너·툴의 장점 극대화)

### Dagger Shell의 인터랙티브 LLM 인터페이스 및 자유도/가드레일 활용 두 가지 활용 방식 설명

- 쉘 환경에서 LLM이 Dagger API 직접 호출–container 생성, 파일 조작, 빌드 등 명령 수행 가능
- “가드레일” 방식(프롬프트+도구 제한)과, “자유 탐색” 방식(LLM이 직접 환경–API 탐색) 모두 지원
- LLM–API 시그니처 동기화, 도구 목록 자동 제공, 실전 사용에는 일관된 워크플로와 guardrail 적용이 신뢰성에 필수

### 전체 결론: Dagger 기반 워크플로 구조는 인간과 에이전트 모두에 재사용·확장 가능하며 guardrail을 통해 안전하고 신뢰성 있는 소프트웨어 배포에 이바지함

- Dagger 워크플로/툴 체계는 개발자, 플랫폼 엔지니어, 에이전트 모두 동일하게 재사용 가능
- guardrail(검증·테스트 자동화·권한 분리 등)을 통해 생성형 에이전트 활용에 실무 신뢰성 확보
- 브라우저 기반 테스트, 대형 작업 분할, 다양한 언어/실행환경 확장 등 최신 DevOps/AI 에이전트 흐름의 선도적 구조로 시연됨
