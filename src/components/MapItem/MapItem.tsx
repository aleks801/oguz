import { MapItemConfig } from "panels/Map/data"
import styles from "./MapItem.module.css"
import pointRed from "../../assets/map_point_r.png"
import pointViolent from "../../assets/map_point_v.png"
import pointBlue from "../../assets/map_point_b.png"
import lock from "../../assets/map_lock.png"
import check from "../../assets/check.png"
import bubble from "../../assets/map_bubble.png"
import guy from "../../assets/map_guy.png"
import girl from "../../assets/map_girl.png"
import cn from "classnames"
import { useVkProfileData } from "components/hooks/useVkProfileData"

type Props = {
  currentProgress: number
  go: (panelId: string) => void
} & MapItemConfig

export const MapItem = ({ id, text, style, currentProgress, go }: Props) => {
  const { sex } = useVkProfileData()
  const isCurrent = id === currentProgress
  const isCompleted = currentProgress >= id

  let itemStyle = style
  if (isCurrent) {
    itemStyle = { ...itemStyle, bottom: itemStyle.bottom - 44, left: `${parseInt(itemStyle.left) - 10}%` }
  }

  return (
    <div
      data-checked={isCurrent}
      className={cn(styles.root, { [styles.vertical]: isCurrent })}
      style={itemStyle}
      onClick={() => go(`lesson_${id}`)}
    >
      {isCurrent && (
        <div>
          <img src={sex !== "male" ? guy : girl} />
        </div>
      )}
      <div className={styles.mark}>
        <div className={styles.label}>
          {isCurrent ? <span>{id + 1}</span> : isCompleted ? <img src={check} /> : <img src={lock} />}
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
