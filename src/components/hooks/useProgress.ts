import { episodes } from "panels/Lesson/Lesson"
import { useEffect, useRef, useState } from "react"

const key = "rybakov_app:progress"

export function useProgress() {
  const progress = useRef(localStorage.getItem(key) || episodes[0].id)
  const [nonce, setNonce] = useState(progress.current)

  useEffect(() => {
    localStorage.setItem(key, progress.current)
  }, [nonce])

  const progressIndex = episodes.findIndex((episode) => episode.id === progress.current)

  return {
    save: (value: string) => {
      console.log("save", value)

      progress.current = value
      setNonce(value)
    },
    progress: progress.current,
    progressIndex: progressIndex === -1 ? 0 : progressIndex + 1,
  }
}
