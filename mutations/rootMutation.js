const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, graphqlSync } = require("graphql");
const { AuthorService } = require("../graphql/services/authorService");
const { BookService } = require("../graphql/services/bookService");
const { AuthorType } = require("../graphql/types/authorType");
const { BookType } = require("../graphql/types/bookType");

const rootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                return BookService.addBook(args);
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                return AuthorService.addAuthor(args);
            }
        }
    })
});

exports.RootMutationType = rootMutationType