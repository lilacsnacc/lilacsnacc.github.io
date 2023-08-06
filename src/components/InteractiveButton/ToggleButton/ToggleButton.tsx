import { ReactNode } from 'react'
import RotatedX from '@mui/icons-material/Add'

import { InteractiveButton } from '..'

import css from './ToggleButton.module.css'

type ToggleButtonProps = {
  toggled: boolean
  onClick: () => any
  clockwise?: boolean
  className?: string
  children?: ReactNode
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { toggled, className = '', onClick, clockwise, children } = props

  return (
    <InteractiveButton
      className={[
        className,
        css.menuButton,
        toggled && css.active,
        clockwise && css.clockwise
      ].join(' ')}
      {...{ onClick }}
    >
      {toggled ? <RotatedX /> : children}
    </InteractiveButton>
  )
}
