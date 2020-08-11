import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ statisticalData }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles["stat-list"]}>
        {statisticalData.map((statistic) => (
          <li className={styles.item}>
            <span className={styles.label}>{statistic.label}</span>
            <span className={styles.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
