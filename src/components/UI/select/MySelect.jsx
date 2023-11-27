import React from "react";
// import classes from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <div>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option disabled value="value1">{defaultValue}</option>
        {options.map(option => 
            <option value={option.value} key={option.value}>
                {option.name}
            </option>
            )}
      </select>
    </div>
  );
};
export default MySelect;
