import Button from 'react-bootstrap/Button';

const moment = require('moment');
const currentMonth = moment().month();


const getWeeks = () => {
    const moment = require('moment');

    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week()+1;

    let calendar = []
    for(var week = startWeek; week<endWeek;week++){
        calendar.push({
            week:week,
            days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
        })
    }

    return calendar;
}


const Days = ({handleClick}) => (
    <>
    <ul className="days">     
      {
        getWeeks().map(week => 
          week.days.map(day => 
            <li key={day} >
              <Button className={day.month() !== currentMonth ? "button-disabled" : "button-enabled"} onClick={(e) => handleClick(day)}> {day.format('D')} <span className='eventName'> <p>{JSON.parse(localStorage.getItem(day.format("MM/DD/YYYY")))?.name}</p></span></Button>   
            </li>
          )
        )
      }
    </ul>
    </>
)

export default Days;