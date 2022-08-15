import React, { useState } from "react";
import "./contact.scss";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const initInput = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }
  const [input, setInput] = useState(initInput);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    setAlertMessage(null);

    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = input;

    if (!firstName || !lastName || !email || !message) {
      setAlertMessage({ type: "error", message: "Please Enter all Fields" });
      return;
    }

    emailjs
      .sendForm("service_uudp1tg", "template_9bkoezf", e.target, "U5G6AzPX9pZLv1LDl")
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage({
            type: "success",
            message: "Message sent",
          });

          setInput(initInput)
        },
        (error) => {
          console.log(error.text);
        }
      );

    
  };

  return (
    <div className="contact__container " id="contact">
      <h2>Contact</h2>
      <div className="contact__wrapper">
        <div className="contact__details">
          <p>Lets get in touch to make that dream project a reality</p>

          <span>
            <BsTelephone className="icon" /> 08100474601
          </span>

          <span>
            <MdOutlineMail className="icon" /> okpabicounsel@gmail.com
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          {alertMessage && (
            <div className={`alert ${alertMessage.type}`}>
              {alertMessage.message}
            </div>
          )}
          <div className="form__group">
            Name:
            <div className="name__form">
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={input.firstName}
                placeholder="First name"
              />
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={input.lastName}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form__group">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={input.email}
              placeholder="name@mail.com"
            />
          </div>
          <div className="form__group">
            Message:
            <textarea
              name="message"
              cols="30"
              rows="5"
              value={input.message}
              onChange={handleChange}
              placeholder="please input your message"
            ></textarea>
          </div>

          <button type="submit">
            <FiSend />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
