import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddTemplateComponent } from './templates/template-add/template-add.component';
import { ForgotPasswordSuccessComponent } from './forgot-password-success/forgot-password-success.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ReplyCheckComponent } from './reply-check/reply-check.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { CheckSubmittedComponent } from './check-submitted/check-submitted.component';
import { OverviewComponent } from './overview/overview.component';
import { MenuComponent } from './overview/menu/menu.component';
import { ChecksComponent } from './overview/checks/checks.component';
import { CheckDetailComponent } from './overview/check-detail/check-detail.component';
import { TemplateListComponent } from './templates/template-list/template-list.component';
import { TemplateComponent } from './templates/template/template.component';
import { PricingComponent } from './pricing/pricing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PremiumSubscriptionComponent } from './subscribe/premium-subscription/premium-subscription.component';
import { SubscriptionnComponent } from './subscribe/subscription/subscription.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FaqComponent } from './faq/faq.component';

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
    CheckSubmittedComponent,
    OverviewComponent,
    MenuComponent,
    ChecksComponent,
    CheckDetailComponent,
    TemplateListComponent,
    TemplateComponent,
    PricingComponent,
    CheckoutComponent,
    PremiumSubscriptionComponent,
    SubscriptionnComponent,
    ContactComponent,
    ImprintComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
  ],
  exports: [],
})
export class FeaturesModule {}
