import styles from "./AttentionWrapper.module.css"
import back from "assets/attention_wrapper.png"
import icon from "assets/attention.png"

type Props = { children: React.ReactNode }

export const AttentionWrapper = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <img className={styles.back} src={back} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
