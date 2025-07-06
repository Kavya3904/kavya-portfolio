import React, { useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "emailjs-com";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

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

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("Thanks for connecting! Your message was sent 🎉");
          setUserName("");
          setUserEmail("");
          setMessage("");
          setIsSent(true);

          setTimeout(() => {
            setIsSent(false);
            setStatus("");
            onClose();
          }, 2500);
        },
        () => {
          setStatus("Something went wrong 😢");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Send a Message 📬</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" disabled={isSending || isSent}>
            {isSending ? (
              <span className="spinner"></span>
            ) : isSent ? (
              <span className="tick">✔</span>
            ) : (
              "Send"
            )}
          </button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
