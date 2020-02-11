import React, {useState} from 'react'

import './index.css'
import InputLabel from '../../components/InputLabel'

const Search = () => {
  const [search, setSearch] = useState("")

  const onSubmitHandler = async e => {
    e.preventDefault()
    const [artist, song] = search.split(',').map(elem => elem.trim().replace(/[ãáâ]/, 'a').replace(/[\s]/, '-').replace(/[\s]/, '-'))
    if (artist && song) {
      window.location.href='/lyrics/'+artist+'/'+song
    }
  }

  return (
    <div className="content">
      <form onSubmit={onSubmitHandler}>
        <InputLabel for="search" label="Buscar" type="text" placeholder="Tim Maia, não quero dinheiro" value={search} onChangeHandler={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default Search
