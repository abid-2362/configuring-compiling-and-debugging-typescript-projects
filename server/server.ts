import * as express from 'express';
import * as path from 'path';
import { Question } from '../@types/Question';

const questions: Question[] = [
  {
    title: 'How to Login?',
    content: 'How do I login?',
    answerCount: 2,
  },
  {
    title: 'How to learn?',
    content: 'Which is the best platform for learning Digital skills?',
  },
  {
    title: 'Typescript',
    content: 'How does TypeCcript helps?',
  },
];

const port: string | number = process.env.port || 8000;

const app = express();

app.use(express.static('public'));

app.get('/questions', (req, res) => res.json(questions));

app.get('/main.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});

app.get('/new', (req, res) => {
  const question: Question = {
    title: (req.query.title as string) || '',
    content: (req.query.content as string) || '',
  };
  questions.push(question);

  res.json({
    questions,
    stauts: 'OK',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening the server on port ${port}`);
});
