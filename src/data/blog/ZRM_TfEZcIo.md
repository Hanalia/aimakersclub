---
author: AI Makers Club
pubDatetime: 2026-06-26T23:45:44.929Z
title: "Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François Bouchard, Towards AI"
slug: ZRM_TfEZcIo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Paul Iusztin(Decoding AI)와 Louis-François Bouchard(Towards AI)가 1만 개가 넘는 노트를 효율적으로 활용할 수 있는 ‘A"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/ZRM_TfEZcIo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François Bouchard, Towards AI](https://www.youtube.com/watch?v=ZRM_TfEZcIo)  
**채널명:** AI Engineer

## *10,994개의 노트를 살아있는 연구 메모리로 만드는 법* 핵심 요약

- 본 영상은 Paul Iusztin(Decoding AI)와 Louis-François Bouchard(Towards AI)가 1만 개가 넘는 노트를 효율적으로 활용할 수 있는 ‘AI Research OS’를 설계·구현한 과정을 상세히 설명함
- 두 발표자는 Obsidian, Readwise, Notion, Google Drive 등 여러 메모/자료 저장소에 수천 ~ 만 단위의 노트를 보유하고 있으며, 매달 250개씩 지속적으로 쌓임
- 기존에는 대용량 ‘세컨드 브레인’에 흩어진 자신만의 자료를 실질 업무(글쓰기, 코딩, 강의 등)에 즉시 활용하기 어려움(검색/탐색 비효율, 맥락성 부족, 개별성·가치 반영 부족 등의 한계)
- Codex Cloud, Notebook LM 등 AI 기반 리서치 도구의 문제점은 ‘개인화·확장성·코드 처리력’ 부족과, 컨텍스트/기억 관리의 미흡임
- 단순 검색/간단 질의에는 기존 LLM(예: ChatGPT)이나 검색 엔진을 권장하나, 반복적이고 심층적, 맥락이 누적되는 업무에는 한계가 명확
- 이에 따라, 다양한 자료원(세컨드 브레인+웹+코드 등) 전체를 하나의 위키/지식베이스로 자동 변환하고, 토큰 효율적인 계층형 컨텍스트 관리와 히스토리 추적이 가능한 시스템(AI Research OS)을 직접 설계
- 이 시스템은 ①원본(raw) 파일, ②색인(index), ③LLM 기반 위키(wiki) 3단계로 구성되며, 파일 기반 단순 구조를 유지하면서도 성장·진화하는 ‘살아있는 위키’ 구조를 실현
- 예시로 실제 논문, 코드, 저장소 등 다양한 소스를 자동 ingest·분석·요약·비교하는 데모와, 클라우드 코드 기반 플러그인 구현 방법, 활용 사례, 한계 및 개선 방향을 구체적으로 제시함

---

## 세부 요약 - 주제별 정리

### 두 발표자는 1만 개가 넘는 노트를 어떻게 ‘세컨드 브레인’에서 실무 지식으로 전환하고자 했는지 설명함

- Paul Iusztin(Decoding AI 창업자, LM Engineer’s Handbook 공저자)는 Obsidian, Readwise, Notion, Google Drive 등 다양한 툴에 5,000개 이상의 노트와 추가 자료를 관리 중
- Louis-François Bouchard(Towards AI CTO, ‘Building AI systems for production’ 저자) 역시 수백~수천 개의 노트와 수많은 영상, 자료, 프로젝트 산출물을 보유
- 매주 250개, 매월 1,000개 이상 파일이 추가되는 등 ‘세컨드 브레인’은 폭증하며, 실제 업무 전환의 효율성에 한계를 느낌
- 실무(프로젝트, 글쓰기, 강의, 코드 개발 등)에서 바로 꺼내쓸 만한 “하이 시그널” 자료를 빠르게 찾기 어렵고, 잊혀진 자료가 많음
- ‘개인화’(나만의 가치·신념 반영)와 ‘실용성’(즉시 활용 가능성)을 동시에 충족할 도구가 필요
- 이번 영상에서 AI Research OS라는 시스템을 직접 구축한 과정을 코딩 예제와 함께 상세히 공개

### 상용 AI 연구 도구(Codex Cloud, Notebook LM 등)의 한계와 직접 구축의 동기가 제시됨

