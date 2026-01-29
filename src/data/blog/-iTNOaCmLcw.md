---
author: AI Makers Club
pubDatetime: 2026-01-29T08:19:18.124Z
title: "Claude Skills Aren't Just for Claude - Here's How to Build Them for ANY Agent"
slug: -iTNOaCmLcw
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "Anthropic이 공개한 Claude의 Skills(기능) 개념은 최근 AI 발전 중 가장 혁신적이며, 그 핵심은 \"단순함\"에 있음 Skills와 Progressive Discl"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/-iTNOaCmLcw/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [Claude Skills Aren't Just for Claude - Here's How to Build Them for ANY Agent](https://www.youtube.com/watch?v=-iTNOaCmLcw)  
**채널명:** Cole Medin

## *Claude의 Skills 기능은 모든 에이전트에 적용할 수 있으며, 직접 구현 방법도 간단함* 핵심 요약

- Anthropic이 공개한 Claude의 Skills(기능) 개념은 최근 AI 발전 중 가장 혁신적이며, 그 핵심은 "단순함"에 있음
- Skills와 Progressive Disclosure(점진적 공개)의 원리를 사용하면 에이전트가 필요한 맥락과 기능만 점진적으로 발견하도록 설계할 수 있음
- MCP 서버 등 기존 방식은 모든 기능 정보를 한 번에 LLM에 주입해 컨텍스트 윈도우를 빠르게 소진하고 에이전트를 압도함
- Skills 방식에선 각 기능의 설명과 파일 경로만 system prompt로 주어지고, 실제 요청이 들어오면 skill.md(메인 설명), 필요하면 그 안의 reference 파일까지 순차적으로 불러오는 3단계 구조를 사용
- 이 구조는 Pyantic AI, Langchain, Crew AI, Agno 등 어떤 프레임워크나 심지어 자체 개발 에이전트에도 그대로 적용 가능
- 실제 구현 예시는 Pyantic AI 기반으로, skills 폴더에 기능별 skill.md, 필요시 reference 폴더 구비하여 확장 가능
- system prompt는 skills의 짧은 요약(description)과 경로 정보를 모두 담아 동적으로 생성, 에이전트가 언제 어떤 스킬을 이용할지 판단 가능
- Skills를 쉽게 구축하고 가져올 수 있도록 GitHub 템플릿 및 코드 예시 제공
- 신뢰성 확보를 위해 자동화된 eval 시스템(질문-예상 스킬 호출 조합 전수 테스트)과 실시간 observability(사용자 실제 사용 내역 추적) 방안까지 함께 제시
- Pyantic AI가 내장한 robust eval 프레임워크와 Logfire 연동으로 운영상 사후 분석 및 진단 지원


---

## 세부 요약 - 주제별 정리

### Claude Skills의 진정한 혁신은 "심플함과 범용성"에 있음

- Anthropic이 Skills 기능을 공개한 지 오래되지 않았지만, 이 개념은 AI 에이전트 설계에서 매우 중요한 변화임
- Skills는 기능의 구현과 사용 방식을 극도로 단순화함: 필요한 기능만 점진적으로 발견하도록 설계
- 이 구조는 Claude, Claude-Desktop, Claude-Code 같은 Anthropic 생태계를 넘어, 어떤 에이전트 시스템에도 손쉽게 적용 가능
- 다양한 LLM(OpenAI, OpenRouter, O Lama 등)이나 로컬 AI에도 Skills 방식 도입이 가능하다는 점이 강점
- Anthropic이 이 개념을 대중화했지만, 예전부터 개별적으로 비슷한 구조를 직접 구현하는 시도가 있었음
- Skills의 핵심은 컨텍스트 효율성을 지키면서 에이전트가 유연하게 기능을 가질 수 있도록 하는 전략적 방법론임

### 기존 MCP 방식은 맥락-기능 과포화로 인한 한계가 있었음

- 에이전트에 여러 기능(tool, rule 등)을 한꺼번에 제공(MCP 서버 등)하면, 주어진 컨텍스트 윈도우가 과도하게 소모됨
- 불필요하게 많은 기능을 한 번에 주입하면 실제로는 1~2개 기능만 쓰이는 경우가 허다하며, 나머지는 무의미한 부하로 작용
- 이런 방식은 LLM의 효율성을 저해하고, 대화 흐름 및 응답 품질이 줄어드는 문제를 야기
- Skills 방식은 이런 비효율을 "점진적 공개(progressive disclosure)"로 구조적으로 해소

### Progressive Disclosure 방식은 3단계로 컨텍스트를 관리함

- 1단계: System Prompt에 각 기능의 "간단한 설명(description)"과 skill.md 파일 경로만을 넣음(50~100단어, 전체 컨텍스트의 5% 이내 권장)
- 2단계: 실제 기능 요청이 있을 때 skill.md(해당 기능의 메인 설명, 보통 300~500라인, 컨텍스트 30% 이내, 복잡도 상이)를 불러옴
- 3단계: 만약 더 세부적인 맥락/명령이 필요하다면 skill.md에서 reference 파일을 추가적으로 호출(예: 추가 API 레퍼런스, 코드 샘플 등)
- 예를 들어, PDF 처리 skill의 경우: 1) skill 요약, 2) PDF 처리 메인 설명(skill.md), 3) 폼 입력 등 특수 상황 참고(reference)까지 순서대로 로드
- 이 방식을 따르면 에이전트에 수십 개 스킬이 있어도 항상 1~2개까지만 컨텍스트를 차지, 효율성을 극대화

