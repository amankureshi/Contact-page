import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={` container ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, unde.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam
        magni, a sapiente vitae voluptatibus laboriosam harum tempora sit itaque
        nam maxime, id vel dolorum autem. Autem suscipit deserunt illo?
      </p>
    </div>
  );
};

export default ContactHeader;
