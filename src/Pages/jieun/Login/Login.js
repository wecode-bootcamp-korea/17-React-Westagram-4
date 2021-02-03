import React from 'react';
import "./Login.scss";
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';


class Login extends React.Component {
   constructor(){
     super();
     this.state = {
       color: 'black',
       id : "",
       pw : ""
     }
   }

   handleAllInput = (e) => {
     this.setState({
       [e.target.name] : e.target.value
     })
    //  console.log(e.target.id, e.target.value);
   }

   isLogin =()=> {
    ( this.state.id.includes("@") && this.state.pw.length >= 5) 
    ? this.setState({buttonColor:'btn'})
    : this.setState({buttonColor:'btn2'})
   }
   gotoMain = () => {
    this.props.history.push('/main');
 }
   render() {
     //ES6 객체, 배열, 구조 분해 할당
     //const {idValue} = this.state; --> this.state.idValue대신 idValue로 사용 가능
       return (
       <div className= "wrapper">
       <div className="login_form" onKeyUp ={this.isLogin}>
        <h1 style={{color: this.state.color}}>westagram</h1>  
        <input onChange={this.handleAllInput} name ='id' type= 'text'  placeholder='전화번호, 사용자 이름 또는 이메일'/>
        <input onChange={this.handleAllInput} name= 'pw'  type='password'  placeholder="비밀번호" /> 
        <button type="button"  onClick={this.gotoMain} className= {this.state.buttonColor}  > 로그인</button>
         <div className='last'>
           <a href="#">비밀번호를 잊으셨나요?</a>
         </div>
       </div>
     </div> 
  )
 }
}

export default withRouter(Login);

 //  handleIdInput = (e) => {
  //    this.setState({
  //     idValue : e.target.value,
  //    })
  //   }
  //    handlePsInput = (e) => {
  //     this.setState({
  //      psValue : e.target.value,
  //     })
  //  }

