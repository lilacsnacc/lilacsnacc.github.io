import { createContext } from "react"
import { AlertColor } from "@mui/material"

export enum SectionIndex {
  Projects,
  AboutNaz,
  ContactMe
}

type CtxProps = {
  sectionIdx?: number | null
  setSectionIdx?: (v: number | null) => void
  projectIdx?: number
  setProjectIdx?: (v: number) => void
  openSnackbar?: (message: string, severity?: AlertColor) => void
}

export const SectionContext = createContext<CtxProps>({})