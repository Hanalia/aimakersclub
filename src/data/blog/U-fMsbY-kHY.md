---
author: AI Makers Club
pubDatetime: 2025-06-15T23:48:25.513Z
title: "AI Engineer World’s Fair 2025 - Day 2 Keynotes & SWE Agents track"
slug: U-fMsbY-kHY
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**AI Engineer World’s Fair 2025 2일 차 주요 트랙**: 여러 키노트와 SWE(Software Engineering) Agent 트랙을 중심으로 최신 AI"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/U-fMsbY-kHY/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [AI Engineer World’s Fair 2025 - Day 2 Keynotes & SWE Agents track](https://www.youtube.com/watch?v=U-fMsbY-kHY)  
**채널명:** AI Engineer

## *AI 엔지니어 월드페어 2025 - Day 2 키노트 & SWE Agents 트랙* 핵심 요약

- **AI Engineer World’s Fair 2025 2일 차 주요 트랙**: 여러 키노트와 SWE(Software Engineering) Agent 트랙을 중심으로 최신 AI, 코드 생성 에이전트, 리더십, 인프라, 디자인, 보안 등 12개 이상의 세부 트랙 진행.
- **Gemini 2.5 Pro 등 구글 AI 모델 진화**: Google DeepMind의 Logan Kilpatrick가 Gemini 2.5 Pro 출시 및 향후 AI 모델의 발전사를 공유. 2.5 Pro는 벤치마크에서 업계를 선도, 연산량 및 추론 요구에 능동 대응.
- **AI Reasoning ‘Thinking’의 실험적 도입**: DeepMind의 Jack Ray가 ‘Thinking’이라는 신개념 추론 구조를 도입, RL 기반 다단계 사고로 추론 성능 및 유연성 대폭 확대(USA Math Olympiad 등 경쟁력 입증, deep think 모드에서 65% 퍼센타일 도달).
- **자동화 및 에이전트 기반 SW개발 도구 실전 현황**: Cognition의 ‘Devon’, Google ‘Jules’, GitHub의 Copilot, Anthropic의 Claude Code, All Hands의 OpenDevon 등 다양한 코드 생성/자동화 에이전트의 사용자 경험과 진화 단계 다수 공유.
- **에이전트 중심 대규모 병렬 작업과 테스트 자동화**: Jules, Copilot 등은 동시에 수십 개 작업/버전을 병렬로 처리할 수 있는 Async 에이전트 구조와, 자체 테스트 통합, 인간-에이전트 협업 방식 고도화.
- **현업 적용 사례 및 인프라**: Dagger(도커 창업자 설립)가 컨테이너 네이티브 에이전트 환경(Containeruse) 실시간 데모 시연, Morph Labs의 Infinibranch/Reasoning Time Branching, FACTORY AI의 대규모 엔터프라이즈 에이전트 실전 도입 방식 공개.
- **AI 코드 자동화가 가져올 SW개발 패러다임 변화 분석**: “인간이 코드를 직접 치는 시대의 종말”, “에이전트 지휘 및 컨텍스트 제공이 진정한 엔지니어 업무로 이동” 등의 미래 지향적 논의 및 조직 변화 경험사례 다수.
- **AI 평가(Eval) 체계 및 고도화(Brain Trust 등)**: 자동화된 평가/대시보드 및 루프 에이전트처럼, 새로운 유형의 LLM 최적화 및 데이터셋 개선·스코어러 개선을 위한 평가 기반의 자동화 접근 확산.
- **표준 규격(스펙) 부상 및 소프트웨어 공학의 미래상**: OpenAI 샨 그로브 등, “프롬프트 임시 명령에서 명시적 스펙/명세서 관리로 전환” 및 “스펙이 곧 코드의 근본” 등 소프트웨어 공학 방식의 AI 시스템 적용 강조.
- **차세대 인공지능 기술 동향 및 인프라/벤치마크**: Artificial Analysis의 벤치마크로, 오픈웨이트(DeepSeek 등)와 상용 LLM 간 품질·속도·비용 격차 해소, 토큰/응답시간/비용 구조의 최신 동향 수치 대거 제시.

---

## 세부 요약 - 주제별 정리

