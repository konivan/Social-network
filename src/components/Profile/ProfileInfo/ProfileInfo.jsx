import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=4ea3fc2a12468d93389e744854cc57ef-5733951-images-thumbs&n=13" />
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
}

export default ProfileInfo;