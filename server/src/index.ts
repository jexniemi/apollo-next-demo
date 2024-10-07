import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import { readFileSync } from "fs";
import { initDBConnection } from "./db/connection.js";
import BooksDataSource from "./datasources/books.js";

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

export interface MyContext {
  dataSources: {
    books: BooksDataSource;
  };
}

// typeDefs = schema definition
// resolvers = graphql resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize the database connection
const { db, client } = await initDBConnection();

process.on("exit", () => {
  client.close();
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      dataSources: {
        // Create a new instance of our data source for every request!
        // (We pass in the database connection because we don't need
        // a new connection for every request.)
        books: new BooksDataSource(db),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
