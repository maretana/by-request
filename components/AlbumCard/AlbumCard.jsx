import React from 'react'
import SongsList from '../SongsList/SongsList'

import styles from './AlbumCard.module.scss'

export default function AlbumCard ({ name, artwork, year, slug, songs, votes, addVote, removeVote, setEmbedCode }) {
  return (
    <li className={[styles.AlbumCardListItem, styles[slug]].join(' ')}>
      <section className={styles.AlbumCard}>
        <img src={artwork} alt={`${name} artwork`} />
        <div className={styles.TextContainer}>
          <h1 className={styles.AlbumTitle}>{name}</h1>
          <p className={styles.AlbumYear}>{year}</p>
        </div>
      </section>
      <SongsList
        songs={songs}
        slug={slug}
        votes={votes}
        addVote={addVote}
        removeVote={removeVote}
        setEmbedCode={setEmbedCode}
      />
    </li>
  )
}
