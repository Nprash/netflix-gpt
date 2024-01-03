import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import ParticleBG from './ParticleBG'

const GptSearch = () => {
  return (
    <div className=''>
      <div className=' -z-50'>
        <ParticleBG/>
      </div>
      <div className=''>
        <GptSearchbar/>
      </div>
      <div className='relative w-full top-32'>
        <GptMovieSuggestion/>
      </div>

    </div>
  )
}

export default GptSearch
