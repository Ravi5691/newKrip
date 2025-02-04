import React from 'react'

const GetServiceCard = () => {
  return (
    <div className="flex items-center w-screen justify-center my-10">
      <div className="rounded-2xl  flex text-white w-[80%] relative">
        {/* OR Separator */}
        <div className="flex items-center justify-center absolute rounded-full bg-white right-108 top-70 p-5">
          <div className="text-sm font-bold text-gray-300 px-2">OR</div>
        </div>
        {/* Get A Service Section */}
        <div className="flex-1 bg-gray-800 p-20 rounded-xl flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-center">Get A Service</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">Subtext</p>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-700 h-40 rounded-lg flex items-center justify-center"
              >
                {/* Add Service Icon or Text */}
              </div>
            ))}
          </div>
        </div>

        {/* Get A Guy Section */}
        <div className="flex bg-gray-800 w-2/6 p-20 rounded-xl  flex-col">
          <h2 className="text-xl font-bold mb-2 text-center">Get A Guy</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter the Prompt"
              className="w-full bg-gray-700 p-2 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex flex-col gap-2">
              <div className="bg-gray-700 h-10 rounded-lg"></div>
              <div className="bg-gray-700 h-10 rounded-lg"></div>
              <div className="bg-gray-700 h-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetServiceCard