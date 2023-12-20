import React from 'react'
import lang from '../utilis/languageContants'
import { useSelector } from 'react-redux'


const GptSearchbar = () => {

  const langkey = useSelector(store =>store.config.lang)

  return (
    <div>
      <form className= "absolute top-16 left-1/4 m-4  flex justify-center items-center">
      <div className='w-full h-8 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 via-red-600 to-black p-[3px] mx-4'>
            <div className='h-full w-full rounded-md flex justify-center items-center bg-white  '>
                <input type="text" className=" focus:outline-none" placeholder={lang[langkey].gptSearchPlaceholder}/>
            </div>
        </div>
        
        <div className='w-20 h-8 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 via-red-600 to-black p-[3px]'>
            <div className='h-full w-full rounded-md flex justify-center items-center bg-white rounded- '>
                <button className="text-black font-medium">{lang[langkey].search}</button>
            </div>
        </div>

      </form>
    </div>
  )
}

export default GptSearchbar
