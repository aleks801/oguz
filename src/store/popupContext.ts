import React from "react"

export type PopupType = "intro" | "good_continue"

type PopupTypeOrUndefined = undefined | PopupType
type ContextType = { popup: PopupTypeOrUndefined; setPopup: (popup: PopupTypeOrUndefined) => void }

export const PopupContext = React.createContext<ContextType>({
  popup: undefined,
  setPopup: () => {},
})
