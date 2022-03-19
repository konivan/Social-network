import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://pm1.narvii.com/6434/76f7be9908d9640e43bacef97dcb3ea2158430f5_00.jpg" />
      <span className={s.message}>{props.message}</span>
      <div>
        <span className={s.like}>Like: {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;