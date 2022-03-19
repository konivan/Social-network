import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={s.profileAvatar}
          src="https://pm1.narvii.com/6434/76f7be9908d9640e43bacef97dcb3ea2158430f5_00.jpg"
        />
        <div className={s.nameBlock}>Ivan Kondratev</div>
      </div>
      <div className={s.descriptionBlock}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </div>
    </div>
  );
}

export default ProfileInfo;