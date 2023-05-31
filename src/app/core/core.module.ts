import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FieldTypePipe } from './pipes/field-type.pipe';
import { NotificationComponent } from './components/notification/notification.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { UniversalAppInterceptor } from './utils/UniversalAppInterceptor';
import { OptionsPipe } from './pipes/options.pipe';

@NgModule({
  declarations: [
    FieldTypePipe,
    NotificationComponent,
    NavigationComponent,
    FooterComponent,
    OptionsPipe
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavigationComponent, FooterComponent, FieldTypePipe, OptionsPipe, NotificationComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalAppInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule {}
