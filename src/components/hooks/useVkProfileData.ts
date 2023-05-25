import bridge from "@vkontakte/vk-bridge"
import { useEffect, useState } from "react"

type VkData = {
  sex: "male" | "female"
}

export function useVkProfileData() {
  const [profileData, setProfileData] = useState<VkData>({
    sex: "male",
  })

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo")
      setProfileData({
        sex: user.sex === 1 ? "female" : "male",
      })
    }
    fetchData()
  }, [])

  return profileData
}
