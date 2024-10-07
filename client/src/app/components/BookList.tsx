"use client";
import { GET_BOOKS } from "@/apollo/queries/books";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Link</th>
        </tr>
      </thead>
      {data &&
        data.books &&
        data.books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <Link href={`/book/${book.id}`}>-</Link>
            </td>
          </tr>
        ))}
    </table>
  );
};

export default BookList;
