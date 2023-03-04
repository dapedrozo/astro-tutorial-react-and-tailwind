import React, { useState } from 'react'
function HelloWorld() {
    const [text, setText] = useState("hello world")
  return (
    <div className='bg-zinc-800 text-white p-10'>
        <h1>{text}</h1>
        <button className='bg-indigo-700 px-2 py-1' onClick={()=>setText("texto actualizado")}> click me</button>
    </div>
  )
}

export default HelloWorld