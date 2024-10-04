import React, { useState } from 'react'

function ColorSelect() {
    let [color, setColor] = useState("green");
  return (
    <>

   <div className='h-screen w-full '  style ={{backgroundColor: color}}>

    <div className='flex flex-col justify-end font-extrabold text-3xl'>Background Changer

      <div className='flex flex-wrap gap-4 justify-center mt-5  text-black-700 text-xl font-bold'>
        <button onClick={()=> {setColor("orange")}} className='bg-orange-400 rounded-2xl cursor-pointer px-2 py-2'>Orange</button>


        <button onClick={()=> {setColor("red")}} className='bg-red-600 rounded-2xl cursor-pointer px-5 py-2 '>Red</button>


        <button onClick={()=> {setColor("yellow")}} className='bg-yellow-300 rounded-2xl cursor-pointer px-3 py-4'>Yellow</button>

        <button onClick={()=> {setColor("purple")}} className='bg-purple-500 rounded-2xl cursor-pointer px-3 py-4'>Purple</button>

        <button onClick={()=> {setColor("blue")}} className='bg-blue-700 rounded-2xl cursor-pointer px-3 py-4'>Blue</button>
      </div>



    </div>
   </div> 
   
    </>
  )
}

export default ColorSelect;