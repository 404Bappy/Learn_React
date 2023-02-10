import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h2>Book Name : {props.name}</h2>
            <h4>Author: {props.author}</h4>
        </div>
    );
};

export default Book;