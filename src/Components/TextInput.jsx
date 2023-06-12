/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TextInput({
  name,
  title,
  type,
  handleChange,
  value,
  placeholder,
  mode,
}) {
  return (
    <label className="block text-lg font-medium" htmlFor={name}>
      {title} <br />
      <input
        type={type}
        className={`${
          mode ? "bg-[#1f1f1f]" : "bg-[#efefef] border-b-[#33333378]"
        } border-b-4 w-full outline-none p-5 my-5 font-normal`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </label>
  );
}

export default TextInput;
