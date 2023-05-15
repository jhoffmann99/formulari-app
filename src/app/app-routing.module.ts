import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/pages/login/login.component';
import { NotFoundComponent } from './features/pages/not-found/not-found.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { ResetPasswordComponent } from './features/pages/reset-password/reset-password.component';
import { ForgotPasswordSuccessComponent } from './features/pages/forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './features/pages/forgot-password/forgot-password.component';
import { AddTemplateComponent } from './features/add-template/add-template.component';
import { AddCheckComponent } from './features/add-check/add-check.component';
import { ReplyCheckComponent } from './features/reply-check/reply-check.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    component: ForgotPasswordComponent,
  },
  {
    path: 'forgot-password-info',
    pathMatch: 'full',
    component: ForgotPasswordSuccessComponent,
  },
  { path: "template/add", component: AddTemplateComponent },
  { path: "check/add", component: AddCheckComponent },
  { path: "check/reply", component: ReplyCheckComponent},
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
