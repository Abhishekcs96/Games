import React from 'react';
import Innercardcontrols from './Innercardcontrols';


const Gamecard = ({props,type}) => {
    return (
           <div className="game-card">
               <div className="overlay"></div>
               {props.background_image ? (
                    <img id='img-aspect-sizing' src = {props.background_image}
                    alt ={`${props.name} Poster`}/> 
                   
                ):(
                    <div className="filler-poster"></div>
                )
                }
                 <h3 className="title">{props.name}</h3>
               <Innercardcontrols Game = {props} Type = {type} />
            </div> 
        
    )
}

export default Gamecard;
