import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from '../core/core.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, CoreModule, RouterModule],
  exports: [NavigationComponent, FooterComponent],
})
export class FeaturesModule {}
