import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import ParticleBG from './ParticleBG'

const GptSearch = () => {
  return (
    <div className='w-full box-border'>
      <div className='w-full -z-50'>
        <ParticleBG/>
      </div>
      <div className='w-full'>
        <GptSearchbar/> 
      </div>
      <div className='relative w-full top-32'>
        <GptMovieSuggestion/>
      </div>

    </div>
  )
}

export default GptSearch
