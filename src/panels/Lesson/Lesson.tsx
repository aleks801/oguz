import { Panel } from "@vkontakte/vkui"
import styles from "./Lesson.module.css"
import { LessonHeader } from "components/LessonHeader/LessonHeader"
import video from "assets/video.png"
import btn from "assets/btn_yes.png"

type Props = {
  id: string
  go: (e: any) => void
}

export const Lesson = ({ id, go }: Props) => {
  return (
    <Panel id={id}>
      <div className={styles.root}>
        <LessonHeader onClose={() => go({ currentTarget: { dataset: { to: "map" } } })} />
        <div className={styles.content}>
          <h1>
            Вводный урок.
            <br /> Для кого этот курс?
          </h1>
          <p>
            Общая рекомендация для тебя: проходи минимум один, и максимум два урока в день. Так твое обучение будет эффективнее.
          </p>
          <img src={video} />
          <h3>Готов пройти курс до конца?</h3>
          <img src={btn} />
        </div>
      </div>
    </Panel>
  )
}
