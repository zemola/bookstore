import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = (props) => {
  const name = props;
  Book.propTypes = {
    name: PropTypes.string.isRequired,
  }
  return (
    <div key={name.data[0].id}>
      <h1>{name.data[0].type}</h1>
      <h2>{name.data[0].title}</h2>
      <h2>{name.data[0].author}</h2>
      <Button />
      <h1>{name.data[1].type}</h1>
      <h2>{name.data[1].title}</h2>
      <h2>{name.data[1].author}</h2>
      <Button />
      <h1>{name.data[2].type}</h1>
      <h2>{name.data[2].title}</h2>
      <h2>{name.data[2].author}</h2>
      <Button />

    </div>
  );
};

export default Book;
