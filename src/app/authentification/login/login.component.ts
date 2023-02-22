import { Component, OnInit } from '@angular/core';
import{faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faArrowRight=faArrowRight;
  constructor(public sFireBase : FirebaseService){}
  ngOnInit() {
    this.sFireBase.ontest();
  }
}
