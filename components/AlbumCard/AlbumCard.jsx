import React, { useState } from 'react'
import SongsList from '../SongsList/SongsList'

import styles from './AlbumCard.module.scss'

export default function AlbumCard ({ name, artwork, year, songs }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className={styles.AlbumCardListItem}>
      <section className={styles.AlbumCard}>
        <img src={artwork} alt={`${name} artwork`} />
        <div className={styles.TextContainer}>
          <h1 className={styles.AlbumTitle}>{name}</h1>
          <p className={styles.AlbumYear}>{year}</p>
          {isOpen && (<SongsList songs={songs} />)}
        </div>
      </section>
    </li>
  )
}
