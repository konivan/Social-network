import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          className={s.profileAvatar}
          src={props.profile.photos.large}
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