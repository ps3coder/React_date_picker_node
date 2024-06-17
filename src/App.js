import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
      Hellow
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      {/* <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      /> */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </div>
  );
}

export default App;
