import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { addGamesPlayed, addGamesToPlay } from '../redux/Actions/actions';
import {Button} from '@mui/material';

const Games = ({props}) => {
 const result1 = useSelector((state)=>state.GameReducer.gamestoplay)
 const result2 = useSelector((state)=> state.GameReducer.gamesplayed)
 const dispatch = useDispatch();
 const gameinlist = result1.find(game=>game.id === props.id);
 const gameinplayed = result2.find(game=> game.id === props.id);
 const disablebutton = gameinlist ? true : gameinplayed ? true : false;
  
   
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {props.background_image ? (
                    <img src = {props.background_image}
                    alt ={`${props.name} Poster`}/>
                ):(
                    <div className="filler-poster"></div>
                )
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{props.name}</h3>
                    <h4 className="Rating">{props.rating}</h4>
                    <h5 className='Release-date'>{props.released}</h5>
                </div>

                <div className="controls">
                    <Button variant = 'contained'   disabled={disablebutton} onClick={()=> dispatch(addGamesToPlay(props))}>Add to list</Button>
                    <Button variant = 'contained'  disabled={disablebutton}  onClick={()=> dispatch(addGamesPlayed(props))}>Add to played</Button> 

                </div>
            </div>
        </div>
            
        
    )
}

export default Games;
