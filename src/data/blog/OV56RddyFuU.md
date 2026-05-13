---
author: AI Makers Club
pubDatetime: 2026-05-13T23:45:18.731Z
title: "Your Agent Can Now Train Models - Merve Noyan, Hugging Face"
slug: OV56RddyFuU
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "발표자는 Hugging Face 오픈소스 팀의 Merve Noyan으로, AI 에이전트 생태계의 최신 동향과 Hugging Face의 기능을 중점적으로 설명함 오픈 소스와 오픈 웨"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/OV56RddyFuU/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Your Agent Can Now Train Models — Merve Noyan, Hugging Face](https://www.youtube.com/watch?v=OV56RddyFuU)  
**채널명:** AI Engineer

## *여러분의 에이전트가 이제 모델을 직접 학습합니다 — Merve Noyan, Hugging Face* 핵심 요약

- 발표자는 Hugging Face 오픈소스 팀의 Merve Noyan으로, AI 에이전트 생태계의 최신 동향과 Hugging Face의 기능을 중점적으로 설명함
- 오픈 소스와 오픈 웨이트(open-weight) 모델의 차이, 오픈 라이선스(MIT, Apache 2.0 등) 및 코드 완전 공개 모델의 의미와 중요성을 강조
- 최근 GPT 등 폐쇄형 모델과의 경쟁력에서 GLM 5.1 등 최신 오픈소스 모델이 성능면에서 동등하거나 뛰어남을 수치와 벤치마크로 지지
- Hugging Face Hub를 통해 300만 개에 이르는 모델, 다양한 데이터셋 및 에이전트 중심 워크플로우 관리 가능
- 비전(LMM) 및 언어(LLM) 모델의 경계가 허물어지며, 최신 모델(예: Gemma 4, Qwen 3.5, Kimik 2.5 등)이 출시일에 비전 기능을 기본 탑재
- ‘벤치마크 데이터셋’ 기능 도입으로, 주목받는 벤치마크(SWB ENCH Pro, Humanities Last Exam 등)에서 오픈 모델의 성능 비교 및 선택 용이
- 코드 에이전트·비전 에이전트 등 로컬 실행 환경 확대, LM Studio, Jean, llama.cpp 등 다양한 로컬 앱과의 호환성 안내
- GGUF 포맷, L4 GPU 호환 등 모델 경량화 및 하드웨어 최적화 사례 소개되고, 쉬운 배포 방식(명령어 몇 줄로 실행) 강조
- Hugging Face 스킬(HF Skills), LLM 트레이너 스킬 등으로 에이전트가 직접 모델 트레이닝·파인튜닝·데이터셋 탐색·데모 배포가 가능함
- 새로운 Traces 데이터셋 저장소, Buckets 인프라, Spaces(MCP-동적 공간) 통합 등으로 대규모 파이프라인과 데이터 관리가 구현됨

---

## 세부 요약 - 주제별 정리

### 오픈 소스와 오픈 웨이트 모델은 라이선스·투명성·활용성에서 본질적 차이를 가짐

- 오픈 소스 모델은 코드는 물론 상업적 이용이 가능한 라이선스(MIT, Apache 2.0 등)가 붙음
- 오픈 웨이트 모델은 무상 사용이 허락되지만 상업적 이용이 제한된 케이스가 다수임
- 코드를 포함한 완전한 오픈 모델(에이전트, 하니스 등)은 모든 부분이 투명하게 공개됨
- 최근 보안 이슈(클라우드 성능 저하 사례 등)로 인해, 외부에 의존하지 않고 모든 변경 사항을 파악할 수 있는 오픈 소스의 필요성이 재부각됨
- 오픈 웨이트에 접근이 가능하면 모델 크기 축소, 양자화, 파인튜닝, 엣지 디바이스·브라우저 배포 등 폭넓은 활용이 가능하고, 사용자 프라이버시 보장 측면에서도 이점이 큼

### 오픈소스 AI 모델의 성능이 최신 폐쇄형 모델에 근접하거나 뛰어남이 수치로 입증되고 있음

- 과거에는 오픈 소스 모델의 성능이 부족하다는 인식이였으나, GLM 5.1 등 최신 모델은 폐쇄형 모델과 대등하거나 오히려 우세함
- 인공지능 인덱스(Artificial Analysis Intelligence Index)에서 녹색(오픈 모델)과 검은색(폐쇄형) 성능 차이가 좁혀짐
- 벤치마크 예시로 GLM 5.1이 현재 SWB ENCH Pro 등에서 선두권 유지
- 지속적인 발전으로 더욱 많은 오픈 모델이 고성능으로 출시될 전망

### Hugging Face Hub는 모든 오픈 모델·데이터셋 관리와 에이전트 기반 워크플로우 구현의 허브 역할을 함

- Hugging Face Hub에는 약 300만 개의 모델이 업로드되어 있음(실시간으로 증가 중)
- 데이터셋, Spaces(앱 형태 배포), Trace repository 등 다양한 리소스를 한 곳에서 관리 및 활용 가능
- 모든 오픈 모델 배포, 벤치마크, 실험 복제, 에이전트 워크플로우(NSP, MCP 등)까지 지원
- 최신 모델, 트렌딩 모델, 비전/텍스트/멀티모달 모델 필터링 등 최적의 검색 기능 제공

### 최신 LLM, VLM 등은 출시와 동시에 비전 기능을 갖추고 에이전트로 활용 가능성이 커지고 있음

- Gemma 4, Qwen 3.5, Kimik 2.5 등 대표적인 옴니(omni) 모델은 비전 및 언어 기능이 결합됨
- VLM(Vision Language Model)은 단순 이미지 처리에 그치지 않고, 컴퓨터 UI 오퍼레이션(스크린샷 처리, 클릭 등) 수행 가능
- 신규 모델들은 'Day Zero(출시 첫 날)'부터 비전 기능을 기본 내장해 배포하는 추세
- llama.cpp 및 llama server 등으로 VLM을 몇 줄의 코드로 즉시 로컬에서 실행 가능

### Handle 및 벤치마크 데이터셋 등 신기능 도입으로 오픈 모델 평가·선택이 쉽고 투명해짐

- 데이터셋 항목 하단의 벤치마크 버튼 클릭 후, 주요 벤치마크 데이터셋(SWB ENCH Pro, AIME 등)에서 모델별 성능 점수 확인 가능
- GLM 5.1, SWB ENCH Pro 등 오픈모델이 실제로 상위권에 오르고 있음
- 활발한 모델 성장과 함께 선택의 폭이 넓어졌으나, 벤치마크 집계·공개로 적합한 모델 선정의 편의성 극대화
- Hugging Face의 inference providers 기능으로, 다양한 외부 서비스(예: gro cerebras 등)에 연결해 가장 빠르고 저렴한 옵션 선택 가능

### 로컬 및 원격 환경에서 코드 에이전트·AI 비서의 손쉬운 구축과 실행이 보편화됨

- Pi, llama.cpp, llama agent 등은 로컬 환경에서 코드 에이전트를 매우 간단히 설치·실행할 수 있게 지원함
    - llama agent는 바이너리 형태로 Hugging Face Hub ID 입력만으로 실행 가능
    - Pi는 inference provider와 연동하여 로컬·원격 환경 모두 대응
- 슬랙, 왓츠앱 등 메신저와의 연동, 세팅 마법사 지원 등으로 경험 장벽 최소화
- GLM 5.1 모델과 Hermes agent 조합은 Slack 연동 시 챗봇이 자동 코드 수정·문제 해결 등 기능 수행을 사례로 들며, 매우 신뢰할 만한 작업 환경 제공

### Hugging Face Traces, Buckets 등 확장된 데이터 관리 기능은 파이프라인 자동화와 코드 실행 기록까지 포괄함

- Traces 데이터셋 저장소는 코드 실행 기록(py traces, cloud code 등) 자동 파싱 및 손쉬운 탐색 뷰어 제공
- 실행 세션 업로드만으로 코드 실행 이력 전체 파이프라인 관리 가능
- Buckets 인프라 신설로 AWS S3 대비 저렴·빠른 데이터 저장·마운팅 지원 → 대량의 코드 실행, 모델 학습 결과 저장 시 비용 및 운영 효율성 증가

### GGUF 포맷, 4bit 양자화, L4 GPU 호환 등 실무 활용에 유리한 모델 포맷·배포 환경이 확대되고 있음

- GGUF 포맷은 llama.cpp, LM Studio, Jean 등 주요 로컬 실행 앱에서 지원되는 표준 파일 포맷임
- 하드웨어 호환성 예시: Gemma 4 라지 모델을 4bit로 양자화하면, L4(24GB VRAM) GPU에 수용 가능
- 각 모델 저장소 상단에 지원 앱, 하드웨어, 설치 커맨드가 명확히 안내됨 → 사용자는 지식 없이도 편리하게 모델 배포 가능
- ‘이 모델 사용하기’ 기능을 활용해 원하는 앱/환경에 맞춘 실행 명령어 및 설명을 즉시 제공

### Hugging Face Skills와 LLM 트레이너 스킬로 에이전트가 실제 모델 학습/튜닝/데이터셋 관리/앱 배포 전체를 자동화함

- Hugging Face CLI Skill: 리포지터리 관리, 잡 실행, 데모 런칭 등 깃허브-에이전트 통합 명령어 제공
- LLM Trainer Skill: LLM·VLM 모두 지원, 지시만으로 파인튜닝, 학습 자동화(원격 및 로컬 인프라 둘 다 대응)
- GradU Skill: 앱/데모 즉시 배포에 사용
- DataSet Skill: 데이터셋 뷰어 API로 데이터셋 탐색, 추출, 준비 자동화
- AI 앱/모델 탐색부터 트레이닝, 데모화, 통계 리포트와 같은 전체 작업을 자연어 명령 및 간단한 설정으로 일괄 처리 가능

### 에이전트 기반 학습 워크플로우는 입력만으로 인프라 계산부터 학습·결과 등록까지 자동화할 수 있음

- 예시: “Qan2VL을 LAWA Instruct Mix 데이터셋으로 학습” 요청 → VRAM, 인스턴스, 배치 사이즈 등 자동 계산 및 띄어쓰기만으로 학습 환경 구축
- 중간에 검증 데이터셋 등 세부 옵션을 에이전트가 인터랙티브로 질의함
- 학습 완료 후 결과는 Hugging Face Hub에 자동 등록, 재활용 용이
- Vision 모델의 오브젝트 디텍터, 세그멘테이터 등도 bounding box 타입 등 복잡한 세부 옵션 자동 인식 및 처리 지원

### MCP 및 Spaces와의 통합, OCR 적용 사례 등으로 AI 앱 활용 범위가 확장되고 있음

- MCP(Minimum Compute Platform)에서 Semantic Search, 앱스토어와 같은 Spaces 탐색 통합
- 예: ‘baklava를 실로 만든 이미지’ 생성은 MCP에서 Hugging Face QAN Image 등 원격 모델에 API 콜로 연동하여 생성
- Spaces의 Dynamic 옵션 활성화 시 전체 앱 활용 가능(실험적 기능)
- OCR 사례: Hugging Face Hub 논문 3만개 OCR 작업을 위해 Open OCR 모델 & 자연어 명령으로 코드 생성, 최적 인스턴스 판단, 자동 실행까지 일원화
- OCR Bench(벤치마크)에서 모델 선택, LLM 추천 및 파인튜닝 옵션까지 자연어 명령 기반으로 제공

### 전체적으로 오픈소스 AI 에이전트 생태계는 손쉬운 모델 선택·실행·학습, 자동화된 데이터 관리, 다양한 워크플로우 접목으로 실전 경쟁력을 갖추었음을 시연함

- 오픈 모델·데이터·컴퓨팅 인프라·코드 에이전트·앱의 통합 및 자동화가 Hugging Face Hub 및 에이전트 생태계를 통해 누구나 접근 가능함
- CLI, Skills, 트레이너, 앱 뷰어 등 유틸리티 도구와 통합 제공
- 벤치마크, 자동 추천, 완전 자동화된 트레이닝 사이클의 손쉬운 구현 등 진입장벽을 크게 낮춤
- 점차 더 많은 데이터 타입, 모델, 인프라 옵션이 지원되며, 오픈소스 에이전트 활용 생태계가 본격 상용 수준에 도달함
