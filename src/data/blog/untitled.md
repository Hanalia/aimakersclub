---
author: AI Makers Club
pubDatetime: 2026-03-29T08:18:08.739Z
title: "My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목에서 강조하듯, 사용자는 코드 한 줄도 직접 작성하지 않고 GitHub 이슈를 자동 해결함 이 작업은 “Workspaces by Coder”라는 **무료 오픈소스 도구**"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [My Claude Code Now Fixes My GitHub Issues Without Touching My Machine (Free Tool!)](https://www.youtube.com/shorts/NKWqXYykQ1o)  
**채널명:** Cole Medin

## *내 Claude 코딩 에이전트가 내 컴퓨터를 거치지 않고 GitHub 이슈를 자동 해결함 (무료 툴!)* 핵심 요약

- 영상 제목에서 강조하듯, 사용자는 코드 한 줄도 직접 작성하지 않고 GitHub 이슈를 자동 해결함
- 이 작업은 “Workspaces by Coder”라는 **무료 오픈소스 도구** 덕분에 가능하며, 해당 플랫폼을 VPS에 셀프호스팅해 사용함
- Workspaces는 코딩 에이전트 자체가 아니라, **코딩 에이전트를 대규모로 원격 오케스트레이션**하는 인프라 역할을 함
- 사용자는 GitHub 이슈에 “coder” 태그만 붙이면, 원격에서 새로운 인스턴스가 자동 스핀업되어 이슈를 처리 시작
- Workspaces를 통해 **여러 개의 코딩 에이전트 세션을 병렬 관리**할 수 있으며, 팀 단위로 인프라 공유까지 가능
- 실제 데모에서는 태그 부착 후 Workspaces UI에서 자동으로 새로운 태스크가 생성되어 이슈 작업을 시작함
- 각 이슈는 고립된 환경에서 진행돼 충돌 없이 여러 작업이 동시에 처리될 수 있음
- 코딩 에이전트가 작업을 완료하면 GitHub에 자동으로 풀 리퀘스트가 생성되어 리뷰 및 병합이 가능하게 됨
- Workspaces는 별도의 로컬 실행 필요 없이 **완전 원격 환경**에서 작업이 이뤄지는 점이 특징임
- 영상 마지막에서는 **무료 이용 가능**함을 다시 강조하며, 툴의 활용을 강력히 추천

---

## 세부 요약 - 주제별 정리

### 사용자는 코드 한 줄도 작성하지 않고 이슈 해결 전 과정을 자동화할 수 있었음

- 영상을 시작하며, 사용자가 “이 풀 리퀘스트 작성에 한 줄의 코드도 직접 쓰지 않았다”고 강조
- 모든 자동화 작업이 본인의 로컬 컴퓨터가 아닌 별도 환경에서 이뤄짐을 설명함

### GitHub 이슈에 태그만 추가하면 자동화된 코딩 에이전트가 원격에서 작업을 시작함

- GitHub 이슈 페이지에서 “coder”라는 지정 태그를 단순히 추가
- 태그가 추가되자 자동으로 원격에서 코딩 에이전트 인스턴스가 생성되어 작업 시작

### 코딩 에이전트 오케스트레이션을 위한 인프라로 Workspaces by Coder를 활용함

- 사용 툴은 **Coder 플랫폼의 Workspaces**라는 무료·오픈소스 솔루션임
- Workspaces는 실제 코드 생성 에이전트가 아니며, 다수의 코딩 에이전트(예: Claude 등)를 원격에서 효율적으로 관리·오케스트레이션하는 역할
- 여러 명의 팀원이 이 인프라를 동시에 사용할 수 있음

### 모든 코딩 작업이 로컬 대신 VPS(가상 프라이빗 서버)에서 이뤄졌음

- 본인은 Workspaces를 직접 VPS에 셀프호스팅
- 작업자는 자신의 컴퓨터를 일절 활용하지 않고도 원격 환경 내에서만 이슈 처리가 가능

### Workspaces UI에서 실시간으로 에이전트 작업 현황을 확인할 수 있음

- Workspaces의 사용자 인터페이스에서 각 태스크가 어떻게 등록 및 진행되는지 확인 가능
- 데모에서 실제로 태스크 목록에 새로운 작업이 추가되는 모습을 보여줌
- 각 작업은 관련된 GitHub 이슈에 자동 코멘트를 남겨 실시간 링크를 제공

### 코딩 에이전트(Cloud Code)는 별도의 환경을 자동 생성해 병렬로 작업을 진행함

- 원격 환경에서 에이전트가 실행되기에, 여러 개의 이슈와 작업이 동시에 진행될 수 있음
- 각 에이전트 세션은 고립된 환경에서 구동되어 서로 영향을 주지 않음
- “수십 개의 이슈를 동시에 병렬로 작업 가능하다”고 언급

### GitHub 이슈에서 자동으로 풀 리퀘스트가 생성되는 과정을 보여줌

- 에이전트가 지정 이슈를 해결하면 곧바로 자동으로 해당 이슈에 대한 풀 리퀘스트를 생성
- 사용자는 만들어진 풀 리퀘스트를 확인하고, 리뷰하거나 병합할 수 있음

### Workspaces는 코딩 에이전트가 아닌, 에이전트 인프라 자체임을 명확히 구별함

- 시청자가 혼동하지 않도록, “Workspaces는 에이전트가 아니라, 에이전트를 관리하는 인프라”임을 반복 강조
- 실제 코딩 작업은 Claude Code와 같은 코딩 에이전트가 수행

### 로컬 환경 간섭 없이 완전한 클라우드 기반 병렬 코딩 환경을 실현함

- 모든 작업이 완전히 분리되고, 어떠한 프로그램도 개인 컴퓨터에 설치할 필요 없음
- 같은 인프라 내에서 여러 팀원과 병렬 협업이 용이함

### 무료로 활용 가능한 Workspaces를 직접 사용해 볼 것을 적극 권장함

- Workspaces가 무료이며 오픈소스임을 영상 전체에서 강조
- 직접 사용 경험을 바탕으로, 링크를 영상 설명란에 안내하며 시도해볼 것을 권장함
