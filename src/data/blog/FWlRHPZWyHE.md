---
author: AI Makers Club
pubDatetime: 2025-07-12T23:45:27.642Z
title: "[Workshop] AI Pipelines and Agents in Pure TypeScript with Mastra.ai - Nick Nisi, Zack Proser"
slug: FWlRHPZWyHE
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "***Pure TypeScript로 Mastra.ai 프레임워크를 활용한 AI 파이프라인과 에이전트 워크숍*** (영상 제목) 본 워크숍에서는 Mastra 프레임워크와 TypeSc"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/FWlRHPZWyHE/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [[Workshop] AI Pipelines and Agents in Pure TypeScript with Mastra.ai — Nick Nisi, Zack Proser](https://www.youtube.com/watch?v=FWlRHPZWyHE)  
**채널명:** AI Engineer

## *Pure TypeScript로 AI 파이프라인과 에이전트를 구축하는 Mastra.ai 워크숍* 핵심 요약

- ***Pure TypeScript로 Mastra.ai 프레임워크를 활용한 AI 파이프라인과 에이전트 워크숍*** (영상 제목)
- 본 워크숍에서는 Mastra 프레임워크와 TypeScript로 생산 환경 수준의 AI 애플리케이션을 구축하는 패턴을 실습함
- 대표 예제로 "AI 기반 밈 생성기(meme generator)"를 직접 구축하며, 이 과정에서 워크플로우·툴·에이전트 등의 Mastra 핵심 구성요소를 단계별로 학습
- Mastra의 워크플로우는 타입이 명확한(typed), 조합 가능한(composable) 파이프라인으로, 각 단계를 순차적·조건적으로 연결 가능
- 툴(tool)은 데이터베이스 쿼리, 파일 시스템 접근, API 호출 등 에이전트가 호출 가능한 함수로 제공됨
- 에이전트(agent)는 자연어로 사용자와 상호작용하며, 다양한 워크플로우와 툴을 활용하여 복잡한 작업을 자동화 수행함
- Mastra는 단순 playground 뿐 아니라 내장 메모리, 영속성, 옵저버빌리티, 평가(evaluation) 시스템까지 포함해 프로덕션에서도 즉시 사용 가능
- 주요 실습 내용: Mastra 설치, GitHub 레포 클론, 단계별 브랜치 활용, OpenAI 및 Imageflip API 사용, Zod 스키마 및 유효성 검증, 에이전트와 워크플로우 통합, 디버깅 및 배포 전략 논의
- 질의응답과 실시간 데모를 통해 Mastra 프레임워크의 설계 의도, 경쟁 프레임워크와의 차별점, 실제 배포 및 결합 방법, 실무 적용 사례까지 상세히 소개

---

## 세부 요약 - 주제별 정리

### Mastra.ai와 TypeScript로 AI 파이프라인 및 에이전트 설계는 프로덕션 수준의 확장성과 통합성을 확보함

- Mastra는 타입 안정성과 생산성을 중시한 Pure TypeScript 기반 AI 프레임워크로, 기업용·내부 도구용 애플리케이션 개발에 최적화됨
- WorkOS의 DX팀(개발자 경험팀)이 주도하여 활용·보급, SSO·디렉토리 동기화·감사로그 등 기업용 툴과 안정적으로 결합 가능
- Vercel AI SDK 위에서 빌드되어 코드 2~3줄만으로 LLM(대형 언어모델) 종류를 유연하게 교체 및 파이프라인 전환 가능
- 내장 평가(Evaluation) 시스템으로 각 파이프라인 세부 단계별 성능·정확도·결과 품질을 자동 감시, 프로덕션 운영에 직접 활용함
- 빌트인 Playground, Swagger API, 브랜치 기반 단계별 체크포인트 등 개발자 친화적 도구 제공

---

### 조합 가능하고 타입이 안전한 워크플로우는 순차·조건 분기를 지원하며 실무 로직 표준화를 가능하게 함

- Mastra의 워크플로우(workflow)는 RXJS 스타일 API를 기반으로, 단계별(steps) 함수 체이닝을 지원
- 각 단계는 입력/출력 데이터 스키마(Zod 활용)를 명확히 정의하여 LLM의 비결정적 출력도 타입/스키마로 강제 및 검증함
- 배열 기반, 혹은 then/if/while 등 플루언트(fluent) API를 통한 분기·루프 등 복잡 조건 흐름도 표현 가능
- 실제 코딩 예시: 사용자 입력에서 "업무 불만"을 추출 → 밈 템플릿 선택 → 캡션 생성 → 실제 밈 URL 생성까지 단계를 명시적으로 연결
- 단계별 입력/출력(O/I)은 워크플로우에서 바로 디버깅 가능하며, 각 단계별 논리적 데이터 흐름을 시각화 지원

---

### 툴(tool)은 에이전트가 호출하는 실행 단위 함수이며, 플러그인/외부 시스템 연동의 핵심적 수단으로 작동함

- 툴은 파일 시스템, 외부 API, DB 등 임의의 자바스크립트/타입스크립트 함수로 정의
- OpenAI, Claude, MCP(Model Context Protocol) 등 외부 모델 및 환경과 연동되어 툴을 호출함으로써 LLM에 새로운 ‘맥락’이나 데이터 제공 가능
- 과거에는 툴을 직접 에이전트에 연결하여 사용했으나, 워크플로우 + 에이전트 조합이 더 결정론적이며 조직적 활용에 적합
- 실무 적용 예: GitHub MCP 서버를 통해 Claude에게 이슈 맥락 자동 전달 → 자연어로 “이슈의 재현 방법 설명” 등 요청 가능

---

### 에이전트 개념은 자연어-프로그램 흐름의 유연한 접점이자, 실사용자 인터페이스로 진화하고 있음

- 단순 챗봇 프롬프트가 아닌, 워크플로우 및(혹은) 툴을 내장·호출 권한을 가진 "실행 주체" 개념으로 설계
- 비개발자/비전문가도 자연어로 원하는 작업을 요청 → 에이전트가 필요한 워크플로우/툴을 호출하여 실제 조작 수행 (ex: 리포트 생성, 업무 자동화)
- 실시간 프롬프트/지시어 조정, 메모리 시스템 연동, 입력-출력 체이닝 등 다층적 맞춤화/자동화 지원
- 본 워크숍 실습: “업무 불만” 자연어 입력 → 적합한 밈 생성 워크플로우 실행 → 자연스러운 이미지·결과 제공 자동화

---

### MCP 등 오픈 플러그인 프로토콜을 통한 AI 시스템 확장은 밈 생성기 외 다양한 기업용 시나리오를 실현함

- MCP(Model Context Protocol)는 Anthropic이 주도한 범용 LLM 플러그인 표준(IS)
- Works OS/Claude/Cursor/Windsurf 등 주요 에디터·서버가 MCP 도입, 문맥력·작업 자동화 확장
- MCP 예시 실습: http://mcp.shop 에 접속해 자연어로 티셔츠 주문(무료, MCP 호출 필수) → 주소, 사이즈 입력만으로 주문 챗봇 완성
- 실질적으로 기업 내부에서 e-commerce, 사내 툴 자동화 같은 복합 시나리오에도 동일 패턴 응용 가능함
- 실제 제품 샘플링, 야간 이벤트(MCP Night 등) 통한 생태계 활성화

---

### Zod 기반 런타임 유효성 검증 및 구조적 JSON 강제는 LLM의 비결정성 문제를 효과적으로 해결함

- 입력/출력 데이터는 Zod로 스키마 선언하며, LLM 출력 결과값을 구조적으로 강제하고 오류시 런타임에서 처리 가능
- OpenAI 등 실제 서비스에서도 자체 API 구조화에 Zod와 유사한 타입 강제 및 Coercion 로직 필수 적용 중
- Mastra는 자체적으로 tool compatibility output layer를 추가해 "스키마 미준수/오류율"을 획기적으로 개선 (블로그 포스팅 참조)
- 예) schema에서 문자열 길이 등 제약조건 세팅 시, LLM이 완벽히 따르지 못하더라도 강제 변환/리트라이 등 보완로직 내장

