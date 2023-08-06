import { useEffect, useState, MouseEvent } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import css from './MarkdownViewer.module.css'

type MarkdownViewerProps = {
  sourceUrl?: string | null
  className?: string
  onClose?: () => void
}

const defaultMd = '## loading...'

export const MarkdownViewer = (props: MarkdownViewerProps) => {
  const { sourceUrl, className, onClose } = props
  const [mdData, setMdData] = useState(defaultMd)

  const onClick = (ev: MouseEvent) => ev.currentTarget == ev.target && onClose?.()

  useEffect(() => {
    if (!sourceUrl) return setMdData(defaultMd)

    fetch(sourceUrl)
      .then(res => res.text())
      .then(raw => setMdData(raw))
      .catch(err => setMdData('Error!!!: ' + err))
  }, [sourceUrl])

  return (
    <div {...{ className, onClick }}>
      <ReactMarkdown children={mdData} className={css.reactMarkdown} />
    </div>
  )
}
