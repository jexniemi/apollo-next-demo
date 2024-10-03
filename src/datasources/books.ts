import { Db } from "mongodb";
import { Book } from "../generated/graphql";

const key = "books";

export default class BooksDataSource {
  private dbConnection: Db;

  constructor(dbConnection: Db) {
    this.dbConnection = dbConnection;
  }

  async getBooks(): Promise<Book[]> {
    const books = await this.dbConnection.collection(key).find().toArray();
    return books.map((document) => ({
      title: document.title,
      author: document.author,
      id: document._id.toString(),
    }));
  }

  async createBook(title: string, author: string) {
    const result = await this.dbConnection.collection(key).insertOne({
      title,
      author,
    });
    return result.insertedId.toString();
  }
}
