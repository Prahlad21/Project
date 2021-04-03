import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Book.css'

function Profile() {
    return(
        <div className="bg">
            <nav className="nav-book" style={{display:"flex", justifyContent:"space-around", margin:"18px 1px", borderBottom:"1px solid grey"}}>
              <ul>
                  <li> Profile</li>
              </ul>
            
                </nav>

            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 1px",backgroundColor:"Teal", borderBottom:"1px solid grey"}}>
            
                <div style={{display:"flex", justifyContent:"space-around", margin:"18px -70px"}}>
                   <ul>
                       <li>
                    <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt=""
                    />
                    </li><li align="center">
                    <div><Link to="/editprofile">
                    <Button variant="contained" color="primary" fullwidth >Edit Profile</Button></Link>
                    </div>
                    </li>
                    </ul>
                </div>
                <div style={{margin:"20px 0px" }} className="ss">
                    <ul>
                    <li><label>Name: Karan Nehra</label></li><br/>
                    <li><label> Gender: Male</label></li><br/>
                        <li>Email Id: aaaaaa123@gmail.com</li><br/>
                        <li>Contact: 9887652212</li>
                    </ul>                  
                    
                </div>
                <div style={{margin:"20px 0px" }} className="ss">
                    <ul>
                    <li>Address: abcdkl</li><br/>
                    
                        <li>Profession: Student</li><br/>
                        <li>Institute Name: S K B U</li>
                    </ul>                  
                    
                </div>
            </div>
            
        </div>
    );
}



export default Profile;