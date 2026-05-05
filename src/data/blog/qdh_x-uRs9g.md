---
author: AI Makers Club
pubDatetime: 2026-05-05T23:45:13.410Z
title: "The Small Model Infrastructure Nobody Built (So We Did) - Filip Makraduli, Superlinked"
slug: qdh_x-uRs9g
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "영상 제목은 \"아무도 만들지 않았던 소형 모델 인프라, 그래서 우리가 만들었다\"로, 발표자는 Superlinked의 Filip Makraduli임 발표자는 Substack 기사에서"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/qdh_x-uRs9g/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [The Small Model Infrastructure Nobody Built (So We Did) — Filip Makraduli, Superlinked](https://www.youtube.com/watch?v=qdh_x-uRs9g)  
**채널명:** AI Engineer

## *아무도 만들지 않았던 소형 모델 인프라, 그래서 우리가 만들었다* 핵심 요약

- 영상 제목은 "아무도 만들지 않았던 소형 모델 인프라, 그래서 우리가 만들었다"로, 발표자는 Superlinked의 Filip Makraduli임
- 발표자는 Substack 기사에서 AI 모델의 속도, flash attention, 메모리/연산 병목 등은 다뤘으나 '실제 환경에서의 추론(inference)'에 대한 점을 놓쳤음을 깨달음
- 주요 목적은 소형 AI 모델(특히 검색 및 문서 처리용) 인프라의 필요성과 Superlinked의 오픈소스 엔진(SIE) 개발 이유를 설명하는 것임
- 소형 모델을 활용한 사전처리(pre-processing)와 context 관리가 요즘 AI search나 agent 워크플로우에서 매우 중요하다고 강조
- context rot(컨텍스트 크기가 증가할수록 응답 품질 저하) 문제 해결의 실용적 방법으로 소형 모델 적용 사례와 실제 적용 서비스들을 제시함
- 기존 추론 인프라는 GPU 자원의 비효율, 각기 다른 모델 아키텍처에 대한 비표준적 지원 문제 등으로 소형 모델 대규모 운용에 적합하지 않음을 짚음
- Superlinked은 GPU 자원을 효율화(모델 동적 교체, hot-swap, LRU 정책), 다수 소형 모델 동시 지원을 위한 커스텀 forward pass 구현 등을 도입함
- 오픈소스 커뮤니티의 최신 추세(수백만의 Hugging Face 모델, ColBERT·Stella·Gemma 등 다양한 모델, MTEB 벤치마크 결과)도 소개
- 인프라 전체 구조에는 API primitives(encode, score, extract), GPU & 리소스 풀·라우팅·큐 관리, KEDA 기반 오토스케일링, Helm 차트/Docker 이미지 배포 등이 포함됨
- 최종적으로, 모든 인프라를 통합해 사용자가 빠르고 손쉽게 소형 모델 추론 및 운영을 가능하게 하는 SIE를 공개함

---

## 세부 요약 - 주제별 정리

### 발표자가 'AI 추론'에서 실제로 놓쳤던 요소를 깨닫게 된 배경

- 발표자는 수개월 전 Substack에 Flash Attention, 모델의 동작원리, 메모리/연산 병목 구조를 다룬 글을 게시
- AI 업계 경력을 바탕으로 본인의 기고가 완벽하다고 자평했으나, 여러 피드백에서 "실제 현실 성능의 핵심은 추론(inference)에 있다"는 사실을 지적받음
- 머신러닝/AI 연구 및 학문적 배경이 있었으나, 실제 프로덕션 환경에서 GPU 스케줄링·라우팅·자동화 등 '운영' 측면에서 부족했던 점을 고백
- 이를 계기로 Superlinked의 인프라 엔지니어팀 합류, 실전에서 추론 인프라를 연구·구현하는 과제에 도전하게 됨

### Superlinked 소형 모델 추론 엔진(SIE) 개발 및 오픈소스화의 계기

- Superlinked 팀 내에서 AI 검색 및 문서처리용 소형 모델 추론 엔진을 개발
- Chroma, Quadrant, Weaviate, LanceDB 등 주요 벡터 DB 파트너들과 실제 테스트를 진행, 실용성 검증 완료
- 본 발표에서 SIE(Superlinked Inference Engine) 오픈소스 소프트 론칭을 선언함
- SIE는 소형 모델 기반 AI 검색/문서 처리에 적합, 추론 워크플로우 통합에 초점을 둠

### AI 에이전트 및 워크플로우 실무에서 소형 모델 기반 추론이 왜 중요한지 설명함

- AI 검색·문서 처리 워크플로우에서 공통적으로 발생하는 'context rot'(컨텍스트가 커질수록 질적 저하) 문제가 핵심 이슈임
- Chroma 등에서 발표한 논문/연구자료를 인용하며, 토큰 수와 context 증대에 따른 품질 저하 현상 실증
- 작은 모델로 데이터를 사전처리하거나, context 관리 차원에서 소형 모델이 유용하게 쓰임
- 소형 모델을 '툴 콜링(tool calling)' 방식(특정 작업을 위한 도구처럼 모델 활용)으로 활용 가능
- 코드를 활용한 grep(텍스트 검색) 역시 가능하지만, 사전처리된 데이터 기반이 있으면 검색 효율이 크게 올라감
- 커뮤니티 및 주요 기업에서는 NER(명명 엔터티 인식)을 활용한 온톨로지/그래프 생성 등 context 기반 노하우를 속속 도입 중
- 예시: Andrej Karpathy의 그래프 기반 KB 구축, Chroma의 자체 사전처리 모델, 맥락 축소 토큰화 등 다양한 시도 활발
- 실제 SIE를 툴 콜링 구조로, 이커머스 상품 분류(taxonomy classification)에 적용한 사례 소개

### 기존 GPU/서버 인프라 중심 추론 방식의 한계를 짚음

- 일반적 오해: "추론 성능은 GPU를 더 투입하면 끝"이란 인식이 있지만 현실은 다름
- 소형 모델(예: Stella, Glyner 등)은 수GB 이내 메모리 점유로 GPU 자원이 낭비될 소지가 큼
- 각 모델에 GPU 1대씩 할당하면, 대부분은 idle로 남아 비용과 효율 모두 비합리적
- 따라서, GPU 1대에 여러 소형 모델을 '핫스왑(hot-swap)' 배치 가능하도록 설계 필요
- Superlinked는 GPU 사용률 제고 및 비용 최적화를 위해 모델 교체/핫스왑, LRU 정책 등을 구현
- 툴 수준에서 reranker, 이름 엔티티 인식 등 다양한 모델을 빠르게 전환하며 활용 가능하도록 편의 제공

### 시장 내 기존 오픈소스 솔루션이 실무 니즈에 도달하지 못함을 지적함

- 서버/프로덕션 환경에서의 실제 추론 운영은 단순 API 래퍼, VLAM·Tay 등 단독 솔루션만으로 부족함
- 라우팅/오토스케일링/모니터링(예: Prometheus, Grafana) 모두 수작업 구현이 불가피
- 현재까지 "모델 추론부터 대량 실전 운영까지" 이어주는 풀-스택 오픈소스는 부재
- Superlinked는 이 틈새를 파고들어 라우팅, 오토스케일링, 큐 트래픽 관리, GPU 오토 프로비저닝 등 통합 솔루션 제공 목표

### "추론의 음양" 프레임: 모델 지원과 인프라를 모두 갖추어야 완성됨을 주장

- 발표자가 정의한 '추론의 음양(yin & yang)'은, 모델 지원과 인프라 환경이라는 두 축의 균형임을 강조
- 음(yin, 모델 지원): 수많은 오픈소스 모델(2024년 3월 기준 Hugging Face에 약 300만 개)과 맞춤형 모델 지원 필요
- 오픈소스 모델은 성능/정확도 모두 급상승, MTEB 등 벤치마크에서 좁은 작업에서는 상용관리형 서비스도 능가함
- Gemma 등 저파라미터 모델이 ELO 스코어에서 대형 모델보다 뛰어난 사례도 언급
- 따라서, 수백 개 모델을 유연하게 지원·배포할 수 있는 인프라 설계가 중요

### 서로 다른 모델 구조(BERT, Qwen, ColBERT 등)로 인해 커스텀 추론 엔진이 필요함을 보임

- 각 오픈소스 모델은 구조 및 동작방식이 달라 범용 추론 엔진 적용이 어려움
- 예) BERT와 Qwen: flash attention 구현차, positional embedding(absolute vs rotary), normalization 방식 등 상이
- ColBERT: 여러 벡터 출력, late interaction 구조 등 기존 엔진으로는 지원 곤란
- 이를 위해 forward pass(모델 전방연산) custom 재구현, variable-length attention, query-key-value fusion 등 다양한 커스텀 코드 설계
- 토큰 길이별 패딩 최소화, 효율적 배치 지원이 중요
- 모델 결과(output)도 다양(reranker: score만 산출, cross-encoder 등), 그에 맞는 독자 처리 흐름 필요

