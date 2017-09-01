const booksData = require('./books.json')
const books = booksData.books

exports.getAll = function (req, res) {
    res.send(books);
};

exports.findById = (req, res) => {
    let book = books.find( (book) => {
        return book.id === Number(req.params.id)
    })

    res.send(book)
};