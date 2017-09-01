import React, { Component } from 'react';

import request from '../../utils/request'

class SingleBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        request('/api/book/' + this.props.match.params.id, (err, result) => {
            if (err) return;

            this.setState({
                book: result
            });
        });
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