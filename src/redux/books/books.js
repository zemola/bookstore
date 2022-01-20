const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7BNFfUW0dAlw3zogd5io/books/';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: { ...payload },
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const addBookToApi = (payload) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7BNFfUW0dAlw3zogd5io/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(addBook(payload));
    }
  });
};

export const removeBookFromApi = (payload) => async (dispatch) => {
  await fetch(`${url}${payload}`, {
    method: 'DELETE',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch(removeBook(payload));
};

export const getBookFromApi = () => async (dispatch) => {
  const request = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7BNFfUW0dAlw3zogd5io/books');
  const response = await request.json();
  dispatch(getBook(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);// eslint-disable-line
      case FETCH_BOOK:
        return Object.entries(action.payload).map(([key, value]) => {
          const [book] = value;
          return {
            item_id: key,
            ...book,
          };
        });
      default:
        return state;
  }
};

export default reducer;
