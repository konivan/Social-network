import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=4ea3fc2a12468d93389e744854cc57ef-5733951-images-thumbs&n=13" />
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;