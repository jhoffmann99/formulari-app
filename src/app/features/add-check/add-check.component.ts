import { CreateCheckRequestDto } from '../../core/services/createCheckRequstDto';
import { CheckService } from './../../core/services/check.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.scss']
})
export class AddCheckComponent {
  constructor(private checkService: CheckService) {}

  addCheck() {
    console.log("add check");
    const dto: CreateCheckRequestDto = {
      name: 'Check templateFromAngular',
      templateName: 'templateFromAngular',
      transmissionType: 'E_MAIL',
      recipients: [
        {
          "firstName": "Jürgen",
          "lastName": "Hoffmann",
          "salutation": "MR",
          "email": "jhoffmann91@protonmail.com",
          "mobilePhone": "+4915202418359"
      },
      {
          "firstName": "Desiree",
          "lastName": "Hoffmann",
          "salutation": "MRS",
          "email": "dhoffmann@protonmail.com",
          "mobilePhone": "+4915202418359"
      }
      ]
    }

    this.checkService.createCheck(dto).subscribe(data => {
      console.log(data)
    });    
  }
}
