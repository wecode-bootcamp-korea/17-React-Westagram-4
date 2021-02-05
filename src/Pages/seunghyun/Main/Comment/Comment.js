import React, { Component } from "react";
import CommentList from "./CommentList/CommentList";
import "../Comment/Comment.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: "",
    };
  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData = () => {
    fetch("/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentList: data,
        });
      });
  };

  changeCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addCommentList = () => {
    const { commentList, commentValue } = this.state;

    const newCommentData = [
      ...commentList,
      {
        id: commentList.length + 1,
        userName: this.props.userId,
        content: commentValue,
        isLiked: false,
      },
    ];
    this.setState({
      commentList: newCommentData,
      commentValue: "",
    });
    console.log("commentValue >>>>", commentList);
  };

  addCommentBtn = (e) => {
    if (e.key === "Enter" && this.state.commentValue) {
      this.addCommentList();
    }
  };

  render() {
    const { commentList, commentValue } = this.state;
    return (
      <div className="comment">
        <ul className="replyUl">
          {commentList.map((comment) => {
            return (
              <CommentList
                key={comment.id}
                name={comment.userName}
                newComment={comment.content}
                // clickEvent={this.changeColor}
              />
            );
          })}
        </ul>
        <div className="replyBox">
          <input
            type="text"
            value={commentValue}
            placeholder="댓글달기..."
            onChange={this.changeCommentValue}
            onKeyPress={this.addCommentBtn}
            className="replyText"
          />
          <button
            type="submit"
            disabled={!commentValue}
            onClick={this.addCommentList}
            onKeyPress={this.addCommentList}
            className={commentValue ? "activationReplyBtn" : "disabledReplyBtn"}
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
