import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BreakingBad.css'
import Header from './components/Header'
import CharacterGrid from './characters/CharacterGrid'
import Search from './components/Search'

const BreakingBad = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
      console.log(result.data)
    }
    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search
        getQuery={(q) => setQuery(q)}
      />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
      />
    </div>
  )
}

export default BreakingBad
