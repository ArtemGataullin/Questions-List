import { Link } from 'react-router-dom'
import styles from './logo.module.css'
import logo from '../../../assets/logo.svg'

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="SkillSwap Logo" width="40" height="40" />
      <h1>Yeahub</h1>
    </Link>
  )
}
