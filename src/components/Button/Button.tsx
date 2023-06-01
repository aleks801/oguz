import btnNextGreen from "assets/btn_next_green.png"
import btnNextGreenBig from "assets/btn_next_green_big.png"
import btnNext from "assets/btn_next.png"
import btnYes from "assets/btn_yes.png"
import btnYesGreen from "assets/btn_yes_green.png"
import btnNo from "assets/btn_no.png"
import styles from "./Button.module.css"

type ButtonVariant = "green_next" | "next" | "yes" | "no" | "yes_green" | "green_next_big"

type ButtonProps = {
  onClick?: () => void
  variant: ButtonVariant
  disabled?: boolean
}

const variantImageMapping: Record<ButtonVariant, string> = {
  green_next: btnNextGreen,
  next: btnNext,
  yes: btnYes,
  no: btnNo,
  yes_green: btnYesGreen,
  green_next_big: btnNextGreenBig,
}

export const Button = ({ onClick, variant, disabled }: ButtonProps) => {
  return <img className={disabled ? styles.disabled : ""} src={variantImageMapping[variant]} onClick={onClick} />
}
