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

  checkReply: CheckReply = null;

  constructor(private checkService: CheckService) { }
  
  ngOnInit(): void {
    this.checkService.getInbox().subscribe(response => this.checkReplies = response);
  }

  loadChecks(selectedButton: string) {
    switch (selectedButton) {
      case 'menu-btn-eingang':
        this.loadInbox();
        break;
      case 'menu-btn-ausgang':
        this.loadOutbox();
        break;
    }
  }

  loadInbox() {
    this.checkService.getInbox().subscribe(response => {
      this.checkReplies = response;
    })
  }

  loadOutbox() {
    this.checkService.getOutbox().subscribe(response => {
      this.checkReplies = response;
    })
  }

  showDetails(uid: string) {
    this.checkReply = this.checkReplies.find(reply => reply.uid === uid);
  }
}

