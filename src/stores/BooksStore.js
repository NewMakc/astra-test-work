import alt from '../alt'
import BooksActions from '../actions/BooksActions'

class BooksStore {
  constructor() {
    this.books = [];
    this.cacheBooks = [];

    this.bindListeners({
      getBooks: BooksActions.getBooks,
      searchBooks: BooksActions.searchBooks
    });
  }

  getBooks(books) {
    this.books = books;
    this.cacheBooks = books;
  }

  searchBooks(search) {
    let searchValue = null;

    this.books = this.cacheBooks.filter((book) => {
      searchValue = book.author.toLowerCase();

      return searchValue.indexOf(search) !== -1
    });
  }
}

export default alt.createStore(BooksStore, 'BooksStore');
