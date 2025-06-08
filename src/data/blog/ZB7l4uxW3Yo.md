---
author: AI Makers Club
pubDatetime: 2025-06-08T23:46:37.494Z
title: "Breaking the Chain: Agent Continuations for Resumable AI Workflows - Greg Benson"
slug: ZB7l4uxW3Yo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: 영상 제목: *에이전트 연속성: 재개 가능한 AI 워크플로우를 위한 새로운 메커니즘* Greg Benson(샌프란시스코 대학교 교수, Snaplogic 수석 과학자)이 Snaplo
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/ZB7l4uxW3Yo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Breaking the Chain: Agent Continuations for Resumable AI Workflows - Greg Benson](https://www.youtube.com/watch?v=ZB7l4uxW3Yo)  
**채널명:** AI Engineer

## *에이전트 연속성: 재개 가능한 AI 워크플로우를 위한 새로운 메커니즘* 핵심 요약

- 영상 제목: *에이전트 연속성: 재개 가능한 AI 워크플로우를 위한 새로운 메커니즘*
- Greg Benson(샌프란시스코 대학교 교수, Snaplogic 수석 과학자)이 Snaplogic에서 개발한 'agent continuations(에이전트 연속성)' 메커니즘을 소개
- 주요 과제는 에이전트의 실행 도중 인간의 승인이 필요한 상황과 긴 실행 시간 또는 장애 발생 시의 신뢰성 확보임
- 전통적 프레임워크들은 인간 승인 대기 중에도 에이전트 루프가 계속 실행되어야 함. agent continuations는 승인/장애 지점의 전체 상태를 저장해 완전 종료-재개 가능
- 프로그래밍 언어의 continuation에서 영감을 받아 복잡한 에이전트의 상태를 시점별로 스냅샷 저장 및 복원
- LLM의 메시지 배열(messages array)와 별도의 메타데이터를 이용해 에이전트의 상태와 재개 정보를 통합 관리
- 인간 승인, 복잡한 도구 호출, 서브에이전트 활용 등 다중 중첩 구조나 임의 정지점까지 지원
- 실제 데모는 HR의 계정 생성 요청에서 '승인 필요' 상태에서 에이전트를 중단–승인 후 상태 복구–처리 완료로 이어짐
- Python(OpenAI API 기반) 및 Snaplogic Agent Creator(시각적 빌더) 양쪽에 구현되어 GitHub에서 프로토타입 확인 가능
- 기존 프레임워크 대비 인간 승인과 복잡한 구조의 중첩 모두를 포괄하는 최초의 접근법이라는 점이 특징

---

## 세부 요약 - 주제별 정리

### 현재 에이전트 운영 환경은 인간 승인과 장애 허용에 다수의 과제가 있음

- 에이전트를 자동화된 프로덕션 환경에 투입하면 인간의 역할과 신뢰성 문제가 중요해짐
- 예를 들면, 대규모 금액 이체, 계정 삭제 등 일부 단계는 반드시 인간 승인이 요구됨
- 에이전트는 보통 다단계(LLM 호출, 도구 호출 등)로 동작하며, 실행 시간이 길어질수록 장애(네트워크, 하드웨어 등) 가능성이 커짐
- 장애가 발생할 경우 에이전트가 작업을 처음부터 다시 해야 되는 비효율 발생 우려
- 분산 환경(클라우드 등)에서 에이전트가 실행될 때는 확장성, 신뢰성 또한 문제가 됨

### LLM-에이전트 프레임워크는 루프-도구 호출-LLM 구조로 상호작용이 반복됨

- 에이전트는 본질적으로 LLM과 여러 도구를 연쇄적으로 호출하는 루프를 수행
- LLM이 도구 호출 필요를 판단하면, 에이전트가 실제 도구 호출을 수행하고 결과를 LLM에 전달
- 도구 중에는 또다른 에이전트(서브에이전트)가 포함될 수 있음(다단계 중첩 구조화 가능)
- 최근에는 상위(Orchestrator) 에이전트 아래 다수의 서브에이전트가 계층화된 구조가 일반화되고 있음

### 실행 도중 인간 승인, API 속도 제한, 긴 수명 등 특수 상황이 빈번히 발생함

- 일부 도구 호출(계정 삭제 등)이나 환경 접근은 인간 승인을 필요로 함
- LLM, API의 환경이 빠르게 변해 사용 중인 모델의 레이트 리미팅 등 예외적 상황이 자주 발생
- 복잡한 리서치, 외부·내부 시스템 다단계 호출 등 장기 실행 에이전트의 장애 가능성 증가

### 기존 에이전트 프레임워크는 승인 대기 중에도 프로그램 실행을 지속해야 함

- 인간 승인이나 외부 입력을 기다리는 동안에도, 대부분 프레임워크는 에이전트의 루프(프로그램 코드)가 계속 실행 중이어야 함
- Slack 등 타 시스템과 인터랙션 시에도 루프 프로세스 자체는 중단 없이 대기해야 하는 불편함 존재
- 이를 개선하고자 ‘agent continuations’를 도입함

### agent continuations는 프로그래밍 언어의 continuation 개념에서 착안됨

- continuation: 실행 중임을 특정 지점에서 “일시 정지”하고, 상태를 캡슐화해 나중에 이어서 실행 가능하게 하는 기법(일종의 실행 스냅샷)
- LLM 상호작용의 이력(messages array)이 이미 상당 부분 상태를 로깅하고 있음
- 이를 확장해, 완료되지 않은(승인 필요 등) 상태, 프로세스 지점의 메타데이터를 함께 저장–복원 개념을 차용

### agent continuations 프레임워크는 기존 사용 방식과 거의 유사하나 승인 필요 도구에 지정 기능 추가됨

- 기존 프레임워크와 거의 동일한 툴 객체 등록 방식, 다만 승인 필요 도구를 명시적으로 지정 가능
- 일반 에이전트 대신 continuation agent 클래스를 생성
- 실행 도중 일정 지점(예: 승인 필요)에 도달하면 결과 대신 continuation object(일시 정지 상태 객체)를 반환
- 해당 객체에는 현재까지의 메시지, 승인 대기 등 상태와 메타데이터가 포함되어 있음

### continuation 객체에는 복구/재개의 핵심 정보가 계층적으로 저장됨

- 단일 계층 예시: messages array, resume request(복구 시점), processed(승인 여부) 등 메타데이터 포함
- 다단계(서브에이전트 포함) 예시: 각 에이전트별 메시지, 상태, 승인이 계층적으로 중첩해 저장됨(재귀적 포맷)
- 애플리케이션 레이어에서 필요 정보만 꺼내 사용자(인간)에게 전달 및 승인을 받아 객체 업데이트 가능

### HR팀 계정 생성 예제에서 실제 agent continuation 적용 사례 시연

- 상위 HR 에이전트: 메일 발송 도구, 계정 관련 서브에이전트(account agent) 활용
- account agent: 계정 생성, 계정 권한 부여 도구. 권한 부여(tool)는 승인 필요로 지정됨
- 사용자가 ‘새 계정 생성’ 요청 → 하위 account agent가 실행되어 권한 부여 단계에서 승인 필요 상태로 일시 중단
- 해당 상태가 계층적으로 continuation object에 저장되어 애플리케이션 레이어로 반환
- 인간 승인이 이루어진 후 continuation을 에이전트에 재전달하면, 저장 시점에서 전체 상태가 복구되어 프로세스가 계속됨
- 최종적으로 계정 생성 완료 및 완료 메시지를 반환하며, 정상(비정지) 메시지 배열로 종료

### agent continuations는 실행 도중 에이전트 루프 완전 종료–복구를 최초로 지원함

- 일시 정지(승인, 장애 등) 시점의 에이전트 루프/프로그램 자체가 완전히 종료되어도, 모든 상태가 저장되어 재개 가능
- 복잡한 계층의 중첩 구조도 임의의 깊이에서 중단-복원 가능
- 상태가 저장된 continuation object만 있으면 어디서든 복원 실행 가능

### 현재 Python(OpenAI API 기반) 및 Snaplogic Agent Creator 플랫폼에서 구현됨

- 프로토타입은 OpenAI Python API만 사용, 별도 의존성 없음
- GitHub를 통해 소스와 예시 확인 가능(영상 내 링크 제공)
- Snaplogic Agent Creator(시각적 빌더) 플랫폼에도 구현되어, 비전문가도 시각적으로 에이전트와 상태 전환을 설계·모니터링 할 수 있음

### 기존 프레임워크의 한계를 보완하며 확장 및 적용성 높임

- 기존 일부 프레임워크도 상태관리를 했으나, ‘인간 승인’과 ‘임의계층 중첩’의 복합 처리를 모두 지원하는 경우는 드뭄
- Snaplogic 'Agent creator' 팀이 연구–개발, Python 레이어와 시각적 빌더 양쪽에 적용
- 향후, 완전한 독립형 프레임워크 개발보다는 기존 프레임워크(Strands, Pyantic AI 등) 확장 지원이 목표
