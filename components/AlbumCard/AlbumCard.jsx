import React from 'react'
import SongsList from '../SongsList/SongsList'

import styles from './AlbumCard.module.scss'

export default function AlbumCard ({ name, artwork, year, songs }) {
  return (
    <li>
      <img src={artwork} alt={`${name} artwork`} />
      <div>
        <p>{name}</p>
        <p>{year}</p>
        <SongsList songs={songs} />
      </div>
    </li>
  )
}
