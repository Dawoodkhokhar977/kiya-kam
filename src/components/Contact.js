import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

       
          }
        }
      }
    }
  
`;

const Contact = () => {
  return (
    <Wrapper>
    <h1>Contact page</h1>
  
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1273590266974!2d74.25763187469394!3d31.465682549843606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Centre%20Lahore%20Hall%20no.1!5e0!3m2!1sen!2s!4v1731763162332!5m2!1sen!2s"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xvgorelv" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              placeholder="Enter yours message"
              cols={30}
              rows={10}
              required
            ></textarea>
            <input className='bg-primary' type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

