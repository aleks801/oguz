import { CSSProperties, useEffect, useRef, useState } from "react"
import cn from "classnames"
import styles from "./FrameAnimation.module.css"

type Props = {
  frames: string[]
  framesPerSecond?: number
  style?: CSSProperties
}

export const FrameAnimation = ({ frames, framesPerSecond = 10, style = {} }: Props) => {
  const [, setNonce] = useState(0)
  const curIndex = useRef(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = curIndex.current + 1 === frames.length ? 0 : curIndex.current + 1
      console.log(curIndex, frames.length, newIndex)
      curIndex.current = newIndex
      setNonce(newIndex)
    }, 1000 / framesPerSecond)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div style={style}>
      {frames.map((frame, index) => (
        <img src={frame} key={index} className={cn(styles.image, { [styles.visible]: index === curIndex.current })} />
      ))}
    </div>
  )
}
