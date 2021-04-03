import React from "react";
import './App.css'
import { TextField, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';



function Editprofile() {
    return(
        <div className="bg"> 
        <nav className="nav-book" style={{display:"flex", justifyContent:"space-around", margin:"18px 1px", borderBottom:"1px solid grey"}}>
                <ul><li>Edit Profile</li> </ul>
            
                </nav>
           <div style={{display:"flex", justifyContent:"space-around", margin:"0px 10px",backgroundColor:"skyblue", borderBottom:"1px solid grey"}}>
           <div className="ss" style={{display:"flex", justifyContent:"space-around", borderRadius:"20px", margin:"18px -70px",backgroundColor:"blue"}}>
           <ul><li>
                    <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt=""
                    /> </li>
                    
                        <li align="center">Karan Nehra</li>
                        <li align="center">9887652212</li>
                        <li align="center">aaa123@gmail.com</li>
                        </ul>      
                    
                </div>
                <div style={{margin:"20px 0px" }} className="ss">
                     <h4>Name </h4>
                     <TextField id="firstname" type="text" variant="outlined" label="Enter Name" fullwidth /><br/><br/>
                     <h4>Gender</h4>                    
                     <input type="radio" name="gender" checked=" male" value="male" /><label>Male</label>
                     <input type="radio" name="gender" value="female"/><label>Female</label>
		             <input type="radio" name="gender" value="other"/><label>Other</label><br/><br/>
                         
                    
                                   
                         <h4>Date Of Birth</h4>
                         <select>
							<option>Day</option>
							<option>01</option>
							<option>02</option>
							<option>03</option>
							<option>04</option>
							<option>05</option>
							<option>06</option>
							<option>07</option>
							<option>08</option>
							<option>09</option>
							<option>10</option>
							<option>11</option>
							<option>12</option>
							<option>13</option>
							<option>14</option>
							<option>15</option>
							<option>16</option>
							<option>17</option>
							<option>18</option>
							<option>19</option>
							<option>20</option>
							<option>21</option>
							<option>22</option>
							<option>23</option>
							<option>24</option>
							<option>25</option>
							<option>26</option>
							<option>27</option>
							<option>28</option>
							<option>29</option>
							<option>30</option>
							<option>31</option>
							</select>
							<select>
							<option>Month</option>
							<option>JANUARY</option>
							<option>FEBRUARY</option>
							<option>MARCH</option>
							<option>APRIL</option>
							<option>MAY</option>
							<option>JUNE</option>
							<option>JULY</option>
							<option>AUGUST</option>
							<option>SEPTEMBER</option>
							<option>OCTOBER</option>
							<option>NOVEMBER</option>
							<option>DECEMBER</option>
							</select>
							<select>
							<option>Year</option>
							<option>1990</option>
							<option>1991</option>
							<option>1992</option>
							<option>1993</option>
							<option>1994</option>
							<option>1995</option>
							<option>1996</option>
							<option>1997</option>
							<option>1998</option>
							<option>1999</option>
							<option>2000</option>
							
							</select><br/><br/>
                            <h4>  Address</h4>  <TextField id="address" type="text" variant="outlined" label=" Address" fullwidth />

                         
                </div>
                <div style={{margin:"20px 0px",  }} className="ss">                   
                  
                        <h4> Contact </h4>  
                        <TextField id="phone" type="number" variant="outlined" label=" Phone Number" maxlength="10" fullwidth /><br/><br/>
                        <h4> Email Id </h4>   <TextField id="email" type="email" variant="outlined" label=" Email Id" fullwidth /><br/><br/>
                        <h4>  Profession </h4>  <TextField id="profession" type="text" variant="outlined" label=" Profession" fullwidth /><br/><br/>
                          
                        
                <Link to="/" className=" text-black-50"><button type="submit" style={{backgroundColor:"blue"}}>Save</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Editprofile;