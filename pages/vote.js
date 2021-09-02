import React, { useReducer, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import AlbumsList from '../components/AlbumsList'
import SpotifyEmbed from '../components/SpotifyEmbed/SpotifyEmbed'
import songs from '../lib/songs'
import voteReducer, { initialState } from '../reducers/vote'
import { SET_EMBED_CODE } from '../constants/voteActions'

export default function VotePage ({ albums, setHeaderText }) {
  const [voteState, voteDispatch] = useReducer(voteReducer, initialState)
  const shouldDisplayEmbed = voteState.embedCode !== ''
  const setEmbedCode = useCallback((embedCode) => {
    voteDispatch({ type: SET_EMBED_CODE, payload: { embedCode } })
  }, [])

  useEffect(() => {
    const MAX_VOTES = process.env.NEXT_PUBLIC_MAX_VOTES
    const votesRemaining = MAX_VOTES - voteState.votesCount
    setHeaderText(`${votesRemaining} votes remaining`)
  }, [voteState.votesCount, setHeaderText])

  return (
    <main>
      <AlbumsList
        albums={albums}
        albumVotes={voteState.albumVotes}
        setEmbedCode={setEmbedCode}
        voteDispatch={voteDispatch}
      />
      {shouldDisplayEmbed && (
        <SpotifyEmbed embedCode={voteState.embedCode} setEmbedCode={setEmbedCode} />
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
