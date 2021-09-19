import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Mobilemenu = () => {
    const [menu, setMenu] = useState(false);
    const menuopen = (e) => {
      setMenu(!menu);
    };
  
    const menuclose = (e) => {
      setMenu(false);
    };
    const handlestatechange = (state) => {
      setMenu(state.isOpen);
    };

    return (  
        <div className="mobile-navbar">
        <div className="mobile-container">  
            <Menu
              isOpen={menu}
              onStateChange={(state) => handlestatechange(state)} 
              customBurgerIcon = {<MenuIcon/>}
              onOpen = {()=> menuopen()}
            >
                <div className="brand">
                    <Link to="/" onClick={()  => menuclose()}id='mobilelinks'>Get Gaming!</Link>
                </div>
                <ul className = 'nav-links'>
                    <li>
                    <Link to="/" onClick={()=> menuclose()} className='button'>Search</Link>
                    </li>
                    <li>
                    <Link to="/Gameslist" onClick={()=> menuclose()} className='button'>Games list</Link>
                    </li>
                    <li>
                    <Link to="/Gamesplayed" onClick={()=> menuclose()} className='button'>Games played</Link>
                    </li>
                </ul>
                </Menu>
                <customBurgerIcon onClick = {()=>menuopen()}/>
                </div> 
            </div>)
}


export default Mobilemenu;