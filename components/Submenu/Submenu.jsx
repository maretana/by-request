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
      <h1 className={styles.Title} aria-label='Costa Rica by request'>
        <span className={styles.CountryName}>Costa ric&#188;</span> by request
      </h1>
      <NavigationList closeSubmenu={closeSubmenu} />
      <section className={styles.FollowSection}>
        <h1 className={styles.Title}>follow us</h1>
        <div className={styles.FollowUs}>
          <img
            className={styles.ChapterLogo}
            src='/chapter_logo_text.png'
            alt='Costa Rica Fade To Black logo'
          />
          <nav className={styles.SocialLinks}>
            <a href='https://www.facebook.com/CostaRicaFadeToBlack/' aria-label='Go to our Facebook page'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://www.instagram.com/costaricafadetoblack/' aria-label='Go to our Instagram page'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://twitter.com/CR_FadeToBlack' aria-label='Go to our Twitter page'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </nav>
        </div>
      </section>

    </div>
  )
}
