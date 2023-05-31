import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { createTemplateRequestDto } from '../../../core/services/templateRequestDto';
import { NotificationService } from '../../../core/services/notification.service';
import { TemplateService } from '../../../core/services/template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-template',
  templateUrl: './template-add.component.html',
  styleUrls: ['./template-add.component.scss'],
})
export class AddTemplateComponent {
  form: FormGroup = this.fb.group({
    templateName: this.fb.control('', { nonNullable: true }),
    components: this.fb.array([]),
  });

  constructor(
    private templateService: TemplateService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  get components(): FormArray {
    return this.form.get('components') as FormArray;
  }

  addComponent(type: string) {
    switch (type) {
      case 'TEXT':
        this.addTextField();
        break;
      case 'NUMBER':
        this.addNumberField();
        break;
      case 'DATE':
        this.addDateField();
        break;
      case 'TIME':
        this.addTimeField();
        break;
      case 'DATE_TIME':
        this.addDateTimeField();
        break;
      case 'YES_NO':
        this.addYesNoField();
        break;
        case 'SINGLE_CHOICE':
          this.addSingleChoiceField();
          break;
          case 'MULTIPLE_CHOICE':
          this.addMultipleChoiceField();
          break;
    }
  }
  addMultipleChoiceField() {
    this.components.push(
      this.fb.group({
        type: 'MULTIPLE_CHOICE',
        name: null,
        description: null,
        hint: null,
        required: true,
        options: null,
        minOptions: null,
        maxOptions: null
      })
    );
  }
  addSingleChoiceField() {
    this.components.push(
      this.fb.group({
        type: 'SINGLE_CHOICE',
        name: null,
        description: null,
        hint: null,
        required: true,
        options: null
      })
    );
  }
  addYesNoField() {
    this.components.push(
      this.fb.group({
        type: 'YES_NO',
        name: null,
        description: null,
        hint: null,
        required: true,
      })
    );
  }
  addDateTimeField() {
    this.components.push(
      this.fb.group({
        type: 'DATE_TIME',
        name: null,
        description: null,
        hint: null,
        required: true,
      })
    );
  }
  addTimeField() {
    this.components.push(
      this.fb.group({
        type: 'TIME',
        name: null,
        description: null,
        hint: null,
        required: true,
      })
    );
  }

  addTextField() {
    this.components.push(
      this.fb.group({
        type: 'TEXT',
        multiLine: false,
        name: null,
        description: null,
        hint: null,
        required: true,
        length: null,
      })
    );
  }

  addNumberField() {
    this.components.push(
      this.fb.group({
        type: 'NUMBER',
        name: null,
        description: null,
        hint: null,
        required: true,
        min: null,
        max: null,
      })
    );
  }

  addDateField() {
    this.components.push(
      this.fb.group({
        type: 'DATE',
        name: null,
        description: null,
        hint: null,
        required: true,
      })
    );
  }

  addTemplate() {
    const dto: createTemplateRequestDto = {
      name: this.form.get('templateName').value,
      components: this.components.getRawValue(),
    };
    this.templateService.createTemplate(dto).subscribe(
      (data) => {
        this.form.reset();
        this.notificationService.success('Die Vorlage wurde erstellt');
        this.router.navigateByUrl('template');
      },
      (error) => {
        this.notificationService.error('Es ist ein Fehler aufgetreten');
      }
    );
  }
}
