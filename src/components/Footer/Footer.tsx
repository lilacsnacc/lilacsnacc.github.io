import LogoPath from '/logo.svg'
import VitePath from '../../assets/vite.svg'
import ReactPath from '../../assets/react.svg'
import MUIPath from '../../assets/mui.svg'

import css from './Footer.module.css'

export const Footer = () => (
  <footer className={css.footer}>
    <p>
      <img
        src={LogoPath}
        className={`${css.logo} theme-invert`}
        alt='Nazaire Shabazz logo'
      />{' '}
      Nazaire Shabazz's portfolio
    </p>
    <div className={css.line} />
    <div className={`${css.line} portrait-only`} />
    <p>
      <img src={VitePath} className={css.logo} alt='Vite' /> Vite,
      <img src={ReactPath} className={`${css.logo} ${css.spin}`} alt='React' /> React,
      <img src={MUIPath} className={css.logo} alt='MUI' /> MUI
    </p>
  </footer>
)
