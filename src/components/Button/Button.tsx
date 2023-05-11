import btnNextGreen from "assets/btn_next_green.png"
import btnNext from "assets/btn_next.png"
import btnYes from "assets/btn_yes.png"
import btnYesGreen from "assets/btn_yes_green.png"
import btnNo from "assets/btn_no.png"

type ButtonVariant = "green_next" | "next" | "yes" | "no" | "yes_green"

type ButtonProps = {
  onClick?: () => void
  variant: ButtonVariant
}

const variantImageMapping: Record<ButtonVariant, string> = {
  green_next: btnNextGreen,
  next: btnNext,
  yes: btnYes,
  no: btnNo,
  yes_green: btnYesGreen,
}

export const Button = ({ onClick, variant }: ButtonProps) => {
  return <img src={variantImageMapping[variant]} onClick={onClick} />
}
