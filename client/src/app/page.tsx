import Image from "next/image";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 text-center">
        <h1 className="text-3xl">Books</h1>
        <div>
          <BookList />
        </div>
      </main>
      <footer className="row-start-3 mt-auto flex flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="http://localhost:4000/graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Apollo Sandbox
        </a>
      </footer>
    </div>
  );
}
