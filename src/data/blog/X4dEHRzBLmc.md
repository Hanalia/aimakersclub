---
author: AI Makers Club
pubDatetime: 2026-04-11T08:20:30.561Z
title: "Judge the Judge: Building LLM Evaluators That Actually Work with GEPA - Mahmoud Mabrouk, Agenta AI"
slug: X4dEHRzBLmc
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상에서는 실서비스 내 LLM(대형언어모델) 기반 에이전트의 신뢰성 평가를 위해 “LLM as a Judge(판사로서의 LLM)”의 중요성 및 한계, 인간 기준과 일치하는 평가자 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/X4dEHRzBLmc/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Judge the Judge: Building LLM Evaluators That Actually Work with GEPA — Mahmoud Mabrouk, Agenta AI](https://www.youtube.com/watch?v=X4dEHRzBLmc)  
**채널명:** AI Engineer

## **LLM 평가자를 실제로 동작하게 만드는 GEPA 기반 평가 시스템 구축** 핵심 요약

- 영상에서는 실서비스 내 LLM(대형언어모델) 기반 에이전트의 신뢰성 평가를 위해 “LLM as a Judge(판사로서의 LLM)”의 중요성 및 한계, 인간 기준과 일치하는 평가자 개발법을 심층적으로 다룸
- 흔히 사용되는 허위정보(LM Hallucination) 판별 등 단순 judge prompt는 실제 문제 상황에서 신뢰도와 민감도가 낮아 현업에선 불만족스러운 경우가 많음을 실사례로 지적
- 인간 평가(수작업 어노테이션)는 품질은 뛰어나나 반복 개발에는 느리고 비효율적이므로, 인간 기준에 “보정(calibration)”된 자동화 judge가 핵심 병목을 해결한다고 설명
- 실습 예시로 고객지원(Customer Support) 업무 시나리오와 Sierra의 TowBench 데이터셋(599개 대화, 다중 라벨링, 다양한 기준)에 대해 정책 준수 판별의 평가자 개발을 시연
- 전문가(Subject Matter Expert) 기반 오류 유형 클러스터링, 명확한 이진(binary) 기준과 정성적 사유(reasoning) 포함된 라벨링이 중요함을 상세히 논증
- GEPA(GPA) 알고리즘 도입: 후보 프롬프트 군집→계속적인 mutation/merge→파트로(Parieto) 프런티어로 다양성 및 최적화 균형 유지→반복을 통해 점점 개선하는 유전알고리즘 계열 방식 활용
- 최적화 API(optimize-anything) 활용으로 judge prompt 뿐만 아니라 다양한 구성요소(체인, 파라미터 등) 조합 지원, 다양한 실험행렬 반복
- 실험 결과, 초기 naive judge 대비 정책 비순응(비준수) 판별력이 0→다수로 강화, validation set 기준 전체 정확도는 61→74%로 13%p 증가, 그러나 완전한 인간 수준 95%에는 미달
- 데이터 품질, seed prompt 설계, reflection 템플릿, 모델 크기 및 비용, 실험 매개변수 튜닝 등에서 실질적 시행착오와 중요한 경험적 교훈을 공유함
- Agenta AI, 오픈소스 LMOPS 플랫폼을 통한 데이터/실험 셋업, 실무 적용 경험 및 다양한 최적화 유닛(프롬프트, 평가, 파라미터 등) 연동을 실사례로 제공함

---

## 세부 요약 - 주제별 정리

### LLM을 판사(평가자)로 사용 시 초기 기대와 현실 사이의 괴리는 실제 서비스 품질 저하로 나타남

- LLM 기반 에이전트를 모니터링하기 위해 “LLM as a judge” 라이브러리(예: hallucination 판별) 등을 적용하는 것이 일반적임
- 첫 도입 시에는 시스템 상으로는 문제없어 보이나, 현장 고객들은 여전히 “에이전트가 제대로 동작하지 않는다”는 문제를 제기함
- 실제 trace(대화 로그)를 확인하면, judge용 prompt가 “이 응답이 hallucinated인가?”처럼 매우 단순하여 실제 문맥을 반영하지 못하는 경우 많음
- 만약 모델이 스스로 hallucination을 완벽하게 판별할 수 있다면, 애초에 제품이 완전히 잘 동작했을 것이라는 역설을 지적

### 인간 어노테이션과 calibration된 LLM 평가자를 만드는 것이 개발 속도 및 질을 획기적으로 향상시킴

- 반복 실험(프롬프트/에이전트 튜닝→평가→개선)의 스피드는 대개 평가 단계가 병목으로 작용
- 인간 평가자는 신뢰도 높으나 반복에 비효율적, LLM judge가 인간 기준과 일치할수록(“calibration”) 개발 사이클 하중을 줄이고 정확도도 높일 수 있음
- 온라인 평가에서도 실제 서비스 품질 및 배포 후 지표/변수 변화에 신속히 대응 가능
- AI 개발의 “data flywheel”(데이터-관찰-새 평가기준 반영 반복)의 완전 자동화에 한 걸음 다가갈 수 있다고 설명

### 고객 지원 에이전트 사례에서, 구체적인 정책(KPI)에 기반한 평가 기준 도출이 평가자 설계의 핵심임

- 실습 사례로 “항공사 고객 지원 에이전트”를 다룸. TowBench(시라 제공) 데이터셋에는 실제 상황을 반영한 대규모 대화, 다양한 정책 적용 사례가 포함됨
- 배경: 항공권 예약/변경, 사용자 정보 접근, 복수 정책 규칙 등이 있어 평가가 단순하지 않음
- 데이터: 599개 대화, 정책 준수/비준수 어노테이션 포함. 62%/38%로 비대칭이나 심각하게 기울지는 않음
- 데이터 품질: 어노테이션 생성방식, 트레이스 적합도, 정책 복잡성 등 실험의 난이도를 올리는 요인이 있음을 언급

### 평가 기준은 현업 전문가의 오류 유형 분류에서 출발하며, 각 오류마다 별도의 binary 평가자가 필요함

- “일반적 성공/실패”로 측정하거나 1~5점 등 range로 채점하면 일관성이 떨어지고 학습이 매우 어려움
- 고객지원의 경우, 정책 준수, 응답 스타일, 정보전달, 도구 사용오류 등 다원적 오류 유형을 클러스터링 후 각 유형별 평가자를 별도로 설계해야 한다고 강조
- 각 대화 트레이스에는 “왜 실패했는지” 구체적 reasoning(텍스트 설명, 규정 위반 근거 등)을 human-in-the-loop 어노테이터가 제공하는 것이 필수
- reasoning 없이 binary label만 쓰면 LLM이 규칙을 추론하고 일반화하는데 실패함

### 데이터 라벨링 및 오류 군집화가 가장 어려우며, 여기서 평가자 설계의 70% 이상이 결정됨

- 빠르게 소개됐으나 실제론 라벨링, 메트릭 설계, 데이터 분포/차별성 확보가 시간이 가장 많이 소모되는 난제임
- 평가용 데이터가 충분히 다양성을 갖고, 각 사례의 배경정보와 어노테이션(reasoning 포함)이 필수적
- 현업에서 빈번히 발생하는 문제: 단순하/불충분한 label, 유사 작업 반복, 실제 도메인 복잡성 미반영 등

### GEPA(GPA) 알고리즘을 활용한 후보 프롬프트 생성 및 최적화의 상세 단계가 성능 개선의 핵심이다

- GEPA는 시드(seed) prompt에서 출발→prompt mutation(변형)→merge 전략(여러 prompt 병합)→다양한 후보군 생성→파트로 프런티어(각 케이스에서 최고 성능)을 반복하며 최적의 평가자 prompt 추출
- mutation 단계에서는, 기존 프롬프트 실행 결과(성공/실패 및 근거)까지 모두 참고해 LLM이 스스로 reflection(성찰) 기반 새 프롬프트를 만듦
- 파트로 프런티어 기반 선정은 단순 ‘평균 점수 상위’ 대신 개별 케이스 커버리지를 보장하는 Pareto set 채택
- merge 전략은 prompt A, B의 가이드라인 병합을 통해 더 포괄적인 규칙 prompt를 생성

### 최적화 엔진(Optimize Anything API)를 통한 유연한 실험 설계 및 반복 검증이 가능함

- optimize-anything API는 단순 prompt 최적화뿐 아니라, 평가자 구성 전체(dict형 프롬프트, temperature 등 파라미터 포함), 프롬프트 chain 등 확장 가능
- 부여된 evaluator 함수는 후보 prompt를 이용, 대화 trajectory, 라벨, reasoning, 결과 등 모든 정보를 수집 및 기록
- 반복 실험 가운데 reflection prompt(LLM이 어떻게 새 prompt를 짜야 할지 방향 제시)가 품질에 큰 영향
- 지연시간, 비용 등 현실적 제약도 파라미터를 통해 세밀히 조정 가능

### 실험에서는 naive(기본) judge에서 출발하여 몇 가지 중요한 설계/튜닝 요소로 성능의 큰 폭 향상에 성공함

- seed judge 설계 시 “모든 답변이 기본적으로 규정을 준수한다고 가정하고 위반 사유가 있을 때만 non-compliant 판정”이라는 prior 넣기가 매우 효과적이었음
- default judge는 61% 정확도, 대부분 compliant로 bias됨(98%), non-compliant 판정은 거의 못함
- GEPA 최적화/반복 적용 후, 74% 정확도, non-compliant recall/precision이 획기적으로 개선됨
- 파트로 프론티어 기준 100% 정확도 달성(트레이닝 케이스에 대한 overfitting), validation set에서는 13%p baseline 개선
- 하나의 prompt로 모든 케이스를 통합하는 부분(병합 전략 등)에서 추가 개선 가능성이 남아있음

### reflection prompt, initial seed prompt, 모델 크기 등 각 요소의 변화 시도와 성과 차이가 실시간으로 확인됨

- default reflection prompt(기본 제공)는 실제 policy를 올바르게 generalize하지 못해 성능 미흡
- 직접 작성한 reflection 템플릿을 통해 구체적 규정, 규칙, 평가 기준을 명확히 기술하니 개선폭 큼
- GPT-4, Gemini, Grok 등 후보 모델별 실험: 작거나 구버전 모델(mini/nano)이 가장 저조, 중~상위 모델 사용이 필요
- judge prompt 설계 시 policy 원문을 포함시키면 로컬 미니마(개선 불가 구간)에 빠지는 경향; annotation에 내포된 규칙만 이용하면 더 잘 학습하는 추세
- 소규모 실험/시각화/반복 튜닝→대규모 샘플링 병행이 효과적으로 관찰됨

### 데이터 품질, 모델 비용, 반복 실험 전략 등 실무적 고려사항과 시행착오 경험을 구체적으로 공유함

- 대화 trajectory 분량이 길고, 고성능 LLM을 쓸수록 토큰 비용이 가파르게 증가함($200~$300 소요, 실험 규모/모델 따라 차이)
- 최적화 과정에서 성능 상승과 비용/효율 trade-off 고려 필요(리파인먼트엔 고성능, judge엔 중소형 모델 조합이 권장)
- 반복실험(200~300 이터레이션/실험) 및 각종 하이퍼파라미터(Batch size 등) 튜닝의 중요성 강조

### Agenta LMOPS 플랫폼의 실용성, 실시간 실험과 대시보드, 소스코드 제공 등 오픈소스 생태계 활용법 안내

- Agenta(오픈소스 LLM 오퍼레이션스 플랫폼) 활용: 관찰, 프롬프트 관리, 평가 전체 파이프라인을 빠르게 실험/시각화하며 적용
- GitHub, 영상 링크 통해 모든 실험/코드/데이터 공개, 향후 실서비스/연구 목적 수정·확장 가능
- LinkedIn, X(Twitter) 등에서도 추가 정보/이슈 논의/질문 접수 가능

### 완전 자동화·자기개선형 LLM 평가자 실현을 위한 교훈 및 향후 과제 제시

- 반복적으로 자동·반자동 평가·개선 루프 확립이 차세대 LLM 운영환경 핵심
- 높은 품질의 데이터와 명확한 annotation, task-tailored 평가메트릭 설계가 judge 시스템의 한계와 미래를 결정
- 현업에서 “단순히 judge prompt만 바꾸면 된다”는 오해와, 실제로는 다각적 설계/반복 실험/데이터 확보가 관건임을 강조
- 앞으로 GEPA 기반 최적화, Agenta 플랫폼 등 오픈 생태계 툴링 활용, 비용 효율화, 신뢰수준(accuracy 95%대) 달성까지 다양한 연구/개발 기회가 있음을 시사
