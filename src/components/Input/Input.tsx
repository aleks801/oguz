import { useEffect, useState } from "react"
import radio from "assets/radio.png"
import radioChecked from "assets/radio_checked.png"
import checkbox from "assets/checkbox.png"
import checkboxChecked from "assets/checkbox_checked.png"
import styles from "./Input.module.css"

type Props = {
  onCheck: (checked: boolean) => void
  checked?: boolean
  label?: string
  type: "radio" | "check"
}

const getImage = (type: Props["type"], checked: boolean) => {
  if (type === "check") {
    return checked ? checkboxChecked : checkbox
  }
  return checked ? radioChecked : radio
}

export const Input = ({ onCheck, label, type, checked }: Props) => {
  const [_checked, setChecked] = useState(checked)

  const handleCheck = () => {
    onCheck(!_checked)
  }

  useEffect(() => {
    setChecked(checked)
  }, [checked])

  return (
    <div className={styles.root} onClick={handleCheck}>
      <img src={getImage(type, _checked)} />
      {typeof label !== "undefined" && <span>{label}</span>}
    </div>
  )
}