---

### 개발 환경 세팅(클론/브랜치/설치)과 실시간 페이스 조절, 풍부한 디버깅 도구 송출로 워크숍 진행을 최대한 원활히 설계함

- AI 엔지니어 Slack에 워크샵 채널과 모든 자료, GitHub 레포(체크포인트별 브랜치), npm 설치 등 셋업 안내
- 각 단계(branch)별로 npm install, dev 실행, 에이전트/툴/워크플로우 추가 등 분절적 빌드 가능
- SSH/HTTPS clone, 네트워크(Wi-Fi) 문제 발생시 실시간 지원 및 CLI 명령어, Slack을 통한 명령어 공유
- Mastra Playground에서 실시간 입력/출력, API, Swagger 스펙 등 시각적 결과 즉시 확인 가능
- 실시간 질문 대응(Q&A), 마이크 활용(오프라인/비대면 동시 대응), 피드백 즉각 반영

---

### Mastra가 경쟁 프레임워크 대비 각광받는 이유는 TypeScript 정체성, 내장 평가, 빠른 생산성, 유연한 배포 전략 등 복합 요소임

- Pure TypeScript 기반으로 타입 안정성과 컴파일러/IDE 지원에 강점 (VSCode, Vim, Tmux 등 실무 호환)
- Vercel AI SDK 내장, 다양한 LLM 및 플러그인 연결성 확보, prod-ready 평가(Eval) 및 메모리, 영속성 기본 탑재
- CLI 실행 즉시 로컬 Playground, Swagger API, 브랜치 기반 단계 지원 등 즉시 사용성 뛰어남
- 다양한 배포 옵션(Hono 서버 기본, Dockerizer, Express/Next.js 백엔드, Cloudflare/Netlify/Vercel/AWS Lambda 등 어댑터 내장)
- 랩 단위 실험 이후 실무 workflow/agent를 바로 내·외부 서비스에 API로 노출, 서비스간 재사용 용이

