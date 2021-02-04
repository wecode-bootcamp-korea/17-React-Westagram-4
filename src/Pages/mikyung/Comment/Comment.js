import React from "react";
import "../Comment/Comment.scss";

class Comment extends React.Component {
  state = {};

  render() {
    return (
      <>
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
            {this.props.commentList.map((comment) => (
              <li className="comment_ul">
                <span>
                  <span className="comment_userID">{this.props.user}</span>
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
        </div>
      </>
    );
  }
}

export default Comment;
