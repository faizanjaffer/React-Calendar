import Button from "react-bootstrap/Button";
import styles from "./Days.module.scss";

const moment = require("moment");
const currentMonth = moment().month();

const getWeeks = () => {
  const moment = require("moment");

  const startWeek = moment().startOf("month").week();
  const endWeek = moment().endOf("month").week() + 1;

  let calendar = [];
  for (var week = startWeek; week < endWeek; week++) {
    calendar.push({
      week: week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf("week")
            .add(1, "day")
            .clone()
            .add(n + i, "day")
        ),
    });
  }
  console.log(calendar);

  return calendar;
};

const Days = ({ handleClick }) => (
  <>
    <ul className={styles.days}>
      {getWeeks().map((week) =>
        week.days.map((day) => (
          <li key={day}>
            <Button
              className={
                day.month() !== currentMonth
                  ? styles.button_disabled
                  : styles.button_enabled
              }
              onClick={(e) => handleClick(day)}
            >
              {" "}
              {day.format("D")}{" "}
              <span className={styles.eventName}>
                {" "}
                <p>
                  {
                    JSON.parse(localStorage.getItem(day.format("MM/DD/YYYY")))
                      ?.name
                  }
                </p>
              </span>
            </Button>
          </li>
        ))
      )}
    </ul>
  </>
);

export default Days;
