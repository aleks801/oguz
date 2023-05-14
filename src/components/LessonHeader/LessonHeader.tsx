type Props = {
  chapterId: number
  episodeId: number
}

export const LessonHeader = ({ chapterId, episodeId }: Props) => {
  return (
    <p style={{ width: "100%" }}>
      Глава {chapterId}. Урок {episodeId}.
    </p>
  )
}
