import React, { useState } from 'react'
import data from './assets/data.js'

const App = () => {

  const [show, setShow] = useState([])

  const handleClick = (currentItem) => {
    let copyState = [...show]
    copyState.includes(currentItem) ? copyState = copyState.filter((item) => item != currentItem) : copyState.push(currentItem)
    setShow(copyState)
  }

  return (
    <div className='flex flex-col h-screen w-[1000px] items-center justify-center mx-auto'>
      {
        data.map((item) => (
          <div className='flex flex-col items-center justify-center p-4 mx-auto text-center gap-4 tracking-wide' key={item.id}>
            <h1 className='text-blue-800 font-bold text-2xl'>{item.question}<span onClick={() => handleClick(item.id)} className='text-gray-700 mx-4'>{show.includes(item.id) ? '-' : '+'}</span></h1>
            <p>{show.includes(item.id) ? item.answer : null}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App