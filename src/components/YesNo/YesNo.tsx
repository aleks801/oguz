import { Button } from "components/Button"
import styles from "./YesNo.module.css"

export const YesNo = () => {
  return (
    <div className={styles.root}>
      <Button variant="yes" />
      <Button variant="no" />
    </div>
  )
}
