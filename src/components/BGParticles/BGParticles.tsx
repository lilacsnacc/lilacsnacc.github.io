import { useCallback, useContext, useEffect, useState } from 'react'

import type { Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

import { UserSettingsContext } from '../../contexts/UserSettings'

// (BackGround)Particles
export const BGParticles = () => {
  const { isDarkMode } = useContext(UserSettingsContext)

  const [color, setColor] = useState('')

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    // if I don't use a timeout, everything happens too quickly,...
    // ... causing color to be set to the old value of the --highlight var
    const timeout = setTimeout(() => {
      const docEl = document.documentElement
      const newColor = getComputedStyle(docEl).getPropertyValue('--highlight')

      setColor(newColor)
    }, 10)

    return () => clearTimeout(timeout)
  }, [isDarkMode])

  return (
    <Particles
      init={particlesInit}
      options={{
        zLayers: 2,
        particles: {
          links: {
            enable: true,
            width: 4,
            color: color,
            distance: 160
          },
          color: { value: color },
          shape: { type: 'circle' },
          size: { value: { min: 4, max: 16 } },
          opacity: { value: { min: 0.4, max: 1 } },
          move: { enable: true, speed: { min: 1, max: 1.5 } },
          number: { density: { enable: true, area: 512 }, value: 32 }
        },
        interactivity: {
          events: {
            onDiv: [
              {
                enable: true,
                selectors: '.particle-bouncer-circle',
                mode: 'bounce',
                type: 'circle'
              },
              {
                enable: true,
                selectors: '.particle-bouncer-rectangle',
                mode: 'bounce',
                type: 'rectangle'
              }
            ]
          }
        }
      }}
    />
  )
}
