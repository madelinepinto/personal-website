import React, { useState } from "react";
import "./ContactMe.css"
import Footer from '../Footer';
import banner from "../../images/speak-now.png";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6a441d30-a4ec-11ee-bd16-0d70bf7b86f5"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }
        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually in case of an error
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact-form-container">   
      <img src={banner} alt="banner" width="100%"/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <form 
          className="contact-form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          style={{ width: "800px" }} 
          >
          <f1>Write me a message!</f1>
          <div>
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea placeholder="Your message" name="message" required />
          </div>
          <div>
            <button type="submit"> Send</button>
          </div>
        </form>
      </div>
      <Footer />

    </div>
  );
};

export default ContactForm;
