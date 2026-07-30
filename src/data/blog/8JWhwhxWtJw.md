---
author: AI Makers Club
pubDatetime: 2026-07-30T08:20:11.295Z
title: "The Ultimate Knowledge Base: Bring YouTube Into Your AI Second Brain"
slug: 8JWhwhxWtJw
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Cole Medin은 Google의 새로운 Open Knowledge Format(OKF) 표준을 활용해 자신의 YouTube 채널 전체(총 200개 영상)를 하나의 AI 기반 지"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/8JWhwhxWtJw/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [The Ultimate Knowledge Base: Bring YouTube Into Your AI Second Brain](https://www.youtube.com/watch?v=8JWhwhxWtJw)  
**채널명:** Cole Medin

## *YouTube를 AI 세컨드 브레인에 통합하는 궁극의 지식베이스 구축법* 핵심 요약

- Cole Medin은 Google의 새로운 Open Knowledge Format(OKF) 표준을 활용해 자신의 YouTube 채널 전체(총 200개 영상)를 하나의 AI 기반 지식베이스로 구축한 사례를 소개함
- OKF는 Carpathy LLM 위키의 영향을 받아 에이전트-지식베이스 접점을 표준화하여 지식 공유, 재활용이 쉬운 보편 형식을 제공함
- 시연에서 한 번의 프롬프트만으로 에이전트/세컨드 브레인에 방대한 채널 내용을 설치하고 질의-응답, 소스 인용, 타임스탬프 안내가 가능한 모습을 보여줌
- OKF 지식베이스의 구조는 README, index, concept(핵심 개념), entity(도구/기술), raw transcripts(원문 자막) 등으로 명확하게 나눔
- Obsidian과 같은 마크다운 지식관리 툴을 통해 각 문서와 개념간의 그래프 뷰 연결로 복잡한 지식 흐름 시각화 및 탐색이 가능
- LLM을 통해 자동화된 canonicalization(개념 정규화) 과정을 거쳐 유사 개념, 다양한 명칭 등을 통합하고 중복 제거 및 대표 개체/개념 파일 생성
- 수작업이 아닌, skill을 통한 자동화 프로세스로 모든 유튜브 채널에 대해 지식베이스 생성 가능(무료/유료 API 안내)
- SER API(스폰서)로 웹 검색, 뉴스, 논문 등의 실시간 결과를 AI에 통합하여 시너지 극대화
- 전체 프로세스와 도구(프롬프트, 스크립트, skill 등)는 깃허브 저장소 및 README에서 안내하며, 채널 URL만 입력해 누구나 실행 가능
- 콜 메딘은 이 작업에 많은 토큰이 소요되어 전체 유튜브까지 확장하는 것은 장기 과제로 남겨둠
- 본 방식은 특정 채널의 방대한 영상 콘텐츠 탐색, 개념 네트워크 구축, 빠른 질의응답, 인용 출처 확인 등에서 큰 효과를 발휘함

---

## 세부 요약 - 주제별 정리

### OKF 표준은 AI 에이전트와 지식베이스의 연결성을 혁신적으로 높임

- Open Knowledge Format(OKF)은 AI 퍼스널 에이전트·세컨드 브레인을 위한 지식베이스 구성 표준임
- 기존의 Carpathy LLM Wiki처럼 커뮤니티를 휩쓴 위키 구조를 토대로, 어디서나 공유·활용 가능한 통합적 포맷을 제공
- 에이전트-툴(MCP), 에이전트-에이전트(A2A), 그리고 에이전트-지식베이스(OKF)처럼 상호작용 표준이 하나씩 만들어지는 중
- 이러한 표준은 AI 접근성과 확장성을 크게 높임
- Cole Medin은 “MCP가 얼마나 혁명적이었는지 떠올려보라”며 OKF의 파급력을 강조

### Cole Medin은 자신의 200개 YouTube 영상을 완전한 OKF 지식베이스로 묶어 실전 시연함

- Cole Medin 채널의 200개 영상 전체를 하나의 OKF 지식베이스 번들로 제작
- 사용자는 단 한 번의 프롬프트만으로 해당 채널의 모든 영상을 대상으로 AI 질의응답이 가능
- 자신 뿐만 아니라, 다른 모든 유튜브 채널로 확장 적용 가능함을 목표로 설정

### AI 에이전트는 복합적인 질문도 단계별 안내와 근거 인용으로 상세하게 답변함

- “내 채널에서 AI 코딩 에이전트로 신기능을 만드는 전체 프로세스를 단계별로 설명하라” 같은 복잡한 질문을 던짐
- AI는 여러 영상을 교차 분석해, 각 단계/개념별로 어떤 영상에서 다뤘는지, 타임스탬프와 함께 인용하여 답변
- “RAG가 언제 obsolete이며, 언제 여전히 중요한가?” 등과 같은 요약·핵심질문에 즉시 답변
- “세컨드 브레인은 실제로 어떻게 내부적으로 동작하는가, 어떤 구성 요소가 핵심인가, 영상별로 무엇이 관련되어 있는가?” 등 복합질문도 개요→심화 학습 루프로 안내

