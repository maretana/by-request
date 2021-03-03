import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Submenu from '../Submenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

export default function Header ({ text }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const openSubmenu = useCallback(() => { setIsSubmenuOpen(true) }, [])
  const closeSubmenu = useCallback(() => { setIsSubmenuOpen(false) }, [])

  const indexLink = useMemo(() => (
    <Link href='/'>
      <a className={styles.LogoAnchor}>
        <img className={styles.Logo} src='/chapter_logo.png' alt='logo' />
      </a>
    </Link>), [])

  const submenuButton = useMemo(() => (
    <button type='button' className={styles.MenuButton} onClick={openSubmenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  ), [openSubmenu])

  return (
    <header className={styles.Wrapper}>
      <div className={styles.Header}>
        {indexLink}
        <h2 className={styles.Title}>{text}</h2>
        {submenuButton}
        <Submenu isOpen={isSubmenuOpen} closeSubmenu={closeSubmenu} />
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string
}
