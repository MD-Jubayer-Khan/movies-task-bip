import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movieDetails , setMovieDetails] = useState([])
    console.log(movieDetails);
    const {Id} = useParams();
    const imgSrc = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`

    useEffect(()=>{
        fetch(`https://movie-task.vercel.app/api/movie?movieId=${Id}`)
        .then(res => res.json())
        .then(data => {
            setMovieDetails(data.data)
        })
    },[Id])


    return (
        <div className="card w-96 bg-base-700 shadow-xl image-full mx-auto">
          <figure><img src={imgSrc} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">{movieDetails.original_title}</h2>
            <p>{movieDetails.overview}</p>
            <span>Popularity: {movieDetails.popularity}</span>
            <span>Release: {movieDetails.release_date}</span>
            <span>status: {movieDetails.status} </span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><Link to='/'>Go Home </Link></button>
            </div>
          </div>
        </div>
    );
};

export default MovieDetails;