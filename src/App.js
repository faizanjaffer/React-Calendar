import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Weeks from './components/Weeks';
import Days from './components/Days';
import AddEventForm from './components/AddEventForm';


function App() {

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
    
      <Header/>
      <Weeks/>
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
