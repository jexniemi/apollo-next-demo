"use client";
import { GET_BOOK } from "@/apollo/queries/books";
import { useQuery } from "@apollo/client";

export default function Page({ params }: { params: { slug: string } }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: params.slug },
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col">
      <label>Title</label>
      <input value={data.book.title} className="input text-black"></input>
      <label>Author</label>
      <input value={data.book.author}></input>;
    </div>
  );
}
