import styles from "./Attention.module.css"
import icon from "assets/attention.png"

type Props = { children: React.ReactNode }

export const Attention = ({ children }: Props) => {
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
