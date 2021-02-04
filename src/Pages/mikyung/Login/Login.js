import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class LoginMK extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      id: "",
      pw: "",
      islogin: false,
    };
  }

  loginEnable = () => {
    if (this.state.id.includes("@") && this.state.pw.length > 6) {
      console.log(this.state.id.includes("@"));
      console.log("hi");
      this.setState({
        islogin: true,
      });
    }
  };

  handleIdColor = (e) => {
    this.setState({
      color: "pink",
      id: e.target.value,
    });
  };

  handlePwColor = (e) => {
    this.setState({
      color: "pink",
      pw: e.target.value,
    });
  };

  goToMain = () => {
    /*     fetch("http://10.58.1.:8000/user/user", {
      method: "POST",
      body: JSON.stringify({
        name: "",
        email: this.state.id,
        phone_number: "",
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result)); */
    this.props.history.push("/main-mk");
  };

  render() {
    return (
      <>
        <div className="first_div">
          <h1 style={{ color: this.state.color }}>Westagram</h1>
          <input
            onChange={this.handleIdColor}
            onKeyUp={this.loginEnable}
            type="text"
            className="input_login"
            name="userID"
            id="userID"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwColor}
            onKeyUp={this.loginEnable}
            type="password"
            className="input_login"
            name="userPW"
            id="userPW"
            placeholder="비밀번호"
          />
          <button
            className={this.state.islogin ? "btn_login" : "btn_login2"}
            onClick={this.goToMain}
          >
            {"로그인"}
          </button>
          <div className="or_box">
            <span className="or_under">또는</span>
          </div>
          <div className="fb">
            <a href="#" className="fb_a">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII="
                width="16px"
              />
              <span className="facebook_login"> Facebook으로 로그인</span>
            </a>
          </div>
          <a href="#">
            <span className="button_forgot">비밀번호를 잊으셨나요?</span>
          </a>
        </div>
        <div className="second_div">
          <span className="ask_account">계정이 없으신가요? </span>
          <a href="#">
            <span className="sign_up">&nbsp;가입하기</span>
          </a>
        </div>
        <div className="third_div">
          <p className="download_app">앱을 다운로드 하세요.</p>
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            width="136px"
            height="40px"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            width="136px"
            height="40px"
          />
        </div>
      </>
    );
  }
}

export default LoginMK;
