import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";
import { AuthorType } from "./AuthorType";
import { Book, authors } from "../data";

export const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    authorId: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve: (currentBook: Book) =>
        authors.find((author) => author.id === currentBook.authorId),
    },
  }),
});
