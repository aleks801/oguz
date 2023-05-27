import { Input } from "components/Input/Input"
import styles from "./InputGroup.module.css"
import { useEffect, useState } from "react"

type Props = {
  onCheck?: (checked: boolean[]) => void
  header?: string
  type: "radio" | "check"
  options: string[]
}

export const InputGroup = ({ onCheck, header, type, options }: Props) => {
  const [checked, setChecked] = useState<Array<boolean>>([])

  const handleCheck = (index: number) => (_checked: boolean) => {
    if (type === "check") {
      const arrChecked = [...checked]
      arrChecked[index] = _checked
      setChecked(arrChecked)
    } else if (type === "radio" && _checked === true) {
      const arrChecked = checked.map(() => false)
      arrChecked[index] = _checked
      setChecked(arrChecked)
    }
  }

  useEffect(() => {
    onCheck?.(checked)
  }, [checked])

  return (
    <>
      {header && <h3 style={{ width: "100%" }}>{header}</h3>}
      <div className={styles.root}>
        {options.map((option, index) => (
          <Input type={type} label={option} key={option} onCheck={handleCheck(index)} checked={checked[index]} />
        ))}
      </div>
    </>
  )
}
