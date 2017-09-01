import React, { Component } from 'react';
import ListCell from './ListCell';

import request from '../../utils/request';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.receivedBooks = [];
    this.state = {
      books: []
    };

    this.booksSearch = this.booksSearch.bind(this);
  }

  componentDidMount() {
    request('/api/all-books', (err, result) => {
      if (err) return;

      this.receivedBooks = result;

      this.setState({
        books: result
      })
    })
  }

  booksSearch(e) {
    let searchValue = null;

    const searchQuery = e.target.value.toLowerCase();
    const filteredBooks = this.receivedBooks.filter((book) => {
      searchValue = book.author.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1
    });

    this.setState({
      books: filteredBooks
    })
  }

  render() {
    return (
      <div className="books_block">
        <input type="text" onChange={this.booksSearch}/>
        <ul className="books_list">
          {
            this.state.books.map((book) => {
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
    )
  }
}

export default BooksList;