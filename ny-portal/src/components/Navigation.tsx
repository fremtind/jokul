import { clsx } from 'clsx'
import Link from 'next/link'
import { useId } from 'react'
import { SearchTrigger } from './SearchTrigger'
import styles from './navigation.module.scss'

const onOpenSearch = () => {}

export function Navigation() {
  const menuId = useId()
  const burgerId = useId()

  return (
    <div className={clsx(styles.navigation)}>
      <nav>
        <header className={styles.navigation__header}>
          <div className={styles.navigation__headerColumn}>
            <Link className={styles.navigation__home} href="/">
              Jøkul
            </Link>
          </div>
        </header>
        <div className={clsx(styles.navigation__menu, 'jkl-portal-navigation-menu')}>
          <form className={styles.navigation__search} onSubmit={(e) => e.preventDefault()}>
            <SearchTrigger variant="full" onClick={onOpenSearch} />
          </form>
          <ul id={menuId} aria-labelledby={burgerId} role="group">
            <li>Meny kommer her</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
