---
author: AI Makers Club
pubDatetime: 2026-06-13T08:18:59.554Z
title: "From Transcription to Live Music: Gemini's Audio Stack - Thor Schaeff, Google DeepMind"
slug: Bc6Ojl2XS1w
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**Google DeepMind의 Thor Schaeff가 Gemini 오디오 AI 연구개발 및 데모를 상세히 소개함** **Gemini 3 및 Gemma 4 등 최근 AI 모델은"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Bc6Ojl2XS1w/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [From Transcription to Live Music: Gemini's Audio Stack — Thor Schaeff, Google DeepMind](https://www.youtube.com/watch?v=Bc6Ojl2XS1w)  
**채널명:** AI Engineer

## *필기에서 실시간 음악까지: Gemini의 오디오 스택* 핵심 요약

- **Google DeepMind의 Thor Schaeff가 Gemini 오디오 AI 연구개발 및 데모를 상세히 소개함**
- **Gemini 3 및 Gemma 4 등 최근 AI 모델은 텍스트/음성/비전 등 멀티모달 기능을 내장, 오디오 이해와 생성이 뛰어남**
- **‘Gemini 3.1 Flash Life’는 실시간 대화형 사운드-투-사운드 모델로, 텍스트‧음성‧비전 입력을 동시에 처리하고 실시간 반응을 제공함**
- **Gemini의 오디오 이해력은 단순 전사(필기)보다 더 깊게 감정, 언어, 화자, 억양, 상황을 식별 및 추출함**
- **Echo Script 애플리케이션을 예시로 Gemini가 한 번의 API 콜로 화자 구분, 시간대, 언어, 감정, 번역 등 다양한 구조적 정보를 추출함**
- **음성 합성(TTS)에서는 30여개의 기본 음성(Profile)에 디렉터 지시(Prompt)만으로 억양, 언어, 상황 등을 자유롭게 변형 가능**
- **실제 예로 아이리시 억양, 싱가포르식 영어 등 즉석에서 자연스러운 다국적 음성을 합성하는 데모 시연**
- **AI Studio를 통한 실시간 웹소켓 인터페이스 제공, 개발자들은 다양한 언어·억양·상황·비전 피드 통합 활용 가능**
- **음악 생성 분야에서도 Lyra 3 등 신형 모델이 음악 및 가사 생성까지 지원, Life Jukebox 데모에서 실시간 주문형 음악 생성 시연**
- **구체적 코드 예시, 문서, 오픈 API 활용법을 공유하며 AI Audio 기술의 실전 적용까지 안내함**

---

## 세부 요약 - 주제별 정리

### Google DeepMind의 오디오 AI 연구 및 발표 배경이 차별화된 이유

- 발표자는 Google DeepMind의 개발자 경험(Developer Experience) 담당 Thor Schaeff임을 소개
- 본 발표는 "AI 오디오"라는 광범위한 주제보다는 DeepMind가 최근 연구한 핵심 오디오 모델에 집중
- 발표 시기상 Gemini 3 출시 다음날 팀에 합류했으며, Gemma 4 등 최신 오픈모델도 최근 출시됨을 언급
- DeepMind는 이미지, 비디오, 오디오 등 멀티모달 인공지능 분야에서 빠르게 진화중임을 강조
- 실시간 대화·멀티모달 환경에서 구동되는 Gemini 모델의 응용, 개발자 접근성을 보여주는 것이 발표 목적

### Gemini 3 및 Gemma 4 모델은 오디오 이해와 멀티모달 처리를 혁신적으로 강화함

- Gemini 3, 최신 Gemma 4 모델들은 기본적으로 오디오 이해를 뛰어남
- 오디오 입력의 언어, 억양, 감정, 문맥, 비언어적 특성까지 종합적으로 분석
- 다양한 언어, 방언, 억양을 인식 및 자동 전환할 수 있음
- 예를 들어 여러 사람이 겹쳐서 말하는 상황도 정확히 필기/분석 가능
- 멀티모달 환경(텍스트, 음성, 비전)에서 입력 혼합 처리를 기본 지원, 엣지 디바이스 실행도 가능

### 오디오 이해 목적은 ‘깊이 있는 의미 분석’ 및 구조화 정보 추출에 있음

- 단순한 음성 필기(Speech-to-Text)를 넘어서, 실제 대화의 화자, 감정, 언어, 번역, 타임스탬프, 요약 등 종합 정보를 추출
- 목표는 ‘richly transcribe and robustly reason through audio’(풍부하게 전사하고 강건하게 오디오 의미를 추론)
- 하나의 오디오 내 여러 언어, 억양, 감정까지 모델이 누락 없이 다룰 수 있어야 함
- 실제 데모에서 프랑스어, 독일어, 일본어, 중국어, 영어 등 혼합 발화를 식별 및 감정·언어 분류, 즉석 번역까지 수행
- 음성 감정은 happy/sad/angry/neutral 등으로 구분, 예시로 독일어 화법은 ‘angry(화남)’로 인식되는 경우도 설명

### Gemini의 Echo Script는 API 한 번으로 화자명, 감정, 언어, 번역 등 다양한 구조화 정보를 생산함

