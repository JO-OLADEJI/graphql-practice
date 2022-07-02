import { GraphQLObjectType, GraphQLInt, GraphQLList } from "graphql";
import { books, authors } from "../data";

// types
import { AuthorType } from "./AuthorType";
import { BookType } from "./BookType";

const RootQueryType = new GraphQLObjectType({
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

export default RootQueryType;
