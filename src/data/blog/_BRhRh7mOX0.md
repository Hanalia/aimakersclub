---
author: AI Makers Club
pubDatetime: 2025-07-14T23:46:20.406Z
title: "Prompt Engineering and AI Red Teaming - Sander Schulhoff, HackAPrompt/LearnPrompting"
slug: _BRhRh7mOX0
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 강연의 발표자는 Sander Schulhoff로, Learn Prompting과 HackAPrompt라는 두 AI 관련 회사의 CEO이며, AI 연구, 자연어처리, 딥 강화학습"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/_BRhRh7mOX0/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Prompt Engineering and AI Red Teaming — Sander Schulhoff, HackAPrompt/LearnPrompting](https://www.youtube.com/watch?v=_BRhRh7mOX0)  
**채널명:** AI Engineer

## *프롬프트 엔지니어링과 AI 레드 팀: Sander Schulhoff, HackAPrompt/LearnPrompting* 핵심 요약

- 본 강연의 발표자는 Sander Schulhoff로, Learn Prompting과 HackAPrompt라는 두 AI 관련 회사의 CEO이며, AI 연구, 자연어처리, 딥 강화학습을 배경으로 가지고 있다.
- 인터넷 최초의 ‘프롬프트 엔지니어링 가이드’를 작성했으며, 이후 수많은 연구자 및 기업들과 프롬프트 엔지니어링 및 AI 보안 영역에서 활약하고 있다.
- 핵심 메시지는 “프롬프트 엔지니어링은 여전히 매우 중요하다”는 점이며, 여전히 보안상의 이유로 여러 시스템 및 에이전트의 배포가 제한되고 있음을 강조한다.
- HackAPrompt 플랫폼에서 세계 최초로 AI 레드팀 및 프롬프트 인젝션(프롬프트 해킹) 경진대회를 열었고, 이 과정에서 수십만 개의 프롬프트 데이터셋을 만들어 모든 주요 AI 기업이 보안 벤치마킹에 활용 중임을 소개하였다.
- 프롬프트 엔지니어링의 역사부터 발생 배경(예: 보드게임 ‘디플로머시’에서 기인한 ‘기만 연구’ 등)과, ‘프롬프트’ 및 ‘프롬프트 엔지니어링’ 용어의 기원, 개발자/비개발자별 접근법, 실제 자동화 도구 예시 등을 상세히 다룬다.
- ‘프롬프트 리포트’라는 이름의 논문에서 약 200가지 프롬프트 기법을 체계적으로 분류/비교했으며, 이 과정과 주요 결과(최적화된 프롬프트가 최대 90% 정확도 향상, 잘못된 프롬프트는 0%까지 하락 등)를 구체적으로 설명한다.
- 특히 체인 오브 쏫트, 문제 분해(Decomposition), 앙상블(Ensembling), 인 컨텍스트 러닝(Few-shot, In-context Learning), 자기평가(Self-evaluation) 등 주요 프롬프트 기법의 논리, 실제 변화, 적용 사례와 한계를 데이터와 함께 상세히 분석한다.
- AI 레드팀과 프롬프트 인젝션은 현대 AI 보안에서 Classical(전통) 보안과 근본적으로 다름을 설파하며, 실제 사례(예: 1달러로 자동차 구입, 수익형 해킹봇, 수학문제 해설 앱에서의 치명적 보안사고 등)에 기반해 ‘AI 보안의 불가능성’을 강조한다.
- 최신 대회/도구/실험과 실질적 결과(자동화 프롬프트 엔지니어링 도구의 인간 능력 초월, 프롬프트 이식성, 방어 기법의 한계, AI 에이전트의 공격 표면 등)를 구체적 수치·사례와 함께 전한다.
- 지속적인 해킹/방어 대회와 데이터셋 구축, 글로벌 연구자·기업 협력을 통해 AI 보안의 난제를 정면으로 다루고 있으며, “Ba64 인코딩, 외국어, 오타 등 간단한 방법도 여전히 공격 가능하다”는 현실적 리스크를 반복 강조하였다.

