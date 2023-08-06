import { ReactNode, useContext, useEffect, useState } from 'react'

import { SectionContext } from '../../contexts/Section'

import { Section } from '..'
import { ProjectButton } from '../../components/InteractiveButton/ProjectButton'

import css from './Projects.module.css'
import { ProjectMetadata } from '../../models/database.types'

export function Projects() {
  const { projects, setProjectId } = useContext(SectionContext)
  const [chunkedProjects, setChunkedProjects] = useState<ProjectMetadata[][]>([])

  useEffect(() => {
    if (!projects) return

    const newProjects = Array.from({ length: Math.ceil(projects.length / 3) }, (_, i) =>
      projects.slice(i * 3, i * 3 + 3)
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
              {prjArr.reduce((arr, prj, j) => {
                if (!i && !j)
                  arr.push(<div className={`${css.square} ${css.blank}`} key='blank' />)

                arr.push(
                  <ProjectButton
                    title={prj.name || ''}
                    onClick={() => setProjectId?.(prj.id)}
                    bgImageUrl={prj.image_url || ''}
                    bgColor={prj.bg_color || ''}
                    transitionDelay={`${(i * 3 + j) * 100}ms`}
                    className={css.square}
                    key={`square-${j}`}
                  />
                )
                return arr
              }, [] as ReactNode[])}
            </div>
          )
        })}
        <div className={css.containerBuffers}></div>
      </div>
    </Section>
  )
}
