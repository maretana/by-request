import React from 'react'
import PropTypes from 'prop-types'
import NavigationLink from '../NavigationLink'

import styles from './NavigationList.module.scss'

function NavigationList ({ closeSubmenu }) {
  return (
    <nav>
      <ul className={styles.NavigationList}>
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

NavigationList.propTypes = {
  closeSubmenu: PropTypes.func.isRequired
}

export default React.memo(NavigationList)
