import cn from "classnames"
import author from "assets/author.png"
import styles from "./Author.module.css"

type Props = {
  withDescription?: boolean
  fullWidth?: boolean
}

export const Author = ({ withDescription = true, fullWidth = true }: Props) => {
  return (
    <div className={cn(styles.root, { [styles.full]: fullWidth })}>
      <div>
        <img src={author} />
      </div>
      {withDescription && (
        <div className={styles.text}>
          Игорь Рыбаков,
          <br />
          Миллиардер, филантроп,
          <br />
          автор курса
        </div>
      )}
    </div>
  )
}
