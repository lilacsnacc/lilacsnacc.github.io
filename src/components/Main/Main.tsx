import { ReactNode, useState } from 'react'
import { AlertColor } from '@mui/material'

import ProjectsIcon from '@mui/icons-material/FolderSpecial'
import AboutIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'

import { SectionContext } from '../../contexts/Section'
import { SectionIndex } from '../../contexts/Section/Section'

import { ToggleSectionButton } from '../InteractiveButton/ToggleButton'
import { LilPopup } from '../LilPopup/LilPopup'

import { Section } from '../../sections'
import { Projects } from '../../sections/Projects'
import { AboutNaz } from '../../sections/AboutNaz'
import { ContactMe } from '../../sections/ContactMe'

import css from './Main.module.css'

const content: { icon: ReactNode; section: ReactNode }[] = []
content[SectionIndex.Projects] = { icon: <ProjectsIcon />, section: <Projects /> }
;(content[SectionIndex.AboutNaz] = { icon: <AboutIcon />, section: <AboutNaz /> }),
  (content[SectionIndex.ContactMe] = { icon: <EmailIcon />, section: <ContactMe /> })

const defaultSection = <Section title={"Nazaire Shabazz's Portfolio"} />

export const Main = () => {
  const [projectIdx, setProjectIdx] = useState(0)
  const [sectionIdx, setSectionIdx] = useState<number | null>()
  
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarSeverity, setSnackarSeverity] = useState<AlertColor>('success')

  const onSectionButtonClick = (index: number) =>
    !sectionIdx === !index && projectIdx
      ? setProjectIdx(0)
      : setSectionIdx(sectionIdx === index ? null : index)

  function openSnackbar(message: string, severity: AlertColor = 'success') {
    setSnackarSeverity(severity)
    setSnackbarMessage(message)
    setSnackbarOpen(true)
  }

  function onSnackbarClose() {
    setSnackbarMessage('')
    setSnackbarOpen(false)
  }

  return (
    <SectionContext.Provider
      value={{ projectIdx, setProjectIdx, sectionIdx, setSectionIdx, openSnackbar }}
    >
      <main className={css.main}>
        {sectionIdx == null ? defaultSection : content[sectionIdx].section}

        <menu className={css.menu}>
          {content.reduce((arr, { icon: children }, key) => {
            arr.push(
              <ToggleSectionButton
                className='particle-bouncer-rectangle'
                toggled={sectionIdx === key}
                clockwise={key < content.length * 0.5}
                onClick={() => onSectionButtonClick(key)}
                {...{ children, key }}
              />
            )

            // put a line between each section button
            if (key !== content.length - 1)
              arr.push(<hr key={`hr${key}`} className={css.hr} />)

            return arr
          }, [] as ReactNode[])}
        </menu>
      </main>

      <LilPopup
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={onSnackbarClose}
        severity={snackbarSeverity}
      />
    </SectionContext.Provider>
  )
}
