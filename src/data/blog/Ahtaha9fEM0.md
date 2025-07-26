---
author: AI Makers Club
pubDatetime: 2025-07-26T23:45:12.215Z
title: "Introduction to LLM serving with SGLang - Philip Kiely and Yineng Zhang, Baseten"
slug: Ahtaha9fEM0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**SG Lang은 대형 언어 모델(LLM)과 대형 비전 모델(VLM)을 빠르고 효율적으로 서빙할 수 있는 오픈 소스 프레임워크임** **이 워크샵은 SG Lang의 기본 개념, "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Ahtaha9fEM0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Introduction to LLM serving with SGLang - Philip Kiely and Yineng Zhang, Baseten](https://www.youtube.com/watch?v=Ahtaha9fEM0)  
**채널명:** AI Engineer

## *SG Lang을 활용한 LLM 서빙 입문* 핵심 요약

- **SG Lang은 대형 언어 모델(LLM)과 대형 비전 모델(VLM)을 빠르고 효율적으로 서빙할 수 있는 오픈 소스 프레임워크임**
- **이 워크샵은 SG Lang의 기본 개념, 역사, 첫 모델 배포, 성능 최적화 방법, 커뮤니티 참여 및 코드베이스 투어까지 포괄적으로 안내함**
- SG Lang은 다양한 GPU 환경에서 뛰어난 성능을 제공하며, 신규 모델(Quen, DeepSeek 등)에 대한 ‘Day Zero’ 지원을 자랑
- 대형 클라우드/리서치 기업, 대학, 제품 회사(Koser 등), 대표적으로 BaseTen, xAI(Grok 모델)에서 실제로 SG Lang을 주요 인퍼런스 스택으로 활용 중임
- 2023년 12월 논문 출간 후 약 18개월 만에 1만 5천 GitHub 스타 획득 및 글로벌 활성화 커뮤니티 형성
- SG Lang은 Flash Infer(Attention/샘플링 커널 라이브러리) 등 첨단 커널 활용으로 빠른 추론을 실현함
- 실제 워크숍 단계에서는 L4/H100/H200 GPU 기반 Docker+Truss 조합과 명령어 플래그를 활용해 첫 모델을 신속하게 배포하는 방법 안내
- CUDA Graph max batch size 조정 및 Eagle-3(추론 가속 용도의 speculative decoding) 같은 고급 성능 최적화 기법 시연
- 벤치마크 툴(LM Evaluation, GSM8K 데이터셋 등) 및 커뮤니티 참여 방법(GitHub issue, 슬랙, 개발 로드맵, 코드베이스 소개 등)까지 실질적 활용법 제시
- 보안·사내 모델 운영부터 커스텀 모델 기여, 실제 대규모 인프라 연동까지 실용적 Q&A와 실전적인 팁 포함

---

## 세부 요약 - 주제별 정리

### SG Lang은 다양한 현업에 ‘즉시 배포 가능한’ 고성능 오픈 소스 LLM 서빙 프레임워크로 성장함

- SG Lang은 대형 언어 및 비전 모델을 위한 오픈 소스 서빙 프레임워크로 ‘빠른 추론’, ‘생산성 높은 배포’, ‘강력한 커스터마이즈’가 핵심 특장점임
- 베이스텐(BaseTen)을 포함한 여러 AI 스타트업, xAI(그록 모델), 다양한 인퍼런스/클라우드 제공자, 대학 연구소, 실제 제품 회사 등이 서빙 백엔드에 채택
- 신규 모델(Quen, DeepSeek 등) 출시와 동시에 Day Zero 지원이 가능해 최신 연구와 실서비스 간격이 극히 짧음
- 오픈 소스 기여가 활발하며, 커뮤니티 주도식 문제 해결·패치가 신속함(‘무언가가 마음에 들지 않으면 직접 고칠 수 있음’)
- BYU, xAI, LMC 등 주요 연구자·기업이 운영 및 기여에 적극적으로 참여

### 1년 반 만에 SG Lang은 1.5만 GitHub 스타를 기록하며 글로벌 표준 플랫폼으로 자리잡음

