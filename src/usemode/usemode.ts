import { useEffect, useState } from "react"
import { DarkMode, LightMode, Mode, SystemMode } from "./types"

function modeToName(m: Mode): string {
    console.log("rendered modeToName()")
    switch(m) {
        case SystemMode: return "System"
        case LightMode: return "Light"
        case DarkMode: return "Dark"
    }
}

function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function getSavedMode() {
    return localStorage.getItem("mode")
}

function applySystem() {
    prefersDark() ? applyDark() : applyLight()
}

function applyDark() {
    document.body.classList.add("dark")
}

function applyLight() {
    document.body.classList.remove("dark")
}

function addModeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        applySystem()
    })
}

function removeModeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
        applySystem()
    })
}

export function useMode() {
    const [mode, setMode] = useState<Mode>(SystemMode)

    function saveMode(m: Mode) {
        setMode(m)
        localStorage.setItem("mode", m)
    }

    // Init theme
    useEffect(() => {
        let localMode = getSavedMode() || SystemMode
        if(localMode === SystemMode) {
            applySystem()
            addModeListener()
        } else if(localMode === DarkMode) {
            applyDark()
        }
        setMode(localMode as Mode)
    }, [])

    // Run if mode changes by the user
    useEffect(() => {
        switch(mode) {
            case SystemMode: {
                applySystem()
                saveMode(SystemMode)
                addModeListener()
                break
            }
            case LightMode: {
                applyLight()
                saveMode(LightMode)
                removeModeListener()
                break
            }
            case DarkMode: {
                applyDark()
                saveMode(DarkMode)
                removeModeListener()
                break
            }
        }

    }, [mode])

    return {
        isDark: mode === DarkMode,
        name: modeToName(mode),
        setDark: () => { setMode(DarkMode) },
        setLight: () => { setMode(LightMode) },
        setSystem: () => { setMode(SystemMode) },
        toggle: () => {
            if(mode === SystemMode) {
                prefersDark() ? setMode(LightMode) : setMode(DarkMode)
            } else {
                mode === DarkMode ? setMode(LightMode) : setMode(LightMode)
            }
        },
    } as const
}