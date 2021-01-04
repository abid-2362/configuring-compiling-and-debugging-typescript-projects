import * as express from 'express';

const port: string | number = process.env.port || 8000;

const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening the server on port ${port}`);
});
