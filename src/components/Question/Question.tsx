import styles from "./Question.module.css"
import icon from "assets/question.png"

type Props = { children: React.ReactNode }

export const Question = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <img src={icon} />
      </div>
      <div>
        <p>{children}</p>
      </div>
    </div>
  )
}
