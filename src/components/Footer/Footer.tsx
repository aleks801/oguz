import styles from "./Footer.module.css"
import mapBtn from "../../assets/btn_map.png"
import shareBtn from "../../assets/btn_share.png"
import soundBtn from "../../assets/btn_sound.png"
import likeBtn from "../../assets/btn_like.png"

type Props = {
  go: (panelId: string) => void
}

export const Footer = ({ go }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <img src={shareBtn} />
        <img src={likeBtn} />
        <img src={soundBtn} />
      </div>
      <img src={mapBtn} onClick={() => go("map")} />
    </div>
  )
}
