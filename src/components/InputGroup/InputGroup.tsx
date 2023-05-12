import { useState } from "react"
import { Input } from "components/Input/Input"

type Props = {
  onCheck?: (cheked: boolean) => void
  header?: string
  type: "radio" | "check"
  options: string[]
}

export const InputGroup = ({ onCheck, header, type, options }: Props) => {
  return (
    <>
      {header && <h3 style={{ width: "100%" }}>{header}</h3>}
      {options.map((option) => (
        <Input type={type} label={option} key={option} />
      ))}
    </>
  )
}
