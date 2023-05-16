import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { ForgotPasswordSuccessComponent } from './forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ReplyCheckComponent } from './reply-check/reply-check.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
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
  exports: [],
})
export class FeaturesModule {}
