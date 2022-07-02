import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('graphql-practice');
});

app.listen(3001, () => console.debug('⚡️ Server running . . .'));
