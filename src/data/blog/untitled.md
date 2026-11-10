---
author: AI Makers Club
pubDatetime: 2026-11-10T23:46:54.235Z
title: "Your Coding Agent Knows Your Code, But Not Your Actual App (Here's the Fix)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "코딩 에이전트(예: Claude Code, Codex, GitHub Copilot)는 리포지터리의 모든 파일을 읽을 수 있지만, 실제 애플리케이션의 전체 작동 방식(데이터 연동, "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your Coding Agent Knows Your Code, But Not Your Actual App (Here's the Fix)](https://www.youtube.com/shorts/EMIRXv2iE_Q)  
**채널명:** Cole Medin

## *당신의 코딩 에이전트는 코드만 알 뿐 실제 앱은 모른다 (해결 방법은?)* 핵심 요약

- 코딩 에이전트(예: Claude Code, Codex, GitHub Copilot)는 리포지터리의 모든 파일을 읽을 수 있지만, 실제 애플리케이션의 전체 작동 방식(데이터 연동, 의존성, 배포 현황, 로그 등)은 파악하지 못함
- 앱의 핵심 정보(데이터 모델, 배포 위치, 최근 장애 등)는 플랫폼 내에 분산되어 있어, 에이전트가 코드에서 이 정보를 직접 알 수 없음
- 이 한계를 해결하려면 에이전트가 애플리케이션의 전체 구조, 데이터, 의존성, 배포, 로그를 한 곳에서 확인할 수 있어야 함
- OutSystems라는 플랫폼은 이 모든 정보를 통합 제공하는 솔루션임
- OutSystems MCP(메타데이터 커넥티비티 플랫폼)를 통해 다양한 코딩 에이전트가 OutSystems 개발자 클라우드에 직접 연결 가능
- 이를 통해 에이전트가 애플리케이션의 구조, 데이터 모델, 화면, 비즈니스 로직, 역할, 의존성 등을 파악하고 작업 가능
- 에이전트는 Mentor라는 내장형 코딩 에이전트와 연동하여 앱을 직접 배포할 수 있음
- 문제 발생 시, 동일 세션에서 로그와 트레이스를 즉시 조회하고 원인 분석 가능
- 에이전트는 사용자와 동일 권한을 사용해 동작하므로 보안 위험 최소화
- OutSystems MCP는 개인용 무료 버전을 제공하며, 이미 사용하는 코딩 에이전트와 결합해 즉시 체험 가능

---

## 세부 요약 - 주제별 정리

### 코딩 에이전트는 모든 코드를 읽지만 실제 앱의 전체 구조와 환경 정보는 알지 못함

- Git 리포지터리에 있는 모든 파일을 코딩 에이전트(Claude Code, Codex, GitHub Copilot 등)는 분석할 수 있음
- 하지만 애플리케이션이 실제로 어떻게 동작하는지, 데이터가 어떻게 연결됐는지, 어디에 배포됐는지는 코드에 명확히 드러나지 않음
- "데이터 연결 방식, 실제 배포 위치, 의존성, 장애 기록 등" 중요한 운영 정보는 플랫폼 별도로 존재

### 애플리케이션의 핵심 정보는 코드 외부(플랫폼)에 분산되어 있음

- 데이터 모델, 의존성 관계, 배포 현황, 운영 로그 등은 소스코드 내부가 아니라 OutSystems와 같은 플랫폼 상에 기록됨
- 에이전트는 이러한 정보를 코드만 읽어서는 파악할 수 없음
- 예를 들어, 어떤 부분이 밤에 장애가 났는지 등 장애 정보도 코드가 아닌 플랫폼 로그에 저장

### 코딩 에이전트가 앱 전체 맥락을 통합적으로 파악할 필요가 있음

- 앱의 구조, 데이터 모델, 화면 구성, 비즈니스 로직, 역할, 의존성, 배포 내역, 최근 로그 등 모든 정보를 한 곳에서 확인하는 것이 중요
- 그래야만 코딩 에이전트가 실질적으로 앱의 전체적인 동작을 이해할 수 있음

### OutSystems는 앱 정보를 한 곳에서 제공해 이러한 한계를 극복함

- OutSystems 플랫폼은 데이터, 의존성, 배포 현황, 운영 로그 등 필수 정보를 한 시스템에 통합해 제공
- 메타데이터와 주요 실행 정보, 로깅까지 한 UI/시스템에서 접근 가능

### OutSystems MCP를 활용하면 주요 코딩 에이전트가 직접 클라우드에 접속할 수 있음

- OutSystems MCP(Metadata Connectivity Platform)을 통해, Claude Code, Codex, GitHub Copilot 등 별도의 코딩 에이전트가 OutSystems 개발자 클라우드에 직접 연결 가능
- 에이전트는 OutSystems 클라우드 API를 통해 앱 구조, 데이터 모델, 화면, 비즈니스 로직, 역할 등 상세 정보를 조회함

### 에이전트는 애플리케이션 실제 구성요소와 의존성을 즉시 검색 및 분석함

- 에이전트는 앱 내 실제 엔터티(데이터 구조), UI 화면, 비즈니스 로직, 사용자 역할, 각 컴포넌트의 상호 의존 구성을 세션 내에서 빠르게 파악
- 변경 전, 무엇이 무엇에 영향을 미치는지 명확히 분석

### Mentor(OutSystems 내장 에이전트)가 자동으로 앱 빌드 및 배포까지 처리함

- 에이전트는 분석 및 수정 작업 후 Mentor라는 OutSystems 내장 코딩 에이전트에 빌드/배포 단계까지 인계
- 전체 프로세스를 한 세션에서 연속적으로 진행 가능

### 문제 발생 시 로그 및 트레이스를 통해 원인 분석도 한 세션에서 가능함

- 배포 이후 장애나 문제 발생 시, 에이전트가 같은 세션에서 실시간으로 로그 및 트레이스(트러블슈팅 데이터)까지 불러와 원인 확인 가능
- 운영-관찰-수정의 전 과정을 통합 자동화

### 모든 에이전트 작업은 사용자 권한 내에서만 이루어지므로 보안성도 확보함

- 에이전트는 사용자가 OutSystems에서 보유한 권한만 행사할 수 있음
- 사용자가 접근 불가능한 기능/데이터는 에이전트에게도 제한 적용
- 보안 위험 최소화, 기업 보안 정책 준수 가능

### OutSystems MCP는 무료 개인용 버전을 즉시 제공하며, 기존 코딩 에이전트와 자유롭게 연동 가능함

- OutSystems MCP(개인용)는 무료로 제공, 별도의 비용 부담 없이 체험 가능
- 이미 사용 중인 코딩 에이전트(Claude Code, Codex, Copilot 등)와 즉시 연동 가능
- 영상 하단 설명란에 OutSystems 관련 링크 제공
