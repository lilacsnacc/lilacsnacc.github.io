import { useContext } from 'react'

import MoonIcon from '@mui/icons-material/Brightness4'
import SunIcon from '@mui/icons-material/Brightness7'
import VolumeUp from '@mui/icons-material/VolumeUp'
import VolumeOff from '@mui/icons-material/VolumeOff'

import LogoPath from '/logo.svg'

import { UserSettingsContext } from '../../contexts/UserSettings'

import css from './Header.module.css'
import { InteractiveButton } from '../InteractiveButton'

export const Header = () => {
  const { volumeMuted, setVolumeMuted, isDarkMode, setIsDarkMode } =
    useContext(UserSettingsContext)

  return (
    <header className={css.header}>
      <img
        src={LogoPath}
        className={`${css.logo} particle-bouncer-rectangle theme-invert`}
        alt='Nazaire Shabazz logo'
      />
      <menu className={css.menu}>
        <li>
          <InteractiveButton
            className={'particle-bouncer-circle'}
            onClick={() => setVolumeMuted(!volumeMuted)}
          >
            {volumeMuted ? <VolumeOff fontSize='large' /> : <VolumeUp fontSize='large' />}
          </InteractiveButton>
        </li>
        <li>
          <InteractiveButton
            className={'particle-bouncer-circle'}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <SunIcon fontSize='large' /> : <MoonIcon fontSize='large' />}
          </InteractiveButton>
        </li>
      </menu>
    </header>
  )
}
