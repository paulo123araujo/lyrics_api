const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.lyrics.ovh/v1'
})

module.exports = api