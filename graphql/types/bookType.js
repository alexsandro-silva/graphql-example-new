const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql");
const { AuthorService } = require("../services/authorService");

const bookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
        author: {
            type: require("./authorType").AuthorType,
            resolve: (book) => AuthorService.findById(book.authorId)
        }
    })
});

exports.BookType = bookType;