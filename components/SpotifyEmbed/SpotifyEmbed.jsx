import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import styles from './SpotifyEmbed.module.scss'

function SpotifyEmbed ({ embedCode, setEmbedCode }) {
  const [opacity, setOpacity] = useState(0)

  const onClose = useCallback(function onClose () {
    setEmbedCode('')
  }, [setEmbedCode])

  const oniFrameLoad = useCallback(function oniFrameLoad () {
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
        onLoad={oniFrameLoad}
      />
      <button type='button' className={styles.CloseButton} onClick={onClose}>X</button>
    </div>
  )
}

SpotifyEmbed.propTypes = {
  embedCode: PropTypes.string.isRequired,
  setEmbedCode: PropTypes.func.isRequired
}

export default SpotifyEmbed
