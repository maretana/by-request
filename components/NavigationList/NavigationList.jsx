import React from 'react'
import NavigationLink from '../NavigationLink'

import styles from './NavigationList.module.scss'

export default function NavigationList ({ closeSubmenu }) {
  return (
    <nav>
      <ul>
        <NavigationLink href='/' closeSubmenu={closeSubmenu}>
          Home
        </NavigationLink>
        <NavigationLink href='/vote' closeSubmenu={closeSubmenu}>
          Vote
        </NavigationLink>
      </ul>
    </nav>
  )
}
