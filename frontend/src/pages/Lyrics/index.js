import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Lyrics() {
  const { artist, song } = useParams()
  const [lyrics, setLyrics] = useState("")

  useEffect(() => {
    async function search() {
      const response = await axios.get('http://localhost:3333/'+artist+'/'+song)
      console.log(response.data)

      setLyrics(response.data)
    };

    search()
  }, [])



  return (
    <div className="content">
      <h2>{artist}</h2>
      <h4>{song}</h4>
      <hr />
      <br />
      <pre>
        {lyrics}
      </pre>
    </div>
  )
}
