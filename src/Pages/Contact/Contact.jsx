/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextInput from "../../Components/TextInput";
import Typer from "../../Components/Typer";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <section>
      <section className="lg:px-10 md:px-10 px-5 lg:py-32 py-20 grid grid-cols-17">
        <div>
          <p className="text-5xl mb-3">
            Need to <br /> get in touch?
          </p>
          <p className="text-3xl flex">
            -{" "}
            <span>
              <Typer
                dataText={[
                  "Leave us a message😁",
                  "We'd be happy to hear from you😊",
                  "Feel free to connect with Us😎",
                ]}
              />
            </span>
          </p>
          <div className="border mt-10 p-5 rounded shadow-xl">
            <div>
              <TextInput
                title="Name"
                placeholder="John Doe"
                name="fname"
                type="text"
                value={formData.name}
                handleChange={handleChange}
              />
              <TextInput
                title="Email"
                placeholder="Johndoe@mail.com"
                name="email"
                type="email"
                value={formData.email}
                handleChange={handleChange}
              />
              <label htmlFor="message" className="block text-lg font-medium">
                Message
                <textarea
                  className="border-b w-full outline-none p-5 mb-5 font-normal"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="We'd love to hear from you"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-5 py-3 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
        <div>2</div>
      </section>
    </section>
  );
}

export default Contact;
