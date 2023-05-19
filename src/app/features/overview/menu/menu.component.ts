import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public activeButton = 'menu-btn-eingang';

  @Output()
  itemSelected = new EventEmitter<string>();

  select(button: string) {
    
    this.activeButton = button;
    
    this.itemSelected.next(button);
    
  }
}
