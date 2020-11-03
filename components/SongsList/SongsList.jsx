import React from 'react'
import Song from '../Song'

import styles from './SongsList.module.scss'

export default function SongsList ({ songs, slug, setEmbedCode }) {
  return (
    <div className={[styles.SongsListContainer, styles[slug]].join(' ')}>
      <ol className={styles.SongsList}>
        {songs.map(song => <Song key={song.idSong} {...song} setEmbedCode={setEmbedCode} />)}
      </ol>
    </div>
  )
}
