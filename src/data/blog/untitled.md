---
author: AI Makers Club
pubDatetime: 2026-03-14T23:45:51.719Z
title: "Build BEAUTIFUL Diagrams with Claude Code (Full Workflow)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 Claude Code와 같은 코딩 에이전트가 시각적 설명에 약하다는 문제에서 출발함 직접 개발한 워크플로우와 ‘Excalra Diagram Skill’을 통해 코딩 에이전트"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Build BEAUTIFUL Diagrams with Claude Code (Full Workflow)](https://www.youtube.com/shorts/yq8_Q5z-Geo)  
**채널명:** Cole Medin

## *Claude 코드로 아름다운 다이어그램을 만드는 전체 워크플로우* 핵심 요약

- 영상은 Claude Code와 같은 코딩 에이전트가 시각적 설명에 약하다는 문제에서 출발함
- 직접 개발한 워크플로우와 ‘Excalra Diagram Skill’을 통해 코딩 에이전트가 아름답고 실용적인 다이어그램 생성을 도울 수 있음을 시연
- ‘주된 명령어 세트(primary instruction set)’를 통해 Claude Code가 시각적으로 논증(visual argumentation)할 수 있도록 지도함
- 다이어그램을 JSON으로 생성할 뿐만 아니라, 결과물을 렌더링 후 스크린샷으로 검증하여 PNG 이미지를 확인, 자동으로 불완전한 부분을 반복적으로 개선함
- Excalra Diagram Skill의 자가 검증(self-validation)을 통해 코딩 에이전트의 시각적 약점을 보완하고 결과의 완성도를 높임
- 사용자는 코딩 에이전트에게 ‘Excalra 다이어그램 스킬’ 설치와 세팅도 쉽게 요청할 수 있음
- 프로세스 자동화로, 사용자는 단순히 원하는 다이어그램을 요청하면 맞춤형 색상과 브랜드 스타일로 결과를 빠르게 얻을 수 있음
- 이 스킬의 핵심은 구조와 라벨링으로 전체 개념을 명확히 설명하는 시각적 논증에 중점 둠
- 리포지토리를 복제(clone)하여 PDF, 코드베이스 등 다양한 형태의 다이어그램을 빠르게 생성 가능
- 이를 통해 매주 수 시간의 작업 시간을 절약할 수 있음

---

## 세부 요약 - 주제별 정리

### 코딩 에이전트는 시각적인 작업에 취약함을 강조하며 문제를 진단함

- Claude Code 등 기존 코딩 에이전트는 주로 코드나 텍스트 결과에 강점이 있으나, 시각적 설명이나 다이어그램 생성에는 한계가 있음
- 복잡한 시각 자료를 생성하려면 많은 프롬프트와 추가적인 능력이 요구됨
- 직접적인 시각화 지원이 미약하여 효율적으로 의사소통하거나 설명하기에 불편함이 존재함

### Excalra Diagram Skill 도입으로 코딩 에이전트의 시각적 설명 능력을 강화함

- 직접 워크플로우를 개발하고, 이를 재사용 가능한 ‘스킬(skill)’로 패키징함
- Claude Code 및 다른 코딩 에이전트에 해당 스킬을 적용할 수 있도록 설계됨
- 스킬 적용 후, 다양한 아름답고 실용적인 다이어그램을 빠르고 쉽게 생성 가능해짐

### 시각적 논증을 위한 명령어 세트가 핵심 가이드 역할을 함

- ‘주된 명령어 세트(primary instruction set)’가 코딩 에이전트에게 시각적으로 논증하는 방식을 가르침
- 이 명령어 세트를 통해 Claude Code가 Excal 다이어그램을 위한 JSON 파일을 효율적으로 생성함

### 다이어그램 자동 검증-반복 개선 워크플로우로 완성도를 높임

- 다이어그램을 코드로 생성한 후, 실제로 렌더링하여 결과를 이미지(예: PNG)로 저장함
- 자동으로 이미지 형태의 다이어그램을 확인하고, 불완전하거나 원하는 스타일이 아닐 경우 반복적으로 수정
- 이 과정이 포함된 자가 검증(self-validation) 덕분에, 훨씬 더 신뢰할 수 있는 시각적 결과물을 얻을 수 있음

### Excalra Diagram Skill 세팅은 코딩 에이전트가 스스로 진행할 수 있음

- 사용자가 바로 코딩 에이전트에게 ‘Excalra 다이어그램 스킬’ 설치를 요청할 수 있음
- 에이전트가 README 등의 매뉴얼을 스스로 읽고, 설정을 자동화함
- 사용자는 남은 과정을 기다리기만 하면 되고, 스킬이 준비되면 바로 다이어그램 요청 가능

### 브랜딩과 스타일 맞춤도 사용자의 요청에 따라 쉽게 구현됨

- 코딩 에이전트에게 원하는 색상/브랜드 스타일로 다이어그램 생성 요청이 가능함
- ‘단순한 데모(demo)’에서 직접 보여주었듯이, 개인의 취향이나 브랜드에 맞는 시각화가 쉬움

### ‘블록 나열식’이 아닌 개념 구조화 및 라벨링 중심의 시각적 프롬프트 전략을 적용함

- 기존 기본 다이어그램 생성은 다양성 없이 ‘블록(block)’ 위주로 단순화됨
- 이 스킬에서는 각각의 구조와 라벨이 전체 개념을 논리적으로 이해시키도록 중점 둠
- “단순 블록 나열이 아닌 시각적 논증”이라는 프롬프트 철학을 명확히 구축

### Excalra Diagram Skill의 활용 범위가 넓고 적용 사례가 다양함

- 리포지토리 복제(clone) 및 스킬 도입 후, PDF 문서 구조, 코드베이스 등 다양한 입력에 다이어그램 적용 가능
- 코딩 에이전트가 자동으로 분석 및 시각화 작업을 진행함

### 큰 시간 절약 효과와 실제 워크플로우 상의 이점을 체감할 수 있음

- Excalra Diagram Skill을 도입한 후, 사용자 기준으로 매주 수 시간의 반복적 시각화 작업을 아낌
- 초안 생성(starting point generation)에 있어 현저한 효율성 향상

### 영상 전체 메시지는 누구나 리포지토리 복제 후 바로 시도 가능하며, 새로운 다이어그램 제작 경험을 제공한다는 점을 강조함

- 시청자들에게 리포지토리 복제와 스킬 사용을 직접 권유함
- 결과물의 실용성과 자동화 효율성을 직접 체험해볼 것을 독려함
