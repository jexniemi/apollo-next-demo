import { Db, ObjectId } from "mongodb";
import { Book } from "../generated/graphql";

const key = "books";

export default class BooksDataSource {
  private dbConnection: Db;

  constructor(dbConnection: Db) {
    this.dbConnection = dbConnection;
  }

  async getBook(id: string): Promise<Book> {
    const document = await this.dbConnection
      .collection(key)
      .findOne({ _id: new ObjectId(id) });

    if (!document) {
      throw new Error("Book not found");
    }

    return {
      title: document.title,
      author: document.author,
      id,
    };
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

  async updateBook(id: string, title: string, author: string) {
    const result = await this.dbConnection.collection(key).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          author,
        },
      }
    );
    return result.modifiedCount > 0;
  }
}
