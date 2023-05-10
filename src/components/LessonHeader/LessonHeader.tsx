import styles from "./LessonHeader.module.css"
import next from "../../assets/btn_next.png"
import prev from "../../assets/btn_prev.png"
import close from "../../assets/btn_close.png"

type Props = {
  onClose: () => void
}

export const LessonHeader = ({ onClose }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.pager}>
        <img src={prev} />
        <img src={next} />
      </div>
      <div>
        <img src={close} onClick={onClose} />
      </div>
    </div>
  )
}
