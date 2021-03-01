import React from 'react'
import PropTypes from 'prop-types'
import SongsList from '../SongsList/SongsList'

import styles from './AlbumCard.module.scss'

function AlbumCard ({ name, artwork, year, slug, songs, votes, voteDispatch, setEmbedCode }) {
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
        voteDispatch={voteDispatch}
        setEmbedCode={setEmbedCode}
      />
    </li>
  )
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  artwork: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  songs: PropTypes.array.isRequired,
  votes: PropTypes.array,
  voteDispatch: PropTypes.func.isRequired,
  setEmbedCode: PropTypes.func
}

export default React.memo(AlbumCard)
