import React from 'react';
import {useContext} from 'react';
import {AiFillEye} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import {AiTwotoneEyeInvisible} from 'react-icons/ai';
import {ImBoxRemove} from 'react-icons/im';

import { Globalcontext } from '../context/globalstate';

const Moviecontrols = ({movie, type}) => {
    const {removefromwatchlist,  movetowatchlist, removefromwatched} = useContext(Globalcontext);
    const {watchedd} = useContext(Globalcontext);
    return (
       <div className="inner-card-controls">
           {
           type === 'watchlist' &&(   //react fragments, brackets with no elements in them really
               
               <> 
                <button className= "ctrl-btn" onClick = {()=> removefromwatchlist(movie.id)}>
                <AiTwotoneEyeInvisible/>
                </button>  
                   
                <button className= "ctrl-btn" onClick = {()=> watchedd(movie.id)}>
                <AiFillEye/>
                </button>                                       
               </>

           )}

           {
               type === 'watched' && (
                   <>
                    
                    <button className= "ctrl-btn" onClick={()=> movetowatchlist(movie)}>
                    <ImBoxRemove/>
                   </button> 

                
                    <button className= "ctrl-btn" onClick = {()=> removefromwatched(movie.id)}>
                   <ImCross/>
                   </button>             

                   </>
                
               )

           }
           
       </div>
    )
}

export default Moviecontrols;
