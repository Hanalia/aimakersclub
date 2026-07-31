---
author: AI Makers Club
pubDatetime: 2026-07-31T23:45:11.484Z
title: "What's Next After RLHF? - Diogo Almeida, TypeSafe AI"
slug: cJ0EOzey--o
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상에서는 웹 컴포넌트(Web Components)가 무엇인지, 그 동작 방식과 장점, 그리고 직접 커스텀 요소를 만들어보는 과정을 다룸 웹 컴포넌트는 재사용 가능하고 캡슐화된"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/cJ0EOzey--o/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [What's Next After RLHF? — Diogo Almeida, TypeSafe AI](https://www.youtube.com/watch?v=cJ0EOzey--o)  
**채널명:** AI Engineer

## *웹 컴포넌트의 세계: 원리, 유용성, 그리고 커스텀 요소 제작하기* 핵심 요약

- 이 영상에서는 웹 컴포넌트(Web Components)가 무엇인지, 그 동작 방식과 장점, 그리고 직접 커스텀 요소를 만들어보는 과정을 다룸
- 웹 컴포넌트는 재사용 가능하고 캡슐화된 UI를 만들 수 있게 해주어, 큰 규모의 웹 애플리케이션에서 유지보수와 개발 생산성을 크게 향상시킴
- 주요 개념으로는 커스텀 엘리먼트(Custom Elements), 쉐도우 DOM(Shadow DOM), HTML 템플릿(HTML Templates)이 소개됨
- 웹 컴포넌트는 프레임워크와 무관하게 동작하며, 다른 JavaScript 프레임워크와의 상호 운용성이 뛰어남
- 실제로 "hello-world" 같은 커스텀 엘리먼트를 정의하는 코드 예제가 실습으로 제시됨
- 커스텀 엘리먼트는 JavaScript의 클래스를 상속받아 생성 및 등록할 수 있으며, 연결 시점에 특정 동작을 수행하도록 설계할 수 있음
- 쉐도우 DOM을 통해 컴포넌트 내부 스타일과 구조를 외부와 분리, 충돌 없이 안전하게 유지할 수 있음
- HTML 템플릿과 슬롯(slots)을 활용하여 유연하고 재사용 가능한 UI 컴포넌트를 만들 수 있음
- 웹 컴포넌트는 크로스 브라우저 지원이 확대되고 있으며 실제 서비스에 적용할 수 있는 현실적인 기술임
- 영상은 실습을 통해 개발자가 웹 컴포넌트 기반 컴포넌트 개발을 시작할 수 있도록 안내함

## 세부 요약 - 주제별 정리

### 웹 컴포넌트는 캡슐화와 재사용성을 모두 제공함

- 웹 컴포넌트는 HTML, CSS, JavaScript를 모두 포함하여 하나의 독립적이고 재사용 가능한 UI 요소를 만들도록 설계됨
- 캡슐화(encapsulation)를 통해 컴포넌트 바깥과 내부의 스타일 및 동작이 충돌하지 않도록 보호함
- 대규모 프로젝트에서 코드의 반복을 줄여 유지보수와 수정이 용이함
- 개발자는 컴포넌트를 단일 단위로 생각하고 조립할 수 있어 전체 구조가 더욱 명확해짐

### 웹 컴포넌트의 핵심 기술 세 가지가 소개됨

- **커스텀 엘리먼트 (Custom Elements):** 새로운 HTML 태그를 JavaScript로 정의 가능
- **쉐도우 DOM (Shadow DOM):** DOM 트리를 소유 컴포넌트 내에만 한정시켜 외부와 분리된 환경 구성
- **HTML 템플릿 & 슬롯 (HTML Templates & Slots):** 감춰진 DOM 구조와 사용자 콘텐츠의 동적 삽입 지원

### 커스텀 엘리먼트 정의와 등록 방법이 자바스크립트 예시와 함께 시연됨

- JavaScript의 `class` 문법을 사용해 HTMLElement를 상속한 커스텀 클래스를 정의함
- `connectedCallback()` 메서드를 활용하여 컴포넌트가 문서에 추가될 때 원하는 동작 수행
- `customElements.define('hello-world', HelloWorld)`와 같이 커스텀 태그명과 클래스를 연결해 등록
- HTML에서 `<hello-world></hello-world>` 태그를 직접 사용할 수 있게 됨

### 쉐도우 DOM을 통해 내부 스타일과 구조를 완전히 분리하는 방법이 제시됨

- `attachShadow({mode: 'open'})` 메서드로 쉐도우 DOM을 생성
- 컴포넌트 내부에서만 동작하는 스타일(CSS)을 쉐도우 루트에 적용
- 외부 스타일과 충돌 없이 독립적으로 스타일링이 가능한 구조 예시 제공
- 개발자가 더 예측 가능하고 안전하게 사용자 지정 요소를 관리할 수 있음

### HTML 템플릿과 슬롯을 활용해 컴포넌트의 유연성을 극대화함

- `<template>` 태그를 사용하여 반복적으로 사용할 DOM 구조를 미리 정의
- `slot` 요소로 부모가 전달하는 데이터를 컴포넌트 내부의 원하는 위치에 표시 가능
- 다양한 콘텐츠를 수용하고 확장하면서 동작이 일관된 UI 작성법 소개

### 웹 컴포넌트는 프레임워크 독립적이며 상호 운용성이 높음

- React, Vue, Angular 등 기존 JavaScript 프레임워크와 독립적으로 동작 가능
- 프레임워크 코드와 웹 컴포넌트가 상호 영향 없이 병행 사용될 수 있음
- 기존 자바스크립트 UI 컴포넌트 라이브러리와 호환성 강조

### 실습 예시를 통해 웹 컴포넌트 개발 방법을 단계별로 설명함

- "hello-world" 커스텀 엘리먼트 정의 및 문서에 추가하는 코드 제공
- 자바스크립트 클래스 상속, `connectedCallback` 구현, HTML 템플릿 사용 순서 안내
- 개발자가 영상을 따라 직접 실습할 수 있도록 유도

### 크로스 브라우저 호환성과 실제 적용 가능성에 대해 언급함

- 최신 브라우저(Chrome, Firefox, Edge, Safari)에서 기본적으로 웹 컴포넌트 표준을 지원함
- 폴리필(polyfill) 도구를 사용하여 일부 구형 브라우저에서도 사용 가능
- 실제 서비스에 적용 사례가 늘고 있으며 장기적으로 호환성에 대한 고민보다 실용성이 우선시되고 있음

### 웹 컴포넌트는 개발의 생산성과 유지보수성을 동시에 끌어올림

- 대규모 프로젝트에서 모듈성(modularity)이 핵심이 되면서 도입이 증가
- 고수준의 재사용성, 캡슐화, 명확한 컴포넌트 경계 등으로 협업 개발에 유리함
- 단계별 작성법과 라이브 데모를 통해 학습 곡선이 완만하다고 언급

### 영상의 결론은 입문자도 따라할 수 있도록 실습 위주로 안내함

- 실습을 따라 만들면서 웹 컴포넌트의 장점과 구조를 직접 체험하도록 구성함
- 문서화 및 공식 자료 참조를 독려하며, 영상만으로도 기본 개념 습득이 가능함
