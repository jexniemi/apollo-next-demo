"use client";
import { GET_BOOK, UPDATE_BOOK } from "@/apollo/queries/books";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [updateBook, { data: mutationData, loading: updatingBook }] =
    useMutation(UPDATE_BOOK);

  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: params.slug },
  });

  useEffect(() => {
    if (mutationData) {
      alert("Book updated successfully");
    }
  }, [mutationData]);

  useEffect(() => {
    if (data) {
      setTitle(data.book.title);
      setAuthor(data.book.author);
    }
  }, [data]);

  if (updatingBook) return <p>Updating...</p>;
  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col m-10 mx-20">
      <label className="input input-bordered flex font-bold items-center gap-2">
        Title
        <input
          type="text"
          className="grow font-normal"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="input input-bordered font-bold flex mt-5 items-center gap-2">
        Author
        <input
          type="text"
          className="grow font-normal"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <button
        className="btn mt-5"
        onClick={async () => {
          updateBook({
            variables: {
              id: params.slug,
              title,
              author,
            },
          });
        }}
      >
        Save
      </button>
    </div>
  );
}
