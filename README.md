# 저기어때(JGUD) Project

**국내 숙박 예약 사이트 "[여기어때](https://www.goodchoice.kr/)"를 모티브로 한 프로젝트입니다.**

<p style='color: grey'>이 프로젝트는 여기어때 사이트를 참조하여 학습목적으로 만들었습니다.<p>

<br>

<img width="893" alt="스크린샷 2022-10-03 오후 4 27 31" src="https://user-images.githubusercontent.com/108171986/193522631-e9e5389d-0e20-4fa6-9b3a-8b50513fd864.png">

<br>

## 📆 1. 개발 기간 및 인원

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **개발 기간** : 2022.09.19 ~ 2022.09.30 (2주)

- **프론트엔드** : 박예선, 봉원희, 서지원, 이유나 (4명)

- **백엔드** : 오지호, 이윤재 (2명)

<br>

---

<br>

## 📈 2. 레포지토리 및 데이터 모델링

<br>

- **[팀 노션](https://www.notion.so/wecode/Team7-JGUD-895618b19f4941dabc8961ff0e1b16cf)**

- **[프론트엔드 GitHub](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team7-front)**

- **[백엔드 GitHub](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team7-back)**

<br>

**[dbdiogram 링크](https://dbdiagram.io/d/6327d7f90911f91ba5dbaa80)
![image](https://user-images.githubusercontent.com/108171986/193518846-9790ec9b-4bc5-41a3-b91f-caf8c05e2bf8.png)**

<br>

---

<br>

## ⚙️ 3. 사용 기술 및 파일 구조

<br>

### 3-1. 사용 기술

```
Front-end : JavaScript, React.js styled component, recoil
Back-end : JavaScript, Node.js, Express, bcrypt, JWT
Database : MySQL
HTTP : Postman
Common : Slack, Zep, Notion, Git&Github
```

### 3-2. 파일 구조

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── data
│   │   ├── accommodation
│   │   │   ├── accommodation.json
│   │   │   └── accommodationNoData.json
│   │   ├── detail
│   │   │   ├── notice.json
│   │   │   └── roomType.json
│   │   ├── my
│   │   │   ├── point.json
│   │   │   ├── reservationList.json
│   │   │   └── userInfo.json
│   │   └── nav
│   │       └── recommend.json
│   ├── images
│   │   ├── accommodation
│   │   │   └── ico_room.png
│   │   ├── detail
│   │   │   └── star.png
│   │   ├── favicon.svg
│   │   ├── logoBlue.svg
│   │   ├── logoWhite.svg
│   │   ├── main
│   │   │   ├── appDown
│   │   │   │   ├── appStore.png
│   │   │   │   └── google.png
│   │   │   ├── icon
│   │   │   │   ├── camping.png
│   │   │   │   ├── ghestHouse.png
│   │   │   │   ├── hotel.png
│   │   │   │   ├── koreanHouse.png
│   │   │   │   ├── motel.png
│   │   │   │   ├── mySpace.png
│   │   │   │   ├── payBack.png
│   │   │   │   └── pension.png
│   │   │   ├── main.png
│   │   │   └── news
│   │   │       ├── business.png
│   │   │       └── font.png
│   │   └── smile_icon.png
│   └── index.html
└── src
    ├── App.js
    ├── Router.js
    ├── atom.js
    ├── component
    │   ├── footer
    │   │   └── Footer.js
    │   ├── modal
    │   │   └── LogoutModal.js
    │   ├── nav
    │   │   ├── Nav.js
    │   │   ├── Nav.styled.js
    │   │   └── components
    │   │       ├── EmptyInputModal.js
    │   │       ├── MyModal.js
    │   │       ├── SeachModal.Styled.js
    │   │       └── SearchModal.js
    │   └── topbutton
    │       └── TopButton.js
    ├── index.js
    ├── index.scss
    ├── pages
    │   ├── accommodation
    │   │   ├── AccommodationList.js
    │   │   ├── AccommodationList.styled.js
    │   │   ├── components
    │   │   │   ├── Calendar.js
    │   │   │   ├── Calendar.styled.js
    │   │   │   ├── CheckItem.js
    │   │   │   ├── CustomSilder.js
    │   │   │   ├── LoadingSpinner.js
    │   │   │   ├── Map.js
    │   │   │   ├── NoData.js
    │   │   │   ├── OptionList.js
    │   │   │   ├── SideFilter.js
    │   │   │   ├── Thumbnail.js
    │   │   │   ├── Thumbnail.styled.js
    │   │   │   ├── TopFilter.js
    │   │   │   └── TopFilter.styled.js
    │   │   └── data
    │   │       ├── functions.js
    │   │       ├── options.js
    │   │       └── region.js
    │   ├── detail
    │   │   ├── Detail.js
    │   │   ├── Detail.styled.js
    │   │   └── components
    │   │       ├── AccommdationInfo.js
    │   │       ├── EventModal.js
    │   │       ├── Information.js
    │   │       ├── Review.js
    │   │       ├── ReviewContainer.js
    │   │       ├── ReviewContainer.stlyed.js
    │   │       ├── Room.js
    │   │       ├── Room.styled.js
    │   │       ├── RoomGuide.js
    │   │       ├── Slide.js
    │   │       ├── Slide.styled.js
    │   │       ├── SubjectSlide.js
    │   │       ├── SubjectSlide.styled.js
    │   │       ├── UseModal.js
    │   │       └── map.js
    │   ├── login
    │   │   ├── KaKaoLogin.js
    │   │   ├── Login.Styled.js
    │   │   └── Login.js
    │   ├── main
    │   │   ├── Main.js
    │   │   ├── Main.styled.js
    │   │   └── components
    │   │       ├── AppDown.js
    │   │       ├── BoxStyle.Styled.js
    │   │       ├── Event.js
    │   │       ├── EventSlide.js
    │   │       ├── MainLink.js
    │   │       └── News.js
    │   ├── mypage
    │   │   ├── MyPage.Styled.js
    │   │   ├── MyPage.js
    │   │   └── components
    │   │       ├── Coupons.js
    │   │       ├── DeleteModal.js
    │   │       ├── My.Styled.js
    │   │       ├── My.js
    │   │       ├── MyPages.Styled.js
    │   │       ├── NoReservation.js
    │   │       ├── PhoneTimer.js
    │   │       ├── Points.js
    │   │       ├── ReservationList.Styled.js
    │   │       └── ReservationList.js
    │   ├── reservation
    │   │   ├── Reservation.Styled.js
    │   │   ├── Reservation.js
    │   │   └── components
    │   │       ├── Main.Styled.js
    │   │       ├── Main.js
    │   │       ├── Sub.js
    │   │       └── SubmitModal.js
    │   ├── search
    │   │   └── Search.js
    │   └── signup
    │       ├── PhoneCheck.Styled.js
    │       ├── PhoneCheck.js
    │       ├── SignUp.Styled.js
    │       ├── SignUp.js
    │       ├── SignUpPage.Styled.js
    │       ├── SignUpPage.js
    │       └── Timer.js
    └── styles
        ├── responsive.js
        └── theme.js
```

<br>

---

<br>

## 🌟 4. 역할 및 구현 기능

<br>

### <프론트엔드>

<br>

- 박예선

  - 메인페이지
  - 검색페이지
  - 검색기능
  - 예약페이지

  <br>

- 봉원희

  - 카테고리페이지
  - 달력
  - 지도
  - 필터 기능

  <br>

- 서지원

  - 로그인
  - 회원가입
  - 마이페이지

  <br>

- 이유나

  - 상세페이지
  - 리뷰

  <br>
  <br>

### <백엔드>

<br>

- 오지호

  - 숙박관련API
  - 검색기능
  - 데이터 필터링
  - 예약데이터

  <br>

- 이윤재

  - 문자인증
  - 카카오인증
  - 회원가입
  - 로그인
  - 마이페이지
  - 리뷰

  <br>

---

  <br>

## 📽 5. 시연 영상

<br>

[![📎 유튜브 링크 (약 7분)](https://user-images.githubusercontent.com/108171986/193522631-e9e5389d-0e20-4fa6-9b3a-8b50513fd864.png)](https://youtu.be/6d540y6y6500)
