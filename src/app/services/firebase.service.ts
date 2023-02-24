import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private sFirebase: AngularFireAuth) {}
  sSignIn(email: string, password: string) {
    this.sFirebase.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('userEmail',`${email}`);
        console.log(`USER LOGIN ${res}`);
      },
      (err) => {
        alert('FAILD ADD USER ERR');
      }
    );
  }
  sSignUp(email: string, password: string) {
    this.sFirebase.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(`USER SIGNUP ${res}`);
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
  sForgotPassword(email : string)
  {
    this.sFirebase.sendPasswordResetEmail(email).then(
      (res) => {
        console.log(`USER FORGOT PASS ${res}`);
        localStorage.setItem('FORGOTP_ASS', 'true');
      },
      (err) => {
        alert('USER FORGOT PASS ERR');
      }
    );
  }
  sEmailVerification(email : string)
  {
    this.sFirebase.sendPasswordResetEmail(email).then(
      (res) => {
        console.log(`USER Email Verification ${res}`);
        localStorage.setItem('EmailVerification', 'true');
      },
      (err) => {
        alert('USER Email Verification ERR');
      }
    );
  }
}
