import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../core/services/check.service';
import { ReplyCheckRequestDto } from '../../core/services/ReplyCheckRequestDto';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { TemplateComponent } from '../../core/services/templateRequestDto';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../core/services/notification.service';
import { CheckDetails } from '../../core/services/CheckDetails';

@Component({
  selector: 'app-reply-check',
  templateUrl: './reply-check.component.html',
  styleUrls: ['./reply-check.component.scss'],
})
export class ReplyCheckComponent implements OnInit {
  templateComponents: TemplateComponent[] = [];
  templateName: string = 'Formular';
  checkDetails: CheckDetails;
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
          return this.checkService.getCheckDetails(checkId);

        }),
        switchMap((checkDetails: CheckDetails) => {
          this.uid = checkDetails.checkId;
          this.checkDetails = checkDetails;
          return  this.checkService.getTemplateForCheckUid(checkDetails.checkId);
        }
        )
      )
      .subscribe((data) => {
        this.form.get('uid').setValue(this.uid);
        this.templateName = data.name;
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
      this.router.navigateByUrl('check/submitted');
    }, error => {
      this.notificationService.error('Es ist ein Fehler aufgetreten');
    });
  }

  valueChanged(value, index) {  
    console.log(value)
    this.data.at(index).get('value').setValue(value);
  }

  validateMultiSelect(value, index, component: TemplateComponent) {
    console.log(value)
    if (value.length < component.minOptions && value.length > component.maxOptions) {
      this.notificationService.error('Es wurden zu wenige oder zu viele Optionen ausgewählt')
    }

    this.valueChanged(value, index);
  }
}
