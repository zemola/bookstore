import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ data }) => (
  <div>
    {data.map((book) => (
      <>
        <h1>{book.type}</h1>
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
        <Button />
      </>
    ))}
  </div>
);

Book.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Book;
