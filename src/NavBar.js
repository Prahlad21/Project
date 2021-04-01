import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

function NavBar() {
    return(
        <div>
            <nav className="nav-first">
            <div ><NavLink to="/navbar"> </NavLink></div>
            <div className="logo"><NavLink to="/navbar"> LIBRERY MANAGEMENT SYSTEM </NavLink></div>
            <ul>
            <li>
                        <input type="text" placeholder="Search Books"/>                
                        
                    </li>
            </ul>
            </nav>
            
            <nav>
                
                <ul className="nav-links">
                   
                    <li>
                        <NavLink exact activeClassName="active_class" to="/mybooks"> My Books </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/book"> Book </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/lendbook"> Lend Book </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/wallet"> Wallet </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/"> Profile </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/editprofile"> Edit Profile </NavLink>
                    </li>
                    <li>
                         <NavLink exact activeClassName="active_class" to="/login"> <Button variant="contained" color="primary">Login</Button> </NavLink>
                         <NavLink exact activeClassName="active_class" to="/signin"> <Button variant="contained" color="primary">Sign Up</Button> </NavLink>
                    </li>
                </ul>
                
            </nav>
            <div className="bg" >
                
            </div>
        </div>
    );
}

export default NavBar;