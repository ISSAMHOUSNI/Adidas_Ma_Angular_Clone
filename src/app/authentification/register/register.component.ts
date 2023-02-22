import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public sFireBase : FirebaseService){}
  ngOnInit() {
  }
  uCreate()
  {
    this.sFireBase.sCreateUser('admin@gmail.com','admin@2023');
  }
}
