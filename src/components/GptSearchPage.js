import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import ParticleBG from './ParticleBG'

const GptSearch = () => {
  return (
    <div>
      <ParticleBG/>
      <GptSearchbar/>
      <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch
