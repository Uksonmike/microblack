/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import TextInput from "../../Components/TextInput";
import Typer from "../../Components/Typer";
import { useOutletContext } from "react-router-dom";
import Button from "../../Components/Button";
import ScrollToTop from "../../Components/ScrollToTop";
import emailjs from 'emailjs-com';
import axios from "axios";

function Contact() {
  const [message, setMessage] = useState(null);
  const form = useRef();
  const [darkMode, setDarkMode] = useOutletContext();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmcopfe', 'template_z6sy1of', form.current, 'OnkE6VH1H81vvXA4R')
      .then((result) => {
          console.log(result.text);
          setMessage(result.text)
          setTimeout(() => {
            setMessage('');
          }, 3000); // Set the timeout duration (in milliseconds)
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setTimeout(() => {
            setMessage('');
          }, 3000); // Set the timeout duration (in milliseconds)
      });
  };

  return (
    <>
      <ScrollToTop />
      <section
        className={`${
          darkMode ? "bg-[#121212] text-white" : ""
        } lg:px-10 md:px-10 px-5 py-[150px]  transition-all duration-300`}
      >
        <div className="mb-10">
          <p className="text-5xl mb-3">
            Need to <br /> get in touch?
          </p>
          <div className="text-3xl flex">
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
          </div>
        </div>
        <section className="grid md:grid-cols-18 gap-5">
          <div>
            <div className="border lg:p-10 p-5 rounded shadow-xl">
              <form ref={form} onSubmit={sendEmail}>
                <TextInput
                  mode={darkMode}
                  title="Name"
                  placeholder="John Doe"
                  name="name"
                  type="text"
                />
                <TextInput
                  mode={darkMode}
                  title="Email"
                  placeholder="Johndoe@mail.com"
                  name="email"
                  type="email"
                />
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                  <textarea
                    className={`${
                      darkMode
                        ? "bg-[#1f1f1f]"
                        : "bg-[#efefef] border-b-[#33333378]"
                    } border-b-4 w-full outline-none p-5 my-5 font-normal`}
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="We'd love to hear from you"
                  />
                </label>
                {message === "OK" && <small className="flex justify-end -mt-5">Message sent successfully</small>}
                <input type="submit" value="Send" className="px-6 py-2 rounded-3xl bg-[#f6df01] hover:bg-[#f6c501] grid place-items-center text-[#333] font-semibold cursor-pointer"/>
              </form>
            </div>
          </div>
          <div>
            <div className="overflow-hidden relative md:h-full h-[400px]">
              <iframe
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="Google Map"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=659&amp;height=400&amp;hl=en&amp;q=1625B,%20Saka%20Jojo%20Victoria%20Island%20%20Lagos+(Office%20Address)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact;