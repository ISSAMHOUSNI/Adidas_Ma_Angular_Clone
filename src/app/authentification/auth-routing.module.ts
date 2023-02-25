import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { EmailverifivationComponent } from './emailverifivation/emailverifivation.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = 
[
  { path: '', component: AuthComponent,
  children:
  [
  { path: 'SignUp', component: RegisterComponent },
  { path: 'SignIn', component: LoginComponent},
  { path: 'ForgotPaswword', component: ForgotpasswordComponent },
  { path: 'EmailVerification', component: EmailverifivationComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
