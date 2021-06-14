import { Component } from '@angular/core';

import { AskMeService, VoiceRecognitionService } from '../../services';
import { Answer, QuestionRequest } from '../../types';

@Component({
  selector: 'app-ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss']
})
export class AskMeComponent {
  finishedAskingQuestion = false;
  foundLocation: boolean;
  lat: number;
  lng: number;
  datepicker: Date = new Date();

  constructor(
    readonly voiceRecognitionService: VoiceRecognitionService,
    private readonly askMeService: AskMeService
  ) {
    this.voiceRecognitionService.init();
  }

  startService(): void {
    this.finishedAskingQuestion = false;
    this.voiceRecognitionService.start();
  }

  stopService(): void {
    this.voiceRecognitionService.stop();
    this.finishedAskingQuestion = true;
    const questionRequest: QuestionRequest = {
      question: this.voiceRecognitionService.text.toLocaleLowerCase(),
      date: this.date.toLocaleString().slice(0, 10)
    }
    this.askMeService.getAnswer(questionRequest).subscribe(data => {
      this.lat = Number(data.latitude);
      this.lng = Number(data.longitude);
      this.foundLocation = this.lat !== 0 && this.lng !== 0;
    });
  }
}
