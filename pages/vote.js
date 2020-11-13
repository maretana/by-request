import React, { useState, useEffect } from 'react'
import AlbumsList from '../components/AlbumsList'
import SpotifyEmbed from '../components/SpotifyEmbed/SpotifyEmbed'
import songs from '../lib/songs'

const MAX_VOTES = 5

export default function VotePage ({ albums, setHeaderText }) {
  const [embedCode, setEmbedCode] = useState('')
  const [shouldDisplayEmbed, setShouldDisplayEmbed] = useState(false)
  const [votes, setVotes] = useState([])

  function refreshEmbedCode (nextEmebedCode) {
    if (nextEmebedCode !== embedCode) {
      setEmbedCode(nextEmebedCode)
      setShouldDisplayEmbed(false)
    }
  }

  function addVote (songId) {
    if (votes.length < MAX_VOTES) {
      setVotes([...votes, songId])
    }
  }

  function removeVote (songId) {
    if (votes.length > 0) {
      setVotes(votes.filter(val => val !== songId))
    }
  }

  useEffect(() => {
    if (embedCode !== '') {
      setShouldDisplayEmbed(true)
    }
  }, [embedCode])

  useEffect(() => {
    const votesRemaining = MAX_VOTES - votes.length
    setHeaderText(`${votesRemaining} votes remaining`)
  }, [votes])

  return (
    <main>
      <AlbumsList
        albums={albums}
        votes={votes}
        setEmbedCode={refreshEmbedCode}
        addVote={addVote}
        removeVote={removeVote}
      />
      {shouldDisplayEmbed && (
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
