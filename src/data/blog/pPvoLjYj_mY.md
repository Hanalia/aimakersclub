---
author: AI Makers Club
pubDatetime: 2025-05-02T08:18:35.397Z
title: "Evaluating Domain Specific LLMs for Real World Finance - Waseem Alshikh, Writer"
slug: pPvoLjYj_mY
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: Writer는 2020년에 설립되어 다양한 범용 및 도메인 특화 언어 모델(LLM)을 개발해 왔음 최근 범용 LLM의 정확도가 평균 80~90%에 도달함에 따라, 도메인 특화 모델
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/pPvoLjYj_mY/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Evaluating Domain Specific LLMs for Real World Finance — Waseem Alshikh, Writer](https://www.youtube.com/watch?v=pPvoLjYj_mY)  
**채널명:** AI Engineer

## *실제 금융 분야용 도메인 특화 LLM 평가* 핵심 요약

- Writer는 2020년에 설립되어 다양한 범용 및 도메인 특화 언어 모델(LLM)을 개발해 왔음
- 최근 범용 LLM의 정확도가 평균 80~90%에 도달함에 따라, 도메인 특화 모델의 필요성에 의문이 제기됨
- 도메인 특화 모델의 효용성을 검증하기 위해 실제 시나리오 기반의 ‘Fail’ 평가 데이터셋을 제작함
- 평가 항목은 쿼리 실패(오타, 불완전, 분야 외 질문)와 컨텍스트 실패(OCR 오류, 무관한 문맥 등)로 구성
- 결과적으로 대부분의 LLM이 정답을 출력하지만, 컨텍스트 이해 및 근거 기반 응답(grounding)에서는 다양한 한계가 확인됨
- 특히 ‘사고하는(thinking)’ 대형 모델일수록 잘못된 맥락에서 잘못된 답변을 할 가능성이 더 높았음
- 도메인 특화 금융 데이터셋 기준, 조건 충족형 응답(grounding) 정확도는 최대 81%에 불과했음
- 현 시점에서 실전 활용을 위해서는 여전히 도메인 특화 모델과 세심한 시스템 설계가 필요하다는 결론에 도달함

---

## 세부 요약 - 주제별 정리

### Writer는 범용 모델의 성장에도 여전히 도메인 특화 모델 개발을 이어가야 한다는 질문을 던짐
- Writer는 Transformer 기반 모델을 지속적으로 개발하여 현재 16종 이상의 모델을 공개 중
- 범용 모델(PX, P3, P4 등)뿐 아니라 금융, 의료, 크리에이티브 등 도메인 특화 모델도 다수 개발
- 범용 LLM이 80~90%의 정확도를 보이면서, 도메인 특화 모델을 만들어야 할 필요성에 사내에서 논의가 일어남

### 실제 금융 시나리오 기반 평가를 위해 Fail이라는 맞춤형 데이터셋을 구축함
- 금융 실무를 반영한 실제 시나리오로 구성된 평가 데이터셋 'Fail' 제작
- 평가 항목은 쿼리 실패(오타·불완전·분야 외 질문)와 컨텍스트 실패(OCR 오류, 맥락 누락 등)로 분류
- 데이터와 평가 결과, leaderboard 등은 오픈소스로 공개(GitHub, Hugging Face)

### 쿼리 실패 유형에는 오타, 불완전 입력, 분야 외 질문 등이 포함됨
- 오타(맞춤법 오류), 세그먼트 오류, 불완전 쿼리 등은 실제 사용자들이 자주 범하는 실수임
- 전문 지식이 부족하거나, 동떨어진 주제를 묻는 경우에도 LLM의 반응을 측정
- 모델들은 대부분 이와 같은 입력에도 답을 제시함

### 컨텍스트 실패는 맥락 오류, OCR 오류, 무관한 문서 등에서 주로 발생함
- 실제 금융 데이터는 종종 OCR 변환 과정에서 문자가 합쳐지거나 깨지는 오류가 생김
- 관련 없는 문서를 입력해도 모델이 답을 시도하는 문제를 확인
- 컨텍스트 오류 상황에서 모델의 해석력이 중요한데, 여기서 취약점이 드러남

### 범용·사고형 LLM일수록 잘못된 맥락에 기반한 ‘환각’(hallucination) 현상이 도드라짐
- 대형 reasoning(사고형) 모델들은 질문의 컨텍스트와 무관하게 답변을 생성하는 경향이 강함
- grounding(근거 응답) 정확도는 소형 모델들보다 오히려 대형 모델에서 더 낮아지는 경우 다수 확인
- 정답률과 독립적으로 잘못된 맥락을 따른 답변(환각)이 심각한 문제로 재확인됨

### 정답률과 컨텍스트 충실성(grounding) 사이에는 큰 격차가 존재함
- 표면적인 Task(텍스트 생성, 질문 응답) 정확도는 모델 간 큰 차이가 없으나, grounding 기준으로 성능이 급격히 저하
- 모범적인 모델조차 grounding metric에서 81% 이상 달성하지 못함
- 실제 사용 환경에서 20%이상은 완전히 잘못된 맥락에서 답변됨을 의미함

### 현 시점에서는 도메인 특화 모델의 추가 개발 및 복합적 시스템 설계가 필수적임을 시사함
- guard-rails, context check 등 다양한 보호장치와 시스템 구성 필요성 강조
- 단일 LLM의 정확도 상승만으로 복잡·민감한 금융, 의료 현장에 바로 투입하기는 어려움
- 도메인 특화 모델 개발이 당분간은 반드시 병행되어야 한다는 결론에 도달
