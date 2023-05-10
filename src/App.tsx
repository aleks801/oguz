import React, { useState, useEffect } from "react"
import bridge from "@vkontakte/vk-bridge"
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"

import Home from "./panels/Home"
import Persik from "./panels/Persik"
import { Footer } from "components/Footer/Footer"
import { Map } from "panels/Map"

import "./index.css"
import { Lesson } from "panels/Lesson/Lesson"

const App = () => {
  const [activePanel, setActivePanel] = useState("map")
  const [fetchedUser, setUser] = useState(null)
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />)

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo")
      setUser(user)
      setPopout(null)
    }
    fetchData()
  }, [])

  const go = (e: any) => {
    setActivePanel(e.currentTarget.dataset.to)
  }

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={null}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Map id="map" go={go} />
                <Lesson id="lesson" go={go} />

                <Home id="home" fetchedUser={fetchedUser} go={go} />
                <Persik id="persik" go={go} />
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
