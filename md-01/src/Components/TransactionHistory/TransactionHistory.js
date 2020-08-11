import React from "react";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import transactions from "../../db/transactions.json";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <div>
      <table className={styles["transaction-history"]}>
        <thead>
          <tr className={styles.titles}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {transactions.map((transaction) => (
          <TransactionHistoryItem
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </table>
    </div>
  );
};

export default TransactionHistory;
