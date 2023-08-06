import { useEffect, useState } from 'react'

import { Section } from '..'

import css from './Projects.module.css'
import { Fade, Grow } from '@mui/material'

type ProjectMetadata = {}

export function Projects() {
  const [projects, setProjects] = useState<ProjectMetadata[][]>([])

  useEffect(() => {
    const loadedProjects = new Array(8).fill({})
    const newProjects = Array.from(
      { length: Math.ceil(loadedProjects.length / 3) },
      (_, i) => loadedProjects.slice(i * 3, i * 3 + 3)
    )
    
    setProjects(newProjects)
  }, [])

  return (
    <Section title='My Projects' className={css.projects}>
      <div className={css.projectsContainer}>
        <div className={css.containerBuffers}></div>
        {projects.map((prjArr, i) => {
          return (
            <div className={css.squareContainer} key={`container-${i}`}>
              {prjArr.map((prj, j) => (
                <Fade
                  in
                  timeout={500}
                  style={{ transitionDelay: `${(i * 3 + j) * 100}ms` }}
                  key={`square-${j}`}
                >
                  <div className={`${css.square} ${!i && !j ? css.blank : ''}`} />
                </Fade>
              ))}
            </div>
          )
        })}
        <div className={css.containerBuffers}></div>
      </div>
    </Section>
  )
}