- 간단한 질의·검색·단건 작업은 기존 LLM(ChatGPT, 구글 등)이나 검색 엔진 사용이 적합
- 반복적이고, 대용량 문맥 활용, 이전 결과 재사용, 개인화가 중요한 업무(글쓰기, 대규모 코드 베이스, 멀티 프로젝트 진행 등)에는 한계가 분명
- Notebook LM: 브라우저 기반으로 코드 작업에는 비적합, 개인화/자동화 제한, 소유권 미흡
- Codex, Cloud Code 등: 자료를 매번 다시 입력/복사해야 하고, 세션별로 기억이 지속되지 않음(‘메모리 롱텀 저장’ 불가)
- 벡터 DB, RAG(Pipeline Retrieval Augmented Generation) 등 대규모 구축 방식은 일상적/개인용으로 비효율적이고, 관리가 어렵고, 운영 인프라가 부담
- 반복적 학습·업데이트·질의가 가능한, ‘나만의 살아있는 위키’ 역할의 시스템이 궁극적 필요임

### AI Research OS 시스템은 파일 기반 3층 구조(원본, 인덱스, 위키)의 간단하지만 강력한 설계임

- 시스템 아키텍처는 ①raw(원본/불변 데이터), ②index(색인/메타정보/참조), ③wiki(LLM가 생성·갱신하는 요약·비교·개념·질문 히스토리)로 분리
- 인프라(벡터DB, 지식 그래프, 복잡한 DB) 없이 파일과 참조(index.yaml)만으로 작동하여 개인이 관리하기 쉽고, 커스텀 확장도 간편
- index.yaml은 모든 소스의 메타데이터(링크, 타이틀, 저자, 날짜, 요약, 출처 등)를 집약하여, 에이전트가 효과적으로 탐색·추론 가능
- 위키(wiki) 폴더엔 소스별 executive summary, 비교(비슷하거나 다른 개념·저장소 등), 개념(LLM이 추출한 핵심 용어), 엔티티, 노트, 열리지 않은 질문 등이 저장됨
- Obsidian 등에서 네트워크 그래프로 시각적으로 관계/연관성을 탐색 가능하며, 위키는 질의·인풋·새 자료에 따라 계속 진화(‘살아 있는 위키’)함

### ‘깊은 리서치 알고리즘(Deep Research Algorithm)’ 적용과 반복적 개선 과정을 단계별로 소개함

- V1(초기): ‘agent engineering course’ 커리큘럼용, 입력(토픽+골든 링크+알고리즘)→출력(연구 MD 파일); 주요 절차는 수작업 선정 링크 기반 스크래핑, 질의 생성, 답변 취합, 요약
- V2(두 번째): ‘골든 링크’를 세컨드 브레인 내에서 자동 추출하고, 공공/개인 소스의 혼합 질의로 확장(사용자 지정 인풋 토픽만 필요)
- V3(최종): 개별 raw 파일+index 기반으로 wiki 구축, 모든 질의/추론 기록 잔존, 섬세한 토큰 관리 및 효율적 컨텍스트 유지, 신규 자료와 추가 질문을 언제든지 삽입 가능(흐름: 소스→raw 파일→index.yaml→wiki)
- 매 덤프의 변환에 과도한 토큰과 시간이 듦(특히 deep 모드), 필요에 따라 light/fast/deep 모드로 탐색량·질의 라운드 조절

### Obsidian, Readwise 등 주요 메모·노트앱을 병합하여 단일화하고, 자동화 파이프라인을 구축하는 과정을 보여줌

- 발표자들은 각각 수만 개 노트가 다양한 저장소(Apple Notes, Granola, Readwise, Chrome 탭, Google Drive 등)에 산재되어 있음을 고백
- 크로스플랫폼, 모바일/데스크톱 연동, 직관적인 UI 경험 등을 고려해 모든 아카이브를 Obsidian 내 로컬 파일로 자동 이동 및 동기화(Granola 회의록 자동 저장 포함)
- 이 과정을 통해 Obsidian 내에서 개별 파일, 프로젝트별 자료 연결, 전체 세컨드 브레인에 대한 ‘인덱싱 기반 위키화’가 가능해짐
- Obsidian, Readwise, Github, Notebook LM, 웹 링크, Youtube 등 다양한 소스를 자동 ingest하여 위키화 가능
- 특정 커넥터나 기능(예: Youtube 자막 자동화)은 Codex 프롬프트 한 번으로 손쉽게 추가 가능

