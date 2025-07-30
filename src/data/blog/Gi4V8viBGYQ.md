---
author: AI Makers Club
pubDatetime: 2025-07-30T23:45:22.784Z
title: "How to defend your sites from AI bots - David Mytton, Arcjet"
slug: Gi4V8viBGYQ
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "현재 웹 트래픽의 약 50%는 자동화된 클라이언트(봇)에 의해 발생하며, 게임 산업에서는 이 수치가 60%까지 증가함 AI 봇(크롤러)로 인한 부하와 비용 문제는 최근 더욱 심각해"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Gi4V8viBGYQ/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How to defend your sites from AI bots — David Mytton, Arcjet](https://www.youtube.com/watch?v=Gi4V8viBGYQ)  
**채널명:** AI Engineer

## *AI 봇으로부터 사이트를 방어하는 방법 — David Mytton, Arcjet* 핵심 요약

- 현재 웹 트래픽의 약 50%는 자동화된 클라이언트(봇)에 의해 발생하며, 게임 산업에서는 이 수치가 60%까지 증가함
- AI 봇(크롤러)로 인한 부하와 비용 문제는 최근 더욱 심각해지고 있으며, OpenAI의 GPTBOT처럼 단일 봇이 전체 접속의 24% 이상을 차지한 사례가 있음(예시: Diaspora)
- Read the Docs는 AI 크롤러를 차단한 결과, 대역폭 사용량이 일 800GB→200GB로 75% 감소함
- Wikipedia 역시 전체 트래픽의 35%를 자동화 클라이언트에 소모하며, AI 크롤러 증가로 인해 그 비중이 지속적으로 높아지는 중임
- AI 크롤러는 기존 ‘좋은 봇’(예: 구글, 검색 엔진)과 ‘나쁜 봇’(스크래퍼) 사이의 중간 영역을 차지해 정책 결정이 복잡해짐
- OpenAI 등은 GPTBOT, search bot, ChatGPT user 등 다양한 봇을 운영하며, 이들 중 일부는 인용과 트래픽 유입의 선순환을, 일부는 직접적인 이득 없이 콘텐츠만 가져감
- 악성 트래픽 방지를 위해 robots.txt, User-Agent, IP 검증, 캡차, Proof of Work, HTTP 시그니처, 클라이언트 핑거프린트, Rate Limiting 등 8가지 계층적 방어법이 소개됨
- 각 방어기법마다 한계 및 우회 가능성이 존재해, 다층적 방어(여러 수단의 병행 적용)가 필수적임
- 실질적 대응을 위해 오픈소스 라이브러리, IP 데이터베이스, 프록시, 쿠버네티스 설정 등이 활용될 수 있음
- 최근 Cloudflare의 HTTP Message Signature, Apple의 Private Access Token 등 신기술도 등장하고 있으나, 일부 표준화 및 호환성 문제는 남아 있음

---

## 세부 요약 - 주제별 정리

### AI 봇은 기존 웹 트래픽 문제를 더욱 심화시키고 있음

- 웹 트래픽의 약 50%는 자동화된 클라이언트(봇)로 인한 것이며, 업종에 따라 비율은 상이함(게임 분야는 60%).
- ‘에이전트 혁명’이 본격화되기 전에도 이미 자동화 트래픽은 상당한 비중을 차지했고, AI 봇의 등장으로 이 문제가 가속화됨.
- 오픈AI의 챗봇, 추론 AI 등 다양한 AI 응용 프로그램이 웹을 크롤링하며 콘텐츠를 가져가 트래픽 및 비용 부담이 증가.
- Diaspora(온라인 커뮤니티): 트래픽의 24%가 GPTBOT에서 발생.
- Read the Docs(문서 플랫폼): AI 크롤러 차단 전후 일별 대역폭이 800GB에서 200GB로 감소.
- Wikipedia: 전체 트래픽의 35%가 자동화 클라이언트에 소요되며, AI 크롤러가 그 주요 원인임.

### AI 크롤러의 등장으로 '좋은 봇'과 '나쁜 봇'의 경계가 모호해짐

- 기존에는 구글 등 검색 엔진 크롤러를 ‘좋은 봇’, 불법 스크래퍼 등을 ‘나쁜 봇’으로 구분해 왔음.
- AI 크롤러(예: OpenAI, Bing, 기타 LLM 트레이닝용)는 웹사이트 운영자에 이득이 될 수도, 아닐 수도 있어 선택이 복잡해짐.
- 일부 AI 봇(예: OpenAI search bot)은 콘텐츠 크롤링 후 결과에 인용 및 트래픽 유입 기회를 제공함.
- 하지만 GPTBOT 등은 모델 학습만을 목적으로 사이트를 크롤링, 사이트 운영자에 통상적인 이득(트래픽, 인용 등) 제공 없이 데이터만 수집함.
- ChatGPT user bot은 실사용자 요청에 의해 웹페이지를 즉석 수집, 활용하지만 인용 여부는 불확실함.

### AI 에이전트 및 자동화 트래픽 판별의 어려움이 커지고 있음

- 최근 Autonomous Agent(컴퓨터 대리인) 형태의 트래픽이 증가: 실제 사용자의 VM 브라우저 등에서 자동화된 행동(예: 이메일 받은편지함 정리, 대량 티켓 구매) 실행.
- 에이전트 트래픽이 사이트에 유익할지/해로울지는 맥락·용도에 따라 다르며, 탐지 자체가 더욱 어려움.
- 일부 AI 크롤러는 본인임을 직접 밝히지만, 에이전트 타입은 크롬 브라우저 등으로 자신을 위장하여 탐지가 곤란함.

### robots.txt 파일은 기본 방어수단이지만 제한적인 효용만을 가짐

- robots.txt는 크롤러에게 웹사이트의 구조, 접근 허용/차단 페이지를 안내하는 자발적(Non-enforced) 규약임.
- 구글, OpenAI 등 '선량한' 크롤러는 이를 준수하지만, 다수의 악성/AI 크롤러는 무시하거나 오히려 해당 파일을 역이용하여 숨겨진 페이지를 긁음.
- 설령 효과가 제한적이더라도, robots.txt를 시작점 삼아 봇 정책 수립에 활용하는 것이 유익함.

### User-Agent와 IP 검증을 통한 첫 단계 판별이 필수적임

- HTTP 요청은 User-Agent 헤더로 자신을 드러냄. 이는 오픈소스 라이브러리나 블랙리스트로 탐지·차단 가능.
- Arcjet은 수천 개의 User-Agent 문자열 데이터베이스 오픈소스 프로젝트를 제공.
- 악성 봇은 User-Agent를 쉽게 위조(구글, 크롬 등으로 변경)할 수 있어서 한계가 있음.
- 실제 탐지에는 User-Agent + IP 소유주 검증을 결합해 사용(IP reverse DNS lookup 통해 소스 확인). 예: 구글, 애플, Bing, OpenAI 등은 IP 확인 API를 공식 제공.

### IP 기반 방어는 중요하지만 우회 가능성이 높으므로 신중히 활용해야 함

- 데이터센터 IP, VPN·프록시, 국가/지역정보, 네트워크 사업자 유형(주거용, 모바일, 데이터센터) 등 다양한 변수로 트래픽을 탐지 가능.
- 예시: 2023년 Cloudflare 네트워크에 유입된 봇 트래픽의 12%가 AWS 데이터센터에서 발생.
- 실제 사용자가 데이터센터에서 접근할 리 없는 서비스(예: 회원가입)는 해당 IP를 차단하는 것이 효과적임.
- 지오로케이션(국가, 지역) 데이터는 정확도가 떨어지며, 프록시를 통한 주거용/모바일 IP 위장도 흔함.

### CAPTCHA 및 Proof of Work은 점차 우회가 쉬워지지만, 조건부 보조수단이로 역할

- 기존 캡차(문제 풀이, 이미지 클릭 등)는 AI의 자동학습 & LLM 도입으로 쉽게 해킹됨(음성 변환 등으로 수 초 내 통과).
- Proof of Work(암호화 계산 수행 후 접근 허용)는 서버 공격 비용을 높여 대규모 크롤러엔 효과적이나, 이윤이 큰 공격(대량 티켓 구매 등)에는 한계.
- 캡차 난이도 조절, 접근성 문제(사용자 불만)도 주요 고려사항임.
- Anubis, Go Away, Nepenthees 등 오픈소스 프록시 도구로 쿠버네티스 등에 적용 가능.

### HTTP Message Signature와 Private Access Token 등 신기술도 등장하고 있으나 도입은 초기 단계

- Cloudflare 제안: HTTP Message Signature(자동화 클라이언트가 매 요청마다 암호화 서명을 포함), 단점은 IP 검증만큼의 효과 미지수 및 도입 초기임.
- Apple의 Private Access Token/Privacy Pass: iCloud 가입자를 Safari 등에서 인증하여 반복 캡차 감소 효과, 다만 애플 생태계 한정+업계 표준화는 미흡.

### 클라이언트 핑거프린트와 Rate Limiting은 다량의 분산 요청에 대응하는 핵심 기술임

- IP 변조가 쉬운 환경(IPV6 등)에서, SSL/TLS 설정, HTTP 헤더 등 네트워크 특성 기반의 고유 ‘해시’(예: 오픈소스 J4 해시, HTTP 지문 등)로 클라이언트 식별.
- 많은 요청이 단일 핑거프린트에서 발생 시, 핑거프린트 자체를 차단하면 효과적.
- 핑거프린트/세션 기반 Rate Limiting(요청 제한)이 중요하며, 단순 IP 기준 리밋은 우회 가능성이 큼.

### 계층적·복합적 방어 구성만이 현실적인 대응책임

- robots.txt는 시작점일 뿐, 추가 수단(User-Agent, IP 인증, 핑거프린트, Proof of Work 등)과의 병용이 불가피함.
- 사이트 특성(특정 상품 대량 구매 등)에 맞춰 IP 평판, 실험적 신기술, 핑거프린트+쿼터 조정 등 맞춤 대응 필요.
- 대부분의 솔루션은 오픈소스 프로젝트, 데이터베이스, 프록시·중간계층 설정 등 개발자 수준에서 구현 가능함.

### Arcjet 및 추가 자료 안내

- 발표자인 David Mytton은 Arcjet(보안 SDK 개발사) 창립자로, Arcjet 블로그에 관련 자세한 글과 오픈소스 자료를 제공함.
- “blog.arcjet.com”에서 더 많은 구현 예시와 현대 웹보안에 관한 내용을 확인할 수 있음.
- 핑거프린트 해시, 캡차 프록시, User-Agent 식별 등 Arcjet∙업계 최신 도구 소개.
