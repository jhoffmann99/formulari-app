import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { CheckReply } from '../../core/services/check-replies';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  checkReplies: CheckReply[] = [];

  constructor(private checkService: CheckService) { }
  
  ngOnInit(): void {
    this.checkService.getInbox().subscribe(response => this.checkReplies = response);
  }

  loadChecks(selectedButton: string) {
    console.log(selectedButton)
  }
}
