import React, { useState } from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/Searchbar'
import Moviecard from './components/moviecard/Moviecard'
import Footer from './components/footer/Footer';
import Home from './components/linkpage/Home';
import About from './components/linkpage/About';
import Contact from './components/linkpage/Contact';
import Service from './components/linkpage/Service';

function App() {

const [allMovieData , setAllMovieData]=useState([]);
const [searchMovie , setSearchMovie]=useState('');
const [loading, setLoading]=useState(false);
const location = useLocation();

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

const noSearchRoutes = ['/about', '/contact', '/service'];
const shouldRenderSearch = () => {
  return !noSearchRoutes.includes(location.pathname);
};

  return (
    <>
    
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      
        {shouldRenderSearch() && (
        <>
          <div className="bg">
            <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
            <Moviecard allMovieData={allMovieData} loading={loading} />
          </div>
        </>
      )}
        <Footer />
    </>
  )
}

export default App