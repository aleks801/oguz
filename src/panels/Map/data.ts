export type MapItemConfig = {
  text: string
  style: { bottom: number; left: string }
  id: number
}

export const mapItems: Array<MapItemConfig> = [
  { text: "Вводный урок", style: { bottom: 80, left: "25%" } },
  { text: "Главные ошибки", style: { bottom: 160, left: "42%" } },
  { text: "Кредиты - это зло или возможность?", style: { bottom: 260, left: "30%" } },
  { text: "Потери и мошенники", style: { bottom: 370, left: "38%" } },
  { text: "Что приводит к бедности?", style: { bottom: 480, left: "48%" } },
  { text: "Время – деньги", style: { bottom: 560, left: "20%" } },
  { text: "Правила финансовой грамотности", style: { bottom: 660, left: "25%" } },
  { text: "Какие профессии стоит осваивать прямо сейчас?", style: { bottom: 800, left: "30%" } },
  { text: "Как начать зарабатывать больше?", style: { bottom: 1035, left: "30%" } },
  { text: "Почему большинство людей ненавидят свою работу?", style: { bottom: 1200, left: "45%" } },
  { text: "Инвестиции в себя", style: { bottom: 1360, left: "40%" } },
  { text: "А что, если я предприниматель?", style: { bottom: 1880, left: "50%" } },
].map((item, index) => ({ ...item, id: index }))
