---
author: AI Makers Club
pubDatetime: 2026-01-28T08:19:57.391Z
title: "Stacked Diffs Changed How I Reviewed Code with AI"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "AI 기반 코드 리뷰는 개발 과정에서 매우 강력하며, 필수적인 검증 단계로 간주됨 전통적 PR(Pull Request) 방식은 변경 후 승인 대기 및 반복의 불편함이 있음 스택드 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Stacked Diffs Changed How I Reviewed Code with AI](https://www.youtube.com/shorts/IRWjtlpNUCU)  
**채널명:** Cole Medin

## *스택드 디프(차곡차곡 변경) 방식은 AI 기반 코드 리뷰 효율성을 극대화함* 핵심 요약

- AI 기반 코드 리뷰는 개발 과정에서 매우 강력하며, 필수적인 검증 단계로 간주됨
- 전통적 PR(Pull Request) 방식은 변경 후 승인 대기 및 반복의 불편함이 있음
- 스택드 디프(차곡차곡 변경) 방식은 작은 단위의 변경을 층층이 쌓아 나가며 전체 기능을 완성함
- 각 변경 사항이 쌓이므로 중간승인 없이 연속적으로 작업 진행이 가능
- 이 방식은 AI 코드 리뷰에 최적화되어 각 변경마다 집중적이고 세밀한 피드백을 받을 수 있음
- 'Graphite' 플랫폼이 스택드 디프 작업에 최적화되어 있으며, 전용 CLI와 대시보드, AI 코드 어시스턴트 기능을 제공함
- Graphite의 등록 및 튜토리얼 과정을 통해 초보자도 직관적으로 첫 스택드 디프를 생성하고 관리하는 방법을 습득할 수 있음
- 각 피처 브랜치 및 PR을 계층적으로 쌓은 후, 모든 작업 PR을 메인 브랜치에 한 번에 머지하는 구조임
- Claude(AI 툴)로 각 PR을 개별적으로 리뷰했을 때, 대형 PR 한 번 리뷰보다 훨씬 우수한 결과를 얻음
- 영상에는 관련 예시, 툴 명칭, 도구 사용 과정 등이 구체적으로 담겨 있음
- 끝으로 모든 과정은 Graphite와의 협업을 통해 시연되었으며, 추가 설명 영상 링크가 제공됨

## 세부 요약 - 주제별 정리

### AI 기반 코드 리뷰는 개발 과정의 필수 프로세스임을 강조함

- AI를 활용한 코드 리뷰는 단순 자동화가 아닌, 신뢰할 만한 검증 단계로 활용되고 있음
- 영상에서 "AI code reviews are incredibly powerful and I do consider them a must as a part of my validation."이라는 멘트가 등장함
- AI 기반 코드 리뷰가 실제 현업에서 점점 표준화되고 있음을 시사함

### 전통적 PR 방식은 단일 변경 승인 대기 등으로 비효율이 있음

- 기존 PR 방식에서는 한 번에 큰 변경을 만들고, 승인받을 때까지 대기해야 함
- 이 과정은 개발 속도를 저해하고, 변경사항이 크면 리뷰 품질도 저하될 수 있음
- 승인 후에 추가 작업이 반복되어, 전체 기능 개발이 루프식으로 이루어짐

### 스택드 디프는 여러 개의 작은 변경을 계층적 구조로 쌓으며 대기 없이 진행 가능함

- 'Stacked Diffs' 방식은 작은 단위의 변경(diff/pull request)을 여러 개 만든 뒤, 서로 위에 쌓으며 전체 기능을 완성함
- 각 단계별 PR마다 승인을 기다릴 필요 없이, 연속적으로 작업과 PR을 진행할 수 있음
- 개발자가 작업 단계를 세분화함으로써 각 단계에서 필요한 피드백을 신속하게 받을 수 있음

### 작은 단위 변경마다 AI 리뷰를 적용해 수정 효과와 집중도를 높임

- 스택드 디프 방식은 각 변경(diff)별로 AI가 집중적으로 리뷰할 수 있는 환경을 제공함
- "We're able to get super focused feedback on each layer, each one of our diffs."라는 설명이 있음
- 대형 PR 한 번 리뷰보다는, 작은 단위별 리뷰가 품질 향상 및 코드 안전성에 유리함
- Claude와 같은 AI 코딩 어시스턴트가 활용됨

### Graphite 플랫폼은 스택드 디프 작업을 위한 맞춤형 도구와 환경을 제공함

- Graphite는 스택드 디프에 특화된 CLI(Command Line Interface) 툴을 제공
- 이 툴은 GitHub CLI와 유사하지만, 스택드 디프 전용 기능이 포함됨
- 별도의 웹 대시보드가 있어 전체 stack, 브랜치, PR, 병합 상태를 한눈에 관리할 수 있음
- 대시보드 내에는 AI 코드 어시스턴트가 내장되어 PR 리뷰 지원 제공

### Graphite의 튜토리얼 및 첫 사용 경험이 매우 직관적으로 안내됨

- 영상 제작자가 Graphite에 처음 가입할 때 데모 튜토리얼을 경험함
- 튜토리얼은 첫 스택드 디프 생성부터 PR 발행, 계층 구조 관리까지 절차를 순차적으로 안내
- Git 혹은 GitHub CLI 사용 경험이 있다면, Graphite 사용법이 익숙하게 느껴짐

### 계층적으로 PR을 쌓고 이를 한 번에 메인 브랜치에 병합함으로써 워크플로우가 최적화됨

- 실제 영상 예시에서는 3개 연속 PR을 만든 다음, 각 PR이 전 단계 위에 쌓이는 구조를 시연함
- 각 PR은 피처 브랜치에서 진행되며, 서로 머지된 뒤 마지막에 메인(main) 브랜치에 통합됨
- Graphite 대시보드는 각 PR의 상태, 머지, 리뷰 등을 간편히 처리하게 디자인됨
- "I can manage each pull request here. I can use the graphite agent to help me review this PR."

### 기존 Git 워크플로우와 유사하지만, 지능적으로 변경의 각 단계를 구조화함

- 각 변경(diff)는 Git 브랜치 기반으로 동작해, 기존 Git 사용자가 쉽게 이해할 수 있음
- 표준적인 PR과 브랜치 전략을 스택드 디프에 맞게 응용함
- 실제 코드 저장소에서 작업 시, 각 단계를 분리해 관리하고 있으나, 메인 브랜치 병합은 전체 PR 완료 후 한 번에 처리

### AI(CLAUDE 등)를 통한 각 단계별 리뷰 결과가 대형 PR 리뷰보다 현저하게 뛰어남

- 제작자는 Claude(Anthropic의 AI 코딩 어시스턴트)가 각 Stack Diff별로 PR을 리뷰하도록 셋업함
- 동일한 양의 변경사항을 기존 "대형 PR 한 번 리뷰" 방식과 비교해본 결과, 소규모 PR별 개별 리뷰의 품질과 신속성이 비교할 수 없이 우수하다고 언급
- "The results that you get from this compared to reviewing one massive pull request is just insane."라는 피드백 포함

### 영상 내 구체 예시, 플랫폼 시연, 그리고 추가 학습 리소스가 순차적으로 안내됨

- 영상 말미에 Graphite 플랫폼 활용 전체 과정을 캡처하며, 구체적인 커맨드 입력 화면과 대시보드 장면이 함께 제시됨
- 추가로, 영상 설명란에 Stack Diff 실제 적용법을 자세히 설명하는 추가 영상 링크가 제공됨
- 본 영상은 Graphite와의 협업을 통해 기획 및 시연되었음을 명시함
