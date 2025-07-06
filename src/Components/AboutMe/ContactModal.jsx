import React, { useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "emailjs-com";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { userName, userEmail, message } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setStatus("");

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      message: message,
    };

    const {
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      REACT_APP_EMAILJS_USER_ID,
    } = process.env;

    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setStatus("Thanks for connecting! Your message was sent 🎉");
        setFormData({ userName: "", userEmail: "", message: "" });
        setIsSent(true);

        setTimeout(() => {
          setIsSent(false);
          setStatus("");
          onClose();
        }, 2500);
      })
      .catch(() => {
        setStatus("Something went wrong 😢. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Send a Message 📬</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            value={userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Your Email"
            value={userEmail}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isSending || isSent}>
            {isSending ? (
              <span className="spinner" />
            ) : isSent ? (
              <span className="tick">✔</span>
            ) : (
              "Send"
            )}
          </button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
    </div>,
    document.body
  );
}