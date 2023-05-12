import { Panel } from "@vkontakte/vkui"
import styles from "./Lesson.module.css"
import { LessonHeader } from "components/LessonHeader/LessonHeader"
import { lessonsData } from "./data"

type Props = {
  id: string
  go: (panelId: string) => void
}

export const Lesson = ({ id, go }: Props) => {
  const lessonContent = lessonsData[10]
  return (
    <Panel id={id}>
      <div className={styles.root}>
        <LessonHeader onClose={() => go("map")} />
        <div className={styles.content}>{lessonContent}</div>
      </div>
    </Panel>
  )
}