---

## 세부 요약 - 주제별 정리

### AI 연구 배경과 프롬프트 엔지니어링 입문이 AI 보안 연구로 이어짐

- Sander Schulhoff는 자연어처리 및 강화학습을 배경으로 연구 경력을 쌓았으며, 초기에는 보드게임 ‘디플로머시’에서 아이디어를 얻어 ‘기만 연구’에 참여(‘AI의 인간 기만’ 연구).
- AI가 인간을 기만하는 다양한 실험을 진행하며 ‘프롬프트’와 그 설계의 중요성을 자연스럽게 인식하게 됨.
- 딥러닝 모델(특히 GPT-3의 Text-davinci-2 등)의 등장을 계기로 제한된 봇 문법 해석을 자동화할 필요로 인해 본격적으로 프롬프트 엔지니어링에 입문.
- 당시(2~3년 전) 인터넷에는 프롬프트 엔지니어링에 대한 정식 자료가 거의 전무해, 직접 가이드를 작성해 공개(최초의 오픈소스 가이드).
- 이후 대학교에서 ‘딥 강화학습 교과서’를 집필하려다 난해한 수학을 어려워해 프롬프트 엔지니어링 가이드로 축소, 오픈 직후 1주만에 1만, 한 달만에 10만, 몇 달 뒤 수백만 사용자를 돌파.
- 해당 오픈소스 가이드는 OpenAI, Google, BCG, 미국 정부 NIST 등 주요 기관/기업 문서에 직접 인용되고, 오픈AI와의 공식 협업 강의 과정도 제작함.
- 프롬프트 인젝션 및 보안 문제에 대한 각종 연구/실험을 이어가다 세계 최초의 레드팀 공모전(HackAPrompt)을 기획·운영함.

### 프롬프트 엔지니어링의 개념·역사·유형은 사용자와 목적에 따라 달라짐

- 프롬프트: 생성형 AI에 입력하는 “메시지” 그 자체(텍스트, 이미지, 결합 등 다양한 형태 가능).
- 프롬프트 엔지니어링: 입력 프롬프트를 고도화하며 반복적 피드백을 주는 전 과정을 의미함. 예: “동화 써줘” → 결과 피드백 → 더 구체화(“5세 딸에게 어울리는 말로”) 등.
- 프롬프트 엔지니어링은 크게 두 흐름으로 구분됨:
    - 대화형 프롬프트 엔지니어링: ChatGPT, Claude, Perplexity 등과 상호 작용하며 실시간 피드백으로 결과를 개선.
    - 시스템 주입형/전통형 프롬프트 엔지니어링: 반복 피드백 없이 단일 프롬프트로 API 등에 집어넣어 대량 요청(특히 이진 분류 등)에 최적화.
- 용어 자체는 오랜 역사가 있지만, 현재와 같은 용법(‘prompt’, ‘prompt engineering’)은 GPT-2 이후, Radford/Stone 등의 논문, Brown(2020) 논문에서 본격화.
- ‘Prompt engineering’이라는 정식 명칭은 2021년경부터 널리 쓰임. 그 이전엔 ‘automated prompt optimization’ 등으로 부분적 연구만 존재.
- 기술자와 비기술자 모두 사용하며, 일상적 이메일 작성부터 AI 시스템 구축용 정밀 설계까지 적용 스펙트럼이 넓다.

### 프롬프트 품질은 정확도에 치명적 영향을 주며, 대화 맥락·예시 수·구조 등 세부요소가 핵심 변수임

- 실험적으로, 좋은 프롬프트는 특정 태스크에서 정확도 90%까지도 향상, 나쁜 프롬프트는 0%까지도 하락 가능(실제 논문들 다수 인용).
- 멀티 프롬프트 시스템은 “가장 나쁜 프롬프트가 시스템 전체 성능을 좌우한다”는 원칙을 사례로 제시.
- 프롬프트의 예시(‘few-shot’ 혹은 ‘in-context learning’)에서 제공하는 샘플 수는 3~40개, 수백~수천까지도 논문마다 다양. 실제로는 모델별/태스크별로 최적 점이 다르며, ‘지루해질 때까지’ 늘려 본다고 함.

