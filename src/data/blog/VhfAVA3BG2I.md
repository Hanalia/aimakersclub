---
author: AI Makers Club
pubDatetime: 2026-05-08T23:45:04.197Z
title: "How Transformers Finally Ate Vision - Isaac Robinson, Roboflow"
slug: VhfAVA3BG2I
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 Roboflow의 리서치 리드 Isaac Robinson이 트랜스포머(Transformer) 모델이 컴퓨터 비전 분야에서 어떻게 주류가 되었는지의 흐름과 이유를 상세히 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/VhfAVA3BG2I/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [How Transformers Finally Ate Vision – Isaac Robinson, Roboflow](https://www.youtube.com/watch?v=VhfAVA3BG2I)  
**채널명:** AI Engineer

## *트랜스포머가 마침내 비전 영역을 장악한 과정* 핵심 요약

- 이 영상은 Roboflow의 리서치 리드 Isaac Robinson이 트랜스포머(Transformer) 모델이 컴퓨터 비전 분야에서 어떻게 주류가 되었는지의 흐름과 이유를 상세히 설명
- 기존 컴퓨터 비전의 주류였던 컨볼루션 신경망(CNN)은 이미지 위치에 상관없이 일관적인 활성화가 일어나도록 설계된 강한 inductive bias(귀납적 편향)을 가짐
- 트랜스포머 기반 비전 모델(VIT)은 귀납적 편향 없이 패치 기반 처리와 n⁴의 계산복잡도로 대규모 데이터와 연산 자원이 필요하지만, 대용량 사전학습(MAE, DINO 등) 및 LLM(대형 언어모델) 인프라의 발전으로 성능우위를 확보
- Swin, ConvNeXt, Hera 등 다양한 방향(윈도우 attention, 컨볼루션적 요소 재도입, 편향 절제 등)의 경쟁적 시도가 있었으나, 결국 대규모 사전학습 기반의 VIT가 성능과 확장성에서 승리
- VIT의 성능 향상에는 MAE(마스크 오토인코더), DINOv2/3와 같은 VIT-특화형 사전학습 기법이 결정적 역할을 하였으며, 이 과정에서 기존 CNN의 귀납적 편향도 학습을 통해 재현
- 대표적인 비전 파운데이션 모델인 SAM(Segment Anything Model) 시리즈에서도 각각 VIT, Conv+Transformer, Hera, 대형 사전학습 VIT로 backbone이 바뀌어감
- 대규모 사전학습의 성능 덕분에 one-size-fits-all 파운데이션 모델이 등장하였으나, 8억 파라미터 SAM3와 같이 실제 배포(특히 엣지/저전력 환경)엔 한계 발생
- Roboflow는 데이터셋(RF100VL) 및 신경망 구조 탐색을 통해 다양한 다운스트림 태스크 및 하드웨어에 적합하게 파운데이션 모델을 유연하게 변형 및 최적화하는 방식을 도입
- RFDetR 등은 기존 실시간 인스턴스 분할에서 CNN 기반 최고 성능을 뛰어넘었고, 40배의 속도 향상을 기록
- 결론적으로, 대규모 VIT-특화 사전학습+LLM에서 나온 연산 최적화+사전학습 호환 신경망 설계로 최초의 단일 범용 파운데이션 모델과 실제 배포 사이의 단절을 해소

---

## 세부 요약 - 주제별 정리

### 컨볼루션 신경망은 비전의 기본 구조로 귀납적 편향이 강점이었다

- 초기 컴퓨터 비전 분야는 컨볼루션 신경망(CNN, 예: ResNet 등)이 핵심 구조로 사용
- CNN은 인간의 시각 시스템에서 영감을 얻어 개발되었으며, 필터를 이미지에 컨볼루션하여 위치 불변(translation invariance) 특성을 제공
- 이미지 내 객체의 위치가 달라도 동일한 활성화가 일어나는 구조적 장점 보유
- 계층적(hierarchical) 구조 구축에 매우 적합하여 오랜 시간 동안 비전 분야를 주도
- CNN의 이 inductive bias 덕분에 제한된 정보와 연산으로 효율적 학습 및 성능 확보 가능

### 트랜스포머는 귀납적 편향 없이도 대규모 사전학습과 인프라 활용으로 성능에서 앞섬

- 트랜스포머는 기본적으로 입력(토큰)에 대한 set-to-set 연산만 수행하고, 구조적 귀납적 편향(inductive bias) 없음
- 자연어 분야의 트랜스포머는 자기회귀적(autoregressive) 모델에 causal mask 추가 등 목적에 맞는 편향을 설계해왔음
- 비전 분야의 트랜스포머(Vision Transformer, VIT)는 이미지를 패치(예: 16x16)로 쪼개고, 위치 인코딩을 추가하여 처리
- 트랜스포머는 패치 수(n^2)에 따라 attention의 계산량이 n^4까지 증가하는 단점 보유 (해상도가 클수록)
- 토큰의 위치에 따라 완전히 다른 활성화 패턴이 가능하여, 구조의 위치 불변성이 없음
- 단계별 실험에서, 기본 CNN보다 VIT가 뛰어난 결과를 보임 → 대규모 사전학습(pre-training) 효과가 결정적

### Swin, ConvNeXt, Hera 등 구조적 혁신이 시도되었으나 VIT의 확장성과 성능에 미치지 못함

- Swin Transformer는 패치 단위로 지역적(윈도우 내) attention을 하고, 윈도우를 이동(shift)시켜 토큰 간 교차 정보 전달
- Swin은 CNN과 유사하게 로컬리티(지역성) 편향을 재도입하여 계산량을 n^2로 줄임
- ConvNeXt는 트랜스포머에서 얻어진 패치화, 계층 구조, 레이어 노름 등 혁신을 CNN에 적용한 새로운 CNN 제안
- ConvNeXt는 ImageNet 등 표준 벤치마크에서 VIT, Swin보다 좋은 성능을 보였으나, 속도 및 확장성에서는 부족
- Meta(Hera)는 ConvNeXt의 다양한 편향 중 불필요한 요소를 하나씩 제거하며, 사전학습을 통해 필요한 편향만 학습하도록 구조 설계
- 귀납적 편향의 하드코딩과 대규모 사전학습의 트레이드오프 실험이 진행됨

### MAE, DINO와 같은 비전 특화형 사전학습이 VIT의 약점을 보완함

- MAE(Masked AutoEncoder): 이미지 패치의 일부를 마스킹한 뒤, 나머지로 마스킹된 패치를 복원하는 self-supervised 학습 방식(BERT 유사)
- MAE는 기존 구조적 귀납적 편향 없는 VIT에도 실제로 편향이 습득되도록 도움
- CNN은 특성상 패치 단위의 dropout이 구조적으로 불가능하여, MAE 방식과 궁합이 맞지 않음
- DINOv2, DINOv3 등도 VIT 전용 사전학습 기법으로, 사전학습 과정을 거친 VIT는 매우 정밀하고 정보성 높은 특성(feature map) 생성
- 예시: DINOv3 사전학습 VIT의 feature map은 고양이의 발 위치를 각각 다른 색상으로 정확히 분리, 위성이미지 역시 의미별로 분해
- Self-supervised 학습(backbone freeze + linear probe)만으로도 완전 지도학습과 필적하는 성능 도달

### 속도 문제는 LLM 분야의 연산 개선(Flash Attention 등)으로 극복됨

- VIT의 본질적 단점은 n^4의 높은 계산 복잡도(해상도 증가 시 급증)
- LLM(대형 언어 모델) 분야에서 등장한 Flash Attention 등 연산 최적화 기법이 비전 트랜스포머에도 적용 가능
- Hera 논문 등에서는 Flash Attention 적용 전후의 속도 비교시, 실질적으로 VIT의 계산 복잡도/속도 이슈가 거의 사라짐
- 대형 사전학습과 연산 최적화가 결합되어, 단순 구조(VIT)가 복잡 구조(ConvNeXt, Swin 등)보다 확장성과 효율성 측면에서도 유리

### SAM(파운데이션 비전 모델) 시리즈의 backbone 변화가 VIT 승리를 명확히 보여줌

- SAM(Segment Anything Model): 대표적인 파운데이션 비전 모델 시리즈
- SAM → Mobile SAM → SAM2 → SAM3의 backbone 구조는 VIT+MAE, TinyVIT(컨볼루션+트랜스포머 하이브리드), Hera+MAE, 대형 MAE 프리트레인 VIT로 변화
- 각 버전마다 “더 좋은 구조가 있을 것”이라는 가설 하에 다양한 실험 진행
- 결과적으로 SAM3 단계에서는 구조 실험을 포기하고, 대형 사전학습 VIT backbone을 적용하는 것이 최선이라는 결론에 도달

### 대형 사전학습 VIT는 성능은 우수하나 배포 유연성, 속도, 자원 문제의 한계를 지님

- SAM3의 경우 파라미터 수가 8억 개, T4 GPU에서 300ms 소요 등 실사용(특히 저전력/엣지 상황)에서는 한계
- 기존 비전 적용 분야(엣지, 임베디드 등)는 대규모 모델의 저성능 또는 배포 불가 이슈에 직면
- 대규모 사전학습에 들어가는 비용 및 인프라 문제로 인해 현실적 제약 발생(“매 배포마다 막대한 비용 소요”)

### Roboflow는 파운데이션 모델의 배포 유연성을 Data-centric/신경망 구조 탐색으로 해결

- Roboflow에서는 “어떻게 하면 고정된 파운데이션 모델을 실제 현실 환경에 유연하게 적용할 것인가?”에 집중
- RF100VL이라는 데이터셋을 만들고, 다양한 다운스트림 과제(객체 탐지 등)로 foundation model의 전이 성능 측정
- 실험 결과: SAM3 파인튜닝 대비 동일 정확도에 40배, 약간 정확도 향상엔 15배 속도 향상
- RFDetR 등은 기존 실시간 인스턴스 분할 분야에서 CNN 기반 최고 성능 모델(동시대 최고 “Real-time instance segmentation” CNN들)을 능가

### 신경망 구조 탐색+배포 타깃별 튜닝으로 단일 파운데이션 모델을 다양한 환경에 적용하도록 개선

- Neural Architecture Search(신경망 구조 탐색기법)와 파운데이션 모델의 결합 → 고성능/경량화/다양성 패밀리 생산 가능
- 새로운 drop-in compatible 모듈(“knobs”)들을 도입하여, 기존 파운데이션 모델 인프라와 완벽 호환 유지
- 타겟 데이터/타겟 하드웨어에 따라 모듈을 조합 가능, 배포 유연성 문제 해결
- 결과적으로, massive VIT 사전학습 + LLM 기반 최적화 + 사전학습 호환 신경망 탐색기법의 결합으로 “단일 대형 범용 모델 ↔ 환경 맞춤 경량 모델”의 간극을 해소

### 멀티모달/비디오 등 다양한 데이터 적용 및 차세대 파운데이션 모델 방향도 논의됨

- SAM3는 대규모 perception encoder 프리트레이닝 및 downstream 프리트레이닝으로 비디오 처리(객체 추적 등)엔 일부 적용
- JEPA, V-JEPA와 같이 비디오/멀티모달 파운데이션 모델도 연구 중이나, JEPA는 이미지 중심 사전학습에선 성능이 제한적이고, Video JEPA도 아직 대중적 Downstream 전이에선 두각을 드러내지 못함
- 차세대 파운데이션 모델은 다양한 인풋(비디오, 이미지, 텍스트 등) 및 멀티모달 전이학습 등이 주요 방향으로 제시
- 최종적으로, VIT 특화 사전학습과 신경망 구조 혁신, LLM 인프라 지원이 결합된 환경이 CNN 등 전통적 방법을 사실상 대체하며 비전 영역의 새로운 표준이 되었음을 강조
