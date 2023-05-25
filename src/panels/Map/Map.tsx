import { Panel } from "@vkontakte/vkui"
import styles from "./Map.module.css"
import map from "../../assets/map.png"

import w1_1 from "../../assets/waterfall1/1.png"
import w1_2 from "../../assets/waterfall1/2.png"
import w1_3 from "../../assets/waterfall1/3.png"

import { mapItems } from "./data"
import { useContext, useEffect } from "react"
import { PopupContext } from "store/popupContext"
import { MapItem } from "components/MapItem/MapItem"
import { useOnce } from "components/hooks/useOnce"
import { Clouds } from "components/Clouds/Clouds"
import { FrameAnimation } from "components/FrameAnimation/FrameAnimation"

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

  useOnce(() => {
    setTimeout(() => window.scroll(0, 9999), 200)
  }, [])

  return (
    <Panel id={id}>
      <div className={styles.root}>
        <div className={styles.map}>
          <img src={map} />
          <FrameAnimation frames={[w1_1, w1_2, w1_3]} style={{ position: "absolute", top: 315, left: 50 }} />
          <Clouds />
          {mapItems.map((mapItem) => (
            <MapItem currentProgress={currentProgress} go={go} key={mapItem.id} {...mapItem} />
          ))}
        </div>
      </div>
    </Panel>
  )
}
