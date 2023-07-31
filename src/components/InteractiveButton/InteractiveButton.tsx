import { ReactNode, useContext } from 'react'

import { IconButton } from '@mui/material'

import { AudioContext } from '../../contexts/Audio'

type InteractiveButtonProps = {
  onClick?: () => any
  isSubmit?: boolean
  className?: string
  children?: ReactNode
}

export const InteractiveButton = (props: InteractiveButtonProps) => {
  const { playSound, setUserInteracted } = useContext(AudioContext)

  const { onClick: clickCB, isSubmit, className = '', children } = props

  const onMouseEnter = () => playSound?.('hover')

  function onClick() {
    setUserInteracted?.(true)
    playSound?.('click')

    clickCB?.()
  }

  return (
    <IconButton
      color='inherit'
      type={isSubmit ? 'submit' : undefined}
      className={`${className}`}
      {...{ onClick, onMouseEnter, children }}
    />
  )
}
