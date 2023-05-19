import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  private activeMenuButton = 'menu-btn-eingang';

  @Output()
  itemSelected = new EventEmitter<string>();

  select(button: string) {
    document
      .querySelector('#' + this.activeMenuButton)
      .classList.toggle('active');
    
    this.activeMenuButton = button;
    
      
      document
        .querySelector('#' + this.activeMenuButton)
        .classList.toggle('active');  
  
    this.itemSelected.next(button);
    
  }
}
