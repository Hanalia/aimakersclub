---
author: AI Makers Club
pubDatetime: 2025-06-22T23:45:31.335Z
title: "Case Study + Deep Dive: Telemedicine Support Agents with LangGraph/MCP - Dan Mason"
slug: sn79oS4MZFI
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Stride 컨설팅 팀이 실제 헬스케어 스타트업 \"Aila Science\"를 위해 개발한, LangGraph와 MCP, LLM(주로 Anthropic Claude) 기반"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/sn79oS4MZFI/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Case Study + Deep Dive: Telemedicine Support Agents with LangGraph/MCP - Dan Mason](https://www.youtube.com/watch?v=sn79oS4MZFI)  
**채널명:** AI Engineer

## *LangGraph/MCP를 활용한 원격의료 지원 에이전트 사례 분석 및 심층 해설* 핵심 요약

- 이 영상은 Stride 컨설팅 팀이 실제 헬스케어 스타트업 "Aila Science"를 위해 개발한, LangGraph와 MCP, LLM(주로 Anthropic Claude) 기반 원격의료(telemedicine) 지원 에이전트 시스템 구축 과정을 심층적으로 해설함
- Aila Science는 주로 유산(early pregnancy loss) 환자의 자가 치료 과정을 지원하는 기관으로, 기존에는 오퍼레이터들이 콘솔에서 직접 버튼을 누르며 각 환자 메시지 및 치료 단계별 대응을 했으나 확장성 한계에 부딪힘
- 기존 시스템을 LLM 기반 자동화 에이전트로 대체하여, 새 치료법 및 워크플로우 추가 시 코드 수정보다 문서(구글 Docs 기반 블루프린트, 지식베이스) 갱신만으로 빠르고 유연하게 확장이 가능해짐
- LangGraph/LangChain/ LangSmith와 같은 off-the-shelf 도구에 자체 코드(파이썬/Python, Node, React 등)를 결합하여 구축했으며, AWS에 호스팅, 환자 프라이버시와 HIPAA 등 규정도 준수
- 전체 대화 흐름과 상태관리는 LLM이 담당하되, 판단이 복잡·애매한 경우나 치료 승인 필요 시에는 인간 오퍼레이터(주로 Physician Assistant)가 확인 및 피드백을 제공하는 인간-에이전트 혼합(hybrid, human-in-the-loop) 방식
- 환자-에이전트 간 상호작용과 메시지, 상태 등은 모두 JSON 기반 상태객체(state object)로 관리되며, 환자 시간대 파악 등 복잡한 맥락도 LLM이 실시간 추론함
- 에이전트(‘Ava’)가 생성한 메시지의 적합성·자신감(confidence)을 독립 LLM 평가자가 점수화(70% 이하면 인간 승인), 에러나 예외상황은 LangSmith, 커스텀 Eval, PromptFu 등 다양한 시스템으로 추적/관리
- 자체 문서기반 블루프린트 및 Knowledge Base를 사용하며, RAG 등 조각화된 검색 방식은 환자 치료 흐름의 전반적 구조를 파악하는 데 한계가 있어 사용하지 않음
- 코드와 프롬프트, 도큐먼트 등 약 수천 줄 규모로, 10배 이상의 오퍼레이터 처리량 증가와 운영 효율 향상을 실현
- 치료별 새로운 워크플로우는 구글 Docs 기반 블루프린트 작성 후 바로 적용 가능, 도메인 전문가는 GUI로 워크플로우 업데이트/확장 가능
- 기술 스택, LLM 모델 특성, 도구 선택 사유, 캐싱/비용/스케일 이슈 및 실제 사례(Eval, 피드백·재시도, 프롬프트 관리 등)까지 실무적 세부 정보를 폭넓게 공유

---

## 세부 요약 - 주제별 정리

### LLM 기반 원격의료 에이전트로 기존 운용 방식의 확장성과 효율성 문제를 근본적으로 해결함

- "Aila Science"는 원래 오퍼레이터가 직접 콘솔을 통해 환자 메시지에 반응하며, 여러 명이 메시지를 순차적으로 모니터링/승인해야 해서 인력 확장 및 다양한 치료법 적용에 한계가 있었음
- 자체 블루프린트(approved messaging, 워크플로우 도큐먼트)와 Knowledge Base를 정의하고, LLM(Claude, Gemini, OpenAI) Agent가 환자 프리폼(free-form) 메시지에 적절히 대응
- 커스텀 소프트웨어와 오프더셸프 AI 플랫폼(LangGraph, LangChain, LangSmith) 결합 : fast prototyping 및 explainability 확보
- LLM 코어 도입 후 오퍼레이터 한명이 10배 환자를 담당할 수 있을 정도로 확장성 향상(환자량 10x, 실제 수치는 운영 데이터로 지속 업데이트 중)
- 오퍼레이터는 이제 ‘버튼 누름/단순 반복’에서 ‘에이전트 감독/승인, 복잡 케이스 피드백’ 역할로 변화 → 인간 업무가 더욱 고부가가치화

### 치료별 프로토콜 블루프린트와 Knowledge Base는 문서(구글 Docs → 마크다운) 형태로 관리되며 자유자재로 확장 가능함

- 기존 코드 기반 워크플로우 → 구글 Docs 기반(비개발자도 편집 가능한) 블루프린트
- 예시 : "약을 소지한 환자 → QR 코드 인식 → 첫 메시지 수신 → 시간대/복약시점 파악 → 맞춤 메시지 및 이미지를 시간대별 안내"
- 치료별 신속한 Onboarding : 클라이언트(OpenAI 기반 Klein 등)로 신규 치료법 도큐먼트 초안 생성, 전문가가 검수 후 바로 적용
- Knowledge Base 문서들은 상호 참조(link/self-reference) 구조, CSV로 추가 Q&A도 관리, 도큐먼트 전체를 LLM에 입력해도 용량·성능 문제가 없었음(Claude 기준)
- 블루프린트와 Knowledge Base 업데이트 및 버전 관리 시스템 구축, 향후엔 DB/대시보드 통합 예정

### LangGraph와 Agent 구조 선택은 설명용 편의성과 확장성, 투명성(reasoning explainability) 우선 논리임

- 여러 프레임워크 중 LangGraph/LangChain/LangSmith를 사용한 주요 이유는 비개발/논의자도 시각적으로 시스템 동작 구조·흐름을 명확히 이해할 수 있다는 점
- 각 워크플로우는 '가상 오퍼레이터(Virtual OA)'와 'Evaluator(LLM based Judge)'라는 두 에이전트 협업 구조로 설계
- Agent가 제시한 응답에 대해 독립적으로 confidence와 복잡성을 검사하여, 판단이 애매/복잡할 때만 인간 오퍼레이터 개입
- 각 단계, 도구 호출(tool call), 상태 변화는 LangSmith 등에서 명확히 추적 및 시각화 가능
- 설계상 타 프레임워크도 사용 가능하나, 설명력과 유지보수(클라이언트 인수인계) 측면에서 LangGraph를 선호

### 전체 시스템 아키텍처 구체 구현: LLM 파이썬 컨테이너와 Node/React/BaaS 인프라의 결합

- LLM 에이전트와 MCP/도큐먼트 관리 컨테이너는 파이썬(LangGraph), 프론트/게이트웨이/DB/대시보드는 Node, React, MongoDB, Twilio 등으로 구성
- 모든 환자 대화와 상태 관리는 안전(프라이버시/HIPAA 고려)하게 AWS VPC 내부 시스템에서만 작동
- 지역별 배포(예: 유럽 내 배치) 및 확장성 위해 AWS 선정
- 각 파트(LLM 컨테이너, 대시보드 등) 간은 명확한 API/계약으로 통신, 독립 유지보수 가능 구조

### LLM 상태(state) 관리 및 컨텍스트/캐싱 설계는 설계상 유연성과 복원력을 중시함

- 환자별 state 객체는 JSON으로 직렬화, 각 LLM 실행마다 "마지막 상태 + 메시지 기록(필요시 압축)"을 context로 전달
- 시계열 데이터/앵커(진행 상태) 등은 추적, 과거 상태로 버전 롤백 가능하도록 관리
- 대화 context가 일정 이상 길어지면 최신 메시지만 context에 포함(예: 최근 50개), 추가 필요시 더 로드 가능
- Claude의 캐시 기능 및 모델별 system prompt 변경에 따라 캐시 정책도 조정 중(캐싱 범위 및 비용 효율성 지속 고민)
- 상태 정보 일부만 LLM이 갱신 가능하도록 제한(예: 과거 메시지/소스는 변경 불가)

### Hybrid human-in-the-loop: LLM과 인간 오퍼레이터는 유기적으로 상호작용하며 신뢰성과 안전성을 확보함

- LLM(에이전트)은 대부분 자동으로 판단·응답하나, confidence 점수가 낮거나(70% 이하) 복잡도가 높을 땐 인간 승인 필요
- 피드백/수정 필요시 오퍼레이터가 자연어로 요청, 에이전트가 새로운 메시지/행동을 제안(직접 메시지 수정 방식은 지양)
- 실제 현장 오퍼레이터/Physician Assistant 등 의료전문가가 에스컬레이션/감독 역할
- 모든 인간 피드백 및 승인 기록은 LangSmith/Eval 시스템에 보관, 모델 개선시 참고
- 인간도 실수를 하므로, LLM vs 인간 오퍼레이터의 결함률 실데이터도 관리 및 비교(LLM이 인간에 비해 큰 문제 없었음)

### 프롬프트, 블루프린트, guidelines 등 LLM 작동 규칙은 수천 줄 단위로 상세 관리되며 예시와 규정이 풍부함

- Blueprints(치료별 대응), Knowledge Base(Q&A), Guidelines(모델 행동 지침), Confidence Score Rubric 등 프롬프트 도큐먼트 존재
- 예시, 실제 사례 및 유의사항(예: 시간대 처리, ‘앵커’ 정의, tool call 방식, 데이터 프라이버시 등)까지 상세 명시
- 지침서 및 프롬프트는 지속 테스트·피드백을 거쳐 개선(오퍼레이터, 리더, 실제 환자 테스트 등 다단계 검증)
- 인간 이해도와 LLM의 명확한 추론을 동시에 만족시키도록 도큐먼트와 프롬프트 균형 유지
- 프롬프트 길이에 따른 LLM 맥락 한계는 현재(Claude 기준) 문제 없음, 복잡한 캐싱/압축/요약 필요성 탐구 중

### 자동 평가(Eval)와 오류모니터링 체계: 행복 경로(happy path) 및 예외 상황을 다각도로 검증·개선함

- LangSmith 데이터셋에서 실제 대화/상황을 추출해 커스텀 Python harness + PromptFu LLM Rubric으로 자동 평가체계 구축
- 기준 : 메시지 일관성, 행위 적정성, 시점(Time) 등 - 오답(불일치, 시간 오류 등)은 Rubric에 맞춰 검출
- 주기적으로 ‘happy path’ 뿐 아니라 edge case(이상 상황, 실패 케이스 등)도 데이터셋에 포함시켜 검증
- 평가 결과는 모두 LangSmith, 로컬 시스템에 저장, 실시간 문제점(모델 오류, 도큐먼트 부족, LLM 헛소리 등) 확인 및 수정 반영
- 근본적으로 소스 코드나 LLM 프롬프트만으로 검증하지 않고 전체 시스템 동작의 통합 품질을 평가

### 비용, 캐싱 및 확장성: 실 운영 기준의 투명한 비용·성능 관리와 스케일 전략

- 메시지 1개 기준 평균 15-20센트(약 10~15,000 토큰 소모), 캐시 정책과 컨텍스트 길이 조절로 비용 효율성 극대화 중
- Scale: 현재 수천 환자 동시 지원, 실제 병목은 오히려 텍스트 게이트웨이(Twilio 등)가 될 가능성이 높음
- 신규 치료법 추가, 다른 병원/클리닉 확장도 구조 상 손쉽게 가능
- 클라우드/모델 종속성 최소화, 플랫폼 이식성(awareness of lock-in 방지)도 전략적으로 고려

### 실제 시스템 데모: 환자상황 따라 유연하게 진행상태 추론, 복약 등 착오도 실시간 보정

- 시스템 대시보드 : needs attention 플래그로 모든 환자/상호작용 실시간 모니터링, 인적 개입 필요 목록기도
- 환자 시간대는 입력값에서 자동 추론(UTC 오프셋 계산), 다른 지역 이동(비행 등)에도 동적으로 반영
- 복잡상황(예: 약 복용 착오/일정보정, 자유서술 응답 등)에서도 blueprint 기반 최소질문, 반복질문/중복회피 로직 탑재
- 전체 메시지·상태·행동 히스토리 추적 및 압축, Langmith에서 전체 reasoning/도구호출 과정도 투명하게 확인 가능

### 도구 및 프레임워크 활용과 코드 구조: 파이썬 몇 천 줄, 프롬프트 자체 관리, 최소한의 특화 로직만 직접 코딩

- LLM 컨테이너/워크플로우 약 4,000줄 파이썬(도구, 상태관리 로직 중심), 마크다운 프롬프트·가이드라인 문서 약 4,000줄(방대한 예시/규정)
- 주요 도구: Langchain, Langraph, Langsmith, PromptFu(LLM Rubric), MCP(문서/상태 IO), Twilio, MongoDB, Node/React 프론트 등
- MFA(오류 재시도), command object·retry node 등으로 오류/예외 상황의 루프 및 복원 설계
- Klein 등 다양한 AI 개발툴(IDE) 활용, prompt engineering과 API 문서 전송으로 신속한 'vibe 코딩' 방식도 적용
- 테스트는 별도 TDD로 작성하기보다, 실 Eval 및 LangSmith 분석 기반으로 실제 품질 검증

### 프라이버시, 안전성, 오용 대응: 환자정보 최소화, 프롬프트 주의, prompt injection/악의적 행동엔 다중 방어체계 적용

- 진료 관련 핵심 데이터(ID, 이름, 시간)만 LLM에 제공, 전화번호 등 식별정보는 VPC 내부에만 저장·관리
- 메시지/컨텐츠 기반 공격 etc.에 대해 red team(실 오퍼레이터) 중심 내부 테스팅, anomaly 감지시 자동 에스컬레이션 설계
- LLM은 오지랖 범위를 명확히 제한(치료 관련 질문·상태 관리만 담당), 복잡하거나 off-label, 위험상황은 즉시 인간 에스컬레이션 규칙 적용
- 정책상 모든 과거 대화는 treatment 종료 후 삭제, 학습·fine-tuning 등에는 실제 환자 데이터 사용하지 않음

***
