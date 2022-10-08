import React, { useEffect, useState } from 'react';
import MoviesCards from './MoviesCards';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(()=>{
        fetch(`https://movie-task.vercel.app/api/popular?page=${page}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data.results)
                setMovies(data.data.results.slice(0, 18))                    
        })
    },[page])

    if(!movies){
         return <p className='text-3xl font-bold mt-22 text-center'>Loading...</p>        
    }

    const handlePrev = () =>{
        if( page > 1){
           setPage(page - 1)
        }


    };

    const handleNext = () =>{
        setPage( page + 1)
    };
    
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>
                 {
                     movies.map(movie => <MoviesCards key={movie.id} movie={movie}></MoviesCards>)
                 }
            </div>
            <div className="btn-group mt-4">
              <button onClick={handlePrev} className="btn lowercase">« previous</button>
              <button className="btn">Page {page}</button>
              <button onClick={handleNext} className="btn lowercase px-8">next »</button>
            </div>
        </div>
    );
};

export default AllMovies;