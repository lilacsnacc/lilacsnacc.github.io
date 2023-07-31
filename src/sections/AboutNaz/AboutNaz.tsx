import { useContext } from 'react'

import CopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/FileDownload'

import ResumePath from '/Nazaire_Shabazz_Resume_2023.pdf'

import { openForHire, rate, yearsOfExp, email } from '../../constants'

import { Section } from '..'
import { SectionContext } from '../../contexts/Section'
import { SectionIndex } from '../../contexts/Section/Section'

import css from './AboutNaz.module.css'

export function AboutNaz() {
  const { setSectionIdx } = useContext(SectionContext)

  const toMyProjects = () => setSectionIdx?.(SectionIndex.Projects)
  const toContactMe = () => setSectionIdx?.(SectionIndex.ContactMe)
  const copyEmail = () => navigator.clipboard.writeText(email)

  return (
    <Section title='About Naz'>
      <article className={css.article}>
        <p>
          Hello! I'm Naz, a fullstack software developer / designer with {yearsOfExp}+
          years of experience. Nice to meet you :)
        </p>
        <p>
          For this portfolio site, I tried to show off a bunch of my favorite tech - more
          info in the <button onClick={toMyProjects}>My Projects</button> section.
        </p>
        <p>
          {openForHire
            ? `I am looking for new work, with rates starting at ${rate} - if you are looking for a developer, `
            : `I am not in the job market right now, but if you still want to chat, you can `}
          reach me through the <button onClick={toContactMe}>Contact Me</button> form.
        </p>
        <div className={css.buttonContainer}>
          <p>
            email:{' '}
            <button onClick={copyEmail}>
              {email}
              <CopyIcon />
            </button>
          </p>
          <p>
            resume:{' '}
            <a href={ResumePath} target='_blank' download>
              Nazaire Shabazz 2023 <DownloadIcon />
            </a>
          </p>
        </div>
      </article>
    </Section>
  )
}
