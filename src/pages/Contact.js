import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server.
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required value={formData.message} onChange={handleChange} />
          
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
