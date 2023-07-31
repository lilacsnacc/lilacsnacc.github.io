import { ReactNode, createContext, useState, useEffect, useContext } from 'react'
import { UserSettingsContext } from '../UserSettings'

// thanks to SergeQuadrado of freesounds.org
// https://freesound.org/people/SergeQuadrado/sounds/683506/
import BGM from '../../assets/bgm.wav'
// thanks to plasterbrain of freesounds.org
// https://freesound.org/people/plasterbrain/sounds/237421/
import ButtonHoverSound from '../../assets/button-hover.ogg'
// thanks to Bertrof of freesounds.org
// https://freesound.org/people/Bertrof/sounds/131660/
import ButtonClickSound from '../../assets/button-click.wav'

type SoundName = 'hover' | 'click' | 'bgm'

const Sounds: { [x in SoundName]: HTMLAudioElement } = {
  bgm: new Audio(BGM),
  hover: new Audio(ButtonHoverSound),
  click: new Audio(ButtonClickSound)
}

type CtxProps = {
  setUserInteracted?: (v: boolean) => void
  playSound?: (sound: SoundName) => void
}

export const AudioContext = createContext<CtxProps>({})

export function AudioProvider({ children }: { children?: ReactNode }) {
  const { volumeMuted } = useContext(UserSettingsContext)

  // in chrome, audio cannot play until the user has interacted. (this is fair)
  const [userInteracted, setUserInteracted] = useState(false)

  function resetVolume(mute = false) {
    Sounds.bgm.loop = true
    Sounds.bgm.volume = mute ? 0 : 0.5
    Sounds.hover.volume = mute ? 0 : 0.2
    Sounds.click.volume = mute ? 0 : 0.05
    Sounds.click.playbackRate = 2.5

    !mute && Sounds.bgm.play()
  }

  function playSound(sound: SoundName) {
    if (volumeMuted || !userInteracted) return

    Sounds[sound].currentTime = 0
    Sounds[sound].play()
  }

  useEffect(() => {
    resetVolume(volumeMuted || !userInteracted)
  }, [volumeMuted, userInteracted])

  return (
    <AudioContext.Provider value={{ setUserInteracted, playSound }}>
      {children}
    </AudioContext.Provider>
  )
}
