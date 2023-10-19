import { useEffect, useState } from "react"

const useThemeDetector = () => {
    const getCurrentTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
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
