import { ReactNode, useEffect, useState } from 'react'
import { AlertColor } from '@mui/material'

import ProjectsIcon from '@mui/icons-material/FolderSpecial'
import AboutIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'

import { ProjectMetadata } from '../../models/database.types'
import { useProjects } from '../../hooks/useProjects'

import { SectionContext } from '../../contexts/Section'
import { SectionIndex } from '../../contexts/Section/Section'

import { ToggleSectionButton } from '../InteractiveButton/ToggleButton'
import { LilPopup } from '../LilPopup/LilPopup'

import { Section } from '../../sections'
import { Projects } from '../../sections/Projects'
import { AboutNaz } from '../../sections/AboutNaz'
import { ContactMe } from '../../sections/ContactMe'

import css from './Main.module.css'
import { MarkdownViewer } from '../MarkdownViewer/MarkdownViewer'

const content: { icon: ReactNode; section: ReactNode }[] = []
content[SectionIndex.Projects] = { icon: <ProjectsIcon />, section: <Projects /> }
;(content[SectionIndex.AboutNaz] = { icon: <AboutIcon />, section: <AboutNaz /> }),
  (content[SectionIndex.ContactMe] = { icon: <EmailIcon />, section: <ContactMe /> })

const defaultSection = <Section title={"Nazaire Shabazz's Portfolio"} />

export const Main = () => {
  const { data: resProjects, error: errProjects, loading } = useProjects()

  const [currentProject, setCurrentProject] = useState<ProjectMetadata>()
  const [projects, setProjects] = useState<ProjectMetadata[]>()
  const [projectId, setProjectId] = useState<number | null>()
  const [sectionIdx, setSectionIdx] = useState<number | null>()

  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarSeverity, setSnackarSeverity] = useState<AlertColor>('success')

  const onSectionButtonClick = (index: number) =>
    !sectionIdx === !index && projectId
      ? setProjectId(null)
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

  useEffect(() => {
    if (loading) return

    resProjects && setProjects(resProjects)
    resProjects && console.log('project data:', resProjects)
    errProjects && console.log('error', errProjects)
  }, [loading])

  useEffect(() => {
    setCurrentProject(projects?.find(({ id }) => id == projectId))
  }, [projects, projectId])

  return (
    <SectionContext.Provider
      value={{
        projects,
        projectId,
        setProjectId,
        sectionIdx,
        setSectionIdx,
        openSnackbar
      }}
    >
      <main className={css.main}>
        {currentProject && (
          <MarkdownViewer
            sourceUrl={currentProject.markdown_url}
            className={css.markdown}
            onClose={() => setProjectId(null)}
          />
        )}

        {sectionIdx == null ? defaultSection : content[sectionIdx].section}

        <menu className={`${css.menu} ${currentProject && css.lower}`}>
          {content.reduce((arr, { icon: children }, key) => {
            arr.push(
              <ToggleSectionButton
                className={`particle-bouncer-rectangle`}
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

          <div className={css.bgGradient}></div>
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