### “Gemini 2.5 Pro의 공개로 구글은 AI 모델의 혁신 및 범용화의 기틀을 다짐”
- Logan Kilpatrick(DeepMind)의 발표에서 Gemini 2.5 Pro 최종 업데이트 사실 공개. 클로즈베타 피드백 반영 후 벤치마크(SODA on ADER, SODA on HLE 등)에서 대폭 향상.
- 이번 버전은 이전 모델에서 제기된 단점 다수를 해소했으며, 신규 벤치마크에서 업계 1위 실력 확보.
- 1년간 Gemini의 진보 총정리: Google IO 자료 인용, DeepMind·Google 내 여러 연구 및 팀의 통합으로 2023~2024년에 50배에 달하는 AI 추론 사용량 성장.
- 모델 개발조직 구조: 연구(R&D)와 제품개발(Product) 팀의 완전 통합. DeepMind팀이 Gemini 제품 자체를 책임지게 전환.
- Gemini App(앱)의 전략: 범용 AI 어시스턴트 지향, 기존 Google Account를 넘어 Gemini가 전사적 서비스 연결 핵심 ‘스레드’ 역할.
- 모델 특징: 멀티모달(음성, 이미지, 비디오), TTS 및 오디오/비디오 처리 강화, diffusion 기반 토큰 속도 혁신 실험, omnimodal 모델 목표.
- infinite context(무한 컨텍스트), agentic by default(기본적 에이전트 구조), 대·소형 모델 동시 출시 및 개발자 플랫폼(AI Studio) 고도화 등 계획.

### “DeepMind의 ‘Thinking’ 개념은 AI Reasoning(추론)의 한계 해소에 큰 진보를 이룸”
- Jack Ray(DeepMind)가 AI 추론(Reasoning) 병목(컴퓨팅 자원 제약) 극복 혁신을 역사적 발전사와 함께 설명.
- 1948년 Claude Shannon 언급 — n-gram, RNN(2010), Transformer 순 발전 및 각 단계의 한계상황과 극복 기술 설명.
- 기존 LLM: 요청→응답 간 고정된 연산량만으로 처리(즉, 복잡 요청에도 일정량만...).
- ‘Thinking’은 LLM이 최종 응답 전 iterative loop를 거치며 반복적, 가변적 사고·계산이 가능하게 하는 구조.
- Gemini는 RL 기반 보상 학습 통해 모델이 필요한 사고 단계(Loop 횟수)를 동적으로 학습. 예: 증명/코드 생성 등에서 단계별로 가설 검증·자기수정 과정 출현.
- 내부 연구에서 emergence(기술적 창발) 확인. 다중 접근법, 자기-반박, 몬테카를로형 시도, 코드 분할 등 실제 작업 사고 분석 사례 공유.
- reasoning-trace, test-time-compute/충분 예산 설정, continuous capability-cost 슬라이더 제공(2.5 Flash, Pro 등 thinking budget 도입).
- deep think/Deep Research: 최대 수만 회 사고로 Math Olympiad 65% 퍼센타일까지 STOA 성적, 강화된 멀티모달 reasoning, 긴 reasoning에 특화(코딩, 증명, 통합적 문제해결).

### “대규모 실전 코드 에이전트(Dockers, Dagger 등)는 컨테이너/분산 환경 네이티브에 집착해야 신뢰성이 보장됨”
- Docker 창업자 솔로몬 하이크스(Dagger)의 발표: 코드 실행 환경 혼돈(Chaos) 실전 사례 — 에이전트가 멀티/병렬 작업 시, 공동 환경 충돌, 통제력 상실 등 문제 극심.
- 오늘날 상태: 'YOLO 모드'(동시 병렬 작업시 딴 작업끼리 충돌), 'All-in-One 서비스형'(백엔드 자동처리) 대체없이 사용 불편, 진정한 개발자-에이전트-서비스 혼합 협업 필요.
- 요구 조건: 완전한 백그라운드 작업, 레일(환경·툴·시크릿 접근 등 규제), 시점 개입 및 효율적 통제, 개방적 선택권·결합성 보장.
- 컨테이너 기술(특히 Docker) 활용: “에이전트가 사용 가능한 실제 컨테이너 환경 자체를 네이티브 작업공간으로 제공”, "실행 격리+커스텀 환경+멀티플레이어+오픈".
- 데모 시연(containeruse): 클라우드 코드/고 웹 앱 생성 요청 → 에이전트별 격리 환경/스냅샷 관리/(실시간 머지·중재·백트래킹·실패도 리스크케어)/시크릿 연동 가능/기록 내역 자동 Git 관리.
- 인프라 멀티화 지원(개발자 로컬, 홈 서버, 클라우드, CI/CD 등 자유롭게 연동).

