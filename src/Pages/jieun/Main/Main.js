import React from 'react';
import "./Main.scss";


class Main extends React.Component {
    constructor(){
      super();
      this.state = {
        value: '',
        commentList:[]
      }
    }

   
    handleAllInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
    handleKeypress =(e) =>{
      if(this.state.comment && e.keyCode === "Enter" ) {
        handleSubmit();
      }
    }

    handleSubmit = () => {
      this.setState({
        commentList: this.state.commentList.concat(this.state.text),
        text: ''
      })
    }

  render() {
    return (
  <div className='main'>
    <div className= 'navBar'>
    <i class="fab fa-instagram fa-lg" /> <span className='westa'>westagram</span>
        <input className = "search" type="text" />
        <i className="far fa-compass fa-lg" />
        <i className="far fa-heart fa-lg" />
        <i className="far fa-user fa-lg" />
    </div>
    <div className='userIds'>
    <img alt="jennierubyjane님의 프로필 사진" className="storiesName"  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71533411_449636125903525_7464596574253875200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=HPpFjLBg2tkAX9J7BmS&amp;tp=1&amp;oh=a8f7b392664f54359bdec2fbaba61adf&amp;oe=603BEAAB" />
      <img alt="ineed_water님의 프로필 사진" className="storiesName"  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118745704_1164499573924376_7904986463005430754_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=h1nvgeIE4i8AX_Jov8T&amp;tp=1&amp;oh=d6a3903f57841a09459bdf2a0afc7997&amp;oe=603BCFAE" />
      <img alt="roses_are_rosie님의 프로필 사진" className="storiesName" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/120911233_113942167015019_7757793538086741578_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=lYOylV80sVcAX8YSh4B&amp;tp=1&amp;oh=d5f689b40df9c7e4ff240b89bb56b130&amp;oe=603CB9B9" />
      <img alt="lilyjcollins님의 프로필 사진" className="storiesName" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11296893_478580908977658_2053429590_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=1RCP-8WUbRcAX-FVyjJ&amp;oh=309394196593d1cdeb354a8ad52eab6a&amp;oe=603CD4E4" />
      <img alt="kendalljenner님의 프로필 사진" className="storiesName"  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/135811429_139036817943437_5718038198453340319_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=-sTP6V5bFh8AX9LovZa&amp;tp=1&amp;oh=2e1dde69737a6db3be63707a5d625849&amp;oe=603CFD7D" />
      <img alt="violetta님의 프로필 사진" className="storiesName"  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/21690159_170043630238587_5602868108457934848_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=kjZMa_pTsisAX9mMGy3&amp;tp=1&amp;oh=137affa8ff2034e64d90b7700879a836&amp;oe=603BFB42" />
    </div>
    <div className='feeds'>
     <article> 
        <img src="/image/travel.jpg" alt="asd" classNname="feedImage" />
         <div className='Container'>
            <div className='commentEmoticons'>
              <i className="far fa-heart fa-lg" />
              <i className="far fa-comment fa-lg" />
              <i className="far fa-paper-plane fa-lg" />
              <i className="far fa-bookmark fa-lg" />
              <p>
                <span classNname ='otherUserName'>lisa0615</span>
                님 외 4명이 좋아합니다.
                <p>
              <span classNname='userId'> jenna8447</span>
               여행 가고 싶다아아
              </p>
              </p>
            </div>
        <div className='commentContainer'>            
            <input type="text" name='comment' placeholder="댓글 달기..." />
            <button  className ="btn">게시</button>
        </div>
         </div>
      </article> 
    </div>
    <div className= 'main-right'>
        <div className='stories'>
            <img src=".public\image\travel.jpg" alt="asdd" />
            <img src="public\image\travel.jpg" alt="aa" />
            <img src="public\image\travel.jpg" alt="aa" />
        </div>
        <div className='recommandation'>
            <img src="public\image\travel.jpg" alt="as" />
            <img src="public\image\travel.jpg" alt="d" />
            <img src="public\image\travel.jpg" alt="a" />
        </div>
    </div>
  </div>
    )
}
};

export default Main;