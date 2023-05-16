import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FieldTypePipe } from './pipes/field-type.pipe';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FieldTypePipe,
    NotificationComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavigationComponent, FooterComponent, FieldTypePipe, NotificationComponent],
})
export class CoreModule {}
