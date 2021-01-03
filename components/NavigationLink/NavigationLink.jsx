import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './NavigationLink.module.scss'

export default function NavigationLink ({ children, href, closeSubmenu }) {
  return (
    <li className={styles.NavigationListItem}>
      <Link href={href}>
        <a className={styles.NavigationLink} onClick={closeSubmenu}>{children}</a>
      </Link>
    </li>
  )
}

NavigationLink.propTypes = {
  children: PropTypes.object,
  href: PropTypes.string,
  closeSubmenu: PropTypes.func.isRequired
}
