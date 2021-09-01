import React from 'react'
import { useContext } from 'react';
import { Globalcontext } from '../context/globalstate';
import Moviecard from './Moviecard';

const Watched = () => {
    const {watched} = useContext(Globalcontext);
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
               <h1 className ='heading'>Watched Movies!</h1> 
                   
               {watched.length > 0 ? (  <div className="movie-grid">
                {watched.map((Movie)=>(<Moviecard Movie ={Movie} type= "watched"/>))}
            </div>) : (<h2 className='No-movies'> No movies! </h2>)} 
            </div>
            
        </div>
    </div>
    )
}

export default Watched;
