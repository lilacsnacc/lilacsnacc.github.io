import { ReactNode, useContext } from 'react'

import { IconButton, SxProps } from '@mui/material'

import { AudioContext } from '../../contexts/Audio'

import css from './InteractiveButton.module.css'

type InteractiveButtonProps = {
  onClick?: () => any
  sx?: SxProps
  title?: string
  isSubmit?: boolean
  className?: string
  children?: ReactNode
}

export const InteractiveButton = (props: InteractiveButtonProps) => {
  const { playSound, setUserInteracted } = useContext(AudioContext)

  const { onClick: clickCB, isSubmit, className = '', title = '', sx, children } = props

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
      className={`${className} ${css.iconButton}`}
      aria-label={title}
      {...{ onClick, onMouseEnter, children, title, sx }}
    />
  )
}
