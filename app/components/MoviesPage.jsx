// "use client"
import React from 'react'
import MovieRow from './MovieRow'

const MoviesPage = ({ movieCategories }) => {
    
    

    return (
        <div className='bg-black min-h-screen'>

            <main className='p-8'>
                
              {movieCategories?.map((category)=>(
                <div key={category.title}>
                    <MovieRow category={category}/>

                </div>
              ))}

            </main>
        </div>
    )
}

export default MoviesPage
