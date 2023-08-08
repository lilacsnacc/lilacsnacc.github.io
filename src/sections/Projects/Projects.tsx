import { useContext, useEffect, useState } from 'react'

import { SectionContext } from '../../contexts/Section'

import { Section } from '..'
import { ProjectButton } from '../../components/InteractiveButton/ProjectButton'

import css from './Projects.module.css'
import { ProjectMetadata } from '../../models/database.types'

const blankProject = { id: -1, name: '', bg_color: '', image_url: '', markdown_url: '' }

export function Projects() {
  const { projects, setProjectId } = useContext(SectionContext)
  const [chunkedProjects, setChunkedProjects] = useState<ProjectMetadata[][]>([])

  useEffect(() => {
    if (!projects) return

    const projArr = [...projects]

    if (projArr.length > 1) projArr.unshift(blankProject)

    const newProjects = Array.from({ length: Math.ceil(projArr.length / 3) }, (_, i) =>
      projArr.slice(i * 3, i * 3 + 3)
    )

    setChunkedProjects(newProjects)
  }, [])

  return (
    <Section title='My Projects' className={css.projects}>
      <div className={css.projectsContainer}>
        <div className={css.containerBuffers}></div>
        {chunkedProjects.map((prjArr, i) => {
          return (
            <div className={css.squareContainer} key={`container-${i}`}>
              {prjArr.map((prj, j) => (
                <ProjectButton
                  title={prj.name || ''}
                  onClick={() => setProjectId?.(prj.id)}
                  bgImageUrl={prj.image_url || ''}
                  bgColor={prj.bg_color || ''}
                  transitionDelay={`${(i * 3 + j) * 100}ms`}
                  className={`${css.square} ${!prj.name && css.blank}`}
                  key={`square-${j}`}
                />
              ))}
            </div>
          )
        })}
        <div className={css.containerBuffers}></div>
      </div>
    </Section>
  )
}
