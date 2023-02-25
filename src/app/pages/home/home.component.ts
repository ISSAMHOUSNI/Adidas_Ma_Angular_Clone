import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private sFireBase: FirebaseService, private sRoute:Router){}
ngOnInit(): void {
  
}
uLogOut()
  {
    this.sFireBase.sSignOut();
    console.log("---------------------------- uLogOut Done ----------------------------");
    console.log("---------------------------- Return To Home Done ----------------------------");
    setTimeout(() => {
      this.sRoute.navigate(['/auth', 'SignIn']).then(
        ()=>
        {
          console.log("---------------------------- Redirect To SignIn  ----------------------------");
        },err =>
        {
          console.log("---------------------------- ERROR NAVIGATE  ----------------------------");
        }
        );
    }, 5000);
    
  }
}