### 체계적 문헌조사(Prompt Report)를 통해 200여개 프롬프트 기법을 정리, 실제 산업 도입도 광범위함

- 30명 규모 연구팀이 1년간 수백 편 논문, 실사례, 자동화 파이프라인(프롬프트 적용)으로 약 200개 기법, 영어 기반 58여 개 기법 포함 정량 분석.
- 이 논문은 OpenAI, Google, 주요 엔터프라이즈 도구(Label Studio 등), 파이썬 라이브러리 등이 직접 참고/채택.
- 모든 주요 프롬프트 요소(역할 할당, 예시, 포맷, 분류 기준 등)를 명확하고 실증적으로 정의하고, 실제 산업 이식성과 유용성을 강조함.

### ‘역할 프롬프트’는 수학/정확도 측면에서 실효성 전무, 그러나 창작·요약 등에는 적절함

- GPT에게 ‘너는 수학 교수야’ 식 역할 주입(Role Prompting)이 정확도·F1 향상에 효과 있다는 ‘도시전설’이 나돌았지만, 대규모 실험(각종 역할, ‘천재’ 대 ‘바보’ 등 비교)에서 실질적 차이 없음이 입증됨.
- 오히려 어설픈 역할 주입(‘바보’ 역할)이 오답을 줄이는 기괴한 현상도 관측(예: 단계별 추론을 더 장황히 쓰게 유도).
- 단, 창작/요약 등 산출 결과의 개방성이 중요한 분야에서는 여전히 역할 프롬프트가 맥락을 제어하는 데 도움이 됨.

### ‘체인 오브 쏫트(Chain of Thought)’, ‘문제 분해’, ‘앙상블’, ‘인컨텍스트 러닝’ 등 핵심 프롬프트 기법의 실제 적용 방식과 효과

- 체인 오브 쏫트: “단계별로 생각해보자(‘Let’s think step by step’)” 등 유도어 사용 시, AI가 추론 과정을 명시적으로 출력. 수학/논리 문제에 정확도 비약적 상승, 논리력/일반 지능 확장 기법으로도 진화(예: reasoning model 01, 03 등).
- 다만, 모델이 “생각”을 실제로 그 순서로 하지 않고, 답변은 실제 프로세스와 다르게 생성한다는 연구 결과(최근 논문 포함).
- 문제 분해(Decomposition - “Least-to-Most” 등): 문제를 하위 문제로 먼저 쪼개고, 각각을 푸는 접근. 하위 문제별로 각각의 LLM, 전문가 등에게 할당하여 최종 답안을 조립.
- 앙상블/자기일치(Self-consistency): 같은 프롬프트를 여러 번(혹은 서로 다른 전문가 역할로) 여러 LLM에 입력, 가장 자주 등장한 답을 선택. 최근에는 실효성이 줄며 자주 쓰이지 않음(성능 상향평준화).
- 인컨텍스트 러닝과 퓨샷 프롬프트(Few-shot): 예시 개수, 라벨 분포(예: 긍정/부정 비율), 포맷팅, 예시 유사성 등에 따라 성능이 크게 달라짐. 예시 순서 한 가지만 바꿔도 성능 50%p 이상 차이.
- 독특한 사례로, 오류 데이터(라벨 역전된 샘플)조차 AI가 진리 대신 ‘형식 구조’만을 학습해 실제로는 문제 없음이라는 논문도 존재(단, 정확도는 다소 하락).
- 프롬프트 길이/복잡성이 증가하면 비용 및 효과 면에서 한계 존재. 실제 실무자는 수작업·경험적 튜닝(‘Trial and Error’)으로 최적화.

### 프롬프트 자동화 도구(DSPI 등)의 발전으로 인간 수작업이 쉽게 한계에 부딪히는 현상 입증