- 2023년 12월 arXiv 논문 첫 게시 이후 18개월 만에 GitHub 스타 15,000개 달성
- 미국, 유럽, 아시아 등 다양한 지역·산업에 실질적으로 도입됨
- 연구 논문 혼합(Flash Infer 연계 논문, Echelon, Chatbot Arena 등) 및 커뮤니티 활성화(슬랙, GitHub)로 신규 사용자 유입 활발

### 실제 배포 실습에서 Docker+Truss로 SG Lang 서빙 서버를 쉽게 띄울 수 있음을 시연함

- SG Lang은 주로 Docker 컨테이너 환경에서 `sglang launch-server`와 다양한 플래그 조합을 통해 작동
- 모델 패키징과 배포에는 ‘Truss’가 사용되어, 필요한 디펜던시 및 명령을 YAML 설정 파일에 명시해 GPU로 패키징·전송
- 실습 환경에서는 BaseTen 제공 L4 GPU(성능 대비 저렴, FP8 지원) 및 H100/H200/Blackwell 등 다양한 하드웨어를 선택적으로 활용
- Trust 설정 파일의 `hardware_type`/`accelerator` 항목에서 사용할 GPU 종류 설정 가능
- 배포 후엔 각 사용자의 모델 ID를 활용해 OpenAI 호환 API나 샘플 코드(call.py, call.ipynb 등)에서 손쉽게 모델 호출·테스트 가능

### SG Lang의 다양한 성능 최적화 플래그와 설정들이 실제 추론 속도에 직접적인 영향을 미침

- SG Lang에서 가장 중요한 운영 스킬은 ‘플래그 및 설정 옵션’, ‘지원 매트릭스’, option간 상호작용을 명확히 이해하는 것
- 예: speculation(추론 가속)과 batch size(배치 크기)는 별도로 최적화 해야 함. 일부 조합은 충돌 가능성이 있음(크게 늘리면 성능 저하)
- 양자화(quantization), attention backend 선택 등과 결합해 다양한 맞춤형 성능 확보 가능
- 실습에서는 각자 배포한 모델로 실시간 테스트하면서 자주 발생하는 에러 해결, 배포 로그 분석, 네트워크 속도 등 실무 팁 공유

### CUDA Graph의 max batch size 조정만으로도 대량 요청 상황에서 추론 효율이 극적으로 개선됨

- CUDA Graph 기능은 기기별·모델별로 기본 batch size 제한이 있는데, L4 GPU의 경우 default로 8
- LM Evaluation 도구 등으로 동시 요청(batch=10 이상)시, 이 값을 늘리지 않으면 decode 구간에서 CUDA Graph 비활성화(CUDA Graph=false) 현상 발생(성능 저하)
- CUDA Graph max batch size를 32 등으로 직접 지정하면 decode 구간에서도 CUDA Graph가 활성화(CUDA Graph=true)되어 user 당 token throughput 상승
- 실험 결과: default(8)에서는 user당 초당 15 token, 늘렸을 때는 decode 동시 처리량 점검 필요, 구체적인 수치는 벤치마크 및 로깅으로 반복 확인
- batch size, CUDA Graph, 모델 구조 등은 실제 워크로드에 맞게 조정·튜닝해야 성능 최적화 가능

### Eagle-3와 같은 Speculative Decoding(추론 가속 기법)도 플래그 및 draft 모델 조합으로 쉽게 적용 가능함

- Eagle-3(Speculative Decoding)는 최근 도입된 알고리즘으로, 여러 speculative token을 미리 예측→검증하여 추론 효율을 대폭 끌어올림
- target model의 일부 레이어를 활용해 draft 모델을 만들고, 여러 파라미터(depth, top-k, verify tokens 등)로 조정 가능
- 예: llama 38B instruct 모델에서 draft용 파라미터(depth 3, topK 1, verify 4 등) 실험
- SG Lang 공식 문서와 예제 스크립트(bench_spec_decoding.py 등)에 프롬프트 교체·매개변수 grid search용 기능 내장
- Speculative decoding은 벤치마크용 데이터(prompt)가 실제 워크로드와 유사해야 튜닝 효과가 높음
- 최종적으로 acceptance rate(수용률), throughput(토큰 처리량) 등을 기준으로 파라미터 선정

### LM Evaluation 툴 및 벤치마크 데이터를 활용해 시스템 최적화와 정확한 성능 진단 가능

