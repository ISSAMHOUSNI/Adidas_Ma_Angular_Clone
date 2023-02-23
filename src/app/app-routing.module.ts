import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailverifivationComponent } from './authentification/emailverifivation/emailverifivation.component';
import { ForgotpasswordComponent } from './authentification/forgotpassword/forgotpassword.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';

const routes: Routes = 
[
  { path: 'SignIn', component: LoginComponent},
  { path: 'SignUp', component: RegisterComponent },
  { path: 'ForgotPaswword', component: ForgotpasswordComponent },
  { path: 'EmailVerification', component: EmailverifivationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
