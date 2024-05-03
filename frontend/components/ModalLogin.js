import Modal from "react-modal";
import styles from "../styles/ModalLogin.module.css";
import { useState, useSelector } from "react";
import Login from "./Login";

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
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#FFFFFF";
  }

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
        <img
          className={styles.logo_right}
          src="logo_twitter.png"
          alt="logo twitter"
        />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={styles.h2}>
          Connect to Hackatweet
        </h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            className={styles.input}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.btn_signup}>Sign in</button>
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
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                className={styles.input}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className={styles.btn_signup}>Sign up</button>
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
