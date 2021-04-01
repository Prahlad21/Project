import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from './Profile';
import Mybooks from './Mybooks';
import Book from './Book';
import Lendbook from './Lendbook';
import Wallet from './Wallet';
import Editprofile from './Editprofile';
import Login from './Login';
import Signin from './Signin';


function App()  {
  return (
    <div>
     
    <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Profile} />      
      <Route exact path="/mybooks" component={Mybooks} />
      <Route exact path="/book" component={Book} />
      <Route exact path="/lendbook" component={Lendbook} />
      <Route exact path="/wallet" component={Wallet} />
      <Route exact path="/editprofile" component={Editprofile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={Signin} />

    </Switch>
    </div>
       </div>
    );
}


export default App;
