---
author: AI Makers Club
pubDatetime: 2026-10-23T23:46:42.562Z
title: "Your Coding Agent Wastes SO MANY Tokens Just Finding Code - Here's the Fix"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "코딩 에이전트의 주된 비용은 코드 작성이 아니라 원하는 코드를 찾는 과정에서 발생함 코딩 에이전트가 코드를 변경할 때, 관련 파일을 찾고 읽느라 많은 시간과 토큰을 소모 파일 검색"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your Coding Agent Wastes SO MANY Tokens Just Finding Code - Here's the Fix](https://www.youtube.com/shorts/oFPUUFLZJHQ)  
**채널명:** Cole Medin

## *코딩 에이전트가 코드를 찾는 데 쓸데없이 많은 토큰을 소모하며, Sonar Vortex가 이를 획기적으로 해결함* 핵심 요약

- 코딩 에이전트의 주된 비용은 코드 작성이 아니라 원하는 코드를 찾는 과정에서 발생함
- 코딩 에이전트가 코드를 변경할 때, 관련 파일을 찾고 읽느라 많은 시간과 토큰을 소모
- 파일 검색은 빠르고 저렴하지만, 파일 내용을 다 읽으면서 많은 콘텍스트와 토큰을 낭비함
- 검색 과정은 항상 추측에 기반하기 때문에, 관련된 코드가 엉뚱한 이름이면 변경 대상으로 인식하지 못함
- 코딩 에이전트가 실제로 해결해야 하는 핵심 질문은 "어떤 코드가 사용자의 요청에 관련 있는가?"임
- 현재의 코딩 에이전트는 이 질문에 직접적으로 답할 수 없으나, 이를 해결할 도구로 Sonar Vortex를 소개
- Sonar Vortex는 코드 내 클래스 구현, 함수 호출 관계, 반환값 등을 효율적으로 신속하게 파악 가능
- 기존 방식에서 8만 토큰 이상의 콘텍스트 소모가 필요했지만, Sonar Vortex 적용 후 동일 작업을 훨씬 적은 토큰으로 처리
- Sonar의 실험 결과, 리팩토링 작업에서 토큰 소모가 6~34%까지 절감됨
- Sonar Vortex는 Java, C#, JavaScript, TypeScript, Python, Rust 등 여러 언어를 지원하며, SonarQube Cloud의 Sonar Agent Essentials Add-on으로 제공됨

---

## 세부 요약 - 주제별 정리

### 코딩 에이전트의 주요 비용은 코드 작성이 아닌 관련 코드 탐색에서 발생함

- 대부분의 경우, 코딩 에이전트를 쓸 때 실제 비용의 상당 부분이 코드 작성이 아닌 코드 찾기에 들어감
- 사용자가 코드베이스 내에서 어떤 변경을 요청하면, 에이전트는 우선 수정해야 할 코드를 찾는 데 집중함
- 단순한 변경이 아닌 이상, 에이전트가 관련 파일 전체를 찾아 읽으며 적합성 검토에 많은 시간을 할애
- 이 과정은 코드 내용 파악 이전에 이미 비용이 발생하게 하고, 실질적인 수정은 그다음 단계임

### 파일 검색 그 자체보다 파일 읽기가 엄청난 토큰을 낭비하게 만듦

- 파일을 검색하는 과정은 굉장히 빠르고 비용도 거의 들지 않음
- 하지만 일단 검색 결과로 나온 파일들을 일일이 읽어야 하므로 많은 콘텍스트(토큰)를 사용해야 함
- 한 줄의 코드도 바꾸기 전에 이미 엄청난 리소스를 소모하게 됨

### 검색 기반 접근법의 한계로 인해 관련 코드 누락 문제가 자주 발생함

- 검색 자체는 항상 추측에 근거하기 때문에 코딩 에이전트가 모든 관련 부분을 찾는 데 실패할 수 있음
- 변경되어야 할 코드가 예상과 다르게 네이밍되어 있다면, 에이전트는 이를 인식하지 못해 누락 가능성 존재
- 결과적으로, 식별된 부분에 한정해서만 수정이 이루어져, 완전한 결과를 담보할 수 없음

### 코딩 에이전트가 실질적으로 답하려는 핵심질문은 "어떤 코드가 관련 있는가?"임

- 모든 과정의 본질은 "어떤 코드가 사용자의 변경 요구와 직결되는가?"라는 질문에 집중됨
- 기존 에이전트는 이에 직접 답을 주지 못함

### Sonar Vortex가 코딩 에이전트의 탐색과정 효율을 근본적으로 혁신함

- Sonar Vortex는 코드베이스에서 클래스 구현, 인터페이스, 함수 호출 관계 등의 정보를 직접적으로 질의하도록 설계됨
- "어떤 클래스가 이 인터페이스를 구현하고 있는가?", "누가 이 함수를 호출하는가?", "어디서 이 함수가 되돌려 불리는가?"와 같은 질문에 즉각적으로 답변 제공
- 질의 결과는 파일명, 라인 단위까지 신속하게 확인할 수 있음

### Sonar Vortex는 코드베이스 상시 분석과 초고속 업데이트로 실시간 활용이 가능함

- Sonar Vortex는 Sonar 플랫폼(이전부터 소개된 코드분석 도구)을 기반으로 동작
- Sonar Vortex가 생성하는 질의 그래프는 컴파일러나 Language Server 없이 로컬 컴퓨터에서 생성됨
- 코드에 변화가 생기면 질의 그래프가 1밀리초 이내에 자동 갱신됨
- 에이전트 실행 시점에 코드베이스가 컴파일되지 않은 경우에도 즉시 활용 가능

### Sonar Vortex 도입으로 토큰 사용량이 획기적으로 낮아짐

- 기존에는 코드 전체를 탐색하며 80,000 토큰 이상의 콘텍스트가 소모됨
- Sonar Vortex로 동일한 작업을 처리할 때, 후속 프롬프트(추가 콘텍스트 요청)까지 포함해도 훨씬 적은 토큰만 사용함
- 이는 코딩 에이전트 운용의 효율을 크게 높임을 시연

### Sonar의 공식 실험에서 리팩토링 작업 시 6~34%의 토큰 절감 효과 입증

- Sonar가 6가지 리팩토링 작업을 10번 반복하는 연구 수행
- 실험 결과, Sonar Vortex를 활용할 때 토큰 사용량이 최소 6% ~ 최대 34%까지 절감됨
- 수치로 검증된 개선 효과

### Sonar Vortex는 Java, C#, JavaScript, TypeScript, Python, Rust 등 다양한 언어를 즉시 지원함

- 현재 Sonar Vortex가 지원하는 언어: Java, C#, JavaScript, TypeScript, Python, Rust
- SonarQube Cloud에서 Sonar Agent Essentials Add-on을 통해서 사용할 수 있음

### Sonar와 본 영상의 협업 및 Sonar Vortex 상세 정보 안내

- 해당 영상은 Sonar와의 협업으로 제작됨을 밝힘
- Sonar Vortex 관련 링크와 추가 정보는 영상 설명란에 게재되어 있음
