import { useEffect, useState } from 'react'

import { Section } from '..'

import css from './TitleSection.module.css'

const textArr = [
  'Fullstack Web Developer',
  'Large, flying circles in the background are other visitors!',
  'Learn more about the portfolio in the Projects section',
  'A mini biography is available in the About Me section',
  `Let's get in touch through the Contact Me form`
]

export function TitleSection() {
  const [showText, setShowText] = useState(true)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (showText) {
      const textTimeout = setTimeout(
        () => {
          setShowText(false)
        },
        textIndex ? 8000 : 10000
      )
      return () => clearTimeout(textTimeout)
    } else {
      const textTimeout = setTimeout(() => {
        setTextIndex((textIndex + 1) % textArr.length)
        setShowText(true)
      }, 1500)
      return () => clearTimeout(textTimeout)
    }
  }, [showText])

  return (
    <Section className={css.titleSection} title={'Nazaire Shabazz'}>
      <h2 className={`${css.h1} ${showText && css.show}`}>{textArr[textIndex]}</h2>
    </Section>
  )
}
