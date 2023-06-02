import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Template } from '../../../core/services/check-replies';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent {
  @Input()
  templates: Template[];

  @Output()
  delete = new EventEmitter<string>();

  deleteTemplate(uid: string) {
    this.delete.emit(uid);
  }
}
