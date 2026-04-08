---
author: AI Makers Club
pubDatetime: 2026-04-08T23:45:48.580Z
title: "OpenRAG: An open-source stack for RAG - Phil Nash"
slug: 4TxOBhDRRCM
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상의 발표자 필 내쉬(Phil Nash, IBM Developer Relations Engineer)는 “RAG(Retrieval-Augmented Generation)”이 ‘끝"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/4TxOBhDRRCM/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [OpenRAG: An open-source stack for RAG — Phil Nash](https://www.youtube.com/watch?v=4TxOBhDRRCM)  
**채널명:** AI Engineer

## *OpenRAG: RAG를 위한 오픈소스 스택* 핵심 요약

- 영상의 발표자 필 내쉬(Phil Nash, IBM Developer Relations Engineer)는 “RAG(Retrieval-Augmented Generation)”이 ‘끝났다’는 주장에 반박하며, 실제로는 복잡성과 실용성 때문에 RAG가 여전히 중요한 역할을 한다고 주장함
- IBM이 개발한 오픈소스 프로젝트 ‘OpenRAG’는 Docling(문서처리), OpenSearch(검색 인덱싱), Langflow(시각화/오케스트레이션)를 통합하여 강력하고 유연한 RAG 시스템을 제공함
- Docling은 PDF, Word, HTML, 슬라이드, 오디오, 비디오 등 다양한 문서 형식을 처리 가능하며, 특히 PDF 지원에 특화되어 있음
- Embedding(임베딩) 단계에서는 외부(예: OpenAI)뿐 아니라 로컬 임베딩 모델도 완벽 지원하며, 에어갭 환경에서도 완전 오프라인으로 운영 가능
- OpenSearch는 벡터/키워드 하이브리드 검색 및 고급 필터링 제공, 기본적으로 JVector(KNN 기반, DiskANN 아키텍처)를 벡터 인덱스로 사용해 인덱스가 메모리에 상주하지 않아도 확장성 용이
- Langflow는 시각적 드래그 앤 드롭 방식의 에이전트 & 데이터 파이프라인 빌더로, 문서 수집/처리부터 프롬프트 관리, 툴 통합 등을 유연하게 설정 가능
- OpenRAG는 ‘에이전틱 검색(Agentic Retrieval)’을 도입—에이전트가 직접 검색 쿼리를 설계하고 툴을 활용하여 내재적 검색/생성 과정을 주도
- 실습 데모에서는 사용자 인터페이스, 문서 업로드, 지식 필터, 클라우드 커넥터, 모델/임베딩/청크 세부 설정, API 및 Langflow 기반 에이전트 편집 등 실제 확장성과 커스터마이즈 예시를 구체적으로 설명함
- 오픈소스(Next.js 프론트엔드, Python 백엔드)로 제공되며 0.4.0 버전 기준 자유롭게 사용 및 피드백, 기여 가능
- 발표자는 오픈소스 생태계 협력을 강조하며, OpenRAG가 누구나 자신만의 최적 RAG 솔루션을 꾸릴 수 있도록 설계되었음을 역설함

---

## 세부 요약 - 주제별 정리

### 많은 사람들이 RAG의 종말을 외치지만 실제로는 복잡성과 현실적 요건 때문에 여전히 중요하다

- 발표자는 "RAG는 죽었다"는 주장을 흘려듣지만, 실제로 모든 기업이 100만 토큰 이하의 데이터만 갖고 있고, 매번 100만 토큰을 대가로 입력하는 게 아니라면 RAG는 여전히 필요하다고 강조
- RAG가 해결된 기술("RAG is solved")로 치부되는 경우도 많지만, 현실적으로는 다양한 단계(비정형 데이터 추출, 문서 청킹, 임베딩, 벡터 DB 구축 등)가 어렵고 프로젝트마다 복잡성이 상이함
- 특히 PDF 처리, 청킹 전략 변경 및 테스트, 임베딩 모델의 지속적 발전, 다양한 검색 및 파이프라인 튜닝(요약 추가, 청크 확장, 크로스 인코더 재정렬, 쿼리 리라이트 등)이 결코 간단하지 않음
- 실제 업무에서는 각자의 문서 특성, 유저 성향, 기대 방식 등 환경 변수로 인해 RAG 도입과 운영이 복합적임

### IBM은 Docling, OpenSearch, Langflow를 결합해 쉽고 강력하게 커스터마이즈 가능한 오픈소스 RAG 스택(OpenRAG)을 개발함

