import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { ReplyCheckRequestDto } from '../../core/services/ReplyCheckRequestDto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { TemplateComponent, createTemplateRequestDto } from '../../core/services/templateRequestDto';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reply-check',
  templateUrl: './reply-check.component.html',
  styleUrls: ['./reply-check.component.scss'],
})
export class ReplyCheckComponent implements OnInit {
  templateComponents: TemplateComponent[] = [];
  templateName: string = 'Formular';
  uid: string = '';

  form: FormGroup = this.fb.group({
    uid: this.fb.control('', { nonNullable: false }),
    data: this.fb.array([]),
  });

  constructor(
    private checkService: CheckService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => of(params.get('checkId'))),
        switchMap((checkId: string) => {
          this.uid = checkId;
          return  this.checkService.getTemplateForCheckUid(checkId);
        }
        )
      )
      .subscribe((data) => {
        this.form.get('uid').setValue(this.uid);
        this.templateName = data.templateName;
        this.templateComponents = data.components;
        data.components.forEach(component => {
          this.addComponent(component);
        });
      });
  }

  get data(): FormArray {
    return this.form.get('data') as FormArray;
  }

  addComponent(component: TemplateComponent) {
    switch (component.type) {
      case 'TEXT':
        this.addTextField(component);
        break;
      case 'NUMBER':
        this.addNumberField(component);
        break;
      case 'DATE':
        this.addDateField(component);
        break;
    }
  }

  addTextField(component: TemplateComponent) {
    this.form.addControl(component.name, new FormControl('', {nonNullable: component.required}));
     this.fb.control('', {nonNullable: component.required})
    this.data.push(
      this.fb.group({
        type: 'TEXT',
        multiLine: component.multiLine,
        name: component.name,
        description: component.description,
        hint: component.hint,
        required: component.required,
        length: component.length,
      })
    );
  }

  addNumberField(component: TemplateComponent) {
    this.data.push(
      this.fb.group({
        type: 'NUMBER',
        name: component.name,
        description: component.description,
        hint: component.hint,
        required: component.required,
        min: component.min,
        max: component.max,
      })
    );
  }

  addDateField(component: TemplateComponent) {
    this.data.push(
      this.fb.group({
        type: 'DATE',
        name: component.name,
        description: component.description,
        hint: component.hint,
        required: component.required,
      })
    );
  }

  replyCheck(form) {
/*     const dto: ReplyCheckRequestDto = {
      uid: '8b56decf-bc5a-411c-bec7-7752b38615ac',
      data: [
        {
          name: 'vorname',
          type: 'TEXT',
          value: 'Jürgen',
        },
        {
          name: 'Brutto-Jahresgehalt in Euro',
          type: 'NUMBER',
          value: 70000,
        },
      ],
    };

    this.checkService.replyCheck(dto).subscribe((data) => {
      console.log(data);
    }); */
    console.log(form.value);
  }
}
