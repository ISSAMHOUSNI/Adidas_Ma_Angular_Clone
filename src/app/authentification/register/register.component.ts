import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public sFireBase : FirebaseService){}
  reactiveSignUpForm = new FormGroup(
    {
      emailFireBase : new FormControl(null),
      passwordFireBase : new FormControl(null),
    }
    );
  ngOnInit() {
  }
  uCreate()
  {
    this.sFireBase.sSignUp(`${this.reactiveSignUpForm.value['emailFireBase']}`,`${this.reactiveSignUpForm.value['passwordFireBase']}`);
  }
}
