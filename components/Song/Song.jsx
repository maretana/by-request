import React from 'react'
import SpotifyEmbed from '../SpotifyEmbed/SpotifyEmbed'

import styles from './Song.module.scss'

export default function Song ({ idSong, albumPosition, name, embedCode }) {
  return (
    <div>
      <p>{`${albumPosition}. ${name}`}</p>
      <SpotifyEmbed embedCode={embedCode} />
    </div>
  )
}
