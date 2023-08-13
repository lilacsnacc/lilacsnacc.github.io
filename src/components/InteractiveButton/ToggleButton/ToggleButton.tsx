import { ReactNode } from 'react'
import RotatedX from '@mui/icons-material/Add'

import { InteractiveButton } from '..'

import css from './ToggleButton.module.css'

type ToggleButtonProps = {
  toggled: boolean
  onClick: () => any
  className?: string
  children?: ReactNode
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { toggled, className = '', onClick, children } = props

  return (
    <InteractiveButton
      className={[className, css.menuButton, toggled && css.active].join(' ')}
      {...{ onClick }}
    >
      {toggled ? <RotatedX /> : children}
    </InteractiveButton>
  )
}
