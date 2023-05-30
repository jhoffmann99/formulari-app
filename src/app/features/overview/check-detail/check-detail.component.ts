import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CheckReply } from '../../../core/services/check-replies';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.scss'],
})
export class CheckDetailComponent {
  @Input()
  check: CheckReply = null;

  @Output()
  reminder = new EventEmitter<string>();

  sendReminder() {
    this.reminder.emit(this.check.uid);
  }
}
