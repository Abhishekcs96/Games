import React from 'react';
import {useSelector} from'react-redux';
import Gamecard from './Gamecard';



const Gameslist = () => {
    const result = useSelector(state=>state.GameReducer.gamestoplay);
    return(
          <div className="game-page">
              <div className="container">
                  <div className="header">
                     <h1 className ='heading'>My Gameslist</h1> 
                         
                     {result.length > 0 ? (  <div className="game-grid" key={result.id}>
                      {result.map((games)=>(<Gamecard props ={games} type="gamestoplay"/>))}
                  </div>) : (<h2 className='No-games'> This space looks empty...Add games! </h2>)} 
                  </div>
                  
              </div>
          </div>

    );

            
}

export default Gameslist;