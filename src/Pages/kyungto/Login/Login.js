import React from "react";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      pwValue: "",
    };
  }

  handleIdInput = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="logInmainPage">
        <h1>westagram</h1>
        <div className="inputContainer">
          <input
            onChange={this.handleIdInput}
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="userPassword"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <button
          className={
            this.state.nameValue.includes("@") && this.state.pwValue.length > 5
              ? "loginButton activeBtn"
              : "loginButton inactiveBtn"
          }
          type="button"
        >
          로그인
        </button>

        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default Login;
