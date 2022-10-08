import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoviesCards = ({movie}) => {
  const {title, release_date, backdrop_path, vote_average, vote_count, id} = movie;
  const posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const navigate = useNavigate()

  const handleNavigate = id => {
    navigate(`/movie/${id}`)

  }
    return (
        <div className="card w-96 bg-base-700 shadow-xl image-full mx-auto">
          <img src={posterUrl} alt="Movie Poster" />
            <div className="card-body">
              <h2 className="card-title mx-auto font-bold">{title}</h2>
               <p></p>
                <span className='text-secondary'>Release: {release_date}</span>
                 <span>Vote: {vote_count}</span>
                <span>Rating:<span className='text-warning'> {vote_average} </span> </span>
              <div className="card-actions justify-end">
            <button className="btn btn-ghost border-secondary hover:bg-secondary " onClick={()=> handleNavigate(id)}>See Details</button>
          </div>
        </div>
       </div>
    );
};

export default MoviesCards;