### Skills의 구조와 폴더 구성, 동적 system prompt 만들기

- skills라는 폴더에 각 스킬별로 하위 폴더가 존재 → skill.md(메인 설명), reference 폴더(필요시), 파이썬 코드 등
- skill.md는 YAML front matter(간단 설명)와 세부 설명 및 참고 문서를 명확히 구분
- system prompt는 1) 고정 안내문(static, 에이전트 전체 지시), 2) skills의 description과 경로 목록을 합쳐 동적으로 생성
- Pyantic AI 예시에서 시스템 프롬프트는 에이전트가 runtime 중 매번 skills 폴더를 스캔, skill.md의 description만 추려 prompt에 삽입
- 에이전트는 어떤 요청이 들어왔을 때 그 요청에 해당되는 skill만 추가로 skill.md를 통해 불러오도록 설계
- 참조 파일 등 세 번째 레이어도 필요 시만 선택적으로 호출할 수 있음

### Skills를 직접 적용하는 코드 구조와 확장성 높은 구현 방안

- Pantic AI를 예시로, skills 폴더 경로를 환경 변수로 동적으로 지정 가능
- 모든 skill.md를 스캔하여 YAML front matter만 system prompt에 넣고, 실제 요청 시 skill.md 전문을 불러옴
- 주요 tool(함수) 구조:
    - load_skill: skill.md 파일 읽어서 반환
    - read_reference: 추가 레퍼런스 파일 읽어서 반환
    - list_reference: skill.md에 직접 명시되지 않아도 reference 폴더 파일 목록 조회가능
- 이 Toolset 파일을 복사, 자신의 Pantic AI 에이전트에 바로 이식 가능
- skills 폴더에 원하는 기능(social posting, weather, recipe 등)별 폴더를 추가로 생성해 손쉽게 에이전트 확장 가능

### 실제 Skills Agent Playground 데모로 사용 흐름 시연

- 터미널에서 custom Pantic AI skills agent 실행 시, skills 폴더 내 모든 skill.md 파일 자동 로드
- 예시 1: "치킨으로 좋은 저녁 요리 추천" → recipe finder 스킬 호출, API 연동 후 결과 반환
- 예시 2: "현재 도쿄 날씨 알려줘" → weather skill 호출, 필요시 reference 통해 더 상세 API 문서 사용
- 각기 다른 스킬이 요청 시점에만 동적으로 시스템에 들어와서 실제로 LLM context 효율성을 실감할 수 있음
- skills template 사용 방법, 사용자의 own workflow 혹은 AI coding assisant에게 템플릿 활용 지시 가능

