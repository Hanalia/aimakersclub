---
author: AI Makers Club
pubDatetime: 2026-04-12T08:18:21.030Z
title: "AI Didn’t Kill the Web, It Moved in! - Olivier Leplus (AWS) & Yohan Lasorsa (Microsoft)"
slug: XZ0boOjtbNo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상은 최근 6개월간 AI 혁신이 웹 개발자 환경에 미친 영향을 심층적으로 다룸 AI는 단순 코드 생성뿐 아니라 디버깅, 성능 최적화, 브라우저 및 웹 생애주기 전반에 통합되어 있"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/XZ0boOjtbNo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [AI Didn’t Kill the Web, It Moved in! — Olivier Leplus (AWS) & Yohan Lasorsa (Microsoft)](https://www.youtube.com/watch?v=XZ0boOjtbNo)  
**채널명:** AI Engineer

## *AI가 웹을 죽인 것이 아니라, 웹에 스며들었다!* 핵심 요약

- 영상은 최근 6개월간 AI 혁신이 웹 개발자 환경에 미친 영향을 심층적으로 다룸
- AI는 단순 코드 생성뿐 아니라 디버깅, 성능 최적화, 브라우저 및 웹 생애주기 전반에 통합되어 있음
- "에이전틱 코딩 에이전트" 시대가 도래, 반복 가능한 워크플로우 자동화와 '스킬' 플러그인 활용법을 시연
- 시연 예제로 프랑스 강 이름을 딴 'Seine' 이커머스 웹앱 사용, AI가 깃허브 이슈를 기준으로 기능(문의페이지) 개발, 동영상 테스트, 스마트폰 푸시 등이 자동화
- Chrome DevTools MCP(멀티 툴 플랫폼)로 브라우저 개발 도구를 AI가 제어하며, 성능/네트워크/콘솔 등 실시간 진단 및 개선안 도출 가능함을 시연
- 브라우저 내부의 AI 기능 활성화로 콘솔 오류, 네트워크 문제, LCP(주요 렌더링 지연) 등 다양한 이슈를 AI가 즉시 분석/설명/수정 제안
- W3C 기준 'Web AI API' 도입(매우 실험적), 로컬 LLM을 브라우저에 직접 탑재하여 요약/문법검사/프롬프트 멀티모달 생성 등 외부 서버와 API 비용 없이 사용 시연
- 사이트와 AI/에이전트 간 상호운용성 구현을 위해, LLM.txt/LLM-full.txt 같은 색인·참조용 표준과 Web MCP API, MCP 도구 등록 방식 제시
- Web MCP 통한 ‘툴 공개’로 인간 중심 UI에서 에이전트 중심 서버 툴링 전환 예시(카트 추가, 리뷰작성 양식 자동화 등)
- 영상 말미, 앞으로의 웹은 에이전트 지원과 응답성을 동시에 갖춘 구성이 필수임을 강조하며, 실험적 기능에 대한 경계와 빠른 도입 필요성 언급

---

## 세부 요약 - 주제별 정리

### AI 모델과 통합 기능의 발전이 웹 개발 전반을 재구성함

- 최근 6개월 사이 AI 모델(코딩 에이전트 등)이 대폭 개선되어 웹 개발의 각 단계를 바꾸고 있음
- AI는 코드 생성 뿐 아니라, 디버깅, 성능 향상, 브라우저 직접 통합 등 전 과정에 영향을 끼침
- 에이전트가 실제 사용자와 동등 수준으로 웹 앱을 이용하기 시작, 이에 따라 웹앱도 에이전트 친화적으로 변화해야 함
- AI 활용은 ‘코드 생성 가능?’에서 ‘최적의 결과를 어떻게 내나?’로 관점이 이동

### "에이전틱 코딩 에이전트" 시대엔 스킬(plugin) 및 반복워크플로우가 핵심 역량임

- 스킬은 오픈스펙 기반 텍스트 플러그인으로, 개발자의 도메인 지식이나 특정 기능을 코딩 에이전트에 추가 가능
- 예시: Github CLI를 연동한 이슈 자동 처리, Playwright CLI로 동영상 테스트 자동 녹화 등 다양한 스킬 조합
- 본인 맞춤형 스킬(Telegram 푸시 등)도 직접 생성해 워크플로우(코드 변경-동영상 녹화-모바일 테스트)를 자동화
- `.agent/skills` 폴더 및 skill.md에 기술, agents.md 파일로 반복 프로세스 지정(이슈 완료, 동영상 전송, 사용자 확인까지)

### AI 기반 GitHub 이슈 자동 개발 및 결과 검증 절차가 자동화됨

- 데모 웹앱(Seine)에서 Github 이슈에 “문의페이지 추가”를 등록한 후, 코딩 에이전트에 해당 이슈 구현 요청
- 자동화된 과정: 에이전트가 Github CLI 스킬로 정보 수집 → Playwright로 기능 동영상 기록 → 로컬 터널 생성 → Telegram으로 URL 발송
- 모바일 기기로 바로 기능/동영상 확인 및 테스트, 동료에겐 Slack 등 다양한 채널로 공유 가능

### Chrome DevTools MCP로 브라우저 개발 도구를 AI가 직접 제어하여 성능 테스트 및 자동화 수행

