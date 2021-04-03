import React from "react";

// Import assets
import "react-datepicker/dist/react-datepicker.css";

// Import dependencies
import DatePicker from "react-datepicker";

// Component for the input to change date
const ChangeDateComp = (props) => (
  <button className="change-img" onClick={props.onClick}>
    Choose Different Image
  </button>
);

export default function NewDate(props) {
  return (
    <div className="photo-full-info">
      <DatePicker
        selected={props.selectedDate}
        onChange={(date) => props.changeDate(date)}
        customInput={<ChangeDateComp />}
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
      />
      </div>
  );
}