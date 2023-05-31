import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { CheckReply } from '../../core/services/check-replies';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  checkReplies: CheckReply[] = [];

  checkReply: CheckReply = null;

  constructor(private checkService: CheckService, private notificationService: NotificationService) { }
  
  ngOnInit(): void {
    this.checkService.getInbox().subscribe(response => {
      this.checkReplies = response;
      this.checkReply = null;
    });
  }

  loadChecks(selectedButton: string) {
    this.checkReplies = null;
    switch (selectedButton) {
      case 'menu-btn-eingang':
        this.loadInbox();
        break;
      case 'menu-btn-ausgang':
        this.loadOutbox();
        break;
      case 'menu-btn-archiv':
        this.loadArchived();
        break;
    }
    this.checkReply = null;
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

  loadArchived() {
    this.checkService.getArchived().subscribe(response => {
      this.checkReplies = response;
    })
  }

  showDetails(uid: string) {
    this.checkReply = this.checkReplies.find(reply => reply.uid === uid);
  }

  sendReminderMail(uid: string) {
    this.checkService.sendReminder(uid).subscribe(result => {
      this.notificationService.success('Eine Erinnerungsmail wurde versendet.');
    });
  }
}

