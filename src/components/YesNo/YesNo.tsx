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
      <Button variant="yes" disabled={checked !== "yes"} onClick={() => handleCheck("yes")} />
      <Button variant="no" disabled={checked !== "no"} onClick={() => handleCheck("no")} />
    </div>
  )
}
