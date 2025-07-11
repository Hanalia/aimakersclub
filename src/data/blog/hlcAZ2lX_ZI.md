---
author: AI Makers Club
pubDatetime: 2025-06-21T23:45:08.690Z
title: "Veo 3 for Developers - Paige Bailey"
slug: hlcAZ2lX_ZI
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "**구글 딥마인드의 Paige Bailey가 개발자 대상 Veo 3, Imagine 4, LIA 2의 신기능을 소개함** **Veo 3는 영상과 오디오를 동시에 자연스럽게 생성할 "
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/hlcAZ2lX_ZI/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Veo 3 for Developers - Paige Bailey](https://www.youtube.com/watch?v=hlcAZ2lX_ZI)  
**채널명:** AI Engineer

## *개발자를 위한 Veo 3 – Paige Bailey* 핵심 요약

- **구글 딥마인드의 Paige Bailey가 개발자 대상 Veo 3, Imagine 4, LIA 2의 신기능을 소개함**
- **Veo 3는 영상과 오디오를 동시에 자연스럽게 생성할 수 있는 최첨단 생성 미디어 모델**
- **Veo 2에서는 참조 기반 영상 생성, 아웃페인팅, 객체 추가/제거, 캐릭터 제어, 카메라 제어 등 고급 기능이 이미 API와 도구로 제공되고 있음**
- **기존 생성 모델 대비 Veo 3는 비주얼 및 맥락적 일관성이 크게 강화돼 실제와 같은 스타일 및 연출이 가능**
- **Veo 3는 오디오 또한 토큰 단위로 영상과 함께 동시 생성(배경음, 효과음, 음악 등)하며, 자연어 프롬프트로 카메라 이동/회전 등 세부 연출까지 손쉽게 조정**
- **데이터 워터마킹(SynthID 등)과 아티스트 협업 등 책임 있는 생성 미디어 구현에 중점**
- **Imagine 모델은 사진 수준의 사실적 이미지·타이포그래피·다양한 스타일 보존, 아티스트 커스텀 콜라보 지원**
- **LIA 2는 전문가 수준의 음악 생성, 세밀한 스타일·톤 제어, 실시간 협업 및 음악 AI 샌드박스 등으로 혁신적 음악 제작 경험 제공**
- **2022~2025년 최근 2~3년 새 텍스트-비디오 생성 품질이 비약적으로 향상(예: 프롬프트 ‘재킷 입은 라쿤’ 비교 시 Veo 3가 월등)**
- **API 연동, 구글 AI 울트라/프로 요금제, 베르텍스 AI 프라이빗 프리뷰 등 다양하게 접근 가능**
- **기존 영상 광고 복제 데모에서 Veo 2는 여러 단계를 거쳐야 했으나, Veo 3는 프롬프트 한 번에 거의 완성도 높은 결과물 생성**
- **향후 Veo 3의 기능 확장·접근성 확대·내구성 및 제어 강화에 주력할 것을 약속함**

---

## 세부 요약 - 주제별 정리

### 구글 딥마인드의 생성 미디어 팀과 세 모델(Veo 3, Imagine 4, LIA 2) 소개

- 발표자는 구글 딥마인드 생성 미디어팀의 DevRel 리더 Paige Bailey이며 핵심 개발자들의 노고를 강조하며 감사 인사 전달
- 이번 발표에서 중점적으로 다룰 모델: Veo 3(비디오/오디오 생성), Imagine 4(이미지 생성), LIA 2(음악 생성), 각 모델에 더 많은 기능이 곧 추가 예정
- Andrej Karpathy의 "비디오는 인간 커뮤니케이션, 교육, 창작의 탁월한 표면이 될 것"이라는 인용으로 영상 생성 기술의 비전을 소개

### Veo 2의 주요 기능과 API 지원 – 크리에이티브 컨트롤 확장을 중심으로

- 최근 1개월 내 참조 기반 비디오(Reference powered videos), 아웃페인팅(Outpainting), 객체 추가 및 제거, 캐릭터 컨트롤·일관성, 첫 프레임-마지막 프레임 프레임 간 보간 기능 등 업데이트
- 참조 기반 비디오는 사용자가 지정한 인물/환경을 자연스럽게 조합하여 제작 가능, API 및 Flow 등 도구로 이미 제공됨
- 다양한 스타일 매칭 지원: 업로드한 이미지를 추출해 영상 내 스타일 적용 가능
- 카메라 제어: 자연어로 이동(후퇴/우측/상하 회전/확대 등) 연출 가능
- 실제 코드 샘플이 아직 많지 않으나, API로 위 기능들 쉽게 구현 가능함
- 아웃페인팅 예시: ‘오즈의 마법사’ 비디오에서 프레임 일부만 있을 때 잔여 영역을 자연스레 확장, 일관성 있게 표현
- 객체를 특정 프레임에서 간편히 삽입·삭제 가능, 즉각적인 결과 모니터링 제공
- 캐릭터 제어 예시: 입 모양 움직임·표정 연출·스크립트와 음성톤 동기화 등 가능, 위치 정보에 맞춰 자연스러운 애니메이션 연출
- 첫 프레임과 마지막 프레임을 기반으로 중간 프레임을 자동 보간, 두 이미지를 자연스럽게 동영상으로 잇는 기능도 구현

### Veo 3로의 도약 – 오디오와 비디오의 완전한 통합 및 향상된 일관성

- Veo 3는 영상과 오디오 토큰을 원천적으로 통합 생성(오디오를 사후 덧입히는 방식과 차별화)
- Gemini의 멀티모달 생성 능력과 유사하게, 텍스트·코드·이미지·음성 및 오디오 편집·생성 모두 가능
- Veo 3에서 프롬프트 충실도가 강조됨: 프롬프트 입력만으로 배경음, 효과음, 음악 등 다양한 오디오가 함께 창작됨
- 실제 사례에서는 시각적 등장인물·배경의 일관성, 프레임별 시각적 부조화(캐릭터의 갑작스러운 움직임/배경 변경 등) 문제 크게 개선
- 2022~2024년 축적된 여러 연구(GQN, Walt 등)와 경험을 바탕으로 한 기술적 진일보
- 모든 결과에 사람이 확인할 수 있는 워터마크와 SynthID 마킹을 적용하여 책임 있는 생성미디어 원칙 준수
- 다수 예술가(영화감독 Darren Aronofsky 등) 및 뮤지션, 아티스트와 협업하며 품질 향상

### Imagine 4 – 다양성과 세밀함을 겸비한 이미지 생성

- Imagine 4는 인간, 동물(고래 등), 강아지 등 다양한 주제에 사실적이면서 디테일 보존이 높은 이미지를 생성
- 프레젠테이션 예시로 사용된 알라모 광장, 미션지역 모습 등은 타이포그래피, 디자인, 아트 레벨에서 섬세함을 유지
- 아티스트 Ross Lovegrove 등과의 협업방식을 활용해 창작물에 실제 예술적 스타일 반영
- 다양한 스타일 보존, 실제로 노트북 스티커·굿즈로도 활용 가능할 법한 높은 퀄리티 증명

### LIA 2 – 전문가 수준의 음악·오디오 생성과 대화형 악기 제공

- LIA 2는 고음질 음악, 프로페셔널 오디오 트랙 생성, 세밀한 크리에이티브 컨트롤(톤, 스타일 등) 지원
- Music AI Sandbox 등 시각적 편집 도구 제공, Ableton 등 음악툴 유저에게 익숙한 UI
- Google Labs의 Music Effects와의 통합으로 자연어로 비트를 조합해 음악 생성 가능
- Jacob Collier, Toro Y Moi 등 유명 뮤지션과 깊은 실시간 협업, 실제 Google I/O 등 행사 연계 시연
- SynthID 워터마크로 생성 음악의 디지털 저작권 및 출처 투명성 확보, 창작자 산업과 밀접하게 공동 개발

### 텍스트-비디오 생성 품질의 최근 2~3년간 비약적 발전 과정

- 2022~2023년 논문 예시: ‘검은 재킷 입고 피라미드 앞에서 춤추는 라쿤’이라는 텍스트-비디오 생성을 Walt(2023), LTX(2024), Cling 2.0(2025), Veo 2(2024) 등이 차례로 구현
- Walt 영상은 매우 끊기고 자연스럽지 못했으나, Cling, Veo 2~3 순으로 점진적으로 품질이 크게 개선
- 현재 Veo 3는 등장인물 애니메이션/배경/감정 표현 등에서 이전 모델 대비 확연한 스타일 및 디테일 구현 가능

### 이미지-비디오 변환 및 프롬프트 작성 보조 등 Veo 3의 프리미엄 기능

- 단일 이미지를 입력하여 다양한 스타일의 동적인 영상 컨텐츠로 변환 가능(예: 텍사스 여성+강아지, 총격전 준비 장면 등)
- 자연어 프롬프트를 입력하면 달리는 사람, 트랙터빔에 의해 하늘로 끌려가는 장면 등 장면/연출 자유로이 설정
- 프롬프트 라이팅 지원: 간단한 문장을 상세화하여 모델 이해도 및 결과 품질 대폭 향상(예: 단순 설명 → 세세한 감정·행동 묘사)
- 사운드 생성(음악, 효과음, 배경음 등)까지 통합 지원
- 최신 Paris 팀의 데모 공개 및 “보인다” 의미의 Veo 이름, 유럽 현지화 유머 등 삽입

### Veo 3 활용·접근 방법 및 코드 예시 제시

- Google AI Ultra Plan(울트라 요금제): 영국 등 여러 국가에서 Veo 3 사용 가능
- Google AI Pro(프로 요금제): Gemini 모바일 앱에서 제한적 사용
- Vertex AI(베르텍스 AI) 프라이빗 프리뷰에서 Veo 3, Veo 2 모두 제공 중(텍스트 API 포함)
- AI Studio 지원 예정, 조기 접근 원할 경우 신청 폼(QR 코드) 활용
- 코드 샘플: 입력/출력 버킷 지정, 시작 이미지, 종횡비 등 세팅, 모델 지정, 수 줄의 코드로 간편한 비디오 생성 가능

### 실제 광고 리플리케이션(복제) 데모를 통한 Veo 2 vs Veo 3 제작 과정 비교

- 기존 광고(Chick-fil-A 샌드위치 광고)를 Veo 2로 복제하는 과정: 
    - Gemini로 비디오 상세 플랜 생성, 8초 제한에 맞게 세분화 프롬프트 설정
    - 음악 효과(BGM: 다운홈 팜+슬로우 기타) 생성, Camtasia에서 최종 합성 및 트랜지션 적용
    - 전반적으로 많은 수작업 및 고민 필요
- 같은 광고를 Veo 3로 복제: 원본 비디오 설명 프롬프트만 입력, Veo 3가 한 번에 고품질 결과물을 생성(프로세스 시간 대폭 단축)
- 발표자는 Veo 2로 만든 결과가 오리지널보다 낫다고 평가, Veo 3는 프롬프트 기반 자동화의 극대화를 실제로 입증

### Veo 3의 책임 있는 확장·제어·내구성 향상 및 향후 로드맵

- Veo 3 팀은 AI·합성미디어의 책임 있는 사용·툴 내구성 강화·정교한 사용자 제어 기능 확장에 집중할 계획
- 실제 발표 종료 인사에서, Paige의 사진 한 장을 Veo 3가 자동 애니메이션하여 자연스러운 손흔듦 장면 연출
- 사용자의 다양한 활용 시나리오 및 고도화된 기능 제공을 위한 적극적 피드백 및 접근성 확대를 약속하면서 마무리
