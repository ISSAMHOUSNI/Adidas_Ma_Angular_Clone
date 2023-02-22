import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private sFireBase : FirebaseService){}
  ngOnInit() {

  }
  reactiveLogInForm = new FormGroup(
    {
      emailFireBase : new FormControl(null),
      passwordFireBase : new FormControl(null),
    }
    );
  faArrowRight=faArrowRight;
 


  

  uLogIn()
  {
    this.sFireBase.sSignIn(`${this.reactiveLogInForm.value['emailFireBase']}`,`${this.reactiveLogInForm.value['passwordFireBase']}`);
  }
  uLogOut()
  {
    this.sFireBase.sSignOut();
  }
 
}
