//src/app/contact/page.js
import Form from "@/components/Form";
import styles from "../../styles/pages/Contacts.module.scss";
import Blog from "@/components/Blog";

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className="container-wrapper">
        <h2 className={`${styles.contacts__title} section-title`}>Contact Us</h2>
          <p className={styles.contacts__text}>Feel free to contact us with questions, potencial partnerships or media inquiries</p>
          <Form />
          
          <Blog/>
        </div>
      </div>
    </section>
  );
}
