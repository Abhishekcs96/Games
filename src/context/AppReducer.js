export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return{
                ...state,
                watchlist:[action.payload, ...state.watchlist]
            }
        case "REMOVE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(Movie => Movie.id !== action.payload), 
            }
        case "WATCHEDD":
            return{
                ...state,
                watchlist: state.watchlist.filter(Movie => Movie.id !== action.payload.id),
                watched : [action.payload, ...state.watched], 

            }
        case "MOVE_TO_WATCH_LIST":
            return{
                ...state,
                watched: state.watched.filter(Movie=>Movie.id !==action.payload.id),
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_FROM_WATCHED":
            return{
                ...state,
                watched: state.watched.filter(Movie => Movie.id !==action.payload)
            };
        default:
            return state;
    } 
};