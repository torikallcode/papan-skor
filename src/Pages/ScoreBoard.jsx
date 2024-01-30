import React from 'react'

export const scoreBoard = () => {
  return (
    <section className='min-w-full h-screen bg-slate-800 flex flex-col lg:flex-row justify-center items-center gap-2 relative'>
      <div className="bg-blue-600 w-full flex lg:flex-col justify-center items-center h-1/2 lg:h-full relative sm:gap-10 lg:gap-20">
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 lg:rotate-0 hidden lg:block lg:text-4xl text-center w-full">Player 1</h1>
        <h1 id="skorPlayerSatu" className="font-utama text-gray-100 text-9xl sm:text-[12rem] rotate-90 lg:rotate-0 h-32 w-36 flex items-center justify-center"><span className="hitungSkorSatu">22</span></h1>
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 -mr-20 lg:hidden sm:text-4xl">Player 1</h1>
        <div className='text-gray-100 text-3xl bg-gray-800 p-6 sm:p-10 lg:p-6 lg:px-16 rounded-br-md flex justify-center items-center absolute top-0 left-0 lg:bottom-0 lg:top-auto lg:rounded-br-none lg:rounded-tr-md'>
          <h1 className='font-semibold text-2xl lg:rotate-90'>|</h1>
        </div>
      </div>
      <div className="bg-red-600 w-full flex lg:flex-col justify-center items-center h-1/2 lg:h-full relative sm:gap-10 lg:gap-20">
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 lg:rotate-0 hidden lg:block lg:text-4xl text-center w-full">Player 1</h1>
        <h1 id="skorPlayerSatu" className="font-utama text-gray-100 text-9xl sm:text-[12rem] rotate-90 lg:rotate-0 h-32 w-36 flex items-center justify-center"><span className="hitungSkorSatu">13</span></h1>
        <h1 className="text-gray-100 font-semibold text-3xl  rotate-90 -mr-20 lg:hidden">Player 2</h1>
        <div className='text-gray-100 text-3xl bg-gray-800 p-6 sm:p-10 rounded-tr-md flex justify-center items-center absolute bottom-0 left-0 lg:right-0 lg:left-auto lg:rounded-tr-none lg:rounded-tl-md lg:p-6 lg:px-16'>
          <h1 className='font-semibold text-2xl lg:rotate-90'>|</h1>
        </div>
      </div>
      <div id='hai' className='h-36 sm:h-40 rounded-l-md bg-gray-800 p-4 sm:p-7 lg:p-5 flex flex-col gap-y-11 lg:gap-x-20 justify-center items-end absolute top-[50%] translate-y-[-50%] lg:translate-y-[-45%] bottom-0 right-0 lg:left-0 lg:top-0 lg:flex-row lg:max-w-[15rem] mx-auto lg:rounded-l-none lg:rounded-b-md'>
        <h1 className='text-gray-100 text-3xl rotate-90 sm:text-5xl font-utama lg:rotate-[-180]'>1</h1>
        <h1 className='text-gray-100 text-3xl rotate-90 sm:text-5xl font-utama lg:rotate-[-180]'>2</h1>
      </div>
    </section>
  )
}

export default scoreBoard