- 발표자는 본인이 최근 몇 년간 AI 및 RAG 관련 툴 개발 경험을 바탕으로 IBM에서 오픈 RAG 스택을 만들었음을 소개
- OpenRAG는 다음 세 오픈소스 프로젝트가 핵심임을 명확히 밝힘: Docling (문서 수집/처리), OpenSearch (검색/인덱싱), Langflow (시각 파이프라인 & 에이전트 오케스트레이션)
- 이 세 컴포넌트의 결합으로 강력하면서도 유연하고 확장성 높은 RAG 시스템을 제공함. 모든 핵심 요소를 오픈소스로 자유롭게 확장 및 교체 가능
- OpenRAG 공식 버전은 0.4.0으로 누구나 설치 및 실험 가능

### 다양한 문서 포맷을 강력하게 처리하기 위한 Docling의 구조적 파이프라인이 핵심이다

- *Docling*은 IBM Research Zurich에서 개발된 오픈소스로, PDF, HTML, Markdown, Word, 슬라이드, 스프레드시트, 오디오, 비디오 등 거의 모든 문서 유형을 처리
- 특히 PDF는 여러 소형 모델(텍스트, 테이블, 이미지 추출)로 분할된 파이프라인이 구성됨. OCR 백엔드(예: 스캔본 지원)도 선택 가능
- 별도의 VLM(비전-언어 모델) 파이프라인도 지원, IBM의 Granite Docling 2억5800만 파라미터 비전 모델을 활용해 올인원 방식 처리 가능
- Docling 추출문서는 doc tags라는 XML 유사 포맷으로 중간 표현(문서 계층구조 포함) 생산 후, Markdown/HTML/JSON 등 다양한 포맷으로 변환 지원
- 내장 chunker가 문서 계층구조(heading, section 등)를 분석해 계층적 청크로 분할 및 관리

### 임베딩 시스템은 외부 및 로컬 모델 모두 지원하고 에어갭 환경에서도 완전 자급자족이 가능함

- 임베딩 제공 방식에 대한 제한이 거의 없음: OpenAI 등 API 제공자 또는 로컬 호스팅 모델 모두 활용 가능
- Docling 및 전체 OpenRAG는 오프라인 실행이 가능하여, 보안상 외부 인터넷 연결이 불가능한 에어갭 환경에서도 전 과정 실행 가능
- 임베딩이 끝난 청크 데이터는 OpenSearch에 인덱싱됨

### OpenSearch와 JVector KNN 플러그인은 대규모 확장성과 고급 검색(필터, 하이브리드, 멀티모델)을 지원한다

- OpenSearch는 ElasticSearch의 오픈소스 포크 버전으로, 벡터 검색과 키워드 검색의 하이브리드 쿼리 및 고도의 필터링/어그리게이션이 특징
- 기본 벡터 인덱싱 플러그인은 JVector KNN 사용 – 이는 DiskANN 아키텍처 기반으로 인덱스가 메모리에 전부 올려지지 않아 대용량 데이터 서비스에 적합
- 멀티 임베딩 모델 병렬 지원으로, 추후 임베딩 모델 변경·이전시 유연성 확보(단, 성능 저하는 주의)
- OpenSearch 설정은 OpenRAG 최초 구동 시 자동 적용

### Langflow는 시각 편집 인터페이스로 데이터 파이프라인부터 에이전트 로직까지 손쉽게 커스터마이즈할 수 있게 한다

- Langflow는 드래그&드롭 방식의 AI 파이프라인/에이전트 빌더—Docling, OpenSearch, 각종 임베딩 및 데이터 변환 프로세스까지 시각적으로 통합 설계
- 인제스천 과정(문서수집-청킹-임베딩-검색세팅 등)과 생성 과정(프롬프트-툴체인-답변제시 등)을 모두 직관적으로 설정·수정 가능
- 툴체인 추가, 프롬프트 템플릿화, 가드레일 등 별도 컴포넌트 자유 배치
- 실제로 Langflow 내에서 에이전트 로직을 직접 편집하여, 예를 들어 guardrails(입력 밸리데이션) 추가, 계산기 연결, 기타 도구 연계 등 확장 시연

### Agentic Retrieval의 도입으로 에이전트가 직접 검색 쿼리를 설계해 보다 유연한 질의·생성 과정을 구현함

