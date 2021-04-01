import React from "react";
import './Sign.css'
import { TextField, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


function Signin() {
    return(
        <div className="bg">

            <div className="icon">
                <div className="icon_class"> <PersonAddIcon fontSize="large" /></div>
                <div className="text"> Sign Up </div>
            </div>

            <div className="row" align="center">
                 <div className="col-6 p-2">
                     <TextField id="firstname" type="text" variant="outlined" label=" Enter First Name" fullwidth /><br/>
                 
                 <TextField id="lastname" type="text" variant="outlined" label=" Enter Last Name" fullwidth />
                 </div>
            </div>
  
          <div className="row" align="center">
            <TextField id="email" className="p-2" type="text" variant="outlined" label=" Enter Email" fullwidth /></div>
            <div className="row" align="center">
            <TextField id="password" className="p-2" type="password" variant="outlined" label=" Enter Password" fullwidth /></div>
            
            
            <div className="row" align="center">
            <Button variant="contained" color="primary" fullwidth >Create Account</Button>
            </div>
            <Divider variant="middle" />
            <p className="text-center" align="center">
                <Link to="/login" className=" text-black-50">
                    <h5>Already have an Account ? </h5>
                </Link>
            </p>
        </div>
    );
}

export default Signin;