const fs = require('fs')

module.exports = {
  async all() {
    let rawData = await fs.readFileSync('./src/db/data.json')
    return JSON.parse(rawData);
  },

  async getSong(artist, song) {
    let rawData = await fs.readFileSync('./src/db/data.json')
    let data = JSON.parse(rawData)

    // se o artista já estiver no banco
    let foundSong = false;
    for(let i = 0; i < data.length; i++) {
      if(data[i].artist === artist) {
        for(let j = 0; j < data[i].songs.length; j++) {
          if(data[i].songs[j].song === song) {
            foundSong = data[i].songs[j].lyrics;
            break
          }
        }
        break
      }
    }

    if(foundSong) {
      return foundSong;
    }

    return false;
  },

  async setSong(artist, song, lyrics) {
    let rawData = await fs.readFileSync('./src/db/data.json')
    let data = JSON.parse(rawData)

    // se o artista já estiver no banco
    let foundSong = false;
    let foundArtist = false;
    for(let i = 0; i < data.length; i++) {
      if(data[i].artist === artist) {
        for(let j = 0; j < data[i].songs.length; j++) {
          if(data[i].songs[j].song === song) {
            foundSong = true;
            break
          }
        }
        foundArtist = i;
        break
      }
    }

    if(foundSong) {
      return true;
    }

    if(foundArtist !== false) {
      await data[foundArtist].songs.push({song, lyrics})
    }

    data = JSON.stringify(data)
    await fs.writeFileSync('./src/db/data.json', data)

    return true;
  }
}