import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { Author, books } from "../data";

export const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "book",
          fields: () => ({
            id: { type: GraphQLInt },
            name: { type: GraphQLString },
          }),
        })
      ),
      resolve: (currentAuthor: Author) =>
        books.filter((book) => book.authorId === currentAuthor.id),
    },
  }),
});
