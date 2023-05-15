import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from '../core/core.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordSuccessComponent } from './pages/forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { ReplyCheckComponent } from './reply-check/reply-check.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    ForgotPasswordSuccessComponent,
    ForgotPasswordComponent,
    AddTemplateComponent,
    AddCheckComponent,
    ReplyCheckComponent,
  ],
  imports: [CommonModule, CoreModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [NavigationComponent, FooterComponent],
})
export class FeaturesModule {}
