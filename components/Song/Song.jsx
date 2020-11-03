import React from 'react'

import styles from './Song.module.scss'

export default function Song ({ idSong, albumPosition, name, embedCode, setEmbedCode }) {
  function onSongPlay () {
    setEmbedCode(embedCode)
  }
  return (
    <li className={styles.Song}>
      <p className={styles.SongName}>{`${albumPosition}. ${name}`}</p>
      <button type='button' onClick={onSongPlay}>Play!</button>
    </li>
  )
}
