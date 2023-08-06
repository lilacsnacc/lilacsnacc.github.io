import { createContext } from 'react'
import { AlertColor } from '@mui/material'
import { ProjectMetadata } from '../../models/database.types'

export enum SectionIndex {
  Projects,
  AboutNaz,
  ContactMe
}

type CtxProps = {
  projects?: ProjectMetadata[]
  sectionIdx?: number | null
  setSectionIdx?: (v: number | null) => void
  projectId?: number | null
  setProjectId?: (v: number | null) => void
  openSnackbar?: (message: string, severity?: AlertColor) => void
}

export const SectionContext = createContext<CtxProps>({})
