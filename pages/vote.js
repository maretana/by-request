import React, { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import AlbumsList from '../components/AlbumsList'
import SpotifyEmbed from '../components/SpotifyEmbed/SpotifyEmbed'
import songs from '../lib/songs'
import voteReducer, { initialState } from '../reducers/vote'

export default function VotePage ({ albums, setHeaderText }) {
  const [embedCode, setEmbedCode] = useState('')
  const [shouldDisplayEmbed, setShouldDisplayEmbed] = useState(false)
  const [voteState, voteDispatch] = useReducer(voteReducer, initialState)

  function refreshEmbedCode (nextEmebedCode) {
    if (nextEmebedCode !== embedCode) {
      setEmbedCode(nextEmebedCode)
      setShouldDisplayEmbed(false)
    }
  }

  useEffect(() => {
    if (embedCode !== '') {
      setShouldDisplayEmbed(true)
    }
  }, [embedCode])

  useEffect(() => {
    const MAX_VOTES = process.env.NEXT_PUBLIC_MAX_VOTES
    const votesRemaining = MAX_VOTES - voteState.votesCount
    setHeaderText(`${votesRemaining} votes remaining`)
  }, [voteState, setHeaderText])

  return (
    <main>
      <AlbumsList
        albums={albums}
        albumVotes={voteState.albumVotes}
        setEmbedCode={null}
        voteDispatch={voteDispatch}
      />
      {shouldDisplayEmbed && (
        <SpotifyEmbed embedCode={embedCode} setEmbedCode={refreshEmbedCode} />
      )}
    </main>
  )
}

VotePage.propTypes = {
  albums: PropTypes.object.isRequired,
  setHeaderText: PropTypes.func.isRequired
}

export async function getStaticProps (context) {
  const songsHash = await songs.getSongsHash()
  return {
    props: {
      albums: songsHash
    }
  }
}
