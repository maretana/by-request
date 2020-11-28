import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
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
      <section>
        <h1>Follow us</h1>
        <img width='100%' src='/chapter_logo_text.png' alt='Costa Rica Fade To Black logo' />
        <nav>
          <a href='https://www.facebook.com/CostaRicaFadeToBlack/' aria-label='Go to our Facebook page'>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </a>
          <a href='https://www.instagram.com/costaricafadetoblack/' aria-label='Go to our Instagram page'>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
          <a href='https://twitter.com/CR_FadeToBlack' aria-label='Go to our Twitter page'>
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
        </nav>
      </section>

    </div>
  )
}
