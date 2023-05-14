import { Panel } from "@vkontakte/vkui"
import styles from "./Lesson.module.css"
import { LessonNavigation } from "components/LessonNavigation/LessonNavigation"
import { lessonsData } from "./data"
import { useContext, useState } from "react"
import { LessonFooter } from "components/LessonFooter"
import { LessonHeader } from "components/LessonHeader/LessonHeader"
import { PopupContext } from "store/popupContext"

type Props = {
  id: string
  chapterId: number
  go: (panelId: string) => void
}

export const Lesson = ({ id, chapterId, go }: Props) => {
  const { setPopup } = useContext(PopupContext)

  const [lessonEpisodes] = useState(lessonsData.filter((lessonData) => lessonData.chapterId === chapterId))
  const [episodeIndex, setEpisodeIndex] = useState(0)

  const lessonData = lessonEpisodes[episodeIndex]
  const hasNext = episodeIndex + 1 < lessonEpisodes.length
  const hasPrev = episodeIndex > 0

  const handlePrev = () => setEpisodeIndex(episodeIndex - 1)
  const handleNext = () => setEpisodeIndex(episodeIndex + 1)

  return (
    <Panel id={id}>
      <div className={styles.root}>
        <LessonNavigation
          onClose={() => {
            go("map")
            setPopup("good_continue")
          }}
          onNext={hasNext && handleNext}
          onPrev={hasPrev && handlePrev}
        />
        <div className={styles.content}>
          {chapterId !== 0 && <LessonHeader chapterId={lessonData.chapterId} episodeId={lessonData.episodeId} />}
          {lessonData.content}
          {chapterId !== 0 && <LessonFooter />}
        </div>
      </div>
    </Panel>
  )
}
