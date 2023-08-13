import './App.css'

import { UserSettingsProvider } from './contexts/UserSettings'
import { AudioProvider } from './contexts/Audio'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { BGParticles } from './components/BGParticles'
import { BGPlayers } from './components/BGPlayers'

export default () => (
  <UserSettingsProvider>
    <AudioProvider>
      <Header />
      <Main />
      <Footer />
      <BGPlayers />
      <BGParticles />
    </AudioProvider>
  </UserSettingsProvider>
)
