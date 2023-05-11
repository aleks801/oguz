import { MapItemConfig } from "panels/Map/data"
import styles from "./MapItem.module.css"
import pointRed from "../../assets/map_point_r.png"
import pointViolent from "../../assets/map_point_v.png"
import pointBlue from "../../assets/map_point_b.png"
import lock from "../../assets/map_lock.png"
import check from "../../assets/check.png"
import bubble from "../../assets/map_bubble.png"
import user from "../../assets/map_user.png"
import cn from "classnames"

type Props = {
  currentProgress: number
  go: (panelId: string) => void
} & MapItemConfig

export const MapItem = ({ id, text, style, currentProgress, go }: Props) => {
  const isCurrent = id === currentProgress
  const isCompleted = currentProgress >= id

  return (
    <div
      className={cn(styles.root, { [styles.vertical]: isCurrent })}
      key={id}
      style={style}
      onClick={() => (isCurrent ? go("lesson") : undefined)}
    >
      {isCurrent && (
        <div>
          <img src={user} />
        </div>
      )}
      <div className={styles.mark}>
        <div className={styles.label}>
          {isCurrent ? <span>{id}</span> : isCompleted ? <img src={check} /> : <img src={lock} />}
        </div>
        <img src={isCurrent ? pointRed : isCompleted ? pointViolent : pointBlue} />
      </div>
      <div className={styles.bubble}>
        <img src={bubble} />
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}
