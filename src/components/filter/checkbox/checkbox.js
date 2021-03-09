import React from "react";

const Checkbox = ({ values, onClick, keyName }) => (
  <label htmlFor={values}>
    <input
      type="checkbox"
      name={values}
      value={values}
      onClick={(e) => onClick(e.currentTarget.value, keyName)}
    />
    {values}
  </label>
);

export default Checkbox;
