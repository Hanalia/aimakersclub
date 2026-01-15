---
author: AI Makers Club
pubDatetime: 2026-01-15T23:45:35.266Z
title: "Stacked Diffs Changed How I Reviewed Code with AI"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 AI 코드 리뷰가 매우 강력하며, 현대 코드 검증 과정에서 필수적이라고 강조함 기존 풀 리퀘스트(PR)는 크게 변경사항을 만들어 승인을 기다린 후 또다시 작업하는 반복적"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Stacked Diffs Changed How I Reviewed Code with AI](https://www.youtube.com/shorts/IRWjtlpNUCU)  
**채널명:** Cole Medin

## *스택드 디프(차등 변화) 방식이 AI 코드 리뷰 효율을 혁신적으로 높임* 핵심 요약

- 이 영상은 AI 코드 리뷰가 매우 강력하며, 현대 코드 검증 과정에서 필수적이라고 강조함
- 기존 풀 리퀘스트(PR)는 크게 변경사항을 만들어 승인을 기다린 후 또다시 작업하는 반복적인 과정을 가짐
- 반면, "스택드 디프(Stacked Diffs)" 방식은 전체 기능을 작은 변화 단위의 연쇄로 쪼개어 순차적으로 작업이 이어지도록 설계됨
- 각 디프(변경)는 이전 변경 위에 쌓이고, 각 단계마다 대기 없이 작업을 즉시 이어갈 수 있음
- 이 방식 덕분에 AI는 각 단계별 PR에 집중해 더욱 정밀한 피드백을 줄 수 있고, 작은 단위의 리뷰가 쉬워짐
- "Graphite"라는 도구가 스택드 디프 작업에 최적화되어, CLI(Command Line Interface)와 대시보드, AI 코드 리뷰 기능을 모두 제공함
- Graphite 플랫폼의 데모를 통해 첫 변경 생성, PR 생성, PR을 차례대로 쌓아 올리는 전 과정을 손쉽게 체험 가능함
- 3개의 PR을 직접 커맨드라인에서 연속적으로 만들고, Graphite 대시보드상에서 각 PR을 관리, 리뷰, 병합할 수 있음을 시연함
- AI(여기선 Claude 코드)가 각 PR을 개별적으로 리뷰하고, 한 번에 많은 코드를 검토하는 것보다 높은 효율과 품질을 달성함
- Graphite 덕분에 GitHub 리포지토리에 일일이 들어가지 않아도 전체 PR 흐름을 직관적으로 관리・병합할 수 있음

---

## 세부 요약 - 주제별 정리

### AI 코드 리뷰는 필수 도구가 되었고 큰 효과를 발휘함

- AI 코드 리뷰는 매우 강력한 도구로 자리 잡았으며, 코드 검증 프로세스에서 반드시 사용해야 할 필수 요소로 언급됨
- AI 도구의 활용으로 코드 품질 향상 및 리뷰 효율성 증대가 기대됨
- 영상 초반에 "AI code reviews are incredibly powerful and I do consider them a must as a part of my validation."이라는 직접 인용
- 저자는 AI 리뷰를 일상적인 개발 플로우에 적극적으로 결합하고 있음

### 전통적 풀 리퀘스트(One-Shot PR)는 작업 대기와 반복을 유발함

- 기존 방식에서는 큰 변경사항을 PR로 묶어 작성, 제출 후 리뷰 승인을 대기함
- 승인 이전에는 추가 작업을 진행할 수 없어 생산성이 제한됨
- 변경, 승인, 반복이라는 선형적이고 느린 개발 흐름이 일반적임

### 스택드 디프 방식은 작은 단계별 변화로 작업을 분할하여 효율을 극대화함

- "Stacked Diffs"는 하나의 큰 작업을 여러 개의 작은, 순차적으로 누적되는 변경(PR) 단위로 쪼갬
- 각 스택드 디프는 이전 PR 위에서 작동하므로, 작업을 병렬적으로 혹은 연속적으로 진행 가능
- 작업이 지연·대기 없이 즉시 다음 작업으로 넘어갈 수 있어 생산성이 비약적으로 올라감
- 각 단계별 변경사항이 명확하게 구분되어 추적, 수정, 리뷰가 쉬워짐

