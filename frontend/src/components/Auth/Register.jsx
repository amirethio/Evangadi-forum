import React, { useRef, useState } from "react";
import Instance from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from "./auth.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { GoEye } from "react-icons/go";
function Register({ isLogin, setIsLogin }) {
  const userNameDom = useRef(null);
  const firstNameDom = useRef(null);
  const lastNameDom = useRef(null);
  const emailDom = useRef(null);
  const passwordDom = useRef(null);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [textpass, setTextPass] = useState("password");

  function passToggler() {
    setShowPass(!showPass);
    if (passwordDom.current.type === "password") {
      setTextPass("text");
    } else {
      setTextPass("password");
    }
  }
  async function handlesubmit(e) {
    e.preventDefault();
    const userNameValue = userNameDom.current.value;
    const firstNameValue = firstNameDom.current.value;
    const lastNameValue = lastNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (
      !userNameValue ||
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("please provide all required information");
      return;
    }
    try {
      const response = await Instance.post("/user/register", {
        username: userNameValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
        email: emailValue,
        password: passwordValue,
      });

      console.log(response.data);
      alert("user registered successfully :--please login to continue");
      navigate("/home");
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  return (
    <section
      className={`${styles.input_container} ${styles.rigister_container}`}
    >
      <section className={styles.input_form}>
        <h2>Join the network</h2>
        <p className={styles.create_account}>
          Already have an account?
          <span
            className={styles.sign_in}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {" "}
            Sign in
          </span>
        </p>
        <form action="" onSubmit={handlesubmit}>
          <div>
            <input ref={userNameDom} type="text" placeholder="username" />
          </div>
          <div className={styles.names}>
            <input type="text" placeholder="first name" ref={firstNameDom} />
            <input type="text" placeholder="last name" ref={lastNameDom} />
          </div>

          <div>
            <input type="email" placeholder="email" ref={emailDom} />
          </div>

          <div className={styles.password_container}>
            <input type={textpass} placeholder="password" ref={passwordDom} />
            <span onClick={passToggler}>
              {showPass ? <FaRegEyeSlash /> : <GoEye color="ff8000" />}
            </span>
          </div>
        </form>
        <div style={{ marginTop: "10px" }}>
          <p className={` ${styles.center}`}>
            <span>
              I agree to the{" "}
              <Link className={styles.sign_in} to={"/about"}>
                Privacy Policy
              </Link>{" "}
              and
              <Link className={styles.sign_in} to={"/about"}>
                &nbsp; terms of service
              </Link>
              <Link className={styles.sign_in} to={"/about"}>
                &nbsp; terms of service
              </Link>{" "}
            </span>
          </p>
          <Link to={"/login"}>
            <button
              className={`${styles.login} ${styles.register_btn}`}
              type="submit"
            >
              Agree and Join
            </button>{" "}
          </Link>
          <Link className={`${styles.sign_in} ${styles.center}`} >
            Already have an account?
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Register;