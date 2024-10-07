import { MongoClient, ServerApiVersion } from "mongodb";

export const initDBConnection = async () => {
  const uri = process.env.ATLAS_URI || "";
  const mongoClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect the client to the server
    await mongoClient.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error(err);
  }

  let db = mongoClient.db("books");
  return { db, mongoClient };
};
