import React, { useEffect, useState } from 'react';
import MoviesCards from './MoviesCards';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch('https://movie-task.vercel.app/api/popular?page=1')
        .then(res => res.json())
        .then(data => {
            console.log(data.data.results);
             setMovies(data.data.results)})
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>

            {
                movies.map(movie => <MoviesCards key={movie.id} movie={movie}></MoviesCards>)
            }

        </div>
    );
};

export default AllMovies;