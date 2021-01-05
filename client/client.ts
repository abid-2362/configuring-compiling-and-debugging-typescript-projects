import { Question } from "../@types/Question";

((): void => {
  let questions: Question[] = [];

  async function init(): Promise<void> {
    const request = await fetch("/questions");
    questions = await request.json();
    console.log(questions);
  }

  init();
})();
