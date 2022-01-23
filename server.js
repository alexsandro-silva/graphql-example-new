const express = require('express');
const expressGraphql = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = require('graphql');
const { RootQueryType } = require('./queries/rootQuery');
const { RootMutationType } = require('./mutations/rootMutation');

const app = express();

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

app.use('/graphql', expressGraphql({
    schema: schema,
    graphiql: true
}));

const port = 5002;

app.listen(port, () => console.log(`Server Running and Listening on port ${port}`));