import React from 'react'

const StatCard = () => {
  return (
    <div class="flex justify-around items-center w-screen h-screen">
        <div className=' flex w-[80%]'>
        <div class="text-left w-4/6">
            <h1 className='text-3xl'>Numbers are <br/> Telling our Story</h1>
            <span class="leading-12">Showing the stats of Product</span>
        </div>
        <div class="flex flex-col bg-gray-300 border-2 rounded-xl w-2/6">
            <div class=" px-10 py-5 border-b-2">
                <h1>300 k</h1>
                <span>Views on the Video</span>
            </div>
            <div class=" px-10 py-5 border-b-2">
                <h1>300 k</h1>
                <span>Views on the Video</span>
            </div>
            <div class=" px-10 py-5">
                <h1>300 k</h1>
                <span>Views on the Video</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default StatCard