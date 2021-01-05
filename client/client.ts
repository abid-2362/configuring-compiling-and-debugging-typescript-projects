import { Question } from '../@types/Question';

((): void => {
  let questions: Question[] = [];

  function generateRenderList(question: Question): string {
    return `
        <li class="list-group-item d-flex justify-content-between lh-conensed">
          <div>
            <h6 class="my-0">
              ${question.title}
            </h6>
            <small class="text-muted">${question.content}</small>
          </div>
        </li>
      `;
  }

  function render(): void {
    document.getElementById('Questions').innerHTML = questions
      .map(generateRenderList)
      .join('');
  }

  async function init(): Promise<void> {
    const request = await fetch('/questions');
    questions = await request.json();
    // eslint-disable-next-line no-console
    console.log(questions);
    render();
  }

  async function handleSubmitQuestionForm(e: any): Promise<void> {
    e.preventDefault();
    // eslint-disable-next-line
    const title: string = document.forms['QuestionForm'][0].value;
    // eslint-disable-next-line
    const content: string = document.forms['QuestionForm'][1].value;

    const request = await fetch(`/new?title=${title}&content=${content}`);
    const json = await request.json();

    questions = json.questions;
    render();
  }

  document
    .getElementById('QuestionForm')
    .addEventListener('submit', handleSubmitQuestionForm);

  init();
})();