### “에이전트 기반 SW개발, 'Moore의 법칙'처럼 2~3개월마다 역량 2배씩 성장·도약”
- Devon(Cognition 인공지능)의 Woo 대표 발표: 코딩 에이전트의 작업 길이(인간 개입 없이 처리할 수 있는 일의 길이)가 코드 영역에선 2~3달마다 2배씩 증가(‘Moore’s Law for AI Agents’).
- 18개월 전에는 탭완성 수준(혼자 줄 단위 예측)에서 이제는 수시간 작업·수백 줄 PR 자동 완성까지 확장. 연-16~64배 성장.
- 2023년 여름: 대량 반복 마이그레이션(예: JavaScript->TypeScript, 대규모 버전업, 동종 파일/코드 반복처리).
- 플레이북 구조 개발: step-by-step 명령, 지식/메모리 체계 도입(사용자 피드백 반복적 반영).
- ‘버그/단일기능 구현→멀티파일·대규모·컨텍스트 참조 변경→수백줄/이슈-기반 작업→깊은 지식·코드베이스 탐색·계획·자동화→멀티테스크/백로그 일괄처리→프로젝트 단위’로 급격히 사용성/기능 확장.
- 자체 테스트, 자체 디버깅, 사용자 스티어링, 이슈관리 연동, L2 경험(검색/탐색/대화→작업→작업 단위 PR/테스트 통합).
- 각 단계에서 메모리, 내부 위키, IDE 통합, CI 테스트 등 복합 고도화.

### “Google Jules·Claude Code·Copilot 등, 비동기 병렬 코딩 에이전트·파이프라인 시대가 도래”
- Jules(Google Labs): ‘Background Coding Agent’, 백엔드에서 수십/수백개 요청을 병렬-비동기 수행, 두 가지 병렬 패턴(멀티태스크, 멀티-variation) 적용.
- 실제 데모: 하나의 프론트 앱에 대해 테스팅, 캘린더 연동, 요약 등 병렬 요청 및 실행—각 기능에 대한 테스크는 각기 다른 프레임워크/테스트방식(A/B), Async 머지가능.
- PR 병합, 자동 Lighthouse 점수개선, 접근성/보안자동화, 간단한 프롬프트 작성 탬플릿 공유.
- Copilot(GitHub): 코드 자동완성->채팅->에이전트 모드 발전, 실제 프롬프트(테스크 명세) 기준, IDE 내/서버 사이드 에이전트(비동기·분기·단계별 체크) 지원, 깃브랜치/테스트 파이프라인/보안 권한 제어 등 에이전트 아키텍처 설명.
- 홍보·사례: 실제로 Copilot Agent를 활용해 Copilot Agent를 빌드(‘DogFood’) 했으며, 데이터 기반 코드리뷰·테크데트 등 대폭 개선.

### “에이전트 시대의 코드리뷰/배포·아우터루프(outer loop)와 대용량 AI 자동화 대응 전략”
- Tomas Ramirez(Graphite): 개발자동화 내/외부 루프(개발+리뷰) 중, AI로 인한 내루프(코드작성) 급격한 효율성 향상과 반대로 코드리뷰·QA·테스팅·머지·디플로이 등 아우터루프는 병목.
- 46% GitHub 코드가 Copilot에 의해 자동 생성, 코드량 폭증.
- 문제점: AI 코드의 오류, Hallucination, 시큐리티 취약점 등 늘어나 마찬가지로 리뷰/머지/테스팅/운영부하 증가.
- 필요조건: 효율적 우선순위 관리, 코드리뷰·머지큐, 최적화된 CI/CD, 자가운영형 AI 코드 리뷰 인프라(Diamond 등, human review 초과 수치, large enterprise 적용 실례공유).
- 가시성·모니터링 통합 및 아웃터루프 전체 AI-네이티브 체인 필요.

### “오픈소스·멀티모델 에이전트 및 사용자 실전 경험—확장성의 핵심은 정확한 명세·협업·적극적 검증”
- OpenDevon(All Hands): OpenDevon, Claude Code, Jules 등 다양한 스타일의 코딩 에이전트, 기존 오토컴플릿 < IDE 내 잡 실행 < 완전한 일괄 Task/PR 생성형으로 진화.
- agent loop 구조(LLM↔실세계 효과반복)—코드 에디터(diff 기반, AST/structure 지원), 터미널(병렬/백그라운드, 장시간 명령시 대처), 웹브라우저(HTML→MD/스크린샷·AI주도 상호작용), 완전 샌드박스(권한/토큰 분리, 제한형 접근) 등은 필수.
- 실제 활용 팁: 초소형 테스크(SMALL CHORE)부터 점진적 확장·에이전트에게 “어떻게-무엇을 명확하게 명령”, 실패시 무리하지 말고 새 세션, 잦은 버리고 다시 시도.
- 신뢰/검증 강조: 휴먼 리뷰 필수, 코드관리 정책상 “PR작성자=유저”로 소유권/책임 부여.
- 주요 사용사례: 머지컨플릭트/PR피드백 적용/빠른 버그수정/인프라변경/테스트팽창/그린필드 앱 등, 실제 업무 90%이상 에이전트, 10%만 직접수정 수행 가능.

