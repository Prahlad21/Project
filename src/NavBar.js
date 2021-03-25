import React from 'react';

function NavBar() {
    return(
        <div>
            
            <nav>
                <div className="logo"> <a href="NavBar.js">LIBRERY MANAGEMENT SYSTEM</a></div>
                <ul className="nav-links">
                    <li>
                        <a>Search Books</a>
                    </li>
                    <li>
                        <a>My Books</a>
                    </li>
                    <li>
                        <a>Book</a>
                    </li>
                    <li>
                        <a>Lend Book</a>
                    </li>
                    <li>
                        <a>Wallet</a>
                    </li>
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Edit Profile</a>
                    </li>
                    <li><a href="RememberMe.js">Log In</a></li>
                </ul>
                <i className="fas fa-bars burger">
                   
                </i>
            </nav>
            <div style={{ backgroundImage: "url(D:\react\ReactApp/download.jpg)" }}>
                
            </div>
        </div>
    )
}

export default NavBar;