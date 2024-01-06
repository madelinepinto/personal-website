import React, { useState, useEffect } from "react";
import "./ContactMe.css"
import banner from "../../images/speak-now.png";
import Loader from '../Loader';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6a441d30-a4ec-11ee-bd16-0d70bf7b86f5"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(delay);
  }, []);

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
      <div>
        {loading ? (
          <Loader />
        ) : (
          <body className="contact-form-container">   
            <img src={banner} alt="banner" width="100%"/>
            <div className="stars">
              {Array.from({ length: 75 }).map((_, index) => (
                <div
                  key={index}
                  className="star"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`, 
                  }}
                />
              ))}
            </div>
            <div style={{ paddingBottom: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
              <h2>Thank you!</h2>
              <h3>We'll be in touch soon.</h3>   
            </div>
            <div className="spotify-embeds">
              <iframe
                className="spotify"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/album/5AEDGbliTTfjOB8TSm1sxt?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </body>
        )}
      </div>  
    );
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <body className="contact-form-container">   
          <img src={banner} alt="banner" width="100%"/>
          <div className="stars" >
            {Array.from({ length: 75 }).map((_, index) => (
              <div
                key={index}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`, 
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <form 
              className="contact-form"
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              style={{ width: "800px" }} 
            >
              <h1>Write me a message!</h1>
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
          <div className="spotify-embeds">
            <iframe
              className="spotify"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/album/5AEDGbliTTfjOB8TSm1sxt?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </body>
      )}
    </div>  
  );
};

export default ContactForm;