- Echo Script는 Gemini 3 Flash Preview 위에서 동작하는 AI Studio 기반 응용 프로그램
- 단일 API 피드에 대해 아래와 같은 정보들을 한 번에 추출 가능
    - 각 발화별 타임스탬프
    - 발화자 식별 및 화자명 추출
    - 언어 자동 판별 및 비영어 발화의 자동 번역
    - 각 발화의 감정 분류 (happy, sad, angry, neutral)
    - 발화 전체 요약까지 수행
- 사용자는 Response Schema(응답 스키마)만 지정하면 위 정보가 표준 구조로 반환
- 구조화된 데이터는 UI 등에 바로 활용 가능하여 개발·적용이 매우 용이함

### Gemini의 오디오 이해는 맞춤형 음성 합성 및 자연스러운 억양/상황 연출에 기반을 제공함

- Gemini의 TTS(음성 합성)는 기존처럼 수백/수천개의 음성 라이브러리 대신, 약 30개의 베이스 음성만 제공
- 사용자는 음성에게 디렉터의 ‘지시’를 내리듯 prompt(프롬프트)로 상황, 억양, 감정, 발화 방식 등을 설명
- AI의 오디오 이해가 우수하므로, 지시한 대로 억양이나 특정 느낌이 반영된 다양한 커스텀 음성을 즉시 생성 가능
- 실제 예시:
    - 아일랜드 아이리시 억양 남성으로, County Clare의 펍 분위기 연출 대사 음성 합성
    - 표준 미국식 영어 음성을 싱가포르식 영어(특유 억양과 현지적 언어 표현)로 변환하는 데모
- 음성 프로필 생성, 대본, 맥락 및 원하는 ‘퍼포먼스 지시’ 등을 자유롭게 설정 가능

### 실시간 대화형 오디오 모델 ‘Gemini 3.1 Flash Life’는 텍스트·음성·비전 동시 입력 및 실시간 출력이 가능함

- ‘Gemini 3.1 Flash Life’는 인코딩과 디코딩이 동시에 이뤄지는 실시간 대화형(Full Duplex) 오디오 모델
- 웹소켓 연결로 텍스트/음성/비전(카메라)/스크린 등 다양한 입력원을 실시간 수신
- AI는 실시간 오디오 응답과 함께 자동 텍스트 전사(Transcript)도 동시에 제공
- 예시:
    - 사용자가 내보인 카메라 피드에 대해 AI가 즉시 “자신을 본다”고 반응
    - 사용자의 옷차림이나 특이점을 보고 맥락 맞는 대화 및 칭찬까지 자연스레 이어감
    - 아일랜드 억양 지시를 영어/독일어 등 다양한 언어로 확장 적용하는 재치있는 데모
- 현재 제한: 실시간 비전 인풋은 1초에 1 프레임 수신이 최대치

### Benchmarks보다 실제 실시간에서 모델 인텔리전스 구현이 Core임

- 오디오 AI 성능 평가에서 전통적 성능 기준(벤치마크)은 한계가 있음
- Gemini 3.1 Flash Life는 추론·판단(Intelligence) 자체가 오디오 모델에 내장
- 일반 파이프라인(TTS->LLM->음성) 대비, 인텔리전스-오디오 통합 구조로 응답속도 및 맥락 이해력이 뛰어남
- 실전 예시 및 무료 체험을 위해 ai.studio/live 등 AI Studio 활용 권장

### Gemini API와 코드 예시, 에이전트 스킬 소개로 개발자 생산성 제고

- Python, JavaScript 등 다양한 언어 기반 Gemini API 활용 방법 공식 문서 제공
- 서버-서버, 클라이언트-서버 구조 예시 코드 안내
- ‘Gemini Skills’(에이전트 스킬) 공개: 실시간 오디오 처리 및 제어용 확장 모듈
- Gemini API, Live API, 문서, 데모체험 링크는 공식 발표자료 내 수록
- 에이전트 스킬을 설치하면 오디오 실시간 처리에서 더 집중도 높은 결과 도출 가능

### Lyra 3를 통한 실시간 음악+가사 생성과 Life Jukebox 데모가 AI 음악 혁신을 보여줌

- DeepMind가 최근 공개한 Lyra 3는 음악 생성 AI로 가사 생성까지 통합 지원
- 두 가지 모델: Lyra 3 Clip(30초 짧은 음악 생성), Lyra 3 Pro(풀 송 전체 생성)
- 발표에서 Life Jukebox 앱 데모: 사용자가 실시간으로 원하는 곡 스타일, 키워드, 언어(예: “영국 스타트업 신을 주제로 한 독일어 테크노슐라거”)를 입력
- Gemini Life 모델과 Lyra 3을 결합해, 실시간 DJ 대화→즉석 음악 및 가사 생성→즉시 청취까지 시연
- 전통 라디오 음악 요청처럼 상호작용, 즉석 노래 생성 흐름을 전국/전언어/다장르로 확장 가능

### DeepMind 발표 자료, 데모 링크, 문서 접근성 등 개발자 친화성 강조

- 모든 데모, 슬라이드, 코드링크는 발표자료에서 누구나 즉시 접근 가능
- 오디오 AI와 실용 응용의 전 영역(전사, 감정 감지, 음성합성, 실시간 대화, 음악생성)에서 오픈과 체험 독려
- 발표 마무리에서 현장 오디오 스탭 및 참여자들에게 감사 인사로 행사 종료
