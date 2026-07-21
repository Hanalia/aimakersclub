---
author: AI Makers Club
pubDatetime: 2026-07-21T23:45:31.215Z
title: "HTML Is All Agents Need - James Russo, HeyGen"
slug: Cz4v1WHVyZc
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 HeyGen의 공동 창업자이자 Hyperframes의 테크 리드 James Russo가 \"HTML이 생성형 미디어 에이전트에게 충분한 이유\"를 실제 사례와 기술적 논리로"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/Cz4v1WHVyZc/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [HTML Is All Agents Need — James Russo, HeyGen](https://www.youtube.com/watch?v=Cz4v1WHVyZc)  
**채널명:** AI Engineer

## *HTML은 모든 에이전트에게 필요한 전부다* 핵심 요약

- 본 영상은 HeyGen의 공동 창업자이자 Hyperframes의 테크 리드 James Russo가 "HTML이 생성형 미디어 에이전트에게 충분한 이유"를 실제 사례와 기술적 논리로 상세히 설명
- HeyGen의 미션은 "비디오를 통한 커뮤니케이션 문제 해결"로, 기존 최고의 AI 아바타를 개발한 데서 출발했으나, 완성도 높은 영상제작에는 B-roll, 애니메이션, 자막, 음악 등 다층적 요소 추가가 반드시 필요함을 강조
- 대부분의 코딩 에이전트(Large Language Models, LLM)는 HTML/CSS/JavaScript 기반 데이터를 자연스럽게 생성하고 이해하므로, 별도 DSL이나 JSON 대신 HTML을 출력 포맷으로 채택해야 최상의 결과를 얻는다고 주장
- 기존 디자인 툴(After Effects, Premiere Pro)은 창의적으로 우수한 결과물을 내지만 에이전트에게 친화적이지 못함. Lottie, Rive 등도 사용성이 떨어지고 운용 유연성 부족
- Remotion 등 코드 기반 영상 프레임워크 역시 LLM에게 틀과 언어를 별도로 가르쳐야 하는 문제가 있어 창의성 저하 발생
- 2023년 말 Gemini 3 등 최신 LLM 등장 이후 HTML/CSS/JS 만으로 뛰어난 영상 요소 생성 가능성 확인, 'native tongue'을 활용하는 것이 최적 해법임을 실증
- Hyperframes는 에이전트가 생성한 HTML을 벡터화·프리징해 결정론적(deterministic) MP4로 변환, 웹브라우저에서 보이는 그대로를 프레임 단위로 렌더링하는 오픈소스 프레임워크
- Hyperframes는 90일간 130만 건 이상 영상 생성, 26만7천명 이상의 크리에이터가 사용, 일일 평균 1.5만 영상 생성 및 3.2만 GitHub 스타 기록 등 대규모 실사용 검증
- 향상된 활용성을 위해 시연 중심의 단일 프롬프트(skill)와 수작업 편집 스튜디오 제공, 최근 keyframes 기능 도입으로 전문가급 모션 그래픽 작업까지 지원
- 모델의 창의적 작업 한계 극복 및 에이전트 영상 제작 품질 향상을 위해 코드-투-비디오 벤치마크 공동 연구 진행, Hyperframes는 오픈소스 무료 사용 가능

---

## 세부 요약 - 주제별 정리

### HTML, CSS, JavaScript가 LLM의 ‘모국어’이므로 새로운 DSL보다 훨씬 높은 영상 생성 결과 제공

- 대부분의 LLM은 웹크롤링 기반으로 학습되어 HTML, CSS, JavaScript로 가장 쉽고 정확하게 정보를 주고받음
- 맞춤형 JSON 구조 또는 새로운 DSL을 주입하면 번역 비용과 창의성 손실 발생
- 셰익스피어에게 일본어나 중국어 시를 쓰게 하면 예시를 수차례 줘도 최상의 결과물이 나올 수 없는 것과 유사하다는 비유 사용
- Andrej Karpathy, Tarik 등도 ‘HTML이 새로운 마크다운’이 될 것임을 강조(각자 논의, James Russo는 발표 준비가 이들의 트윗 전임을 명시)
- LLM이 기본적으로 잘 아는 언어(HTML/CSS/JS)로 소통하면 자연스럽고 뛰어난 그래픽·미디어 출력 가능
- 변환 피하는 방법으로, 가능한 ‘가장 얇은 래퍼’를 선택해 영상 생성 시스템 구성

### 전통적 영상 편집 툴, Lottie, Remotion 등 기존 툴의 한계로 인해 HTML 기반 접근이 더욱 강력함

- After Effects, Premiere Pro 등은 높은 결과물 퀄리티를 제공하나 일반 개발자/에이전트에게는 과도하게 복잡함(즉, 에이전트 친화 적합성 결여)
- Lottie, Rive 등은 JSON·XML 기반이나 수정성, 익숙함 측면에서 비효율적
- Remotion은 코드 기반 영상 생성 예시이지만, LLM에 문법·프레임워크 사용법을 따로 가르쳐야 함
- 이 같은 학습 요구는 창의성을 떨어뜨리고, 단순 코드 예시 학습으로 육성 범위가 제한됨을 발견
- 반면, HTML은 LLM이 ‘본능적으로’ 잘 다뤄, 학습 부담 없이 고품질 영상 생성 이점

### Hyperframes는 HTML→비디오(MP4) 렌더링 파이프라인을 통해 브라우저 미리보기와 동일한 영상 생성 실현

- Hyperframes는 오픈소스 HTML-기반 프레임워크로, 입력받은 HTML 코드로부터 최종 비디오 파일 출력
- 사용자는 웹브라우저에서 보는 화면 그대로가 MP4 영상에 1:1 반영됨(“the same pixels that the browser sees”)
- 브라우저는 기본적으로 비동기 로딩(폰트·이미지 비동기 ; 타이밍 변동 용인)이나, 영상화 과정에서는 완전 결정론적 렌더링 필요
- Hyperframes는 브라우저 ‘시간’을 프레임마다 정지(freeze)하고, 필요한 리소스가 전부 로드될 때까지 대기 후 스크린샷 → 각 프레임 차곡차곡 캡처
- 반복해 모든 프레임을 순차적으로 수집해 최종 동영상 파일로 인코딩
- 3.js, SVG, WebGL/ GPU, Lottie 등 브라우저에서 렌더링 가능한 모든 요소가 영상 내에 포함 가능

### 에이전트의 HTML 기반 영상 제작은 별도의 언어학습 없이 바로 고품질 아웃풋 생성이 가능함

- Gemini 3 Flash와 같은 소형 LLM들도 HTML/CSS/JS에 친숙하므로, 대형 에이전트 역시 어려움 없이 코드 작성 가능 확인
- 복잡한 시스템 프롬프트/컨텍스트 주입, 래퍼 개발 등을 실험했으나, 가장 간단한 “얇은 래퍼+메타데이터” 방식이 최적
- HTML 태그 속성(attribute)에 최소한의 메타데이터 추가만으로 타이밍 등 정보 부여
- 모델의 성능이 좋아질수록 자연스럽게 결과물도 지속적 향상 보장

### Hyperframes의 미리보기 ↔ 결과 영상 싱크 보장 및 임의 프레임 탐색, 동기화로 영상 품질 극대화

- “hyperframes”란 명칭은 HTML 랜더링의 매 순간(프레임)을 결정적으로 동결시켜 영상에 그대로 옮기는 과정에서 기인
- 사용자가 브라우저에서 보는 미리보기가 영상 결과물과 완전히 일치
- 렌더러는 프레임 단위로 동기화 및 자원 로딩을 보장(실제 영상 프레임 구성 방식과 동일)
- 이로써, 웹 환경상의 혁신 및 다양한 브라우저 전용 미디어 요소까지 무손실 포함 가능
- 인터넷 곳곳의 오픈소스 예제를 바로 활용하고 직접 수정해 영상화에 활용하는 생태계 지향

### 영상 제작의 디테일(구성/스토리보딩/모션)은 여전히 인간의 개입과 고급 '스킬'이 본질적으로 필요함

- 에이전트는 단일 프롬프트(skill)로 충분히 쓸 만한 결과를 내지만, “뛰어난 결과”를 얻으려면 인간의 세심한 연출·편집 감각 필요
- 영상의 내러티브/비전/미션 설정 → 프레임별 스토리보딩 → HTML/CSS/JS 활용 프레임별 모션 부여 → 전체 합성 및 최종 편집 과정 설명
- Hyperframes 스튜디오를 통한 수동 조정(드래그/세부 편집 등) 허용, 현존 타 에디터와 유사한 워크플로우 제공
- “프롬프트 하나로 나오는 결과물은 쓸만한 수준에 머무르며, 진정한 명작은 여전히 창의적 설계와 세분화된 작업에서 온다”는 점 강조

### 최신 ‘keyframes’ 도입 등 Hyperframes의 모션그래픽 제작 능력 확장

- 발표 당일 “keyframes in Hyperframes” 신규 출시 알림
- 모션 디자이너들이 After Effects 등에서 행하는 핵심 키프레임 조작이 오픈소스 스튜디오 내에서 가능해짐
- 프레임 단위, 키프레임 단위로 정밀한 모션 디자인 가능
- 전문 영상 제작 툴 수준의 모션 그래픽 구현 역량 제공

### Hyperframes의 실사용 수치로 에이전트 기반 HTML 비디오 제작 흐름의 시장 확산 증명

- Hyperframes는 최근 90일간 130만개 이상 영상 생성, 26만7천 사용자가 프레임워크 실험
- 현재도 일일 1만5천건 규모로 영상이 오픈소스 환경에서 제작되고 있음
- GitHub 스타 3만2천개 이상 기록(영상 공개 시점 기준)
- 개별 에이전트(Cloud Code, Codex, Cursor 등)가 HTML/CSS/JS를 작성할 수 있다면 바로 Hyperframes 영상 생성에 활용 가능

### 크리에이티브 영역에서의 에이전트 출력 품질 한계를 높이기 위한 코드-투-비디오 벤치마크 구축 시도

- LLM 에이전트들이 영상, 모션그래픽 등 독창적·세련된 콘텐트 생성에서는 여전히 한계 있음 솔직히 인정
- HeyGen은 다양한 연구자·LLM 랩과 함께 코드→비디오 벤치마크를 개발, 최소 품질 기준(“raise the floor”) 향상 도모
- 영상 및 영상 에이전트 분야 종사자들과의 협업/공동 연구에 적극적 의지 표명

### Hyperframes는 오픈소스 무료 사용, LLM·코딩 에이전트라면 어디든 즉시 적용 가능

- Hyperframes는 완전 무료 오픈소스, 누구에게나 즉시 사용 가능
- 별도 에이전트나 환경에 관계없이 HTML, CSS, JavaScript 구사만 가능하다면 즉각 영상 생성 적용
- 링크 및 오픈소스 저장소 소개, 추가 기능(스킬)도 다운로드 형식 제공
- HeyGen 및 James Russo 연락 방법 안내(예: X 계정 등)
