const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
const { AuthorType } = require('../graphql/types/authorType');
const { AuthorService } = require('../graphql/services/authorService');
const { BookType } = require("../graphql/types/bookType");
const { BookService } = require("../graphql/services/bookService");

exports.RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields:() => ({
        author: {
            type: AuthorType,
            description: 'A Single Author',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => AuthorService.findById(args.id)
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Authors',
            resolve: () => AuthorService.listAll()
        },
        book: {
            type: BookType,
            description: 'A single book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => BookService.findById(args.id)
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => BookService.listAll()
        }
    })
});