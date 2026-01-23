---
author: AI Makers Club
pubDatetime: 2026-01-23T23:45:52.065Z
title: "Stacked Diffs Changed How I Reviewed Code with AI"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"Stacked Diffs Changed How I Reviewed Code with AI\"로, Stacked Diffs 기법이 AI 코드 리뷰의 효율성을 어떻게 극대"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Stacked Diffs Changed How I Reviewed Code with AI](https://www.youtube.com/shorts/IRWjtlpNUCU)  
**채널명:** Cole Medin

## *Stacked Diffs가 어떻게 AI 코드 리뷰 방식을 바꿨는가* 핵심 요약

- 영상 제목은 "Stacked Diffs Changed How I Reviewed Code with AI"로, Stacked Diffs 기법이 AI 코드 리뷰의 효율성을 어떻게 극대화하는지 설명함
- 전통적인 풀 리퀘스트(Pull Requests) 방식은 기능 단위별로 변경하고, 각 단계마다 승인을 기다려야 함
- Stacked Diffs는 크고 복잡한 기능도 작은 변화(인크리멘털 체인지)들로 나누어 서로 쌓아올리는 프로세스를 제안
- 각 변화가 작아서 AI가 각 단계별로 더욱 집중적이고 정밀하게 코드 리뷰를 할 수 있음
- Stack Diffs에 최적화된 플랫폼 ‘Graphite’ 사용을 통해 이러한 워크플로우 실현 가능
- Graphite는 GitHub CLI와 유사한 명령행 도구와, 스택 형식의 풀 리퀘스트를 한눈에 관리할 수 있는 대시보드를 제공
- 대시보드 내에 내장된 AI 코딩 어시스턴트가 각 풀 리퀘스트 리뷰를 지원함
- 실제 예시로 3단계 Stacked Diff를 만들고 Graphite에서 관리·리뷰·머지하는 과정을 체험함
- 각 단계별 PR(풀 리퀘스트)을 AI(Claude 등)로 개별 리뷰 시, 하나의 대형 PR을 리뷰할 때보다 훨씬 효과적임을 강조함
- Graphite와의 협업을 통해 이 효율적인 코드 리뷰 및 워크플로우가 가능함을 보여줌

---

## 세부 요약 - 주제별 정리

### 전통적인 풀 리퀘스트 방식은 승인을 반복적으로 기다려 프로세스가 느려짐

- 기존의 코드 개발 워크플로우에서는, Pull Request(PR)를 생성 후 승인받을 때까지 기다려야만 다음 단계를 진행할 수 있음
- 하나의 큰 기능이나 변경을 적용하기 위해 여러 번의 대기 및 반복 작업이 발생
- 이러한 방식은 코드 리뷰의 병목 현상 및 협업 효율성 저하의 원인이 됨

### Stacked Diffs는 작은 인크리멘털 변경들을 순차적으로 쌓아 신속한 개발이 가능함

- Stacked Diffs 방법론은 전체 변경 사항을 세부적이고 작은 덩어리들로 분할하여 각 덩어리를 차례로 쌓아올리는 방식임
- 새로운 변경 사항을 기존 변경 위에 바로 추가할 수 있어, 각 단계마다 기다릴 필요 없음
- 각 변경(‘diff’)이 독립적이고, 다른 변경 위에 쉽게 쌓을 수 있도록 구조화되어 있음

### 각 작은 Diff마다 AI 코드 리뷰를 적용하면 피드백의 질과 초점이 극대화됨

- 각 Diff가 충분히 작고 단순해서 AI가 더 정확하게 맥락을 이해하고 개선점을 제안할 수 있음
- 큰 풀 리퀘스트 하나를 통째로 리뷰하는 것보다, 작은 단위로 쪼개 리뷰할 때 피드백이 더욱 구체적이고 실질적임
- AI 코드 리뷰가 “필수(validation 일환으로 반드시 필요)”하다고 영상 제작자는 언급

### Graphite 플랫폼은 Stacked Diff 워크플로우를 특별히 지원하도록 설계됨

- Graphite는 스택드 디프 작업을 쉽게 지원하도록 만든 플랫폼임
- GitHub CLI와 유사한 커맨드라인 툴을 제공함 (ex. pull request 생성, 브랜치 관리 등)
- 스택드 형식의 풀 리퀘스트들을 한 눈에 볼 수 있는 대시보드가 있음
- 대시보드 상에서 각 Diff과 PR에 대한 상태, 진척, 연결 구조를 직관적으로 확인하고 관리 가능함

### 사용자는 Graphite에서 실제로 첫 스택드 Diff를 만들고 자동 주도로 실습할 수 있음

- Graphite 가입 후 제공되는 데모를 따라가며, 첫 번째 스택드 Diff를 직접 만들어 보는 과정을 경험함
- 첫 변화(커밋)를 만들고 PR 생성 - Git 또는 GitHub CLI와 비슷한 방식
- 그 위에 연속해서 추가적인 변경(PR) 작성, 커맨드라인에서 이 스택 구조를 직접 확인
- 결과적으로, 총 3단계의 PR을 차례로 쌓아올림

### Graphite 대시보드를 통해 PR 생성부터 리뷰, 머지까지 전체 과정을 손쉽게 관리함

- 대시보드 내에서 각 PR별 현황(생성, 리뷰, 병합 등)을 모두 관리 가능
- Graphite Agent(내장 AI 코드리뷰 도우미)를 사용하여 각 PR별 AI 기반 리뷰 수행
- 대시보드에서 한 번에 전체 스택을 병합(Merge) 가능, GitHub 저장소 직접 접속 없이도 처리가능
- 저장소 내에서는 각 PR이 별도 브랜치로 관리되고, 타겟 브랜치(메인 등)로 병합됨

### “작은 변화+AI 코드 리뷰” 조합이 대형 PR 리뷰보다 월등히 효과적임을 실제로 비교 설명함

- Claude와 같은 AI 툴을 활용해, 3단계로 나뉜 각각의 PR을 모두 개별적으로 리뷰함
- 대형 PR 하나를 AI로 리뷰하는 것보다, 작은 단위로 나누면 AI가 더욱 세밀하게 피드백 제공
- 이 방식으로 얻는 결과(리뷰 품질, 효율성 등)가 “상상 이상”이라고 직접 언급

### 기존 Git 워크플로우 활용에 Graphite와 Stack Diff가 ‘지능형 확장’을 더해줌

- 실제 PR 생성 및 브랜치 전략은 친숙한 Git 워크플로우(피처 브랜치 → 인터 브랜치 머지 → 메인 브랜치 병합)와 유사
- “단순히 기존 Git을 좀 더 지능적으로 사용하는 방식”임을 강조
- 모든 변경사항을 체계적이고 안전하게 관리함

### 영상 하단 링크를 통해 Stacked Diffs를 실제로 어떻게 적용하는지 보다 자세히 확인 가능함

- 영상 설명란에 별도의 ‘How to’ 상세 영상 링크를 제공하여, Step-by-step 실습을 지원함

### Graphite와의 공식 협업을 통해 준비된 데모를 기반으로 증명 사례를 보여줌

- 영상 제작자는 Graphite와 직접 협업해 이 데모와 사례를 만든 점을 밝힘
- 실제 경험 기반의 시연과 함께, Stacked Diff와 Graphite 플랫폼의 실질적 장점(워크플로우 개선, AI 리뷰 고도화 등)을 전달함
