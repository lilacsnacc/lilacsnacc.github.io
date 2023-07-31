import './App.css'

import { UserSettingsProvider } from './contexts/UserSettings'
import { AudioProvider } from './contexts/Audio'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { BGParticles } from './components/BGParticles'

export default () => (
  <UserSettingsProvider>
    <AudioProvider>
      <Header />
      <Main />
      <Footer />
      <BGParticles />
    </AudioProvider>
  </UserSettingsProvider>
)
