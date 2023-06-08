import { Panel } from "@vkontakte/vkui"
import styles from "./Lesson.module.css"
import { LessonNavigation } from "components/LessonNavigation/LessonNavigation"
import { lessonsData } from "./data"
import { useContext, useEffect, useState } from "react"
import { LessonFooter } from "components/LessonFooter"
import { LessonHeader } from "components/LessonHeader/LessonHeader"
import { PopupContext } from "store/popupContext"
import { useProgress } from "components/hooks/useProgress"
import { noop } from "utils/noop"
import { scrollCheckedMapItem } from "utils/scrollCheckedMapItem"

type Props = {
  id: string
  go: (panelId: string) => void
}

export const episodes = lessonsData.map((l) => ({ id: `${l.chapterId}_${l.episodeId}`, ...l }))

export const Lesson = ({ id, go }: Props) => {
  const [, episodeId] = id.split("_")
  const [episodeIndex, setEpisodeIndex] = useState(parseInt(episodeId) || 0)
  const lessonData = episodes[episodeIndex]
  const hasNext = episodeIndex + 1 < episodes.length
  const hasPrev = episodeIndex > 0

  const { setPopup } = useContext(PopupContext)
  const { save } = useProgress()

  const [hasAnswers, setHasAnswers] = useState<Array<boolean>>(new Array(lessonData.tests).fill(false))
  const [canGoNext, setCanGoNext] = useState(typeof lessonData.tests === "undefined")

  useEffect(() => {
    if (typeof lessonData.tests === "undefined") {
      setCanGoNext(true)
    } else {
      setCanGoNext(hasAnswers.filter(Boolean).length === hasAnswers.length)
    }
  }, [hasAnswers])

  const onInputGroupSelect = (index: number, answered: boolean) => {
    const newAnswers = [...hasAnswers]
    newAnswers[index] = answered
    setHasAnswers(newAnswers)
  }

  const handlePrev = () => setEpisodeIndex(episodeIndex - 1)
  const handleNext = () => setEpisodeIndex(episodeIndex + 1)
  const goNextAndSaveProgress = () => {
    save(lessonData.id)
    if (hasNext) {
      handleNext()
      setTimeout(() => {
        window.scroll(0, 0)
      }, 200)
    } else {
      go("map")
      scrollCheckedMapItem()
    }
  }

  return (
    <Panel id={id}>
      <div className={styles.root}>
        <LessonNavigation
          onClose={() => {
            go("map")
            scrollCheckedMapItem()
            // setPopup("good_continue")
          }}
          onNext={hasNext ? handleNext : noop}
          onPrev={hasPrev ? handlePrev : noop}
        />
        <div className={styles.content}>
          {episodeIndex !== 0 && <LessonHeader chapterId={lessonData.chapterId} episodeId={lessonData.episodeId} />}
          {lessonData.content({
            save: goNextAndSaveProgress,
            onInputGroupSelect,
            canGoNext,
          })}
          {episodeIndex !== 0 && <LessonFooter saveProgress={goNextAndSaveProgress} canGoNext={canGoNext} />}
        </div>
      </div>
    </Panel>
  )
}
