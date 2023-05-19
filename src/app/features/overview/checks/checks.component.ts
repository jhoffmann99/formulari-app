import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckReply } from '../../../core/services/check-replies';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent {

  public activeButton = '';

  @Input()
  checks: CheckReply[] = [];
  

  @Output()
  checkSelected = new EventEmitter<string>();

  select(uid: string) {
 
    this.activeButton = uid;
    this.checkSelected.next(uid);
    
  }
}