- Chrome DevTools MCP(Multi-tool Communication Protocol) 서버를 IDE 등에 간편 설치해 브라우저 도구 AI 제어 가능
- 예시로, 다양한 네트워크 환경(2G/3G/고속)에서 자동으로 페이지 성능/레이턴시 측정, 이미지 및 CSS/JS 최적화 가이드 자동 생성
- AI 프롬프트만으로 브라우저 내 모든 도구(스크린샷/콘솔/네트워크 요청/성능오디트 등) 활용 및 결과 자동 활용 가능

### 브라우저 내장형 AI 기능(DevTools AI)으로 즉각적 오류분석·수정 가이드 제공

- 크롬의 DevTools > 설정 > AI Innovation 탭에서 AI 기능을 직접 활성화 해야 사용 가능
- 콘솔 오류(예: CORS 정책 위반) 발생 시, 단일 클릭으로 AI 기반 상세설명 및 자동 해결책 제안
- 네트워크 탭/성능(LCP) 탭에서도 'Debug with AI', 'Ask AI' 기능으로 요청 실패 분석 및 성능최적화 방안 자동 획득
- DOM/CSS 편집 시에도 ‘텍스트 그라데이션 추가’ 등 프롬프트로 즉석에서 디자인 수정, ‘apply to workspace’로 코드 파일에 즉시 반영 가능

### W3C Web AI API로 브라우저 내 로컬 LLM 활용이 현실화됨(아주 실험적 단계)

- Summarize, Proofreader, Prompt 등 다양한 API가 드래프트 단계, Chrome(그리고 Opera, Edge 등 도입 예정)에서 실험적 지원됨
- Summarize: 리뷰 데이터(리스트)를 브라우저 자체 모델(최초 4GB 다운로드)로 ‘주요 의견 요약’ 진행
- Proofreader: 입력 폼에서 오타·문법 실시간 검사 및 교정, 변경 내역(start-index 등)까지 API로 확인 가능
- 모델 다운로드, 이벤트 로그(Viewer: chrome://internals), 사용 토큰까지 디버깅 가능, API 활성화를 위해 chrome://flags에서 수동 설정 필요
- Prompt API: 이미지 업로드 기반 멀티모달 프롬프트 시연(예: 제품 사진+상태 설명 및 리뷰 타이틀 자동 생성, 결과물은 JSON 스키마로 반환)
- 수시 API 사양 변경‧브라우저별 지원/동작 차이 주의 필요

### 대규모 언어모델(LM) 지원을 위한 LLM.txt 및 LLM-full.txt 활용법이 중요해짐

- 웹사이트가 에이전트(크롤러, AI 등)와의 데이터 인터페이스를 위해 LLM.txt(사이트맵+robots.txt 개념) 표준 도입
- 예: angular.dev의 LLM.txt(마크다운 기반 링크‧주제별 인덱스)로 에이전트가 문서 내비게이션 효율 획득
- LLM-full.txt: 사이트 전체 콘텐츠(코드 예시‧문서 등 최신 내용)를 한 파일로 에이전트에 제공, AI가 스스로 최신 레퍼런스(예: Angular 최신버전) 파악 가능
- GPT 등 LLM 모델이 구버전 지식 기반일 때, 최신 docs 제공을 통한 정확도/신뢰도 향상

### MCP 표준 및 Web MCP 도구화로 에이전트에 최적화된 웹앱이 가능함을 시연

- MCP/MCP.json 서버는 브라우저와 IDE/코딩에이전트가 통신하며, 개별 비즈니스 로직(장바구니 카드 추가 등)을 “툴”로서 외부공개
- 비즈니스 툴 등록 과정: 자바스크립트로 스키마‧함수‧설명 정의→navigator 객체에 registration
- 크롬 확장자가 자동으로 페이지의 MCP 툴 인식 및 직관적 실행/파라미터 지정 가능
- 개발자 도구 작성 없이 폼(form)에 특수 어트리뷰트(tool name 등)만 추가하면 폼 전체가 MCP 툴로 래핑, 입력/검증 자동화 제공

### 실험적 Web MCP로 양방향 상호작용, 웹 자동화 및 에이전트 브라우징의 새 표준을 탐색 중임

- Web MCP는 브라우저 내 탑재형 에이전트 브라우징의 미래를 위해 제안된 최신 API(현재 웹사이트조차 미완성 수준)
- 기존: 에이전트가 UI(DBOM/DOM/screenshot) 해석 후 '인간 흉내'내어 클릭, 폼입력 반복 필요
- Web MCP 도입: 브라우저에서 API 명세를 인식, 직접 도구 실행(장바구니 추가 등) 및 입력/제출/검증까지 자동화
- 폼 양식에 tool auto submit 등 어트리뷰트로 단순 추가만으로 검증·자동화 가능, 코드량 최소화

### 미래 웹은 인간과 에이전트를 동등 대상으로 고려, 실험적 기능의 변화에 주목이 필요함

- 모바일 대응에 이어 곧 모든 웹앱은 ‘에이전트 대응 설계’가 표준이 됨을 강조
- LLM.txt/ MCP 등은 이미 실무에 널리 확산, Web MCP 역시 빠른 속도로 발전 중이며 향후 웹 표준의 한 축이 될 전망
- 실험적 단계이므로 사양·구현 변동에 항상 주의, 하지만 미리 준비해야 경쟁력 확보 가능
- 결론: AI 도구‧에이전트 대응이 개발자·사용자 모두에게 최적의 웹 경험을 제공할 ‘다음 시대’임을 실제 데모로 입증
