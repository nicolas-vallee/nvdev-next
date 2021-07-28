import { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      }),
    });
  };
  return (
    <form method='post' onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' name='name' onChange={handleChange} />
      <label htmlFor='email'>Email address</label>
      <input id='email' type='email' name='email' onChange={handleChange} />
      <label htmlFor='subject'>Subject</label>
      <input id='subject' type='text' name='subject' onChange={handleChange} />
      <label htmlFor='email'>Message</label>
      <textarea id='message' name='message' onChange={handleChange} />
      <button type='submit' style={{ float: 'right' }}>
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
