import { gql } from "@/__generated__";

export const GET_BOOKS = gql(`
  query GetBooks {
    books {
      title
      author
      id
    }
  }
`);

export const GET_BOOK = gql(`
  query GetBook($id: ID!) {
    book(id: $id) {
      title
      author
      id
    }
  }
`);

export const UPDATE_BOOK = gql(`
  mutation UpdateBook($id: ID!, $title: String!, $author: String!) {
    updateBook (id: $id, title: $title, author: $author) {
      book {
        author
        id
        title
        }
      code
      message
      success
      }
    }
`);
