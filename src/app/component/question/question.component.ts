import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';
import { QuestionsService } from '../../services/questions.service';

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

  constructor(private questionService: QuestionsService ) {
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      this.isLoaded = true;
    });
  }
  checkAnswer(answerIndex) {
    if (this.selectedEntry > -1  && this.questions[this.indexQuestion] != null) {
      const answer = this.questions[this.indexQuestion].answers[answerIndex].isCorrect;
      this.questions[this.indexQuestion].isAnsweredCorrect = answer;
      const body = document.getElementById('answer' + this.selectedEntry);
      const DOM_img = document.createElement('img');
      if (answer) {
        body.classList.add('answer-correct');
        DOM_img.src = '/assets/Group.png';
      } else {
        body.classList.add('answer-incorrect');
        DOM_img.src = '/assets/Group 3.png';
      }
      body.insertBefore(DOM_img, body.firstChild);
      // body.appendChild(DOM_img);
      this.questions[this.indexQuestion].isAnswered = true;
    }
  }
  onSelectionChange(entry) {
    this.selectedEntry = entry;
}
nextQuestion() {
  if (this.questions[this.indexQuestion + 1] != null) {
    this.indexQuestion++;
    this.selectedEntry = -1;
  } else {
    this.isGameOver = true;
  }
}

resetGame() {
  this.isLoaded = false;
  this.questionService.getQuestions().subscribe(questions => {
    this.questions = questions;
    this.isLoaded = true;
    this.isGameOver = false;
  });
  this.indexQuestion = 0;
  this.selectedEntry = -1;
}

}
