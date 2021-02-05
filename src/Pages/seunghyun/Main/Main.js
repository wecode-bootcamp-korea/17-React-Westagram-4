import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Comment from "./Comment/Comment";
import "./Main.scss";

class MainSH extends Component {
  render() {
    return (
      <main className="mainLayout">
        <Nav />
        {/* <nav className="navigationBar">
          <img
            className="navIcon"
            alt="logo"
            src="/Users/seunghyunyoo/OneDrive/coding/wecode/wecode_westagram/westagram-frontend/students/17th/seunghyunyoo/img/mainpage/logo.png"
          />
          <div className="line" />
          <div className="logo">Westagram</div>
          <input type="search" placeholder="검색" />
          <img
            className="navIcon"
            alt="GPS"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="navIcon"
            alt="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="navIcon"
            alt="mypage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </nav> */}
        <section className="mainPage">
          <div className="feedBox">
            <article>
              <div className="feedIdBox">
                <span className="feedIdImg">logo</span>
                <span className="feedId">wecode-bootcamp</span>
              </div>
              <img
                className="feedImg"
                alt="feed"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/139295517_1048459365666935_3810822540657450701_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=e3lpERB4J6IAX-Yx9Ec&tp=1&oh=8b10769472b68f3d6a3dc9d83838d3c4&oe=6038A8CB"
              />
              <img
                className="feedIcon"
                alt="heart icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="feedIcon"
                alt="reply icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="feedIcon"
                alt="download icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <div>
                <span>img</span>
                <span>comment</span>
              </div>
              <Comment userId="idProps" />
            </article>
          </div>
          <aside>
            <div className="myId">ID_value</div>
            <div className="storyBox">storyBox</div>
            <div className="followBox">FollowBox</div>
          </aside>
        </section>
      </main>
    );
  }
}

export default /* withRouter */ MainSH;
