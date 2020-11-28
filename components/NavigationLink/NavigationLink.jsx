import React from 'react'
import Link from 'next/link'

import styles from './NavigationLink.module.scss'

export default function NavigationLink ({ children, href, closeSubmenu }) {
  return (
    <li>
      <Link href={href}>
        <a onClick={closeSubmenu}>{children}</a>
      </Link>
    </li>
  )
}
