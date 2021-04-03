import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

function NavBar() {
    return(
        <div>
            <nav className="nav-first">
            <div>
            <div>
                    <img style={{width:"120px", height:"120px",borderRadius:"100px"}}
                    src="https://image.shutterstock.com/image-vector/template-logo-library-bookstore-four-260nw-299085131.jpg"
                    alt=""
                    />
                </div>
            </div>
            <div className="logo"  ><NavLink style={{color: "cyan"}} to="/navbar"> LIBRARY MANAGEMENT SYSTEM </NavLink></div>
            <ul>
            <li>
                        <input type="text" placeholder="Search Books"/>                
                        <button type="submit">Search</button>
                    </li>
            </ul>
            </nav>
            
            <nav>
                
                <ul className="nav-links">
                   
                    <li>
                        <NavLink exact activeClassName="active_class" style={{color: "white" }} to="/mybooks"> My Books</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" style={{color: "white"}} to="/book"> Book </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class"  style={{color: "white"}}to="/lendbook"> Lend Book </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" style={{color: "white"}} to="/wallet"> Wallet </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" style={{color: "white"}} to="/"> Profile </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active_class" style={{color: "white"}} to="/editprofile"> Edit Profile </NavLink>
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