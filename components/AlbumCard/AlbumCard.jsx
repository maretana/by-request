import React, { useState } from 'react'
import SongsList from '../SongsList/SongsList'

import styles from './AlbumCard.module.scss'

export default function AlbumCard ({ name, artwork, year, slug, songs, setEmbedCode }) {
  const [isOpen, setIsOpen] = useState(false)

  function onClickHandler () {
    setIsOpen(!isOpen)
  }

  return (
    <li className={[styles.AlbumCardListItem, styles[slug]].join(' ')}>
      <section className={styles.AlbumCard}>
        <img src={artwork} alt={`${name} artwork`} />
        <div className={styles.TextContainer} onClick={onClickHandler}>
          <h1 className={styles.AlbumTitle}>{name}</h1>
          <p className={styles.AlbumYear}>{year}</p>
        </div>
      </section>
      {isOpen && (<SongsList songs={songs} setEmbedCode={setEmbedCode} />)}
    </li>
  )
}
