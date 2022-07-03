import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { RootQueryType, RootMutationType } from "./types";

const app: Express = express();

// middlewares
app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: RootQueryType,
      mutation: RootMutationType
    }),
    graphiql: true,
  })
);

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("graphql practice");
});

app.listen(3000, () => console.debug("⚡️ Server running . . ."));
