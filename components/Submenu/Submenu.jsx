import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import NavigationList from '../NavigationList'

import styles from './Submenu.module.scss'

export default function Submenu ({ isOpen, closeSubmenu }) {
  return (
    <div className={`${styles.Submenu} ${isOpen ? styles.open : styles.close}`}>
      <button type='button' className={styles.CloseButton} onClick={closeSubmenu}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h1>Costa Rica by Request</h1>
      <NavigationList closeSubmenu={closeSubmenu} />
    </div>
  )
}
