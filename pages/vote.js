import React, { useState, useEffect } from 'react'
import AlbumsList from '../components/AlbumsList'
import SpotifyEmbed from '../components/SpotifyEmbed/SpotifyEmbed'
import songs from '../lib/songs'

const MAX_VOTES = 5

export default function VotePage ({ albums }) {
  const [embedCode, setEmbedCode] = useState('')
  const [shouldDisplayEmbed, setShouldDisplayEmbed] = useState(false)
  const [votes, setVotes] = useState([])
  const [voteCount, setVoteCount] = useState(0)

  function refreshEmbedCode (nextEmebedCode) {
    if (nextEmebedCode !== embedCode) {
      setEmbedCode(nextEmebedCode)
      setShouldDisplayEmbed(false)
    }
  }

  function addVote (songId) {
    if (voteCount < MAX_VOTES) {
      setVotes([...votes, songId])
      setVoteCount(voteCount + 1)
    }
  }

  function removeVote (songId) {
    if (voteCount > 0) {
      setVotes(votes.filter(val => val !== songId))
      setVoteCount(voteCount - 1)
    }
  }

  useEffect(() => {
    if (embedCode !== '') {
      setShouldDisplayEmbed(true)
    }
  }, [embedCode])

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
