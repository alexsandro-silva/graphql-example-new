const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const { BookService } = require("../services/bookService");
const { BookType } = require("./bookType");

const authorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a single author',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => BookService.findByAuthorId(author.id)
        }
    })
});

exports.AuthorType = authorType;