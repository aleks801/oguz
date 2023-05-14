export type MapItemConfig = {
  text: string
  style: { bottom: number | string; left: number | string }
  id: number
}

export const mapItems: Array<MapItemConfig> = [
  { id: 0, text: "Вводный урок", style: { bottom: 90, left: "25%" } },
  { id: 1, text: "Главные ошибки", style: { bottom: 190, left: "38%" } },
  { id: 2, text: "Кредиты - это зло или возможность?", style: { bottom: 245, left: "18%" } },
  { id: 3, text: "Потери и мошенники", style: { bottom: 400, left: "40%" } },
  { id: 4, text: "Что приводит к бедности?", style: { bottom: 510, left: "48%" } },
  { id: 5, text: "Время – деньги", style: { bottom: 600, left: "20%" } },
]
