import { ReactNode, useEffect, useState } from 'react'
import { AlertColor } from '@mui/material'

import ProjectsIcon from '@mui/icons-material/FolderSpecial'
import AboutIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'

import { ProjectMetadata } from '../../models/database.types'
import { useProjects } from '../../hooks/useProjects'

import { SectionContext } from '../../contexts/Section'
import { SectionIndex } from '../../contexts/Section/Section'

import { Projects } from '../../sections/Projects'
import { AboutNaz } from '../../sections/AboutNaz'
import { ContactMe } from '../../sections/ContactMe'
import { TitleSection } from '../../sections/TitleSection'

import { MarkdownViewer } from '../MarkdownViewer/MarkdownViewer'
import { ToggleSectionButton } from '../InteractiveButton/ToggleButton'
import { LilPopup } from '../LilPopup/LilPopup'

import css from './Main.module.css'

type Content = {
  icon: ReactNode
  section: ReactNode
}

const contentArr: Content[] = []

contentArr[SectionIndex.Projects] = { icon: <ProjectsIcon />, section: <Projects /> }
contentArr[SectionIndex.AboutNaz] = { icon: <AboutIcon />, section: <AboutNaz /> }
contentArr[SectionIndex.ContactMe] = { icon: <EmailIcon />, section: <ContactMe /> }

const defaultSection = <TitleSection />

export const Main = () => {
  const { data: resProjects, error: errProjects, loading } = useProjects()

  const [currentProject, setCurrentProject] = useState<ProjectMetadata>()
  const [projects, setProjects] = useState<ProjectMetadata[]>()
  const [projectId, setProjectId] = useState<number | null>()
  const [sectionIdx, setSectionIdx] = useState<number | null>()

  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarSeverity, setSnackarSeverity] = useState<AlertColor>('success')

  function onSectionButtonClick(index: number) {
    if (index !== sectionIdx || !projectId)
      setSectionIdx(sectionIdx === index ? null : index)

    setProjectId(null)
  }

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

        {sectionIdx == null ? defaultSection : contentArr[sectionIdx].section}

        <menu className={`${css.menu} ${currentProject && css.lower}`}>
          {contentArr.reduce((arr, { icon: children }, key) => {
            arr.push(
              <ToggleSectionButton
                className={`particle-bouncer-rectangle`}
                toggled={sectionIdx === key}
                onClick={() => onSectionButtonClick(key)}
                {...{ children, key }}
              />
            )

            // put a line between each section button
            if (key !== contentArr.length - 1)
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
