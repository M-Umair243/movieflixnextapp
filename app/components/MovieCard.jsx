"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const MovieCard = ({ movie }) => {
    const [isHovering, setIsHovering] = useState(false)
    const pixel = movie?.artworkUrl100?.replace("100x100", "500x500");
    const router = useRouter()
    return (
        <div className='movie-card'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={()=>router.push(`/${movie.trackId}`)}
        >
            {isHovering && movie.previewUrl ? <video src={movie.previewUrl} autoPlay muted loop className='hover-preview' /> : <img src={pixel} alt="Movie Poster" />
            }
            <div className='details'>
                <h1 style={{ fontSize: "20px" }}>{movie.trackName}</h1>
                <p>{movie.primaryGenreName}</p>
            </div>


        </div>
    )
}

export default MovieCard
