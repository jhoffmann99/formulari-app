import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCheckComponent } from './features/add-check/add-check.component';
import { AddTemplateComponent } from './features/add-template/add-template.component';
import { ForgotPasswordSuccessComponent } from './features/forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { RegisterComponent } from './features/register/register.component';
import { ReplyCheckComponent } from './features/reply-check/reply-check.component';
import { ResetPasswordComponent } from './features/reset-password/reset-password.component';
import { AuthGuard } from './core/guards/auth.guard';


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
  { path: 'template/add', component: AddTemplateComponent, canActivate: [AuthGuard] },
  { path: 'check/add', component: AddCheckComponent, canActivate: [AuthGuard] },
  { path: 'check/reply/:checkId', component: ReplyCheckComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
