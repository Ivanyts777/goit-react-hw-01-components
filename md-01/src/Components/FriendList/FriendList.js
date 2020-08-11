import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import friendsList from "../../db/friends.json";
import styles from "./FriendList.module.css";

const FriendList = () => {
  return (
    <div>
      <ul class={styles["friend-list"]}>
        {friendsList.map((friendList) => (
          <FriendListItem
            avatar={friendList.avatar}
            name={friendList.name}
            isOnline={friendList.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
