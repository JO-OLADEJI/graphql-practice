import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import { books, authors, Book, Author } from "../data";

// types
import { AuthorType } from "./AuthorType";
import { BookType } from "./BookType";

export const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      type: BookType,
      description: "a single book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: "list of all books",
      resolve: () => books,
    },
    author: {
      type: AuthorType,
      description: "a single author",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        authors.find((author) => author.id === args.id),
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "list of all authors",
      resolve: () => authors,
    },
  }),
});

export const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addBook: {
      type: BookType,
      description: "create a new book",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const { name, authorId } = args;
        const book: Book = { id: books.length + 1, name, authorId };
        books.push(book);
        return book;
      },
    },
    addAuthor: {
      type: AuthorType,
      description: "create a new author",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const { name } = args;
        const author: Author = { id: authors.length + 1, name };
        authors.push(author);
        return author;
      },
    },
  }),
});
