import React from 'react'
import MovieCard from './MovieCard'

const MovieRow = ({ category }) => {
    return (
        <div className='movie-row mb-10'>
            <h2>{category.title}</h2>
           <div className='flex gap-4 overflow-x-auto scrollbar-hide px-2 sm:px-4'>
           {category.movies?.map((movie) =>
            <MovieCard key={Math.random()} movie={movie} />
            )}
           </div>
        </div>
    )
}

export default MovieRow
