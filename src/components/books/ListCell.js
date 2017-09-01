import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BooksCellStyle.css';

class Book extends Component {
  render() {
    return (
      <li className="book_cell">
        <Link className="book" to={"/book/" + this.props.id}>
          <div className="book-image">
            <img src={this.props.image}/>
          </div>
          <div className="book_description">
            <h2>{this.props.author}</h2>
            <h3>{this.props.title}</h3>
          </div>
        </Link>
      </li>
    )
  }
}

export default Book;