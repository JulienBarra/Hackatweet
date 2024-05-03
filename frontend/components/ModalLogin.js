import Modal from "react-modal";
import styles from "../styles/ModalLogin.module.css";
import { useState } from "react";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { logUser, logoutUser } from "../reducers/users";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#141D27",
    color: "#FFFFFF",
  },
};

function ModalLogin(props) {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#FFFFFF";
  }

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            logUser({
              firstname: firstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
        }
      });
  };

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            logUser({
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  const modalSignIn = (
    <div className={styles.div_container}>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.top_div}>
          <p onClick={props.closeModal} className={styles.close_modal}>
            X
          </p>
        </div>
        <div className={styles.div_logo}>
          <img
            className={styles.logo_right}
            src="logo_twitter.png"
            alt="logo twitter"
          />
        </div>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={styles.h2}>
          Connect to Hackatweet
        </h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder="Username"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            className={styles.input}
            placeholder="Password"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
          <button className={styles.btn_signup} onClick={() => handleSignIn()}>
            <Link href="/home">Sign in</Link>
          </button>
        </form>
      </Modal>
    </div>
  );

  return !props.isSignin ? (
    <>
      {
        <div className={styles.div_container}>
          <Modal
            isOpen={props.modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className={styles.top_div}>
              <p onClick={props.closeModal} className={styles.close_modal}>
                X
              </p>
            </div>
            <div className={styles.div_logo}>
              <img
                className={styles.logo_right}
                src="logo_twitter.png"
                alt="logo twitter"
              />
            </div>
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className={styles.h2}
            >
              Create your Hackatweet account
            </h2>
            <form className={styles.form}>
              <input
                className={styles.input}
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <input
                className={styles.input}
                placeholder="Username"
                onChange={(e) => setSignUpUsername(e.target.value)}
                value={signUpUsername}
              />
              <input
                className={styles.input}
                placeholder="Password"
                type="password"
                onChange={(e) => setSignUpPassword(e.target.value)}
                value={signUpPassword}
              />
              <button
                className={styles.btn_signup}
                onClick={() => handleSignUp()}
              >
                <Link href="/home">Sign up</Link>
              </button>
            </form>
          </Modal>
        </div>
      }
    </>
  ) : (
    modalSignIn
  );
}

export default ModalLogin;
