import { Answer } from './Answer';

export class Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answers: Answer[] = [];
  isAnswered = false;
  isAnsweredCorrect: boolean;

  constructor(category: string, type: string, difficulty: string, question: string , correct_answer: string, incorrect_answers: string[]) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.answers.push(new Answer(correct_answer, true));
    incorrect_answers.forEach(x => {this.answers.push(new Answer(x, false)); });
    this.shuffle(this.answers);

  }
  // shuffles the answers, 'Fisher-Yates (aka Knuth) Shuffle'
  private shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
}
