import { ReactNode, useEffect, useState } from 'react'
import { Fade, SxProps } from '@mui/material'

import { InteractiveButton } from '..'

import css from './ProjectButton.module.css'

type ProjectButtonProps = {
  onClick: () => any
  title?: string
  bgImageUrl?: string
  bgColor?: string
  className?: string
  transitionDelay?: string
  children?: ReactNode
}

export const ProjectButton = (props: ProjectButtonProps) => {
  const {
    className = '',
    title,
    transitionDelay = '0',
    onClick,
    bgImageUrl,
    bgColor,
    children
  } = props

  const [sx, setSx] = useState<SxProps>()

  useEffect(() => {
    const bgImageStyle = bgImageUrl ? { backgroundImage: `url(${bgImageUrl}) !important` } : {}
    const bgColorStyle = bgColor ? { backgroundColor: `${bgColor} !important` } : {}
    setSx({ ...bgImageStyle, ...bgColorStyle, backgroundSize: 'cover !important' })
  }, [bgImageUrl, bgColor])

  return (
    <Fade in timeout={500} style={{ transitionDelay }}>
      <div>
        <InteractiveButton
          className={[className, css.projectButton].join(' ')}
          {...{ onClick, title, sx, children }}
        />
      </div>
    </Fade>
  )
}
