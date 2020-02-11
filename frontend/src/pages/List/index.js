import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const List = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    async function getList() {
      const response = await axios.get('http://localhost:3333/')

      setList(response.data)
    }

    getList();
  }, [])

  return (
    <table>
      <caption>Lista de Músicas</caption>
      <thead>
        <tr>
          <th>Artista</th>
          <th>Música</th>
          <th>Ação</th>
        </tr>
      </thead>

      <tbody>
        {list.map(elem => elem.songs.map(music => (
            <tr key={`${elem.artist}_${music.song}`}>
              <td>{elem.artist}</td>
              <td>{music.song}</td>
              <td><a href={`/lyrics/${encodeURIComponent(elem.artist)}/${encodeURIComponent(music.song)}`}>Ver letra</a></td>
            </tr>
        )))}
      </tbody>
    </table>
  )
}

export default List