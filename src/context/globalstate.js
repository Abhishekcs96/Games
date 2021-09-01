import React from "react";
import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//when working with context, we need to create an initial state, what the initial value is going to be of your store.

const initialstate = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context here,

export const Globalcontext = createContext(initialstate);

// to provide this to other components, we need to create a provider component
//it allows us to access the globalcontext from other components

export const Globalprovider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  //browser localstorage has to store it in string format, so it converts the array into a string.
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addmovietowatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removefromwatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };
  const watchedd = (movie) => {
    dispatch({ type: "WATCHEDD", payload: movie });
  };

  //move to watchlist
  const movetowatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie });
  };
  // remove from watched
  const removefromwatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <Globalcontext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addmovietowatchlist,
        removefromwatchlist,
        watchedd,
        movetowatchlist,
        removefromwatched,
      }}
    >
      {props.children}
    </Globalcontext.Provider>
  );
};
