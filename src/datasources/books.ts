import { Db } from "mongodb";

export default class BooksDataSource {
  private dbConnection: Db;

  constructor(dbConnection: Db) {
    this.dbConnection = dbConnection;
  }

  async getBooks() {
    const books = await this.dbConnection.collection("books").find().toArray();
    return books.map((document) => ({
      title: document.title,
      author: document.author,
      id: document._id.toString(),
    }));
  }

  async createBook(title: string, author: string) {
    const result = await this.dbConnection.collection("books").insertOne({
      title,
      author,
    });
    return result.insertedId.toString();
  }
}
