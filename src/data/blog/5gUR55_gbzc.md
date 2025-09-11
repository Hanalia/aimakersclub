---
author: AI Makers Club
pubDatetime: 2025-09-11T08:18:52.113Z
title: "This New Protocol Will Change AI Coding Forever (ACP)"
slug: 5gUR55_gbzc
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Zed 코드 에디터에서 새롭게 도입된 ACP(Agent Client Protocol)는 AI 코딩 도구(코딩 에이전트)와 코드 에디터를 연결하는 표준 프로토콜로 발표됨 ACP는 코"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/5gUR55_gbzc/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [This New Protocol Will Change AI Coding Forever (ACP)](https://www.youtube.com/watch?v=5gUR55_gbzc)  
**채널명:** Cole Medin

## *AI 코딩의 판도를 바꿀 새로운 프로토콜, ACP(Agent Client Protocol)* 핵심 요약

- Zed 코드 에디터에서 새롭게 도입된 ACP(Agent Client Protocol)는 AI 코딩 도구(코딩 에이전트)와 코드 에디터를 연결하는 표준 프로토콜로 발표됨
- ACP는 코드 에디터와 코딩 어시스턴트(클라우드 코드, Gemini CLI 등) 간의 실시간 상호작용·교체 및 병렬 실행을 간편하게 만들어줌
- Zed의 ACP 통합(베타)은 Gemini CLI(직접 지원), Cloud Code(어댑터 경유), 커스텀 에이전트와의 연동을 시연함
- 사용자는 Zed 에이전트 패널에서 다양한 코딩 어시스턴트 스레드를 클릭 한 번으로 실행·전환 가능
- ACP는 변경사항 라이브 반영, 변경 승인/거부, 피드백 제공 등 실시간 개발 경험 대폭 개선을 제공
- 프로토콜 구조는 LSP, MCP 등 기존 기술에서 영감을 받아 JSON-RPC 및 작은 명령 집합으로 설계됨
- 제3자가 직접 커스텀 코딩 에이전트를 만들어 Zed 등 다양한 에디터와 연결할 수 있는 매커니즘을 상세히 예시로 설명
- Cloud Code는 직접 ACP 통합이 아니며, 간단한 메시지 변환 어댑터(600줄 코드)를 통해 연결, 확장성 강점 강조
- 오픈소스 프로젝트 Archon(코딩 어시스턴트 통합 지휘센터)과 ACP의 연동 가능성, 다양한 에이전트 병렬 관리 비전 제시
- ACP 기반으로, 향후 VS Code 등 여러 코드 에디터와 다양한 코딩 어시스턴트 간 혁신적인 연동과 워크플로우 확장 기대

---

## 세부 요약 - 주제별 정리

### Zed는 ACP를 도입하며 AI 코딩 도구와 에디터 간 자유로운 연결을 현실화함

- Zed가 새롭게 발표한 ACP(Agent Client Protocol)는 코드 에디터와 다양한 AI 코딩 어시스턴트(앱)를 연결하는 표준 프로토콜임
- 기존에는 Cloud Code 등 특정 코딩 어시스턴트별로 1:1 통합이 필요했으나, ACP는 모든 어시스턴트-에디터 간 연결을 표준화
- VS Code, Windsurf, Cursor 등 메이저 코드 에디터들과의 향후 확장성도 기대됨
- 사용자는 하나의 IDE(Zed) 안에서 다양한 AI 코딩 어시스턴트를 실행, 전환, 병행관리 가능
- ACP 덕분에 선택지가 다양해지는 현 상황에 빠른 발맞춤이 가능해졌다고 강조

### Zed에서 ACP를 활용하여 Gemini CLI·Cloud Code 양자 실행 및 전환이 한층 쉬워짐

- Zed 에디터 화면에서 에이전트 패널을 열고, + 버튼 클릭으로 새 Gemini CLI/Cloud Code/커스텀 에이전트 스레드를 시작 가능
- 인증(특히 Gemini CLI)은 에디터 내에서 바로 진행되어 복잡한 외부 설정 필요 없음
- Cloud Code는 어댑터를 통해, Gemini CLI는 직접 ACP로 통합되어 작동
- 사용자는 버튼 한 번만으로 Gemini CLI와 Cloud Code 스레드를 자유롭게 전환
- 각 에이전트별로 실시간 코드 변경, 승인/거부 등이 동일한 경험으로 제공됨

### 실시간 업데이트, 변경 수락/거부 등 개발자 경험이 대폭 개선됨

- 에이전트가 코드에 변경을 제안하면 IDE에서 라이브로 해당 변경사항이 반영되고, 사용자가 수락 혹은 거절 가능
- 변경 거부 시 피드백 입력도 지원, 기존 Windsurf, Cursor에서 했던 번거로운 Git revert 없이 처리 가능
- 각종 Slash 명령어, @mention 파일 등 네이티브 기능들이 그대로 동작하며, 워크플로우의 유연성 보장
- 이런 피드백 루프 덕분에 기존 대비 개발 효율성과 만족도가 크다고 언급

