import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/chat">Load Chat</Link>
    <Link href="/">Home</Link>
    <Link href="/prompts">Load Prompts</Link>
  </div>
)

export default Nav
