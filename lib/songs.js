const db = require('./db')

exports.getSongsHash = async () => {
  const session = await db.getSession()
  const songsHash = {}
  try {
    const results = await session.sql('CALL getSongs()').execute()
    const [songs, albums] = results.toArray()
    albums.forEach(album => {
      const [idAlbum, name, artwork, year, slug] = album
      songsHash[idAlbum] = { name, artwork, year, slug, songs: [] }
    })
    songs.forEach(song => {
      const [idSong, idAlbum, albumPosition, name, embedCode] = song
      songsHash[idAlbum].songs.push({ idSong, albumPosition, name, embedCode: embedCode.trim() })
    })
  } catch (ex) {
    console.error(ex)
  } finally {
    session.close()
  }
  return songsHash
}
