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
                         
                    
                  </div>
                  
              </div>
          </div>

    );

            
}

export default Watchlist;
