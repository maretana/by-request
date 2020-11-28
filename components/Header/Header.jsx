import React, { useState } from 'react'
import Link from 'next/link'
import Submenu from '../Submenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

export default function Header ({ text }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  function toggleSubmenu () {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  return (
    <header className={styles.Wrapper}>
      <div className={styles.Header}>
        <Link href='/'>
          <a className={styles.LogoAnchor}>
            <img className={styles.Logo} src='/chapter_logo.png' alt='logo' />
          </a>
        </Link>
        <h2 className={styles.Title}>{text}</h2>
        <button type='button' className={styles.MenuButton} onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Submenu isOpen={isSubmenuOpen} closeSubmenu={toggleSubmenu} />
      </div>
    </header>
  )
}
