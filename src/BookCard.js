import React  from 'react';
import './Book.css'
function BookCard() {
    
    return(
        <div className="bg">
            <div className="card-container">
                    <img src={ Image } alt="" />
        
                    <div className="desc" align="center">
                        <ul><li>In Progress</li></ul>
                    </div>
            </div>
        </div>
    );
    
}

export default BookCard;