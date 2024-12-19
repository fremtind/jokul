import { clsx } from 'clsx'

import styles from './keyboard-shortcut.module.scss'

interface KeyboardShortcutProps {
  className?: string
  children: React.ReactNode
}

export function KeyboardShortcut({ className, children, ...rest }: KeyboardShortcutProps) {
  return (
    <kbd className={clsx(styles.kbd, className)} {...rest}>
      {children}
    </kbd>
  )
}
