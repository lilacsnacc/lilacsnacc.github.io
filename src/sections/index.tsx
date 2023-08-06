import { ReactNode } from 'react'

import css from './style.module.css'

type SectionProps = {
  title: string
  className?: string
  children?: ReactNode
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`${css.section} ${className}`}>
      <h1 className={css.h1}>{title}</h1>

      <div className={css.contentContainer}>{children}</div>
    </section>
  )
}
