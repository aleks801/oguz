import useSound from "use-sound"
import styles from "./Footer.module.css"
import audio1 from "../../assets/audio/1.mp3"
import { scrollCheckedMapItem } from "utils/scrollCheckedMapItem"
import { Button } from "components/Button"
import { useVkMethods } from "components/hooks/useVkMethods"

type Props = {
  go: (panelId: string) => void
}

export const Footer = ({ go }: Props) => {
  const [play, { stop }] = useSound(audio1)
  const { share, favorites } = useVkMethods()

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <Button variant="share" onClick={share}/>
        <Button variant="like" onClick={favorites}/>
        <Button variant="sound" onClick={play} />
      </div>
      <Button
        variant="map"
        onClick={() => {
          go("map")
          scrollCheckedMapItem()
        }}
      />
    </div>
  )
}
