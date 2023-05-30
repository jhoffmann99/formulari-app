import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { createTemplateRequestDto } from '../../core/services/templateRequestDto';
import { NotificationService } from '../../core/services/notification.service';
import { TemplateService } from '../../core/services/template.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss'],
})
export class AddTemplateComponent {
  form: FormGroup = this.fb.group({
    templateName: this.fb.control('', { nonNullable: true }),
    components: this.fb.array([]),
  });

  constructor(
    private templateService: TemplateService,
    private fb: FormBuilder,
    private notificationService: NotificationService
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
    }
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
        required: false,
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
        required: false,
      })
    );
  }

  addTemplate() {
    const dto: createTemplateRequestDto = {
      templateName: this.form.get('templateName').value,
      components: this.components.getRawValue(),
    };
    this.templateService.createTemplate(dto).subscribe(
      (data) => {
        this.form.reset();
        this.notificationService.success('Die Vorlage wurde erstellt');
      },
      (error) => {
        this.notificationService.error('Es ist ein Fehler aufgetreten');
      }
    );
  }
}
