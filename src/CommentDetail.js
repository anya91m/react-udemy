import React from 'react';

//also needs to be added here because every import statement we put is only going to be good for the file it is placed in

const CommentDetail = (props) => {
  //console.log(props);
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.image}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    );
}

export default CommentDetail;
//this statement makes the component available to rest of app
