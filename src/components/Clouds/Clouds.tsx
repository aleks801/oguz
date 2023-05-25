import React, { useEffect, useRef, useState } from "react"
import cn from "classnames"
import c1 from "../../assets/cloud_1.png"
import c2 from "../../assets/cloud_2.png"
import c3 from "../../assets/cloud_3.png"
import c4 from "../../assets/cloud_4.png"
import c5 from "../../assets/cloud_5.png"
import c6 from "../../assets/cloud_6.png"
import c7 from "../../assets/cloud_7.png"
import c8 from "../../assets/cloud_8.png"
import c9 from "../../assets/cloud_9.png"
import styles from "./Clouds.module.css"
import { between } from "utils/between"

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

const CloudsRaw = () => {
  const ref = useRef<HTMLDivElement>()
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(ref.current ? ref.current.getBoundingClientRect().height : 2065)
  }, [])
  const gap = Math.floor(height / images.length)
  console.log(gap)

  return (
    <div className={styles.root} ref={ref}>
      {images.map((cloud, index) => (
        <div
          className={cn(styles.cloud, {
            [styles.right]: between(0, 1),
          })}
          style={{ top: index * gap + between(0, 100), animationDuration: between(18, 30) + "s" }}
        >
          <img src={cloud} />
        </div>
      ))}
    </div>
  )
}

export const Clouds = React.memo(CloudsRaw)
