import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { CheckRecipientDto, CreateCheckRequestDto } from '../../core/services/createCheckRequstDto';
import { TemplateService } from '../../core/services/template.service';
import { CheckService } from './../../core/services/check.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.scss']
})
export class AddCheckComponent implements OnInit {

  templates: string[] = [];
  recipients: CheckRecipientDto[] = [];
  checkName: string = "";
  templateName: string = "";
  transmissionType: string = "E_MAIL";

  constructor(private checkService: CheckService, private templateService: TemplateService, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.templateService.findAll().subscribe(response => {
      this.templates = response.templates;
    })  
  }

  addCheck() {
    
    const dto: CreateCheckRequestDto = {
      name: this.checkName,
      templateName: this.templateName,
      transmissionType: this.transmissionType,
      recipients: this.recipients
    }

    this.checkService.createCheck(dto).subscribe(data => {
      console.log(data)
    });    
  }

  addRecipient(form: NgForm) {
    this.recipients.push(form.value);
  }
}
