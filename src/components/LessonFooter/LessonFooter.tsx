import { Button } from "components/Button"
import { RateLesson } from "components/RateLesson"
import styles from "./LessonFooter.module.css"

type Props = {
  saveProgress: () => void
  canGoNext: boolean
}

export const LessonFooter = ({ saveProgress, canGoNext }: Props) => (
  <div className={styles.root}>
    <RateLesson />
    <Button variant="green_next_big" onClick={saveProgress} disabled={!canGoNext} />
  </div>
)
