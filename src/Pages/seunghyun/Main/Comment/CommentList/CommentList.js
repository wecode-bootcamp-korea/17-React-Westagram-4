import React from "react";
import "../CommentList/CommentList.scss";

class CommentList extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <span>&nbsp;&nbsp;{this.props.newComment}</span>
      </li>
    );
  }
}

export default CommentList;
