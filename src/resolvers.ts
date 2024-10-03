import { Resolvers } from "./generated/graphql";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

/* const authors = [
  { name: "Kate Chopin", books: [books[0]] },
  { name: "Paul Auster", books: [books[1]] },
];
 */
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title, author };
      books.push(newBook);
      return {
        book: newBook,
        code: "200",
        message: "Book added successfully",
        success: true,
      };
    },
  },
};

export default resolvers;
