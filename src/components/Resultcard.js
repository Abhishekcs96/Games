import React from 'react';
import {useContext} from 'react';
import { Globalcontext } from '../context/globalstate';
import {AiTwotoneEyeInvisible} from 'react-icons/ai';

const Resultcard = ({Movie}) => {
    const {addmovietowatchlist, watchlist, watched, watchedd} = useContext(Globalcontext);
    const storedMovie = watchlist.find(o=>o.id === Movie.id);
    const storedMovieWatched = watched.find(o=> o.id === Movie.id);
    const watchlistdisabled = storedMovie ? true : storedMovieWatched ? true : false;
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {Movie.poster_path ? (
                    <img src = {`https://image.tmdb.org/t/p/w200${Movie.poster_path}`}
                    alt ={`${Movie.title} Poster`}/>
                ):(
                    <div className="filler-poster"></div>
                )
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{Movie.title}</h3>
                    <h4 className="Release_date">{Movie.release_date.substring(0, 4)}</h4>
                </div>

                <div className="controls">
                    <button className="btn" disabled = {watchlistdisabled} onClick={()=> addmovietowatchlist(Movie)}>
                        Add to Watchlist
                        </button>

                        <button className="btn" disabled = {watchlistdisabled} onClick={()=> watchedd(Movie)}>
                        <AiTwotoneEyeInvisible/>
                        </button> 

                </div>
            </div>
        </div>
            
        
    )
}

export default Resultcard;
