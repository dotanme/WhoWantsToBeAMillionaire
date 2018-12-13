import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';
import { QuestionsService } from '../../services/questions.service';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ScoreActions from '../../actions/score.actions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[] = [];
  indexQuestion = 0;
  selectedEntry = -1;
  isLoaded = false;
  isGameOver = false;
  score: Observable<number>;

  constructor(private questionService: QuestionsService, private store: Store<AppState> ) {
    this.score = this.store.select('score');
  }

  ngOnInit() {
    // loads new question
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      this.isLoaded = true;
    });
  }
  checkAnswer(answerIndex) {
    // checks if the answer is correct or not
    if (this.selectedEntry > -1  && this.questions[this.indexQuestion] != null) {
      const answer = this.questions[this.indexQuestion].answers[answerIndex].isCorrect;
      this.questions[this.indexQuestion].isAnsweredCorrect = answer;
      // styling wrong or correct
      const body = document.getElementById('answer' + this.selectedEntry);
      const DOM_img = document.createElement('img');
      if (answer) {
        body.classList.add('answer-correct');
        this.store.dispatch(new ScoreActions.Increment({ amount: 10}));
        DOM_img.src = '/assets/Group.png';
      } else {
        body.classList.add('answer-incorrect');
        this.store.dispatch(new ScoreActions.Decrement({ amount: 5}));
        DOM_img.src = '/assets/Group 3.png';
      }
      body.insertBefore(DOM_img, body.firstChild);
      this.questions[this.indexQuestion].isAnswered = true;
    }
  }
  onSelectionChange(entry) {
    this.selectedEntry = entry;
}
nextQuestion() {
  // move to next question
  if (this.questions[this.indexQuestion + 1] != null) {
    this.indexQuestion++;
    this.selectedEntry = -1;
  } else {
    this.isGameOver = true;
  }
}

resetGame() {
  // resets the state of the game, load new questions
  this.isLoaded = false;
  this.questionService.getQuestions().subscribe(questions => {
    this.questions = questions;
    this.store.dispatch(new ScoreActions.Reset);
    this.isLoaded = true;
    this.isGameOver = false;
  });
  this.indexQuestion = 0;
  this.selectedEntry = -1;
}

}
