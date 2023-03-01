import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth.component';
import { NotFoundComponent } from './erreurPages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = 
[
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent,loadChildren: ()=>import('./authentification/auth.module').then(module => module.AuthModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
