import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/Searchbar'
import Moviecard from './components/moviecard/Moviecard'

function App() {

const [allMovieData , setAllMovieData]=useState([]);
const [searchMovie , setSearchMovie]=useState('');
const [loading, setLoading]=useState(false);

const fetchMovieData = async()=>{
 try {
  setLoading(true)
  const res =  await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=80a00111`);
  const data = await res.json()
  setAllMovieData(data.Search)
  setLoading(false)
  console.log(data.Search);
 } catch (error) {
  console.log(error)
 }
}

  return (
    <>
    <Navbar/>
    <div className="bg">
    <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
     <Moviecard allMovieData={allMovieData} loading={loading}/>
    </div>

    </>
  )
}

export default App