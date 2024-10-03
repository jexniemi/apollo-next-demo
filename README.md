# Apollo GraphQL server + MongoDB example

A simple example of Apollo GraphQL server with MongoDB database.

## Instructions

Under /server directory, add config.env file with MongoDB connection string:

`ATLAS_URI=mongodb+srv://USER:PASSWORD@CLUSTER.ID.mongodb.net/?retryWrites=true&w=majority
PORT=5050`

Run server: `cd server && npm start`

Run client: `cd client && npm run dev`
