import { useState } from "react"
// @todo: добавить картинку для checked
import radioButton from "assets/radio.png"
import checkbox from "assets/checkbox.png"
import styles from "./Input.module.css"

type Props = {
  onCheck?: (cheked: boolean) => void
  label?: string
  type: "radio" | "check"
}

export const Input = ({ onCheck, label, type }: Props) => {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked((prev) => {
      onCheck?.(!prev)
      return !prev
    })
  }
  return (
    <div className={styles.root}>
      <img src={type === "check" ? checkbox : radioButton} onClick={handleCheck} />
      {typeof label !== "undefined" && <span>{label}</span>}
    </div>
  )
}
