import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import RootQueryType from "./types";

const app: Express = express();

// middlewares
app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: RootQueryType,
    }),
    graphiql: true,
  })
);

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("graphql practice");
});

app.listen(3001, () => console.debug("⚡️ Server running . . ."));
