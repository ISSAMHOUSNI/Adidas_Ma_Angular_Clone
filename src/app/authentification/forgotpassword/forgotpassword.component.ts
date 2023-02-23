import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import{faAndroid} from '@fortawesome/free-brands-svg-icons'
// import{faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons'
import{faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  faChevronLeft = faChevronLeft;
  reactiveForgotPasswordForm = new FormGroup(
    {
      emailFireBase : new FormControl(null),
      
    }
    );
  
  constructor(public sFireBase : FirebaseService,private sRoute:Router){}
  uForgotPassword()
  {
    this.sFireBase.sForgotPassword(`${this.reactiveForgotPasswordForm.value['emailFireBase']}`);
    console.log("---------------------------- uForgotPassword() Done ----------------------------");
    this.sRoute.navigate([['/', 'SignIn']]);
  }

  
}
