import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faArrowRight=faArrowRight;
  constructor(private sFireBase : FirebaseService, private sRoute:Router){}
  ngOnInit() {

  }
  reactiveLogInForm = new FormGroup(
    {
      emailFireBase : new FormControl(null),
      passwordFireBase : new FormControl(null),
    }
    );
  uLogIn()
  {
    this.sFireBase.sSignIn(`${this.reactiveLogInForm.value['emailFireBase']}`,`${this.reactiveLogInForm.value['passwordFireBase']}`);
    console.log("---------------------------- uLogIn Done ----------------------------");
    // this.sRoute.navigate(['/', 'HOME']).then(
    //   ()=>
    //   {
    //     console.log("---------------------------- Redirect To EmailVerification  ----------------------------");
    //   },err =>
    //   {
    //     console.log("---------------------------- ERROR NAVIGATE  ----------------------------");
    //   }
    //   );
    
  }
  uLogOut()
  {
    this.sFireBase.sSignOut();
    console.log("---------------------------- uLogOut Done ----------------------------");
    console.log("---------------------------- Return To Home Done ----------------------------");
    this.sRoute.navigate(['/', 'SignIn']).then(
      ()=>
      {
        console.log("---------------------------- Redirect To SignIn  ----------------------------");
      },err =>
      {
        console.log("---------------------------- ERROR NAVIGATE  ----------------------------");
      }
      );

    
  }
 
}
