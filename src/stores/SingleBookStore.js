import alt from '../alt'
import SingleBookActions from '../actions/SingleBookActions'

class SingleBookStore {
  constructor() {
    this.book = {};

    this.bindListeners({
      getSingleBook: SingleBookActions.getSingleBook
    });
  }

  getSingleBook(book) {
    this.book = book;
  }
}

export default alt.createStore(SingleBookStore, 'SingleBookStore');
