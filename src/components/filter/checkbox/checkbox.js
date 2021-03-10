import React from "react";
import "./checkbox.css";

const Checkbox = ({ values, onChange, keyName, checked }) => {
  return (
    <label htmlFor={values}>
      <input
        type="checkbox"
        name={values}
        value={values}
        onChange={(e) => onChange(e.currentTarget.value, keyName, checked)}
        checked={checked}
      />
      {values}
    </label>
  );
};

export default Checkbox;
