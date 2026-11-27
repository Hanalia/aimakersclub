---
author: AI Makers Club
pubDatetime: 2026-11-27T23:45:10.707Z
title: "Why Cloudflare Became a Neolab - Michelle Chen, Cloudflare"
slug: cYcYfM9Mvwo
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "이 영상은 미셸 첸(Cloudflare 그룹 프로덕트 매니저)이 AI Engineer Summit에서 발표한 ‘Cloudflare가 왜 혁신 AI 실험실(Neolab)이 되었는가’"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/cYcYfM9Mvwo/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Why Cloudflare Became a Neolab — Michelle Chen, Cloudflare](https://www.youtube.com/watch?v=cYcYfM9Mvwo)  
**채널명:** AI Engineer

## *왜 클라우드플레어는 네오랩이 되었는가* 핵심 요약

- 이 영상은 미셸 첸(Cloudflare 그룹 프로덕트 매니저)이 AI Engineer Summit에서 발표한 ‘Cloudflare가 왜 혁신 AI 실험실(Neolab)이 되었는가’에 대한 이야기임
- Cloudflare는 16년 전 CDN(콘텐츠 전송 네트워크)으로 시작, 분산된 인프라와 네트워크 인접성을 바탕으로 독특한 구조를 가짐
- 2017년부터 Workers(서버리스 함수), Durable Objects(상태 저장형), 2025년 Containers 등 다양한 분산 컴퓨팅 플랫폼을 제공하며 개발 생태계 확장
- ChatGPT의 부상(2023년) 이후, GPU를 네트워크 전체에 분산 탑재해 ‘Workers AI’ 출시, 초기엔 작은 모델(저지연)이 미래라고 예측했으나 실제론 대형 모델(트릴리언 파라미터)이 대세로 부상
- 2026년 3월부터 Kimi·GLM·DeepSeek 등 대형 LLM을 인프라에 호스팅하는 방향으로 전환, 프론트에서 API 호출로 즉시 추론 제공
- AI 에이전트/오케스트레이션을 지향하며 ‘에이전트 클라우드’ 비전을 수립, 독특한 인프라+컴퓨팅+저장소+모델 레이어 완비
- 2026년 9월, TypeSafe의 Jev 모델(First System Model, 1차 시스템 모델)의 등장으로, Cloudflare도 자체 Jev 스타일 모델 개발을 결정
- 3일 만에 ‘Clef’(결정 모델) 출시, 이어서 3주 동안 네 차례 신모델 배포 (Clef/Cleric 등)하며 빠른 혁신 실험 실천
- Cleric은 비정형 데이터에서 구조화된 값을 추출하는 ‘추출 모델’로, 에이전트 자동화와 의사결정 가속화에 기여
- 실제 데모에서 First System Model을 활용하면 LLM 대비 추론 시간, 토큰 비용, API 호출 수가 대폭 절감됨(2배 빠르고 72% 저렴, 토큰 사용량 94% 절감)
- 실세계 활용 예시(코드 CI 오류 분석, 스팸/사기 탐지, 웹/지원티켓 데이터 추출 등)도 소개하며, “지금이야말로 구축을 시작할 시간”이라는 메시지로 마무리

---

## 세부 요약 - 주제별 정리

### Cloudflare는 CDN부터 시작해 분산 인프라 확장으로 AI 혁신의 토대를 마련함

- Cloudflare는 16년 전(2010년) CDN으로 설립, 2023년 기준 16주년을 맞음
- CDN 기업으로서 모든 사용자의 요청 앞단에 위치, 저장·보안·캐싱·속도 최적화가 주역할
- 네트워크 인접성 확보 위해, 세계 각지에 데이터센터 구축 (“US-East-1” 단일센터 집중과 대조적)
- 초기부터 자체 인프라 개발 및 분산 배치, 이로 인해 사용자의 요청과 컴퓨팅 리소스 간 거리가 극도로 짧음
- 컴퓨팅 파워를 최대한 분산시키는 것이 향후 AI·클라우드 기반 서비스에 큰 기반이 됨

### ‘서버리스’부터 다양한 컴퓨팅·저장소 플랫폼을 제공하며 개발자 생태계를 키움

- 2017년, 서버리스 함수 실행 플랫폼 ‘Workers’ 론칭: 기존 VM 기반 대비 “실행 후 즉시 소멸”, 사용한 만큼 비용 발생, 지연시간 매우 짧음
- 상태 저장형 Durable Objects, 2025년 Containers도 도입해 다양한 워크로드 지원
- KV(Key-Value) 저장소, R2(객체 스토리지), D1(데이터베이스) 등 다양한 개발자 데이터 레이어로 상승
- 분산 컴퓨팅+저장소+에이전트 실행까지 통합 플랫폼 구현
- 누구나 Cloudflare 위에서 완전한 데이터·웹·플랫폼 서비스 구축 가능하도록 지원

### ChatGPT의 충격 이후, Cloudflare의 AI 전략은 대형 LLM 동일선상에서 변신함

- 2023년 ChatGPT 공개 후, Cloudflare 경영진은 인프라의 AI 역할에 대한 정밀 분석 시작
- Workers AI 출시: 분산 네트워크에 GPU 탑재, LLM/AI 추론도 ‘사용자에 가장 가까운 경계(Edge)’에서 구현
- 당시 “모델은 점차 작아질 것이며 저지연이 주요 경쟁력”이라 봤으나, 곧 대형 모델(Big Model, Trillion Parameter)이 대세로 급전환됨
- 모델 규모 증가로 오히려 네트워크 레이턴시의 중요성이 상대적으로 줄어드는 현상

### 대형 LLM 도입(2026년)으로 클라우드 인프라 역량을 ‘에이전트 클라우드’로 방향 전환함

- 2026년 3월부터 Kimi·GLM·DeepSeek와 같은 1조(Trillion Scale) LLM 모델을 대량 인프라 위에 호스팅
- 프론트엔드 API 호출만으로 대형 LLM 추론이 즉시 제공되는 서버리스 구조 완성
- 그 와중에 전체 개발자 에이전트/오케스트레이션 생태계의 중앙 플랫폼으로 자리매김
- 서버리스 함수(Workers), Durable Objects, 저장소, LLM이 4대 핵심 축으로 작동

### First System Model(1차 시스템 모델) 혁신은 클라우드플레어가 직접 신모델을 만드는 계기가 됨

- 2026년 9월, TypeSafe사의 Jev (First System Model) 출시: 한 번만 입력을 통과시키고, 빠른 의사결정용 Output 제공(기존 LLM보다 응답 속도 및 효율성 뛰어남)
- 대형 LLM(셀프 회귀적 방식, 토큰 생성 속도 느리고 데이터·비용 소모 많음)에 대한 현장 불만 누적
- Cloudflare도 Jev의 원리를 도입해 자체 모델 개발 결심, 3일 만에 ‘Clef’를 출시함

### Cloudflare는 Clef·Cleric 등 신속한 모델 개발로 AI 실험실(Neolab)로의 전환을 가속화함

- Clef(클레프): 에이전트의 자동 결정(Decision Making) 모델, 더 빠르고 저렴하며 LLM 반복 호출 부담 해소
- Cleric(클레릭): 처음 설계한 ‘추출 모델(Extractor Model)’, 비정형 데이터(이메일, 슬랙, 트윗 등)에서 구조화된 값을 자동 추출해 JSON 오브젝트로 변환
- Clef·Cleric은 모두 First System Model의 특징(저비용, 초고속, 입력-출력 단방향, 할루시네이션·비용 감소 등)
- 3주 내 4개 모델을 ‘직접 트레이닝-배포’하며, 신속성에서 혁신 AI 실험실의 전형을 제시

### 클라우드플레어의 First System Model은 개발자 워크플로우 속도를 혁신적으로 개선함

- 전통적 LLM 오케스트레이션(코드 빌드 오류 분석 등): 수십 번 반복 API 호출, 수만 토큰 사용, 응답 지연 큼
- Clef Flash(고속 결정모델)로 40개 툴 중 10개만 선별, Cleric으로 비정형 데이터서 값 추출
- LLM 사용량 최소화, 시스템 내에서 정보전처리/결정 자동화
- 데모 결과: LLM 5회 호출 → 1회로, 토큰 40,000개 → 1,800개, 처리 시간 17.2초 → 9.2초, 비용 72% 절감, 토큰 94% 절감(네트워크 환경 따라 수치는 변동)
- First System/Second System 모델 혼용으로 LLM 효율·속도·비용 통합 최적화

### 실전 활용 예시를 통해 Clef/Cleric의 확장성과 범용성을 강조함

- CI/CD 에이전트 오케스트레이션, 코드 오류 자동 수집·분석·결정
- 스팸, 피싱 등 사기 탐지 업무에서 Clef의 결정 기능 및 판단력 활용
- 기술지원 티켓, 웹페이지 등 비정형 정보에서 Cleric이 구조화 추출
- 이미지·텍스트 혼합 데이터도 자동 해석, 에이전트의 완전 자동화 기여
- 새로운 Cleric 릴리즈도 예고, 실제 사용자 경험 기반 확장 예정

### 분산 인프라와 혁신적 AI 모델 개발의 결합이 Cloudflare의 차별적 경쟁력임을 강조함

- 분산 GPU 인프라, 서버리스 컴퓨팅, 유연한 저장소, 자체 LLM/First System Model 레이어를 갖추고 있음
- 폐쇄형 모델의 한계, 규제 리스크에 유연하게 대응 가능(자체 트레이닝, 오픈소스화 등)
- “무엇이든 결핍이 있으면 스스로 만들어내는 혁신력”이 Neolab(혁신 AI 랩)으로서의 척도라 언급
- 과거의 실수·기대 불일치도 신속한 전략 전환과 실행력으로 돌파

### 변화하는 AI 산업에서 ‘즉각적 실행’과 ‘기민함’이 가장 중요한 교훈임을 강조함

- 산업 지형이 일순간에 바뀐다는 점, 기존 가정이 틀리면 추구 방향도 신속히 재설정해야 함을 사례로 설명
- “지금 이 순간이 가장 중요한 시간”이라는 톨스토이 인용으로, 빠른 실험·구현을 거듭 강조
- Cloudflare가 가져온 모든 전환·혁신은 ‘무엇을 지금 만들 수 있는가’에 대한 끊임없는 질문에서 비롯됨

### 결론은 Cloudflare의 AI 혁신 실험(Neolab)과 First System Model이 개발자에 즉각적 실용성을 제공한다는 점임

- 새로운 AI 모델(결정/추출)은 대형 LLM과 보완적 관계로 워크플로우 효율 증대, 불필요한 비용·지연 최소화 실현
- 분산 하드웨어 인프라+모듈형 AI+오픈 실험 문화 삼위일체가 회사 성장동력임을 구체적 사례로 증명
- 궁극적으로 청중(개발자)에게 “무엇을 오늘 시도하고 구축할 것인가”라는 동기부여적 메세지로 발표를 마침
