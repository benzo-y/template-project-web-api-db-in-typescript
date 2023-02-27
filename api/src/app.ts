import express from 'express';
import * as usersRouter from './routes/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter.router);

app.all('*', (req, res) => {
  res.send('404 Not Found');
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send('500 Internal Server Error');
  }
);

export default app;
