import React from 'react'

import styles from './Song.module.scss'

export default function Song ({ idSong, albumPosition, name, embedCode, setEmbedCode }) {
  function onSongPlay () {
    setEmbedCode(embedCode)
  }
  return (
    <li>
      <p>{`${albumPosition}. ${name}`}</p>
      <button type='button' onClick={onSongPlay}>Play!</button>
    </li>
  )
}
