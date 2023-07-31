import { ReactNode } from 'react'

import RotatedX from '@mui/icons-material/Add'

import css from './ToggleButton.module.css'
import { InteractiveButton } from '..'

type ToggleButtonProps = {
  toggled: boolean
  onClick: () => any
  isSubmit?: boolean
  clockwise?: boolean
  className?: string
  children?: ReactNode
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { toggled, className = '', onClick, isSubmit, clockwise, children } = props

  return (
    <InteractiveButton
      className={[
        className,
        css.menuButton,
        toggled && css.active,
        clockwise && css.clockwise
      ].join(' ')}
      {...{ onClick, isSubmit }}
    >
      {toggled ? <RotatedX /> : children}
    </InteractiveButton>
  )
}
