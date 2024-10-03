export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  __typename?: "Book";
  author: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};
