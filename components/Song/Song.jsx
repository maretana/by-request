import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import * as VOTE_ACTIONS from '../../constants/voteActions'

import styles from './Song.module.scss'

function Song ({ idSong, albumPosition, name, embedCode, isSelected, voteDispatch, setEmbedCode, albumSlug }) {
  const onSongPlay = useCallback(function onSongPlay () {
    setEmbedCode(embedCode)
  }, [embedCode, setEmbedCode])

  const onToggleVote = useCallback(function onToggleVote () {
    if (isSelected) {
      voteDispatch({ type: VOTE_ACTIONS.REMOVE_VOTE, payload: { idSong, albumSlug } })
    } else {
      voteDispatch({ type: VOTE_ACTIONS.ADD_VOTE, payload: { idSong, albumSlug } })
    }
  }, [albumSlug, idSong, isSelected, voteDispatch])

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
  voteDispatch: PropTypes.func.isRequired,
  setEmbedCode: PropTypes.func.isRequired,
  albumSlug: PropTypes.string.isRequired
}
export default React.memo(Song)
