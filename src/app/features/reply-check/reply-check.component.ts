import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { ReplyCheckRequestDto } from '../../core/services/ReplyCheckRequestDto';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { TemplateComponent } from '../../core/services/templateRequestDto';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../core/services/notification.service';

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
    private router: Router,
    private fb: FormBuilder,
    private notificationService: NotificationService
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
      }, error => {
        this.router.navigateByUrl('/error')
      });
  }

  get data(): FormArray {
    return this.form.get('data') as FormArray;
  }

  addComponent(component: TemplateComponent) {
    const type = component.type;    
    
    this.addTextField(component);
  }

  addTextField(component: TemplateComponent) {
    this.data.push( this.fb.group({
      name: component.name,
      value: ''
    }))

  }

 
  replyCheck() {
    const dto: ReplyCheckRequestDto = {
      uid: this.uid,
      data: this.data.value
    };

    this.checkService.replyCheck(dto).subscribe((data) => {
      this.notificationService.success('Das Formular wurde erfolgreich abgesendet');
    }, error => {
      this.notificationService.error('Es ist ein Fehler aufgetreten');
    });
  }

  valueChanged(value, index) {    
    this.data.at(index).get('value').setValue(value);
  }
}
