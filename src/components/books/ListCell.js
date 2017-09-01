import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BooksCellStyle.css';

class BookListCell extends Component {
  render() {

    const {
        id,
        image,
        author,
        title
    } = this.props;

    return (
      <li className="book-list-cell">
        <Link className="book" to={`/book/${id}`}>
          <div className="book-image">
            <img src={image}/>
          </div>
          <div className="book-description">
            <h2>{author}</h2>
            <h3>{title}</h3>
          </div>
        </Link>
      </li>
    );
  }
}

export default BookListCell;