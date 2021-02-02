import React from "react";
import "./Main.scss";
import { withRouter } from "react-router-dom";
import "../../../Components/Nav/Nav";
import "../../../Components/Nav/Nav.scss";

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
      <>
        <div className="main-right">
          <div className="myProfile">
            <img
              className="pic"
              src="https://i.pinimg.com/originals/2b/53/aa/2b53aa45b761b66b554cdf52270f0be9.jpg"
            />
            <div className="profileID"></div>
            <p className="userID_right">ggiiiaa</p>
            <p className="sub-span">이미경/Gia Lee</p>
          </div>
        </div>

        <div className="wrap_main">
          <main className="insta_main">
            <section className="insta_section"></section>
            <div className="main_story">
              <ul className="story_ul">
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12uckmp6pklV7OFFBtsRWjyueXcJu9lYNFA&usqp=CAU"
                  />
                  <br />
                  <span className="story_name">내 스토리</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://sports.chosun.com/news/html/2020/07/03/2020070401000364600022041.jpg"
                  />
                  <br />
                  <span className="story_name">Kimtaehee</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://post-phinf.pstatic.net/MjAxODA5MTJfMTIy/MDAxNTM2NzE1MjA5NjIw.PymKojDsaVzsTdt-oLoAI3qRaQnpgIA6Iah4HkNK5agg.1qk_inGQSP39EYcYa_NO49ngaCBRuGbTGp5yqqYJmbsg.JPEG/%EC%A1%B0%EC%9D%B8%EC%84%B1.jpg?type=w1200"
                  />
                  <br />
                  <span className="story_name">Insung_jo</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://pbs.twimg.com/profile_images/1209538348538183681/fVvJNrDT_400x400.jpg"
                  />
                  <br />
                  <span className="story_name">gangjun</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTRfMTIy/MDAxNTcxMDEyMjU2MDgz.U-sIUb_qmr6nV7RqJLVzyHFnNfL0T85MWLGj4AKa-FQg.1ykV2gW3kAUP352fFM0HKca90z00Dvv3hCcrYF11CgAg.JPEG.risingkeyword/2019092309144009849d3244b4fed17373200133.jpg?type=w800"
                  />
                  <br />
                  <span className="story_name">sunhoooo</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://i.pinimg.com/originals/9c/98/14/9c9814d84d065a8479b6ff055b1ac8ed.jpg"
                  />
                  <br />
                  <span className="story_name">yeonnee</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://pbs.twimg.com/profile_images/1071027087480283136/siFjhDHF_400x400.jpg"
                  />
                  <br />
                  <span className="story_name">jinyyy</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://topclass.chosun.com/news_img/1502/1502_008.jpg"
                  />
                  <br />
                  <span className="story_name">_woo_bin</span>
                </li>
                <li className="story_list">
                  <img
                    className="story_image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqShCQJwjGzn784JuV0DhBWqKkx2MMQO9Ojg&usqp=CAU"
                  />
                  <br />
                  <span className="story_name">minna</span>
                </li>
              </ul>
            </div>
            <div className="main">
              <div className="main_header">
                <header>
                  <div className="profile">
                    <img
                      className="profile_img"
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
                  <div className="comment_section">
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
                    </ul>

                    <div className="time_log">
                      <span>37분 전</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addcomment1">
                <div>
                  {this.state.commentList.map((comment) => (
                    <li className="list">
                      <span className="userName">{this.state.user}</span>
                      {comment}
                    </li>
                  ))}
                </div>

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
              <div className="main">
                <div className="main_header">
                  <header>
                    <div className="profile">
                      <img
                        className="profile_img"
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
                    src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MDVfMjAy/MDAxNTI1NTMyMDAzNzQw.8DwTO3qhGzyogNQsiJhBW5NjffDsE2S3GrOS2UgTSF4g.NzyyeOanz-YpsAd45D3rl7tQefMpkIYSUJ5Y-WBARcYg.JPEG.comeinto_/IMG_1894.jpg?type=w800"
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
                    <div className="comment_section">
                      <ul className="comments">
                        <li className="comment_ul">
                          <span>
                            <span className="comment_userID">zzzzi_min</span>
                            <span className="comment2">
                              &nbsp;&nbsp;나도 여행 가고 싶어ㅠㅠ 코로나 싫어
                            </span>
                          </span>
                          <div className="heart2">
                            <i className="far fa-heart"></i>
                          </div>
                        </li>
                      </ul>
                      <div className="time_log">
                        <span>37분 전</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="addcomment1">
                  <input
                    type="text"
                    className="textarea1"
                    placeholder="댓글 달기..."
                  />
                  <button type="submit" className="submit-comment" disabled>
                    게시
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default MainMK;
