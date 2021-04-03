import React from "react";

function Mybooks() {
    return(
        <div className="bg">
            <nav className="nav-book" style={{display:"flex", justifyContent:"space-around", margin:"18px 1px", borderBottom:"1px solid grey"}}>
              <ul>
                  <li> My Book</li>
              </ul>
            
                </nav>
                <div className="desc" align="center">
                        <ul><li>In Progress</li></ul>
                    </div>

        </div>
    );
}

export default Mybooks;