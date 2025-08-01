---
author: AI Makers Club
pubDatetime: 2025-07-30T08:19:10.086Z
title: "Layering every technique in RAG, one query at a time - David Karam, Pi Labs (fmr. Google Search)"
slug: w9u11ioHGA0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 “RAG 기술의 모든 계층별 기법을 한 번에 적용하며 쌓아올리는 방법”으로, RAG(Retrieval Augmented Generation) 시스템에서 가능한 다양한 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/w9u11ioHGA0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Layering every technique in RAG, one query at a time - David Karam, Pi Labs (fmr. Google Search)](https://www.youtube.com/watch?v=w9u11ioHGA0)  
**채널명:** AI Engineer

## *RAG 기술의 모든 계층별 기법을 한 번에 적용하며 쌓아올리는 방법* 핵심 요약

- 영상 제목은 “RAG 기술의 모든 계층별 기법을 한 번에 적용하며 쌓아올리는 방법”으로, RAG(Retrieval Augmented Generation) 시스템에서 가능한 다양한 품질 향상 기법을 실제 사례 및 데이터와 함께 단계별로 총망라해 설명함
- 품질 개선을 위한 기법 적용은 반드시 ‘실제 결과(아웃컴)’로부터 출발해야 하며, 문제를 구체적으로 파악한 뒤 적절한 기법을 우선순위에 따라 도입해야 한다고 강조함
- Google Search, Pi Labs 등 실제 검색/정보탐색 현업 경험을 바탕으로 ‘품질 엔지니어링 루프’(베이스라인→로스 분석→문제 파악→적절한 기법 적용) 관점에서 접근함
- 인메모리 검색(컨텍스트 윈도 내 모든 문서 입력)→BM25 등 키워드 기반 검색→벡터(임베딩) 검색→리랭커(Cross Encoder)→도메인 특화 임베딩→랭킹 함수에 정보 신호 추가→유저 신호 반영(클릭/피드백)→서브쿼리 분해/팬아웃→멀티 백엔드 질의→디스틸레이션 및 시스템 개선 등 점진적 계층별 단계로 설명함
- 각 방법의 적용 필요성과 한계, 실제 실패 사례, 도메인 특수성, 비용/복잡도(impact & difficulty), 최신 사례 및 사례별 적합성(예: 법률/쇼핑/검색 등)을 구체적으로 제시
- “복잡도 조정 영향력”(complexity adjusted impact) 원칙 제안: 쉬운 해결책부터 적용, 필요 없을 땐 과도한 최적화 지양, 복잡한 기법은 해당 문제의 직접적 원인이 확인된 뒤에만 도입
- RAG와 관련된 버즈워드(예: ‘RAG가 죽었다’, ‘에이전트가 대세’ 등)에 휘둘리지 말고, 모든 기법 선택을 실제 쿼리 집합, 정보 요구, 품질 분석 등의 실증적 근거에 따라 결정해야 한다는 원칙을 강조
- 크로스 엔코더/커스텀 임베딩/정보 신호/유저 신호 등 고난도 기술도 특정 도메인이나 성능 한계가 명확히 파악된 경우에만 투입, 제품 설계도 품질 엔지니어링의 한축으로 고려해야 함
- 실무 적용 과정에서 발생하는 쿼리 오케스트레이션, 멀티 백엔드 활용, 스케일 문제(비용, 지연), 점진적 품질 저하/향상 UX 설계까지 포괄적으로 다룸

---

## 세부 요약 - 주제별 정리

### RAG 품질 개선은 시작부터 ‘실제 아웃컴’ 기준으로 설계되어야 함

- RAG 혹은 검색 시스템 품질 개선의 시작점은 ‘기술’이 아니라 ‘실질적 제품 결과(아웃컴)’임
- 제품 또는 서비스가 만족시켜야 하는 명확한 목표–예를 들면 CRM 에이전트의 론치 품질 기준–로부터 역산하여, 각 단계별로 점검해야 할 쿼리 세트(쉬움, 중간, 어려움)를 구성
- 품질 측정은 벤치마크/절대 평가만이 아니라, 실제 서비스 출시 가능성과 사용자 신뢰 수준을 충족하는 개인화된 기준을 함께 고려함
- 어떤 기법을 언제 투입할지 결정할 때는 실제 쿼리, 실패 사례, 정보 요구를 진단해 우선순위를 잡아야 함
- 베이스라인을 정하고, 로스(loss) 분석을 수행, 무엇이 잘 안 되는지 구체적으로 파악한 후 개선 기법을 단계적으로 추가하는 ‘품질 엔지니어링’ 루프 권장

### 품질 엔지니어링은 먼저 쉽고 효과적인 기법부터 시도하고, 불필요한 복잡성은 배제해야 한다고 강조함

- 다양한 품질 개선 기법(기술 스택)을 한눈에 볼 때는 ‘도입 난이도’(difficulty)와 ‘실제 임팩트’(impact) 두 요소가 핵심
- 쉬운 해결책부터 적용, 예: BM25는 도입이 매우 쉽고 품질 개선 효과도 뚜렷하므로, 항상 시도해볼 만함
- 커스텀 임베딩, 크로스 엔코더 등 복잡한 기법은 비용과 효과를 꼼꼼히 비교, 쿼리 분석 결과 필요성이 확인된 상황에서만 도입 권장
- 아직 문제가 일어나지 않았다면 복잡한 기법을 미리 적용하지 말고, 문제가 발생하면 이를 정확하게 진단해 ‘정확히 필요한 만큼’ 복잡도를 추가할 것

### 인메모리 검색(컨텍스트 윈도 이용)은 시작 단계에서 반드시 시도해야 할 가장 간단한 방법임

- 가장 직관적인(쉬운) 검색 기법은 모든 관련 문서를 LLM의 컨텍스트 윈도에 직접 넣는 ‘인메모리 검색’
- 예: NotebookLM(구글)은 최대 5개 문서를 바로 입력, 질문 가능 (RAG 미적용)
- 한계는 입력 용량 초과, LLM의 문서 주의(attention) 분산 등에서 발생→이때 복잡도 높은 기법으로 이동 필요

### BM25 검색은 키워드 중심 쿼리에서 여전히 강력하며, 적용이 매우 간단하다고 설명함

- BM25의 4요소: 쿼리 토큰 빈도, 문서 길이, 특정 용어의 위치 등
- 키워드/토큰 중심 정보요구(예: “아이폰 배터리 수명”)에서는 여전히 최고의 검색 성능
- 적용 난이도가 매우 낮고 큰 품질 향상을 쉽게 가져옴
- 단, 비정형 쿼리(의미 기반 질의)에는 한계(키워드와 실제 의미 매칭 불가)

### 벡터(임베딩) 검색 기법은 뉘앙스, 맥락, 의미 중심 쿼리에서 필수적임

- 벡터(리버런스 임베딩) 기반 검색은 쿼리와 문서를 임베딩 공간에 매핑, 유사성 측정으로 의미 기반 검색 가능
- 예: “아이폰을 얼마나 사용할 수 있나요?”와 같은 자연어 질문은 벡터 검색이 효과적
- 각 쿼리가 키워드형인지, 뉘앙스형인지 분석 후 쿼리 비중에 따라 적용 여부 결정
- 키워드 검색과 의미 검색(벡터 기반)은 각각 분명한 적용 영역이 존재함 (ChatGPT 등에서 테스트 예시 제공)

### 크로스 엔코더(리랭커)는 상호 컨텍스트까지 고려 가능하나, 매우 비용이 높으므로 후보 집합 축소 후 사용해야 한다고 알림

- 크로스 엔코더(Cross Encoder)는 쿼리와 문서 전체를 하나로 입력해 상호작용(relevance)를 정밀하게 평가
- 기존 임베딩(별도 벡터 쌍)보다 훨씬 강력하지만, 연산 자원이 많이 들고 전체 문서 대상으로는 비효율적
- 일반적으로 후보 집합을 1차로 축소(BM25, 벡터 검색 등)한 뒤, 제한된 수의 문서에만 추가 적용
- 대표적 한계: 과도한 비용, 전체 문서에서는 적용 불가

### 도메인 특화 커스텀 임베딩은 법률, 쇼핑 등 특수 도메인에서 의미/용어 불일치 문제가 뚜렷할 때만 도입한다

- 법률, 쇼핑 등 분야에서는 일반 언어 임베딩/검색만으로는 커버할 수 없는 특수용어, 맥락(예: ‘regime’, ‘material’ 등 법률 용어)이 많음
- 일반 임베딩/리랭커 실패 사례: 단어의 도메인별 의미 차이, 오프-디스트리뷰션(훈련 영역 외) 문제 등
- ChatGPT로 ‘법률 도메인에서 관련성 검색이 실패하는 예’ 요청→단어 의미 충돌, 특수 의미 등 실제 사례 제공
- 쿼리/문서 특성, 도메인별 어휘 특이성 분석이 일차적으로 필요하며, 실제 실패 현상이 확인된 경우에만 커스텀 임베딩 개발 권장

### 자연어 기반 검색 외에도 실제 랭킹에서 ‘정보 신호(도메인∙비즈니스 변수)’가 반드시 추가되어야 함

- 실제 상황에선 단순 관련성만으론 부족, 가격 정보, 판매자 신호, 청취 횟수(팟캐스트 등) 등 각 도메인별 중요한 정보 신호 추가 필요
- 예: “아들에게 줄 저렴한 선물”→“$50 이상 예산” 명시 후에도 랭킹 결과는 여전히 $15, $40 등 쿼리 의도 반영 실패
- 이는 ‘가격 신호’가 랭킹 함수 내에 직접적으로 반영되어 있지 않기 때문
- 웹/검색 예시: 구글 PageRank는 단순 관련성이 아니라 웹코퍼스 내 ‘중요도’를 반영, 실제 랭킹에는 ‘데이터 구조’ 신호가 필수적임

### 유저 신호(클릭, 피드백 등)는 최종적으로 개인 선호 맞춤 랭킹을 위해 필수적으로 들어가야 한다

- 대량의 데이터셋, 다양한 사용자 행동이 있을 때 클릭 신호, thumbs up/down 등 사용자 반응 데이터를 예측 및 결합
- 실제 랭킹 함수는 관련성(semantic relevance) + 정보 신호(price 등 구조적 변수) + 유저 신호 등 모든 신호를 통합해야 함
- e.g. 관련성, 가격 신호, 구매전환 신호, 클릭 예측치를 조합해 최종 랭킹 점수 산출

### 잘못된 질의(쿼리) 생성/오케스트레이션은 LLM-툴 간 인터페이스 설계상 주요 실패 원인임을 밝힘

- 에이전트·오케스트레이션 등 복합 프레임워크 활용 시, LLM이 내부 검색(툴)에 맞지 않는 쿼리를 생성→실패 발생
- 쿼리를 다수의 서브 쿼리로 분해(팬아웃, fanout)해 각각 실행하는 전략 필요 (구글 AI Mode: 15~20개로 분해 질의)
- LLM이 사용 도구에 대해 충분히 알지 못하고, 단순 프롬프트로는 복잡한 툴 인터페이스 전달에 한계
- 검색엔진-LLM 경계(검색엔진에서 더 복잡함을 다룰지, LLM에서 쿼리를 조정할지) 문제는 현재 미해결

### 멀티 백엔드 질의, 보강 검색(supplementary retrieval) 등은 품질 하락 방지 및 리콜 극대화를 위한 필수 전략임

- 실제 서비스에서 ‘검색 호출 횟수를 늘리는’ 것 자체가 품질 저하 방지에 효과적
- 구글에서도 ‘의도 불확실 쿼리’(예: 중동 요리 이름)에는 다수 백엔드로 병렬 질의/통합 방식 운영
- 사용 사례별로 적절한 범위의 백엔드, 다양한 데이터소스 활용은 리콜 및 품질 심화에 직접적으로 기여
- 단, 비용·성능 오버헤드에 유의, 실제 리콜 개선이 체감되는 경우에만 적용 권장

### 초대규모 운영에서 비용/지연 등 한계에 직면하면 모델 경량화(디스틸레이션)와 전문 작업 필요

- 대량의 요청, 복수 백엔드, 쿼리 다중화로 인프라(특히 GPU) 부담 크기 급증
- 대표적 예시: 서버랙을 건물에서 떨어뜨린 광고 이미지, Sam Altman(오픈AI CEO)의 ‘GPU 멜팅’ 발언
- 근본 해결책: 심층 파인튜닝/디스틸 모델 개발로 작은 모델이 품질은 유지하며 생산 속도를 대폭 개선
- 실제 적용은 고난도 작업이며, 응답 시간(예: 10→2초)이 중요한 서비스, 대규모 데이터 운용에서만 고려

### 품질 엔지니어링의 마지막 단계는 제품 설계(UX)와의 유기적 통합이며, ‘품질 저하 허용’ 설계가 반드시 필요함

- 기술적으로 아무리 고도화해도 완벽한 품질은 불가능(확률적 시스템 속성)
- 일정 한계에선 문제를 ‘제품 설계’로 이관: 사용자가 자연스럽게 품질 저하를 인지·보완할 수 있도록 UX/프로덕트 디자인 필요
- 구글 쇼핑 예시: 이해도가 높을 땐 풍부 UI(필터, 리뷰 등), 불명확할 땐 단순 리스트로 경험 단계적 조정
- 일부 고객지원 등에서는 human-in-the-loop(사람 개입) 구조 설계가 현실적임

### 전체 메시지는 ‘실제 쿼리와 품질 데이터에 기반한 경험적 개선’ 원칙임을 재차 강조하며 마무리함

- RAG, 에이전트, 다양한 최신 기법들 사이 논쟁/버즈워드에 휘둘리지 말고, ‘실증적’ 접근이 무엇보다도 중요
- 베이스라인 측정→실패 로스 분석→쉬운 해결책 우선→중간 수준 적용→진짜 필요한 경우에만 어려운 기법 도입이라는 단계별 프로세스 추천
- 슬라이드 자료 공유 및 본인 팀 사례 공유, ‘경험 많은 정보탐색 및 검색 시스템 엔지니어들과의 교류 권장’으로 마무리
