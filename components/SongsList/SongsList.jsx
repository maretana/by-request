import React from 'react'
import Song from '../Song'

import styles from './SongsList.module.scss'

export default function SongsList ({ songs, setEmbedCode }) {
  return (
    <ol>
      {songs.map(song => <Song key={song.idSong} {...song} setEmbedCode={setEmbedCode} />)}
    </ol>
  )
}
