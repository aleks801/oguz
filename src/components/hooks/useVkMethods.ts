import bridge from "@vkontakte/vk-bridge"

export function useVkMethods() {
  return {
    share: () =>
      bridge.send("VKWebAppShare", {
        link: "https://vk.com/vkappsdev",
      }),
    favorites: () => bridge.send("VKWebAppAddToFavorites"),
    getUserInfo: () => bridge.send("VKWebAppGetUserInfo"),
  }
}