- LM Evaluation(예: LMEM4)은 모델별 처리량, batch 크기, 최대 토큰, GSM8K 등 구체적 데이터셋으로 throughput/accept rate 진단
- 포트 번호, API 타입(OpenAI 호환), 배치 크기, 데이터셋 종류 등 실무에 맞춰 상세 파라미터로 실험
- SSH 접근 가능시 직접 GPU 노드에서 실행, SSH 불가 클라우드 습관에서는 HTTP 기반 벤치마킹 툴 사용

### 커뮤니티 참여(이슈 등록, 슬랙, 로드맵 등), 코드베이스 구조 이해로 오픈소스 기여가 쉬움

- GitHub에서 star/add, issue 등록을 통해 버그/기능 요청, tagging 체계(good first issue, help wanted 등)를 통한 신규 기여자 활성화
- 공식 slack.sglang.ai 및 Twitter에서 실시간 소통·온라인/오프라인 행사 등 정보 제공
- 코어 구조: SGLang 런타임, 도메인 특화 언어 프론트엔드, 커스텀 CUDA 커널(Attention, Normalization 등)
- Deep Wiki, 공식 코드베이스 투어, diagram 등으로 신규 개발자 onboarding 지원

### SG Lang 코드베이스의 각 모듈(커널, 라우터, 인퍼런스 런타임 등) 세분화…직접 커스텀/확장이 용이함

- SJ kernel: attention, normalization, activation 등 고성능 커널 직접 구현 – CUDA 커널에 관심있는 개발자 적극 참여 가능
- SGL router: 캐시웨어 라우팅 및 버전별 대응(예: S 버전 도입, 캐시웨어 라우터 지원)
- SLon SRT(Python 메인): 모델 적합화(disaggregation), constraint decoding, function calling, 오픈AI 호환 API 서버 기능 포함
- 커스텀 모델 추가 지원: llama, gemma 등 오픈소스 모델 구조가 유사하므로 참조/수정 후 손쉽게 적용 가능

### 실전 Q&A: 보안, 온프레미스 배포, 커스텀 모델 개발 등 실제 활용 고민에 대한 해법 제시

- 보안/사내 개발: SG Lang 및 오픈서스 기반 프레임워크는 코드를 직접 클론·검증·고정(frozen code) 후 온프레미스 서버에서 운영 가능
- 모든 코드가 오픈되어 있어 감별(traceability) 및 보안 인증(CMMC 등)에 필요한 다양한 통제 구현 가능
- API 최적화, 네트워크 레이어 분리, 클러스터 운용 등 on-prem 환경, 전용 GPU 배포의 실제 적용 팁 안내
- (블록체인 등) 탈중앙 프로토콜과의 연계는 아직 실증사례는 없음. 대부분은 전통적 client-server 환경에서 활용

### BaseTen 인프라 스택 내 SG Lang 전략적 활용 및 서드파티 라이브러리와의 역할 분담이 강조됨

- BaseTen은 SG Lang, VLM, TensorRT-LLM 등 여러 서버 선택지 중, 유즈케이스 별 최적 조합 도입
- 예: 광호환성(ex: Gemma 등 신규 모델)은 VLM, 모델 성능·튜닝 필요시 SG Lang 집중 사용
- "SG Lang의 매력은 깊이 있는 문서화, 쉽게 기여 가능한 오픈소스 구조, custom 지원 용이성에 있음"

### SG Lang 워크샵은 실습, 라이브 데모, 실전 Q&A, 커뮤니티 참여 안내까지 포함한 ‘엔드투엔드 입문서’로 구성됨

- 모든 실습/슬라이드/코드 예제가 GitHub 레포에 공개되어 언제든 복습 및 추가 실험 가능
- 실습 이후에는 community Slack, developer meetup, happy hour(예시: Oxen AI CEO와의 fine tuning 데모) 등 네트워킹 및 커뮤니티 안내
- 실전 인프라, 커널 프로그래밍, 오픈소스 기여, 커스텀 개발 등 신규/중급/고급 개발자 모두를 위한 진입점 제시
- Q&A를 통한 완결 : 보안, 사내 통제, 맞춤형 모델 운영, 다양한 벤더/API 연동 등 실제 개발 환경의 고민까지 폭넓게 다룸
