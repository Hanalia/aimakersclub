---
author: AI Makers Club
pubDatetime: 2025-07-26T08:18:30.412Z
title: "Piloting agents in GitHub Copilot - Christopher Harrison, Microsoft"
slug: DdaAABdAqZY
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목: **GitHub Copilot 에이전트 실습 파일럿 Christopher Harrison, Microsoft** 이번 세션에서는 GitHub Copilot(일명 \"AI"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/DdaAABdAqZY/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Piloting agents in GitHub Copilot - Christopher Harrison, Microsoft](https://www.youtube.com/watch?v=DdaAABdAqZY)  
**채널명:** AI Engineer

## *GitHub Copilot 에이전트 실습 파일럿* 핵심 요약

- 영상 제목: **GitHub Copilot 에이전트 실습 파일럿 - Christopher Harrison, Microsoft**
- 이번 세션에서는 GitHub Copilot(일명 "AI 페어 프로그래머")의 실제 활용법과 에이전트 모드, Edit 모드, Ask 모드 등 다양한 작업 방식 소개
- Microsoft에서 최근 Build 행사에서 발표한 새로운 "Copilot Coding Agent"의 사용법 및 이슈 자동 할당, 비동기적 작업 위임 방법 시연
- Copilot의 효율적 활용을 위해 “컨텍스트”의 중요성 강조, 코드의 가독성·주석·프로젝트 구조 등이 AI에 미치는 영향 구체적으로 설명
- 실습은 Codespaces(클라우드 기반 개발 환경)에서 진행되며, 참가자는 별도 설치 없이 실습에 참여 가능
- Copilot Coding Agent의 실제 워크플로우: 이슈 생성 → 상세 컨텍스트(설명, 요구사항, 예시, 설명 파일 등) 제공 → 워크플로 및 환경설정 자동화 → 결과 Pull Request 생성 → 코드 리뷰 및 추가 테스트
- Model Context Protocol(MCP)를 통해 Copilot이 외부 데이터/서비스(예: DB 스키마, 특정 API 등)에 접근 가능하며, 보안 예방책(권한 제한, 외부 연결 차단, 깃헙 액션 샌드박스 등) 마련됨
- Copilot의 명확한 지시 방법, 조직/프로젝트 단위 코드 표준 및 예시 관리법, 자동화(Instruction 파일 활용), 통합 DevOps 및 PR 검증 절차 유지 등 실무 적용 팁 제공
- 경쟁 툴(Cursor, Windinsurf 등)과의 비교는 다루지 않으나, Copilot의 주요 활용 패턴과 커스터마이징 방법에 초점
- Q&A를 통해 유저가 자주 묻는 외부 라이브러리 이용, MCP 활용, 조직 단위의 가이드 적용, 보안, 권한, 한계(fine-tuning 등) 등에 상세히 답변
- 실습 자료 및 전체 워크플로우는 공개 저장소(깃헙)에서 언제든 복습 가능, 실시간 데모와 참가자와의 상호작용을 통해 실제 현장 적용 노하우 공유

---

## 세부 요약 - 주제별 정리

### 세션 안내와 실습 준비사항을 통해 GitHub Copilot 체험 환경을 정비함

- 본 세션은 강의실 참여 인원이 많아 뒷좌석에 남은 자리가 거의 없는 상황에서 시작됨
- 동일한 내용의 랩 세션이 오후 3:30에도 반복 진행됨(제목·추상 다르나 내용 동일)
- 참가자는 사전 공지에 따라 GitHub 조직 초대 메일을 반드시 수락해야 Copilot 사용 가능
- 이메일 계정 확인 및 초대 수락 안내가 여러 번 반복됨
- 실습 참가자 대상, 장비 무음 전환, 통화 시 실외 이동 등 기본 에티켓 안내
- 실습 환경은 Codespaces를 활용해 클라우드 기반에서 운영, 별도 로컬 환경 세팅 필요 없음
- 실습 진행 전, 참가자는 제공된 Readme 파일을 따라 환경 세팅, 이슈 할당, 외부 서비스 연동, 사이트 전체 업데이트, Copilot 결과 리뷰 등 전체 흐름을 익힘
- 레포지토리 소유자는 조직 ‘Octo’로, 네이밍은 GitHub 핸들을 따르는 것으로 통일
- 실습 중 문제가 생기면 즉각 도움 요청할 것 강조(침묵=문제 없음으로 간주)

### GitHub Copilot은 AI 페어 프로그래머로서 다양한 작업 방식을 지원하며 협업 구조를 닮음

- Copilot은 "AI 페어 프로그래머"라는 콘셉트로, 실제 개발 동료와 협업하는 과정에 비유됨
- 인간 프로그래머처럼 특정 업무에 강점/약점이 있으며, 작업에 따라 맞춤 활용 가능
- Copilot을 사용할 때 핵심은 적절한 컨텍스트 제공으로, 이를 위해 코드, 주석, 프로젝트 구조 등 다양한 요소가 중요
- 세션에서는 대표적인 모드(에이전트 모드, 에디트 모드, 애스크 모드, 코딩 에이전트) 기능과 쓰임을 단계별로 설명

### 컨텍스트 제공의 중요성을 구체적 예시와 함께 강조하여 효과적 Copilot 활용법을 제시함

- “브런치 식당 선택” 에피소드를 통해, 정보를 점진적으로 구체화하며 대화가 이어지는 인간적 맥락과 AI 활용의 유사성 소개
- Copilot에 작업 의도를 명확히 밝히는 것이 중요하며, 추상적이거나 힌트를 숨기는 방식은 지양
- 주석, 가독성 높은 네이밍, 명확한 의도, 구체적 인스트럭션 제공 등이 작업의 퀄리티에 직접 영향
- 구식 챗봇처럼 명령어만 던지는 게 아닌, 장황하고 세부적인 자연어 텍스트를 적극 사용하는 것이 효과적
- 의도와 요청 결과가 일치하기 위해 "명확성(clarity)" 및 "구체성(specificity)"을 견지할 것

### Copilot의 다양한 작업 모드(코드 완성, 챗/에디트, 로컬 에이전트, 코딩 에이전트)별 특징을 구분해 설명함

- **코드 완성(Code Completion)**: 전통적 방식으로, 개발자가 코딩할 때 실시간으로 인라인 제안(함수/블록/클래스 등) 제공
- **챗(Ask) & 에디트(Edit) 모드**: 챗은 단일 질의/설명/생성 요청, 에디트는 다수 파일을 한 번에 수정(HTML, CSS, JS 등 동시 업데이트)
- **로컬 에이전트 모드(Local Agent)**: Copilot이 주도적으로 프로젝트 탐색, 외부 태스크(빌드, 테스트, 셀프힐링 등) 실행
- **Copilot Coding Agent**: 저장소 내 이슈를 에이전트에 지정하면 자동적으로 작업(코드 생성, 테스트, PR 생성 등) 후 결과 전달, 사용자는 병렬로 다른 업무 처리 가능

### 실습 및 자동화 설정 과정에서 Copilot 실전 적용법과 구성 방법을 상세히 안내함

- 실습 시작 전 GitHub 조직 및 초대 수락 절차, Copilot 라이선스 활성화 방법 구체 설명
- 실습 환경은 Public 저장소에서 제공되며, Copilot Free 계정으로도 주요 실습 가능
- 레포지토리 생성 및 커스텀 네이밍, 실제 환경 세팅 과정을 공개적으로 시연
- 실습 단계: 환경 세팅 → 외부 서비스 연동 → 컨텍스트 전달 → Copilot 통한 대규모 업데이트 → 결과물 검증

### Copilot 에이전트가 자동화 워크플로우(이슈 생성~PR 생성~코드 리뷰~테스트) 전 과정을 관리함을 실시간 예시로 시연함

- Coding Agent는 이슈(예: 엔드포인트 생성 등)를 배정받아 자동으로 작업 실행 후, Pull Request 생성
- 작업 시, 컨텍스트를 최대한 구체적으로 묘사(예: "벽을 특정한 빨간색으로 칠해달라"처럼 원하는 결과 명확히 명시)
- .md 포맷의 instructions 파일(copilot-instructions.md 등)에 프로젝트 개요/코딩 표준/언어 가이드/프로젝트 구조 등 세부 가이드 삽입 가능
- GitHub Actions 기반 워크플로 파일 세팅(copilot-setup-steps 등)으로 필요 패키지·프레임워크·스크립트 설치 자동화
- Copilot이 생성한 Pull Request 내역, 세션 탐색, 실제 동작 과정을 실시간으로 검토
- 명시적 컨텍스트(이슈·설명 파일 등)와 암묵적 컨텍스트(코드, 프로젝트 구조 등)의 조합 활용

### 프로젝트/작업별, 파일별, 조직 단위 등 다양한 Instructions 파일 관리 방법과 적용 규칙을 제시함

- instructions 파일을 universal/global/manual로 구분해 개별 작업 또는 전체 요청에 적용 가능
- apply to 패턴(예: *.jsx, *.tsx 등)으로 파일 타입·경로별 자동 적용 가능
- 프로젝트 내의 예시 코드, API 문서, 프로토타입 등 실 사례 연결 가능
- organization(조직) 레벨에서도 instructions 적용 가능, org-level 표준/지침 일괄화 가능
- 개별 Instructions 파일 생성이 시간이 걸리나, 장기적으로 코드 품질·생산성 극대화에 기여

### Copilot과 외부 데이터·서비스 연동, 보안 정책, 명확한 권한 제어의 중요성을 단계적으로 해설함

- Copilot은 직접적으로 외부 DB 등 데이터 소스 연동 불가, Model Context Protocol(MCP)를 통해 서버 경유 접근 가능
- MCP는 Copilot이 외부 서비스(API, DB, 타 워크플로우 등) 요청 처리를 대리할 수 있도록 함
- 공식/비공식(MS, Azure, Playwright, 커뮤니티 등) MCP 서버 존재, 신뢰할 수 없는 서버 사용 시 각별한 주의 필요
- Copilot의 코딩 환경(깃헙 액션 워크플로우)은 샌드박스(임시 공간)에서 제한적으로 실행, 외부연결 차단·권한 제한으로 보안 강화
- 필요한 경우 워크플로우에 한정적으로 외부 연결/패키지 설치 권한 부여
- Copilot의 쓰기 권한은 오직 작업용 이슈 브랜치(copilot-fix-*)에 한정

### DevOps 및 PR 절차 적용 원칙은 AI 도입 이후에도 동일하게 적용됨을 강조함

- 작업 결과의 PR 생성 시, 전통적 방식(동료 코드리뷰, 테스트, 보안 검사 등)과 절차 완전 동일 적용
- PR·테스트 승인 전까지 Pull Request 워크플로우 수동 실행 필요(개발자 신뢰=AI 신뢰 아닐 수 있음)
- 소스 코드 생성 과정, 테스트/검증 단계, 린트/보안 감사 등 DevOps 핵심 원칙은 AI 적용 여부와 무관하게 유지되어야 함

### Copilot의 확장 설정, 외부 이슈/연동, 서드파티 환경 등 실무적 Q&A를 통해 활용 한계를 해소함

- Jira/ADO 등은 공식적으로 지원되지 않으나, 간단한 스크립트로 이슈 복사 후 GitHub에 할당하는 방식 제안
- 사내 라이브러리, 외부 프레임워크 등은 예시 코드 또는 Instructions 파일에 직접적인 사용법 제공하면 Copilot이 패턴을 학습
- fine-tuning은 현재 지원하지 않으며, 미흡하거나 잘못된 코드 학습 가능성 때문에 선호하지 않음(MCP로 대체 가능)
- MCP 서버를 직접 만들 수도 있으나 공식/검증된 서버 활용 권장
- Copilot 공간(GitHub Copilot Spaces) 기반 지식베이스 구축 등, 조직 차원의 코드/문서/예시 관리 최신 트렌드도 안내

### 실습 마무리 및 자료 접근 방법까지 구체적으로 안내하여 참가자들의 반복 학습을 지원함

- 실습, 데모, Q&A 후 네트워크 장애 및 환경 문제 발생 시 해결책 안내
- 참가자는 공개 저장소 접근 링크 안내받음, 실습 전체 흐름·자료 반복 복습 가능
- 랩 세션 종료, 추가 질의 응답 및 자료 확인 유도
