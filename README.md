# Apollo GraphQL server with MongoDB + Next.js client

A simple example of Apollo GraphQL server with MongoDB database, and a Next.js UI with Apollo client.

## Instructions

Under /server directory, add config.env file with MongoDB connection string:

`ATLAS_URI=mongodb+srv://USER:PASSWORD@CLUSTER.ID.mongodb.net/?retryWrites=true&w=majority
PORT=5050`

Run server: `cd server && npm start`

Run client: `cd client && npm run dev`

## Types

Types are automatically generated based on the GraphQL schema. In /client or /server, run `npm run compile` to generate types.
