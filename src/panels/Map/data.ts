export type MapItemConfig = {
  text: string
  style: { bottom: number; left: number | string }
  id: number
}

export const mapItems: Array<MapItemConfig> = [
  { id: 0, text: "Вводный урок", style: { bottom: 80, left: "25%" } },
  { id: 1, text: "Главные ошибки", style: { bottom: 160, left: "42%" } },
  { id: 2, text: "Кредиты - это зло или возможность?", style: { bottom: 245, left: "18%" } },
  { id: 3, text: "Потери и мошенники", style: { bottom: 370, left: "38%" } },
  { id: 4, text: "Что приводит к бедности?", style: { bottom: 480, left: "48%" } },
  { id: 5, text: "Время – деньги", style: { bottom: 560, left: "20%" } },
  { id: 6, text: "Правила финансовой грамотности", style: { bottom: 660, left: "25%" } },
  { id: 7, text: "Какие профессии стоит осваивать прямо сейчас?", style: { bottom: 800, left: "30%" } },
  { id: 8, text: "Как начать зарабатывать больше?", style: { bottom: 860, left: "20%" } },
]
