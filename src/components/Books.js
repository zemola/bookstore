import { useSelector } from 'react-redux';
import AddBooks from './AddBooks';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      {books.map((task) => (
        <Book
          id={task.id}
          key={task.id}
          title={task.title}
        />
      ))}
      <AddBooks />
    </div>
  );
};

export default Books;
