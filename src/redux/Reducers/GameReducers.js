import { actiontypes } from "../Constants/actiontypes";

 const initialState = {
    gamestoplay : localStorage.getItem('gamestoplay')? JSON.parse(localStorage.getItem('gamestoplay')):[], 
    gamesplayed : localStorage.getItem('gamesplayed')? JSON.parse(localStorage.getItem('gamesplayed')):[],
 }


export const GameReducer= (state= initialState, {type, payload}) => {
    switch(type){
        
        case actiontypes.ADD_GAMES_PLAYED:
            return {...state, gamestoplay: state.gamestoplay.filter(game=> game.id !== payload.id),
                gamesplayed:[...state.gamesplayed, payload]}

        case actiontypes.ADD_GAMES_TO_PLAY:
            return {...state, gamestoplay:[...state.gamestoplay, payload]}
        
        case actiontypes.MOVE_GAMES_TO_PLAYLIST:
            return{...state, gamesplayed : state.gamesplayed.filter(game => game.id !== payload.id), 
                gamestoplay:[...state.gamestoplay, payload]}

        case actiontypes.REMOVE_GAMES_FROM_PLAYLIST:
            return {...state, gamestoplay: state.gamestoplay.filter(game => game.id !==payload)}
    
        case actiontypes.REMOVE_GAMES_FROM_PLAYED:
            return{...state, gamesplayed: state.gamesplayed.filter(game => game.id !== payload)}

         default:
             return state
    }

}

