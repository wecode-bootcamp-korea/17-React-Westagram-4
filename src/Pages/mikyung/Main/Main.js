import React from "react";
import "./Main.scss";
import Nav from "../../../Components/Nav/Nav";
import Stories from "./Stories";
import Comment from "../Comment/Comment";

class MainMK extends React.Component {
  state = {
    text: "",
    user: "ggiiiaa ",
    commentList: [],
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleClick = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.text),
      text: "",
    });
  };

  render() {
    return (
      <div className="main1">
        <Nav />
        <Stories />

        <div className="main-right">
          <div className="myProfile">
            <img
              className="pic"
              src="https://i.pinimg.com/originals/2b/53/aa/2b53aa45b761b66b554cdf52270f0be9.jpg"
              alt="pic"
            />
            <div className="profileID"></div>
            <p className="userID_right">ggiiiaa</p>
            <p className="sub-span">이미경/Gia Lee</p>
          </div>
        </div>

        <div className="wrap_main">
          <main className="insta_main">
            <section className="insta_section"></section>
            <div className="main">
              <div className="main_header">
                <header>
                  <div className="profile">
                    <img
                      className="profile_img"
                      alt="pic"
                      src="https://i.pinimg.com/originals/16/60/b2/1660b2ae8ce231bf168195c4abcba1f7.png"
                    />
                    <span className="profileID">ggiiiaa</span>
                  </div>
                  <a className="nav_link" href="mainpage.html">
                    <i class="fas fa-ellipsis-h"></i>
                  </a>
                </header>
              </div>
              <div className="main_image">
                <img
                  className="main_photo"
                  alt="pic"
                  src="https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7upb/image/4r8RrHruiCoLCysl0n0k6i6aeyY.jpg"
                />
              </div>
              <div className="mainreaction">
                <div className="icons-react">
                  <div className="icons_left">
                    <i class="far fa-heart fa-2x"></i>
                    <i class="far fa-comment fa-2x"></i>
                    <i class="far fa-paper-plane fa-2x"></i>
                  </div>
                  <div className="icon_right">
                    <i class="far fa-bookmark fa-2x"></i>
                  </div>
                </div>
                <div className="reaction">
                  <div className="liked_people">
                    <p className="liked">좋아요 2,342개</p>
                  </div>
                  <div className="description">
                    <p>
                      <span className="article_userID">ggiiiaa</span>
                      <span className="content">
                        &nbsp;&nbsp;#쿠바 여행 가고 싶다~
                      </span>
                    </p>
                  </div>
                  <Comment
                    commentList={this.state.commentList}
                    user={this.state.user}
                  />
                  {/* <div className="comment_section">
                    <ul className="comments">
                      <li className="comment_ul">
                        <span>
                          <span className="comment_userID">zzzzi_min</span>
                          <span className="comment2">
                            &nbsp;&nbsp;나도 여행 가고 싶어ㅠㅠ 코로나 싫어
                          </span>
                        </span>
                        <div className="heart2">
                          <i class="far fa-heart"></i>
                        </div>
                      </li>
                      <li className="comment_ul">
                        <span>
                          <span className="comment_userID">mini__insta</span>
                          <span className="comment2">
                            &nbsp;&nbsp;여기가 어디야? 너무 예쁘다!
                          </span>
                        </span>
                        <div className="heart2">
                          <i class="far fa-heart"></i>
                        </div>
                      </li>
                      {this.state.commentList.map((comment) => (
                        <li className="comment_ul">
                          <span>
                            <span className="comment_userID">
                              {this.state.user}
                            </span>
                            <span className="comment2">{comment}</span>
                          </span>
                          <div className="heart2">
                            <i class="far fa-heart"></i>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="time_log">
                      <span>37분 전</span>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="addcomment1">
                <div>
                  {/* {this.state.commentList.map((comment) => (
                    <li className="list">
                      <span className="userName">{this.state.user}</span>
                      {comment}
                    </li>
                  ))} */}
                  <input
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyPress}
                    className="textinput"
                    type="text"
                    placeholder="댓글 달기..."
                    value={this.state.text}
                    name="text"
                  />
                  <button className="submit-comment" onClick={this.handleClick}>
                    게시
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default MainMK;
