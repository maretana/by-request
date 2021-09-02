import React from 'react'
import PropTypes from 'prop-types'
import Song from '../Song'

import styles from './SongsList.module.scss'

/**
 * The list of songs, duh!
 * @param {Object} props
 * @param {Object[]} props.songs
 * @param {string} props.slug
 * @param {number[]} props.votes
 * @param {Function} props.voteDispatch
 * @param {Function} props.setEmbedCode
 */
export default function SongsList ({ songs, slug, votes, voteDispatch, setEmbedCode }) {
  return (
    <div className={[styles.SongsListContainer, styles[slug]].join(' ')}>
      <ol className={styles.SongsList}>
        {songs.map(song => {
          const isSelected = votes && votes.includes(song.idSong)
          return (
            <Song
              key={song.idSong}
              {...song}
              isSelected={!!isSelected}
              voteDispatch={voteDispatch}
              setEmbedCode={setEmbedCode}
              albumSlug={slug}
            />
          )
        })}
      </ol>
    </div>
  )
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
  votes: PropTypes.array,
  voteDispatch: PropTypes.func.isRequired,
  setEmbedCode: PropTypes.func.isRequired
}
