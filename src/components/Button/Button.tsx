import cn from "classnames"
import btnNextGreen from "assets/btn_next_green.png"
import btnNextGreenBig from "assets/btn_next_green_big.png"
import btnNext from "assets/btn_next.png"
import btnYes from "assets/btn_yes.png"
import btnYesPressed from "assets/btn_yes_pressed.png"
import btnYesGreen from "assets/btn_yes_green.png"
import btnNo from "assets/btn_no.png"
import btnNoPressed from "assets/btn_no_pressed.png"
import btnMap from "assets/btn_map.png"
import btnMapPressed from "assets/btn_map_pressed.png"
import btnShare from "assets/btn_share.png"
import btnSharePressed from "assets/btn_share_pressed.png"
import btnLike from "assets/btn_like.png"
import btnLikePressed from "assets/btn_like_pressed.png"
import btnSound from "assets/btn_sound.png"
import btnSoundPressed from "assets/btn_sound_pressed.png"
import styles from "./Button.module.css"
import { noop } from "utils/noop"
import { useState } from "react"

type ButtonVariant = "green_next" | "next" | "yes" | "no" | "yes_green" | "green_next_big" | "share" | "like" | "sound" | "map"

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
  share: btnShare,
  like: btnLike,
  sound: btnSound,
  map: btnMap,
}

const variantPressedImageMapping: Record<ButtonVariant, string> = {
  green_next: btnNextGreen,
  next: btnNext,
  yes: btnYesPressed,
  no: btnNoPressed,
  yes_green: btnYesGreen,
  green_next_big: btnNextGreenBig,
  share: btnSharePressed,
  like: btnLikePressed,
  sound: btnSoundPressed,
  map: btnMapPressed,
}

export const Button = ({ onClick, variant, disabled }: ButtonProps) => {
  const [pressed, setPressed] = useState(false)

  return (
    <img
      className={cn(styles.root, {
        [styles.disabled]: disabled,
      })}
      src={pressed ? variantPressedImageMapping[variant] : variantImageMapping[variant]}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={disabled ? noop : onClick}
    />
  )
}
