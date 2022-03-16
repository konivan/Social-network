import React from "react";
import styles from './users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://www.meme-arsenal.com/memes/181904c4234964f005ba8a4d592f968c.jpg",
        followed: false,
        fullName: "Ivan",
        status: "Ok",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://www.meme-arsenal.com/memes/181904c4234964f005ba8a4d592f968c.jpg",
        followed: false,
        fullName: "Grisha",
        status: "Skita skata",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://www.meme-arsenal.com/memes/181904c4234964f005ba8a4d592f968c.jpg",
        followed: true,
        fullName: "Krot",
        status: "Ok",
        location: { city: "Tokyo", country: "Japan" },
      },
      {
        id: 4,
        photoUrl:
          "https://www.meme-arsenal.com/memes/181904c4234964f005ba8a4d592f968c.jpg",
        followed: true,
        fullName: "Galeta",
        status: "Ok",
        location: { city: "Sidney", country: "Australia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;