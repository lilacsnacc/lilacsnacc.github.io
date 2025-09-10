import { useContext } from 'react'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/FileDownload'

import ResumePath from '/Nazaire_Shabazz_Resume_2025.pdf'

import { openForHire, rate, yearsOfExp, email } from '../../constants'

import { Section } from '..'
import { SectionContext } from '../../contexts/Section'
import { SectionIndex } from '../../contexts/Section/Section'
import { InteractiveButton } from '../../components/InteractiveButton'

import css from './AboutNaz.module.css'

export function AboutNaz() {
  const { setSectionIdx, openSnackbar } = useContext(SectionContext)

  const toMyProjects = () => setSectionIdx?.(SectionIndex.Projects)
  const toContactMe = () => setSectionIdx?.(SectionIndex.ContactMe)
  const toGithub = () => window.open('https://github.com/lilacsnacc', '_blank')?.focus()
  const toLinkedIn = () =>
    window.open('https://www.linkedin.com/in/nqshabazz/', '_blank')?.focus()
  function copyEmail() {
    navigator.clipboard.writeText(email)
    openSnackbar?.('email copied to clipboard')
  }
  function downloadResume() {
    const elem = document.createElement('a')

    elem.download = 'Nazaire Shabazz Resume 2025'
    elem.href = ResumePath
    elem.click()
  }

  return (
    <Section title='About Naz'>
      <article className={css.article}>
        <p>
          Hello! I'm Naz, a fullstack software developer with {yearsOfExp}+ years of
          experience. Nice to meet you 😊
        </p>
        <p>
          For this portfolio site, I tried to show off a bunch of my favorite tech - more
          info in the{' '}
          <InteractiveButton onClick={toMyProjects}>My Projects</InteractiveButton>{' '}
          section.
        </p>
        <p>
          {openForHire
            ? `I am looking for new work, with rates starting at ${rate} - if you are looking for a developer, `
            : `I am not in the job market right now, but if you still want to chat, you can `}
          reach me through the{' '}
          <InteractiveButton onClick={toContactMe}>Contact Me</InteractiveButton> form.
        </p>
        <InteractiveButton onClick={toGithub}>
          Github <GitHubIcon />
          <OpenInNewIcon />
        </InteractiveButton>{' '}
        <InteractiveButton onClick={toLinkedIn}>
          LinkedIn <LinkedInIcon />
          <OpenInNewIcon />
        </InteractiveButton>
        <div className={css.buttonContainer}>
          <p>
            email:{' '}
            <InteractiveButton onClick={copyEmail}>
              {email}
              <CopyIcon />
            </InteractiveButton>
          </p>
          <p>
            resume:{' '}
            <InteractiveButton onClick={downloadResume}>
              Nazaire Shabazz 2025 <DownloadIcon />
            </InteractiveButton>
          </p>
        </div>
      </article>
    </Section>
  )
}
