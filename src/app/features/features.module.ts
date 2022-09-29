import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from '../core/core.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, CoreModule, RouterModule, ReactiveFormsModule],
  exports: [NavigationComponent, FooterComponent],
})
export class FeaturesModule {}
