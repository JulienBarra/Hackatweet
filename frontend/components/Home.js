import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Tweet from "./Tweet";
import Tags from "./Tags";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.div_left}>
        <img
          className={styles.logo}
          src="logo_twitter.png"
          alt="logo twitter"
        />
        <div className={styles.user_infos}>
          <FontAwesomeIcon icon={faCircleUser} />
          <p>FIRSTNAME</p>
          <p>USERNAME</p>
          <Link href="/index" className={styles.logout_button}>
            Logout
          </Link>
        </div>
      </div>
      <div className={styles.div_center}>
        <div className={styles.header}>
          <h3>Home</h3>
          <div className={styles.counter_button_tweet}>
            <input placeholder="What's up"></input>
            <p>
              <span>0</span>/280
            </p>
            <div className={styles.tweet_container}>
              <Tweet />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div_right}>
        <h3>Trends</h3>
        <div className={styles.tags_container}>
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Home;
