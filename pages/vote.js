import React from 'react'
import AlbumsList from '../components/AlbumsList'
import songs from '../lib/songs'

export default function VotePage ({ albums }) {
  return (
    <div>
      <AlbumsList albums={albums} />
    </div>
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