- 기존 RAG 파이프라인은 사용자가 질의 → 임베딩 → 벡터DB에서 유사도 검색(top k 청크) → 단순 컨텍스트로 LLM에 전달이 기본 흐름임
- Agentic Retrieval은 사용자의 질의와 더불어 에이전트에게 여러 툴(검색, 날짜조회, 계산, 문서검색 등) 및 프롬프트/지시 사항을 제공해, 에이전트가 필요시 반복 검색·분할 질의·결과 조합 등 주도적으로 처리
- OpenAI, Anthropic(Claude), OAMA, WatsonX.ai 등 다양한 API 및 로컬 모델을 자유롭게 적용 가능

### 실제 데모에서는 사용자 인터페이스, 문서 업로드, 지식 필터 등 주요 기능이 상세히 소개됨

- OpenRAG 실행 후 챗 인터페이스로 진입, "What is OpenRAG?"와 같이 질문—자동 답변+툴 호출 내역도 노출
- Langflow가 챗봇의 “다음 질문 제안(nudges)”까지 관리함 (에이전트의 검색 전략 일부)
- 지식(knowledge) 섹션에서 파일 혹은 폴더 단위 문서 업로드, 동기화(synchronization) 버튼 지원
- 청크 및 객체 구조 실시간 점검, 오픈서치 기반 필터 생성으로 챗봇 질의 시 특정 문서만 대상으로 지정 가능(필터 쿼리)
- 설정 메뉴에서 클라우드 커넥터(Google Drive, Sharepoint, OneDrive 등) 연동 지원(Google OAuth로 인증 필요)—문서 동기화 자동화 기능 제공
- 모델/임베딩/청크 크기 등 세부 설정 변경 가능: 예) Granite for 3B(IBM LLM), 롤링 임베딩 모델(quen 3 embedding 6B), 청크 크기 및 오버랩 폭 등
- Docling 설정에서 테이블 구조 추출, OCR 적용여부, 이미지 설명 추출여부 등 개별 켜기/끄기 가능
- 외부 API Key로 OpenRAG를 자체 API 서버로 구성, 외부 서비스 연계 가능

### Langflow 기반 내부 에이전트 구현 세부 및 커스터마이즈 확장 예시가 시연으로 제시됨

- “Edit in Langflow” 버튼 통해 에이전트 챗플로우 내부 구조 직접 수정 가능
- 입력-프롬프트-에이전트-도구구성-출력 등 각 단계를 직접 시각적으로 편집; 툴 추가/제거 및 컴포넌트 연결 자유
- Guardrails(입력 밸리데이션) 추가 예시: 조건 미충족시 에러 응답, 정상시 기존 프롬프트 연결
- 계산기, 외부 URL 인제스터 등 다양한 내장 도구 추가 가능—확장성 강화

### MCP 서버 및 API로 에이전트·검색서비스를 외부 애플리케이션과 손쉽게 통합할 수 있다

- OpenRAG는 내장 MCP 서버 및 API를 통해 자체 기능(챗, 검색 및 에이전트 수행 등)을 외부 서비스/에이전트에 연동 가능
- 이는 사내 시스템, 다양한 AI 앱 내에서 RAG 인프라를 “서비스형”으로 활용시키는 데 적합

### 오픈소스 생태계 기여와 RAG 스택의 자유로운 확장/기여가 강조됨

- OpenRAG의 주요 구성요소(Docling, OpenSearch, Langflow)는 모두 오픈소스로 별도 기여·확장 가능
- 전체 시스템은 프론트엔드가 Next.js, 백엔드는 Python으로 이루어짐
- 발표자는 “RAG가 정말 ‘해결’(Solved)되었는지는 실제 데이터·사용자 환경에 달렸으며, OpenRAG는 언제든 맞춤 구축 및 커스터마이즈할 수 있도록 설계됨”을 강조
- GitHub 프로젝트 참여(별, 피드백, 기여 등) 및 OpenRAG, Docling, OpenSearch, Langflow 각 파트너 프로젝트 모두 협업을 권장

### 결론적으로 OpenRAG는 현대 RAG 요구사항에 맞는 고기능 오픈소스 스택이며 자유로운 커스터마이즈와 확장성이 가장 큰 장점임

- 발표자는 모든 유형의 데이터를 바탕으로 최적의 RAG 솔루션을 구축하도록 충분한 자유도와 좋은 결정 기반(baseline)을 제공하는 것이 OpenRAG의 핵심 가치임을 재차 역설
- 모두가 함께 만들어가는 오픈소스 RAG 생태계를 지향함을 마무리 메시지로 제시함
