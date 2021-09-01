import React from 'react';
import Moviecontrols from './moviecontrols';

const Moviecard = ({Movie, type}) => {
    return (
        
           <div className="movie-card">
               <div className="overlay"></div>
               {Movie.poster_path ? (
                    <img src = {`https://image.tmdb.org/t/p/w200${Movie.poster_path}`}
                    alt ={`${Movie.title} Poster`}/>
                ):(
                    <div className="filler-poster"></div>
                )
                }
               <Moviecontrols type={type} movie = {Movie} />
               </div> 
        
    )
}

export default Moviecard;
