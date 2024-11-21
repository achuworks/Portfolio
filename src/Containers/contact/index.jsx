import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./stylesc.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailContent = {
      to_name: "Achu",
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
      template_message: `
        Hello Achu,\n\n
        You got a new message from <${formData.email}>:\n\n
        *${formData.message}*\n\n
        Message through portfolio, to you\n\n
        Email sent via EmailJS.com
      `,
    };

    emailjs
      .send(
        "service_ythz7ck",
        "template_4xh881g",
        emailContent,
        "FZwM6T2IQGd7w4tkl"
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response.status, response.text);
          setShowThankYouPopup(true);
        },
        (error) => {
          console.log("Failed to send message", error);
        }
      );
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div className="contact-container">
          <h1>Contact Me!!</h1>
          <p className="p">Let's talk!</p>
          <div className="inputs">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handle}
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handle}
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea-field"
              value={formData.message}
              onChange={handle}
            />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </form>

     
      {showThankYouPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <p className="th">Thank You for contacting me!</p>
            <button
              className="close-button"
              onClick={() => setShowThankYouPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;