import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'

import styles from './AlbumsList.module.scss'

export default function AlbumsList ({ albums, setEmbedCode }) {
  return (
    <ul className={styles.AlbumsList}>
      {Object.keys(albums).map(idAlbum => {
        return <AlbumCard key={idAlbum} {...albums[idAlbum]} setEmbedCode={setEmbedCode} />
      })}
    </ul>
  )
}
