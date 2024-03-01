import React from 'react'

function Searchbar({searchMovie ,setSearchMovie, fetchMovieData }) {
  return (
    <div className=' main flex justify-center py-10 px-4'>
      <input type="text"
      className='w-80 bg-gray-200 placeholder-gray-400 py-2 px-2 border-2
       border-gray-400  outline-none text-red rounded-l-lg border-r-0'
      placeholder='Search'
      value={searchMovie} 
      onChange={(e)=>{
        setSearchMovie(e.target.value);
        console.log(e.target.value); // Check if the state is being updated
      }}
      />
      <button type="button"
      className='bg-[#ff0040] text-white px-4 shadow-md rounded-r-lg
       border-b-2 border-t-2 border-r-2 border-[#ff0040]'
       onClick={fetchMovieData}
      >Search</button>
    </div>
  )
}

export default Searchbar