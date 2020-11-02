import React, { useState, useEffect } from 'react'

import styles from './SpotifyEmbed.module.scss'

export default function SpotifyEmbed ({ embedCode, setEmbedCode }) {
  const [opacity, setOpacity] = useState(0)

  function onClose () {
    setEmbedCode('')
  }

  useEffect(() => {
    setOpacity(0.9)
  }, [])

  return (
    <div className={styles.SpotifyEmbed} style={{ opacity }}>
      <iframe
        src={`https://open.spotify.com/embed/track/${embedCode}`}
        width='300'
        height='80'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      />
      <button type='button' className={styles.CloseButton} onClick={onClose}>X</button>
    </div>
  )
}