---

### 밈 생성기(Meme Generator) 실습을 통해 복잡한 실무형 워크플로우 디자인 및 테스트 전략을 배움

- 입력: “상사/동료에 대한 업무 불만” 자연어 → LLM이 불만 유형/정서 추출
- 분기 및 매핑: 불만 분석 결과로 적합한 밈 템플릿 찾기(Imageflip API 연동)
- 캡션 생성: 밈 캡션(이미지 텍스트) LLM 생성, 박스 개수·위치 정보 구조적으로 추출
- 밈 생성/출력: Imageflip API로 밈 이미지 최종 생성, URL 반환
- Mastra Playground에서 입력-출력, 각 단계별 데이터 흐름, 오류 발생시 재시도/디버깅 기능 실습
- 실무 확장: e-commerce, 업무 자동화, 럼프런 API 통합, RAG 파이프라인 실현 등 다양한 시나리오 적용 예시

---

### 실시간 QA 및 프레임워크 디자인 논의: DAG(Directed Acyclic Graph), 서버리스 배포, 캐싱, 메모리 구성까지 상세 토론

- 워크플로우 설계 시 Airflow 등에서 흔히 쓰이는 DAG 구조와의 차이, 조건분기/루프/재진입 지원 여부 질의응답
- Durable Execution(지속적 실행)을 위한 Ingest, Temporal, Cloudflare 등 백엔드 교체 및 확장 옵션 안내
- 서버리스 배포(Lambda 등): 단일 번들 방식, 환경 특성별 번들 용량/런타임 최적화 대응
- 워크플로우/에이전트별 캐시, 메모리(예: SQLite, Postgres, 다양한 스토리지 드라이버) 구성 및 관리법
- MCP 서버, 인증(WorkOS 연계), API 노출, 배포 전략 등 실무 구축/운영 방법 구체 설명

---

### 사용자 실습 및 기술 커뮤니티 내적용 사례 공유를 통해 활용 패턴 및 확장 가능성이 구체적으로 제시됨

- 실제 배포 사례(프로덕션 적용), 업무 자동화, SQL 질의, 레포트 생성, 내부 툴/랩 단위 업무처리 등 활용 패턴 공개
- 파이프라인/에이전트 설계시 익숙함, 자유로운 도구 조합, 기술 스택 간 상호운용성 강조
- 에이전트용 UX·워크플로우도 실제 실무자·비전문가 활용에 적합한 방향으로 발전 중 (메모리, 포스트잇형 기록 등)
- 개발자/비개발자 역할, 코드 리뷰·보안, GPT/Claude/Anthropic 등 LLM과 메타 도구의 실질적 효과 논의

---

### 빠른 프로토타이핑과 반복을 통한 실험 문화가 새로운 AI 시대 내 개발 및 협업 방식 변화를 이끎

- 실습자 간 자유로운 코드 실험, 브랜치 스위칭, 슬랙 실시간 밈 공유, 다양한 API/도구 연동 동시진행
- VZero.dev 등 툴을 통한 5분 내 실제 도구 제작/전달, 업무 "낭비된 의사소통" 최소화 사례
- 논의: "이제는 필요한 도구를 만드는 것이 토론보다 빠르다", 저작권·비정형 사용자 사례, 대량 자동화 활용 가능성
- 낮은 진입장벽, 빠른 확장성, 하나의 정의된 프레임워크로 인터페이스 재사용성 극대화

---

### 실험적 확장(워크플로우 엔진 교체, 구조적 출력 에러 처리, 메모리 스토리지 확장 등)은 오픈소스 커뮤니티와 실시간 협업을 통해 계속 진화함

- Mastra 자체 업데이트 및 도큐먼트/블로그: tool compatibility, 구조적 오류 처리, 다양한 통합사례 지속 릴리즈
- 커뮤니티 Q&A 및 룸 내 실시간 피드백 반영, 브랜치/문서/샘플 코드 공유
- 앞으로의 목표: RAG(Retrieval Augmented Generation), 벡터DB 통합, 고도화된 자동화 등 지속 확장 가능
- 실제 프레임워크 팀, 유저 간 소통을 통한 현실적 요구와 기술 진화 방향 조율

---
