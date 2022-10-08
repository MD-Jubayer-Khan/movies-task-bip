import React, { useEffect, useRef, useState } from 'react';
import MoviesCards from './MoviesCards';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState([])
    const [page, setPage] = useState(1)
    const inputRef = useRef(null);

    const loadMovies = () => {
        const allMovies = filter
        setMovies(allMovies)
      }

    useEffect(()=>{
        fetch(`https://movie-task.vercel.app/api/popular?page=${page}`)
        .then(res => res.json())
        .then(data => {
                setMovies(data.data.results.slice(0, 18))
                setFilter(data.data.results.slice(0, 18))                   
        })
    },[page])

    if(!movies){
         return <p className='text-3xl font-bold mt-22 text-center'>Loading...</p>        
    }


    const handleFilter = (e) => {

        if(e.target.value){
            const match = filter.filter(movie => movie.release_date.includes(e.target.value));
              setMovies(match)
        }
        else{
               loadMovies()
        }
      
      }

    const handleFilterClr = () =>{
        loadMovies()
    }

    const handleSearch = (e) => {
        e.preventDefault()

       const searchUrl = `https://movie-task.vercel.app/api/search?page=${page}&query=${inputRef.current.value}`;
        
       if(inputRef.current.value){
            fetch(searchUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.data.results.total_results === null){
                    return                                   
                }

                else{
                     setMovies(data.data.results.slice(0, 18))  
                }

            })
       }

       else{
        loadMovies()
       }

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
          <select onChange={(e) => handleFilter(e)}  className=" bg-transparent border border-secondary rounded w-40 ml-20 mb-4 my-2 pl-3 pr-4 font-bold">
            <option className='bg-transparent ' disabled selected>Filter by Year</option>
              {filter.map(movie => <option key={movie.id} >{movie.release_date}</option>)}
          </select>
          <div onClick={handleFilterClr} className='flex ml-3'>
           <p className='text-xl font-bold mt-4 ml-2 text-primary'>Reset</p>
          </div>
        
          </div>
        
            <div className='flex'>
            <div className="form-control mr-20 my-3">
                <div className='flex'>
                     <input ref={inputRef}  type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />    
                    <button onClick={(e) => handleSearch(e)} className='btn btn-outline ml-3 px-8'> Search</button>               
                </div>

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