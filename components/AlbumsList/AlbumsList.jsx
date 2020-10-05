import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'

import styles from './AlbumsList.module.scss'

export default function AlbumsList ({ albums }) {
  return (
    <ul>
      {Object.keys(albums).map(idAlbum => {
        return <AlbumCard key={idAlbum} {...albums[idAlbum]} />
      })}
    </ul>
  )
}
