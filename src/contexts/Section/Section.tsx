import { createContext } from "react"

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
}

export const SectionContext = createContext<CtxProps>({})