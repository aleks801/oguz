import { useState } from "react"
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"

import { Footer } from "components/Footer/Footer"
import { Map } from "panels/Map"

import "./index.css"
import { Lesson } from "panels/Lesson/Lesson"
import { PopupDialog } from "components/PopupDialog/PopupDialog"
import { PopupContext, PopupType } from "store/popupContext"

const App = () => {
  const [activePanel, setActivePanel] = useState("map")
  const [activePopup, setActivePopup] = useState<undefined | PopupType>()

  const go = (panelId: string) => {
    setActivePanel(panelId)
  }

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <PopupContext.Provider value={{ popup: activePopup, setPopup: setActivePopup }}>
                <PopupDialog />
                <View activePanel={activePanel}>
                  <Map id="map" go={go} />
                  <Lesson id="lesson" go={go} />
                </View>
                <Footer />
              </PopupContext.Provider>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
