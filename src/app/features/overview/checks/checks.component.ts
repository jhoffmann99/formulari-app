import { Component, Input } from '@angular/core';
import { CheckReply } from '../../../core/services/check-replies';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent {
  @Input()
  checks: CheckReply[] = [];
  
}
