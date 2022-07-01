import styles from "./Weeks.module.scss";

const Weeks = () => (
  <ul className={styles.weekdays}>
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
  </ul>
);

export default Weeks;
