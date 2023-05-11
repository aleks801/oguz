import { Panel } from "@vkontakte/vkui"
import cn from "classnames"
import styles from "./Map.module.css"
import map from "../../assets/map.png"
import pointRed from "../../assets/map_point_r.png"
import pointBlue from "../../assets/map_point_b.png"
import lock from "../../assets/map_lock.png"
import bubble from "../../assets/map_bubble.png"
import user from "../../assets/map_user.png"
import { mapItems } from "./data"
import { useContext, useEffect } from "react"
import { PopupContext } from "store/popupContext"

type Props = {
  id: string
  go: (panelId: string) => void
}

export const Map = ({ id, go }: Props) => {
  const { setPopup } = useContext(PopupContext)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPopup("intro")
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Panel id={id}>
      <div className={styles.root}>
        <div className={styles.map}>
          <img src={map} />
          {mapItems.map((item, i) => {
            const isRed = item.type === "red"

            return (
              <div
                className={cn(styles.point, { [styles.vertical]: isRed })}
                key={i}
                style={item.style}
                onClick={() => (isRed ? go("lesson") : undefined)}
              >
                {isRed && (
                  <div>
                    <img src={user} />
                  </div>
                )}
                <div className={styles.mark}>
                  <div className={styles.label}>{isRed ? <span>{i + 1}</span> : <img src={lock} />}</div>
                  <img src={isRed ? pointRed : pointBlue} />
                </div>
                <div className={styles.bubble}>
                  <img src={bubble} />
                  <div className={styles.text}>{item.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
