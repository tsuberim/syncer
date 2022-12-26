import yargs from "yargs";

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

async function main() {


    // The GraphQL schema
    const typeDefs = `#graphql
        type Query {
            hello: String
        }
        `;

    // A map of functions which return data for the schema.
    const resolvers = {
        Query: {
            hello: () => 'world',
        },
    };

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);
}

if (require.main === module) {
    const argv = yargs.argv;
}