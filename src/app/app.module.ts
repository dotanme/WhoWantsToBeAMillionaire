import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionsService } from './services/questions.service';
import { QuestionComponent } from './component/question/question.component';
import { DecodeHtmlStringPipe } from './pipes/decode-html-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    DecodeHtmlStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
