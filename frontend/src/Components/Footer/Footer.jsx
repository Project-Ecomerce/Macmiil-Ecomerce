import React from "react";
import styles from "./Footer.module.css";
// import { FcGoogle } from "react-icons/Fc";
import { FaFacebook } from "react-icons/Fa";
import { BsInstagram } from "react-icons/Bs";


function Footer() {
  return (
    <div className={styles.midguud}>
      <div className={styles.container}>
        <div className={styles.footersare}>
          <div className={styles.macmiil}>
            <div className={styles.hor}>
              <h1>macmiil</h1>
              <p>online market</p>
              <p>electronic</p>
              <p>I.T.C </p>
            </div>
          </div>
          <div className={styles.location}>
            <h1>Location</h1>
            <p>somaliland</p>
            <p>hargeisa</p>
          </div>
          <div className={styles.email}>
            <h1>Email</h1>
            <p>sakariyesaeed51@gmail.com</p>
            <p>siciidmuse@gmail.com</p>
            <p>muwahib@gmail.com</p>
          </div>
        </div>
        <div className={styles.mid_hose}>
          <div className={styles.saerching}>
            <h1>searching email</h1>
            <div className={styles.input}>
              <input type="text" name="submit" placeholder="Saerching email" />
              <button type="submit">enter</button>
            </div>
          </div>
          <div className={styles.icon}>
            <h1>social media</h1>

            <div className={styles.media}>
              <BsInstagram />

              <FaFacebook />
              {/* <FcGoogle /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
