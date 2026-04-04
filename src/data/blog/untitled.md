---
author: AI Makers Club
pubDatetime: 2026-04-04T08:18:36.215Z
title: "My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Cole Medin은 본인이 작성하지 않은 풀 리퀘스트(PR)를 소개하며, 이 코드는 AI 코딩 에이전트가 원격 컴퓨터에서 전적으로 작성했다고 설명함 사용자는 GitHub 이슈에 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)](https://www.youtube.com/shorts/NKWqXYykQ1o)  
**채널명:** Cole Medin

## *내 Claude AI 코드가 내 컴퓨터를 건드리지 않고도 GitHub 이슈를 고치는 방법 (무료 도구!)* 핵심 요약

- Cole Medin은 본인이 작성하지 않은 풀 리퀘스트(PR)를 소개하며, 이 코드는 AI 코딩 에이전트가 원격 컴퓨터에서 전적으로 작성했다고 설명함
- 사용자는 GitHub 이슈에 "coder" 태그만 추가하면 자동으로 원격 인스턴스가 생성되어, 이슈 처리가 시작됨
- 이러한 처리는 완전 무료 오픈소스 도구인 **Coder 플랫폼의 Workspaces 툴**을 이용해 구현됨
- Workspaces는 코딩 에이전트 자체가 아니라, 여러 코딩 에이전트 세션을 원격에서 병렬적으로 관리하는 **인프라 오케스트레이션 레이어**
- 사용자는 본인 PC에 아무것도 직접 띄우지 않고도 여러 GitHub 이슈를 동시에 처리할 수 있음
- Workspaces 인프라(예: VPS 등) 위에 self-hosting한 후, GitHub 이슈에 단순히 태그만 달면 자동 처리 프로세스가 시작됨
- 각 이슈를 처리하는 진행상황은 GitHub 이슈에 자동 링크 형태의 댓글로 제공되어 실시간 트래킹 가능
- 작업 환경이 완전히 격리되어, 수십 개의 이슈를 동시에 병렬적으로 처리할 수 있는 것이 큰 장점
- 최종적으로 PR이 자동으로 만들어져 리뷰 및 병합만 남는 워크플로 제공
- Cole Medin은 정식 데모와 함께, Workspaces를 누구나 무료로 시도해 볼 것을 적극 권장

---

## 세부 요약 - 주제별 정리

### AI 코딩 에이전트가 사용자 기기를 거치지 않고 풀 리퀘스트를 작성함

- 영상 첫 부분에서 “I didn't write a single line of this pull request. A coding agent did in its own computer.”라고 강조
- 사용자는 한 줄도 직접 코드를 작성하지 않음
- AI 코딩 에이전트가 별도의(원격) 머신에서 코드를 전적으로 생성 및 제출
- 사용자는 GitHub 이슈 페이지를 여는 것만으로 시작 가능

### GitHub 이슈에 “coder” 태그를 붙이면 모든 과정이 자동화됨

- “I just had to open up this issue, give it the coder tag...”라고 언급
- 문제 해결을 위한 유일한 수동 작업은 이슈에 특정 태그 부여
- coder 태그 추가 시, 자동으로 백엔드에서 새로운 원격 인스턴스가 생성되고 처리가 시작됨

### 무료 오픈소스 도구인 Workspaces로 전체 오케스트레이션이 가능함

- 모든 과정은 **Coder**라는 플랫폼의 오픈소스 도구 “Workspaces”로 관리됨
- 사용자에게 Workspaces 설치 및 간단한 구성만 필요, 무료로 활용 가능
- “Thanks to a free and open-source tool called Workspaces by the platform coder”
- Workspaces는 단일 코딩 에이전트가 아니라, 여러 에이전트를 효율적으로 관리하기 위한 상위 오케스트레이션 레이어를 제공

### Workspaces는 자체 코딩 에이전트가 아닌 인프라 관리 플랫폼임을 명확히 설명

- Workspaces는 코딩 에이전트 “자체”가 아니며, 여러 코딩 에이전트를 원격에서 병렬/격리 관리하는 “인프라”임을 반복해서 강조
- 사용자가 원격 인프라(VPS 등)에 Workspaces를 직접 self-hosting할 수 있음
- “So it's not a coding agent itself. It's allowing us to orchestrate our coding agents at scale remotely”

### 이슈 태깅을 통한 자동처리 프로세스와 Task 생성 절차를 시연함

- GitHub 이슈에서 coder 태그를 적용하는 과정을 화면으로 시연
- 태그 적용 후, Workspaces 대시보드에서 새로운 “Task”가 생성되고 작업이 시작되는 과정을 직접 보여줌
- 각 Task는 격리된 원격 환경에서 해당 이슈에 대한 코드를 작성하게 됨

### 작업 수행 경과 및 실시간 진행상황 추적 시스템 설명

- 작업 Task가 초기화되고, GitHub 이슈에 자동적으로 코멘트가 남으며 “작업 진행 상황을 추적할 수 있는 링크”가 제공됨
- Task가 구동되면 클라우드 환경에서 코드가 실행되고, 진행 상황을 사용자가 Workspaces UI 및 GitHub 이슈 코멘트로 실시간 확인 가능

### 클라우드 환경에서 작업 프로세스가 구동되는 실제 예시 제시

- “So I'll come back once it's handled the entire issue and has created that pull request for me.” 등의 언급으로, 완전 자동화 WORKFLOW 상세 시연
- Task가 이슈를 모두 처리하면, 자동으로 Pull Request가 생성됨
- 사용자는 최종 PR을 리뷰 및 merge하는 단계만 남음(코드 검토-병합)

### 병렬적, 대규모 이슈 처리를 가능하게 하는 격리 인프라의 강점을 강조

- Workspaces 인프라 내에서는 각 이슈/태스크별로 완전히 격리된 환경이 제공됨
- 동시에 수십 개의 이슈를 병렬로 처리 가능하여, 대형 프로젝트·팀에 적합함
- “Because workspaces gives an isolated environment for each of our coding agent sessions, I could have been working on dozens of issues at the exact same time...”

### 팀 단위의 협업 및 인프라 공유도 손쉽게 가능함을 언급

- Workspaces 인프라를 통해서 작업 환경과 인력을 쉽게 확대하거나 “팀 전체”와 공유 가능
- “Even sharing this infrastructure with an entire team” 발언

### 사용 편의성 및 도구 추천으로 영상 마무리

- 전체 과정을 요약하며, Workspaces의 무료 사용과 실질적인 생산성 향상을 강조
- “Wonderful tool, free to try. I'd highly recommend giving it a shot...”로 마무리
- 툴 링크를 영상 설명란에 제공한다고 안내
