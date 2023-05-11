import React, { useContext, useMemo } from "react"
import cn from "classnames"
import styles from "./PopupDialog.module.css"
import { PopupContext, PopupType } from "store/popupContext"
import speechBaloonBig from "assets/speech_balloon_big.png"
import speechBaloonSmall from "assets/speech_balloon_small.png"
import { Button } from "components/Button"
import { Author } from "components/Author"

const dialogText: Record<PopupType, React.ReactNode> = {
  intro: (
    <>
      Приветствую тебя на курсе финансовой грамотности от меня, Игоря Рыбакова!
      <br />
      <br />
      Если ты готов обучиться обращаться с деньгами грамотно, учиться экономить и богатеть - нажми на вводный урок!
    </>
  ),
  good_continue: "Отлично! Продолжай обучение",
}

export const PopupDialog = () => {
  const { popup, setPopup } = useContext(PopupContext)

  if (!popup) {
    return null
  }

  const popupContent = useMemo(() => {
    const small = popup === "good_continue"

    return (
      <>
        <div className={styles.dialog}>
          <img src={small ? speechBaloonSmall : speechBaloonBig} />
          <div
            className={cn(styles.dialogContent, {
              [styles.small]: small,
            })}
          >
            <div className={styles.text}>{dialogText[popup]}</div>
            <div className={styles.button}>
              <Button onClick={() => setPopup(undefined)} variant="green_next" />
            </div>
          </div>
        </div>
        <Author withDescription={false} />
      </>
    )
  }, [popup])

  return (
    <div className={styles.root}>
      <div className={styles.content}>{popupContent}</div>
    </div>
  )
}
