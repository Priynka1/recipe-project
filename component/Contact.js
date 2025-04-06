const Contact = () => {
  return (
    <>
      <div className="contact-us">
        <h1 className="contact-us-title">Contact Us</h1>

        <div className="contact-section">
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-footer">
          <h2>We look forward to connecting with you!</h2>
        </div>
      </div>
    </>
  );
};
export default Contact;