### ACP는 LSP 및 MCP 등 기존 성공적 프로토콜을 참조하여 높은 호환성과 단순함을 양립함

- ACP는 10여 년 전 개발된 LSP(Language Server Protocol), MCP(Modular Client Protocol)에서 구조적 영감을 받음
- JSON-RPC 기반의 통신 체계로, 소수의 명확한 명령 집합(세션 생성, 프롬프트 전송, 변경 요청 등)만 정의
- 향후 에이전트와 에디터 양방향 확장성이 뛰어남
- 실제 메시지는 세션 생성(손잡이), 프롬프트 입력, 도구 호출, 텍스트/파일 업데이트 등 최소한의 구조로 설계
- 이미 여러 에디터/어시스턴트에서 적용되며 상호 호환성 입증

### 커스텀 코딩 에이전트를 ACP 기반으로 누구나 직접 개발하여 연결하는 과정이 구체적으로 설명됨

- GitHub에 TypeScript로 작성된 ACP 커스텀 에이전트 예제가 제공됨(직접 다운로드/설치 시연)
- initialize (초기화), 세션 생성, 프롬프트 입력 등 단계별 함수 분리
- 실제 데모는 LLM 없이 단순히 하드코딩 메시지(“파일을 읽겠습니다”, “내용을 바꾸겠습니다”)를 ACP JSON 포맷으로 전달
- Zed 설정에서 외부 에이전트로 경로 입력만 하면 Gemini CLI, Cloud Code, 커스텀 에이전트를 병렬 관리 가능
- 복잡한 인터페이스 작성 없이 단순 TypeScript 파일만으로 확장 가능한 구조 강조

### Cloud Code와 Zed의 연결은 600줄의 간결한 메시지 변환 어댑터로 구현됨

- Cloud Code는 아직 직접적으로 ACP를 지원하지 않음
- Zed는 cloud code SDK 메시지 → ACP JSON 메시지로 변환하는 간단한 어댑터(에이전트)를 제작(전체 약 600줄 코드)
- 각 메시지 종류(텍스트, 툴 호출 등)별 변환 함수로 핵심 데이터만 추출 및 매핑
- 메시지 형식 통일만으로 다양한 에이전트와의 통합 가능성 확보
- 이 구조 덕분에 향후 새로운 어시스턴트도 쉽게 ACP에 편입 가능

### 오픈소스 Archon 프로젝트는 ACP 덕분에 다양한 AI 코딩 어시스턴트와의 통합 비전을 실현 중임

- Archon: 다양한 AI 코딩 어시스턴트를 한군데에서 관리하는 오픈소스 커맨드 센터 프로젝트
- 기존에는 코딩 어시스턴트별로 별도 통합 코드를 짜야 했으나, ACP 표준화로 일관된 인터페이스 제공 가능
- 개발자 Raasmus과 협력해 ACP 기반 Archon-Cloud Code 연동 Proof of Concept 시연
- 한 프로젝트(디렉터리)에서 여러 에이전트를 동시에 구동, 각각의 작업(chats, sub-agent 분기)을 GUI로 관리
- 지식 베이스, MCP 서버, Git 레포지터리 등 다양한 맥락 정보 제공→자동화/오프로드(예, PR 생성 후 리뷰) 워크플로우 구현

### ACP의 확장성으로 VS Code·Cursor 등 수많은 에디터와 다양한 에이전트가 통합될 전망임

- 현재는 Zed가 주력 ACP 통합 IDE이지만, 향후 VS Code, Cursor 등 메이저 에디터에서도 ACP 지원 가능성 높음
- Claude, Gemini CLI, Devon, Cursor Agent 등 다양한 코딩 에이전트가 한 번의 연결만으로 동작하는 환경 제공
- 유저는 원하는 에이전트, 에디터 조합 및 병렬 관리, 장시간 작업 병행 등 혁신적 프로덕티비티 확보 예상
- 단일 에이전트, 단일 에디터의 시대→복수 에이전트, 복수 워크플로우로 진화 중임

### 실전 예시(Archon POC): 여러 언어 ‘Hello World’ 생성으로 멀티 에이전트 병렬 작업이 가능해짐

- Archon에서 예시로 한 번에 Rust, Go, Python의 Hello World 파일 3종 생성 요청
- 백엔드는 Rust 기반 HCP로 구현되어 각 언어별 sub-agent가 실시간 파일 생성
- 작업 상태/진행 상황을 UI에서 실시간 모니터링 및 관리 가능
- 작업이 끝나면 PR 제출까지 자동화 가능, 유저는 결과만 검토

### ACP와 AI 코딩의 미래에 대한 강한 확신과 지속적 발전 가능성을 강조함

- 영상 마지막에서 ACP가 AI 코딩 분야의 차세대 표준이 될 것임을 확신
- 향후 더 많은 코드 에디터, 코딩 어시스턴트, 오픈소스 프로젝트 등에서 ACP 통합·확장 계획 발표 예고
- Archon·ACP 연동에 대한 더 자세한 영상 및 자료도 예고
- 실시간 피드백 및 다중 에이전트 워크플로우 확장이 AI 개발 현장을 혁신할 것임을 힘주어 언급
