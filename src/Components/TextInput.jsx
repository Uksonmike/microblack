/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TextInput({ name, title, type, handleChange, value,placeholder }) {
  return (
    <label className="block text-lg font-medium" htmlFor={name}>
      {title} <br />
      <input
        type={type}
        className="border-b w-full outline-none p-5 mb-5 font-normal"
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </label>
  );
}

export default TextInput;
