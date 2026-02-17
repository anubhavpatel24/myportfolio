import React, { useState } from "react";
import "./contactpage.css";
import Main_bg from "../../components/main_bg/Main_bg.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Contactpage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then((res) => res.json());

      if (res.success) {
        setShowPopup(true);
        event.target.reset();
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } else {
        console.error("Error:", res.error);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section className="contactpage">
      <Navbar />
      <div className="contactpage_container">
        <div className="heading_container">
          <h1>Contact</h1>
        </div>
        <div className="contactpage_container_form">
          <form onSubmit={onSubmit}>
            <div className="contact_details">
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <input type="number" placeholder="Phone Number" name="phone" required />
              <div className="socials">
                <img src="assets/Pixel Star.webp" alt="pixel star" className="star-icon" />
                <a href="https://www.instagram.com/___itzraj___xx?igsh=MWh0ZnR6a3dkajlxNw==" target="_blank" rel="noopener noreferrer"><img src="assets/Instagram_Icon.webp" alt="instagram icon" /></a>
                <a href="https://github.com/anubhavpatel24" target="_blank" rel="noopener noreferrer"><img src="assets/Github_Icon.webp" alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/anubhavpatel24/" target="_blank" rel="noopener noreferrer"><img src="assets/LinkedIn_Icon.webp" alt="linkedin icon" /></a>
                <img src="assets/Pixel Star.webp" alt="pixel star" className="star-icon" />
              </div>
            </div>
            <div className="message_container">
              <textarea placeholder="Message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="success-popup">
          <p>Message has been sent!</p>
        </div>
      )}
      <Main_bg />
    </section>
  );
};

export default Contactpage;

