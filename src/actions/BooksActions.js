import alt from '../alt'
import request from '../utils/request';

class BooksActions {
  getBooks() {
    return dispatch => {
      request('/api/all-books', (err, result) => {
        if (err) return;

        dispatch(result);
      });
    };
  }

  searchBooks(search) {
    return search;
  }
}

export default alt.createActions(BooksActions);