import { Component } from '@angular/core';
import { TemplateService } from '../../core/services/template.service';
import { createTemplateRequestDto } from '../../core/services/createTemplateRequestDto';


@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent {

  constructor(private templateService: TemplateService){}

  addTemplate() {
    console.log("clicked")
    const dto: createTemplateRequestDto = {
      templateName: 'templateFromAngular',
      components: [
        {
          "type": "TEXT",
          "name": "vorname",
          "required": true,
          "description": "Wie ist dein Name?",
          "hint": "Name"
      },
      {
          "type": "NUMBER",
          "name": "Brutto-Jahresgehalt in Euro",
          "required": true,
          "description": "Wie hoch ist dein aktuelles Brutto-Jahresgehalt?",
          "hint": "Das Bruttogehalt steht auf deinem Gehaltsnachweis"
      }
      ]
    }
    this.templateService.createTemplate(dto).subscribe(data => {
      console.log(data)
    });
  }
}
