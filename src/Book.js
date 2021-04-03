import React from 'react';
import './Book.css'
//import request from 'superagent'; 
import SearchArea from './SearchArea';
import BookList from './BookList';

function Book() {    
    return(
        <div className="bg">
            <div >
                <nav className="nav-book" style={{display:"flex", justifyContent:"space-around", margin:"18px 1px", borderBottom:"1px solid grey"}}>
                
                <ul><li>Book Cards</li></ul>
                </nav>
                <div>
                    <SearchArea  />
                    <BookList />
                </div>
                
            </div>
            
        </div>
    );
}

export default Book;