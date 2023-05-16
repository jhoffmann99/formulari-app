import { Component } from '@angular/core';
import { TemplateService } from '../../core/services/template.service';
import { createTemplateRequestDto } from '../../core/services/createTemplateRequestDto';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss'],
})
export class AddTemplateComponent {
  form: FormGroup = this.fb.group({
    templateName: this.fb.control('asdf', { nonNullable: true }),
    components: this.fb.array([]),
  });

  constructor(
    private templateService: TemplateService,
    private fb: FormBuilder
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
    }
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
        required: false
      })
    );
  }

  addTemplate() {
    console.log('clicked');
    const dto: createTemplateRequestDto = {
      templateName: 'templateFromAngular',
      components: [
        {
          type: 'TEXT',
          name: 'vorname',
          required: true,
          description: 'Wie ist dein Name?',
          hint: 'Name',
        },
        {
          type: 'NUMBER',
          name: 'Brutto-Jahresgehalt in Euro',
          required: true,
          description: 'Wie hoch ist dein aktuelles Brutto-Jahresgehalt?',
          hint: 'Das Bruttogehalt steht auf deinem Gehaltsnachweis',
        },
      ],
    };
    this.templateService.createTemplate(dto).subscribe((data) => {
      console.log(data);
    });
  }
}
