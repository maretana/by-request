import React from 'react'
import PropTypes from 'prop-types'
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

Song.propTypes = {
  idSong: PropTypes.number.isRequired,
  albumPosition: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  embedCode: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  addVote: PropTypes.func.isRequired,
  removeVote: PropTypes.func.isRequired,
  setEmbedCode: PropTypes.func.isRequired
}
