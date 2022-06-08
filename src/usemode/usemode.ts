import { useCallback, useEffect, useState } from "react"
import { DarkMode, LightMode, Mode } from "./types"

export function useMode(m: Mode = LightMode) {
    const [_mode, _setMode] = useState<Mode>(m)

    // Applies dark mode
    const applyDarkMode = useCallback(() => {
        document.body.classList.add("dark")
        _setMode(DarkMode)
        localStorage.setItem("mode", DarkMode)
    }, [])

    // Applies light mode
    const applyLightMode = useCallback(() => {
        document.body.classList.remove("dark")
        _setMode(LightMode)
        localStorage.setItem("mode", LightMode)
    }, [])

    // Toggles mode
    const toggleMode = useCallback(() => {
        _mode === LightMode ? applyDarkMode() : applyLightMode()
    }, [_mode , applyLightMode, applyDarkMode])

    // Runs at startup
    useEffect(() => {
        const localMode = localStorage.getItem("mode") as Mode || m
        localMode === LightMode ? applyLightMode() : applyDarkMode()
        _setMode(localMode)
    }, [m, applyDarkMode, applyLightMode])    

    // Return object
    return {
        modeName: _mode,
        isDarkMode: _mode === DarkMode ? true : false,
        setDarkMode: applyDarkMode,
        setLightMode: applyLightMode,
        toggleMode: toggleMode,
    } as const
}