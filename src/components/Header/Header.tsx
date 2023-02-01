import styles from './Header.module.css'

import logo from '../../assets/images/ignite-logo.svg'

export function Header() {
  return(
    <div>
      <header className={styles.header}>
        <img src={logo} alt="logo"/>
        <h1>Ignite Feed</h1>
      </header>
    </div>
  );
}