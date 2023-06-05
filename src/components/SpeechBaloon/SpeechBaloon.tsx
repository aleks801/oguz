import { Author } from "components/Author"
import styles from "./SpeechBaloon.module.css"
import back from "assets/speech_balloon_med.png"

type Props = { children: React.ReactNode; isSmall?: boolean }

export const SpeechBaloon = ({ children, isSmall = false }: Props) => {
  return (
    <div>
      <div className={styles.root}>
        <img className={styles.back} src={back} />
        <div className={styles.content} style={{ paddingBottom: isSmall ? 18 : 40, paddingTop: isSmall ? 5 : 10 }}>
          <p>{children}</p>
        </div>
      </div>
      <Author />
    </div>
  )
}
