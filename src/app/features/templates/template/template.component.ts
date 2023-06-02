import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from '../../../core/services/check-replies';
import { TemplateService } from '../../../core/services/template.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  templates: Template[] = [];

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  createTemplate() {
    this.router.navigateByUrl('template/add');
  }

  deleteTemplate(uid: string) {
    this.templateService.delete(uid).subscribe({
      next: (result) => {
        this.initData();
        this.notificationService.success('Die Vorlage wurde gelöscht');
      },
      error: (error) => {
        this.notificationService.error('Beim Löschen der Vorlage ist ein Fehler aufgetreten');
      },
    });
  }
  initData() {
    this.templateService.findAll().subscribe({
      next: (result) => {
        this.templates = result.templates;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
