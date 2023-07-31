import { FormEvent, useState } from 'react'

import SendIcon from '@mui/icons-material/Send'

import { Section } from '..'

import css from './ContactMe.module.css'
import { InteractiveButton } from '../../components/InteractiveButton'
import { openForHire, rate, emailEndpoint } from '../../constants'

export function ContactMe() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(ev: FormEvent) {
    ev.preventDefault()

    if (loading) return 0

    setLoading(true)

    fetch(emailEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email,
        message
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err.message))
      .finally(() => {
        setEmail('')
        setMessage('')
        setLoading(false)
      })
  }

  return (
    <Section title='Contact Me'>
      <form className={css.form} {...{ onSubmit }}>
        {openForHire ? (
          <p>Open for hire, starting at {rate}</p>
        ) : (
          <p>Let's get in touch!</p>
        )}
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          className={css.input}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          required
          rows={5}
          placeholder='Message'
          value={message}
          className={css.input}
          onChange={e => setMessage(e.target.value)}
        />
        <InteractiveButton
          isSubmit
          className={`${css.submitButton} ${loading && css.loading}`}
          children={<SendIcon />}
        />
      </form>
    </Section>
  )
}
