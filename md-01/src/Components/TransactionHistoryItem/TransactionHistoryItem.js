import React from "react";
import styles from "../TransactionHistory/TransactionHistory.module.css";
import PropTypes from "prop-types";

const items = ({ type, amount, currency }) => {
  return (
    <tr className={styles.element}>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
  );
};

export default items;

items.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
