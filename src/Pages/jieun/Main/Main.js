import React from "react";
import "./Main.scss";
import AddComment from "./AddComment";
import allImages from "../../../images/jieun/allImages";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentList: [],
    };
  }
  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.comment),
      comment: "",
    });
  };
  handleKeypress = (e) => {
    if (this.state.comment && e.key === "Enter") {
      this.handleSubmit();
    }
  };
  render() {
    return (
      <div className="Container">
        <div className="nav">
          <div className="navContainer">
            <div className="logoContainer">
              <img
                className="instagramIcon"
                alt="Instagram Icon"
                src={allImages.Instagram}
              />
            </div>
            <div className="searchBar">
              <input className="search" type="text" />
              <div className="searchPlaceholder">
                <img
                  className="searchIcon"
                  alt="search icon"
                  src={allImages.search}
                />
                <span>검색</span>
              </div>
            </div>
            <div className="navIcons">
              <a href="https://www.instagram.com">
                <img className="home" alt="home" src={allImages.home} />
              </a>
              <img className="send" alt="send" src={allImages.send} />
              <img className="compass" alt="compass" src={allImages.compass} />
              <img className="heart" alt="heart" src={allImages.heart} />
              <img className="user" alt="user" src={allImages.user} />
            </div>
          </div>
        </div>

        <div className="stories">
          <div className="userStory">
            <div className="userInfo">
              <img
                alt="jennierubyjane님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71533411_449636125903525_7464596574253875200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=HPpFjLBg2tkAX9J7BmS&amp;tp=1&amp;oh=a8f7b392664f54359bdec2fbaba61adf&amp;oe=603BEAAB"
              />
              <div className="userId">
                <span>jennierubyjane</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="ineed_water님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118745704_1164499573924376_7904986463005430754_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=h1nvgeIE4i8AX_Jov8T&amp;tp=1&amp;oh=d6a3903f57841a09459bdf2a0afc7997&amp;oe=603BCFAE"
              />
              <div className="userId">
                <span>ineed_water</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="roses_are_rosie님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/120911233_113942167015019_7757793538086741578_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=lYOylV80sVcAX8YSh4B&amp;tp=1&amp;oh=d5f689b40df9c7e4ff240b89bb56b130&amp;oe=603CB9B9"
              />
              <div className="userId">
                <span>roses_are_rosie</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="lilyjcollins님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11296893_478580908977658_2053429590_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=1RCP-8WUbRcAX-FVyjJ&amp;oh=309394196593d1cdeb354a8ad52eab6a&amp;oe=603CD4E4"
              />
              <div className="userId">
                <span>lilyjcollins</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="kendalljenner님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/135811429_139036817943437_5718038198453340319_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=-sTP6V5bFh8AX9LovZa&amp;tp=1&amp;oh=2e1dde69737a6db3be63707a5d625849&amp;oe=603CFD7D"
              />
              <div className="userId">
                <span>kendalljenner</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="violetta님의 프로필 사진"
                className="storiesName"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/21690159_170043630238587_5602868108457934848_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=kjZMa_pTsisAX9mMGy3&amp;tp=1&amp;oh=137affa8ff2034e64d90b7700879a836&amp;oe=603BFB42"
              />
              <div className="userId">
                <span>violetta</span>
              </div>
            </div>
            <div className="userInfo">
              <img
                alt="lilyrose_depp님의 프로필 사진"
                className="storiesName"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/23734083_1731207426953786_5233224170489249792_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VWUXdOfKZO0AX-I3Gjd&tp=1&oh=004571eb896b4f01169945e7d1d0e6e4&oe=605155EC"
              />
              <div className="userId">
                <span>lilyrose_depp</span>
              </div>
            </div>
          </div>
        </div>

        <header>
          <div className="feedUserId">
            <p>
              <img className="user" alt="user" src={allImages.user} />
              <span>jenna8447</span>
            </p>
          </div>
        </header>

        <article>
          <div className="feeds">
            <img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/61554600_364582967738413_1402233382815416988_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=KQx8hygvLysAX8vxkI0&tp=1&oh=52e6a868793caffc212c08d6c4f61ca4&oe=604EF3B3"
              alt="asd"
              className="feedImage"
            />

            <section>
              <div className="feedIcons">
                <div className="feedIconsLeft">
                  <a href="https://www.instagram.com">
                    <img className="heart" alt="heart" src={allImages.heart} />
                  </a>
                  <a href="https://www.instagram.com">
                    <img className="chat" alt="chat" src={allImages.chat} />
                  </a>
                  <a href="https://www.instagram.com">
                    <img className="send" alt="send" src={allImages.send} />
                  </a>
                </div>
                <div className="feedIconsRight">
                  <img
                    className="bookmark"
                    alt="send"
                    src={allImages.bookmark}
                  />
                </div>
              </div>

              <div className="commentContainer">
                <p className="howManyLikes">200 Likes </p>

                <p>
                  <span className="userId"> jenna8447</span>
                  she's twentea
                </p>
                <div>
                  {this.state.commentList.map((comment) => {
                    return <AddComment comment={comment} />;
                  })}
                </div>
              </div>
            </section>

            <div className="comment">
              <input
                onKeyPress={this.handleKeypress}
                value={this.state.comment}
                onChange={this.handleAllInput}
                type="text"
                name="comment"
                placeholder="댓글 달기..."
              />
              <button onClick={this.handleSubmit} className="btn">
                게시
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Main;
