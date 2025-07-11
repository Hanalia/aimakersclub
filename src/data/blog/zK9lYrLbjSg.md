---
author: AI Makers Club
pubDatetime: 2025-07-11T23:45:41.616Z
title: "AI Engineering with the Google Gemini 2.5 Model Family - Philipp Schmid, Google DeepMind"
slug: zK9lYrLbjSg
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**행사 개요**: 본 워크숍은 Google DeepMind의 Philipp Schmid가 주도하였으며, 첨단 Gemini 2.5 모델(Pro 및 Flash)의 엔지니어링 활용을 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/zK9lYrLbjSg/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [AI Engineering with the Google Gemini 2.5 Model Family - Philipp Schmid, Google DeepMind](https://www.youtube.com/watch?v=zK9lYrLbjSg)  
**채널명:** AI Engineer

## *Google Gemini 2.5 모델 패밀리로 AI 엔지니어링 실습* 핵심 요약

- **행사 개요**: 본 워크숍은 Google DeepMind의 Philipp Schmid가 주도하였으며, 첨단 Gemini 2.5 모델(Pro 및 Flash)의 엔지니어링 활용을 실습 중심으로 체험할 수 있도록 구성됨
- **모델 특징**: Gemini 2.5는 텍스트·이미지·오디오·비디오·문서 등 다양한 입력을 이해하고, 텍스트·이미지·음성 등 데이터를 생성할 수 있는 멀티모달 모델로, Flash 모델은 API를 이용한 무료 사용이 가능함
- **실습 환경**: Google AI Studio 및 Colab 환경에서 GitHub 저장소의 노트북과 예시 코드 스니펫, 실습 과제 활용. Google 계정만 있으면 누구나 바로 시작 가능
- **학습 구조**: 텍스트 생성/멀티모달 입력/함수 호출과 구조화 출력/네이티브 툴(Google Search, 코드 실행 등) 사용 등 4개 주요 파트로 구성
- **토큰 및 비용 관리**: 입력·출력·사고(thinking) 토큰 개념과 각 가격 구조(예: 입력 1M=10¢, 출력 1M=40¢ 등), thinking budget로 reasoning 비용 제어 가능
- **실제 예시**: 환경 친화적 카페 이름 생성, PDF에서 총액 추출, 대화형 챗 API 관리, 구조화 데이터(예: 레시피·인보이스 추출) 생성, 이미지·오디오·비디오 분석 등 구체적 실습 제공
- **고도 기능**: 함수 호출(Function Calling)과 MCP(Model Context Protocol) 등 외부 툴 연동 및 자동 에이전트화(파티 세팅 등 병렬 함수 실행, Native Tool 통합)
- **시큐리티 및 활용 범위**: AI Studio/Vertex AI의 보안 및 컴플라이언스, 리저널 엔드포인트 및 하드웨어-온프레미스 대응 지원, Native Tool의 비용·구성 등 실무적 고려사항 언급
- **코딩 및 프롬프트 팁**: SDK/노트북 내 다양한 파라미터(temperature, max tokens, top_p, top_k 등) 튜닝법과 구조화 출력 파이안틱(pydantic) 활용법 설명
- **실무 연계**: 실제 API/DB/웹 검색 자동화, 대화 상태 저장, Agent Framework(ADK) 활용 및 MCP·A2A 등 최신 에이전트 프로토콜 활용 예시 소개

---

## 세부 요약 - 주제별 정리

### 워크숍의 목적은 Gemini 2.5 모델을 활용한 실습 중심 AI 엔지니어링 경험 제공에 있음

- 참가자들은 Google Gemini 2.5 모델(Pro 및 Flash)에 대한 이해와 실습 경험을 얻기 위해 모였으며, Hands-on 중심으로 진행
- Flash 모델은 무료 API로 사용 가능하며, 어떠한 Google Cloud 계정 없이 개인 Gmail만 있으면 충분
- 모든 실습은 GitHub 레포지토리의 노트북 파일(Google Colab 또는 로컬 Jupyter 환경 지원) 및 AI Studio에서 진행
- 실시간 Q&A 및 Slack 채널을 통한 질문 접수, 자유로운 실습 난이도 선택 및 섹션별 자율 진행 독려
- Google AI Studio(https://ai.dev), 워크숍용 GitHub(https://github.com/PhilippSchmid/gemini-2.5.aiengineering.workshop), 실습 및 솔루션 자료 등 세팅 방법 안내

### Gemini 2.5 Flash/Pro의 멀티모달 모델 특성과 탁월한 입력 지원이 강조됨

- Gemini 2.5 Flash/Pro는 텍스트, 이미지, 오디오, 비디오, 문서 등 다양한 입력을 기본으로 이해
- 텍스트 외 이미지 생성(텍스트→이미지), 텍스트→음성(Audio output)도 지원(Google I/O 2024 신규 공개)
- Model Card, 기능별 토큰 수 등은 공식 Gemini Docs에서 확인 가능
- 현장 데모 및 예제 실습에서 Flash 모델 API 무료체험 안내, Pro 모델은 유료 계정 필요

### Google AI Studio와 Colab, GitHub 저장소를 활용한 실습 세팅 및 API Key 생성 방법을 구체적으로 설명함

- AI Studio는 개발자용 빠른 모델 테스트, SDK 코드 변환 등 지원하는 플랫폼임
- API Key 생성 과정: AI Studio 우측 상단 ‘Get API Key’ 버튼 클릭→구글 클라우드 프로젝트 선택 또는 생성→API Key 생성 및 복사
- Colab에서는 ‘Gemini API key’라는 이름으로 Secret 값 입력 필요
- 로컬 환경에선 동일 이름 환경변수로 지정 필요
- GitHub 노트북 00_설정 파일 및 스크린샷 참고해서 단계별 세팅 가능
- Notebooks 폴더에 모든 실습 자료 및 솔루션 노트북 구비

### 텍스트 생성, 토큰 관리, 스트리밍 등 LLM 기본 활용법과 프롬프트 튜닝법을 단계별로 실습함

- 첫 파트: 텍스트 생성(예: 친환경 카페 이름 3개 만들기), 프롬프트 변경, 다양한 모델 ID 실습 안내
- 프롬프트 입력→응답 생성→토큰 카운트→비용 계산법 예시(520 input tokens ≒ $0.00002)
- 입력/산출/사고(thought) 토큰 개념, 사고 토큰은 thinking budget(0~24,000)으로 제어 가능
- 스트리밍 응답(generate_content_stream) 활용 시, 사용자 경험 향상
- 챗 기반 API: 구글 SDK의 채팅 세션/대화 상태 관리 자동화, get_history 메서드로 전체 대화 내역 관리 가능
- 시스템 프롬프트, temperature, max_output_tokens, top_p, top_k 등 세부 생성 파라미터 튜닝법 설명

### PDF/이미지/오디오 등 멀티모달 입력의 전처리/분석/추론 과정을 실제 사례로 상세하게 다룸

- PDF를 업로드→Google Cloud Storage에 1일 임시 저장→파일 레퍼런스 제공 후 프롬프트에 삽입
- 내부적으로 OCR 자동 적용(사용자 별도 변환 불필요), 이미지+OCR 데이터 동시 제공시 성능 향상
- 예시: 독일 Rewe 슈퍼마켓 영수증에서 ‘총액’ 추출, Prompt 언어와 PDF 언어가 달라도 정확 추출 확인
- mindmap, 테이블 등 다양한 문서 예시와 chunking, tokens 초과시 분할 처리 가이드
- 대용량 파일/TTS, 비디오 요약(1초=1프레임, 1시간=3600 images→1M 토큰) 등 실제 멀티모달 워크플로우 시연
- 새롭게 추가된 이미지→텍스트, 오디오 이해, 비디오 내 타임스탬프 추출 가능성 등 최신 기능 소개

### 구조화 출력(Pydantic 기반), 함수 호출 및 외부 API 연동 전 과정을 실습과 예제로 상세히 설명함

- pydantic 라이브러리를 통한 구조화 데이터(예: 레시피 목록, 인보이스 항목 등) 추출 과제 상세 설명
- 모델의 Output을 Python 객체로 직렬화/활용, Raw Response로 JSON 반환, pass 메서드 통해 변환
- PDF 등 멀티모달 입력과 구조화 출력 결합 → 예: PDF 인보이스 항목·가격·날짜 등 자동 추출 및 데이터베이스 활용
- 함수 호출(Function Calling)은 함수 시그니처(JSON Schema 선언) 및 프로퍼티/설명/파라미터 전달
- 사용자 프롬프트→함수 호출 후보 결정→클라이언트에서 실제 API 호출→API 결과→후속 대화에 반영 구조
- 병렬 함수 호출(예: 디스코볼·조명 동시에 켜기)과 순차 호출(예: 날씨 조회 후 온도 설정) 등 고급 에이전트 패턴 설명

### Native Tool(코드 실행, 구글 검색, URL Context 등) 내재화 및 연동 방식/비용 구조 등을 명확히 정리

- Native Tool: Google Search, Python Code 실행, URL Context(원격 사이트 크롤링) 등 별도 선언 없이 backend에서 실행
- 코드 실행: Python 코드 생성·실행·머드플롯 등 차트 이미지 반환까지 워크플로우 디테일
- URL 컨텍스트: 최대 20개 URL 제공, 웹 컨텐츠 추출·프롬프트 자동 추가→응답으로 활용
- Google Search: 프롬프트→검색 쿼리 자동 생성·실행→검색 결과→최종 응답. 1,500회 무료, 그 후 1,000회에 $35. 코드는 API로도 동일하게 전환 가능
- Image, OCR, 표 인식 정확도와 실제 토큰 사용 추적법, Grounding Metadata(출처 공개) 기능 등 부가적 정보 제공

### 시큐리티, Compliance, 성능·비용 제어 등 실제 현업 적용에 필요한 정보를 구체적으로 안내함

- AI Studio와 Vertex AI 모두 강력한 보안·컴플라이언스(예: 법정 규제, 방화벽, CISA 등) 요구 지원
- 글로벌/리저널 엔드포인트와 온프레미스용 Gemini 박스 제공, 환경별 성능·비용 등 컨설팅 권장
- Native Tool 사용시 베타/프리뷰 도구 안내, 각 리소스의 토큰 과금 범위 및 관리 전략 제시
- Paid Content 접근, 인증(OAuth, Auth0 등) 및 대규모 Tool 조합시 권장 처리 방법 등 최신 사례 공유

### MCP(Model Context Protocol) 및 MCP 서버, A2A(Agent to Agent) 등 차세대 에이전트 프로토콜 지원 방식을 자세히 설명함

- MCP는 선언적 함수 서비스 API 집합(Module Server) 등록/연동을 자동화, Gemini SDK에서 네이티브 세션 지원
- 수작업 Function Declaration 없이 MCP Session 전달만으로 연쇄 호출, 입력·출력·Crawling·병렬 함수 자동화
- 예시: MCP Server(Weather API 등)와 세션 생성→SDK tools 인자로 활용→자동 함수 추출/결과 삽입/최종 응답까지 전과정 노코드화
- Cognition AI 등 3rd party/Remote MCP Server 연동, 에이전트 프레임워크(ADK, agent development kit, LangChain, LangGraph 등) 연계 실사례
- A2A(Agent-to-Agent Protocol): 각기 다른 에이전트 프레임워크 간 연계·호출 지원

### 실제 Agent Framework(ADK), Memory(단기·장기), 대화 상태 관리 및 실무 코딩 팁이 다양하게 제시됨

- ADK(Agent Development Kit): Gemini API 연동, 함수·에이전트 관리, 배포 자동화 등 편의 기능
- 대화 메모리: 단기(현 대화 세션), 장기(사용자 이력), 외부 메모리 연동 및 품질 향상 노하우
- Prompt/메모리·함수 호출 결합 테스트, 프롬프트 전략 및 사례, 여러 단계 함수 연결 등 심화 실습 권장
- 비디오, YouTube, 멀티모달 대화, Deep Research Agent 등 실제 응용 예시(Open source 동시 공개)
- Gemini 컨텍스트 1M(향후 2M까지 확장 예정), 토큰별 가격/활용 전술 및 한계(예: 초과시 요약, Chunking 필요) 안내

### 다양한 플랫폼·도구 연계(YouTube, Cloud Run, 크롬 인스턴스, 인증체계 등)의 실무 사례와 확장 방향이 설명됨

- 크롬 인스턴스를 통한 UI/브라우저 제어(Cloud Run에서 크롬 인스턴스 실행 등) 기능 프리뷰 제공, 인증 연동(AUTH/OAuth) 실무 논의
- Paid Wall(유료 웹페이지) 접근시 함수 호출로 직접 데이터 획득 가능, 직접적 컨텐츠 인입 전략 안내
- Citations(출처 정보), 시작-끝 인덱스 메타데이터, 페이지별 참조 등 AI 응답 신뢰성 향상 방안 제시
- 추후 공개 예정 기능(예: 다양한 원격 MCP 서버, 퍼스트파티 MCP, 브라우저 전체 자동화 등) 및 커뮤니티 피드백 적극 독려

### 워크숍 마무리는 개별 실습, 질문 환영, GitHub 이슈 및 소셜 채널 통한 지속적 피드백 협력 체계를 안내함

- 모든 참가자는 실습 자료를 자율적으로 진행 가능하며, 문제 발생시 슬랙·소셜·GitHub 이슈 적극 활용 권장
- “잘 안되면 소란스럽게 이슈를 올려달라”는 적극적 피드백 요청 및 문서/문제 개선에 대한 개방성 강조
- 개발자 중심 실용 환경, 커뮤니티 협력, 오픈소스 참고(Deep Research Agents, MCP 등) 등을 안내하며, 본 워크숍 종료
