import Buttons from "../Buttons/Buttons";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="Via support chat"
            icon={<MdMessage fontSize="1.2rem" />}
          />
          <Buttons text="Via call" icon={<IoMdCall fontSize="1.2rem" />} />
        </div>
        <Buttons
          isOutline={true}
          text="Via email form"
          icon={<IoMdMail fontSize="1.2rem" />}
        />
        <form>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Buttons text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img
          src="https://i.postimg.cc/L9qCK8SY/Service-24-7-amico.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default ContactForm;
