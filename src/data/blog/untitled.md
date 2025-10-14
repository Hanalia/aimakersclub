---
author: AI Makers Club
pubDatetime: 2025-10-14T23:46:07.720Z
title: "Build Your First Voice AI Agent in 20 Minutes with LiveKit (Open Source)"
slug: untitled
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**LiveKit을 활용해 음성 AI 에이전트를 20분 만에 구축하는 전체 과정을 소개** 구축된 에이전트가 클라우드 대시보드 상에서 정상적으로 배포되고 확인 가능함을 시연 Pla"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/untitled/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Build Your First Voice AI Agent in 20 Minutes with LiveKit (Open Source)](https://www.youtube.com/shorts/U9Wrc3IUQYI)  
**채널명:** Cole Medin

## *LiveKit로 20분 만에 나만의 음성 AI 에이전트 만들기* 핵심 요약

- **LiveKit을 활용해 음성 AI 에이전트를 20분 만에 구축하는 전체 과정을 소개**
- 구축된 에이전트가 클라우드 대시보드 상에서 정상적으로 배포되고 확인 가능함을 시연
- Playground 기능을 통해 브라우저 상에서 실시간 대화 테스트가 바로 가능함을 설명
- 조직 선택 후 CLI(명령줄 인터페이스)를 통해 배포된 에이전트에 즉시 연결되는 과정 시연
- 에이전트가 “Airbnb 관련 요청을 도와드릴 수 있습니다”라는 안내와 함께 동작하는 모습 제공
- “샌프란시스코의 상위 Airbnb를 찾아달라”는 실제 시나리오 대화를 통한 예시 결과 제시
- 로컬 환경에서 실험한 결과와 동일한 답변을 클라우드 환경에서도 성공적으로 재현했음을 확인
- LiveKit에서는 전화 통합 기능도 지원해 에이전트 전용 전화번호를 부여하는 것도 가능함을 강조
- 대부분의 음성 에이전트 구축 목표가 바로 비슷한 ‘프로덕션 환경 배치 및 통신 채널 제공’임을 언급
- 영상 설명란에 Playground 링크 제공 예정임을 추가 안내

---

## 세부 요약 - 주제별 정리

### LiveKit 음성 AI 에이전트가 클라우드에 성공적으로 배포되는 과정을 시연함

- 영상은 이미 에이전트를 만들어 배포했음을 전제로 시작
- 사용자 대시보드(클라우드 환경)에서 방금 배포된 에이전트의 상태를 바로 확인 가능함을 화면으로 보여줌
- 이 과정을 통해 로컬 환경이 아닌 실제 서비스 환경에 AI 에이전트를 올리는 방법을 직접 시연함

### Playground 기능을 통해 웹 브라우저에서 에이전트와 실시간으로 대화할 수 있음을 설명함

- Playground는 LiveKit에서 제공하는 테스트 환경임
- 영상 설명란에서 Playground로 이동할 수 있는 링크를 제공할 예정임을 언급
- Playground 내에서 대화 테스트는 조직 선택만으로 간단하게 시작할 수 있음
- 사용자는 추가 설정 없이 손쉽게 방금 배포한 에이전트와 직접 대화할 수 있음

### 조직 선택 및 CLI를 통해 에이전트가 자동 연결되는 과정을 구체적으로 보여줌

- Playground에서 조직(Organization) 선택 메뉴를 이용
- 별도의 복잡한 과정 없이도, CLI(명령줄 툴)로 방금 배포한 에이전트와 자동 연결
- 클라우드/웹 환경과 명령줄 배포가 매끄럽게 연동되는 점을 시연

### 에이전트의 Airbnb 관련 요청 처리 성능을 실제 예시를 통해 검증함

- 에이전트는 먼저 “I can assist you with Airbnb related request.”(Airbnb 관련 요청을 도와드릴 수 있습니다)라는 안내 메시지를 말함
- 이어서 사용자로부터 “샌프란시스코의 상위 Airbnb를 찾아달라”는 실제 요청이 전달됨
- 에이전트는 “샌프란시스코의 상위 Airbnb는 다운타운 로프트 15번(Cozy Downtown Loft 15) 등입니다”와 같은 구체적 결과를 즉시 반환
- 실시간 발화 결과가 브라우저 상에서 음성으로 바로 출력됨

### 로컬 환경에서와 동일한 에이전트 성능이 클라우드 환경에서도 보장됨을 확인함

- 이전 로컬 환경 테스트와 동일한 결과가 클라우드/프로덕션 환경에서 그대로 재현됨
- 배포/테스트/운영 단계가 끊김 없이 이어진다는 사실을 강조

### LiveKit이 전화 통화(telephony) 통합 기능도 지원함을 알림

- LiveKit에서는 단순 웹 환경 뿐 아니라 전화 통합 기능도 사용할 수 있음
- 실제로 에이전트에 전화번호를 부여하는 것(전화 채널 제공)이 기술적으로 가능하므로, 고객 응대 시나리오에 유용함

### 프로덕션 환경에서의 음성 에이전트 최종 목표가 전화 등 실제 서비스 통신 채널 제공임을 강조

- 대부분의 음성 AI 에이전트 활용 목적은 ‘실제 서비스 환경에서의 대화 및 연결’임을 명확히 함
- 클라우드 배포, 웹 및 전화 통합이 곧 솔루션의 실제 완성형임을 함축적으로 설명

### Playground 링크와 추가 안내가 영상 설명란에 제공될 예정임을 언급

- 시청자를 위해 Playground 를 직접 활용할 수 있도록 설명란에 링크가 추가됨을 재차 강조

---
