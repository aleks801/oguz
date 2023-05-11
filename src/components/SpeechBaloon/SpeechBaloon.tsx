import { Author } from "components/Author"
import styles from "./SpeechBaloon.module.css"
import back from "assets/speech_balloon_med.png"

type Props = { children: React.ReactNode }

export const SpeechBaloon = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.root}>
        <img className={styles.back} src={back} />
        <div className={styles.content}>
          <p>{children}</p>
        </div>
      </div>
      <Author />
    </div>
  )
}
