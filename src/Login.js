import React from "react";
import './Sign.css'
import { TextField, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Login() {
    return(
        <div className="bg">
            
            <div style={{backgroundColor:"cyan", margin:"20px -80px", borderRadius:"50px"}}>
            <div className="icon">
                <div className="icon_class"><PersonAddIcon fontSize="large" /></div>               
                <div className="text">Log in </div>
            </div>

            

            <div className="row" align="center">
            <TextField id="email" className="p-2" type="text" variant="outlined" label=" Enter Email Id" fullwidth /><br/>
            <TextField id="Password" className="p-2" type="password" variant="outlined" label=" Enter Password" fullwidth /> <br/>          
               

            <Button variant="contained" color="primary" fullwidth >Log in</Button>
            </div>
            
            <Divider variant="middle" />
            <p className="text-center" align="center">
            
                <Link to="/signin" className="text-black-50">
                   <h5>Don't have an Account ? </h5>
                </Link>
            </p>
            </div>
            
        </div>
        
    );
}

export default Login;