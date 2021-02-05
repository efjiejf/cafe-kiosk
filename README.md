# Cafe Kiosk 개발

현재 메가 커피에서 실제로 사용하는 Easy Kiosk를 바탕으로 UI를 클론하였으며 키오스크의 기본 기능을 구현하였다.

## 구현 방향

  1. Bundler(WebPack), Transfiler(Babel) 도구를 활용하여 JS, SCSS 파일을 bundling, transfiling 프로젝트에 임한다.

  2. DOM 조작 및 이벤트 처리

  3. axios를 활용한 비동기 통신 및 비동기 함수 활용

  4. express 기반의 페이크 서버 활용

  5. Git flow 정책으로 branch 생성, Pull request를 통해 Git branch를 활용한 개발 방식 활용

  6. M.V.C 패턴을 활용한 파일 모듈화

<br>

## UI 디자인

UI 디자인은 메가커피 성수역점의 Easy Kiosk를 클론한다.

**Design** — UI는 header main footer 세 영역을 중심으로 UI를 디자인합니다.

- 프로토타입 (개발에 요구되는 사항을 시뮬레이션)
- 데스크탑 UI ( 960px+ )
- 웹 스타일링 (CSS, SCSS)

> Desktop UI

![image](https://user-images.githubusercontent.com/56425514/107023732-6043db00-67ea-11eb-85df-b906b2610525.png)

<br>

## 개발

**Developer** — 제작된 UI를 토대로 내부 기능들을 개발합니다.

- 코딩에 적합한 Visual Studio Code 도구 활용
- 인터랙션 프로그래밍 (OOJS + DOM Script)
- 소스 버전 관리 (Git)
- 팀 컬래버레이션 (GitHub)

<br>

> 초기 화면
  - 초기 화면이며 클릭 시 메인 화면으로 진입한다.
![image](https://user-images.githubusercontent.com/56425514/107027114-0a256680-67ef-11eb-9024-9f75d390c94a.png)

> 메인 화면
  - 메인 화면은 header, nav, main, footer로 구성되어 있다.
  - header는 초기 화면으로 돌아가는 home 버튼과 메뉴 추가 버튼으로 구성된다.
  - nav는 각각 정해진 카테고리에 따라 음료 정보를 랜더한다.
  - main은 랜더된 음료를 눌러 옵션 추가 창으로 진입이 가능하다.
  - footer는 주문된 목록과 전체 삭제, 선택한 상품 수량, 총 결제 예정 금액 및 결제 버튼을 제공한다. 주문 목록이 존재한다면 unload 이벤트 발생 시 unload 진행 여부를 확인한다.
![image](https://user-images.githubusercontent.com/56425514/107027136-10b3de00-67ef-11eb-89ef-d71666629dcd.png)

> 신규 메뉴 추가 화면
  - 신규 메뉴 추가 모달은 모든 입력 정보에 대해 유효성 검사를 진행하며 모두 통과해야만 저장할 수 있다.
  - 메뉴 추가 중 unload 이벤트 발생 시 unload 진행 여부를 확인한다.
![image](https://user-images.githubusercontent.com/56425514/107027175-18738280-67ef-11eb-9379-012c4955e15e.png)

> 주문 시 옵션 추가 화면
  - 옵션 추가 모달은 취소 뿐 아니라 외부 화면 클릭 이벤트 시 벗어날 수 있다.
  - 주문 담기 버튼 클릭 시 주문 내역으로 해당 주문 정보가 저장된다.
![image](https://user-images.githubusercontent.com/56425514/107027203-21fcea80-67ef-11eb-9fde-d9a0dd70628a.png)

> 주문 내역 결제 확인 시
  - 주문 내역 결제 모달은 취소 뿐 아니라 외부 화면 클릭 이벤트 시 벗어날 수 있다.
  - 확인 버튼 클릭 시 페이지가 unload되며 초기화면으로 돌아간다.
![image](https://user-images.githubusercontent.com/56425514/107027246-350fba80-67ef-11eb-9bf8-8e54bdd427c0.png)

<br>

> 팀원
- 조장: 김연구
- 조원: 최용훈

>Repo link
https://github.com/yg-0103/cafe-kiosk
> 발표 요약 자료
https://slides.com/nyong/deck