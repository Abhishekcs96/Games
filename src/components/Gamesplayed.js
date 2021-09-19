import React from 'react'
import { useSelector } from 'react-redux';
import Gamecard from './Gamecard';

const Gamesplayed = () => {
const result = useSelector(state=>state.GameReducer.gamesplayed)
    return (
        <div className="game-page">
        <div className="container">
            <div className="header">
               <h1 className ='heading'>Games played</h1> 
                   
               {result.length > 0 ? (  <div className="game-grid">
                {result.map((games)=>(<Gamecard props ={games} type= "gamesplayed"/>))}
            </div>) : (<h2 className='No-games'> Collection complete!...or youre yet to complete any.. Add some! </h2>)} 
            </div>
            
        </div>
    </div>
    )
}

export default Gamesplayed;
