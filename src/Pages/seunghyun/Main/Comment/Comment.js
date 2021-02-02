import React, { Component } from "react";
import "../Main.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      posting: [],
    };
  }

  content = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  posting = (add) => {
    this.setState({
      content: "",
      posting: [
        ...this.state.posting,
        { id: this.props.userId, text: this.state.content },
      ],
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.posting();
    }
  };

  render() {
    return (
      <>
        <ul className="replyUl">
          {this.state.posting.map((add, idx) => {
            return (
              <li key={idx}>
                {add.id} {add.text}
              </li>
            );
          })}
        </ul>
        <div className="replyBox">
          <input
            onChange={this.content}
            type="text"
            value={this.state.content}
            onKeyPress={this.pressEnter}
            className="replyText"
            placeholder="댓글달기..."
          />
          <button
            onClick={this.posting}
            onKeyPress={this.posting}
            disabled={!this.state.content}
            type="submit"
            className={
              this.state.content ? "activationReplyBtn" : "disabledReplyBtn"
            }
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
