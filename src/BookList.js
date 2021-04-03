import React  from 'react';
import './Book.css'
import BookCard from './BookCard';
function BookList() {
    return(
        <div className="bg">
            <div className="list">
                    
                         <BookCard />                       
                    
            </div>
        </div>
    );
}

export default BookList;