import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={` container ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions, need
        support, or just want to learn more about our services, feel free to
        reach out. Our team is here to assist you and ensure you have the best
        experience possible.
      </p>
    </div>
  );
};

export default ContactHeader;