- 광범위 실험(약 20시간 수작업) 결과, 인간이 다양한 프롬프트 기법을 적용해도 자동화 도구 DSPI가 더 우수한 F1을 기록(특히 자살 의도 탐지 등 민감 태스크).
- “사소한 프롬프트 일부분(예: 교수 이메일 복사/사회자 이름 변경 등)”이 성능에 큰 영향을 끼침(복사한 이메일 존재 여부, 익명화 등).
- 자신이 20시간 걸친 실험에서 DSPI 기반 자동화가 성능상 자신을 압도했다는 점을 솔직하게 인정.

### 안전성/보안을 위한 프롬프트 해킹(레드팀), 프롬프트 인젝션, 실제 해킹 사례(자동차, 해킹 돈벌이, 수학 AI 등)가 실무 이식성까지 위협함

- AI 레드팀: AI가 금지된(혹은 악성) 행위·내용(폭탄 제작법 등)을 하도록 유도하는 기술 및 평가지(‘그랜드마더 자일브레이크’ 등).
- 실제로 수십~수백 가지 해킹 기법(Roles, 다국어, 외국어 B64, 오타 처리 등)을 적용한 경진대회 진행, 성공 사례(쉽게 금지 우회)에 구체적 수치 제시.
- 프롬프트 인젝션의 본질은, 시스템 프롬프트(개발자에 의해 삽입된 지침)를 무시하도록 사용자가 유도, 공격을 실현하는 것.
- 실제 사례: Remotely.io(원격근무 챗봇)가 트위터에서 “개발자 프롬프트 무시 후 대통령 협박” 텍스트를 입력한 사용자들에 의해 서비스 자체가 즉각 폐쇄, 회사까지 폐업 사태.
- ‘쉐비 타호 1달러 사건’, 암호화폐를 실제로 보내는 해킹 챗봇(Freda), 수학 GPT의 치명적 보안사고(코드 생성 AI가 악성 파이썬을 실행, 서버 좌표/키 탈취)의 구체적 전개 과정을 설명.
- 이러한 해킹은 대부분 ‘클래식 보안’ 미비(컨테이너화 미적용 등)와 AI 보안 미비가 맞물려 발생.

### AI 보안은 전통 보안과 결정적으로 다르며, 100% 방어가 본질적으로 불가능함을 거듭 강조

- 클래식 보안(SQL 인젝션 등): 취약점 존재 여부/패치가 “확정적(이진적)”인 반면, AI 보안(프롬프트 인젝션)은 “비결정적·경험적(Non-deterministic/Statistical)”임.
- AI에게 아무리 시스템 프롬프트에 “절대 속지 말라” 명시해도, B64, 외국어, 오타 등 간단한 우회로 계속 뚫림(실제 공격 예시 다수).
- 심층적으로 “새로운 보안 레이어”라 생각하는 관점도 있지만, 발표자는 기존 보안 체계와 본질적으로 분리되는 “새로운 난제”라 규정.

### 최신 자동화 공격·방어 도구의 실질적 한계, 대규모 벤치마크와 데이터셋 공개의 영향

- HackAPrompt 대회를 통해 약 60만 개 프롬프트 데이터셋 구축, OpenAI 포함 모든 글로벌 AI 기업들이 모델 벤치마킹 및 보안시스템 강화에 실제로 활용.
- 경진대회·실험에서는 “완전한 방어 프롬프트”란 존재하지 않으며, “가드레일(자동화 방어 모듈)”도 꽤 허술, 공격에 쉽게 우회당함.
- 방어 입장에서의 실질적 교훈(예: 단순 시스템 프롬프트만으로 웬만한 공격 차단 불가, 단지 공격자 입장에서 B64, 외국어, 오타, Base64 인코딩 조합 등으로 무력화 가능).
- 프롬프트 이식성 실험: 예를 들어, GPT-3에서 뚫은 공격 프롬프트가 GPT-4에서도 40% 이상 성공한다는 경험적 수치.

### “에이전트형 AI”의 실서비스 도입에는 미해결 난제(적대적 강건성 미확보, 공격 표면 확대 등)로 인한 심각한 보안 위협 내재

