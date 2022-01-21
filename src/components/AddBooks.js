import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookToApi } from '../redux/books/books';

const AddBooks = () => {
  const [value, setValue] = useState('');
  const [categoryValue, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: value,
      category: categoryValue,
    };

    dispatch(addBookToApi(newBook));
    setValue('');
    setCategory('');
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="form-div">
      <hr />
      <h3 className="new-book">ADD NEW BOOK</h3>
      <form>
        <input className="inp" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Book title" required />
        <select className="cate" name="books" id="book" onChange={categoryHandler} required>
          <option>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Cooking">Cooking</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="History">History</option>
          <option value="Romance">Romance</option>
        </select>
        <input className="adding" type="button" value="ADD BOOK" onClick={submitBookToStore} />
      </form>
    </div>
  );
};

export default AddBooks;
