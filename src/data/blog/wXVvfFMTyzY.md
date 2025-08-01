---
author: AI Makers Club
pubDatetime: 2025-07-27T08:20:47.036Z
title: "A2A & MCP Workshop: Automating Business Processes with LLMs - Damien Murphy, Bench"
slug: wXVvfFMTyzY
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 워크샵은 Google의 A2A(Agent-to-Agent) 프로토콜과 MCP(Model Context Protocol)를 활용해 복수의 AI 에이전트 시스템을 구축하고, 이를 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/wXVvfFMTyzY/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [A2A & MCP Workshop: Automating Business Processes with LLMs — Damien Murphy, Bench](https://www.youtube.com/watch?v=wXVvfFMTyzY)  
**채널명:** AI Engineer

## *LLM을 활용한 비즈니스 프로세스 자동화: A2A & MCP 실습 워크샵* 핵심 요약

- 본 워크샵은 Google의 A2A(Agent-to-Agent) 프로토콜과 MCP(Model Context Protocol)를 활용해 복수의 AI 에이전트 시스템을 구축하고, 이를 통해 비즈니스 프로세스 자동화를 실습하는 내용을 다룸
- 발표자인 Damien Murphy는 Bench(벤치)라는 AI 에이전트 기반 툴 스타트업에서 팀 및 엔터프라이즈용 자율형 AI 에이전트를 개발하고 있으며, MCP와 A2A 실제 응용 경험을 공유함
- A2A는 웹 상에서 원격 프록시 방식으로 에이전트 간 통신·작업 위임·병렬처리를 하는 프로토콜로, 한 개의 범용 에이전트가 모든 일을 하는 대신 전문화된 다수의 에이전트 협동 구조를 촉진함
- MCP는 AI 에이전트가 다양한 도구, 리소스, 맥락(Context)에 표준화된 방식으로 접근하도록 지원하는 인터페이스로, 현재 1만여 MCP 툴 사용 가능(그 중 약 7,000개는 Zapier 기반)
- 워크샵 실습에서는 GitHub Issue 생성, Slack 메시지 전송, 외부 Bench 에이전트 이용 등 4개의 A2A 및 MCP 연동 에이전트를 구축해, 회의록에서 실질적 액션을 자동화하는 전체 파이프라인을 시연함
- MCP의 경우 다양한 SaaS 도구와 코드 통합 없이 플러그인 형식으로 쉽게 확장 가능하나, 사용 목적상 직접 API 통합보다 한계와 불편(속도, 세밀 제어, 데이터 인덱싱 등) 존재
- Bench 구현 등 실제 현업에서는 MCP를 통한 3rd party 도구 접근과 자체 엔터프라이즈용 에이전트 구축의 장단점을 비교하고, 특정 시점에서는 보다 깊은 통제/인덱싱을 위해 자체 통합이 필요해짐
- 맥락 윈도우(Context Window)와 프롬프트 캐싱, 에이전트 카드/스킬 노출 등 대규모 에이전트 시스템의 현실적 한계와 관리 전략(Lean Context·서브에이전트 보호·캐시 최적화)을 상세히 설명
- 실습 및 데모에서는 Zapier MCP 서버·Genkit 프레임워크·Gemini API·Bench 외부 에이전트 등 다양한 도구와 오픈소스 코드를 단계별로 활용법 시연
- Q&A에서는 인증·권한·보안, 복잡도·관찰성, 휴먼 인 더 루프, 반복 호출/재귀/중단 전략, 실제 현업 적용의 한계와 고려사항 등 실전적 질문과 경험 답변이 이어짐

---

## 세부 요약 - 주제별 정리

### Damien Murphy가 Bench에서 어떤 역할을 하며 본 워크샵을 준비한 이유 설명

- Damien Murphy는 15년차 풀스택 개발자이자 솔루션 엔지니어 출신으로, 최근 3년간 음성 AI와 에이전트 관련 제품을 개발 중임
- 2개월 전 Bench라는 프리레버뉴(pre-revenue) AI 스타트업에 합류. Bench는 Sutter Hill Ventures가 투자한 기업으로, 팀 단위 및 엔터프라이즈 특화 자율형 AI 에이전트 개발 중
- Bench는 Manis(에이전트형 AI 라벨의 제품)와 유사하나 복수 하위 에이전트(sub-subparallel agent) 병렬 자동화와 유연한 연결을 지향함
- 작년 워크샵에서는 음성 에이전트 스웜을 주제로 했으나, 올해는 A2A와 MCP 기반의 복수 에이전트 시스템 구축에 집중
- AI 에이전트 제작의 진입장벽이 낮아진 상황에서, “복잡한 비즈니스 태스크를 실제로 해내는 자율형 에이전트” 개발이 차세대 난제로 부상함

---

### A2A와 MCP의 개념, 역할, 장단점 및 적용 상황을 상세히 비교

- A2A(Agent-to-Agent)는 구글이 발표한 “웹상 원격 에이전트 통신·서비스 탐색·작업 위임 프로토콜”로, 서로 무관하거나 제어권이 없는 에이전트 간 상호 작용에 특화
- 핵심 장점: 에이전트 전문화 가능(100개 에이전트가 각각 한가지 특화), 작업 위임 방식으로 계층적·병렬처리 가속, 워크플로우 확장성, 메인 에이전트의 맥락 크기 최적화
- A2A는 자체 프레임워크(autogen 등)와 달리 원격/알 수 없는 3rd파티 에이전트와의 상호 운용이 핵심
- MCP(Model Context Protocol)는 1만여 개 도구(7,000여개가 Zapier MCP)와 LLM 리소스를 표준 인터페이스(플러그인 구조)로 제공하는 일종의 AI용 “USBC”
- MCP는 LSP 아이디어(코드 IDE 언어 서버 프로토콜) 채택, API 통합/관리가 불필요, 도구/프롬프트 템플릿/리소스/샘플링 등 부가 기능 제공
- MCP는 외부 리소스·도구 통합이 핵심이나, 태스크 피드백/비동기 관리 등이 한계
- A2A와 MCP를 병합하면, A2A가 원격 인터페이스 및 서비스 탐색, MCP가 도구 사용과 맥락 관리 로 역할 분담함

---

### 실제 프로덕션 및 개발에서 A2A/MCP를 선택·적용하는 실질 판단 기준 예시

- 자체 코드나 도구 전체 통제 가능 시(로컬함수 호출, 단일 코드베이스) 굳이 A2A/MCP 필요 없음: 오히려 개발·디버그·속도·유지보수 모든 측면에서 자체 함수 호출이 유리
- A2A/MCP가 필요한 대표 케이스: 3rd파티 툴 대량 확장성, 외부 업체가 개발·운영하는 원격 에이전트/서비스 통합 필요 시
- 대표 예: Salesforce, Slack 등 주요 플랫폼과의 통합은 MCP 서버 등록만으로 손쉽게 확장 가능(사용자 맞춤 MCP 서버 추가)
- 하지만 제공되는 기능이 한정적이거나(“원하는 대로 움직이지 않음”), 반복된 API성 호출(예: 슬랙 채널 ID) 인덱싱이 필요한 경우, 직접 통합이 나은 대안이 될 수 있음
- A2A의 경우 복잡성은 완전히 은폐되어 있으나, 사전 정의된 에이전트(Agent Card)를 통해 노출 기능과 한계가 분명함

---

### 실습 프로젝트 설계 구조 및 서버·코드 구성 과정 단계별 설명

- 실습용 깃허브 레포를 준비(Slack 채널: workshop A2A-mcp-2025), 레포 구조에 맞춰 Host Agent 및 여러 Sub Agent(각자 별도 서버/레포에 존재 가능), A2A Server/Client, MCP Client 포함
- Zapier MCP 서버 세팅 후(GitHub/Slack 통합), SSE 방식 활용(최근에는 HTTP 스트리밍이 대세), MCP 서버 URL과 Gemini API 키(무료)만 준비하면 실습 가능
- 실습 중 Bench의 원격 A2A 에이전트를 예시로 활용 – 공식 API 미공개, 실습 시 외부 EC2 호스팅
- Bench의 경우 다수의 LLM(AI 모델) 집합체로, Slack/Salesforce 등 MCP 통합부터 자체 인덱싱·데이터 캐시 구축 경험 사례로 실제 현업에서의 한계점 설명
- 어플리케이션 구동은 mpm run start all 명령어로 모든 에이전트/호스트/웹훅 서버를 병렬 실행

---

### 4대 에이전트(Host, Slack, GitHub, Bench)별 구체적 역할 및 동작방식 시연

- Host Agent: 중앙 조정자 역할, 에이전트 탐색 및 전체 오케스트레이션 담당(서브에이전트에 태스크 위임, 외부 원격 Bench 에이전트 등 연동)
- Slack Agent: Webhook으로 들어온 회의록 중 “특이점(버그, 기능 요청 등)” 탐지 시 Slack 메시지 자동 발송(MCP 연동, 채널 제약 및 실무 한계도 직접 경험)
- GitHub Agent: 회의록 내 버그 리포트 자동 인식 시 MCP로 직접 깃허브 이슈 생성(확장 시 PR 자동 개설/수정까지 가능)
- Bench Agent: 다양한 LLM 연동 및 MCP/자체 인덱싱, 회사 및 인물 리서치, 복잡한 검색·연구·대량 데이터 처리 등(기능 미노출 제어 필요성)
- 실습 중 Genkit 프레임워크, MCP 플러그인, 시스템 프롬프트 및 MCP 명령어/카드 구조 상세 해설
- Webhook 관리, 오케스트레이션 로깅, 병렬처리 한계(Genkit 1회 최대 5개 서브에이전트, 설정 무용 등 한계점) 등 실전 구현 노하우 제시

---

### 대용량 맥락(컨텍스트) 관리와 프롬프트 캐싱의 현실, 서브에이전트 분리/보호 전략 상세 설명

- 에이전트형 시스템은 도구 정의, API 호출, 중간 결과치, 프롬프트 등으로 인해 맥락(토큰) 크기가 대폭 성장(예: Asana MCP 추가 시 11,000+ 토큰)
- MCP 서버별로 불필요하게 모든 도구정의를 포함하며, Zapier는 툴 선택, 1st당사 MCP는 전체 노출(컨텍스트 폭증)
- “호스트 에이전트는 요약 결과만 처리, 서브에이전트가 세부 컨텍스트 책임”: 전체 시스템 컨텍스트 최적화 및 비용 절감, 빠른 처리가 가능
- 프롬프트 캐싱은 사용하지만, 캐시 타이밍/크기 결정 난이도 높음(통계시뮬레이션 기준 3만 토큰 이하 경험적 최적값, 과도 캐싱은 오히려 비용폭증)
- 각 에이전트/서브에이전트가 개별 LLM·컨텍스트를 가질 수 있으며, 모듈성·병렬성 보장

---

### 인증·보안·오디트 등 엔터프라이즈 현장에서의 실전 관리 전략

- A2A/MCP 모두 OAuth/헤더 등 다양한 인증 지원, Zapier MCP는 URL 자체를 '시크릿키'처럼 취급, 점차 강화된 인증 아키텍처 적용 중
- 사용자 액세스 권한(ACL)은 MCP 서버 측 OAUTH·refresh token에 의존; 개별 사용자별 데이터 스코핑 필수
- 보안 민감 산업(금융/국방 등)에서는 외부 MCP/A2A 사용 대신 자체 VPC 내부에 서버·에이전트 올리고, mTLS, IP 화이트 리스트 등 강도 높은 보호 필요
- 프로토콜 자체는 보안화된 전송(HTTPS)까지 기본 제공, 실제 보호 강도는 구현 및 조직 정책에 좌우

---

### 전체 오케스트레이션, 컨텍스트 슬라이싱, 에이전트간 대화 및 프롬프트 설계 원칙

- 호스트 에이전트는 오케스트레이션의 중심, 태스크 분배 및 결과 통합 담당, 에이전트 간 직접 소통보다는 host를 통한 플로우 권장
- 맥락 슬라이싱(각 에이전트별로 필요한 최소정보만 전달 및 처리)은 주로 프롬프트 엔지니어링과 코드 내 전략적으로 구현
- MCP 툴 서버 자체가 자연어 인스트럭션만으로 필드 자동 생성(LLM 사용), 사용자는 자연어로만 요청 가능
- 반복 호출/액션 백엔드(인간확인 등)는 별도 스테이징/슬랙 메시지/2차 웹훅 및 상태 저장 등으로 관리

---

### LLM·도구 조합 전략 및 실제 프레임워크/모델 사용 경험 공유

- Gemini, Claude(especially sonnet-4), DeepSeek, Llama 등 다양한 LLM을 테스트 / 용도별 성능과 가격 최적화에 맞춰 선택
- 지원 도구 기준(워드화/요약 등)은 Gemini Flash, 고성능 도구콜/외부통합은 Claude Sonnet 4, 여러 벤치마크를 지속 측정
- 벤치마크/정량 성능, reasoning model 필요성과 비용 간 트레이드오프, 모델간 통합·버전관리 경험 공유
- Slack 등 실시간 피드백, GitHub 등 실환경 MCP 서버와 직접 통신, 에이전트 옵스(AgentOps) 등 관찰성 도구 활용

---

### 인간-에이전트 상호작용, 사람만이 보유한 데이터 결합 경험과 아키텍처 사례 논의

- 일부 정보는 사람이 직접 유지(예: CFO 등 특정 역할자), 에이전트가 Slcak 등 통해 해당 인물에게 질의/회신 받도록 “인간을 MCP 툴/에이전트처럼 취급”하는 실험
- 음성 에이전트, 전화통화 후 정보 반환 등도 사례, elicitation(데이터 요청) 등 MCP 스펙 발전 중
- 친화적 설계 위해 task node(태스크 단위 DAG), 휴먼 인 더 루프 워크플로우, 결과 검증용 staging 도입 논의

---

### 복잡한 시스템의 관찰성·디버깅·상태관리 전략 및 재귀 반복·루프 한계점

- 3rd파티 원격 에이전트 실패 시 관찰성(로깅) 한계, 자체 EC2/로컬은 로그 세밀, Bench 원격은 외부제어 어려움
- MCP의 특징(각 에이전트가 개별 컨텍스트·상태 유지, 반복 호출 방지 위해 Max Turn 제한), task id·ref 활용
- 서브에이전트/툴/메모리/캐시 등을 조합해 컨텍스트 폭증 및 비정상 반복 억제
- 실제 생산환경에서는 데모계정/샘플 데이터로 사전테스트 수행, production엔티티 보호

---

### 실제 MCP·A2A 적용시 REST API와의 차이, 시스템상태 관리, 적합성 판단

- MCP/A2A는 상태 보존·에이전트간 컨텍스트 연동에 유리, 단순 데이터조회 등은 REST API로 충분하나 워크플로 기반 자동화, 복수 시스템 인터페이스엔 MCP 구조가 적함
- REST API와 달리 MCP는 지속적 컨텍스트·복수 툴 시퀀스·프롬프트 등을 표준화된 오브젝트로 관리, 동시에 개발 및 유지보수 난이도 상승과 비용·복잡도 고려 필요
- 각 프로토콜의 한계 및 장단점 명시: 전체 통제 가능한 경우 REST·로컬콜, 외부 연동/확장 지향시 MCP/A2A 권장

---

### 기타 Q&A: 오케스트레이션 제어, 캐싱 전략, 타 언어 프레임워크 연동, MCP 구현 난이도 등

- 실습 코드 모든 오케스트레이션은 LLM 프롬프트 설계 기반(완전 자동화는 한계, 서브프롬프트/온도에 따른 결과 일관성 도전)
- 컨텍스트 캐싱은 직접 구현, 사용패턴/세션별 분석을 통해 적정 cache marker, 크기, 빈도 조정; 25~35% 비용 절감 효과
- Python/TS 등 언어 제한 없음, Bench는 추후 MCP 인터페이스 우선 지원 예정, A2A + MCP 조합은 현재 예제/문서 부족
- 프레임워크 미성숙으로 인한 직접 래퍼/커스텀 구성의 필요성, 향후 에이전트-에이전트간 태스크 할당/플래너(DAG graph) 등 고도화 방향 논의

---
