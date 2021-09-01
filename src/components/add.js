import React from 'react'
import { useState } from 'react';
import Resultcard from './Resultcard';
//api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&language=en-US&include_adult=false&query=${e.target.value}`)
const Add = () => {
    const [Movie, setMovie] = useState("");
    const [Resultss, setResultss] = useState([]);

    const changed = (e) => {
        e.preventDefault();

        setMovie(e.target.value);
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a79746a4ce3ca413fccd0c13e811f81b&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res)=>res.json())
        .then(data => {
            console.log(data);
            if(!data.error){

            
            setResultss(data.results);
            }
            else{
                setResultss([]);
            }
                
            });
    };
    return (
      <div className="add-page">
          <div className="container">
              <div className="add-content">
                  <div className="input-wrapper">
                      <input type ="text" placeholder="Search for a movie..."
                      value= {Movie} onChange={changed}/>
                  </div>
                  
                  {Resultss.length > 0 && (
                      <ul className="results">
                          {Resultss.map((Movie) => (
                             <li key={Movie.id}><Resultcard Movie={Movie}/></li>
                          ))}
                      </ul>
                    )}
              </div>
          </div>
      </div>
    )
}

export default Add;
