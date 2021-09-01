import React from 'react';
import { useContext } from 'react';
import { Globalcontext } from '../context/globalstate';
import Moviecard from './Moviecard';



const Watchlist = () => {
    const {watchlist} = useContext(Globalcontext);
    return(
          <div className="movie-page">
              <div className="container">
                  <div className="header">
                     <h1 className ='heading'>My Watchlist!</h1> 
                         
                     {watchlist.length > 0 ? (  <div className="movie-grid">
                      {watchlist.map((Movie)=>(<Moviecard Movie ={Movie} type= "watchlist"/>))}
                  </div>) : (<h2 className='No-movies'> No movies! </h2>)} 
                  </div>
                  
              </div>
          </div>

    );

            
}

export default Watchlist;