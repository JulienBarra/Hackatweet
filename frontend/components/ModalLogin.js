import Modal from "react-modal";
import styles from "../styles/ModalLogin.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#141D27",
    color: "#FFFFFF"
  },
};

function ModalLogin(props) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FFFFFF";
  }

  return (
    <div className={styles.div_container}>
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.top_div}>
          <p onClick={props.closeModal} className={styles.close_modal}>X</p>
        </div>
        <img className={styles.logo_right} src="logo_twitter.png" alt="logo twitter" />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className={styles.h2}>Create your Hackatweet account</h2>
        <form className={styles.form} >
          <input className={styles.input} />
          <input className={styles.input} />
          <input className={styles.input} />
          <button className={styles.btn_signup}>Sign up</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalLogin;
