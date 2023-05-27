import { Panel } from "@vkontakte/vkui"
import styles from "./Map.module.css"
import map from "../../assets/map.png"

import w1_1 from "../../assets/waterfall1/1.png"
import w1_2 from "../../assets/waterfall1/2.png"
import w1_3 from "../../assets/waterfall1/3.png"

import w2_1 from "../../assets/waterfall2/1.png"
import w2_2 from "../../assets/waterfall2/2.png"
import w2_3 from "../../assets/waterfall2/3.png"

import r1 from "../../assets/ravens/1.png"
import r2 from "../../assets/ravens/2.png"
import r3 from "../../assets/ravens/3.png"
import r4 from "../../assets/ravens/4.png"

import l1 from "../../assets/loan/1.png"
import l2 from "../../assets/loan/2.png"

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
          <FrameAnimation frames={[w2_1, w2_2, w2_3]} style={{ position: "absolute", top: 1400, left: 42 }} />
          <FrameAnimation frames={[r1, r2, r3, r4]} style={{ position: "absolute", top: 1640, left: 30 }} />
          <FrameAnimation slight frames={[l1, l2]} framesPerSecond={1} style={{ position: "absolute", top: 1680, left: 40 }} />
          <FrameAnimation slight frames={[l2, l1]} framesPerSecond={1} style={{ position: "absolute", top: 1715, right: 20 }} />
          <Clouds />
          {mapItems.map(({ id, text, style }) => (
            <MapItem currentProgress={currentProgress} go={go} key={id} id={id} text={text} style={style} />
          ))}
        </div>
      </div>
    </Panel>
  )
}
