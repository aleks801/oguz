export type MapItemConfig = {
  text: string
  style: { bottom: number | string; left: number | string }
  id: number
}

export const mapItems: Array<MapItemConfig> = [
  { id: 0, text: "Вводный урок", style: { bottom: 45, left: "18%" } },
  { id: 1, text: "Главные ошибки", style: { bottom: 200, left: "38%" } },
  { id: 2, text: "Кредиты - это зло или возможность?", style: { bottom: 320, left: "32%" } },
  { id: 3, text: "Потери и мошенники", style: { bottom: 480, left: "45%" } },
  { id: 4, text: "Что приводит к бедности?", style: { bottom: 520, left: "45%" } },
  { id: 5, text: "Время – деньги", style: { bottom: 580, left: "45%" } },
]
