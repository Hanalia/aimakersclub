---
author: AI Makers Club
pubDatetime: 2026-05-05T23:47:30.923Z
title: "🔴LIVE - Full AI Video Generation Workflow Using Claude Code + Remotion + Archon"
slug: vhbaZJtW2Hg
featured: true
draft: false
tags:
  - AI
  - YouTube 요약
  - 자동 업로드
description: "본 영상은 Archon, Claude Code, Remotion, 11 Labs 등의 AI/컴퓨팅 도구를 통합하여 AI 기반 동영상 생성 전체 과정을 실시간으로 시연함 Archon"
---

<div style="text-align: center;">
  <img src="https://img.youtube.com/vi/vhbaZJtW2Hg/maxresdefault.jpg" alt="YouTube Thumbnail" style="width: 100%; max-width: 640px; height: auto; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" loading="lazy" />
</div>

**영상 링크:** [🔴LIVE - Full AI Video Generation Workflow Using Claude Code + Remotion + Archon](https://www.youtube.com/watch?v=vhbaZJtW2Hg)  
**채널명:** Cole Medin

## *Claude Code, Remotion, Archon을 활용한 AI 영상 자동 생성 전체 라이브 워크플로* 핵심 요약

- 본 영상은 Archon, Claude Code, Remotion, 11 Labs 등의 AI/컴퓨팅 도구를 통합하여 AI 기반 동영상 생성 전체 과정을 실시간으로 시연함
- Archon은 오픈소스 에이전틱(workflow) 하네스 빌더로, 단일 YAML 파일 내에 AI가 수행할 워크플로를 노드 단위로 정의해 반복적, 신뢰성 있는 자동화가 가능하게 함
- Claude Code(Anthropic), Codeex, Pi 등 다양한 코딩 에이전트와 연동해 복합적인 작업(예: 기획~영상 생성~검수~반복수정 등) 가능
- 11 Labs의 AI 음성 합성을 이용해 자연스러운 내레이터 음성을 생성하며, Remotion을 통해 씬/아이콘/애니메이션 등 영상 자산 생성까지 자동화
- 예시로 최근 해커뉴스 상위에 올랐던 새로운 계산기 TI-84 Evo 소개 영상을 Archon 워크플로로 생성, 기사 요약~시나리오 작성~음성/효과음/음악 조합~최종 렌더링 과정을 시연
- Archon 워크플로 내에서 각 단계(계획, 오디오, SFX, 음악, 씬 조립 등)를 별도 노드로 분리, 중간 산출물 및 검수/반복 처리도 자동화함(출력 검증 실패 시 자동 iterate)
- Remotion→Hyperframes로 주요 영상 생성 툴 변경도, 단순히 Skill만 교체하면 동일 워크플로로 운용 가능함을 강조(높은 유연성)
- YAML 노드 마다 작업 흐름, 에이전트, 환경 변수(예: 음성매개변수), 모델 종류 지정 가능해 과정 최적화, 반복성, 토큰 효율 극대화
- Archon 설치/환경설정/로컬 실행 및 배포(도커)도 매우 간단하여 5분 내 모든 세팅 완료, 공개된 깃허브 워크플로 파일/설치 가이드 제공
- 실제 라이브 데모 과정에서 음성클론, 발음, SFX 자동생성 등 반복 피드백을 통한 품질 개선 과정을 보여주며, 현실적인 한계점(LLM+SFX+TTS의 미세한 오류 등)도 솔직하게 공유

---

## 세부 요약 - 주제별 정리

### 다양한 AI 도구(Archon, Claude Code, Remotion, 11 Labs) 통합이 완전 자동 동영상 생성 파이프라인을 가능하게 함

- 영상 내 데모 주요 도구: Archon(워크플로), Claude Code, Remotion(영상 생성), 11 Labs(음성합성), Cartisia(대체 TTS 옵션), Aqua Voice(로컬 STT)
- 각 도구의 역할: Archon이 전체 프로세스 조직, Claude Code가 논리/기획/프롬프트 구현, Remotion이 씬별 영상 자산 생성, 11 Labs가 내레이터 음성 생성
- 에이전트 구조: 다양한 코딩 에이전트를 Archon 워크플로 내에서 노드별로 배정/스왑 가능
- 데이터 흐름: 기사/리드미 등 입력 → 기사 요약/기획 → 음성 대본 생성 → SFX/음악 생성 → 씬별 영상/렌더링 → QA/반복 피드백 자동처리
- 거의 모든 단계 검증, 반복, 계획을 자동으로 삽입할 수 있어 일관성 및 퀄리티 향상
- 실시간 데모 진행 중 참가자와의 채팅 및 피드백, 실사용 경험도 공유

### Archon은 오픈소스 워크플로 하네스 빌더로 모든 에이전틱(Agentic) 작업을 반복적/신뢰성 있게 자동화한다

- Archon의 정의: 첫 오픈소스 하네스 빌더, YAML로 모든 에이전트 기반 프로세스를 인코딩
- 작업 예시: 영상 생성, 이슈 픽스, PR 리뷰, 자동 회귀 테스트 등 다양한 DevOps/AI Workflow 가능
- Archon 워크플로는 “노드 기반” 설계, 각 노드에 작업/프롬프트/모델/Skill/환경변수 등 지정
- “퍼지 마크다운 Skill 트리 주입식 에이전트 구조”보다 안정적이고 신뢰성 높은 대규모 플로우 가능
- 워크플로 병렬 실행/작업 격리(Worktree) 등 고급 기능 내장으로 대용량, 대규모 실행 지원
- 반복적이고 에이전트가 실수할 여지 없는 결정적/비결정적 단계 구분 가능(예: 밸리데이션은 절대 빼먹지 않도록 강제)

### “단일 YAML 파일”로 복잡한 에이전틱 워크플로 전체 파이프라인(기사입수~기획~음성변환~영상합성~QA)을 재현할 수 있다

- Archon 워크플로 전체 파이프라인이 단일 YAML 파일로 정의됨(설정, 순차정의, 입출력담당)
- 워크플로 주요 노드 순서: ①스킬확인 ②소스크롤 ③슬러그파싱 ④리모션환경설정 ⑤플랜마크다운 생성 ⑥오디오/TTS, SFX, 음악 생성 ⑦영상합성 ⑧밸리데이션(QA) ⑨필요시 반복수정
- 노드간 산출물(artifact directory)로 파일/마크다운/오디오 등 전달, ID.output 구문으로 값 추출
- 워크플로내 반복, LOOP, 모델/에이전트 스왑, 인풋 검수, 병렬처리 등 주요 컴퓨팅 패턴 모두 지원
- 생성품 최종 검증은 별도 에이전트 세션에서 처리(‘동일 에이전트가 자기 결과 검수’ 피함)
- “워크플로 내에서 사람 개입 지점”도 쉽게 설정(‘human_in_the_loop: true’)

### 실제 라이브 데모: TI-84 Evo 계산기 기사를 활용한 AI 자동 영상 생성 과정을 상세 시연함

- 해커뉴스 1위에 오른 TI-84 Evo 계산기 신제품 기사 선택, 실제 Archon 워크플로로 영상 생성
- 단계별 처리: 기사 본문 파싱→요약/장면계획→내레이터 대본 생성→11Labs TTS 변환→음악/효과음→씬별 애니메이션 설계→Remotion SFX 렌더링→최종 영상 렌더→QA 일관성 검수
- 영상 내 주요 정보: 신형 프로세서, 50% 화면 확대, 16비트 컬러, USBC, 자동 피처 추적, 그래픽 개선, SAT 등 시험 승인 등 세부 사양까지 자동 삽입
- 렌더링 영상 결과, 미세한 TTS/효과음 오류(“likewoir” 등) 등장→실시간 피드백 통해 반복 수정 시도

### AI 음성 합성(Voice Cloning, TTS)에선 11 Labs 모델 선택, 파라미터 조정, 발음/톤 피드백이 성능에 큰 영향 줌

- 11 Labs 음성모델(V2, V3 등), “Speed, Stability, Similarity, Style Exaggeration” 등 파라미터 조절로 보이스톤 및 음성 일치 조정
- 실제 자신의 목소리 클론 실험: V3/기본 세팅에선 발음/톤 이상→V2/세부 조정에서 본인과 매우 가까운 음성 재현 성공
- Archon 워크플로 노드에서 환경변수로 TTS 옵션 수정 통한 자동화 가능, 단 hardcode 된 부분 있어 실험 필요
- 자동 생성 과정에서 “YAML” 등 약어/특수단어의 발음 오류 다수 발생, “와우 야물” 등 반복적 오류→텍스트 수정, 발음/pauses 추가, 재생성 및 11 Labs 콘솔 직접 입력 실험 병행
- 반복적으로 속도, 억양, SFX/배경음 조정하며 최적의 결과 도출 위한 LLM 피드백 구조 설계 가능

### 워크플로 반복(iteration), 검증(QA), 오류수정 과정이 자동 및 반자동으로 통합되어 신뢰도 높은 결과물을 만든다

- 생성 결과 검수 후 “Needs Iteration” 나오면 피드백 자동 대입→수정 후 재검증 루프
- 수작업이 필요할 경우, Archon 워크플로 외부에서도 Claude Code 등으로 node 수정/재생성 쉽게 가능
- 반복적 피드백 구조(예: SFX 변경, 음성 발음 개선, 속도/톤 조절 등) LLM에게 주면 워크플로가 직접 개선안 도출
- “워크플로에 Human-in-the-loop 추가”, 별도 Iteration 워크플로 분리 등 다양한 개선방안 적용 가능

### Remotion과 같은 주요 영상 합성 툴만 Skill로 바꿔주면 동일 워크플로를 쉽게 다른 툴로도 확장 가능하다

- Remotion 기반 영상합성을 Hyperframes(Claude 연동 지원, 무료)로 쉽게 전환 가능(실제 팀원 Thomas, 실제 워크플로 교체 사례 공유)
- Skill 기반 구조라 새로운 영상 엔진, 도구 추가에 직접적인 Archon 코드/워크플로 수정 불필요, 환경분리 및 확장 유리
- 예시: Remotion Best Practices Skill injection→Hyperframes Skill injection만 바꿔 적용

### Archon 설치, 환경설정, 로컬/클라우드 배포(도커, VPS), GitHub 연동은 매우 단순하며, 5분 안에 세팅 가능하다

- 설치법 : ①GitHub에서 워크플로 파일 내려받기, ②Cloud Code/코딩 에이전트 Skill 추가, ③필요시 TTS API Key(Cartisia/11 Labs) 등록하면 끝
- 깃허브 링크/설치가이드, Skill 디렉토리 등 상세 자료 제공(Thomas/Rasmus 개발 도움, 초기 저장소 공개/비공개 전환 실시간 처리)
- 로컬(localhost) 실행 구성뿐만 아니라 도커+VPS 통한 상시프로덕션 배포/웹 UI 사용도 지원(가이드 포함)
- Archon 자체 메모리/리소스 사용량 극소, 실제 워크플로에서 사용하는 LLM/도구에 따라 판이함(컨테이너 메모리 효율 설명)
- Slack/Discord/Github webhook 등 다양한 입력 트리거 지원, CLI/웹UI/Aqua Voice/AQC 등 인터페이스 자유자재

### 워크플로 내에서 다양한 외부 Skill, 지식그래프(Git Nexus 등) 및 툴을 필요 단계에 쉽게 연동할 수 있다

- Archon에 직접 물리적 통합이 아닌, Skill이나 MCP 서버로 원하는 외부 툴(Git Nexus 등)을 노드에만 조건부 연동해 사용
- 워크플로 내 특정 단계에서만 외부 Skill/지식그래프 추론 기능 활용 가능(예: “기획 단계에서만 Git Nexus로 전체 의존성 그래프 조회”)
- Git Nexus 등 다양한 오픈소스 툴, CLI Skill 형태로 공개된 풍부한 연동 지원(공식 Skill 디렉토리 등 예시 설명)
- context/resource 효율 위한 “플래너/임플리멘트/웰리데이션 분리(세션 분리)” 모델 구조 효율성 강조

### 현장 피드백/현실적 한계: LLM+TTS+SFX 자동화는 90%까지 자동화되나, 세밀한 미세조정은 반복적 수동 피드백 및 실험이 필요

- 11Labs 등 TTS 모델 한계점: 약어/YAML 등 특수발음 오류, SFX 미스매칭, 일부 무의미한 pause, 불자연스러운 억양
- 대량 자동 SFX 생성시 “미래적 효과음” 등 과장된 효과 남발→수정 피드백, 실제 사용자 경험 통해 반복 개선
- LLM+음성합성에서 속도/톤/음향 등 미세 조정을 위해 노드별 환경변수, 수동 재생성, 콘솔 직접 입력 등 다양한 교정방법 병행
- 90%까지는 자동화가 잘 되나 100%까지 품질 끌어올리려면 반복적인 사람 피드백 및 워크플로 보완이 필요함 솔직히 공유

### 실제 워크플로 라이브 성공 시연, 최종 결과물 및 향후 발전 방향(벤치마킹·모델 실험·플로우 리파인) 안내

- TI-84 Evo 영상→Archon 마케팅 영상 등 실시간 생성, 반복 피드백으로 음성/효과음/발음 이슈 개선
- 최종 영상 : 모든 아이콘, 음성, 애니메이션, 음악이 통합된 “클래식 마케팅 설명” 자동 생성 성공; 완전 자동화 워크플로 가능성 증명
- 추후 Opus 4.7, GPT-5.5, Quen 3.6 Plus 등 다양한 LLM 기반 벤치마크, 워크플로/Skill 조합 실험 예정 예고
- 실제 오픈소스 프로젝트인 Archon의 성장 전략, “두번째 뇌”와의 통합, 다양한 실전 예시(“Dark Factory” 등) 확장 지속 예정
- 커뮤니티 및 후속 라이브/워크숍/가이드 예고(다이나미스 연동 등), Archon 사용법 소개 자료 공개

### Archon 활용시 “긴 플로우는 Skill이 아닌 Workflow로”, 반복성과 신뢰성/확장성 모두 잡는 것이 핵심임을 재차 강조

- 복잡한 플로우는 단일 Skill로 처리 시 신뢰도·컨텍스트·토큰관리·반복수정 모두 어려움
- Archon 워크플로를 사용하면 과정 단위로 관리, 습관화, 재사용/병렬처리까지 일관된 엔지니어링 가능
- 실제 개발 생산성, 코드 베이스 자율진화(“Dark Factory”), 영상 생성 등 확장사례 실시간 공유
- Archon 및 AI 워크플로 자동화의 현주소, 실제 현장 경험과 함께 솔직·적나라하게 공유하며 영상 종료

---
