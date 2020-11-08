import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import styles from './Song.module.scss'

export default function Song ({ idSong, albumPosition, name, embedCode, isSelected, addVote, removeVote, setEmbedCode }) {
  function onSongPlay () {
    setEmbedCode(embedCode)
  }

  function onToggleVote () {
    if (isSelected) {
      removeVote(idSong)
    } else {
      addVote(idSong)
    }
  }

  let songClass = styles.Song
  if (isSelected) {
    songClass = `${songClass} ${styles.selected}`
  }

  return (
    <li className={songClass}>
      <p className={styles.SongName}>{`${albumPosition}. ${name}`}</p>
      <button type='button' className={styles.PlayButton} onClick={onSongPlay}>
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button type='button' className={styles.VoteButton} onClick={onToggleVote}>{isSelected ? 'X' : ''}</button>
    </li>
  )
}
