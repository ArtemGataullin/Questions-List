import { Link } from 'react-router-dom'
import styles from './logo.module.css'
import logo from '@assets/Logo/logo.svg'
import logoText from '@assets/Logo/logo_text.svg'

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo" width="33" height="33" />
      <img className="header__logo-text" src={logoText} alt="logo text" width={99} height={32} />
    </Link>
  )
}
