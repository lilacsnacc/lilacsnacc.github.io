import { useEffect, useState } from 'react'

import { BroadcastCBProps, usePlayerPositions } from '../../hooks/usePlayerPositions'

import css from './BGPlayers.module.css'

type Position = {
  x: number
  y: number
}

const localID = '0'
const startingPositionMap = new Map<string, Position>([[localID, { x: 0, y: 0 }]])

export const BGPlayers = () => {
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 })
  const [playerPositions, setPlayerPositions] = useState(startingPositionMap)
  const [targetPositions, setTargetPositions] = useState(new Map(startingPositionMap))

  const setPlayerPosition = (id: string, pos: Position) =>
    setPlayerPositions(new Map(playerPositions.set(id, pos)))
  const setTargetPosition = (id: string, pos: Position) =>
    setTargetPositions(new Map(targetPositions.set(id, pos)))

  const onUpdate = ({ payload: { id, x = 0, y = 0 } }: BroadcastCBProps) => {
    if (!id) return

    setTargetPosition(id, { x, y })
    !playerPositions.has(id) && setPlayerPosition(id, { x, y })
  }

  const { sendBroadcast } = usePlayerPositions(onUpdate)

  useEffect(() => {
    function onMouseMove({ x: mX, y: mY }: MouseEvent) {
      const docEl = document.documentElement
      const playerSizeStyle = getComputedStyle(docEl).getPropertyValue('--player-size')
      const offset = Number(playerSizeStyle.replace(/\D/g, '') || 0) * 0.5
      const x = Number(((100 * (mX - offset - 4)) / (innerWidth || mX * 2)).toFixed(2))
      const y = Number(((100 * (mY - offset - 4)) / (innerHeight || mY * 2)).toFixed(2))

      setCursorPosition({ x: mX, y: mY })
      setTargetPosition(localID, { x, y })
      sendBroadcast({ x, y })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  useEffect(() => {
    const lerpInterval = setInterval(() => {
      targetPositions.forEach(({ x: tX, y: tY }, id) => {
        const playerPos = playerPositions.get(id)

        if (!playerPos) return 0

        const lerp = 0.1
        const { x: pX, y: pY } = playerPos
        const newPos = { x: pX + (tX - pX) * lerp, y: pY + (tY - pY) * lerp }

        setPlayerPosition(id, newPos)
      })
    }, 15)

    return () => clearInterval(lerpInterval)
  }, [])

  return (
    <div className={css.container}>
      {[...playerPositions].map(([key, { x, y }]) => (
        <div
          className={`${css.player} particle-repulser-circle`}
          key={key}
          style={{ top: `${y}%`, left: `${x}%` }}
        />
      ))}

      <div
        className={css.cursor}
        style={{
          top: `${cursorPosition?.y}px`,
          left: `${cursorPosition?.x}px`
        }}
      />
    </div>
  )
}
