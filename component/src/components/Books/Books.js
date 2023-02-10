import React from 'react';
import Book from '../Book/Book';

const Books = (props) => {
    const books = props.books;
    return (
        <div className='ConfigD '>
            {
                books.map(book => <Book name={book.name} author={book.author}></Book>)
            }
        </div>
    );
};

export default Books;