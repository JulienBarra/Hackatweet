import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Tweet() {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweet_infos}>
        <FontAwesomeIcon icon={faCircleUser} />
        firstname username date
      </div>
      <div className={styles.content}>Yoannnnnnneuuuuuuuuuuuuh</div>
      <div className={styles.icons_container}>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default Tweet;
