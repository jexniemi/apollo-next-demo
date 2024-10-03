"use client";
import { GET_BOOKS } from "@/apollo/queries/books";
import { Book } from "@/types/types";
import { useQuery } from "@apollo/client";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      {data.books.map((book: Book) => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
        </tr>
      ))}
    </table>
  );
};

export default BookList;
