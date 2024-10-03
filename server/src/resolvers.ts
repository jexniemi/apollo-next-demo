import { Resolvers } from "./generated/graphql";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
  Query: {
    books: async (_, __, context) => {
      const books = await context.dataSources.books.getBooks();
      return books;
    },
  },
  Mutation: {
    addBook: async (_, { title, author }, context) => {
      const newBook = { title, author };
      const insertedId = await context.dataSources.books.createBook(
        title,
        author
      );
      return {
        book: { ...newBook, id: insertedId },
        code: "200",
        message: "Book added successfully",
        success: true,
      };
    },
  },
};

export default resolvers;
