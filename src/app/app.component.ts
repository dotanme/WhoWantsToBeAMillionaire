import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Score } from './models/score.model';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: Observable<number>;
  title = 'zoom';
  constructor(private store: Store<AppState>) {
    this.score = this.store.select('score');
  }
}