### Skills를 쉽게 새로 만드는 방법 및 Claude의 Skill Creator 지원

- 영상 내 및 GitHub의 README에 skills 작성법 가이드 링크 제공
- Claude Desktop에서 파일 설정 > capabilities > skills 항목 하단에서 "skill creator" 기능 활성화 가능
- 이를 통해 "예시 스킬"에서 Skill Creator를 실행, LinkedIn 포스트 만들기/파워포인트 생성 등 목적에 맞는 skill.md와 reference 파일 자동 생성 가능
- Skill Creator 기능도 일종의 스킬(skill로 스킬 제작 지원)이며, Claude 내부 best practices까지 알려줌
- 생성된 스킬은 custom agent의 skills 폴더에 넣고 바로 확장 가능

### 수십 개 skills 사용 시 신뢰성 확보 위한 eval 자동 테스트 도입

- 에이전트의 기능 활용 신뢰성을 위해 eval(자동화된 검증) 시스템이 필수적
- 질문과 예상되는 기능 호출(skills)을 정의한 YAML 테스트 파일을 작성
- 예: "현재 뉴욕 날씨 알려줘" → weather skill 사용되는지 자동 검증
- Pantic AI의 내장 eval 프레임워크 이용: 하나의 스크립트로 수십 개 skill 호출 정확도 일괄 검증 가능
- golden dataset(테스트 질문-예상결과 세트) 순차 실행, 통과/실패 케이스 바로 피드백
- 테스트 불통과 시 loading 로직, prompt 설계, description 개선 필요성 확인 가능

### Eval은 system prompt나 스킬을 조금이라도 바꿀 때마다 반복 실행 권장

- 매 배포 전엔 eval을 통한 smoke test 최소 수행해야 신뢰성 확보
- 자동화된 테스트 스크립트 및 YAML 세트 제공, 자신의 use case에 쉽게 맞춤화 가능

### 운영(Production) 중 실사용 트레이스 분석을 위한 Observability(Logfire) 연동

- Eval이 개발/로컬 테스트에 유용하다면, Observability는 실제 사용자 운용 과정에서의 모니터링 담당
- Pantic 팀에서 만든 Logfire 도구 사용: 모든 skill 호출, LLM 요청 등 원격지에서 trace 및 token 사용량, 비용까지 실시간 분석
- Logfire는 minimal한 환경 변수 설정(토큰)만으로 Pantic 기반 agent와 통합
- 실제 문제 상황(잘못된 tool 호출, 시스템 오류 등) 발생 시 패러미터, tool call history 등 명확히 추적 가능
- system prompt, 툴 구현, skill 배포 등 전체 변경 및 운영 파이프라인에 대한 신뢰성과 진단 체계 제공

### 본 영상의 구조와 참고 리소스(가이드, 코드, 도구) 제공 방식

- 각 단계 설명 후 관련 템플릿, 코드 예시, 공식 문서 및 GitHub 링크 명시(설명란 등 참고)
- 필요시 Claude의 skills 가이드, Pantic AI 공식문서, Logfire 홈페이지 등 추가 참고 자료 권장
- 영상 내 시연 장면(코드, 터미널 출력, 폴더 구조 예시) 포함하여 실습 접근성 강화

### Skills 접목 에이전트 설계 핵심 요령 요약

- system prompt엔 skills의 "간결한 설명"과 "경로" 정보만, 실제 호출 시 skill.md 파일 전문과 필요하면 reference 파일 진입
- 각 skill은 독립적으로 언제든 추가/수정/삭제 가능, 빠르고 유연하게 에이전트 기능 확장
- 자동화(템플릿, eval, observability)와 best practices(설명 길이, 구조, naming 등) 결합으로 실제 서비스 수준 구축 가능
- Pyantic AI는 확장성, 평가, 생산 추적 등 전용 프레임워크 지원으로 실전 적용에 용이함
