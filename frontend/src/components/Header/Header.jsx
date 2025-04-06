import React from "react";
import styles from "./header.module.css";
import Logo from "../../assets/HeaderLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

function Header() {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  function toggler() {
    setMobile(!mobile);
  }
  return (
    <header className={styles.header}>
      <Link to="/home">
        <img src={Logo} alt="logo" />
      </Link>

      <div className={styles.navbar}>
        <ul>
          <div className={styles.home}>
            <Link to={"/home"}>Home</Link>
          </div>
          <div>
            <Link to={"/HowItWorks"}>How it Works</Link>
          </div>

          <li className={styles.btn} onClick={logout}>
            {isLandingPage ? "Login" : "Logout"} {/* Dynamic button text */}
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <RiMenu3Fill size={39} onClick={toggler} />
      </div>
      {mobile && (
        <section className={styles.mobile_toggler}>
          <ul>
            <li className={styles.home}>
              <Link to={"/home"} onClick={toggler}>
                Home
              </Link>
            </li>
            <hr />
            <li>
              <Link to={"/HowItWorks"} onClick={toggler}>
                How it Works
              </Link>
            </li>
            <hr />
            <li className={styles.btn} onClick={logout}>
              <Link onClick={toggler}>
                {isLandingPage ? "Login" : "Logout"} {/* Dynamic button text */}
              </Link>
            </li>
            <hr />
          </ul>
        </section>
      )}
    </header>
  );
}

export default Header;
