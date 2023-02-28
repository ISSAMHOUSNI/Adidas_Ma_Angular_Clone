import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import{AngularFireModule} from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './authentification/auth.component';
import { AuthModule } from './authentification/auth.module';
import { NotFoundComponent } from './erreurPages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InternalServerErrorComponent } from './erreurPages/internal-server-error/internal-server-error.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InternalServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
