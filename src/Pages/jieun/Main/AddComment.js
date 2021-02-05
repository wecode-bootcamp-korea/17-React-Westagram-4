import React, { Component } from "react";
class AddComment extends Component {
  render() {
    const {comment}=this.props
    return (
            <p><span><span className='userId'> jenna8447</span> {comment}</span></p>   
         
    );
  }
}
export default AddComment;

