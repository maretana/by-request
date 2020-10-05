import React from 'react'
import songs from '../lib/songs'

export default function VotePage (props) {
  console.log('props', props)
  return <div />
}

export async function getStaticProps (context) {
  const songsHash = await songs.getSongsHash()
  return {
    props: {
      albums: songsHash
    }
  }
}
