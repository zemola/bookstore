import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBooks from './AddBooks';
import Book from './Book';
import { getBookFromApi } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBookFromApi());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Book
          id={book.item_id}
          key={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <AddBooks />
    </div>
  );
};

export default Books;
