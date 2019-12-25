const {gql, ApolloServer} = require('apollo-server');
const typeDefs= gql`
type Query{
    greeting: String
}`;
const resolvers = {
    Query: {
        greeting: () => "hola!"
    }
}
const server = new ApolloServer({typeDefs, resolvers}); 
server.listen({port:9000}).then((serverInfo) => console.log(serverInfo))
