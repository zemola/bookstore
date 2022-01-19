import React from 'react';
import Button from './Button';

const Book = (props) => {
  const book = props;
  return (
    <div className="book">
      <div className="title">
        <article>
          <p>Action</p>
          <h2>{book.title}</h2>
          <p>Author</p>
          <ul>
            <li>Comments</li>
            <li>
              <Button id={book.id} />
            </li>
            <li>Edit</li>
          </ul>
        </article>
      </div>
      <div className="current">
        <h3>Current Chapter</h3>
        <h3><b>Chapter 17</b></h3>
        <input type="button" value="Update Progress" />
      </div>
    </div>
  );
};

export default Book;
