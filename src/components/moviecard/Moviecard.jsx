import React from 'react';
import loader from "../../assets/loading.gif"
import placeholderImage from "../../assets/placeholder.jpeg";

function Moviecard({allMovieData, loading}) {
  return (
    <div>
      {loading ? <div className='flex justify-center'>
        <div className='w-16 py-20'>
          <img src={loader} alt="loader_gif" />
        </div>
      </div> :<div className='main flex flex-wrap px-4 py-2 lg:px-10 '>
          {allMovieData.map((item ,index)=>{
            return(
              <div className='lg:w-1/4 p-2 w-full md:w-1/2 ' key={index}>
                <div className='bg-[#ff0040] p-3 rounded-2xl'>
                  <img  
                      className='rounded-lg  mb-2 object-center wh'
                      src={item.Poster !== "N/A" ? item.Poster : placeholderImage} alt="movie_poster" 
                  />
                  <h2 className='font-bold text-xl text-white'>{item.Title}</h2>
                  <h2 className='text-white text-lg mb-2 font-semibold'>{item.Year}</h2>
                </div>
              </div> 
            )
          })}

        </div>}
          
    </div>
    
  )
}

export default Moviecard