### “AI 평가체계(EVAL)는 유례없는 자동화로 진입—Brain Trust 'Loop', 평가-프롬프트-데이터셋까지 End-to-End 최적화”
- Brain Trust(Anchor Goyal)의 Loop: 현재는 대시보드-인간 개입/분석 비중 높지만, 24~25년 들어 LLM(특히 Claude 4 수준)이 실제 평가·프롬프트·데이터셋·스코어러 변경에 스스로 개입(6배 성능차 언급), UI 내 실험.
- 평균 기관 13회/일 EVAL 실행, 일부 3000회+, 자동화 추세.
- Loop는 프롬프트, 데이터셋, 스코어러 동시 최적화, 피드백-추천-직접편집 지원, adventure 모드(전면적 자동화)도 가능.
- EVaL pain point 1위 등 “평가 자체의 자동화·최적화의 급진적 진화”.

### “AI 인프라/성능은 오픈웨이트 vs 프로프라이어터리 모델 간 격차 해소, Reasoning Model의 ‘토큰 생산성·응답지연·비용구조’ 실제치 분석으로 실용적 대안 마련”
- Artificial Analysis(George Cameron): 벤치마크 기준, GPT-4(GPT-3.5→4→4o)는 오픈웨이트(DeepSeek, R1 등) 모델과의 지능(generalist 지표) 격차가 2024~25년 급속히 해소, 단 몇점 차.
- reasoning/non-reasoning 모델 구분, reasoning 모델의 토큰 수 10배, 응답 지연 40초, costo/ 04 mini 이하 기준 10~500배 차이, 실제 어플리케이션 영향(에이전트는 30회 연쇄 호출—총합 5분~30초 내외).
- cost per million tokens 뿐 아니라 모델의 “수다(yappiness, 출력을 통한 단가 증가)” 특성 중요, 실제 어플리케이션 비용 예측 위해 벤치마크 필수.
- output tokens/s(초당 처리속도)는 40→300(동급 품질), B200/H100 등 하드웨어 혁신, MoE(혼합전문가)·모델 경량화(8B/피쳐옵션 확장)·소프트웨어(op세대) 동시진척.
- compute 수요는 여전히 비선형적으로 폭등 예상(모델 대형화, reasoning 확대, 에이전트식 질의·멀티모달 동시확장).

### “Prompt Engineering의 종언과 명시적 스펙 기반 AI 공학 패러다임으로 도약—코드·커뮤니케이션의 본질적 전환”
- OpenAI Shaun Grove: “코드는 실은 '로스(Lossy)' 형식—진짜 핵심은 구조화된 커뮤니케이션(스펙)”
- OpenAI Model Spec 예시: 마크다운 기반 명시적 명세, 실제 성공 기준/논쟁·변경/테스트케이스와 연계.
- 코드보다 스펙이 항상 본질적, (법률의 구조와 동일—US 컨스티튯/수정/사례별 사전판례/unit test), 명확 명세서가 의도·결과 싱크 핵심.
- 명세를 평가기준(그레이터 모델)과 학습(Eval·정렬) 자료로도 활용 가능, deliberative alignment 논문 등 실증.
- 미래에는 IDE대신 ITC(Integrated Thought Clarifier)로 스펙 자체를 개선·합의·협업하며, AI 에이전트/ governance/법 시행/비즈니스 목적 모두 스펙 관리중심으로 전환될 것.

### “엔터프라이즈 실전: FACTORY AI의 사례로 본 완전 에이전트 기반 개발/운영의 조직적 도전 및 베스트프랙티스”
- FACTORY AI(Eno Reyes): 진정한 agent-native 시대, 인간과 에이전트의 협업 비율이 1:다로 이동—전체 프로젝트 스펙, 사용자 인터랙션, 미팅/회의/화이트보드, RCA, 테스팅까지 memory화.
- 조직 표준화, 데이터 동기화, PLANNING-디자인에도 적극적 에이전트 도입(회의 녹취/메모 등 자동 ingestion→PRD→자동 사이클링).
- 엔지니어 업무가 코드작성에서 지휘·오케스트레이션, 컨텍스트 구성/관리, 표준/지식 관리로 전이.
- 대규모 실시간 RCA, 유입 및 자동화된 프로세스 개선, 협업·재활용성·신입 적응 모두 “에이전트에 의한 Knowledge Build-up & Sharing”으로 이행.
- 제품/조직/프로세스/보안/법무까지—'YOLO' 대신 통제/감사/방화벽/소유권 및 CI 준비된 인프라로 실전 대응.

### “해커톤/커뮤니티/생태계—실제 적용·확산의 현장성이 가치를 이끈다”
- 해커톤 피날레: 'Survival of the Feature', 'Tab RL', 'Featherless Action R1' 등 실제 프롬프트-RL-코어 기술 적용 실사례 발표, 즉석 평가·참여.
- 서포트 트랙: 리더십, 인프라, RAG, 에이전트 보안, 디자인, 생성미디어, 로보틱스 등 12개 세부 세션 및 엑스포/커뮤니티/쇼케이스.

---

(요약 끝)
