import React from 'react'
import Song from '../Song'

import styles from './SongsList.module.scss'

/**
 * The list of songs, duh!
 * @param {Object} props
 * @param {Object[]} props.songs
 * @param {string} props.slug
 * @param {number[]} props.votes
 * @param {Function} props.addVote
 * @param {Function} props.removeVote
 * @param {Function} props.setEmbedCode
 */
export default function SongsList ({ songs, slug, votes, addVote, removeVote, setEmbedCode }) {
  return (
    <div className={[styles.SongsListContainer, styles[slug]].join(' ')}>
      <ol className={styles.SongsList}>
        {songs.map(song => {
          const isSelected = votes.includes(song.idSong)
          return (
            <Song
              key={song.idSong}
              {...song}
              isSelected={isSelected}
              addVote={addVote}
              removeVote={removeVote}
              setEmbedCode={setEmbedCode}
            />
          )
        })}
      </ol>
    </div>
  )
}
