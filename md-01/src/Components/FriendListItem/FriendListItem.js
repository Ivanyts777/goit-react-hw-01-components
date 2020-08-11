import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <li className={styles.item}>
        <span
          className={
            isOnline
              ? styles.status + " " + styles.online
              : styles.status + " " + styles.offline
          }
        ></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
