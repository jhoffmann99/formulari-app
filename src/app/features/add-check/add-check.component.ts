import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
} from '@angular/forms';
import {
  CheckRecipientDto,
  CreateCheckRequestDto,
} from '../../core/services/createCheckRequstDto';
import { TemplateService } from '../../core/services/template.service';
import { CheckService } from '../../core/services/check.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { Template } from '../../core/services/check-replies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.scss'],
})
export class AddCheckComponent implements OnInit {
  templates: Template[] = [];
  recipients: CheckRecipientDto[] = [];
  checkName: string = '';
  templateUid: string = '';
  transmissionType: string = 'E_MAIL';

  constructor(
    private checkService: CheckService,
    private templateService: TemplateService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.templateService.findAll().subscribe((response) => {
      this.templates = response.templates;
    });
  }

  addCheck() {
    const dto: CreateCheckRequestDto = {
      name: this.checkName,
      templateUid: this.templateUid,
      transmissionType: this.transmissionType,
      recipients: this.recipients,
    };

    this.checkService.createCheck(dto).subscribe(
      (data) => {
        this.notificationService.success('Der Check wurde erstellt');
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        this.notificationService.error('Es ist ein Fehler aufgetreten');
      }
    );
  }

  addRecipient(form: NgForm) {
    this.recipients.push(form.value);
    form.resetForm();
  }

  isValid() {
    return (
      this.recipients.length > 0 &&
      this.templateUid &&
      this.templateUid != 'Bitte auswählen' &&
      this.checkName
    );
  }
}
