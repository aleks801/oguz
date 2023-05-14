import styles from "./LessonNavigation.module.css"
import next from "../../assets/btn_next.png"
import prev from "../../assets/btn_prev.png"
import close from "../../assets/btn_close.png"

type Props = {
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export const LessonNavigation = ({ onClose, onPrev, onNext }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.pager}>
        <img src={prev} style={{ opacity: onPrev ? 1 : 0.5 }} onClick={onPrev} />
        <img src={next} style={{ opacity: onNext ? 1 : 0.5 }} onClick={onNext} />
      </div>
      <div>
        <img src={close} onClick={onClose} />
      </div>
    </div>
  )
}
