import React, { useRef } from 'react'
import lang from '../utilis/languageContants'
import { useSelector } from 'react-redux'
import openai from "..//utilis/openai"


const GptSearchbar = () => {
const searchText = useRef()
  const langkey = useSelector(store =>store.config.lang)

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)
    //make an API call to gptAPI and get movie results
    const gptQuery = "Act as a movie recomendation by suggesting movies : "+searchText.current.value + "only give me names of five movies comma seperated results like the example given ahead, Example Results: Animal, Pushpa, Andarivadu, Robot, Bahubali"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices)

  }

   

  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}} className= "absolute top-16 left-1/4 m-4  flex justify-center items-center">
        <div className='w-full h-8 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 via-red-600 to-black p-[3px] mx-4'>
          <div className='h-full w-full rounded-md flex justify-center items-center bg-white  '>
            <input type="text" ref={searchText} className=" focus:outline-none" placeholder={lang[langkey].gptSearchPlaceholder}/>
          </div>
        </div>
          
        <div className='w-20 h-8 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 via-red-600 to-black p-[3px]'>
          <div className='h-full w-full rounded-md flex justify-center items-center bg-white rounded- '>
            <button onClick={handleGptSearchClick} className="text-black font-medium">{lang[langkey].search}</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default GptSearchbar;
