import React from 'react';
import Innercardcontrols from './Innercardcontrols';


const Gamecard = ({props,type}) => {
    return (
           <div className="game-card">
               <div className="overlay"></div>
               {props.background_image ? (
                    <img src = {props.background_image}
                    alt ={`${props.name} Poster`}/>
                ):(
                    <div className="filler-poster"></div>
                )
                }
               <Innercardcontrols Game = {props} Type = {type} />
               </div> 
        
    )
}

export default Gamecard;
