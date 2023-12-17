import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://apiwatzlee:Apiwatz8899@cluster0.icecmhn.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(connectionString, {
    useUnifiedTopology: true,
  });

export const db = client.db("xsurface");