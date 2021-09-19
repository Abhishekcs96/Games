import React from "react";
import { useState } from "react";
import Games from "./Games";
//api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&query=${e.target.value}`)
const Search = () => {
  const [game, setGame] = useState("");
  const [gameresults, setGameresults] = useState([]);
  const key = '590784b5132240c3926995f189b595d4';

  const changed = (e) => {
    e.preventDefault();
    let slug = game.split(' ').join('-').toLowerCase()
    setGame(e.target.value);
    fetch(
      (`https://rawg.io/api/games?key=${key}&search=${slug}`)
    )
      .then((res) => res.json())
      .then(({results}) => {
        if (!results.error) {
          setGameresults(results);
          console.log(results)
        } else {
          setGameresults([]);
        }
      });
  };
  return (
    <div className="search-container">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a game..."
              value={game}
              onChange={changed}
            />
          </div>

          {gameresults.length > 0 && (
            <ul className="results-container">
              {gameresults.map((gameofresultobj) => (
                <li key={gameofresultobj.id}>
                  {" "}
                  <Games props={gameofresultobj} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
