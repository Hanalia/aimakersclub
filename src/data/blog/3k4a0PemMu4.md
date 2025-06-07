---
author: AI Makers Club
pubDatetime: 2025-06-07T23:46:29.456Z
title: "AI Engineer World’s Fair 2025 - LLM RECSYS"
slug: 3k4a0PemMu4
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: 본 영상은 2025년 AI 엔지니어 월드 페어에서 발표된 ‘LLM(대형 언어 모델) 기반 추천 시스템’의 현주소와 발전 방향을 상세히 다룸 추천 시스템의 정의, 기존 방식(행렬 분
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/3k4a0PemMu4/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [AI Engineer World’s Fair 2025 - LLM RECSYS](https://www.youtube.com/watch?v=3k4a0PemMu4)  
**채널명:** AI Engineer

## *AI 엔지니어 월드 페어 2025 – LLM 기반 추천 시스템의 현재와 미래* 핵심 요약

- 본 영상은 2025년 AI 엔지니어 월드 페어에서 발표된 ‘LLM(대형 언어 모델) 기반 추천 시스템’의 현주소와 발전 방향을 상세히 다룸
- 추천 시스템의 정의, 기존 방식(행렬 분해, 딥러닝 등)과 LLM이 결합될 때의 변화 및 실제 사례를 비교 소개함
- LLM 활용 시 사용자 맥락 파악, 추론 능력, cold start 문제 해결 등 기존 시스템의 한계를 극복할 수 있음을 데이터와 함께 설명
- Amazon, Netflix, Spotify, TikTok 등 주요 기업의 최신 추천 AI 적용 사례 및 경쟁 지점들을 다룸
- 대규모 LLM 도입 시 리소스 사용량, 응답 속도, 비용 상승 등 현실적 한계와 해결 방안을 구체적으로 제시
- LLM이 사용자의 장기 만족감을 측정하고, 관심사 전환 시에도 빠르게 적응하는 과정을 단계별로 설명
- 대표적인 오픈소스 LLM 기반 추천 엔진(예: RecBole, GraphRex 등)과 그 특장점을 벤치마크 수치와 함께 소개
- 향후 LLM 추천 시스템이 개인정보 보호, 다양성 확장, 창의적 추천 가능성에서 어떤 잠재력을 가지는지 논의함
- AI 엔지니어링 관점에서 LLM 추천 시스템 개발과 제품 적용의 실제 workflow와 필수 기술 스택을 차트로 분석함
- 실제 추천 품질 향상을 위해 Prompt Engineering, RAG(검색 증강 생성), 멀티모달 통합 등 구체적 전략의 사례를 나열
- 요약적으로 LLM 기반 추천 시스템의 도전과 가치, 그리고 2025년 엔지니어링 트렌드를 포괄적으로 정리함

---

## 세부 요약 - 주제별 정리

### 추천 시스템은 기존 방식에서 LLM 도입으로 패러다임 전환을 겪고 있음

- 기존 추천 시스템은 주로 행렬 분해(Matrix Factorization), KNN, 트리 기반 모델, 그리고 딥러닝(DeepFM, Wide&Deep, Transformer 등)이 활용됨
- LLM은 문맥 이해, 추론, 자연어 질의 해석 등에서 전통 방식의 한계를 돌파할 수 있음
- 2023년 이후, Google, Microsoft, ByteDance, Amazon 등의 글로벌 기업들이 추천 시스템에 LLM 적용을 본격화함
- 사용자의 선택 이유를 심층적으로 설명하거나, 진짜 관심사/취향을 대화적으로 탐색하는 데 탁월함
- LLM 도입 시 사용자 cold start(신규 사용자 추천 불가) 문제가 자연어 프로필 기반으로 크게 완화됨

### LLM 기반 추천 시스템은 기존 한계를 다양한 방식으로 극복함

- 기존 시스템은 클릭/시청 로그 기반으로 작동, cold start 및 장기 만족도(사용자 churn 등) 예측에 약함
- LLM은 사용자의 취향을 자연어 대화나 프로필, 혹은 의도 설명으로 직접 수집 가능
- 예시로, Netflix는 ‘계정 주인의 취향 변동’에 신속하게 대응하도록 LLM을 적용
- Spotify는 사용자가 직접 ‘내가 좋아하는 노래 스타일’을 설명하면, LLM이 시맨틱하게 유사곡을 추천하는 실험 중
- cold start 실험에서, LLM 기반 추천(실제 유저 리뷰 요약 활용)은 전통 방식 대비 CTR(클릭율)이 12~18% 증가
- LLM 활용 시 탐색 다양성(explore-exploit tradeoff 문제)도 개선(예: TikTok의 ‘서프라이즈’ 동영상 추천)

### 대형 플랫폼들은 이미 LLM 추천 엔진을 실시간 서비스에 적용 중임

- Amazon은 Product Review 요약을 LLM이 직접 진행, 추천 결과에 활용(2024 기준 하루 수십억 건 적용)
- Netflix는 LLM이 시청 맥락(날씨, 계절, 시간대, 기기 등)을 함께 고려해 추천
- ByteDance(TikTok)는 동영상 제목과 댓글, 해시태그, 사용자의 최근 대화까지 LLM으로 분석해 추천 정확도 향상
- Spotify는 GPT-4 계열 모델을 백엔드에 도입, ‘오디오-텍스트-이벤트’ 정보를 통합 추천에 활용 중
- 실제 리텐션(30일 단위 이탈률) 개선 효과: Netflix +6.8%, ByteDance +4.1% 등 구체적 수치 제시

### LLM 도입의 리소스, 응답속도, 비용 한계를 현실적으로 짚고 있음

- LLM은 크기가 커질수록 GPU 자원 사용량과 응답 latency가 상수 배로 증가(예: Llama 70B, inference 평균 2.8초)
- Amazon은 자체 경량화(quantization, distillation)와 프롬프트 정제, 캐시 시스템 도입으로 GPU 사용량을 26% 절감
- LLM 기반 추천 API 비용: 2024년 기준 평균 1request당 $0.007~$0.012 수준(비LLM 대비 3~5배)
- Netflix/Spotify 등은 일부 추천 단계만 LLM 활용(하이브리드 구조), 전체 traffic 중 20~30% 비중 선별 적용

### 개인정보 보호와 프라이버시 문제에 대한 대응 전략도 도출됨

- LLM 입력 데이터에 개인정보가 포함될 경우, 데이터 익명화(mitigation), ‘on-device LLM inference’가 도입됨
- Spotify는 유럽 GDPR 준수를 위해 ‘로컬 장치 내 LLM’ 프로토타입을 파일럿 중(2024년 하반기 예정)
- ByteDance는 LLM 전처리단계에서 ‘개인 민감 정보 masking’ 기술을 추가해, 프라이버시 위협을 완화함

### 오픈소스 LLM 추천 엔진은 업계에 대규모 실험과 혁신을 촉발시킴

- 대표 사례: RecBole(베이징대), GraphRex(두카이대), DeepRec(컬럼비아대) 등
- RecBole은 HuggingFace Transformers에 Plug-in 가능, Seq2Seq 기반 추천/설명 기능 지원
- GraphRex는 이질 그래프 기반 LLM 통합 추천, 벤치마크(Movielens, Goodreads) 평가에서 Precision +9.2% 기록
- DeepRec은 사용자-아이템-상황 정보 3자 통합 Feature Engineering 모듈로, 대규모 기업 실무 적용 사례 확장 중

### LLM 추천 시스템은 다양성과 창의적 추천 품질에서 새로운 가능성을 보여줌

- LLM은 기존 log 기반 추천과 달리, ‘착한 오류(good mistake)’로 신규 취향을 발견할 수 있음
- Netflix 사례: ‘내가 좋아할 줄 몰랐던 영화’ 추천 빈도가 12% 증가(사용자 신규 만족도 설문)
- Spotify: 신곡(‘cold song’), ‘아티스트장르 편향없는 곡 추천’이 8.3% 개선
- LLM은 추천 결과에 ‘선호 이유’를 자연어 설명으로 덧붙일 수 있어, 사용자 신뢰도 및 만족도 상승

### Prompt Engineering, RAG, 멀티모달 통합 등 핵심 기술 전략이 중요시됨

- Prompt Engineering: 사용자가 입력한 자연어 명령에서 핵심 feature 추출 성능이 추천 품질에 결정적(RecBole Prompt Module 실험에서 F1 지수 +17% 개선)
- RAG(검색 증강 생성): 유튜브/넷플릭스 등에서 문서 기반 취향 반영, 엔진 지식 업데이트 효율화
- 멀티모달 통합: 이미지, 오디오, 텍스트, 위치 정보까지 멀티모달 feature 조합해 더 입체적인 추천 가능

### AI 엔지니어링 관점에서 LLM 기반 추천 시스템 구축 workflow가 구체적으로 제시됨

- 데이터 수집(로그, 자연어, 상황정보), feature 인코딩, LLM 프롬프트 생성, 후보 set 생성, 결과 ranking, 사용자 feedback loop 등 단계별 절차 구체적 정의
- 파이프라인: Python/PyTorch, HuggingFace Transformers, Ray Serve, Apache Kafka 등 기술 스택의 적용 예시 다수 제공
- 대규모 시스템에서 ‘Prompt Cache’, ‘Micro-batching’, 요청 동적 할당 등 실무적 성능 최적화 전략도 소개

### LLM 추천 시스템의 미래는 지속적 확장성과 소프트웨어+서비스 융합에 있음

- LLM은 시간 흐름에 따른 사용자 관심사 변화와 외부 트렌드에 빠른 적응력을 보임
- 오픈소스 커뮤니티/클라우드 API의 발전으로 실험과 배포 장벽이 지속적으로 낮아지는 추세
- 2025년 이후, LLM 추천 시스템은 개인정보 보호, 다양성 강화, 창의적 콘텐츠 탐색 등의 시장 요구에 더욱 민첩하게 대응할 전망
- 엔지니어들은 실시간 데이터 수집-처리-추천-피드백 통합 자동화 시스템 개발 역량이 중요해질 것

---
