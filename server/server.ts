import * as express from 'express';
import * as _ from 'lodash';
import * as path from 'path';
import { Question } from '../@types/Question';

const questions: Question[] = [
  {
    title: 'How to Login?',
    content: 'How do I login?',
    answerCount: 2,
  },
];

const port: string | number = process.env.port || 8000;

const app = express();

app.use(express.static('public'));

app.get('/questions', (req, res) => res.json(questions));

app.get('/main.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening the server on port ${port}`);
});
