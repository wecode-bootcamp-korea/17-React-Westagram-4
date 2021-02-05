import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppleImg from "../../../images/seunghyun/Appstore.png";
import GoogleImg from "../../../images/seunghyun/GooglePlay.png";
import facebookImg from "../../../images/seunghyun/facebook.png";
import "./Login.scss";

class LoginSH extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  changeHandleIdInput = (idEvent) => {
    console.log(idEvent.target.value);
    this.setState({
      idValue: idEvent.target.value,
    });
  };

  changeHandlePwInput = (pwEvent) => {
    console.log(pwEvent.target.value);
    this.setState({
      pwValue: pwEvent.target.value,
    });
  };

  handleLoginBtnClick = () => {
    const { idValue, pwValue } = this.state;
    if (pwValue.length > 5 && idValue.includes("@") && idValue.length > 5) {
      /* 성준님 : "http://10.58.1.122:8000/account/login" */
      /* 현수님 : "http://10.58.2.243:8000/user/login" */
      fetch("http://10.58.1.122:8000/account/login", {
        method: "POST",
        body: JSON.stringify({
          email: idValue,
          password: pwValue,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("======================================");
          console.log("백엔드에서 오는 응답 메시지: ", result);
          /* 로그인 : localStorage.setItem("token", result.access_token) */
          /* 회원가입 : result.message */
          localStorage.setItem("token", result.token);
        });
      this.props.history.push("/main-sh");
    } else {
      alert("ID/Pw를 입력해 주세요!");
    }
  };

  loginEnterKeyEvent = (e) => {
    if (e.key === "Enter") {
      this.handleLoginBtnClick();
    }
  };

  render() {
    const { idValue, pwValue } = this.state;

    return (
      <>
        <section className="mainBoxSection">
          <h1>Westagram</h1>
          <div className="inputBox">
            <input
              className="loginId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.changeHandleIdInput}
              onKeyPress={this.loginEnterKeyEvent}
            ></input>
            <input
              className="loginPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.changeHandlePwInput}
              onKeyPress={this.loginEnterKeyEvent}
            ></input>
          </div>
          <button
            className={
              pwValue.length > 5 && idValue.includes("@") && idValue.length > 5
                ? "activationBtn"
                : "disabledBtn"
            }
            onClick={this.handleLoginBtnClick}
          >
            로그인
          </button>
          <div className="divider">
            <div className="dividerBox"></div>
            <div className="dividerText">또는</div>
            <div className="dividerBox"></div>
          </div>
          <button className="facebook">
            <img className="facebookIcon" alt="facebook" src={facebookImg} />
            <span>Facebook으로 로그인</span>
          </button>
          <a
            className="signUp"
            alt="reset password"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </section>

        <section className="newAccountBox">
          <span>계정이 없으신가요?&nbsp;</span>
          <a
            alt="신규가입하기"
            href="https://www.instagram.com/accounts/emailsignup/"
          >
            가입하기
          </a>
        </section>

        <section className="appDownloadSection">
          <h2>앱을 다운로드하세요.</h2>
          <div className="appDownloadBtn">
            <a
              alt="앱스토어 설치 바로가기"
              href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
            >
              <img alt="앱스토어" src={AppleImg} />
            </a>
            <a
              alt="구글플레이 설치 바로가기"
              href="src/pages/Login/GooglePlay.png"
            >
              <img alt="구글플레이스토어" src={GoogleImg} />
            </a>
          </div>
        </section>

        <nav className="footerSection">
          <div className="footerStart">
            <span>소개</span>
            <span>블로그</span>
            <span>채용 정보</span>
            <span>도움말</span>
            <span>API</span>
            <span>개인정보처리방침</span>
            <span>약관</span>
            <span>인기 계정</span>
            <span>해시태그</span>
            <span>위치</span>
          </div>
          <div className="footerEnd">
            <div>한국어</div>
            <svg
              className="footerIcon"
              aria-label="아래쪽 V자형 아이콘"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
            </svg>
            <div>© 2021 Instagram from Facebook</div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(LoginSH);
