import React, { Component } from 'react';

import SingleBookActions from '../../actions/SingleBookActions';
import SingleBookStore from '../../stores/SingleBookStore';

class SingleBook extends Component {
  constructor(props) {
    super(props);

    this.state = SingleBookStore.getState();

    this.onChangeStore = this.onChangeStore.bind(this);
  }

  componentWillMount() {
    SingleBookActions.getSingleBook(this.props.match.params.id);
  }

  componentDidMount() {
    SingleBookStore.listen(this.onChangeStore);
  }

  componentWillUnmount() {
    SingleBookStore.unlisten(this.onChangeStore);
  }

  onChangeStore(state) {
    this.setState(state);
  }

  render() {
    const {
      imageLink,
      author,
      county,
      language,
      title,
      year,
      pages
    } = this.state.book;

    if (imageLink === undefined)
      return (
        <div>LOADING...</div>
      );

    return (
      <div className="single-book-page">
          <img src={`../${imageLink}`}/>
          <div>{`${title} - ${year} год, ${pages} страниц`}</div>
          <div>{`${author}, ${county}, ${language}`}</div>
      </div>
    );
  }
}

export default SingleBook