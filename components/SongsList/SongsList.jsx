import React from 'react'
import Song from '../Song'

import styles from './SongsList.module.scss'

export default function SongsList ({ songs }) {
  return (
    <ul>
      {songs.map(song => <Song key={song.idSong} {...song} />)}
    </ul>
  )
}
