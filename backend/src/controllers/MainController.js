const axios = require('axios')
const SongModel = require('../models/SongModel')

module.exports = {
  async index(req, res) {
    const data = await SongModel.all()
    return res.json(data)
  },

  async show(req, res) {
    const { artistName, song } = req.params

    let data = await SongModel.getSong(artistName, song);
    
    if(!data) {
      data = await axios.get(`https://api.lyrics.ovh/v1/${artistName}/${song}`)
      if(data.data.error) {
        return res.json(data.data)
      }
      await SongModel.setSong(artistName, song, data.data.lyrics)
      data = data.data.lyrics
    }

    return res.json(data)
  }
}