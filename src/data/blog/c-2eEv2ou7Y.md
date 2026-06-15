---
author: AI Makers Club
pubDatetime: 2026-06-15T23:45:05.751Z
title: "Why MCP and ChatGPT Apps Use Double Iframes - Frédéric Barthelet, Alpic"
slug: c-2eEv2ou7Y
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "MCP 앱과 ChatGPT 앱은 외부 UI(사용자 인터페이스) 삽입을 위해 ‘더블 아이프레임(이중 아이프레임)’ 구조를 사용하며, 이는 보안 및 확장성 문제를 효과적으로 해결함 M"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/c-2eEv2ou7Y/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Why MCP and ChatGPT Apps Use Double Iframes — Frédéric Barthelet, Alpic](https://www.youtube.com/watch?v=c-2eEv2ou7Y)  
**채널명:** AI Engineer

## *MCP와 ChatGPT 앱이 더블(이중) 아이프레임을 사용하는 이유 — 프레데릭 바르뜨레, 알픽* 핵심 요약

- MCP 앱과 ChatGPT 앱은 외부 UI(사용자 인터페이스) 삽입을 위해 ‘더블 아이프레임(이중 아이프레임)’ 구조를 사용하며, 이는 보안 및 확장성 문제를 효과적으로 해결함
- MCP(App Control Platform)는 ChatGPT나 Claude 같은 생성형 에이전트 내에 새로운 서비스 채널과 인터랙티브 UI 계층을 도입함
- 각 앱의 UI는 ‘뷰(View)’라는 작은 HTML 스니펫으로 대화 내에 삽입되며, 이는 도구 호출(tool call)의 결과로 동적으로 생성됨
- 보안정책인 CSP(Content Security Policy)와 아이프레임의 특성 때문에 외부 앱 코드가 호스트의 민감 데이터에 접근하거나, 도메인 관리가 어렵다는 문제가 발생함
- 단일 아이프레임으로는 자바스크립트 실행, 로컬 스토리지 사용, 쿠키 접근 등의 제약이 발생하거나 보안 취약점이 생기기 쉬움
- 더블 아이프레임은 중간 계층 도메인을 두어 도메인 격리(origin isolation)와 외부 코드 실행을 안전하게 보장함
- 각 앱은 메타데이터(metadata)에 의존 도메인을 명시적으로 선언해야 하며, 이를 통해 CSP에서 필요한 도메인 허용을 자동화함
- Skybridge(알픽 제공)는 CSP 점검 등 개발자 작업을 돕는 오픈소스 프레임워크로, 개발 단계에서 CSP 누락으로 인한 배포 실패 및 앱스토어 승인 실패를 예방함
- 데모에서는 Skybridge의 CSP Inspector 도구 사용방법을 예시 앱(매직볼)과 함께 구체적으로 시연
- 더블 아이프레임 패턴은 Facebook 앱 마켓플레이스 등 외부 UI 통합 사례에서도 사용된 검증된 접근법임

---

## 세부 요약 - 주제별 정리

### MCP와 ChatGPT 앱은 새로운 인터랙티브 비즈니스 채널을 창출함

- MCP와 ChatGPT 앱은 기업이 자사 제품 및 서비스를 새로운 방식으로 노출할 수 있는 확장 채널을 제공
- 사용자는 ChatGPT 앱스토어나 Claude 커넥터에서 관련 앱을 직접 탐색하거나, 대화 흐름 중 맥락에 맞는 앱이 자동 호출될 수 있음
- 기존의 단순 텍스트 챗봇과 달리, MCP 앱은 대화 내에 동적으로 다양한 인터랙티브 UI 계층을 삽입할 수 있음
- Open AI는 2023년 10월 공식적으로 App SDK를 도입하여, 해당 구조의 표준화를 시도함
- Claude(Anthropic) 등 유사 플랫폼에서도 동일한 UI 통합 로직이 적용됨

### 앱의 UI는 ‘뷰(View)’라는 HTML 스니펫으로 삽입되고, 도구 호출 결과로 동적으로 생성됨

- ‘뷰’는 대화 내에 삽입되는 작은 UI 단위(HTML 문서)로, JS나 CSS 포함이 가능
- 각 도구(tool)는 필요 시 자신에게 연결된 뷰를 제공하도록 메타데이터에 명시
- MCP 호스트(예: ChatGPT)는 대화 시작 시 apps의 툴리스트를 가져오며, 각 도구의 뷰 리소스를 미리 캐시하거나 필요 시 동적으로 로드함
- 뷰는 항상 도구 호출 시점의 결과와 함께 새로운 아이프레임에 삽입되어 사용자에게 렌더됨

### ChatGPT(호스트)는 강력한 Content Security Policy(CSP)로 외부 코드 실행을 제한함

- CSP(콘텐츠 보안 정책)는 서버가 브라우저에 내리는 권한 지침으로, JS/SCRIPT 실행, CSS, 이미지, API 연결, iFrame 삽입 등을 세부적으로 제어
- script-src(스크립트 허용), frame-src(프레임 허용) 등이 이 구조에서 중요한 역할
- ChatGPT는 script-src에 서명된 논스(nonce)가 붙은 JS 실행만 허용하여, 임의의 외부 JS 코드 실행을 원천 차단
- 따라서 sourceDoc(아이프레임에 직접 HTML 삽입) 방식으로는 외부 JS 동작이 불가능하거나, CSP 완화 시 오리진(shared origin) 문제 발생

### 단일 아이프레임 구조로는 자바스크립트와 오리진 문제를 동시에 해결하기 어렵다는 한계가 있음

- sourceDoc 방식: 아이프레임에 직접 리소스 삽입 시 호스트와 오리진 공유 → JS 실행이 CSP에 의해 제한, 완화 시에는 쿠키/로컬스토리지 접근 위험 노출
- sandbox 속성 활용 시 오리진이 null로 설정되어 parent와 격리되지만, 로컬 스토리지/인덱스DB/쿠키 등 오리진 기반 기능은 모두 사용할 수 없음
- allow-same-origin 추가 시 다시 보안문제 되살아남: 도메인 격리가 풀려 parent 접근이 가능해짐
- 단순한 외부 URL(서버 endpoint) 연결 방식은 CSP의 frame-src에 모든 앱 개발자의 도메인을 허용해야 하여, 실제 서비스에서는 실현 불가

### 더블 아이프레임 구조는 도메인 격리와 외부 코드 실행을 모두 만족시키는 현실적 해법임

- ChatGPT 자체 도메인(ex: openaiusercontent.com)에서 동일한 JS 코드(load iframe + sourceDoc)를 전 앱에 제공
- 첫번째(상위) 아이프레임에서 HTML·JS 로더를 실행, 두번째(하위) 아이프레임에 실제 앱의 ‘뷰’ HTML 을 sourceDoc으로 삽입
- 첫번째 프레임은 여러 서브도메인으로 분산 배치하여, 각 앱이 저장한 로컬스토리지가 격리되도록 설계(예: app마다 abc123.example.com 등)
- 두 번의 도메인 분리로 호스트(ChatGPT)는 외부 코드의 parent 접근을 원천적으로 차단하면서, 앱 내에서는 독립적인 JS, 스토리지, 쿠키 등이 자유롭게 사용 가능
- CSP를 각 앱별 메타 태그로 추가해, 각자 필요한 CSP 정의를 뷰 내부에서 제어 가능

### 더블 아이프레임 구조의 역사는 Facebook 등 외부 UI 확장 사례에도 뿌리를 두고 있음

- Facebook의 2010년대 app marketplace가 유사한 문제(외부 UI, 내부 보안, 도메인 격리)를 더블 아이프레임 패턴으로 해결한 사례 언급
- MCP, ChatGPT, Claude 등 생성형 에이전트들이 동일한 설계적 문제에 맞닥뜨리며 이 방법을 채택

### 앱 개발자는 메타데이터에 의존 도메인(CSP)에 대한 정보를 반드시 명시해야 함

- 앱이 호출하는 API, 이미지, 스크립트, 프레임 등은 모두 connect-src, script-src 등 CSP 디렉티브에 도메인으로 선언해야 함
- 예시: 외부 API 호출 시 해당 도메인 미등록 시 production에서 호출 실패 및 앱 불능 상태 초래
- 모든 도메인 누락 없이 명시하도록 MCP App Spec에서 강제하고, App스토어 승인(챗GPT 등)에서도 누락시 반려됨이 잦음

### 개발 단계에서 CSP를 쉽게 점검 및 자동화할 오픈소스 프레임워크 ‘Skybridge’가 활용됨

- 알픽(Alpic)이 제공하는 Skybridge는 공식 App SDK(Spec) 확장 프레임워크로, end-to-end 타입 세이프티 제공
- 개발모드에서는 브라우저 내에서 devtoolUI(CSP Inspector)를 지원함
- 커스텀 도구(예: 매직8볼) 실행 시, 관련 뷰와 데이터를 동적으로 검사하고, 실제 호출된 모든 도메인을 추적하여, 메타데이터 등록여부 비교/실시간 경고 제공
- 예시: 외부 API 호출을 추가하면 inspector가 즉시 누락 도메인을 감지해 빨간색 경고를 띄움, 개발자가 메타데이터 수정해 저장/새로고침 시 즉시 반영

### CSP 미설정 및 누락으로 인한 배포 및 앱스토어 반려 문제를 Skybridge Tool로 효과적으로 예방함

- ChatGPT 앱스토어에서 ‘CSP 누락 문제’ → 앱 승인 거부 및 프로덕션 문제 빈번
- Skybridge CSP Inspector는 이 모든 문제를 개발 단계에서 미리 자동 점검, 유지보수 및 배포 안정성에 기여
- 데모에서 실제 코드를 실행하며 CSP 벨리데이션 과정, 도구 실행 및 뷰 렌더링 등 전 과정을 시연

### 마무리 및 추가 정보 안내

- 영상 마지막에 슬라이드·Skybridge 앱 링크(QR코드) 제공 및 ‘스키 고글’ 럭키드로우(별점 이벤트) 예고
- 발표 마무리와 참석자 감사 인사
