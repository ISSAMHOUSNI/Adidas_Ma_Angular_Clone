import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private sFirebase: AngularFireAuth) {}
  sLogIn(email: string, password: string) {
    this.sFirebase.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('tokenUSER', 'true');
        console.log(`USER ADD ${res}`);
      },
      (err) => {
        alert('FAILD ADD USER ERR');
      }
    );
  }
  sCreateUser(email: string, password: string) {
    this.sFirebase.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(`CREATE USER ${res}`);
        localStorage.setItem('tokenUSER', 'true');
      },
      (err) => {
        alert('CREATE USER ERR');
      }
    );
  }
  sSignOut() {
    this.sFirebase.signOut().then(
      (res) => {
        localStorage.clear();
        console.log(`LOG OUT ${res}`);
      },
      (err) => {
        alert('LOG OUT USER ERR');
      }
    );
  }
  sForgotPassword()
  {
    
  }
}
