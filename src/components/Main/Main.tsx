import { ReactNode, useState } from 'react'

import ProjectsIcon from '@mui/icons-material/FolderSpecial'
import AboutIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'

import { SectionContext } from '../../contexts/Section'

import { ToggleSectionButton } from '../InteractiveButton/ToggleButton'

import { Section } from '../../sections'
import { Projects } from '../../sections/Projects'
import { AboutNaz } from '../../sections/AboutNaz'
import { ContactMe } from '../../sections/ContactMe'

import css from './Main.module.css'
import { SectionIndex } from '../../contexts/Section/Section'

const content: {icon: ReactNode, section: ReactNode}[] = []
content[SectionIndex.Projects] = { icon: <ProjectsIcon />, section: <Projects /> }
content[SectionIndex.AboutNaz] = { icon: <AboutIcon />, section: <AboutNaz /> },
content[SectionIndex.ContactMe] = { icon: <EmailIcon />, section: <ContactMe /> }

const defaultSection = <Section title={"Nazaire Shabazz's Portfolio"} />

export const Main = () => {
  const [projectIdx, setProjectIdx] = useState(0)
  const [sectionIdx, setSectionIdx] = useState<number | null>()

  const onSectionButtonClick = (index: number) =>
    !sectionIdx === !index && projectIdx
      ? setProjectIdx(0)
      : setSectionIdx(sectionIdx === index ? null : index)

  return (
    <SectionContext.Provider
      value={{ projectIdx, setProjectIdx, sectionIdx, setSectionIdx }}
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
    </SectionContext.Provider>
  )
}
