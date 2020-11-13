import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

export default function Header ({ text }) {
  return (
    <header className={styles.Wrapper}>
      <div className={styles.Header}>
        <Link href='/'>
          <a className={styles.LogoAnchor}>
            <img className={styles.Logo} src='/chapter_logo.png' alt='logo' />
          </a>
        </Link>
        <p className={styles.Title}>{text}</p>
        <button type='button' className={styles.MenuButton}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  )
}
