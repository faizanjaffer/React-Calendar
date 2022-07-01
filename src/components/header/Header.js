import { useState } from "react";
import styles from "./Header.module.scss";

const moment = require("moment");
const months = moment.months();

const Header = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().month());

  const prevMonth = () => {
    if (currentMonth === 0) setCurrentMonth(11);
    else setCurrentMonth((prevMonth) => prevMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) setCurrentMonth(0);
    else setCurrentMonth((prevMonth) => prevMonth + 1);
  };

  return (
    <>
      <h1>React Calendar</h1>
      <div className={styles.month}>
        <ul>
          <button className={styles.prev} onClick={prevMonth}>
            &#10094;
          </button>
          <button className={styles.next} onClick={nextMonth}>
            &#10095;
          </button>
          <li>{months[currentMonth]}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
