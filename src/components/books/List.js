import React, { Component } from 'react';
import ListCell from './ListCell';

import BooksActions from '../../actions/BooksActions';
import BooksStore from '../../stores/BooksStore';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = BooksStore.getState();

    this.onChangeStore = this.onChangeStore.bind(this);
    this.onBooksSearch = this.onBooksSearch.bind(this);
  }

  componentWillMount() {
    BooksActions.getBooks();
  }

  componentDidMount() {
    BooksStore.listen(this.onChangeStore);
  }

  componentWillUnmount() {
    BooksStore.unlisten(this.onChangeStore);
  }

  onChangeStore(state) {
    this.setState(state);
  }

  onBooksSearch(e) {
    const searchQuery = e.target.value.toLowerCase();

    BooksActions.searchBooks(searchQuery);
  }

  render() {
    const { books } = this.state;

    return (
      <div className="books-block">
        <input type="text" placeholder="search author" onChange={this.onBooksSearch}/>
        <ul className="books-list">
          {
            books.map((book) => {
              return (
                <ListCell
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  image={book.imageLink}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default BooksList;