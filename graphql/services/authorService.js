const authorsDB = require('../../data/authors.json');

exports.AuthorService = {
    listAll: () => authorsDB.authors.data,
    findById: (id) => {
        return authorsDB.authors.data.find(author => author.id === id);
    },
    addAuthor: (author) => {
        const _author = {id: authorsDB.authors.data.length + 1, name: author.name };
        authorsDB.authors.data.push(_author);
        return _author;
    }
};