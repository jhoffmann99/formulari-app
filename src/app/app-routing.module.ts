import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCheckComponent } from './features/add-check/add-check.component';
import { AddTemplateComponent } from './features/templates/template-add/template-add.component';
import { ForgotPasswordSuccessComponent } from './features/forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { RegisterComponent } from './features/register/register.component';
import { ReplyCheckComponent } from './features/reply-check/reply-check.component';
import { ResetPasswordComponent } from './features/reset-password/reset-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CheckSubmittedComponent } from './features/check-submitted/check-submitted.component';
import { OverviewComponent } from './features/overview/overview.component';
import { TemplateComponent } from './features/templates/template/template.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { PremiumSubscriptionComponent } from './features/subscribe/premium-subscription/premium-subscription.component';
import { SubscriptionnComponent } from './features/subscribe/subscription/subscription.component';
import { ContactComponent } from './features/contact/contact.component';
import { ImprintComponent } from './features/imprint/imprint.component';
import { FaqComponent } from './features/faq/faq.component';
import { PrivacyComponent } from './features/privacy/privacy.component';
import { AgbComponent } from './features/agb/agb.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contact', component: ContactComponent },
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
  { path: 'dashboard', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'template', component: TemplateComponent, canActivate: [AuthGuard] },
  {
    path: 'template/add',
    component: AddTemplateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'subscription', component: SubscriptionnComponent },
  { path: 'subscription/plans', component: PricingComponent },
  { path: 'subscription/premium', component: PremiumSubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'check/add', component: AddCheckComponent, canActivate: [AuthGuard] },
  { path: 'check/reply/:checkId', component: ReplyCheckComponent },
  { path: 'check/submitted', component: CheckSubmittedComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'agb', component: AgbComponent },
  {path: 'faq', component: FaqComponent},
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
