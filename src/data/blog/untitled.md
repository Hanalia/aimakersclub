---
author: AI Makers Club
pubDatetime: 2026-03-29T23:45:12.036Z
title: "My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상에서는 사용자가 한 줄의 코드도 작성하지 않고, AI 코드 에이전트가 원격에서 자동으로 깃허브 이슈를 해결하는 과정을 시연함 Coder 플랫폼에서 제공하는 오픈소스 무료 툴"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)](https://www.youtube.com/shorts/NKWqXYykQ1o)  
**채널명:** Cole Medin

## *내 깃허브 이슈를 내 컴퓨터 터치 없이 고치는 Claude 코드 - 무료 툴!* 핵심 요약

- 이 영상에서는 사용자가 한 줄의 코드도 작성하지 않고, AI 코드 에이전트가 원격에서 자동으로 깃허브 이슈를 해결하는 과정을 시연함
- Coder 플랫폼에서 제공하는 오픈소스 무료 툴 ‘Workspaces’를 활용하여 클라우드에 AI 코딩 에이전트 인프라를 직접 구축·운영함
- 사용자는 깃허브 이슈에 ‘coder’ 태그만 붙이면 원격 환경에서 해당 이슈 처리가 자동으로 시작됨
- Workspaces를 통해 여러 코딩 에이전트 세션을 동시에 병렬로 관리할 수 있어, 여러 깃허브 이슈를 한 번에 처리 가능
- 모든 작업은 사용자 컴퓨터가 아닌 서버(VPS)에 설치된 Workspaces 인프라에서 진행되어 로컬 리소스를 전혀 소모하지 않음
- 각 깃허브 이슈 작업은 개별적으로 격리된 환경에서 실행되어 안전성과 확장성이 높음
- 이슈 진행 상황은 깃허브 이슈에 자동으로 작업 추적 링크로 코멘트가 남겨지며, 작업이 끝나면 자동으로 PR(Pull Request)이 생성됨
- Workspaces는 AI 코딩 에이전트를 위한 오케스트레이션 인프라를 제공할 뿐, 자체적으로 코딩 에이전트는 아니며, 원격에서 대규모 세션 운용을 가능하게 함
- 무료로 누구나 사용해볼 수 있으며, 영상 설명란에 해당 툴 링크가 안내됨
- 병렬처리, 팀 단위 인프라 공유, 자동화 등의 장점을 통해 개발 생산성과 협업 효율이 크게 증가함을 보여줌

---

## 세부 요약 - 주제별 정리

### 사용자는 코딩을 한 줄도 작성하지 않고 이슈를 자동 처리할 수 있음

- 영상의 도입부에서 “I didn't write a single line of this poll request. A coding agent did in its own computer.”라고 직접 언급
- 사용자는 직접 소스코드를 건드리지 않고, 별도의 행동 없이 AI 에이전트가 독립적으로 이슈를 해결함
- 실제 코딩 작업은 전부 원격 에이전트 환경에서 수행됨

### 깃허브 이슈에 태그만 추가하면 자동으로 AI가 작업 시작

- 이슈에 ‘coder’ 태그를 추가하기만 하면 자동으로 해당 이슈를 다룰 AI 세션이 새로 생성됨
- 태그 추가만으로 자동화된 워크플로우가 트리거되어, 사용자는 추가 조작 없이 AI의 작업을 지켜볼 수 있음

### Coder의 무료 오픈소스 툴 ‘Workspaces’로 클라우드 인프라를 손쉽게 구축

- 영상에서 “a free and open-source tool called Workspaces by the platform Coder”라 명시
- Workspaces는 오픈소스 소프트웨어로 무료 제공됨
- 사용자는 VPS(가상 사설 서버)에 직접 설치하여 자가 호스팅함
- Workspaces는 인공지능 코딩 에이전트의 실행을 위한 인프라·오케스트레이션 레이어 역할을 함

### Workspaces는 AI 코딩 에이전트 오케스트레이션 인프라임을 명확히 구분해야 함

- “workspaces is the infrastructure for our coding agents. So it's not a coding agent itself.”
- Workspaces는 AI 코딩 에이전트가 운용·배포·병렬 처리될 수 있도록 지원하는 관리 도구임
- 실제로 코딩을 수행하는 것은 Claude 등 AI 코딩 에이전트이며, Workspaces는 이를 다수, 원격에서, 독립적으로 관리

### 사용자는 VPS에 Workspaces를 직접 배포하여 원격 코드 처리가 가능함

- 예시로 사용자는 자신의 VPS에 클라우드 기반 Workspaces 인스턴스를 배포함
- 개인 로컬 컴퓨터에서 아무것도 돌릴 필요 없이 모든 작업이 클라우드 상에서 이루어짐
- 사용자는 깃허브 이슈를 웹 인터페이스에서 간단히 관리

### 태그를 통해 이슈가 AI로 전달되고, 자동으로 작업 세션이 생성됨

- 깃허브 이슈에 coder 태그 추가 → Workspaces가 해당 이벤트를 인식하고 새로운 작업(task) 할당
- “All I have to do to trigger coder to handle this... is I simply have to add the coder tag.”
- UI에서 실시간으로 Task 리스트에 새로운 작업이 추가되고, 프로세스가 바로 시작

### 진행 상황은 UI와 Issue 코멘트로 실시간 추적할 수 있음

- “It even puts a comment in the GitHub issue with the exact link to track the work as it happens.”
- 깃허브 이슈에는 진행 중인 작업에 대한 추적 링크가 자동 코멘트로 남겨짐
- UI 내 Task 진행상황을 실시간으로 확인 가능

### 클라우드 기반 환경에서 Claude 등 AI 코드가 실제로 작업하며, 병렬 처리가 가능함

- “Cloud code is running.”
- AI 코디가 깃허브 이슈에 요청된 작업을 원격 세션에서 처리
- 다수의 이슈를 동시에, 격리된(workspaces 기반) 세션에서 병렬적으로 처리 가능
- “...dozens of issues at the exact same time, all running in parallel in my workspaces infrastructure.”

### 처리 완료 후 자동으로 Pull Request가 생성되어 검토와 병합이 즉시 가능함

- AI 코딩 작업이 마무리되면, 완성된 Pull Request가 깃허브에 자동으로 제출됨
- 사용자는 퀄리티 확인 후 Merge만 하면 됨
- “this is our final pull request ready for us to review and merge.”

### Workspaces는 팀 단위 협업, 확장성, 무료성 등 실용적 장점을 갖춤

- 인프라 환경 전체를 팀원과 공유 가능하여 팀 기반 대규모 협업이 가능
- 각 이슈별 작업 환경이 격리되어 안정성↑, 다수 동시 작업 가능→효율성↑
- 무료로 사용 가능, 영상 설명글에 공식 링크 안내
- 영상 제작자는 “wonderful tool, free to try. I'd highly recommend giving it a shot.”라고 언급
