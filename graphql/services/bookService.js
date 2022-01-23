const booksDB = require('../../data/books.json');

const bookService = {
    listAll: () => booksDB.books.data,
    findById: (id) => booksDB.books.data.find(book => book.id === id),
    findByAuthorId: (authorId) => {
        return booksDB.books.data.filter(book => book.authorId === authorId);
    },
    addBook: (book) => {
        const _book = { id: booksDB.books.data.length + 1, name: book.name, authorId: book.authorId }
        booksDB.books.data.push(_book);
        return _book;
    }
}

exports.BookService = bookService;