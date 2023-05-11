import smile1 from "assets/smile_1.png"
import smile2 from "assets/smile_2.png"
import smile3 from "assets/smile_3.png"
import smile4 from "assets/smile_4.png"
import smile5 from "assets/smile_5.png"
import styles from "./RateLesson.module.css"

export const RateLesson = () => (
  <div className={styles.root}>
    <h3 className={styles.title}>оцени урок</h3>
    <div className={styles.smiles}>
      <img src={smile1} />
      <img src={smile2} />
      <img src={smile3} />
      <img src={smile4} />
      <img src={smile5} />
    </div>
  </div>
)
