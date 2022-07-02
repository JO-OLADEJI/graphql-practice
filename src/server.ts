import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { authors, books } from "./data";

const app: Express = express();

const model = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "greet",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello GraphQL",
      },
    }),
  }),
});

// middlewares
app.use(
  "/graphql",
  graphqlHTTP({
    schema: model,
    graphiql: true,
  })
);

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("graphql practice");
});

app.listen(3001, () => console.debug("⚡️ Server running . . ."));
