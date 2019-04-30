# Triple 코딩테스트

### 서론
안녕하세요, 프론트엔드 개발자 장민형 입니다.  

> 기간 : 18/04/24 ~ 18/05/01  
> 대표 라이브러리 : React, Next.js, Typescript, Styled Components

요구사항에 비해 오버스팩이며 사용하지 않는 부분이 있습니다.  
하지만 우대사항에 적혀있는 스팩들을 공부하며, 개발 가능한 부분을 알려드리고자 도입하였습니다.

또한, 요구사항은 개발 능력을 표출하기에 아쉬운 점이 있어서 레이아웃을 더 추가한 점 양해 부탁드립니다.  

( Next, Typescript+React 는 처음 사용해봐서 시간이 오래걸렸네요.. )

읽어주셔서 감사합니다!

### 실행 발법
```bash
npm install
npm run dev
```
or
```bash
yarn install
yarn dev
```


### 개발(파일) 설명
```
/pages
  _app : 공용으로 사용하는 레이아웃을 관리합니다.  
  _document : CSS 로딩보다 Render가 먼저 이루어져 깜빡인 현상이 발생하여, 스타일을 서버에서 만들어 넣어주게 하였습니다.
  index : triple.guide 에서 확인했을 때 바로 /intro 로 리다이렉트 해주는 부분을 반영했습니다.
  intro : 이번 코딩 테스트의 메인 페이지입니다.

/componenets
  /common
    BaseHeader : 기본 헤더입니다.
    FrameHeader : 스크롤 시 보이게 되며, 고정되어 따라다니는 헤더입니다.
    PhoneFrame : Triple 사이트에서 여러번 사용되는 레이아웃이라서 별도로 컴포넌트화 했습니다.
    ReponsiveLayout : 공용으로 사용되는 부분을 따로 작성하였습니다.
                      CSS를 각 파일마다 작성하려 했으나, 반응형이 아니기에 우선 파일하나로 관리하였습니다.

  HeadingSection : 1번째 페이지입니다.
  BoastSection : 이번 과제의 핵심인 2번째 페이지입니다.
                 react-countup에서 이벤트 실행 방법이 모든 객체에 들어가야하는 부분이 마음에 안들어
                 애니메이션이 작동하는 경우, LayoutFrame에서 이벤트를 리턴하여 렌더링 되게 하였습니다.
  CountrySection : 이미지마다 연관성이 없어 그대로 작성하였습니다.

최소 화면폭에 맞춰 Header, Body는 1200px 이상부터 사이즈가 조절됩니다.
이미지 로딩이 완료된 후 애니메이션이 시작되는 부분은 따로 추가하지 않았습니다.
```
## 라이브러리 구성

### Next.js

- 설치자료 : [react-ssr-next-js](https://holywater-jeong.github.io/blog/react-ssr-next-js/)

### Typescript

- 설치자료 : [@zeit/next-typescript](https://www.npmjs.com/package/@zeit/next-typescript)
- 컴포넌트 가이드 참고 : [FunctionComponent](https://fettblog.eu/typescript-react/components/)

### CountUp
- 설치자료 : [react-countup](https://github.com/glennreyes/react-countup)

### Waypoint
- 설치자료 : [react-waypoint](https://github.com/brigade/react-waypoint)

### Github Page

- 참고자료 : [Next-gh-page-example](https://github.com/thierryc/Next-gh-page-example)
- 이미지 로드 : [next-images](https://www.npmjs.com/package/next-images)