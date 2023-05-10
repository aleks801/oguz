import { useState } from "react"
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"

import { Footer } from "components/Footer/Footer"
import { Map } from "panels/Map"

import "./index.css"
import { Lesson } from "panels/Lesson/Lesson"

const App = () => {
  const [activePanel, setActivePanel] = useState("map")

  const go = (panelId: string) => {
    setActivePanel(panelId)
  }

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Map id="map" go={go} />
                <Lesson id="lesson" go={go} />
              </View>
              <Footer />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
