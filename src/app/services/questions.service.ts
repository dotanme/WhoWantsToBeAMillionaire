import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  questionsUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
  constructor(private http: HttpClient) { }
  getQuestions(): Observable<Question[]> {
    // tslint:disable-next-line:prefer-const
    return this.http.get(this.questionsUrl)
      .pipe(map(res => res['results'].map(element =>
        new Question(element['category'],
                     element['type'],
                     element['difficulty'],
                     element['question'],
                     element['correct_answer'],
                     element['incorrect_answers'])
      )));
  }
}
