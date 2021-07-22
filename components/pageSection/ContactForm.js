import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <form method='post' className={styles.contactForm}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' name='name' />
      <label htmlFor='email'>Email address</label>
      <input id='email' type='email' name='email' />
      <label htmlFor='subject'>Subject</label>
      <input id='subject' type='text' name='subject' />
      <label htmlFor='email'>Message</label>
      <textarea id='message' name='message' />
      <button type='submit' style={{ float: 'right' }}>
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
