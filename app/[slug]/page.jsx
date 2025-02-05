"use client"
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Loader from "../../public/loader.webp"

const page = ({ params }) => {
  export const metadata = {
  title: 'Trailler Movies| Films',
  description: 'Trailers of Movies in website',
}
  const { slug } = params
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMoviesDetails = async () => {
      const api = await fetch(`https://itunes.apple.com/lookup?id=${slug}`)
      const data = await api.json()
      setMovies(data.results[0])
      console.log(data);

    }
    fetchMoviesDetails()
  }, [slug])
  if (!movies) {
    return (
      <>
        <div className='loader'>
          <Image className='loader-image' src={Loader} alt="" />
        </div>
      </>
    )
  }
  const pixel = movies?.artworkUrl100?.replace("100x100", "500x500");

  return (
    <div className='movie-detail-page'>
      <div className="movie-detail-container">
        <video style={{border:"1px solid blue"}} src={movies.previewUrl} controls autoPlay className='movie-video'/>
        <div className="movie-info">

 
        <h1>{movies.trackName}</h1>
        <p>
          <strong>Gender: </strong> {movies.primaryGenreName}
          </p>
          <p>
            <strong>Release Dete : </strong> {movies.releaseDate} 
          </p>
          <p>
            <strong>Rating : </strong> {movies.contentAdvisoryRating}
          </p>
          <p>
            <strong>Description : </strong> {movies.longDescription}
          </p>
          </div>
      </div>
          <button className='back-button' onClick={()=>window.history.back()}>Go to Home</button>
    </div>
  )
}

export default page