### OKF 기반 채널 지식베이스는 대형 유튜브 채널 탐색, 요약, 상세 탐구 모두에 효과적임

- 대다수 유튜브 채널은 영상이 많아 전체 내용을 파악하기 어려움
- OKF 지식베이스와 AI 세컨드 브레인을 결합하면, 요약/속전속결 질의응답, 주제별 인덱싱, 개념 그래프 탐색 가능
- 영상 전체를 볼 필요 없이, 필요한 정보에 즉시 접근 가능

### 사용 방법은 한 번의 프롬프트로 손쉽게 OKF 지식베이스를 에이전트에 탑재하는 것

- Claude Code, Hermes, OpenCloud 등 다양한 세컨드 브레인/에이전트에서 단일 프롬프트로 설치
- 깃허브 저장소(영상 설명란 링크 제공)에 접속, README에 있는 프롬프트 복사→에이전트에 붙여넣으면 바로 동작
- 에이전트가 OKF 포맷을 몰라도, 스스로 학습하여 지식베이스를 클론함

### OKF 지식베이스의 구조는 README, 인덱스, 개념, 엔티티, 원문 자막 등 여러 단계로 체계화됨

- README: 전체 사용법·설치 프롬프트 안내
- index.md: 에이전트가 탐색할 첫 시작점, OKF에선 반드시 필요
- 테마(Themes) 구성: 전체 지식의 구획/핵심 질문 유형을 제공
- concept 폴더: ‘A2A 프로토콜’, ‘abstraction distraction’ 등 반복적으로 다루는 핵심 개념을 정규화하여 개별 마크다운 파일로 분류
- entity 폴더: 채널에서 여러 번 다룬 도구/기술(예: BMAD method, bolt.new, AGUI) 정보를 영상별로 통합, 각 실체(entity)별로 집대성
- raw 폴더: 각 영상의 마크다운 형식 자막, 타임스탬프 포함 원본 데이터
- 각 문서 간 마크다운 링크로 연결→Obsidian 등에서 그래프 뷰로 상호 참조 구조 맵핑

### Obsidian 그래프 뷰 연결로 복잡한 개념·지식망을 시각적으로 쉽게 탐색할 수 있음

- Obsidian과 VS Code 등 마크다운 지원 에디터에서 폴더/파일로 구성된 지식베이스 전체 탐색 및 편집 가능
- Obsidian의 Graph View에서 개념 간 상호 연결, 문서 내 인용관계 등이 거미줄처럼 시각화
- 예시: context engineering과 vibe coding의 연관성, validation과 sub-agent pattern의 관계 등 일목요연하게 파악 가능

### LLM 기반 canonicalization과 개념 통합 프로세스로 전문적인 지식 정규화가 가능해짐

- 영상 한 편에서 다양한 주제·개념이 산발적으로 등장하기 때문에, “정규화” 과정 필요
- ‘plan–implement–validate’ 루프처럼 영상별로 다양한 명칭/표현이 등장하는 개념을 모두 하나의 concept 파일로 통합
- 단순 키워드 매칭이 아니라 LLM의 reasoning(추론)을 통해 의미적 유사성 파악
- 단일 언급 도구·개념은 제외해 지식망 확장성과 효율을 보장

### SER API 등 외부 데이터 API와 결합하면 실시간 웹 정보도 통합 활용 가능함

- SER API(스폰서)는 Google, Bing, 유튜브 등 각종 검색결과·논문·이미지 데이터를 API를 통해 JSON으로 구조화해서 반환
- 웹 스크래핑·프록시·캡차 회피 등 번거로움 없이, 모든 LLM/프레임워크에서 활용 가능
- 실시간 쿼리 지원: 실제 최신 정보 검색·수집에 용이
- 250 무료 크레딧 제공, 동영상 내 광고·QR 안내

### 누구나 사용할 수 있도록 YouTube 채널 지식베이스 제작용 skill 및 자동화 스크립트가 공개됨

- 저장소 내에 3가지 skill 제공(무료/유료/transcript 추출 도구별 다양화)
    - Super Data API: 신뢰도 높으나 유료
    - YouTube transcript API, YT-DLP 등: 무료이나, 타 채널 사용시 우회 필요
- 대표 skill(channel2KB): 채널 URL만 입력하면, 프롬프트/스크립트/skill.md 지침을 자동 실행하여 완성된 OKF 지식베이스 생성
- OKF 명세(spec)를 자동으로 읽고, 자막 추출→정규화(개념 파일 분할)→최종 지식망 구축까지 자동화

### 본 방식은 다양한 유튜브 채널의 영상 콘텐츠 탐색, 네트워킹, 빠른 인용/질의/심화연구에 혁신적 기여를 함

- 개인 연구·학습·리서치 목적 등에서 원하는 채널의 전체 지식 패턴을 한눈에 파악할 수 있음
- 원하는 정보 탐색, 개념간 네트워크 파악, 신속한 질의응답, 출처 확인 등 다각도로 활용성 큼
- 영상 반복 시청 필요성 최소화, 원하는 부분만 심화 탐색 가능
