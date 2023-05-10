import styles from "./Footer.module.css"
import menuBtn from "../../assets/btn_menu.png"
import shareBtn from "../../assets/btn_share.png"
import soundBtn from "../../assets/btn_sound.png"
import likeBtn from "../../assets/btn_like.png"

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <img src={shareBtn} />
        <img src={likeBtn} />
        <img src={soundBtn} />
      </div>
      <img src={menuBtn} />
    </div>
  )
}