### 반복적 연구, 자동화된 요약/비교/개념 추출, 이력을 남기는 ‘살아있는 위키’의 실제 구동 방식을 상세히 시연함

- 예제1: ‘에이전틱 AI 엔지니어링(Agentic AI Engineering)’ 글 주제 탐색 – 관련 파일·레퍼런스 로딩, 경량 모드(1라운드 3질문)로 연구 자동화 실행, 결과로 raw/인덱스/위키 파일이 생성
- 위키 내 executive summary, 비교(예: adjective rag vs file system 등), 개념(예: agent loop 구조 등), 엔티티별 요약 등 자동 착출 및 네트워크 그래프로 시각화됨
- 예제2: 오픈 소스 harness 엔지니어링(오픈코드, pi, hermes 등) 리포지토리 분석 – 지정 레포 자동 클론, 저장소별 주요 구조/개념/시스템 분석, 위키에 비교/개념/권한흐름 등 그래프 생성
- 예제3: 세 개의 링크만 입력한 최소 셋업 – 추가 인증/설정 없이 단순 링크를 주입하고 요약 및 위키 추출

### 질의 기반 위키 갱신, 새로운 질문과 답변의 기록이 축적되는 ‘히스토리 트래킹’ 구조의 도입을 설명함

- 사용자가 위키 자료에 대해 추가 질문(예: “샌드박싱 이해하기”, “원격 샌드박싱 연결 구조”)을 하면, Wiki가 해당 개념 노트·비교 정리를 신규 생성/갱신함
- 모든 질문은 로그에 남아, 추후 위키가 “내가 이해 못한 것, 궁금증, 미해결 쟁점” 등을 명확히 드러내 줌
- 새로운 자료 ingest나 ‘deep research’ 루프마다, 기존 노트/요약/질의와 참조/비교되는 구조

### PARA 메서드(프로젝트, 에어리어, 리소스, 아카이브) 기반 데이터 조직과 Second Brain 활용 방식을 밝힘

- Tiago Forte의 PARA 구조(프로젝트·에어리어·리소스·아카이브)에 따라, 모든 자료를 ‘리소스’(flat list)에 저장
- 실질 업무(프로젝트)에서만 관련 자료를 참조
- Obsidian은 불변의 세컨드 브레인 스냅샷(원본) 역할, LLM은 직접 수정/삭제 불가 — 모든 갱신은 위키·파생본에서 이루어짐
- 프로젝트별로 필요한 ‘의식적으로 선정된 자료만’ ingest/참조 과정을 통해 실질 지식화

### 실제 적용/구현을 위한 오픈 리포지터리, 플러그인, 셋업 방법, 확장성까지 구체적으로 안내함

- AI research OS 워크숍 리포 내에서 관련 클라우드 플러그인(Cloud Code/Codex skills) 모두 오픈
- Obsidian, Readwise, Notebook LM 등과 연동에 필요한 CLI 설치, 인증 등 추가 설정이 있지만, 일부 예시는 이 설정 없이 바로 실행 가능
- 예시2(깃허브 분석), 예시3(링크 기반 요약 등)는 미리 설정된 플러그인만으로 실행 가능
- 위키 생성, 질의, 자료 탐색 등은 명령줄(terminal)에서 자동화 가능

### 현 시스템의 한계, 추가 개발 과제, 그리고 교육적 목적의 우선순위를 솔직히 밝힘

- 아직 Notion, Google Drive, Slack 등 다양한 커넥터는 직접 필요할 때만 확장(개방형 구조)
- 자료 신뢰도, 시의성 필터링, 소스별 랭킹 등은 부족하지만 최우선 과제가 아님
- 고급 메모리 컴팩션, linting, provenance(소스 출처 관리) 강화 등이 다음 목표
- GUI/UX 등은 추구하지 않으며, 본질은 ‘최고의 AI 엔지니어링 메모리 관리법’과 맥락 수련법 교육에 있음

### 교육목적으로 기획된 Agent Engineering 코스 및 심화형 멀티에이전트 시스템 제작 안내

- Towards AI Academy에서 ‘Agent Engineering’ 코스를 운영중(약 60시간·최종 산출물: 멀티에이전트 리서치/작성 시스템 완성)
- 본 영상/데모 리포는 해당 심화과정의 실질 사례이자, 실무 노하우(최신 메모리 관리·콘텍스트 최적화·리서치 자동화·에이전트 조합 활용) 습득을 목표로 설계됨
