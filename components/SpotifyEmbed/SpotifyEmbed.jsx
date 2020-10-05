import React from 'react'

import styles from './SpotifyEmbed.module.scss'

export default function SpotifyEmbed ({ embedCode }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${embedCode}`}
      width='300'
      height='80'
      frameBorder='0'
      allowtransparency='true'
      allow='encrypted-media'
    />
  )
}
