import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <div className = "container" id ='navbar'>
                <div className = "inner-content" id='navbar-links'>
                    <div className="brand">
                        <Link to="/">Get Gaming!</Link>
                    </div>
                    <ul className = 'nav-links'>
                        <li>
                        <Link to="/" className='button'>Search</Link>
                        </li>
                        <li>
                        <Link to="/Gameslist">Games list</Link>
                        </li>
                        <li>
                        <Link to="/Gamesplayed">Games played</Link>
                        </li>
                    </ul>
                    </div> 
                </div>
        </header>
    );
}

export default Navbar;
