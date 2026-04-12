---
author: AI Makers Club
pubDatetime: 2026-04-12T23:46:59.854Z
title: "My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"내 Claude 코드가 내 컴퓨터를 전혀 사용하지 않고 GitHub 이슈를 자동으로 해결해준다 (무료 도구!)\" 제작자는 실제로 본인이 단 한 줄도 코드를 작성하지 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)](https://www.youtube.com/shorts/NKWqXYykQ1o)  
**채널명:** Cole Medin

## *내 로컬 기기를 건드리지 않고 GitHub 이슈를 자동으로 해결해주는 무료 도구 'Workspaces'* 핵심 요약

- 영상 제목은 "내 Claude 코드가 내 컴퓨터를 전혀 사용하지 않고 GitHub 이슈를 자동으로 해결해준다 (무료 도구!)"
- 제작자는 실제로 본인이 단 한 줄도 코드를 작성하지 않고, AI 코딩 에이전트가 자체적으로 PR(Pull Request)을 생성했다고 강조함
- GitHub 이슈에 단순히 ‘coder’ 태그를 달아주기만 하면, 클라우드 상에서 자동으로 별도 환경이 생성되어 모든 작업이 처리됨
- 이러한 자동화는 coder 플랫폼에서 무료 및 오픈소스로 제공하는 ‘Workspaces’라는 도구 덕분임
- ‘Workspaces’는 AI 코딩 에이전트 세션을 원격 및 병렬로 오케스트레이션할 수 있는 인프라를 제공함
- 모든 코딩 작업이 클라우드에서 병렬적으로 처리되고, 내 PC에는 아무것도 돌아가지 않으므로 여러 이슈를 동시에 팀원과 공유하며 처리 가능
- 워크스페이스는 에이전트 자체가 아니라, 에이전트를 대규모로 효율적으로 운영할 수 있도록 하는 인프라 소프트웨어임
- 실제로 VPS 환경에 Workspaces를 설치해 라이브로 GitHub 이슈를 자동 처리하는 데모 과정을 보여줌
- 각 이슈별로 격리된 환경에서 작업이 이뤄지며, 상태 추적 링크가 GitHub 이슈 코멘트로 자동 등록됨
- 수십 개 이슈를 동시에 처리할 수 있는 인프라 확장성과 무료 오픈소스 도구임을 강조하며 사용을 권장함

---

## 세부 요약 - 주제별 정리

### AI 코딩 에이전트가 완전히 자동으로 PR을 생성하는 데 성공함

- 영상의 시작에서, 제작자는 본인이 코드를 한 줄도 작성하지 않고 PR(Pull Request) 생성 과정을 모두 AI 코딩 에이전트가 수행했다고 밝힘
- GitHub 이슈를 단지 오픈하고, 'coder'라는 태그만 달아주면 자동화가 시작됨
- 모든 절차(이슈 감지, 작업 환경 생성, 코드 작성 및 PR 제출 등)가 자동화되어 제작자의 수동 개입이 필요 없음

### GitHub 이슈에 Coder 태그만 추가하면 자동 처리 프로세스가 시작됨

- GitHub 이슈에서 단순히 ‘coder’ 태그를 다는 것으로 자동화 파이프라인이 출발
- 태그가 확인되면, 백엔드에서 클라우드 기반의 작업 환경이 자동으로 프로비저닝되어 초기화됨
- 제작자는 “정말 이거 하나만 하면 된다”며 절차의 단순함과 편의성을 강조함

### Workspaces는 AI 코딩 에이전트를 대규모로 관리·운영할 수 있게 하는 인프라 역할을 담당함

- ‘Workspaces’는 실제로 코드를 작성하는 AI(코딩 에이전트)가 아니라, 이 에이전트들이 병렬적으로 동작하도록 네트워크/컴퓨팅 자원을 할당 및 관리하는 소프트웨어임
- 여러 개의 코딩 에이전트 세션을 동시에 원격 및 병렬로 관리할 수 있도록 함
- 에이전트 관리와 환경 격리 덕분에, 다수의 이슈를 한 번에 처리 및 추적 가능

### 모든 코딩 환경은 클라우드에서 생성되어 로컬 PC에 어떠한 부담도 주지 않음

- 작업 환경(코딩 세션)이 사용자의 PC가 아닌, 클라우드의 가상 머신/서버(VPS)에 배치됨
- 사용자는 로컬 기기의 성능이나 보안 문제에서 완전히 해방됨
- 인프라 전체를 팀 단위로 공유해서 운영할 수 있고, 동시에 여러 코드 작업을 병렬 진행 가능

### 실제 VPS 환경에서 Workspaces를 셀프호스트해 자동화 구조를 시연함

- 도구 사용을 위해서 제작자는 Workspaces를 자체적으로 VPS(가상 사설 서버)에 설치함
- 이후 실제 GitHub 이슈로 이동하여 ‘coder’ 태그를 추가하는 실습을 시연
- 태그 추가 즉시 클라우드 내에 새로운 ‘task’가 할당되는 과정을 Workspaces UI에서 실시간 확인 가능함

### 자동화된 작업 현황은 Workspaces 대시보드와 GitHub 이슈 양쪽에서 모두 확인 가능함

- Workspaces 인터페이스의 ‘Tasks’ 탭에서 특정 이슈에 배정된 작업 세션 상태를 추적할 수 있음
- 동시에, GitHub 이슈에 ‘작업 현황 추적을 위한 링크’가 자동으로 코멘트 형태로 추가됨
- 작업의 프로비저닝, 실제 클라우드 코드 실행 등 모든 진행 상황을 투명하게 확인 가능

### CloudCode 에이전트가 실제로 코드를 작성하고 이슈 해결까지 전 과정을 책임짐

- 새로운 작업 환경이 자리잡은 뒤, ‘CloudCode’ 에이전트가 GitHub 이슈를 인식하여 문제 해결에 돌입
- 영상에서 "cloud code is running"이라는 멘트로 에이전트의 자동 작업 개시를 알림
- 제작자는 중간과정에서 다시 영상으로 돌아와 전체 이슈 처리·PR 생성 여부를 확인

### 작업이 자동으로 끝나면 최종 PR을 GitHub 레포지토리에 자동 생성함

- 이슈 처리가 완료되면, Workspaces를 통해 cloud code가 먼저 코드를 완성
- 그 다음 GitHub에 자동으로 Pull Request가 생성됨
- 제작자는 UI를 통해 작업 완료 및 최종 PR이 레포에 올라온 것을 직접 보여줌

### 각 이슈별로 완전히 격리된 환경을 제공해 병렬적 이슈 처리가 매우 용이함

- Workspaces는 각 코딩 에이전트 세션을 독립적(격리된) 환경에서 실행
- 병렬적으로 수십 개 이상의 이슈도 동시에 자동 처리 가능함
- 팀 단위, 대규모 프로젝트 환경에 인프라 확장성/유연성이 매우 우수함

### Workspaces는 무료 오픈소스 도구이며 누구나 쉽게 체험 가능함

- Workspaces는 플랫폼 ‘coder’가 무료 및 오픈소스로 제공
- 개인, 팀 또는 기업 등 다양한 유저가 무료로 도입 및 테스트할 수 있음
- 영상 설명란에 설치 및 활용을 위한 링크가 제공됨
