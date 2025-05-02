---
author: AI Makers Club
pubDatetime: 2025-05-02T23:45:09.861Z
title: "Vercel AI SDK Masterclass: From Fundamentals to Deep Research"
slug: kDlqpN1JyIw
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: Vercel AI SDK로 에이전트(Agent) 개발의 기초부터 실제 심화 리서치 시스템 구축까지 단계별로 실습 중심으로 설명함 다양한 언어 모델(GPT-4o mini, Perpl
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/kDlqpN1JyIw/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Vercel AI SDK Masterclass: From Fundamentals to Deep Research](https://www.youtube.com/watch?v=kDlqpN1JyIw)  
**채널명:** AI Engineer

## *Vercel AI SDK 마스터클래스: 기초부터 딥 리서치 프로젝트까지* 핵심 요약

- Vercel AI SDK로 에이전트(Agent) 개발의 기초부터 실제 심화 리서치 시스템 구축까지 단계별로 실습 중심으로 설명함
- 다양한 언어 모델(GPT-4o mini, Perplexity, Gemini 등) 간 전환과 각각의 특징, 활용법을 실제 코드로 시연
- 툴 호출(Function Calling)과 멀티스텝 에이전트 제작, 그리고 자율적 문제 해결 루프를 구현하는 방법을 구체적으로 소개
- 구조화된 데이터(Structured Output) 생성 방식 및 Zod와의 통합을 통해 타입 안전한 데이터 처리 방법 설명
- 실제 구체적 예시로 웹 연구 자동화 프로젝트(Deep Research Clone) 구축 과정을 상세하게 데모함
- 재귀적 검색, 웹 크롤링, 정보 분석, 지식 누적, 보고서 자동 생성 등 심화 기능을 체계적으로 구현
- 실전에서 쓸 수 있는 코드, 워크플로우, 에이전트 설계 방식 등 실무적 인사이트 제공
- 초보자부터 실무자까지 AI SDK를 이용한 실질적 AI 프로덕트 개발 전 과정을 익힐 수 있음

---

## 세부 요약 - 주제별 정리

### Vercel AI SDK는 다양한 언어 모델을 한 줄의 코드로 교체할 수 있어 개발 유연성을 극대화함

- AI SDK의 통일된 인터페이스 덕분에 OpenAI, Perplexity, Gemini 등 여러 LLM을 import 및 한 줄 코드 수정만으로 손쉽게 교체 가능
- 각 모델별로 웹 검색, 출처 포함 응답 등 개별 기능 차이를 시연하며, 모델 선택이 실제 개발자 경험에 어떻게 적용되는지 설명
- Perplexity나 Gemini 등은 최신 정보 제공, 출처 표기 등 추가 정보를 response에 포함하며, sources property로 상세 정보 접근 가능
- SDK 공식 문서에서 지원하는 모든 프로바이더 리스트를 확인할 수 있도록 안내

### 툴 호출과 Agent 구조는 복잡한 액션 처리를 자율적으로 수행할 수 있게 해준다

- Language Model에게 도구(툴)와 설명, 파라미터를 제공하고, 모델이 필요시 자동으로 툴 호출을 선택하도록 설계
- 툴 정의는 name(description, parameters, execute) 구조이며, 타입 세이프티 지원(예: Zod 타입과 연계)
- 여러 개의 툴이 동시에 사용될 경우, 조건문 대신 max steps 옵션으로 멀티스텝 순환 에이전트를 손쉽게 구현
- 예시로 “두 도시의 날씨를 각각 가져오고, 합산해서 결과로 반환”하는 멀티스텝 액션을 실제 코드와 로그로 상세하게 시연

### 구조화된 데이터 생성 및 Zod 통합은 타입 안정성과 결과 활용도를 크게 높여준다

- generate text의 실험적 옵션(output.object)이나 전용 함수(generage object)로 JSON 등 구조화된 결과를 얻을 수 있음
- Zod를 활용해 결과 스키마를 명확히 정의하면 더 안전한 타입, 체계적인 결과 데이터 처리 가능
- describe 메서드로 각 결과 필드에 별도의 조건이나 응답 스타일(ex. “최대한 많은 전문 용어 사용”) 등을 명시할 수 있음
- 예제 코드로 10개의 AI Agent 정의 생성, 답변 스타일 변경 등 다양한 structured output 케이스를 시연

### 심화 리서치(Deep Research) 시스템 구축 예제로 재귀적 AI 에이전트 구조를 구현함

- 사용자의 질의를 기반으로 서브 쿼리 자동 생성 → 웹 검색 → 결과 평가 및 학습 내역/추가 질문 도출 → Follow-up을 생성하는 루프를 구현
- 각 단계별로 검색(Relevant 특정), 분석(Learning & Follow-up 생성), 누적 저장(State Accumulation), 재귀 호출로 심층 리서치 진행
- 브레드스(breadth)와 뎁스(depth) 파라미터로 리서치의 폭과 깊이를 정밀 제어
- 코드 구조, 관리 포인트, 타입 설계 등 실제 프로덕트 수준 워크플로우를 상세하게 설명

### 웹 검색, 크롤링과 결과 최적화 전략을 통해 모델 응답 효율성과 품질을 높임

- Exa API를 활용해 실시간 웹 검색 및 불필요 정보(파비콘 등) 제거로 LLM에 제공할 컨텍스트를 최적화
- 중복 소스 재활용 방지 로직(이미 사용된 URL은 'irrelevant'로 간주)을 Agent loop 평가에 통합
- 대용량 크롤링 결과로 인한 비용 및 성능 이슈를 실제 백엔드 구현 관점에서 체계적으로 관리

### 최종 보고서는 누적된 리서치 데이터를 기반으로 대형 LLM을 통해 마크다운 형식의 분석 리포트로 자동 완성된다

- 연구 데이터 전체(검색 내역, 학습 포인트, 추가 질의 등)를 종합해 최종 리포트를 생성
- 시스템 프롬프트로 “마크다운 형식”, “명확한 구조”, “리서처 페르소나” 등 요구사항을 지정해 결과 품질을 보정
- 실제 자동 생성된 리포트를 예시로 결과 품질, 구조, 유용성 등 최종산출물을 직접 확인 가능

### 본 강좌는 실제 코드 기반 실습과 원리 해설을 병행해 실전 수준의 AI 에이전트 개발 전 과정을 보여줌

- 영상 전체에 걸쳐 실시간 코드 시연과 각 함수/로직별 역할, 중요성을 꼼꼼히 해설
- 실무에 직접 활용할 수 있는 워크플로우 설계, 상태 저장, 최적화, 에러 처리 등의 관점에서 실용적인 팁 다수 제공
- 초보자도 따라할 수 있도록 프로젝트 설정부터 단계별 코드, 프롬프트 설계, 모델 평가까지 일관되게 안내