### AI 기반 코드 리뷰는 스택드 디프와 결합할 때 비약적으로 향상됨

- 스택드 디프 구조는 AI가 각 단계의 PR에 ‘특화된’ 리뷰를 가능하게 해 세밀한 피드백을 제공함
- 모든 변경사항을 한꺼번에 리뷰(One Massive PR)하는 것과 달리, 각 작은 변경마다 독립적으로 AI의 검토가 이루어짐
- AI가 더욱 집중적이고, 문맥 파악이 쉬운 PR 리뷰 결과를 제공하게 됨
- 이로 인해 코드 품질과 리뷰 속도 모두에서 극적인 개선이 이루어짐

### Graphite 플랫폼은 스택드 디프 관리를 가장 쉽게 해 주는 도구임

- "Graphite"라는 서비스가 스택드 디프 작업에 특화된 CLI와 대시보드를 제공함
- CLI는 GitHub CLI와 유사하나, 스택드 디프에 최적화된 명령 체계 구현
- 대시보드는 모든 스택드 PR의 상태, 병합, 리뷰 현황을 직관적으로 한 곳에서 볼 수 있게 설계됨
- AI 코드 도우미(코딩 어시스턴트) 기능이 내장되어, 각 PR의 코드 리뷰 과정을 자동화함

### 사용자는 Graphite의 데모를 통해 스택드 디프를 단계별로 쉽게 익힐 수 있었음

- 회원가입 후 보여주는 공식 데모에서 첫 스택드 디프 생성을 안내해 줌
- 첫 변경사항을 커밋 및 PR 생성, 이후 그 PR에 추가적으로 연속적인 PR을 쌓아나가는 과정을 친절하게 가이드함
- CLI 상에서 세 번에 걸친 PR 생성 실습(3개 PR이 하나의 스택을 이루도록 진행)
- 이러한 경험이 “직관적(Intuitive)”이고, 처음 접한 사람에게도 이해가 쉽다고 언급함

### Graphite 대시보드는 PR 관리와 AI 기반 리뷰・병합을 올인원으로 제공함

- 여러 스택드 PR을 대시보드에서 한눈에 관리하며, 각 PR별 상세 정보와 상태 확인 가능
- “Graphite Agent”라는 도우미를 통해 각 PR별 AI 리뷰를 받을 수 있음
- GitHub 리포지토리까지 들어가지 않고, 대시보드에서 직접 리뷰, 병합 작업을 일괄적으로 처리할 수 있음
- 각 Incremental PR마다 명확히 구분되는 기능 브랜치로 구성, 마지막에는 메인 브랜치로 병합

### 실제 AI 리뷰 결과는 큰 PR을 한번에 리뷰할 때보다 획기적으로 나아짐

- Claude Code(생성형 AI)가 각각의 3개 PR을 독립적으로 분석・리뷰하도록 시연함
- 각 변경사항 단위별로 세밀하고 문맥에 맞는 피드백을 획득
- “The results that you get from this compared to reviewing one massive pull request is just insane.”라는 직접 인용을 통해, 작은 PR단위 리뷰의 압도적인 효과를 강조
- 이 방식이 코드리뷰 품질 및 개발 전반에 큰 차이를 만들어냄

### 스택드 디프와 Graphite 활용으로 개발 워크플로우가 지능적으로 혁신됨

- 사실상 Git 기본 기능과 브랜치 구조를 그대로 가져가면서, 정교하게 분할된 개발 방식만으로 효율을 극대화함
- 모든 Incremental Change는 Feature Branch에서 분화되고, 직렬로 머지되는 구조
- 작업자의 의도와 흐름이 깔끔하게 관리되고, AI 평가로 품질 보장도 쉬워짐
- 작업 흐름이 일관되고, 통합(메인 브랜치 병합) 시점도 조정 가능

### 요약 및 Graphite 협력에 대한 언급으로 마무리함

- 본 영상에서는 스택드 디프의 전체 구조, 이점, 사용법, 그리고 Graphite 도구의 실제 적용법을 모두 시연함
- 마지막에 더 자세한 사용 방법은 영상 설명란 링크에서 볼 수 있다고 안내
- “Thanks to Graphite as well for working with me on this”라는 인사로 마무리하며, Graphite와의 협업 경험을 강조함
