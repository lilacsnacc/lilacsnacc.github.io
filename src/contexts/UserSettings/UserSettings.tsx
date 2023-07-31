import { ReactNode, createContext, useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

type CtxProps = {
  volumeMuted: boolean
  setVolumeMuted: (value: boolean) => any
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => any
}

export const UserSettingsContext = createContext<CtxProps>({
  volumeMuted: false,
  setVolumeMuted: () => 0,
  isDarkMode: false,
  setIsDarkMode: () => 0
})

const isVolumeEnabledKey = 'volumeEnabled'
const defaultVolumeEnabled = !!localStorage.getItem(isVolumeEnabledKey)

const isDarkModeKey = 'isDarkMode'
const defaultDarkMode = !!localStorage.getItem(isDarkModeKey)

export function UserSettingsProvider({ children }: { children?: ReactNode }) {
  const darkModePreference = useMediaQuery('(prefers-color-scheme: dark)')

  const [volumeMuted, setVolumeMuted] = useState(!defaultVolumeEnabled)
  const [isDarkMode, setIsDarkMode] = useState(darkModePreference || defaultDarkMode)

  useEffect(() => {
    volumeMuted
      ? localStorage.removeItem(isVolumeEnabledKey)
      : localStorage.setItem(isVolumeEnabledKey, '1')
  }, [volumeMuted])

  useEffect(() => {
    isDarkMode
      ? localStorage.setItem(isDarkModeKey, '1')
      : localStorage.removeItem(isDarkModeKey)

    document.querySelector(':root')?.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <UserSettingsContext.Provider
      value={{ volumeMuted, setVolumeMuted, isDarkMode, setIsDarkMode }}
    >
      {children}
    </UserSettingsContext.Provider>
  )
}
