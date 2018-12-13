import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';
import { QuestionsService } from '../../services/questions.service';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  indexQuestion = 0;
  selectedEntry;

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }
  checkAnswer(answerIndex) {
    if (this.selectedEntry > -1  && this.questions[this.indexQuestion] != null) {
      const answer = this.questions[this.indexQuestion].answers[answerIndex].isCorrect;
      this.questions[this.indexQuestion].isAnsweredCorrect = answer;
      const body = document.getElementById('answer' + this.selectedEntry);
      // body.classList.remove("className");
      if (answer) {
        body.classList.add('answer-correct');
      } else {
        body.classList.add('answer-incorrect');
      }
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
 }
}

}
