import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Profile() {
    return(
        <div className="bg">
            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 1px",backgroundColor:"white", borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                </div>
                <div style={{margin:"18px 1px"}}>
                    <h2>Karan Nehra</h2>
                    <div>
                        <h5>aaaaaa123@gmail.com</h5>
                        <h5>9887652212</h5>
                    </div>
                    <div><Link to="/editprofile">
                    <Button variant="contained" color="primary" fullwidth >Edit Profile</Button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;