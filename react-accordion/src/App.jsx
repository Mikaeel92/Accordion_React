import React, { useState } from 'react'
import data from './assets/data.js'

const App = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='flex flex-col h-screen w-[1000px] items-center justify-center mx-auto'>
      {
        data.map((item) => (
          <div className='flex flex-col items-center justify-center p-4 mx-auto text-center gap-4 tracking-wide' key={item.id}>
            <h1 className='text-blue-800 font-bold text-2xl'>{item.question}<span className='text-gray-700 mx-4'>+</span></h1>
            <p>{item.answer}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App