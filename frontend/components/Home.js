import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.div_left}>
        <img
          className={styles.logo}
          src="logo_twitter.png"
          alt="logo twitter"
        />
        <FontAwesomeIcon icon={faCircleUser} />
        <p>FIRSTNAME</p>
        <p>USERNAME</p>
        <button className={styles.logout_button}>Logout</button>
      </div>
      <div className={styles.div_center}>
        <div className={styles.header}>
          <h3>Home</h3>
          <div className={styles.counter_button_tweet}>
            <input placeholder="What's up"></input>
            <p>
              <span>0</span>/280
            </p>
          </div>
        </div>
      </div>
      <div className={styles.div_right}>
        <h3>Trends</h3>
      </div>
    </div>
  );
}

export default Home;
