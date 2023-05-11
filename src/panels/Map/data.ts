export type MapItemConfig = {
  text: string
  style: { bottom: number | string; left: number | string }
  id: number
}

export const mapItems: Array<MapItemConfig> = [
  { id: 1, text: "Вводный урок", style: { bottom: 45, left: "18%" } },
  { id: 2, text: "Главные ошибки", style: { bottom: 200, left: "38%" } },
  { id: 3, text: "Кредиты - это зло или возможность?", style: { bottom: 320, left: "32%" } },
  { id: 4, text: "Потери и мошенники", style: { bottom: 480, left: "45%" } },
]
