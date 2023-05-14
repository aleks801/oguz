import { useEffect, useRef } from "react"

export function useOnce(func: () => void, deps: any[] = []) {
  const usedRef = useRef(false)
  useEffect(() => {
    if (!usedRef.current) {
      func()
      usedRef.current = true
    }
  }, deps)
}
