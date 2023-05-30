import { Button } from "components/Button"
import { RateLesson } from "components/RateLesson"

type Props = {
  saveProgress: () => void
}

export const LessonFooter = ({ saveProgress }: Props) => (
  <>
    <RateLesson />
    <Button variant="green_next_big" onClick={saveProgress} />
  </>
)