- 진정한 ‘AGI’나 훨씬 많은 실무 영향을 미치는 ‘외부세계 연동형 에이전트’는 본질적으로 외부 입력·상호작용이 개방되므로, 공격 위험이 폭증.
- 예시: 로봇에 단순한 지시("벽에 계란 던져!")조차 쉽게 우회될 수 있고, 인터넷 웹 검색 중 구글 광고 등에서 주입된 악성 프롬프트에 의해 의도치 않은 행동 유발 가능.
- “이 문제를 해결하지 않으면 대규모 배포가 불가능하다”고 단언. 실제 채팅 AI와 다르게, 직접 회사 손실로 이어지는 구조이기 때문.
- 기업들이 보안 미비 상태로 배치하다 실질적 금전적 피해를 입는 사례가 양산될 것을 경고.

### 데이터 품질·규모가 AI 보안의 개선 핵심, 지속적 해킹/방어 시합과 글로벌 데이터 축적이 AI 보안 수준 끌어올린다는 현장 전략

- OpenAI의 Sam Altman조차 “95~99% 수준까지는 데이터 품질을 통해 AI 보안 향상이 가능하다”는 입장.
- 실제로 HackAPrompt 데이터셋 및 협력 과정을 통해 ‘더 똑똑한’ 방어모델 개발, 프롬프트 인젝션 취약점 대응, 자동화 벤치마크 및 현실적 허점을 개선 중임.
- 실시간 경진대회(세계 각지 연구자/개발자 참여) 및 사후 데이터 피드백을 통해 도전과제 난이도를 점진적으로 상향하며, 모두 후속 논문/벤치마크에 지속 반영.

### 이론적 기법만큼 데이터와 사용맥락, 경험적 실험의 반복이 중요, 실제 모범적 실무 방법론과 한계

- 프롬프트 디자인의 세부 단계(태스크 이해, 모델 능력 탐색, 직접 데이터 분석, 감성적 ‘바이브 체크’ 등)를 반복적으로 강조.
- 정형적 조언(예: 예시 라벨 밸런스, 구조, 포맷, 최대한 유사 예시 활용 등)이 존재하지만, 최신 모델로 갈수록 이 변수들의 영향력이 감소하는 추세.
- 오히려 직접 실험/반복/현장 튜닝이 현실적이며, 자동화 도구나 오픈소스 파이프라인(DPSI 등)이 점점 더 우수한 성능을 보임을 확인.

### 프롬프트 해킹(레드팀) 실제 예시와 오픈된 대회, 실시간 공격/방어 실습이 산업/학계 연구에 실질적 영향

- 직접 대회(HackAPrompt)에서 제공하는 다양한 시나리오 실전 예시: ‘직원의 역할연기+경쟁사 단점 유출’, ‘펜 판매 설득’, ‘폭탄 제조법 획득’ 등.
- 다양한 쓰기 스타일, 역할, 심층 대화 구조 활용해 실제 모델을 우회하거나 설득하는 다양한 프롬프트 ‘노하우’ 공유(특히 장황하고 자연스러운 역할설정).
- 성공적으로 문제 해결(역할 기반 프롬프트로 경쟁사 제품 홍보하게 만들기 등), 자동화 AI 판정 방식 운영.

### 급변하는 AI/프롬프트 보안 환경에서 커뮤니티·산업·학계 협력과 지속적 실전연구·정보공유가 발전을 견인

- 글로벌 해커톤, 공식 대회, 오픈 데이터셋, 활발한 연구자 협업으로 보안·공격·방어 노하우의 빠른 확산 및 AI 모델 발전 견인.
- 실제 대회에서는 성공적으로 여러 보안 레이어를 뚫은 사례 평가, 참가자 경험공유 및 피드백을 통한 미세조정 반복.
- AI 보안/프롬프트 해킹 분야의 극심한 비결정성(Non-determinism), 산업적 실효성, 균형잡힌 객관적 평가를 위한 ‘실전 기반 연구’의 중요성을 반복 강조.

---