### Superlinked가 구현한 인프라 구조와 주요 기술적 특징

- 인프라 상위에는 encode, score, extract 3가지 API primitive 구성
- 하위에는 라우터(router), 큐/로드 관리, GPU 풀/리소스 관리, 스팟 인스턴스와 대형 GPU 동시 운용 포함
- 모니터링 및 오토스케일링은 Prometheus/KEDA(쿠버네티스 기반)로 자동화
- 모델은 config 파일 교체와 Terraform apply로 신속하게 적용 가능
- 사용자 경험 향상을 위해 Helm chart, Docker image 등 다양한 배포 방식 제공
- 중요한 차별화 지점: 클러스터/인프라와 모델 지원을 통합 제공하여, 사용자는 수작업 없이 end-to-end로 추론환경 구성 가능

### 실제 제품(SIE, Superlinked Inference Engine)과 오픈소스 공개 관련 상세 안내

- SIE는 커스텀 forward pass, attention 구조 개선 등 모델별 효율적 추론설계가 반영됨
- 클러스터 및 리소스 프로비저닝까지 실전 배포 즉시 활용 가능
- GitHub repo에서 즉시 다운로드/사용 가능하도록 QR코드, SIE 및 Superlinked 브랜드 안내
- 뒷배경 슬라이드의 패턴은 positional encoding을 시각화한 결과(트랜스포머 내 임베딩 순서 정보 인코딩 패턴)

### 포지셔널 인코딩(위치 인코딩) 시각화 결과와 발표 마무리

- 청중에게 뒷배경의 이미지가 무엇인지 맞추는 퀴즈를 출제
- 해당 이미지는 트랜스포머(Transformer)에서 사용하는 포지셔널 인코딩을 벡터 공간으로 시각화한 것임을 설명
- 임베딩과 위치 정보가 사인 곡선(sinusoidal) 방식으로 인코딩됨에 따라 독특한 패턴 발생
- 이러한 기법은 현대 트랜스포머 아키텍처의 토대가 됨을 재확인

### 질문 및 청중 인터랙션, 그리고 세션 종료

- 마지막 슬라이드에서 일부 청중이 이미지를 추측, 포지셔널 인코딩을 맞춘 청중에 소정의 보상 제안
- 발표자는 본인의 학습 경험, 추론 인프라 개발 과정, 그리고 커뮤니티/파트너와의 정보 교류의 중요성을 재강조하며 세션 마무리
