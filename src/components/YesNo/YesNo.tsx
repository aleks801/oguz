import { Button } from "components/Button"
import styles from "./YesNo.module.css"
import { useState } from "react"

export const YesNo = () => {
  const [checked, setChecked] = useState<"yes" | "no" | undefined>()

  const handleCheck = (variant: "yes" | "no") => {
    setChecked(variant)
  }

  return (
    <div className={styles.root}>
      <Button variant="yes" style={{ opacity: checked === "yes" ? 1 : 0.5 }} onClick={() => handleCheck("yes")} />
      <Button variant="no" style={{ opacity: checked === "no" ? 1 : 0.5 }} onClick={() => handleCheck("no")} />
    </div>
  )
}
