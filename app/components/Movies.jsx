// "use client"
import React from 'react'
import MoviesPage from './MoviesPage';
const fetchMovies = async (query) => {
    const api = await fetch(`https://itunes.apple.com/search?term=${query}&media=movie`)
    const data = await api.json()
    console.log(data.results);

    return data.results;

}
export default async function Movies() {
    const actionMovies = await fetchMovies("marvel")
    const dcMovies = await fetchMovies("dc")
    const modernMovies = await fetchMovies("2023")
    const comedyMovies = await fetchMovies("comedy")
    const dramaMovies = await fetchMovies("drama")

    const movieCategories  = [
        { title: "Action Thrillers", movies: actionMovies },
        { title: "DC", movies: dcMovies },
        { title: "Modern Movies", movies: modernMovies },
        { title: "Comedy Movies", movies: comedyMovies },
        { title: "Dramas Stories", movies: dramaMovies },
    ]
    
    return (
        <>
            <header >
                <h1 style={{ padding: "10px" }}>Movies Flix</h1>
              <MoviesPage movieCategories={movieCategories}/>

            </header>
        </>
    )
}


