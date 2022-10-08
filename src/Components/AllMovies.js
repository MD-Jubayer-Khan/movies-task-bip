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
            <div className='flex place-content-between'>
          <div className='flex'>
          <select  className=" bg-transparent border border-secondary rounded w-40 ml-20 mb-4 my-2 pl-3 pr-4 font-bold">
            <option className='bg-transparent ' disabled selected>Filter by Year</option>
              {/* {category.map(p => <option key={p.id} >{p.category}</option>)} */}
          </select>
          <div  className='flex ml-3'>
           <p className='text-xl font-bold mt-4 ml-2 text-primary'>Reset</p>
          </div>
        
          </div>
        
            <div className='flex'>
            <div className="form-control mr-20 my-3">
                <form className='flex'>
                     <input   type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />    
                     <input className='btn btn-outline ml-3 px-8' type="submit" value="Search" />                
                </form>

            </div>
            </div>
          </div>
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