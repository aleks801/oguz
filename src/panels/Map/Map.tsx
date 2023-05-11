import { Panel } from "@vkontakte/vkui"
import cn from "classnames"
import styles from "./Map.module.css"
import map from "../../assets/map.png"
import pointRed from "../../assets/map_point_r.png"
import pointViolent from "../../assets/map_point_v.png"
import pointBlue from "../../assets/map_point_b.png"
import lock from "../../assets/map_lock.png"
import check from "../../assets/check.png"
import bubble from "../../assets/map_bubble.png"
import user from "../../assets/map_user.png"
import { mapItems } from "./data"
import { useContext, useEffect } from "react"
import { PopupContext } from "store/popupContext"

type Props = {
  id: string
  go: (panelId: string) => void
}

const currentProgress = 2

export const Map = ({ id, go }: Props) => {
  const { setPopup } = useContext(PopupContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setPopup("intro")
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Panel id={id}>
      <div className={styles.root}>
        <div className={styles.map}>
          <img src={map} />
          {mapItems.map(({ id, text, style }, index) => {
            const isCurrent = id === currentProgress
            const isCompleted = currentProgress >= index + 1

            return (
              <div
                className={cn(styles.point, { [styles.vertical]: isCurrent })}
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
          })}
        </div>
      </div>
    </Panel>
  )
}
