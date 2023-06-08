import { useEffect, useState } from "react"
import { useVkMethods } from "./useVkMethods"

type VkData = {
  sex: "male" | "female"
}

export function useVkProfileData() {
  const { getUserInfo } = useVkMethods()

  const [profileData, setProfileData] = useState<VkData>({
    sex: "male",
  })

  useEffect(() => {
    async function fetchData() {
      const user = await getUserInfo()
      setProfileData({
        sex: user.sex === 1 ? "female" : "male",
      })
    }
    fetchData()
  }, [])

  return profileData
}
