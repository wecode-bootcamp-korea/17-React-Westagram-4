import React, { Component } from "react";
import "./Login.scss";
import AppleImg from "../../../images/seunghyun/Appstore.png";
import GoogleImg from "../../../images/seunghyun/GooglePlay.png";
import facebookImg from "../../../images/seunghyun/facebook.png";
import { withRouter } from "react-router-dom";

class LoginSH extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleIdInput = (idEvent) => {
    console.log(idEvent.target.value);
    this.setState({
      id: idEvent.target.value,
    });
  };

  handlePwInput = (pwEvent) => {
    console.log(pwEvent.target.value);
    this.setState({
      pw: pwEvent.target.value,
    });
  };

  handleClick = () => {
    if (
      this.state.pw.length > 5 &&
      this.state.id.includes("@") &&
      this.state.id.length > 5
    ) {
      this.props.history.push("/main-sh");
    } else {
      alert("ID/Pw를 입력해 주세요!");
    }
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    const { id, pw } = this.state;

    return (
      <>
        <section className="mainBoxSection">
          <h1>Westagram</h1>
          <div className="inputBox">
            <input
              className="loginId"
              onChange={this.handleIdInput}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onKeyPress={this.pressEnter}
            ></input>
            <input
              className="loginPw"
              onChange={this.handlePwInput}
              type="password"
              placeholder="비밀번호"
              onKeyPress={this.pressEnter}
            ></input>
          </div>
          <button
            className={
              pw.length > 5 && id.includes("@") && id.length > 5
                ? "activationBtn"
                : "disabledBtn"
            }
            onClick={this.handleClick}
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
