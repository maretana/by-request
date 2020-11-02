import React, { useState, useEffect } from 'react'
import AlbumsList from '../components/AlbumsList'
import SpotifyEmbed from '../components/SpotifyEmbed/SpotifyEmbed'
import songs from '../lib/songs'

export default function VotePage ({ albums }) {
  const [embedCode, setEmbedCode] = useState('')
  const [displayEmbedCode, setDisplayEmbedCode] = useState(false)

  function refreshEmbedCode (nextEmebedCode) {
    if (nextEmebedCode !== embedCode) {
      setEmbedCode(nextEmebedCode)
      setDisplayEmbedCode(false)
    }
  }

  useEffect(() => {
    if (embedCode !== '') {
      setDisplayEmbedCode(true)
    }
  }, [embedCode])

  return (
    <main>
      <AlbumsList albums={albums} setEmbedCode={refreshEmbedCode} />
      {displayEmbedCode && (
        <SpotifyEmbed embedCode={embedCode} setEmbedCode={refreshEmbedCode} />
      )}
    </main>
  )
}

export async function getStaticProps (context) {
  const songsHash = await songs.getSongsHash()
  return {
    props: {
      albums: songsHash
    }
  }
}
