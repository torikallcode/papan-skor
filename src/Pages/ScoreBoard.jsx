import React from 'react'

export const scoreBoard = () => {
  return (
    <section className='min-w-full h-screen bg-slate-800 flex flex-col justify-center items-center gap-2 relative'>
      <div className="bg-blue-600 w-full flex justify-center items-center h-1/2 relative">
        <h1 id="skorPlayerSatu" className="font-utama text-gray-100 text-9xl rotate-90  h-32 w-36 flex items-center justify-center"><span className="hitungSkorSatu">22</span></h1>
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 -mr-20">Player 1</h1>
        <div className='text-gray-100 text-3xl bg-gray-800 p-6 rounded-br-md flex justify-center items-center absolute top-0 left-0'>
          <h1 className='font-semibold text-2xl'>|</h1>
        </div>
      </div>
      <div className="bg-red-600 w-full flex justify-center items-center h-1/2 relative">
        <h1 id="skorPlayerSatu" className="font-utama text-gray-100 text-9xl rotate-90  h-32 w-36 flex items-center justify-center"><span className="hitungSkorSatu">13</span></h1>
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 -mr-20">Player 2</h1>
        <div className='text-gray-100 text-3xl bg-gray-800 p-6 rounded-tr-md flex justify-center items-center absolute bottom-0 left-0'>
          <h1 className='font-semibold text-2xl'>|</h1>
        </div>
      </div>
      <div id='hai' className='h-36 rounded-l-md text-3xl bg-gray-800 p-4 flex flex-col gap-y-11 justify-center  items-end absolute top-[50%] translate-y-[-50%] bottom-0 right-0'>
        <h1 className='text-gray-100 text-3xl rotate-90 font-utama'>1</h1>
        <h1 className='text-gray-100 text-3xl rotate-90 font-utama'>2</h1>
      </div>
    </section>
  )
}

export default scoreBoard
