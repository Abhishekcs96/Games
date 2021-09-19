import { actiontypes} from "../Constants/actiontypes";
import React from 'react'

export const addGamesToPlay = (props) => {
    return {
     type: actiontypes.ADD_GAMES_TO_PLAY,
     payload: props,
    }    
}

export const addGamesPlayed = (props) => {
    return{
        type: actiontypes.ADD_GAMES_PLAYED,
        payload: props,
    }
}

export const moveGamesToPlaylist = (props) => {
    return{
        type:actiontypes.MOVE_GAMES_TO_PLAYLIST,
        payload:props
    }
}
 
export const removeGamesFromPlaylist = (props) => {
    return{
        type: actiontypes.REMOVE_GAMES_FROM_PLAYLIST,
        payload:props
    }
}

export const removeGamesFromPlayed = (props) => {
    return{
        type: actiontypes.REMOVE_GAMES_FROM_PLAYED,
        payload: props,
        
    }
}

