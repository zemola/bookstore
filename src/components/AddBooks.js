import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  const OnChangeHandle = (e) => {
    setState(e.target.value);
  };
  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: state,
      author: '',
    };

    dispatch(addBook(newBook));

    // dispatch an action and pass it the newBook object (your action's payload)
  // dispatch(addBook(newBook));
  };
  return (
    <form>
      <input value={state} onChange={OnChangeHandle} placeholder="ADD NEW BOOK" />
      <select name="books" id="book">
        <option value="Science fiction">The God&apos;s Equation</option>
        <option value="Action">Volvo</option>
        <option value="Economy">Dollars</option>
        <option value="Computer Science">DS n ALgo</option>
      </select>
      <input type="button" value="Add Book" onClick={submitBookToStore} />
    </form>
  );
};

export default AddBooks;
