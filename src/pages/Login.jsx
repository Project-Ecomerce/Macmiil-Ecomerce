import React from 'react'
import styles from "./login.module.css"
const Login = () => {
  return (
    <div className={styles.bod}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>sign in</h2>

          <div className={styles.inputbox}>
            <input type="text" required="required" />
            <span>username</span>
            <i></i>
          </div>

          <div className={styles.inputbox}>
            <input type="password" required="required" />
            <span>password</span>
            <i></i>
          </div>

          <div className={styles.links}>
           <a href='#'>forget password</a>

           <a href='#'>sigup</a>
          </div>
          <input type='submit' value="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;