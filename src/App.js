import "./App.scss";
import { useState } from "react";
import Header from "./components/header/Header";
import Weeks from "./components/weeks/Weeks";
import Days from "./components/days/Days";
import AddEventForm from "./components/AddEventForm";

function App() {
  const moment = require("moment");
  const currentMonth = moment().month();

  const [selectedDate, setSelectedDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSave = (newEvent) => {
    localStorage.setItem(selectedDate, JSON.stringify(newEvent));

    console.log(localStorage.getItem(selectedDate));
    setShowModal(false);
  };

  const openForm = (date) => {
    setSelectedDate(date.format("MM/DD/YYYY"));
    setShowModal(true);
  };

  return (
    <div className="App">
      <Header />
      <Weeks />
      <Days handleClick={openForm} />

      <AddEventForm
        show={showModal}
        date={selectedDate}
        onSave={handleSave}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}

export default App;
