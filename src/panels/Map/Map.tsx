import { Panel } from "@vkontakte/vkui"
import styles from "./Map.module.css"
import map from "../../assets/map.png"

import { mapItems } from "./data"
import { useContext, useEffect } from "react"
import { PopupContext } from "store/popupContext"
import { MapItem } from "components/MapItem/MapItem"

type Props = {
  id: string
  go: (panelId: string) => void
}

const currentProgress = 2

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
          {mapItems.map((mapItem, index) => (
            <MapItem currentProgress={currentProgress} go={go} {...mapItem} />
          ))}
        </div>
      </div>
    </Panel>
  )
}
