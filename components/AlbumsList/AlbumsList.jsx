import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import AlbumCard from '../AlbumCard/AlbumCard'

import styles from './AlbumsList.module.scss'

export default function AlbumsList ({ albums, albumVotes, setEmbedCode, voteDispatch }) {
  const albumCards = useMemo(() => Object.keys(albums).map(idAlbum => {
    return (
      <AlbumCard
        key={idAlbum}
        {...albums[idAlbum]}
        votes={albumVotes[albums[idAlbum].slug]}
        voteDispatch={voteDispatch}
        setEmbedCode={setEmbedCode}
      />
    )
  }), [albumVotes, albums, setEmbedCode, voteDispatch])

  return (
    <ul className={styles.AlbumsList}>
      {albumCards}
    </ul>
  )
}

AlbumsList.propTypes = {
  albums: PropTypes.object.isRequired,
  albumVotes: PropTypes.object.isRequired,
  setEmbedCode: PropTypes.func.isRequired,
  voteDispatch: PropTypes.func.isRequired
}
