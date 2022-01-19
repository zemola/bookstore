import React from 'react';

const AddBooks = () => (
  <form>
    <input placeholder="ADD NEW BOOK" />
    <select name="books" id="book">
      <option value="Science fiction">The God&apos;s Equation</option>
      <option value="Action">Volvo</option>
      <option value="Economy">Dollars</option>
      <option value="Computer Science">DS n ALgo</option>
    </select>
    <button type="submit">Add Book</button>
  </form>
);

export default AddBooks;
