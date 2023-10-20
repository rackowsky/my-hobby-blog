import { useEffect, useState } from "react"
import useIsSsr from "../utils/useIsSsr"

const useThemeDetector = () => {
    const isSsr = useIsSsr()

    const getCurrentTheme = () => {
        if (isSsr) {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
        } else {
            return null
        }
    }

    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme())

    const mqListener = (e) => {
        setIsDarkTheme(e.matches)
    }

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
        darkThemeMq.addEventListener("change", (e) => mqListener(e))
        return () =>
            darkThemeMq.removeEventListener("change", (e) => mqListener(e))
    }, [])
    return isDarkTheme
}

export default useThemeDetector
