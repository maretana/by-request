import React from 'react'
import PropTypes from 'prop-types'
import AlbumCard from '../AlbumCard/AlbumCard'

import styles from './AlbumsList.module.scss'

export default function AlbumsList ({ albums, votes, setEmbedCode, addVote, removeVote }) {
  return (
    <ul className={styles.AlbumsList}>
      {Object.keys(albums).map(idAlbum => {
        return (
          <AlbumCard
            key={idAlbum}
            {...albums[idAlbum]}
            votes={votes}
            addVote={addVote}
            removeVote={removeVote}
            setEmbedCode={setEmbedCode}
          />
        )
      })}
    </ul>
  )
}

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
  setEmbedCode: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
  removeVote: PropTypes.func.isRequired
}
